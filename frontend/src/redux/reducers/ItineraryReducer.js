
const inicialState = {
  itinerary: [],
};

const ItineraryReducer = (state = inicialState, action) => {
  switch (action.type) {
    case "MOSTRAR_ITINERARY":
      return {
        ...state,
        itinerary: action.payload,
      };

    default:
      return state;
  }
};

export default ItineraryReducer;