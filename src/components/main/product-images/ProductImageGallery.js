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

import iconClose from "../../../assets/svg/icon-close.svg";
import iconNext from "../../../assets/svg/icon-next.svg";
import iconPrev from "../../../assets/svg/icon-previous.svg";

import "./ProductImageGallery.css";

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

const ProductImageGallery = ({ showGallery, setShowGallery }) => {
  const [activeImg, setActiveImg] = useState(productImage1L);

  const activeImgPair = smallImages.find((img) => img.largeImg === activeImg);
  const indexOfActiveImg = smallImages.indexOf(activeImgPair);

  const handlePrevImg = () => {
    if (indexOfActiveImg === 0) {
      setActiveImg(smallImages[smallImages.length - 1].largeImg);
    } else {
      setActiveImg(smallImages[indexOfActiveImg - 1].largeImg);
    }
  };

  const handleNextImg = () => {
    if (indexOfActiveImg === smallImages.length - 1) {
      setActiveImg(smallImages[0].largeImg);
    } else {
      setActiveImg(smallImages[indexOfActiveImg + 1].largeImg);
    }
  };

  if (showGallery) {
    return (
      <div className="image-gallery-container">
        <div className="closeBtn" onClick={() => setShowGallery(false)}>
          <img src={iconClose} alt="Close Button" />
        </div>
        <div className="activeImg">
          <img
            src={iconPrev}
            alt="Previous Button"
            className="next-prev"
            onClick={handlePrevImg}
          />
          <img src={activeImg} alt="activeImg" className="active-image" />
          <img
            src={iconNext}
            alt="Next Button"
            className="next-prev"
            onClick={handleNextImg}
          />
        </div>
        <div className="imgSlider">
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
  }
};

export default ProductImageGallery;