import React from "react";
import { getAuthUser } from "../../helpers/functions";
import { IComment } from "context/products/products.types";

interface ProductCommentOneProps {
  comment: IComment;
}

const CommentsItem: React.FC<ProductCommentOneProps> = ({ comment }) => {
  const currentDateTime: Date = new Date();
  const year: number = currentDateTime.getFullYear();
  const month: number = currentDateTime.getMonth() + 1;
  const day: number = currentDateTime.getDate();

  const hours: number = currentDateTime.getHours();
  const minutes: number = currentDateTime.getMinutes();

  const formattedDate: string = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}`;
  const formattedTime: string = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;

  return (
    <>
      <div className="max-w-xl p-8 mx-auto dark:bg-gray-800 dark:text-gray-100 border-sky-300">
        <ul className="space-y-12">
          <li className="flex items-start space-x-3">
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                <a
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700"
                >
                  <span className="group-hover:underline dark:text-blue-600 text-gray-600 ">
                    @{comment.user}
                  </span>
                </a>
                <span className="text-xs whitespace-nowrap">
                  {formattedDate}
                </span>
                <span className="text-xs whitespace-nowrap">
                  {formattedTime}
                </span>
              </div>
              <div>
                <p className="text-gray-600">{comment.body}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CommentsItem;
