import React, { useContext } from 'react'
import './Toggle.css'
import Sun from '../../Images/sun.png'
import Moon from '../../Images/moon.png'
import { ThemeContext } from '../../Context'

export default function Toggle() {
    const theme = useContext(ThemeContext);
    function handleClick(){
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className="t">
            <img src={Sun} alt="" className="t-icon" />
            <img src={Moon} alt="" className="t-icon" />
            <div onClick={handleClick} style={{left:theme.state.darkMode?0:"25px"}} className="t-btn"></div>
        </div>
    )
}
