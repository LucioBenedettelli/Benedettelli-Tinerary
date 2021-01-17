const ImgCarrousel = ({item}) => {
    return (
        <>
        
        {item.map(({src, cityName}) => {
            
           
            return (
                
            <div className="elCarrousel col-5" style= {{
                backgroundImage : `url(${src})`,
                width: "18.5vw",
                height: "37vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"

            }}><p>{cityName}</p>
            
            </div>
            
        
            )
        })}
        </>
        )
    }


    export default ImgCarrousel

        