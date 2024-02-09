import React, { useState } from "react";
import { getAuthUser } from "../../helpers/functions";
import { useProducts } from "../../context/products/ProductsContextProvider";
import { IComment, IProduct } from "../../context/products/products.types";
// import confetti from "canvas-confetti";

interface ProductLikeProps {
  product: IProduct;
}

const CommentsCreate: React.FC<ProductLikeProps> = ({ product }) => {
  const { createComment } = useProducts();
  const [comment, setComment] = useState({
    commentContent: "",
    rating: "",
  });

//   const myConfetti = () => {
//     confetti({
//       particleCount: 10000,
//       spread: 370,
//       origin: { y: 1 },
//     });
//   };

  const addComment = () => {
    if (!comment.commentContent.trim() || isNaN(parseFloat(comment.rating)) || parseFloat(comment.rating) <= 0 || parseFloat(comment.rating) > 5) {
      return alert("Change input values");
    }

    const commentObj: IComment = {
      id: Date.now(),
      body: comment.commentContent,
      rating: parseFloat(comment.rating),
      user: getAuthUser(),
    };

    createComment(product, commentObj);

    setComment({
      commentContent: "",
      rating: "",
    });
    // myConfetti()
  };


  return (
    <>
      <fieldset className="max-w-xl p-8 mx-auto space-y-1 dark:text-gray-100">
        <div className="flex w-2/4 h-8 border-spacing-x-28">
          <input
            onChange={(e) => setComment({ ...comment, commentContent: e.target.value })}
            value={comment.commentContent}
            type="text"
            placeholder="Enter comment content"
            className="w-full text-right border sm:text-sm rounded-l-md focus:ri text-gray-600"
          />

          <input
            onChange={(e) => setComment({ ...comment, rating: e.target.value })}
            value={comment.rating}
            type="number" 
            placeholder="Enter rating value"
            className="w-full text-right border sm:text-sm rounded-l-md focus:ri text-gray-600"
          />

          <button
            onClick={() => {
              addComment();
            }}
            className="flex items-center px-3 sm:text-sm rounded-r-md bg-pink-600 cursor-pointer"
          >
            send
          </button>
        </div>
      </fieldset>
    </>
  );
};

export default CommentsCreate;
