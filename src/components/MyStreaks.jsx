import React from 'react'
import { useSelector } from 'react-redux'
import MyStreaksCard from './MyStreaksCard'
import '../css/mystreaks.css'
import { NavLink, Routes, Route, Outlet, useNavigate} from 'react-router-dom'
import DrinkWater from './DrinkWater'

function MyStreaks() {

  const data = useSelector((state) => state.streaks)
  console.log(data)
  const navigate = useNavigate()

  return (
    <div className='mystreaks-main'>
      {data.length == 0 ?
        <div className="no-streaks-main">
          <div className='no-streaks'>
            <h2>No streaks added</h2>
            <NavLink to='/streaks'>Add Streaks</NavLink>
            
          </div>
        </div> :

        <div className="added-streaks-main">
          <div className='added-streaks'>
            {data.map((val, index) => {
              return (
                <MyStreaksCard
                  key={index}
                  content={val.descreption}
                  index={val.index}
                  src={val.src}
                  statusLink = {val.statusLink}
                  time = {val.timeOfCreation.time}
                />
              )
            })}
          </div>
          
        </div>
      }
    </div>
    
  )
}

export default MyStreaks