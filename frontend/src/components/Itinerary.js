import React, { useState } from "react";
import { connect } from 'react-redux'
import itineraryActions from '../redux/actions/itineraryActions'

const Itinerary = (item) => {
  console.log(item.item.idCity)
  const [visible, setVisible] = useState(false);
  const [comentario, setComentario] = useState({})
  const cityId = item.item.idCity
  const itineraryId= item.item._id
 

  const info = e => {
    const valor = e.target.value
    const campo = e.target.name
    setComentario({
        ...comentario,
       userName : "Lucio",
       imgProfile :"ffkfklf",
       itineraryId,
       cityId, 

        [campo]: valor
    })


  }

  
  



  
  return (
    <div className="cadaItinerary">
      <div className="userItinerary">
        <div
          className="userImg"
          style={{
            backgroundImage: `url(${item.item.imgProfile})`,
          }}
        ></div>

        <p className="nombreUsuario">{item.item.userName}</p>
      </div>
      <div className="bodyItinerary">
        <p className="titulito">{item.item.title}</p>

        <div className="parrafosItinerary">
          <p className="likes">
            <i className="fa fa-heart corazon mr-2"></i>
            {item.item.likes}
          </p>
          <p className="duracion">Duration: {item.item.hours} hours</p>
          <p>
            {Array(item.item.price).fill(
              <i className="fa fa-money-bill-alt billete"></i>
            )}
          </p>
        </div>
        <div className="cajaHashtags">
          {item.item.hashtag.map((item) => (
            <p className="hashtag">{item}</p>
          ))}
        </div>
        <div class="form-row text-center">
          <div class="col-8">
            <button
              className="btn btn-secondary text-center botonItinerary"
              onClick={() => setVisible(!visible)}
            >
              {!visible ? "View All" : "View Less"}
            </button>
            {!visible ? (
              <div>
                
              </div>
            ) : (
              <div className="d-flex justify-content-center activities column ">
                {item.item.activities.map((activity) => (
                  <div
                    className=" m-4"
                    style={{
                      backgroundImage: `url('${activity.imgActivity}')`,
                      width: "20vw",
                      height: "40vh",
                      backgroundSize: "contain",
                      color: "white",
                      fontWeight: "bold",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <h4 className= "titulo">{activity.titleActivity}</h4>{" "}
                  </div>
                ))}


{item.item.comments.map(comment =>{

  return (
    <div class="dialogbox">
    <div class="body">
      <span class="tip tip-left"></span>
      <div class="message">
      <span>{comment.comment}</span>
   
     
      </div>
    </div>  
    
  </div>
  )
})} 



        
      

              </div>
            
           
            )}



          </div>
        </div>
      </div>
      <div className="activities"></div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comment: state.itinerario.itinerary
  }
}

const mapDispatchToProps = {
  cargarComentarios: itineraryActions.addComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary) 
