import { combineReducers } from "redux";
import RestaurantsReducer from "./restaurantsReduces";
import ModalReducer from "./modalReducer";
import AddressReducer from "./addressReduces";
import NewOrderReducer from "./newOrderReducer";

export default combineReducers({
  restaurantsState: RestaurantsReducer,
  modalState: ModalReducer,
  addressState: AddressReducer,
  newOrderState: NewOrderReducer
})