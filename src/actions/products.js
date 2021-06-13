import { START_LOADING_PRODUCTS, SUCCESS_LOADING_PRODUCTS} from "./index";
import{START_LOADING_PRODUCT, SUCCESS_LOADING_PRODUCT} from "./index";
import{SUCCESSFULLY_CREATED_PRODUCT} from "./index";
//import { SUCCESS_LOADING_PRODUCT_CATEGORIES} from "./index";


export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({ type: START_LOADING_PRODUCTS })
    fetch(`http://localhost:3001/products`)
      .then((res) => res.json())
      .then((productsJson) => {
        dispatch({
          type: SUCCESS_LOADING_PRODUCTS,
          payload: productsJson
        });
      }); 
  };
};



export const fetchProduct = (product) => {
  return (dispatch) => {
    dispatch({ type: START_LOADING_PRODUCT, payload: product})
    fetch(`http://localhost:3001/products/${product}`)
      .then((res) => res.json())
      .then((productJson) => {
        dispatch({
          type: SUCCESS_LOADING_PRODUCT,
          payload: productJson
        })
        
      });
  };
};

export const createProduct = (formData) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/products", {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: formData })
      })
      .then(res => {
        if (res.ok) {
          return res.json()
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
};