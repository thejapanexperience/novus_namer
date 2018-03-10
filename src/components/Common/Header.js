import React from "react"
import {NavLink} from 'react-router-dom';

const Header = () => {

  const activeStyle = {
    color: 'pink'
  }

  return (<div className="section0">
    <div className="navBox">
      <div className="nav1">
        <div className="nav1Text">
          <a className="link" href="http://richardmands.com" target="#">richardmands.com</a>
        </div>
        <div className="nav1Text2">
          <span>
            <NavLink className="NavLink1st" exact to="/" activeClassName="NavLinkActive">Sprint Namer</NavLink>
          </span>
        </div>
      </div>
    </div>
  </div>)
}

export default Header
