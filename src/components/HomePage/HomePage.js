import React from "react"
import {Link} from "react-router-dom"

const HomePage = () => {
  return (<div>
    <h1>Novus Sprint Namer</h1>

    <Link to='/nominations'>
      <h2>Add Nominations</h2>
    </Link>
    <Link to='/vote'>
      <h2>Vote</h2>
    </Link>
    <Link to='/about'>
      <h2>About</h2>
    </Link>
  </div>)
}

export default HomePage
