import React, { useEffect, useState } from 'react'
import "../css/drinkingwater.css"
import LocalDrinkSharpIcon from '@mui/icons-material/LocalDrinkSharp';
import { useLocation, useNavigate } from 'react-router-dom';
import green_tick from '../images/green-tick.jpg'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Loader from './Loader';

function DrinkWater(props) {

    const fetchedData = useLocation()
    const [display, setDisplay] = useState("block")
    const [translate, setTranslate] = useState(0)
    const [opacity, setOpacity] = useState(1)
    const [position, setPosition] = useState("absolute")
    const [top, setTop] = useState(100)
    const [streaks, setStreaks] = useState([])
    let userStreaks = []
    let username = ''
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)

    function displayNone() {
        setTranslate(100)
        setOpacity(0)
        // setPosition("absolute")
        setTop(0)
        // setDisplay("none")
    }

    async function deleteStreak(e) {
        e.preventDefault()

        setLoader(true)

        if (localStorage.getItem('userData')) {
            let data = localStorage.getItem('userData')
            let parsedData = JSON.parse(data)
            userStreaks = parsedData.userstreaks
            username = parsedData.username
            userStreaks = userStreaks.filter(val => {
                if(fetchedData.state.id !== val.id)
                    return val
            })
        }

        // console.log(fetchedData.state.id)

        const res = await fetch('https://streaks-api-ckn9.onrender.com/delete-streak', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({username, userStreaks})
        })

        const resdata = await res.json()
        localStorage.setItem('userData', JSON.stringify(resdata))
        setLoader(false)
        navigate('/my-streaks')
    }

    return (
        <div className='drink-main'>
            {loader ? <Loader/> : null}
            <div className="heading"><h1><LocalDrinkSharpIcon fontSize="20px" style={{ marginRight: "10px" }} /> Drink Water Streak</h1></div>
            <div className="drink-content drink-container">
                <h1 ><span>⬤</span> Benifits of Drinking Water</h1>
                <div >
                    <p>1. It interferes with the digestion, absorption and transport of nutrients, filters toxins, helps with weight loss, fights acne, cellulite and stretch marks.</p>
                    <p>2. Drinking water properly allows the proper functioning of cells and the body in general.</p>
                    <p>3. Improves the intestine, increases immunity, reduces inflammation, irritation and headaches.</p>
                    <p>4. Drinking water is important, but drinking mineral water in more necessary and beneficial.</p>
                    <p>5. There are countless benefits of drinking water, suffice it to say that it is vital because more than 70% of the human body is made up of water.</p>
                </div>
            </div>

            <div className="drink-submain">
                <div className="drink-amount drink-container" style={{ transform: `translate(${translate}%)`, display: `${display}`, opacity: `${opacity}` }}>
                    <h1>How much glass of water did you had today?</h1>
                    <div className="amount-radio">
                        <div>
                            <input type="radio" id='bad' name='check' />
                            <label htmlFor="bad">2-3</label>
                        </div>
                        <div>
                            <input type="radio" id='moderate' name='check' />
                            <label htmlFor="moderate">4-6</label>
                        </div>
                        <div>
                            <input type="radio" id='good' name='check' />
                            <label htmlFor="good">7-9</label>
                        </div>
                        <div>
                            <input type="radio" id='very-good' name='check' />
                            <label htmlFor="very-good">10-12</label>
                        </div>
                    </div>
                    <button onClick={displayNone}>Submit</button>
                </div>

                <div className="streak-status drink-container" style={{ position: `${[position]}`, top: `${top}%` }}>
                    <h2>Streak Status</h2>
                    <p>Today's Streak : <span className='tick-span'><img src={green_tick} alt="" /></span></p>
                    <p>Time of creation : {fetchedData.state.time}</p>
                </div>
            </div>

            <div className="remove">
                <button onClick={deleteStreak}><HighlightOffIcon style={{ marginRight: '7px' }} />Delete Streak</button>
            </div>
        </div>
    )
}

export default DrinkWater