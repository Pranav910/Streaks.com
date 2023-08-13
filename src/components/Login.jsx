import React from 'react'
import login from "../images/login.jpg"
import "../css/login.css"
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div className="lmain">
      <h1>User Login</h1>
      <div className='subl-main'>
        <div className="limg-div">
          <img src={login} alt="" />
        </div>
        <div className="llogin-div">
          <form className="llogin-form">
            <input type="email" placeholder='Enter email' />
            <input type="password" placeholder='Enter password' />
            <button>Login</button>
            <div className="forgot-pass">
              <NavLink to="forgot-password">Forgot Password?</NavLink>
            </div>
            <div className="lor-div">
              <div className="lline-1"></div>
              <p>or</p>
              <div className="lline-2"></div>
            </div>
            <div className="lregister">
              <p>Don't have an account? <NavLink to = "/register">Register</NavLink></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login