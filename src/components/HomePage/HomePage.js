import React from "react"
import {NavLink, Route} from 'react-router-dom';

const HomePage = () => {

  const activeStyle = { color : 'pink' }

  return (<div>
      <div className="backgroundImage"/>
      <div className="mainContainer">

        <div className="section0">
          <div className="navBox">
            <div className="nav1">
              <div className="nav1Text">
                <a className="link"href="http://richardmands.com" target="#">richardmands.com</a>
              </div>
              <div className="nav1Text2">
                <span><NavLink className="NavLink" exact to="/" activeClassName="NavLinkActive">Sprint Namer</NavLink> </span>
                | <span><NavLink className="NavLink" to="/vote" activeClassName="NavLinkActive">Add Nominations</NavLink> </span>
                | <span><NavLink className="NavLink" to="/nominate" activeClassName="NavLinkActive">Vote</NavLink> </span>
                | <span><NavLink className="NavLink" to="/about" activeClassName="NavLinkActive">About</NavLink> </span>
              </div>
            </div>
          </div>
        </div>

        <div className="section1Box">
          <div className="section1">
            <h2 className="titleText">Title</h2>
            <p className="bodyText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

        </div>

      </div>
    </div>)
}

export default HomePage

{/* <div>
</div>

<Link to='/nominations'>
  <h2>Add Nominations</h2>
</Link>
<Link to='/vote'>
  <h2>Vote</h2>
</Link>
<Link to='/about'>
  <h2>About</h2>
</Link> */}
