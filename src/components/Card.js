import React from "react"

export default function Card(props){

    const {description, endDate, googleMapsUrl, imageUrl, location, startDate, title} = props.location
    return(
        <div className="card border-card" >
            <div>
                <img target="_blank" src={imageUrl} className="card-image" alt={imageUrl} />
            </div>

            <div className="card-details">
                <span className="card-location">{location}</span>
                <a href={googleMapsUrl} className="card-googlemapsurl">View on Google Maps</a>
                <h3 className="card-title">{title}</h3>
                <div className="card-dates"><span>{startDate}</span><span>{endDate}</span></div>
                
                <p className="card-description">{description}</p>
            </div>
        </div>

    )

}





















// export default function Card(props){

//     const {title, location, googleMapsUrl,startDate,endDate, description, imageUrl} = props.item
//     return(
//     <div className="card">
//         <div>
//             <img src={props.item.imageUrl} className="card-image"/>
//         </div>
       
    
        
//         <div className="card-details">
//         <span><img src="https://img.icons8.com/color/48/000000/marker--v1.png" className="location_icon"/></span>
//             <span className="card-location">{props.item.location}</span> 
//             <span class="card-googlemapsurl">{<a href={props.item.googleMapsUrl}>View on Google Maps</a>}</span> 
//             <h2 className="card-title">{props.item.title}</h2>
//             <h4 className="card-dates">{props.item.startDate} - {props.item.endDate}</h4>
//             <p className="card-description">{props.item.description}</p>
           
//         </div>
       
//     </div>)
// }