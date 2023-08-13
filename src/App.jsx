import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Streaks from './components/Streaks'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import Error from "./components/Error"
import { React, useEffect, useState } from "react"
import Help from './components/Help'
import MenuIcon from '@mui/icons-material/Menu';
import Sidemenu from './components/Sidemenu'
import DrinkWater from './components/DrinkWater'
import MyStreaks from './components/MyStreaks'

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [shadowIntensity, setShadowIntensity] = useState(0)
  const [translate, setTranslate] = useState(-100)
  const [opacity, setOpacity] = useState(0)
  const [z_index, setZ_index] = useState(0)
  const location = useLocation()
  const handleScroll = () => {
    const currentPosition = window.scrollY || document.documentElement.scrollTop;
    setScrollPosition(() => {
      setShadowIntensity(currentPosition * 0.01)
      return currentPosition
    });

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function openMenu() {
    setZ_index(1000)
    setOpacity(1)
    setTranslate(0)
  }

  function closeMenu() {
    setZ_index(0)
    setOpacity(0)
    setTranslate(-100)
  }

  function closeSideMenu() {
    setZ_index(0)
    setTranslate(-100)
    setOpacity(0)
  }

  return (
    <div className="app-main">
      <div className='nav-container'>

        <div className="nav-comp">
          {location.pathname != "/streaks" ? <div className="menu">
            <button onClick={openMenu}><MenuIcon /></button>
          </div> : true}

          <Navbar /></div>
        <div className="sub-nav" style={{ boxShadow: `0px 2px 7px rgba(0, 0, 0, 0.313)`, opacity: `${shadowIntensity > 1 ? 1 : shadowIntensity}` }}></div>
      </div>

      <div className='side-main' style={{ opacity: `${opacity}`, zIndex: `${z_index}` }} onClick={closeSideMenu}>
      </div>

      <div className="side-menu" style={{ transform: `translate(${translate}%)` }}>
        <div className="side-menu-content" style={{ position: "relative", height: "100%" }}>
          <Sidemenu
            closeMenu={closeMenu}
          />
        </div>
      </div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="streaks" element={<Streaks />} >
        </Route>
        <Route path='my-streaks' element = {<MyStreaks/>}/>
        <Route path='drinking-water-streak' element={<DrinkWater />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Registration />} />
        <Route path='help' element={<Help />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App