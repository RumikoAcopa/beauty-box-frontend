import {ADD_PRODUCTS, START_LOADING_PRODUCTS, SUCCESS_LOADING_PRODUCTS, ERROR_LOADING_PRODUCTS} from "../actions"


const defaultState = {
  loadingState: 'notStarted',
  list: []
}

export default function productsReducer(state = defaultState, action) {
  
  switch (action.type) {
    
    case START_LOADING_PRODUCTS:
      return { ...state, loadingState: 'inProgress' };
    
    case SUCCESS_LOADING_PRODUCTS:
      return { 
        list: action.payload,
        loadingState: 'successful'
      }
  
    default:
      return state

  }

}