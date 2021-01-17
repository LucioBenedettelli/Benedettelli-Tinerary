import Carrusel from "./Carrusel" 
import Header2 from "./Header2" 


const Section = () => {
    return (
        <>
        <Header2/>
        <h2 className="titulos">Popular Mytineraries</h2>
        <div className="container">
            <Carrusel />
        </div>
        </>
        
    )
    }

export default Section