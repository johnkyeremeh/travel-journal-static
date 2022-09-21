import React from "react"
import Card from "./Card"
import data from "../data"

export default function MainComponent(){

    const cardElements = data.map((location, index) => {
        return <Card key={index} location={location}/>
    })

    return (
    <div className="MainComponent">
        {cardElements}
    </div>)
}






















// import Card from "./Card";
// import data from '../data';


// export default function MainComponent(){
//     console.log(data)
//     const locations = data.map((item, idx) => <Card key={idx}  item={item} />)
//     return(
//     <div>
//         {locations}
//     </div>)
// }