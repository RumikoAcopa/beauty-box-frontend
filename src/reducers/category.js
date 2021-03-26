import {
  SUCCESS_LOADING_PRODUCT_CATEGORIES,
  START_LOADING_PRODUCT,
  SUCCESSFULLY_CREATED_CATEGORIES
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
        productsLoaded: {
          ...state.productsLoaded,
          [action.payloaded.product.id]: "successful"
        },
        list: [
          ...state.list
            .filter(
              (category) => category.product_id !== action.payloaded.product.id
            )
            .concat(action.payload.categories)
        ]
      };
    
    case SUCCESSFULLY_CREATED_CATEGORIES:
      return {
        ...state,
        list: state.list.concat(action.payload)
      }
    default:
      return state
  }
}