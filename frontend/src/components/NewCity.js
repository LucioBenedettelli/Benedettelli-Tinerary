import { connect } from 'react-redux'
import React, { useState } from 'react'
import allCityActions from "../redux/actions/allCityActions"

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
            alert("Nombre, apellido y nacionalidad son obligatorios")
            return false
        }
        props.newCity(newCity)
       
    }
    return (
        <div className="container">
            <h1>Cargar un nuevo autor</h1>
            <hr/>
            <div className="form">
            <input type="text" name="cityName" placeholder="Ingresá el nombre de la ciudad" onChange={leerInput} />
            <input type="text" name="cityImage" placeholder="Ingresá la imagen" onChange={leerInput}/>
            <button onClick={enviarInfo}>Enviar</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    newCity: allCityActions.newCity
}

export default connect(null, mapDispatchToProps)(NewCity)