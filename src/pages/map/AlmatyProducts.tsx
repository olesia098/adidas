import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../../context/products/ProductsContextProvider";
import React, { useEffect } from "react";
import { useAuth } from "../../context/auth/AuthContextProvider";
import { useCartContext } from "../../context/cart/CartContextProvider";
import { Button } from "@mui/material";
//@ts-ignore
import cl from "../../assets/bg_cl.svg"
import ProductLike from "../../components/products/ProductLike";

const AlmatyProducts = () => {
  const { getProducts, products, deleteProduct } = useProducts();
  const { addProductToCart, isAlreadyInCart, deleteProductFromCart } =
    useCartContext();
  const { currentUser } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const almatyProducts = products.filter((product) => product.almaty === "on");

  return (
    <>
    <img src={cl} alt="" />
    <div className="m-32">
    <div className="prodf flex flex-wrap flex-row">
        {almatyProducts.map((product) => (
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
              <Link to={`/shop/details/${product.id}`}>
                <Button variant="contained" color="info" size="small">
                  Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default AlmatyProducts;
