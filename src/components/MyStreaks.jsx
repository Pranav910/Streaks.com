import React from 'react'
import { useSelector } from 'react-redux'
import MyStreaksCard from './MyStreaksCard'
import '../css/mystreaks.css'
import { NavLink } from 'react-router-dom'

function MyStreaks() {

  const data = useSelector((state) => state.streaks)
  console.log(data)

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