import { combineReducers } from "redux";
import RestaurantsReducer from "./restaurantsReduces";

export default combineReducers({
  restaurantsState: RestaurantsReducer	
})