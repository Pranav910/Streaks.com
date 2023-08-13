import React from 'react'
import '../css/mystreakscard.css'

function MyStreaksCard(props) {
    return (
        <div className='mystreakcard-main'>
            <div className="content">
                <p>{props.content}</p>
                <p>{props.index}</p>
            </div>

            <img src={props.src} />
        </div>
    )
}

export default MyStreaksCard