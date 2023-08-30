import React, { useEffect, useState } from 'react'
import "../css/navbar.css"
import { NavLink } from 'react-router-dom'


function Navbar(props) {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('userData'))
      setIsLogin(true)
  }, [])

  return (
    <div className='navdiv'>

      <div className="nav-content">
        <div className="logo"><NavLink to="/">Streak</NavLink></div>
        <nav>
          <ul>
            {props.login ? null : <li><NavLink to="/login" activeclassname="active">LOGIN</NavLink></li>}
            {/* <li><NavLink to="/login" activeclassname="active">LOGIN</NavLink></li> */}
            <li><NavLink to="/register" activeclassname="active">REGISTER</NavLink></li>
            <li><NavLink to="/help" activeclassname="active">HELP</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar