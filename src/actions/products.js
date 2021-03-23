import {
  START_LOADING_PRODUCTS,
  SUCCESS_LOADING_PRODUCTS,
  SUCCESS_LOADING_PRODUCT_CATEGORIES,
  SUCCESSFULLY_CREATED_PRODUCT,
} from "./index";



export const fetchProducts = () => {

  return (dispatch) => {
    dispatch({ type: START_LOADING_PRODUCTS })
    
    fetch(`http://localhost:3001/products`, {
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
    dispatch({ type: START_LOADING_PRODUCTS, payload: productId })
  
    fetch(`http://localhost:3001/products/${productId}`)
      .then((res) => res.json())
      .then(( productJson ) => {
        dispatch({
          type: SUCCESS_LOADING_PRODUCT_CATEGORIES,
          payload: productJson
        })
        
      });
  };
};

export const createProduct = (formData) => {
  return (dispatch) => {
    return fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: formData })
    })
        .then(res => {
          if (res.ok) {
            return
            res.json()
          } else {
            return res.json().then(errors => Promise.reject(errors))
          }
        })

        .then(productJson => {
          dispatch({
            type: SUCCESSFULLY_CREATED_PRODUCT,
            payload: productJson,
          });
        })
    }   
  }

