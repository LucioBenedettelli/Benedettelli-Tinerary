import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";

const Cities = (props) => {
  useEffect(() => {
    props.mostrarCiudades();
  }, []);

  if (props.cities.length === 0) {
    return (
      <div className="centrado">
        {" "}
        <div className="preloader"></div>
      </div>
    );
  }

  return (
    <>
      <div className="Browser">
        <input
          label="Search"
          placeholder="Enter city name"
          onChange={(e) => props.filtrarCiudades(e.target.value)}
        ></input>
      </div>
      {props.filter.length === 0 ? (
        <div
          className="noCity"
          style={{
            backgroundImage: `url('/assets/error.jpg')`,
          }}
        >
          <p className="error">Oh no! The requested city wasn't found!</p>
        </div>
      ) : (
        props.filter.map(({ _id, cityImage, cityName }) => {
          return (
            <Link
              to={`/itineraries/${_id}`}
              className="cityImage"
              style={{
                backgroundImage: `url('${cityImage}')`,
                textDecoration: "none",
              }}
            >
              <p>{cityName}</p>
            </Link>
          );
        })
      )}

      <Link className="logoDisplay" to="/">
        <img className="home" src="/assets/home.png" alt="home" />
      </Link>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.ciudad.cities,
    filter: state.ciudad.filter,
  };
};

const mapDispatchToProps = {
  mostrarCiudades: citiesActions.mostrarCiudades,
  filtrarCiudades: citiesActions.filtrarCiudades,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
