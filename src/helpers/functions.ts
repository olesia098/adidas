import { IComment, IProduct } from "context/products/products.types";

export const getUserRole = () => {
  const userr = localStorage.getItem("email");
  //@ts-ignore
  const user = JSON.parse(userr);

  if (!user) {
    return "not logged in";
  }

  if (user === "foxy@gmail.com") {
    return "admin";
  }

  return "user"; // Обычный пользователь
};

//admin - тоже является user

export const getAuthUser = () => {
  const userr: string | null = localStorage.getItem("email");
  const user = userr ? JSON.parse(userr) : null;
  return user;
};

export const checkUserLogin = () => {
  const user = localStorage.getItem("email");
  if (!user) return false;
  return true;
};

export const getProductRating = (productObj: IProduct): number => {
  const rating =
    productObj.comments.reduce((acc: number, commentObj: IComment) => {
      return acc + Number(commentObj.rating);
    }, 0) / productObj.comments.length;
  return parseFloat(rating.toFixed(1));
};

export const saleTotalPrice = (price: number, discount: number): number => {
  const hundredDiscount = 100 - discount
  const total = price * 0.01 * hundredDiscount;
  return total;
};
