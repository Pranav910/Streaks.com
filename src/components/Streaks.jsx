import React from 'react'
import cards from "../data/Cardsdata"
import Cards from './Cards'
import "../css/streaks.css"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Streaks() {

  function showToast(status) {

    if (status === 'success')
      toast.success('streak created', { position: toast.POSITION.TOP_CENTER })

    else 
      toast.error('login to create streaks', {position : toast.POSITION.TOP_CENTER})
  }

  return (
    <div className="streaks-main">
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