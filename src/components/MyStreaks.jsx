import React, { useEffect, useState } from 'react'
import MyStreaksCard from './MyStreaksCard'
import '../css/mystreaks.css'
import { NavLink} from 'react-router-dom'
import Loader from './Loader'

function MyStreaks() {

  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoader(true)

      
      const res = await fetch('https://streaks-api-ckn9.onrender.com/add-streaks', {
        method: 'GET',
        headers: {
          Accept : 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })

      const resdata = await res.json()
      console.log('my-streaks')
      
      if (res.status === 200) {
        setData(resdata.userstreaks)
        setLoader(false)
      }
      else if (res.status === 401){
        setLoader(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='mystreaks-main'>
      {loader ? <Loader/> : null}
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
                  id={val.id}
                  src={val.src}
                  statusLink={val.statusLink}
                  time={val.timeOfCreation.time}
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