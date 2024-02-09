import { IProduct } from "../products/products.types";

export interface IFavoriteProduct extends IProduct {
  count: number;
  subPrice: number;
}

export interface IFavoriteState {
  products: IFavoriteProduct[];
  totalPrice: number;
}

export interface IFavoriteValues {
  favorite: IFavoriteState;
  getFavorites: () => void;
  addProductToFavorite: (product: IProduct) => void;
  isAlreadyInFavorit: (id: number) => boolean;
  deleteProductFromFavorite: (id: number) => void;
  clearFavorite: () => void;
}
