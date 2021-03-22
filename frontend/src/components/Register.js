import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'
import authActions from '../redux/actions/authActions'
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2'
import axios from "axios"


const Register = (props) => {
    const [nuevoUsuario, setNuevoUsuario] = useState({
        name: '', lastname: '', username: '', email: '', password: '', URLpic: '', country: ''
    })
    const [errores, setErrores] = useState([])
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
        .get("https://restcountries.eu/rest/v2/all")
        .then(data => setCountries (data.data))
    },[]);

    const leerInput = e => {
        const valor = e.target.value
        const campo = e.target.name
        setNuevoUsuario({
            ...nuevoUsuario,
            [campo]: valor
        })
    }

    const validarUsuario = async e => {
        e.preventDefault()
        if (nuevoUsuario.username === '' || nuevoUsuario.password === '' || nuevoUsuario.name === '' ||
        nuevoUsuario.lastName === '' || nuevoUsuario.email === ''  || nuevoUsuario.URLpic === '' ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡All fields are required!',
              })

            return false
        }
        setErrores([])
        const respuesta = await props.newUser(nuevoUsuario)
        if (respuesta && !respuesta.success) {
            setErrores(respuesta.errores)
        } else {
            Swal.fire({
                icon: 'success',
                title: 'You have registered your user',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    const responseGoogle = async (response) => {
        console.log(response)
        if (response.error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Something has happened!',
              })
        } else {
            const respuesta = await props.newUser({
                name: response.profileObj.givenName,
                lastname: response.profileObj.familyName,
                username: response.profileObj.givenName,
                email: response.profileObj.email,
                password: response.profileObj.googleId,
                URLpic: response.profileObj.imageUrl,
                country: "USA"
            })
            if (respuesta && !respuesta.success) {
                setErrores(respuesta.errores)
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'You have registered your user',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        }
      }



   
    return (

        
        <div className="container-form">
            <div className="form">
            <h1 className= "textRegister">Create new account</h1>
            <div className="inputCenters">
            <input type="text" name="name" placeholder="Name" className="formRegister"
            onChange={leerInput} />
            <input type="text" name="lastname" placeholder="Lastname"
            onChange={leerInput} />
            <input type="text" name="username" placeholder="Username" 
            onChange={leerInput} />
            <input type="text" name="email" placeholder="Email"
            onChange={leerInput} />
            <input type="password" name="password" placeholder="password"
            onChange={leerInput} />
            <input type="text" name="URLpic" placeholder="Profile picture"
            onChange={leerInput} />
            <select className= "seleccionador" name="country" onChange={leerInput}>
                    {countries.map(country => <option>{country.name}</option>)}


                   </select>
                   </div>
                   <div className="botones">
            <button className="btn-grad" onClick={validarUsuario}>Create Account</button>

            <GoogleLogin className= "google"
    clientId="958442334135-59seulshhm4396e4ls8f3uugeggsenag.apps.googleusercontent.com"
    buttonText="Create Account"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
            </div>
            </div>

            

            <div className="errores">
                {errores.map(error => <h2>{error}</h2>)}
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        loggedUser: state.auth.loggedUser
    }
}
const mapDispatchtoProps = {
    newUser: authActions.newUser
}

export default connect(mapStateToProps, mapDispatchtoProps)(Register) 