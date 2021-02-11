import React, { useEffect, useState } from 'react'
import Section from "./components/Section";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import NavigationBar from "./components/NavigationBar";
import Cities from "./components/Cities";
import Itineraries from "./components/Itineraries";
import Register from "./components/Register";
import Login from "./components/Login";
import NewCity from "./components/NewCity";
import authActions from "./redux/actions/authActions"
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

const App = (props) => {
  const [reload, setReload] = useState(false)
  if (props.loggedUser) {
    var routes = <>
    <Switch>
      <Route path= "/itineraries/:id" component={Itineraries} />
      <Redirect to="/" />
      </Switch>
     
    </>

} else if (localStorage.getItem('token')) { 
  props.logFromLS(localStorage.getItem('token'))
  .then(respuesta => {
    if (respuesta === '/') setReload(!reload) 
  })

  } else {
    var routes = <>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Redirect to="/" />
      </Switch>
    </>
  }


  return (
    <>
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Section} />
        <Route path="/cities" component={Cities}/>
        <Route path="/newcity" component={NewCity}/>
        {routes}
      </Switch>  
    </BrowserRouter>
    </>
    )
    
  }


const mapStateToProps = state => {
  return {
    loggedUser: state.auth.loggedUser
  }
}

const mapDispatchToProps = {
  logFromLS: authActions.logFromLS
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
