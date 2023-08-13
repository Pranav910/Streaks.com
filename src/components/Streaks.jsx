import React from 'react'
import cards from "../data/Cardsdata"
import Cards from './Cards'
import "../css/streaks.css"

function Streaks() {
  return (
    <div className="streaks-main">
      <h1>Start Building Streaks</h1>
    <div className='streaks'>
      {
        cards.map((val, index) => {
          return (
            <Cards 
              key = {index}
              index = {index}
              content = {val.description}
              src = {val.img}
              link = {val.link}
              cardIndex = {val.index}
            />
          )}
        )
      }
    </div>

    <div className="info">
        <p>Start building your streaks</p>
      </div>
    </div>
  )
}

export default Streaks