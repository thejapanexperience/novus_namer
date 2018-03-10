import React from "react"
import {NavLink} from 'react-router-dom';

import MainButton from './MainButton'

const TabBar = () => {

  const activeStyle = {
    color: 'pink'
  }

  return (<div className="TabBar">
    <div className="tabBar">
      <MainButton to="/previous_sprints" text="Previous Sprints"/>
      <MainButton to="/new_sprint" text="New Sprint"/>
      <MainButton to="/about" text="About"/>
    </div>
  </div>)
}

export default TabBar
