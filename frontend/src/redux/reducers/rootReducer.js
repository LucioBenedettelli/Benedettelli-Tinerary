import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import ItineraryReducer from "./ItineraryReducer";

const rootReducer = combineReducers({
  ciudad: citiesReducer,
  itinerario: ItineraryReducer,
});

export default rootReducer;
