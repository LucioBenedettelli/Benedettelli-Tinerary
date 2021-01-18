import {Carousel} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'

import ImgCarrousel from './ImgCarrousel'



const Carrusel = ({items}) =>{

     return (
       <>
       <h2 className="titulos text-center mb-2 mt-4">Popular Mytineraries</h2>
         <Carousel indicators={false}  fade={true}>
             {items.map((item, index)=>{
                return (
                <Carousel.Item key={index}>
                    <Container>
                        <Row className="justify-content-center">
                            <ImgCarrousel ImgCarrousel={item} /> 
                        </Row>
                    </Container>
                </Carousel.Item>)
              })} 
         </Carousel>
         </>
     )
}

export default Carrusel
