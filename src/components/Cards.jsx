import React, { useEffect, useState } from 'react'
import "../css/cards.css"
import { createStreak } from "../actions/index"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Cards(props) {

  const [date, setDate] = useState(new Date())
  const [cardData, setCardData] = useState([])

  const dispatch = useDispatch()

  // console.log("second")

  function SetDay() {

    if (date.getDay() == "1")
      return "Monday"
    else if (date.getDay() == "2")
      return "Tuesday"
    else if (date.getDay() == "3")
      return "Wednesday"
    else if (date.getDay() == "4")
      return "Thursday"
    else if (date.getDay() == "5")
      return "Friday"
    else if (date.getDay() == "6")
      return "Saturday"
    else if (date.getDay() == "7")
      return "Sunday"

  }

  function setMonth() {

    if (date.getMonth() == "0")
      return "January"
    else if (date.getMonth() == "1")
      return "February"
    else if (date.getMonth() == "2")
      return "March"
    else if (date.getMonth() == "3")
      return "April"
    else if (date.getMonth() == "4")
      return "May"
    else if (date.getMonth() == "5")
      return "June"
    else if (date.getMonth() == "6")
      return "July"
    else if (date.getMonth() == "7")
      return "August"
    else if (date.getMonth() == "8")
      return "September"
    else if (date.getMonth() == "9")
      return "October"
    else if (date.getMonth() == "10")
      return "November"
    else if (date.getMonth() == "11")
      return "December"
  }

  function getTime() {
    return `${SetDay()}, ${setMonth()}, ${date.getFullYear()}-${date.getHours()}h : ${date.getMinutes()}m : ${date.getSeconds()}s`
  }


  async function addData(e) {

    e.preventDefault()

    setDate(new Date())

    const time = getTime()

    console.log(props.src)
    const res = await fetch('https://streaks-api-ckn9.onrender.com/add-streaks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({streakToAdd : 
        { descreption: props.content, id: props.cardIndex, src: props.src, statusLink: props.link, timeOfCreation: { time } }
      })
    })

    if (res.status === 401) {
      props.toast('error')
    }

    else if (res.status === 200) {

      // setCardData(prev => {
      //   return (
      //     [
      //       ...prev,
      //       { descreption: props.content, id: props.cardIndex, src: props.src, statusLink: props.link, timeOfCreation: { time } }
      //     ]
      //   )
      // })

      const resdata = await res.json()
      dispatch(createStreak(resdata.userstreaks))
      console.log(resdata.userstreaks)

      props.toast('success')
    }
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