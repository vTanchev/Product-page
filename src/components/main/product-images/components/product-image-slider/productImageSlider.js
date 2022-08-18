import React from 'react'
import {Images} from '../../../product-images/components/side-images/sideImages.js'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class ProductImageSlider extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
    }
  
    render() {
      return (
        <div>
          <ImageGallery  showThumbnails={true} items={Images} />
        </div>
      );
    }
  }
  export default ProductImageSlider;