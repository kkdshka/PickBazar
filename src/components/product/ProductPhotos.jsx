import React, { useState } from "react";
import { getImgUrl } from "../../api/axiosClient";
import classNames from "classnames";
import "./ProductPhotos.scss";

export const ProductPhotos = ({ photos }) => {
  const [mainPhoto, setMainPhoto] = useState(photos[0]);

  const handleOnPhotoClick = (photo) => () => setMainPhoto(photo);

  const getImageClassName = (photo) => {
    return classNames("product-photos_image", {
      "product-photos_image_active": mainPhoto.hash === photo.hash,
    });
  };

  return (
    <div className="product-photos_container">
      <img
        className="product-photos_main-image"
        src={getImgUrl(mainPhoto.url)}
        alt=""
      />
      <div className="product-photos_images-container">
        {photos.map((photo, index) => (
          <img
            onClick={handleOnPhotoClick(photo)}
            className={getImageClassName(photo)}
            src={getImgUrl(photo.url)}
            alt=""
            key={`product-img-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
