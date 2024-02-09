import React, { createContext, useContext, useState } from "react";
import { IFavoriteState, IFavoriteValues } from "./favorite.types";
import { IAuth } from "context/auth/auth.types";
import { IProduct } from "context/products/products.types";
import { notify } from "../../components/alerts/Toastify";

const favoritesContext = createContext<IFavoriteValues | null>(null);

export function useFavoriteContext() {
  const context = useContext(favoritesContext);
  if (!context) {
    throw new Error("Забыли обернуть");
  }
  return context;
}

const INIT_STATE: IFavoriteState = {
  products: [],
  totalPrice: 0,
};

function getDataFromLS(): IFavoriteState {
  let data = JSON.parse(localStorage.getItem("favorite") || "null");
  if (!data) {
    data = {
      products: [],
      totalPrice: 0,
    };
  }
  return data;
}

const FavoritesContextProvider = ({ children }: IAuth) => {
  const [favorite, setFavorite] = useState(INIT_STATE);

  function getFavorites() {
    const data = getDataFromLS();
    setFavorite(data);
  }

  function addProductToFavorite(product: IProduct) {
    const data = getDataFromLS();
    data.products.push({ ...product, count: 1, subPrice: product.price });
    data.totalPrice = data.products.reduce(
      (acc, item) => acc + +item.subPrice ?? 0,
      0
    );
    localStorage.setItem("favorite", JSON.stringify(data));
    getFavorites();
    notify("Successfully added to favorite!");
  }

  function isAlreadyInFavorit(id: number) {
    const data = getDataFromLS();
    const isInFavorite = data.products.some((item) => +item.id! === id);
    return isInFavorite;
  }

  function deleteProductFromFavorite(id: number) {
    const data = getDataFromLS();
    data.products = data.products.filter((item) => +item.id! !== id);
    data.totalPrice = data.products.reduce(
      (acc, item) => acc + +item.subPrice ?? 0,
      0
    );
    localStorage.setItem("favorite", JSON.stringify(data));
    getFavorites();
    notify("Successfully renoved!");
  }

  function clearFavorite() {
    localStorage.removeItem("favorite");
    getFavorites();
  }

  return (
    <favoritesContext.Provider
      value={{
        getFavorites,
        favorite,
        addProductToFavorite,
        isAlreadyInFavorit,
        deleteProductFromFavorite,
        clearFavorite,
      }}
    >
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
