import Product from "components/products/ProductList";
import { useCartContext } from "../../context/cart/CartContextProvider";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//@ts-ignore
import bg_cart from "../../assets/bg_cart.png";

const CartPage = () => {
  const { cart, getCart, deleteProductFromCart, decreaseCount, increaseCount } =
    useCartContext();

  useEffect(() => getCart(), []);

  if (cart.products.length < 1) {
    return (
      <div  className="w-full h-[80vh] flex flex-col items-center justify-center">
        <h3  className="text-9xl">Cart is empty</h3>
        <Link to={"/shop"}>
          <button className="text-7xl mt-10 border-4 p-4 border-black rounded-3xl hover:bg-black hover:text-white">Go shop!</button>
        </Link>
      </div>
    );
  }

  console.log(cart.products);

  cart.products.map((row) => console.log(row.gender));

  return (
    <div className="bg-gray-200">
      <form>
        <img src={bg_cart} className="w-full" alt="" />
      </form>
      <form className="flex">
        <form className="w-2/3 m-5 bg-white rounded-2xl p-6">
          <h3 className="text-4xl m-5">Cart</h3>
          {cart.products.map((row) => (
            <div key={row.id}>
              <div className="flex mb-10">
                <div className="w-72">
                  <img className="" src={row.image} alt="" />
                </div>
                <div>
                  <p className="text-xl">{row.title}</p>
                  <p className="text-gray-500">Gender: {row.gender}</p>
                  <p className="text-gray-500">Price one: {row.price}</p>
                </div>
                <div className="flex items-start justify-center">
                  <div className="flex flex-row items-center justify-center">
                    <button
                      className="w-10 h-10 text-2xl bg-gray-200 rounded-md"
                      onClick={() => {
                        if (row.count <= 1) {
                          deleteProductFromCart(+row.id!);
                        } else {
                          decreaseCount(+row.id!);
                        }
                      }}
                    >
                      -
                    </button>
                    <p className="text-xl">{row.count}</p>
                    <button
                      className="w-10 h-10 text-xl bg-gray-200 rounded-md"
                      onClick={() => increaseCount(+row.id!)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex">
                  <p className="font-bold text-xl">{row.subPrice} $</p>
                </div>
              </div>
            </div>
          ))}
        </form>
        <form className="bg-white w-1/4 h-2/3 m-5 rounded-2xl p-6">
          <h4 className="text-xl font-bold">TOTAL: {cart.totalPrice}</h4>
          <Link to={"/order"}>
            <button className="border-2 border-black w-full h-14 mt-5 rounded-md text-xl hover:bg-black hover:text-white">ORDER</button>
          </Link>
        </form>
      </form>
    </div>
  );
};

export default CartPage;
