import {START_LOADING_PRODUCTS, SUCCESS_LOADING_PRODUCTS} from "./index"


export const fetchProducts = () => {

  return (dispatch) => {
    dispatch({type: START_LOADING_PRODUCTS})
    
    fetch("http://localhost:3001/products", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((productsJson) => {
        dispatch({
          type: SUCCESS_LOADING_PRODUCTS,
          payload: productsJson})
        
      });
  }
}