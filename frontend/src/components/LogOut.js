import {NavLink} from'react-router-dom'

const logOut = () => {
    return (
        <NavLink to="/" className="item">
            {alert("Has salido exitosamente")}
        </NavLink>
    
    )
}

export default logOut;