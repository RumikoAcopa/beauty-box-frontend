import {
  START_LOADING_PRODUCTS,
  START_LOADING_PRODUCT,
  SUCCESS_LOADING_PRODUCTS,
  SUCCESS_LOADING_PRODUCT_CATEGORIES
} from "./index";



//this fetch for index container...dbl check it's for the right file!
export const fetchProducts = () => {

  return (dispatch) => {
    dispatch({ type: START_LOADING_PRODUCTS })
    
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
          payload: productsJson
        })
        
      });
  }
}


export const fetchProductId = (productId) => {
  return (dispatch) => {
    dispatch({ type: START_LOADING_PRODUCT, payload: productId })
  
    fetch(`http://localhost:3001/products/${productId}`)
      .then((res) => res.json())
      .then(({ productCategoriesJson }) => {
        dispatch({
          type: SUCCESS_LOADING_PRODUCT_CATEGORIES,
          payload: productCategoriesJson
        })
        
      });
  };
};
