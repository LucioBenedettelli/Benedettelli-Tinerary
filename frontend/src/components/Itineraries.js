import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import itineraryActions from "../redux/actions/itineraryActions";
import Itinerary from "./Itinerary";

const Itineraries = (props) => {
  const id = props.match.params.id;
  const [itinerary, setItinerary] = useState({});

  useEffect(() => {
    let ciudades = props.cities.filter((city) => city._id == id);
    setItinerary(ciudades[0]);
    props.searchItineraries(id);
  }, [id]);

  return (
    <div>
      <div
        className="itineraries"
        style={{
          backgroundImage: `url('${itinerary.cityImage}')`,
        }}
      >
        <p>{itinerary.cityName}</p>
      </div>

      <div className="caja-flex">
        <div className="textoItineraries">
          <p>Avallable MYTineraries</p>
        </div>

        {props.itineraries.length === 0 ? (
          <div className="text-center ">
            <div className="d-flex justify-content-center titleNoItineraries">
              <h1>No Itineraries Yet!</h1>
            </div>
          </div>
        ) : (
          props.itineraries.map((item) => <Itinerary item={item} />)
        )}
      </div>

      <div className="imgRoutes">
        <Link to="/cities">
          <img className="flechita" src="/assets/flechita.png" alt="flechita" />
        </Link>

        <Link to="/">
          <img className="home2" src="/assets/home.png" alt="home" />
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.ciudad.cities,
    itineraries: state.itinerario.itinerary,
  };
};

const mapDispatchToProps = {
  searchItineraries: itineraryActions.mostrarID,
};

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
