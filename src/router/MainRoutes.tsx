import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopPage from "../pages/shop/ShopPage";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import AddShopPage from "../pages/shop/AddShopPage";
import HomePage from "../pages/HomePage";
import { getUserRole } from "../helpers/functions";
import EditShopPage from "../pages/shop/EditShopPage";
import DetailsShopPage from "../pages/shop/DetailsShopPage";
import BishkekProducts from "../pages/map/BishkekProducts";
import AstanaProducts from "../pages/map/AstanaProducts";
import AlmatyProducts from "../pages/map/AlmatyProducts";
import MoscowProducts from "../pages/map/MoscowProducts";
import CartPage from "../pages/cart/CartPage";
import SalesPage from "../pages/SalesPage";
import FavoritePage from "../pages/favorite/FavoritePage";
import Order from "../pages/order/Order";

const MainRoutes = () => {
  const userRole = getUserRole();
  return (
    <div>
      <Routes>
      <Route path="/order" element={<Order/>} />
      <Route path="/favourites" element={< FavoritePage />} />
      <Route path="/cart" element={<CartPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route
          path="/shop/addshop"
          element={userRole == "admin"? <AddShopPage /> : null}
        />
        <Route
          path="/shop/editshop/:id"
          element={userRole == "admin" ? <EditShopPage /> : null}
        />
        <Route
          path="/shop/details/:id"
          element={userRole == "user" || "admin" ? <DetailsShopPage /> : null}
        />
         <Route
          path="/sale"
          element={ <SalesPage /> }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/map/bishkek"
          element={userRole == "user" || "admin" ? <BishkekProducts /> : null}
        />
        <Route
          path="/map/astana"
          element={userRole == "user"|| "admin" ? <AstanaProducts /> : null}
        />
        <Route
          path="/map/almaty"
          element={userRole == "user" || "admin"? <AlmatyProducts /> : null}
        />
        <Route
          path="/map/moscow"
          element={userRole == "user" || "admin"? <MoscowProducts /> : null}
        />
      </Routes>
    </div>
  );
};

export default MainRoutes;
