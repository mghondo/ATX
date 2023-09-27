import React, { Component } from "react";
import ServiceOne from "../../elements/service/ServiceOne";


// Main dark page logo. MORGAN
class SliderOne extends Component {
    
  render() {
    const divStyle = {
        backgroundImage: `url('IMG_6288.png')`,
        // backgroundColor: 'orange', 
        backgroundSize: 'cover', // Adjust this as needed
        opacity: '0.3', 
      };

      const innerDivStyle = {
        backgroundImage: `url('IMG_6288.png')`,
        backgroundSize: 'cover', // Adjust this as needed
        opacity: '0.3', // Darken the background by 30%
      };
    return (
        <div className="slider-activation" 
        // style={divStyle}
        >
            {/* Start Single Slide */}
            {/*  bg_image--1 or img-6288png */}
            <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1 " data-black-overlay="6">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                {/* <h1 className="title theme-gradient">A digital <br /> agency. </h1> */}
                                <h1 className="title theme-gradient">ATX Float</h1>
                            </div>
                        </div>
                    </div>
                    {/* Start Service Area */}
                    <div className="service-wrapper service-white">
                        <ServiceOne />
                    </div>
                    {/* End Service Area */}
                </div>
            </div> 
            {/* End Single Slide */}
        </div>
    );
  }
}
export default SliderOne;