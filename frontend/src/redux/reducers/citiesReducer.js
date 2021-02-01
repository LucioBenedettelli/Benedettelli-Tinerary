const inicialState = {
  cities: [],
  filter: [],
};

const citiesReducer = (state = inicialState, action) => {
  switch (action.type) {
    case "TODAS_LASCIUDADES":
      return {
        ...state,
        cities: action.payload,
        filter: action.payload,
      };

    case "CIUDADES_FILTRADAS":
      return {
        ...state,
        filter: state.cities.filter(
          (city) =>
            city.cityName
              .toLowerCase()
              .indexOf(action.payload.toLowerCase().trim()) === 0
        ),
      };

    default:
      return state;
  }
};

export default citiesReducer;
