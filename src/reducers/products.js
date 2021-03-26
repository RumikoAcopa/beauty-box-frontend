import {
  START_LOADING_PRODUCTS,
  SUCCESS_LOADING_PRODUCT,
  SUCCESS_LOADING_PRODUCTS,
  SUCCESSFULLY_CREATED_PRODUCT,
  SUCCESS_LOADING_PRODUCT_CATEGORIES
} from "../actions";

const defaultState = {
  loadingState: "notStarted",
  list: [],
  product: {}
};


export default function productsReducer(state = defaultState, action) {

  switch (action.type) {
    case START_LOADING_PRODUCTS:
      return { ...state, loadingState: "inProgress" };

    case SUCCESS_LOADING_PRODUCT:
      return {
        ...state,
        loadingState: false,
        list: [
          ...state.list
            .filter(
              (product) => product.id !== action.payload.id
            )
            .concat(action.payload)
        ]
      };

    case SUCCESS_LOADING_PRODUCTS:
      const products = action.payload;
      return {
        ...state,
        loadingState: false,
        list: products
      };

    case SUCCESSFULLY_CREATED_PRODUCT:
      return {
        ...state,
        list: [...state.list.concat(action.payload)]
      };

    case SUCCESS_LOADING_PRODUCT_CATEGORIES:
      const foundProduct = state.list.find(
        (product) => product.id === action.payload.product.id
      );

      if (foundProduct) {
        return state;
      } else {
        return {
          ...state,
          list: state.list.concat(action.payload.product),
          productsloadingState: "successful"
        };
      }

    default:
      return state;
  }
}
