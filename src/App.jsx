import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Streaks from './components/Streaks'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import Error from "./components/Error"
import { React, useEffect, useState } from "react"
import Help from './components/Help'
import MenuIcon from '@mui/icons-material/Menu';
import Sidemenu from './components/Sidemenu'
import DrinkWater from './components/DrinkWater'
import MyStreaks from './components/MyStreaks'
import Loader from './components/Loader'
import { useDispatch } from 'react-redux'
import { createStreak } from './actions'

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [shadowIntensity, setShadowIntensity] = useState(0)
  const [translate, setTranslate] = useState(-100)
  const [opacity, setOpacity] = useState(0)
  const [z_index, setZ_index] = useState(0)
  const [loginStatus, setLoginStatus] = useState(false)
  const [userName, setUserName] = useState('')
  const dispatch = useDispatch()
  const handleScroll = () => {
    const currentPosition = window.scrollY || document.documentElement.scrollTop;
    setScrollPosition(() => {
      setShadowIntensity(currentPosition * 0.01)
      return currentPosition
    });
  };


  function refresh()
  {
    setLoginStatus(true)
  }

  function logout()
  {
    setLoginStatus(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if(localStorage.getItem('userData')){
      setLoginStatus(true)
    }

    async function fetchData()
    {
      const res = await fetch('https://streaks-api-ckn9.onrender.com/authenticate', {
        method : 'GET',
        headers : {
          Accept : 'application/json',
          'Content-Type' : 'application/json'
        },
        credentials : 'include'
      })

      // if(res.status === )
    }
  }, [])

  function openMenu() {
    setZ_index(100)
    setOpacity(1)
    setTranslate(0)
  }

  function closeMenu() {
    setZ_index(0)
    setOpacity(0)
    setTranslate(-100)
  }

  return (
    <div className="app-main">
      <div className='nav-container'>

        <div className="nav-comp">
          <div className="menu">
            <button onClick={openMenu}><MenuIcon className='open-icon' /></button>
          </div>

          <Navbar login = {loginStatus}/></div>
        <div className="sub-nav" style={{ boxShadow: `0px 2px 7px rgba(0, 0, 0, 0.313)`, opacity: `${shadowIntensity > 1 ? 1 : shadowIntensity}` }}></div>
      </div>

      <div className='side-main' style={{ opacity: `${opacity}`, zIndex: `${z_index}` }} onClick={closeMenu}>
      </div>

      <div className="side-menu" style={{ transform: `translate(${translate}%)` }}>
        <div className="side-menu-content" style={{ position: "relative", height: "100%" }}>
          <Sidemenu
            closeMenu={closeMenu}
            logout = {logout}
            loginStatus = {loginStatus}
          />
        </div>
      </div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="streaks" element={<Streaks refresh = {refresh}/>} >
        </Route>
        <Route path='my-streaks' element={<MyStreaks />} />
        <Route path='my-streaks/drinking-water-streak' element={<DrinkWater />} />
        {/* {loginStatus ? null : <Route path='login' element={<Login />} />} */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Registration />} />
        <Route path='help' element={<Help />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App