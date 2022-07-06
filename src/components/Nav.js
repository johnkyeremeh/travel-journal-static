import React from "react"
import globeImage from "../icons8-asia-50-white.png"

export default function Nav(){
    return(
        <nav className="nav">
             <img src={globeImage} className="logo"/>
            <p className="navTitle">my travel journal.</p>
        </nav>)
}