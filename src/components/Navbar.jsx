import React, { useEffect, useState } from 'react'
import "../css/navbar.css"
import { NavLink } from 'react-router-dom'


function Navbar(props) {


  return (
    <div className='navdiv'>

      <div className="nav-content">
        <div className="logo"><NavLink to="/">Streak</NavLink></div>
        <nav>
          <ul>
            <li style={{display : props.login ? 'none' : 'inline-block'}}><NavLink to="/login" activeclassname="active">LOGIN</NavLink></li>
            <li><NavLink to="/register" activeclassname="active">REGISTER</NavLink></li>
            <li><NavLink to="/help" activeclassname="active">HELP</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar