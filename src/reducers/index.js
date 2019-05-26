import { combineReducers } from "redux";
import RestaurantsReducer from "./restaurantsReduces";
import orderReducer from "./orderReducer";
import modalReducer from "./modalReducer";
import addressReducer from "./addressReduces";
import newOrderReducer from "./newOrderReducer";

export default combineReducers({
  restaurantsState: RestaurantsReducer,
  orderState: orderReducer,
  modalState: modalReducer,
  addressState: addressReducer,
  newOrderState: newOrderReducer
})