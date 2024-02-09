import { useProducts } from "../../../context/products/ProductsContextProvider";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CommentsCreate from "../../../components/comments/CommentsCreate";
import CommentsList from "../../../components/comments/CommentsList";
import { checkUserLogin } from "../../../helpers/functions";
//@ts-ignore
import det from "../../../assets/det.svg";

const DetailsProductsList = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    description: "",
    gender: "",
    bishkek: "",
    astana: "",
    almaty: "",
    moscow: "",
  });
  const nav = useNavigate();

  useEffect(() => {
    getOneProduct(id!);
  }, []);

  useEffect(() => {
    oneProduct && setProduct(oneProduct);
  }, [oneProduct]);

  return (
    <div className="bg-[#0232f0]">
      <img src={det} alt="det" />
      <div>
        <div className="flex flex-row justify-around m-32 max-md:flex-col">
          <div className=" border-8 border-lime-400 border-solid p-10">
            <img src={product.image} alt="details" className="mr-32" />
          </div>
          <div className=" border-8 border-lime-400 border-solid p-10">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p>Price: {product.price}</p>
            <div className="border-4 border-pink-600 w-28">
              {oneProduct?.rating && <h3>Rating: {oneProduct.rating}</h3>}
            </div>

            <p>{product.description}</p>
          </div>
        </div>

        <div>
          <>
            {checkUserLogin() && oneProduct && (
              <CommentsCreate product={oneProduct} />
            )}
            {oneProduct?.comments ? (
              <CommentsList comments={oneProduct.comments} />
            ) : (
              <h3>No comments yet!</h3>
            )}
          </>
        </div>

        <div>
          <div className="map bg-black flex justify-center h-60">
            <div className="map-icon flex items-center flex-col">
              <LocationOnIcon
                className="text-white hover:text-[#d9f99d]"
                style={{ fontSize: 150 }}
                onClick={() => nav("/map/bishkek")}
              />
              <p className="text-white text-xl">Bishkek</p>
            </div>
            <div className="map-icon flex items-center flex-col">
              <LocationOnIcon
                className="text-white hover:text-[#d9f99d]"
                style={{ fontSize: 150 }}
                onClick={() => nav("/map/almaty")}
              />
              <p className="text-white text-xl">Almaty</p>
            </div>
            <div className="map-icon flex items-center flex-col">
              <LocationOnIcon
                className="text-white hover:text-[#d9f99d]"
                style={{ fontSize: 150 }}
                onClick={() => nav("/map/astana")}
              />
              <p className="text-white text-xl">Astana</p>
            </div>
            <div className="map-icon flex items-center flex-col">
              <LocationOnIcon
                className="text-white hover:text-[#d9f99d]"
                style={{ fontSize: 150 }}
                onClick={() => nav("/map/moscow")}
              />
              <p className="text-white text-xl">Moscow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProductsList;
