import React from 'react'
import "../styles/navbar.css";

export default function NavBar({inpValue, setInpValue, search}) {
    console.log(inpValue)
    return (
        <div className="navbar">
            <span className="heading">MOVIE-DB</span>
            <input
                onChange = {(e) => setInpValue(e.target.value)}
                className="search" 
                type="text" 
                placeholder="Search" 
                onKeyPress = {search} 
            />            
        </div>
    )
}
