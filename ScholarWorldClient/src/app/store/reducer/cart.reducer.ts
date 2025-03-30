import {CartState, initialCartState} from "../state/cart.state";
import * as CartActions from "../actions/cart.actions";


export const cartReducer = (state = initialCartState, action: CartActions.CartActions) => {
  switch (action.type) {
    case CartActions.ADD_TO_CART:
      return handleAddToCart(state, action);
    case CartActions.REMOVE_FROM_CART:
      return handleRemoveFromCart(state, action);
    default:
      return state;
  }
}


const handleAddToCart = (state: CartState, action: { payload: { productId: any; quantity: any; }; }) => {
  return {
    ...state,
    currentCartStatus: {
      productId: action.payload.productId,
      quantity: action.payload.quantity
    }
  }
}

const handleRemoveFromCart = (state: CartState, action: { payload: { productId: any; quantity: any; }; }) => {
  return {
    ...state,
    currentCartStatus: {
      productId: action.payload.productId,
      quantity: action.payload.quantity
    }
  }
}
