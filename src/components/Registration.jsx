import React from 'react'
import "../css/Registration.css"
import registration from "../images/registration.jpg"
import { NavLink } from 'react-router-dom'

function Registration() {
  return (
    <div className="main">
      <h1>Create an Account</h1>
    <div className='register-div'>
      <form>
        <input type="email" placeholder='Enter email' />
        <input type="password" placeholder='Enter password' />
        <input type="password" placeholder='Confirm password' />
        <button type='submit'>Register</button>
        <div className="or-login">
        <div className="or-div">
          <div className="line1"></div>
          <p>or</p>
          <div className="line2"></div>
        </div>
        <p className='have-acc'>Already have an account? <NavLink to = "/login">Login</NavLink></p>
      </div>
      </form>
      <div className="img-div">
        <img src={registration} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Registration