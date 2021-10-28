import React from "react";
import "./Products.scss";

export const LoadMore = ({ onClick }) => {
  return (
    <button className="products_load-more" onClick={onClick}>
      Load More
    </button>
  );
};
