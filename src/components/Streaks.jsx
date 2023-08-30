import React, { useEffect, useState } from 'react'
import cards from "../data/Cardsdata"
import Cards from './Cards'
import "../css/streaks.css"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

function Streaks() {

  const [loader, setLoader] = useState(false)
  // const [userStreaks, setUserStreaks] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const userStreaks = useSelector(state => state.streaks)

  // setIsAuthenticated(location.state.loginState)

  function showLoader(state) {
    setLoader(state)
  }

  function showToast(status) {

    if (status === 'success')
      toast.success('streak created', { position: toast.POSITION.TOP_CENTER })

    else
      toast.error('login to create streaks', { position: toast.POSITION.TOP_CENTER })
  }

  // async function fetchData() {
  //   const res = await fetch('/authenticate', {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     credentials: 'include'
  //   })

  //   const resdata = await res.json()

  //   if (res.status === 200) {
  //     setUserStreaks(resdata.userstreaks)
  //     setIsAuthenticated(true)
  //   }
  // }

  // if (!isAuthenticated) {
  //   fetchData()
  // }
  // else
  // {
  //   console.log('authenticated')
  //   console.log(userStreaks)
  // }

  return (
    <div className="streaks-main">
      {loader ? <Loader /> : null}
      <ToastContainer />
      <h1>Start Building Streaks</h1>
      <div className='streaks'>
        {
          cards.map((val, index) => {
            return (
              <Cards
                key={index}
                index={index}
                content={val.description}
                src={val.img}
                link={val.link}
                cardIndex={val.index}
                toast={showToast}
                showLoader={showLoader}
                id={val.index}
                // userStreaks = {isAuthenticated ? userStreaks : null}
              />
            )
          }
          )
        }
      </div>

      {/* <div className="info">
        <p>Start building your streaks</p>
      </div> */}
    </div>
  )
}

export default Streaks