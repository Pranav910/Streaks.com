import React from 'react'
import "../css/cards.css"
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStreak } from "../actions/index"
import {useDispatch} from 'react-redux'

function Cards(props) {

  // const data = useSelector(state => state.streaks)
  const dispatch = useDispatch()
  // console.log(data)

  function addData() {
    dispatch(createStreak({ descreption: props.content, id: props.cardIndex, src : props.src }))
  }

  return (
    <div className='cards'>
      <div className='imgdiv'>
        <img src={props.src} alt="" />
      </div>
      <div className='overlay'>
        <div className='content'>
          <div className='container'>
            <p>{props.content}</p>
            <button onClick={addData}>Create Streak</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards