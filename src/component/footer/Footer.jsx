import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
    // {Social: <FaFacebookF /> , link: 'https://www.facebook.com/atxfloat/'},
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/atxfloat/'},
    // {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    // {Social: <FaInstagram /> , link: 'https://www.instagram.com/atx.float/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/atx.float/'},
    // {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]


const backGroundBrown = {
    backgroundColor: '#dad27a'
}
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area" style={{ backgroundColor: '#f3edd1'}}>
                    <div className="footer-wrapper" >
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left" data-black-overlay="9" style={{
  backgroundImage: `url(${require('./ATX-Float-Logo.jpg')})`,
  backgroundSize: 'cover', // You can adjust this property as needed
  backgroundPosition: 'center', // You can adjust this property as needed
  backgroundRepeat: 'no-repeat', // You can adjust this property as needed
}}>
                                    <div className="inner">
                                        <span style={{fontFamily: 'Brice-Light'}}>Ready To Do This</span>
                                        <h2>Let's get <br /> Started!!</h2>
                                        <a className="rn-button-style--2" href="/contact">
                                            <span>Contact Us</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link" style={{fontFamily: 'Brice-Light'}}>
                                                <h4 style={{fontFamily: 'Brice-Light', color: 'white'}}>Quick Link</h4>
                                                <ul className="ft-link">
                                                    <li><a href="/">Home</a></li>
                                                    {/* <li><a href="/about">About</a></li> */}
                                                    <li><a href="/contact">Let's Talk</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4 style={{fontFamily: 'Brice-Light', color: 'white'}}>Say Hello</h4>
                                                <ul className="ft-link">
                                                    <li style={{fontFamily: 'Brice-Light'}}><a href="mailto:team@atxfloat.com">team@atxfloat.com</a></li>
                                                    <li style={{fontFamily: 'Brice-Light'}}><a href="tel:+1-512-210-5959">1-512-210-5959</a></li>
                                                </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`} target="_blank">{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div> 
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                {/* <p style={{fontFamily: 'Brice-Light'}}>Copyright © 2023 Rainbow-Themes. All Rights Reserved.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;