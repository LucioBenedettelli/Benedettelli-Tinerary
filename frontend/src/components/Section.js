import Carrusel from "./Carrusel" 
import Header2 from "./Header2" 


const Section = () => {

    const items = [ 

        [
      
          {
            src: "./assets/paris.jpg",
            cityName: 'Paris'
           
          },
      
          {
            src: "./assets/nuevayork.jpg",
            cityName: 'New York'
          
          },
      
          {
            src: "./assets/puntacana.jpg",
            cityName: 'Punta Cana'
          },
      
          {
            src: "./assets/rio.jpg",
            cityName: 'Rio de Janeiro'
          }
        ],
      
      
        [
      
          {
            src: "./assets/londres.jpg",
            cityName: 'London'
          },
      
          {
            src: "./assets/orlando.jpg",
            cityName: 'Orlando'
          },
      
          {
            src: "./assets/cancun.jpg",
            cityName: 'Cancun'
          },
      
          {
            src: "./assets/santiago.jpg",
            cityName: 'Santiago de Chile'
           
          }
        ],
      
      
        [
      
          {
            src: "./assets/barcelona.jpg",
            cityName: 'Barcelona'
           
          },
      
          {
            src: "./assets/losangeles.jpg",
            cityName: 'Los Angeles'
            
          },
      
          {
            src: "./assets/miami.jpg",
            cityName: 'Miami'
          },
      
          {
            src: "./assets/bsas.jpg",
            cityName: 'Buenos Aires'
          }
      
        ]
        
      ];

    return (
        <>
        <Header2/>
            <Carrusel items={items}/>
        
        </>
        
    )
    }

export default Section