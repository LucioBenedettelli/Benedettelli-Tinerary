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
    setFilterCity(data.respuesta)})
    setLoading (false) 
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
    {loading === true ? (<h1>Loading</h1>) : (<h1>No hay nada</h1>)}
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
                

               }}><p>{cityName}</p>


                
                </Link>
            )
          })
        }
        </>
  )


    
  
} 

export default Cities