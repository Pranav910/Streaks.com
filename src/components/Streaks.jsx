import React, { useEffect, useState } from 'react'
import cards from "../data/Cardsdata"
import Cards from './Cards'
import "../css/streaks.css"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

function Streaks(props) {

  const [loader, setLoader] = useState(false)
  // const [userStreaks, setUserStreaks] = useState([])
  const location = useLocation()
  let userStreaks = []

  function showLoader(state) {
    setLoader(state)
  }

  function showToast(status) {

    if (status === 'success')
      toast.success('streak created', { position: toast.POSITION.TOP_CENTER })

    else
      toast.error('login to create streaks', { position: toast.POSITION.TOP_CENTER })
  }

  useEffect(() => {
    if(location.state)
    {
      if(location.state.loginStatus)
      {
        
        props.refresh()
      }
    }
  }, [])

  return (
    <div className="streaks-main">
      <div className="streaks-submain">
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
    </div>
  )
}

export default Streaks