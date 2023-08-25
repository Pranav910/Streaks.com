import React, { useState } from 'react'
import "../css/sidemenu.css"
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContactsIcon from '@mui/icons-material/Contacts';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { NavLink, useNavigate } from 'react-router-dom';

function Sidemenu(props) {


  const navigate = useNavigate()

  function closeMenu() {
    props.closeMenu()
  }

  async function logout(e)
  {
    e.preventDefault()

    closeMenu()

    const res = await fetch('https://streaks-api-ckn9.onrender.com/user-logout', {
      method : 'GET',
      headers : {
        Accept : 'application/json',
        'Content-Type' : 'application/json'
      },
      credentials : 'include'
    })

    if (res.status === 202)
      navigate('/login')
  }

  return (
    <div className='menu-main'>

      <div className="close">
        <div className="profile">
          <div className="profile-img"></div>
          <div className="user">
            <p>Pranav910</p>
          </div>
        </div>
        <button onClick={closeMenu}><CloseIcon className='close-icon' style={{fontSize : "20px"}}/></button>
      </div>
      <div className="line"></div>
      <div className="options">
      <NavLink to={"/"} onClick={closeMenu}>
          <div className='home hover'>
            <div className="home-logo logo">
              <HomeIcon />
            </div>
            <p>Home</p>
          </div>
        </NavLink>

        <NavLink to={"/register"} onClick={closeMenu} className='hide'>
          <div className='register hover'>
            <div className="register-logo logo">
              <PersonAddAltIcon/>
            </div>
            <p>Register</p>
          </div>
        </NavLink>

        {!props.login ? <NavLink to={"/login"} onClick={closeMenu} className='hide'>
          <div className='login hover'>
            <div className="login-logo logo">
              <LoginIcon />
            </div>
            <p>Login</p>
          </div>
        </NavLink> : null}

        <NavLink to={'/my-streaks'} onClick={closeMenu}>
          <div className='ostreaks hover'>
            <div className="clock-logo logo">
              <AccessTimeIcon />
            </div>
            <p>My Streaks</p>
          </div>
        </NavLink>

        <NavLink onClick={closeMenu}>
          <div className='contact hover'>
            <div className="contact-logo logo">
              <ContactsIcon />
            </div>
            <p>Contact Us</p>
          </div>
        </NavLink>

      </div>
      {props.login ? <div className='logout'>
          <div className="line"></div>
          <button onClick={logout}>Logout</button>
      </div> : null}
    </div>
  )
}

export default Sidemenu