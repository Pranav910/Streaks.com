import React, { useEffect, useState } from 'react'
import "../css/registration.css"
import registration from "../images/registration.jpg"
import { NavLink } from 'react-router-dom'

function Registration() {

  const [data, setData] = useState({
    email : '',
    password : '',
    cpassword : ''
  })

  async function submit(e)
  {
    e.preventDefault()

    const {email, password, cpassword} = data

    const res = await fetch('https://streak-api.vercel.app/new_registration', {
      method : 'post',
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        email, password, cpassword
      })
    })

    const resdata = await res.json()
    console.log(resdata.message)
  }

  function enterData(e)
  {
      const {name, value} = e.target

      setData(prev => {
        return ({
          ...prev,
          [name] : value
        })
      })
  }

  return (
    <div className="main">
      <h1>Create an Account</h1>
    <div className='register-div'>
      <form>
        <input value = {data.email} name="email" type="email" placeholder='Enter email' onChange={enterData}/>
        <input value = {data.password} name="password" type="password" placeholder='Enter password' onChange={enterData}/>
        <input value = {data.cpassword} name="cpassword" type="password" placeholder='Confirm password' onChange={enterData}/>
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