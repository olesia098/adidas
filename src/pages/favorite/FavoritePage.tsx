import { useAuth } from "../../context/auth/AuthContextProvider";
import { useFavoriteContext } from "../../context/favorites/FavoritesContextProvider";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart/CartContextProvider";
//@ts-ignore
import bg_cart from "../../assets/bg_cart.png";

const FavoritePage = () => {
  const { getFavorites, favorite, deleteProductFromFavorite } =
    useFavoriteContext();
  const { currentUser } = useAuth();
  const { addProductToCart, isAlreadyInCart, deleteProductFromCart } =
    useCartContext();

  useEffect(() => getFavorites(), []);

  if (favorite.products.length < 1) {
    return (
      <div className="w-full h-[80vh] flex flex-col items-center justify-center">
        <h3 className="text-9xl">Favorite is empty</h3>
        <Link to={"/shop"}>
          <button className="text-7xl mt-10 border-4 p-4 border-black rounded-3xl hover:bg-black hover:text-white">Go shop!</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-200">
      <form>
        <img src={bg_cart} className="w-full" alt="" />
      </form>
      <h3 className="text-4xl m-5">Favorites</h3>
      <form className="flex w-96 m-5 bg-white rounded-2xl p-6 flex-wrap">
        <form>
          {favorite.products.map((row) => (
            <div key={row.id}>
              <button
                onClick={() => {
                  deleteProductFromFavorite(+row.id!);
                }}
              >
                X
              </button>
              <p className="text-lg">{row.title}</p>
              <p className="text-gray-500">Gender: {row.gender}</p>
              <img src={row.image} alt="" />
              <p>Price one: {row.price}</p>
              {currentUser && (
                <div className="w-full">
                  {isAlreadyInCart(+row.id!) ? (
                    <button
                      className="border-2 border-black w-28 h-10 rounded-xl m-3 hover:bg-black hover:text-white"
                      onClick={() => deleteProductFromCart(+row.id!)}
                    >
                      delet on cart
                    </button>
                  ) : (
                    <button
                      className="border-2"
                      onClick={() => addProductToCart(row)}
                    >
                      add to cart
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </form>
      </form>
    </div>
  );
};

export default FavoritePage;
