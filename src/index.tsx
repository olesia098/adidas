import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Toastify from "./components/alerts/Toastify";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/auth/AuthContextProvider";
import ProductsContextProvider from "./context/products/ProductsContextProvider";
import CartContextProvider from "./context/cart/CartContextProvider";
import FavoritesContextProvider from "./context/favorites/FavoritesContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <BrowserRouter>
      <ProductsContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <FavoritesContextProvider>
              <App />
              {/* <Toastify /> */}
            </FavoritesContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  </>
);
