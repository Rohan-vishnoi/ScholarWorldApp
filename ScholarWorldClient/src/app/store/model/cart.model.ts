export interface CartItemView {
  itemId: number;
  productId: number;
  productName: string;
  pricePerUnit: number;
  quantity: number;
  lineTotal: number;
}

export interface CartView {
  cartId: number;
  items: CartItemView[];
  total: number;
}

export interface CartItemAdd {
  productId: number;
  quantity: number;
}
