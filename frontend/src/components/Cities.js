import React, { useEffect, useState } from "react"
import {NavLink, Link} from "react-router-dom"



const Cities = () => {
  const [cities, setCities] = useState([])
  const [searchCity, setSearchCity] = useState("")
  const [filterCity, setFilterCity] = useState([])
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    fetch('http://localhost:4000/api/cities')
    .then(response => response.json())
    .then(data => {setCities(data.respuesta)
    setFilterCity(data.respuesta)
    setLoading (false)}) 
}, [])

useEffect(() => {
  
  setFilterCity 
  (cities.filter (city => city.cityName.toLowerCase().indexOf(searchCity.toLowerCase().trim()) === 0))
    
},[searchCity])

if (loading === true || filterCity.length === 0) {

  return (
    <>
  <div className = "Browser">
<input label="Search" placeholder = "Enter city name" onChange={(e) => setSearchCity(e.target.value)}>
        </input>
        </div>
    {(loading === true) ? <div className= "centrado"> <div className = "preloader"></div> </div>  : <div className="noCity" style={{
    backgroundImage: `url('/assets/error.jpg')`}}><p className="error">Oh no! The requested city wasn't found!</p></div>}
    </>
  )
  }

  return (
    <>
    <div className = "Browser">
<input label="Search" placeholder = "Enter city name" onChange={(e) => setSearchCity(e.target.value)}>
        </input>
        </div>
        {
          filterCity.map(({_id, cityImage, cityName}) =>{

            return (
             <Link to={`/itineraries/${_id}`} className = "cityImage"
            style={{
              backgroundImage: `url('${cityImage}')`,
              textDecoration: "none"
                

               }}><p>{cityName}</p>


                
                </Link>
            )

          
          })

          
        }

<Link className = "logoDisplay" to = "/">
          <img className= "home" src = "/assets/home.png"  alt="home" />
          </Link>
        </>
  )


    
  
} 

export default Cities