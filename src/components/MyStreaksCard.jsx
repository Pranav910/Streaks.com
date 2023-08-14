import React from 'react'
import '../css/mystreakscard.css'
import { NavLink } from 'react-router-dom'

function MyStreaksCard(props) {
    return (
        <div className='mystreakcard-main'>
            <div className="content">
                <p>{props.content}</p>
                <p>{props.index}</p>
            </div>

            <NavLink to = "/drinking-water-streak">
            <img src={props.src} />
            </NavLink>
        </div>
    )
}

export default MyStreaksCard