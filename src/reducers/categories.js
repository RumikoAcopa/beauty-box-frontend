import {
  SUCCESS_LOADING_PRODUCT_CATEGORIES,
  START_LOADING_PRODUCT
}  from '../actions'

const initialState = {
  productsLoaded: {},
  list: []
}

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_PRODUCT:
      return {
        ...state,
        productsLoaded: {...state.productsLoaded, [action.payload]: 'inProgress'},
      }
    case SUCCESS_LOADING_PRODUCT_CATEGORIES:
      return {
        productsLoaded: {...state.productsLoaded, [action.payloaded.product.id]: 'successful'},
        list: [...state.list.concat(action.payload.categories)]
      }
    default:
      return state
  }
}