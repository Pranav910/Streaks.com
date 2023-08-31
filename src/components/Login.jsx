import React, { useState } from 'react'
import login from "../images/login.jpg"
import "../css/login.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Loader from './Loader'
import { useDispatch } from 'react-redux'
import { createStreak } from '../actions'

function Login(props) {

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(false)

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

    setLoader(true)

    const { email, password } = data

    const res = await fetch('https://streaks-api-ckn9.onrender.com/user-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    })

    const resData = await res.json()

    if (res.status === 200) {
      setData({
        email: '',
        password: '',
      })
      setLoader(false)
      toast.success(resData.message, { position: toast.POSITION.TOP_CENTER })
      localStorage.setItem('userData', JSON.stringify(resData.userData))
      navigate('/streaks', {state : {loginStatus : true}})
    }
    if (res.status === 400) {
      setData({
        email: '',
        password: '',
      })
      toast.error(resData.message, { position: toast.POSITION.TOP_CENTER })
      setLoader(false)
    }
    if (res.status === 401) {
      setData({
        email: '',
        password: '',
      })
      toast.error(resData.message, { position: toast.POSITION.TOP_CENTER })
      setLoader(false)
    }

  }

  return (
    <div className="lmain">
      {loader ? <Loader /> : null}
      <ToastContainer />
      <div className="lmain-img">
      </div>
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