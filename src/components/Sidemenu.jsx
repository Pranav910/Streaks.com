import React, { useState } from 'react'
import "../css/sidemenu.css"
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContactsIcon from '@mui/icons-material/Contacts';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';

function Sidemenu(props) {

  const [translate, setTranslate] = useState()

  function closeMenu() {
    props.closeMenu()
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
        <button onClick={closeMenu}><CloseIcon /></button>
      </div>
      <div className="line"></div>
      <div className="options">
        <NavLink to={"/"}>
          <div className='home hover'>
            <div className="home-logo">
              <HomeIcon />
            </div>
            <p>Home</p>
          </div>
        </NavLink>

        <NavLink to={'/my-streaks'}>
          <div className='ostreaks hover'>
            <div className="clock-logo">
              <AccessTimeIcon />
            </div>
            <p>My Streaks</p>
          </div>
        </NavLink>

        <NavLink>
          <div className='contact hover'>
            <div className="contact-logo">
              <ContactsIcon />
            </div>
            <p>Contact Us</p>
          </div>
        </NavLink>

      </div>
      <div className='logout'>
          <div className="line"></div>
        <NavLink>
          <div>
            <p>Logout</p>
          </div>
          <div className="logout-icon">
            <LogoutIcon />
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidemenu