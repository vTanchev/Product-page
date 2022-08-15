import React from "react";

import SideImage1 from "../../../../../assets/images/image1.jpg"
import SideImage2 from "../../../../../assets/images/image2.jpg"
import SideImage3 from "../../../../../assets/images/image3.jpg"
import SideImage4 from "../../../../../assets/images/image4.jpg"

const SideImages = ()=> {
    return (
        <div className='side-images'>
            <img src={SideImage1} width="150" height="150"/>
            <img src={SideImage2} width="150" height="150"/>
            <img src={SideImage3} width="150" height="150" />
            <img src={SideImage4} width="150" height="150"/>
            </div> 
    )
}
export  default SideImages 