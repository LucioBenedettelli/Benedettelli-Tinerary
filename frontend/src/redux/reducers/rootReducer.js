import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import ItineraryReducer from "./ItineraryReducer";
import authReducer from "./authReducer";


const rootReducer = combineReducers({
  ciudad: citiesReducer,
  itinerario: ItineraryReducer,
  auth: authReducer
});

export default rootReducer;
