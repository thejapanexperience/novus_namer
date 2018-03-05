import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import morgan from 'morgan'
import bodyParser from 'body-parser'
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import {chalkSuccess} from '../tools/chalkConfig';
import config from '../webpack.config.dev';
import express from 'express';
import http from 'http';

// SET SERVER PORT
const PORT = process.env.PORT || 8001;
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/novus_namer`

// MONGOOSE
const mongoose = require('mongoose')
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, err => {
  console.log(err || `Mongo connected to ${MONGODB_URI}`);
})

const bundler = webpack(config);
const app = express();
const server = http.createServer(app);
console.log(chalkSuccess('Starting Express server...'));

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.use('/api', require('./routes/api'));
app.use(express.static('../src/*.html'));
app.use(historyApiFallback());
app.use(webpackHotMiddleware(bundler));
app.use(webpackDevMiddleware(bundler, {
    // Dev middleware can't access config, so we provide publicPath
    publicPath: config.output.publicPath,

    // These settings suppress noisy webpack output so only errors are displayed to the console.
    noInfo: false,
    quiet: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    },

    // for other settings see
    // http://webpack.github.io/docs/webpack-dev-middleware.html
}));
server.listen(PORT);
console.log(chalkSuccess('Express server is listening on port: ' + server.address().port));
