import React, { useState } from "react";

import {
  productImage1S,
  productImage1L,
  productImage2S,
  productImage2L,
  productImage3S,
  productImage3L,
  productImage4S,
  productImage4L,
} from "../../../assets/images/index";

import "./ProductImageSlider.css";

const smallImages = [
  {
    smallImg: productImage1S,
    largeImg: productImage1L,
  },
  {
    smallImg: productImage2S,
    largeImg: productImage2L,
  },
  {
    smallImg: productImage3S,
    largeImg: productImage3L,
  },
  {
    smallImg: productImage4S,
    largeImg: productImage4L,
  },
];

const ProductImageSlider = ({ showGallery, setShowGallery }) => {
  const [activeImg, setActiveImg] = useState(productImage1L);

  return (
    <div className="flex flex-col ">
      <img
        src={activeImg}
        alt="activeImg"
        className="active-img"
        onClick={() => setShowGallery(!showGallery)}
      />
      <div className="small-images">
        {smallImages.map((img, i) => (
          <img
            key={i}
            src={img.smallImg}
            alt="product-img"
            className="small-img"
            onClick={() => setActiveImg(img.largeImg)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;
