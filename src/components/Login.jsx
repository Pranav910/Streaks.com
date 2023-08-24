import React, { useState } from 'react'
import login from "../images/login.jpg"
import "../css/login.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

function Login() {

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  function enterData(e) {
    const { name, value } = e.target

    setData(prev => {
      return ({
        ...prev,
        [name]: value
      })
    })
  }

  async function userLogin(e) {
    e.preventDefault()

    const { email, password } = data

    const res = await fetch('https://streaks-api-ckn9.onrender.com/user-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    })

    const resData = await res.json()

    if (res.status === 200) { 
      navigate('/streaks')
      toast.success(resData.message, { position: toast.POSITION.TOP_CENTER }) 
  }
    if (res.status === 400)
      toast.error(resData.message, { position: toast.POSITION.TOP_CENTER })
    if (res.status === 401)
      toast.error(resData.message, { position: toast.POSITION.TOP_CENTER })

  }

  return (
    <div className="lmain">
      <ToastContainer />
      <div className="l-submain">
        <h1>User Login</h1>
        <div className='subl-main'>
          <div className="limg-div">
            <img src={login} alt="" />
          </div>
          <div className="llogin-div">
            <form className="llogin-form">
              <input value={data.email} name='email' type="email" placeholder='Enter email' onChange={enterData} />
              <input value={data.password} name='password' type="password" placeholder='Enter password' onChange={enterData} />
              <button onClick={userLogin}>Login</button>
              <div className="forgot-pass">
                <NavLink to="forgot-password">Forgot Password?</NavLink>
              </div>
              <div className="lor-div">
                <div className="lline-1"></div>
                <p>or</p>
                <div className="lline-2"></div>
              </div>
              <div className="lregister">
                <p>Don't have an account? <NavLink to="/register">Register</NavLink></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login