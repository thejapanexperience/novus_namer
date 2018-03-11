/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import Header from './Common/Header';
import TabBar from './Common/TabBar';
import HomePage from './HomePage/HomePage';
import NewSprintPage from './NewSprintPage/NewSprintPage';
import PreviousSprintsPage from './PreviousSprintsPage/PreviousSprintsPage';
import AboutPage from './AboutPage/AboutPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="backgroundImage" />
        <div className="mainContainer">
          <Header />
          <TabBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/sprints/new" component={NewSprintPage} />
            <Route path="/sprints/previous" component={PreviousSprintsPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
