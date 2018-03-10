import React from "react"
import {NavLink} from 'react-router-dom'

import MainButton from '../Common/MainButton'

const HomePage = () => {

  return (<div className="section1Box">
    <div className="section1">
      {/* <MainButton text="About" address="/about"/>
      <MainButton text="Nominate" address="/nominate"/>
      <MainButton text="Vote" address="/vote"/> */}

      <h2 className="titleText">Sprint Namer</h2>
      <p className="bodyText">
        richardmands.com presents 'Sprint Namer', an app that can help you to manage your sprint naming ceremonies.
      </p>

      <div className="imageSection">
        <div className="image">
          <img className="img" src={require('../../images/swanson.jpg')} alt="Cartoon"/>
        </div>
      </div>
    </div>
  </div>)
}

export default HomePage;
