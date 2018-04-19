import React from "react"
import {NavLink} from 'react-router-dom'

import MainButton from '../Common/MainButton'

const HomePage = () => {

  return (<div className="section1Box">
    <div className="section1">
      {/* <MainButton text="About" address="/about"/>
      <MainButton text="Nominate" address="/nominate"/>
      <MainButton text="Vote" address="/vote"/> */}

      <p className="bodyBold">richardmands.com</p>
      <h2 className="titleText">Sprint Namer</h2>
      <p className="bodyText">An app that can help you to manage your sprint naming ceremonies.</p>

      <div className="imageSection">
        <div className="image">
          <img className="img" src={require('../../images/swanson.png')} alt="Cartoon"/>
        </div>
      </div>
    </div>
  </div>)
}

export default HomePage;
