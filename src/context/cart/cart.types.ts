import { IProduct } from "../products/products.types";

export interface ICartProduct extends IProduct {
  count: number;
  subPrice: number;
}

export interface ICartState {
  products: ICartProduct[];
  totalPrice: number;
}

export interface ICartValues {
  cart: ICartState;
  getCart: () => void;
  addProductToCart: (product: IProduct) => void;
  isAlreadyInCart: (id: number) => boolean;
  deleteProductFromCart: (id: number) => void;
  increaseCount: (id: number) => void;
  decreaseCount: (id: number) => void;
  clearCart: () => void;
}
