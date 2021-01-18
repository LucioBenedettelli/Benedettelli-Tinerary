import {Col} from 'react-bootstrap'

const ImgCarrousel =({ImgCarrousel})=>{
console.log(ImgCarrousel)
    return (
        ImgCarrousel.map(({src,cityName})=>(
            <Col key={cityName} xs="5" lg="5" className="elCarrousel m-2 mt-1" style={{backgroundImage: `url(${src})`}}>
                <p>{cityName}</p>
            </Col>))
            )
}

export default ImgCarrousel

        