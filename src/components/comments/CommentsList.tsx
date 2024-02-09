import React from 'react';
import CommentsItem from './CommentsItems';
import { IComment } from 'context/products/products.types';

interface ProductCommentProps {
  comments: IComment[]; 
}

const CommentsList: React.FC<ProductCommentProps> = ({ comments }) => {
  return (
    <div >
      {comments.map((comment) => (
        <CommentsItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
