import {initialState, ProductState} from "../state/product.state";
import * as ProductActions from "../actions/product.actions";
import {getProductFromServerSuccess} from "../actions/product.actions";
export const productReducer = (state :ProductState = initialState, action: ProductActions.ProductActions) => {
  switch (action.type) {
    case ProductActions.GET_PRODUCT_FROM_SERVER_SUCCESS:
      return handleAddProduct(state, action);
    default:
      return state;
  }
}


export const handleAddProduct=(state: ProductState, action: getProductFromServerSuccess): ProductState => {
  return {
    ...state,
    productData: action.payload
  }
}
