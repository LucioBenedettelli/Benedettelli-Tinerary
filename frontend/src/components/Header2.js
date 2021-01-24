import {NavLink} from "react-router-dom"

const Header2 = () => {
    return (
        <>
       <div className="fondo my-3 text-center">
        <h2 className = "mb-3">Find your perfect trip, designed by insiders who know and love their cities</h2>
        
        <NavLink to ="/cities">
        <img className= "imagen3 mb-3" src = "./assets/flecha.png"  alt="" />
        </NavLink>
       
        </div>
        </>
    )
}

export default Header2;