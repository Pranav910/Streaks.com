import React from 'react'
import "../css/cards.css"
import { createStreak } from "../actions/index"
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

function Cards(props) {

  const dispatch = useDispatch()
  const data = useSelector(state => state.streaks)

  function addData() {
    dispatch(createStreak({ descreption: props.content, id: props.cardIndex, src : props.src }))
    console.log(data)
    props.toast()
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