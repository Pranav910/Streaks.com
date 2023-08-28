import React, { useEffect, useState } from 'react'
import '../css/loader.css'

let loader_width = 0

export function runLoader(width)
{
    loader_width = width
}

function Loader() {
    
    console.log(loader_width)
    
    return (
        <div className="loader-main">
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    )
}

export default Loader