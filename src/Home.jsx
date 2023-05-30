import React, { createContext, useContext, useState } from 'react'
import { Theme } from './App'
import lightImg from '../images/bg-desktop-light.jpg'
import darkImg from '../images/bg-desktop-dark.jpg'
import './Home.css'
function HomePage(){
    const {darkTheme, setDarkTheme} = useContext(Theme)
    
    return (
        <div className={`background ${darkTheme ? "dark" : "light"}`}>
            <img src={darkTheme ? darkImg : lightImg} alt="" srcset="" className='imageBackground'/>
            <div className="container">
                <div className="titleRow">
                    <h1>TODO</h1>
                    <button><img src="" alt="" /></button>
                </div>
                <div className="input">
                    
                </div>
                <div className="todo">

                </div>
            </div>
        </div>
    )
}
export default HomePage