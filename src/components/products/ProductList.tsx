import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../../context/products/ProductsContextProvider";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth/AuthContextProvider";
import { useCartContext } from "../../context/cart/CartContextProvider";
import { Button } from "@mui/material";
import ProductLike from "./ProductLike";
import { getAuthUser, getUserRole } from "../../helpers/functions";
import { useFavoriteContext } from "../../context/favorites/FavoritesContextProvider";
import ProductPagination from "./ProductPagination";

const Product = () => {
  const { getProducts, products, deleteProduct, oneProduct } = useProducts();
  const {
    isAlreadyInFavorit,
    addProductToFavorite,
    deleteProductFromFavorite,
  } = useFavoriteContext();
  const { addProductToCart, isAlreadyInCart, deleteProductFromCart } =
    useCartContext();
  const { currentUser } = useAuth();
  const nav = useNavigate();
  const userRole = getUserRole()

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
     <div className="prodf flex flex-wrap flex-row">
  {products.map((product) => (
    <div
      key={product.id}
      className="flex flex-row flex-wrap hover:bg-violet-600"
    >
      <div className="oneitem flex flex-col w-96 border mb-10 mt-10 border-stone-50">
        <img src={product.image} alt="img" />
        <ProductLike product={product} productId={product.id} />
        <p className="font-bold">{product.title}</p>
        <p>Price: {product.price}</p>
        <p>{product.gender}</p>
        {currentUser && (
          <div>
            {isAlreadyInCart(+product.id!) ? (
              <Button
                variant="outlined"
                color="error"
                onClick={() => deleteProductFromCart(+product.id!)}
              >
                Delete on cart
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                onClick={() => addProductToCart(product)}
              >
                Add to cart
              </Button>
            )}
          </div>
        )}
       
        {currentUser && (
          <div>
            {isAlreadyInFavorit(+product.id!) ? (
              <Button
                color="error"
                onClick={() => deleteProductFromFavorite(+product.id!)}
              >
                Delete on favourite
              </Button>
            ) : (
              <Button
                color="secondary"
                onClick={() => addProductToFavorite(product)}
              >
                Add to favorite
              </Button>
            )}
          </div>
        )}
      
        <Link to={`/shop/details/${product.id}`}>
          <Button variant="contained" color="info">
            Details
          </Button>
        </Link>
        {userRole === "admin" && (
          <>
            <Link to={`/shop/editshop/${product.id}`}>
              <Button variant="outlined">Update</Button>
            </Link>
            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteProduct(product.id!)}
              style={{ width: "90px" }}
            >
              Delete
            </Button>
          </>
        )}
      </div>
    </div>
  ))}
</div>


    </>
  );
};

export default Product;
