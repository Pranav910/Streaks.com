import React from 'react'
import '../css/mystreakscard.css'
import { useNavigate } from 'react-router-dom'

function MyStreaksCard(props) {

    const showStatus = useNavigate()

    function navigate()
    {
        showStatus(`${props.statusLink}`, {state : {time : props.time, id : props.id}})
    }

    return (
        <div className='mystreakcard-main'>
            <div className="overlay">
                {/* <p>{props.content}</p>
                <p>{props.index}</p> */}
            </div>

            <div className="navigate" onClick={navigate}>
                <img src= {props.src}/>
            </div>
        </div>
    )
}

export default MyStreaksCard