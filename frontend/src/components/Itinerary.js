import React, { useState } from "react";

const Itinerary = (item) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="cadaItinerary">
      <div className="userItinerary">
        <div
          className="userImg"
          style={{
            backgroundImage: `url(${item.item.imgProfile})`,
          }}
        ></div>
        <p>{item.item.userName}</p>
      </div>
      <div className="bodyItinerary">
        <p className="titulito">{item.item.title}</p>
        <div className="parrafosItinerary">
          <p className="likes">
            <i className="fa fa-heart corazon "></i>
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
          <div class="col-10">
            <button
              className="btn btn-secondary text-center botonItinerary"
              onClick={() => setVisible(!visible)}
            >
              {!visible ? "View All" : "View Less"}
            </button>
            {visible && (
              <h1>
                We are working on a possible improvement of the site. Thank you
              </h1>
            )}
          </div>
        </div>
      </div>
      <div className="activities"></div>
    </div>
  );
};

export default Itinerary;
