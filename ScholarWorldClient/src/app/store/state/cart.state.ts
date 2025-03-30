export interface CartState {
  currentCartStatus:{
    productId :string
    quantity:number
  }
}

export const initialCartState: CartState = {
  currentCartStatus:{
    productId:'',
    quantity:0
  }
}
