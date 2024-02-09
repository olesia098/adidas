import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useProducts } from "../../context/products/ProductsContextProvider";
import { getAuthUser } from "../../helpers/functions";
import { IProduct } from "../../context/products/products.types";
import axios from "axios";
import { API } from "../../helpers/consts";

interface ProductLikeProps {
  product: IProduct;
  productId: any;
}

const ProductLike: React.FC<ProductLikeProps> = ({ product, productId }) => {
  const { getProducts } = useProducts();
  const [isLikedProduct, setIsLikedProduct] = useState(false);

  const checkProductLike = () => {
    const user = getAuthUser();
    if (!product.likes) return;
    const userLike = product.likes.find((like: any) => like.user === user);

    setIsLikedProduct(!!userLike);
  };

  useEffect(() => {
    checkProductLike();
  }, [product.likes]);

  async function toggleProductLike(setIsLike: boolean): Promise<void> {
    const user = getAuthUser();
    let updatedLikesArr: any[] = [];

    if (!product.likes) {
      updatedLikesArr = [];
    } else {
      updatedLikesArr = [...product.likes];
    }

    if (setIsLike) {
      updatedLikesArr.push({
        id: Date.now(),
        user: user,
      });
    } else {
      updatedLikesArr = updatedLikesArr.filter((like) => like.user !== user);
    }

    await axios.patch(`${API}/${productId}`, {
      likes: updatedLikesArr,
    });
    getProducts();
  }

  return (
    <div className="flex flex-row items-start justify-center pl-72">
      <div className="p-4 text-black text-center">
        {product.likes ? (
          <span className="text-xl">{product.likes.length}</span>
        ) : (
          <span className="text-xl">0</span>
        )}
      </div>
      <div>
        {isLikedProduct ? (
          <div onClick={() => toggleProductLike(false)}>
            <FavoriteIcon fontSize="large" color="error" />
          </div>
        ) : (
          <div onClick={() => toggleProductLike(true)}>
            <FavoriteIcon fontSize="large" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductLike;
