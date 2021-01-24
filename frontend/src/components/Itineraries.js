import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"


 const Itineraries = (props) => {
    const [city, setCity] = useState({})

    useEffect(() => {
        const id = props.match.params.id
        fetch('http://localhost:4000/api/itineraries/'+id)
        .then(respuesta => respuesta.json())
        .then(data => setCity(data.respuesta))
       
       

    }, [])


      return (
          
          <div>
              
        <div className = "itineraries"
            style={{
              
                backgroundImage: `url('${city.cityImage}')`,

                }}><p>{city.cityName}</p>

               

                
                
                </div>

                    <div className= "caja-flex">
                    <div className="textoItineraries">
                
                <p>Avallable MYTineraries</p>
                </div>

                 <div className= "titleNoItineraries">  
                 <h1>No Itineraries Yet!</h1>
                 </div>
                 

            
                </div>

                <div className = "imgRoutes">

                <Link to = "/cities">
                <img className= "flechita" src = "/assets/flechita.png"  alt="flechita" />
                </Link>

                <Link to = "/">
                <img className= "home2" src = "/assets/home.png"  alt="home" />
                </Link>
                
                </div>
                </div>
            
    )
    
}


export default Itineraries;