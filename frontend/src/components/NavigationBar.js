import { connect } from 'react-redux'
import React from 'react'
import {NavLink} from'react-router-dom'
import authActions from '../redux/actions/authActions'

const NavigationBar = (props) => {
    console.log(props)
    if (props.loggedUser) {
    
        var links = <>

        <div className="barrita">
                <div>
                <NavLink exact to="/" className="item1">Home</NavLink>             
                <NavLink to="/cities" className="item">Cities</NavLink>
                <NavLink to="/newcity" className="item">Add New City</NavLink>
                </div>

                  
                <a id="blanco" className="item3"  aria-current="page" href="/" onClick={()=> props.logoutUser()}>LOGOUT, {props.loggedUser.name}
                
       

              <img className="profile" src = {props.loggedUser.URLpic}/>
               
              
         
              <div>   
                <img className= "imagen2" style={{display: 'none'}} src = "./assets/logo.png"  alt="" />
                </div>
           
                </a>

                <div>
                <img className= "imagen2" style={{display: 'none'}} src = "./assets/logoMyTinerary.png"  alt="" />
                </div>

                <div className="logoMyTinerary">
               <h1>MyTinerary</h1>
                <img className ="imagen4" src = "./assets/3.png"  alt="" />
                </div>  

                </div>
               
              

                </>

    } else {
        
        var links = <>

                  
<div className="barrita">

                  <div>
       
                  <NavLink exact to="/" className="item1">Home</NavLink>             
                <NavLink to="/cities" className="item">Cities</NavLink> 
                <NavLink to="/register"  className="item">Register</NavLink>
                <NavLink to="/login"  className="item">Login</NavLink>
                
                <NavLink to="/newcity" className="item">Add New City <img className= "imagen2" src = "./assets/logo.png"  alt="" /></NavLink>
              </div>

             
             <div className="logoMyTinerary">
               <h1>MyTinerary</h1>
                <img className ="imagen4" src = "./assets/3.png"  alt="" />
                </div>  
            
            

</div>




              
           
                
                </>
    }
    return (
        
        <header>
                  
            
            <nav>
            

                {links}
        
       
            
    
              
                
               
                
               

                
              
               
               
            </nav>

            <div>
            <img className="imagen1" src = "./assets/2.jpg"   alt="" />
            
            </div>

            
      
        </header>
    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.auth.loggedUser
    }
  }
  
  const mapDispatchToProps = {
    logoutUser: authActions.logoutUser
  }

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
