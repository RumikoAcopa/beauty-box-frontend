import {
  ADD_PRODUCTS,
  START_LOADING_PRODUCTS,
  START_LOADING_PRODUCT,
  SUCCESS_LOADING_PRODUCTS,
  ERROR_LOADING_PRODUCTS,
  SUCCESS_LOADING_PRODUCT_CATEGORIES
} from "../actions";

const defaultState = {
  loadingState: "notStarted",
  list: []
};

export default function productsReducer(state = defaultState, action) {
  switch (action.type) {
    case START_LOADING_PRODUCTS:
      return { ...state, loadingState: "inProgress" };

    case SUCCESS_LOADING_PRODUCTS:
      return {
        list: action.payload,
        productsloadingState: "successful"
      };

    case SUCCESS_LOADING_PRODUCT_CATEGORIES:
      const foundProduct = state.list.find(
        (product) => product.id == action.payload.product.id
      );

      if (foundProduct) {
        return state;
      } else {
        return {
          ...state,
          list: state.list.concat(action.payload.product)
        };
      }

    default:
      return state;
  }
}
