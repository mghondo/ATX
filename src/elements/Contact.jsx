import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";
import GoogleMapReact from 'google-map-react';
import ContactTwo from "../elements/contact/ContactTwo";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const footerBackground ={
    backgroundColor: '#44494e'
 }

class Contact extends Component{
    static defaultProps = {
        center: {
            lat: 30.2672, // Austin, TX latitude
            lng: -97.7431, // Austin, TX longitude
        },
        zoom: 9
    };

    

    render(){
        return(

            <React.Fragment>
                <PageHelmet pageTitle='Contact' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                 {/* Start Breadcrump Area bg_image--17 */}
                 {/* trydo/public/assets/images/logo/ATX_Float_Logo 2/ATX-Float-Logo.jpg */}
                 <div className="rn-page-title-area pt--120 pb--190 bg_image "   style={{
    backgroundImage: `url('/assets/images/logo/ATX_Float_Logo%202/ATX-Float-Logo.jpg')`,
  }}  data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient" style={{ fontFamily: 'Brice-Black'}}>Contact Us!!</h2>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}
                <div className="rn-contact-top-area ptb--120 bg_color--5" style={{backgroundColor: '#f3edd1'}}>
                    <div className="container">
                       
                        <div className="row">
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-address">
                                    <div className="icon" style={{ color: '#EF5474'}}>
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner">
                                        <h4 style={{ fontFamily: 'Brice-Black', fontSize: '30px',  color: '#EF5474',}} className="title">Call Us!</h4>
                                        <p><a style={{ fontFamily: 'Brice-Light'}}  href="tel:+1-512-210-5959">1-512-210-5959</a></p><br/>
                                        {/* <p><a href="tel:+856 325 652 984">+856 325 652 984</a></p> */}
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                                <div className="rn-address">
                                    <div className="icon" style={{ color: '#EF5474'}}>
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 style={{ fontFamily: 'Brice-Black', fontSize: '30px',  color: '#EF5474',}}  className="title">Email Address</h4>
                                        <p><a style={{ fontFamily: 'Brice-Light'}} href="mailto:team@atxfloat.com" target="_blank">team@atxfloat.com</a></p><br/>
                                        {/* <p><a href="mailto:example@gmail.com">example@gmail.com</a></p> */}
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                                <div className="rn-address" >
                                    <div className="icon" style={{ color: '#EF5474'}}>
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 style={{ fontFamily: 'Brice-Black', fontSize: '30px',  color: '#EF5474',}}  className="title">Location</h4>
                                        

                                        <p style={{ fontFamily: 'Brice-Light'}}>411 W Monroe St<br /> Austin, TX 78704</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                        </div>
                    </div>
                </div>
                {/* End Contact Top Area  */}


   

                {/* Start Contact Page Area  */}
                <div className="rn-contact-page ptb--120 bg_color--1" style={{backgroundColor: '#f3edd1', padding: '10px'}}>
                    <ContactTwo />
                </div>
                {/* End Contact Page Area  */}

                {/* Start Contact Map  */}
                <div className="rn-contact-map-area position-relative" style={{ backgroundColor: '#f3edd1', paddingTop: '40px' }}>
  <div style={{ height: '500px', width: '100%' }}>
    <GoogleMapReact
      defaultCenter={this.props.center}
      defaultZoom={this.props.zoom}
    //   bootstrapURLKeys={{
    //     key: 'YOUR_API_KEY_HERE', // Replace with your actual API key
    //   }}
    >
      <AnyReactComponent
        lat={30.2672} // Austin, TX latitude
        lng={-97.7431} // Austin, TX longitude
        text="Austin, TX"
      />
    </GoogleMapReact>
  </div>
</div>

                {/* End Contact Map  */}
                

                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation bg_color--5 ptb--120" style={{backgroundColor: '#f3edd1'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                         <FiChevronUp style={{ color: '#EF5474'}}/>
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />
                
            </React.Fragment>
      
        )
    }
}
export default Contact