import React from 'react'

import ImageMain1 from "../../../../../assets/images/image-main-1.jpg"
import SideImages from '../side-images/sideImages'

const ProductImageSlider = () => {
    return (
        
        <div className='image-container'>
            <div className='main-image'>
            <img  src={ImageMain1} width="300" height="300"/>
            
            </div>
          <SideImages/>
        </div>
        
    )

}
export default ProductImageSlider