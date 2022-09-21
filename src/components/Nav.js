import React from "react"
import logoImage from "../icons8-asia-50.png"


export default function Nav(){

    return(
        <div className="Nav">
            <img src={logoImage} className="logo" alt="logo"/>
            <h4 className="navTitle">my travel journal.</h4>
        </div>
    )

}






















// import globeImage from "../icons8-asia-50-white.png"

// export default function Nav(){
//     return(
//         <nav className="nav">
//              <img src={globeImage} className="logo"/>
//             <p className="navTitle">my travel journal.</p>
//         </nav>)
// }