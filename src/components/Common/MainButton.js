import React from "react"
import {NavLink} from 'react-router-dom'

const MainButton = (props) => {

  return (<NavLink className="tabBarTab" to={props.to} activeClassName="tabBarTabActive">
    <div className="tabBarTabTitle">{props.text}</div>
  </NavLink>)
}

export default MainButton;
