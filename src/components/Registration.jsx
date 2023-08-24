import React, { useEffect, useState } from 'react'
import "../css/registration.css"
import registration from "../images/registration.jpg"
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

function Registration() {

  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: ''
  })

  async function submit(e) {
    e.preventDefault()

    const { username, email, password, cpassword } = data

    // https://streaks-api-ckn9.onrender.com

    const res = await fetch('/new_registration', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, email, password, cpassword
      })
    })

    const resdata = await res.json()

    console.log(res.status)

    if (res.status === 201)
      toast.success(resdata.message, { position: toast.POSITION.TOP_CENTER })

    if (res.status === 400)
      toast.error(resdata.message, { position: toast.POSITION.TOP_CENTER })

    if (res.status === 409)
      toast.error(resdata.message, { position: toast.POSITION.TOP_CENTER })

  }

  function enterData(e) {
    const { name, value } = e.target

    setData(prev => {
      return ({
        ...prev,
        [name]: value
      })
    })
  }

  return (
    <div className="main">
      <ToastContainer />
      <div className="register-submain">
      <h1>Create an Account</h1>
      <div className='register-div'>
        <form>
          <input type="text" value={data.username} name='username' placeholder='Enter Username' onChange={enterData} />
          <input value={data.email} name="email" type="email" placeholder='Enter email' onChange={enterData} />
          <input value={data.password} name="password" type="password" placeholder='Enter password' onChange={enterData} />
          <input value={data.cpassword} name="cpassword" type="password" placeholder='Confirm password' onChange={enterData} />
          <button type='submit' onClick={submit}>Register</button>
          <div className="or-login">
            <div className="or-div">
              <div className="line1"></div>
              <p>or</p>
              <div className="line2"></div>
            </div>
            <p className='have-acc'>Already have an account? <NavLink to="/login">Login</NavLink></p>
          </div>
        </form>
        <div className="img-div">
          <img src={registration} alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Registration