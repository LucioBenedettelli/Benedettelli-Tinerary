import { connect } from 'react-redux'
import React, { useState } from 'react'
import allCityActions from "../redux/actions/allCityActions"
import Swal from 'sweetalert2'

const NewCity = (props) => {
    const [newCity, setNewCity] = useState({
        cityImage: '', cityName: ''
    })
    const leerInput = (e) => {
        const campo = e.target.name
        const valor = e.target.value
        setNewCity({
            ...newCity,
            [campo]: valor
        })
    }

    const enviarInfo = e => {
        e.preventDefault()
        if (newCity.cityName=== '' || newCity.cityImage === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡City name and image are required!',
              })
            return false
        }
        props.newCity(newCity)
       
    }
    return (
        <div className="container">
            <h1 className="newcities">Load a new city</h1>
            <hr/>
            <div className="botonesCiudad">
            <div className="form">
            <input type="text" name="cityName" placeholder="Enter the city name" onChange={leerInput} />
            <input type="text" name="cityImage" placeholder="Enter the image" onChange={leerInput}/>
            <button className= "submit" onClick={enviarInfo}>Submit</button>
            </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    newCity: allCityActions.newCity
}

export default connect(null, mapDispatchToProps)(NewCity)