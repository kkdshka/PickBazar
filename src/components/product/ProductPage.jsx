import React from "react";
import { Product } from "./Product";
import { Header } from "../topSection/Header";
import { ProductsList } from "../productsList/ProductsList";
import { useProductData } from "../../hooks/useProductData";
import "./ProductPage.scss";
import { Cart } from "../cart/Cart";

export const ProductPage = () => {
  const [product, relatedProducts] = useProductData();

  return (
    <div className="product-page_container">
      <Cart />
      <Header />
      {product && <Product product={product} />}
      {relatedProducts && (
        <div className="product-page_related-items">
          <div className="product-page_related-items_title">Related items</div>
          <ProductsList products={relatedProducts} />
        </div>
      )}
    </div>
  );
};
