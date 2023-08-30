import React, { useEffect } from 'react'
import "../css/home.css"
import { NavLink } from 'react-router-dom'

function Home(props) {


  return (
    <div className='home-main'>
        <div className='cont'>
        <p>Good streaks helps you to maintain good habits, discipline, and a better life.</p>
        <p>Start buliding your streaks now.</p>
        <NavLink to= "streaks"><button>Bulid Streaks</button></NavLink>
        </div>
    </div>
  )
}

export default Home