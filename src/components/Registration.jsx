import React, { useEffect } from 'react'
import "../css/registration.css"
import registration from "../images/registration.jpg"
import { NavLink } from 'react-router-dom'

function Registration() {

  async function submit(e)
  {
    e.preventDefault()

    const res = await fetch('/register', {
      method : "POST",
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        FIRST_NAME : "Pranav"
      })
    })
  }

  return (
    <div className="main">
      <h1>Create an Account</h1>
    <div className='register-div'>
      <form>
        <input type="email" placeholder='Enter email' />
        <input type="password" placeholder='Enter password' />
        <input type="password" placeholder='Confirm password' />
        <button type='submit' onClick={submit}>Register</button>
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