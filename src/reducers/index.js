import { combineReducers } from "redux";
import productsReducer from "./products"
import categoryReducer from "./category"

export default combineReducers({
  products: productsReducer,
  categories: categoryReducer
});
