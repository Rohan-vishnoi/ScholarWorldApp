export interface ProductState {
  productData: {
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    rate: string;
    count: number;
    price: number;
  }
}
  export const initialState: ProductState = {
  productData: {
    title: '',
    description: '',
    imageUrl: '',
    category: '',
    rate: '',
    count: 1,
    price: 1
  }
}
