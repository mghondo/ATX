import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import TypingAnimation from "./common/TypingAnimation";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();


class About extends Component{
    render(){
        let title = 'About',
        // description = `
        // Zach Martin is a visionary entrepreneur who embarked on a remarkable journey of innovation and creativity. His story began with a passion for crafting cool gadgets, which eventually led him to establish a thriving small business. Originally from a different world, Zach found his heart in Austin, Texas, a city known for its vibrant culture and outdoor enthusiasm. In this unique Texan haven, Zachs fascination with water sports ignited, prompting him to transition his business focus towards creating innovative water products. With unwavering determination and an unquenchable thirst for innovation, ` + <br/> +`Zach's company has grown exponentially. Today, it proudly wholesales its exceptional water products to parks and outfitters scattered all across the nation. Zach's commitment to quality and his dedication to the water sports community have not only shaped his business but also inspired countless adventurers to explore and enjoy the beauty of water sports. His story serves as a testament to the power of pursuing one's passions and turning them into a thriving enterprise that enriches lives nationwide.`;
        description = (
            <div>
              Zach Martin is a visionary entrepreneur who embarked on a remarkable journey of innovation and creativity. His story began with a passion for crafting cool gadgets, which eventually led him to establish a thriving small business. Originally from a different world, Zach found his heart in Austin, Texas, a city known for its vibrant culture and outdoor enthusiasm. In this unique Texan haven, Zach's fascination with water sports ignited, prompting him to transition his business focus towards creating innovative water products.
              <br /><br />
              With unwavering determination and an unquenchable thirst for innovation, Zach's company has grown exponentially. Today, it proudly wholesales its exceptional water products to parks and outfitters scattered all across the nation. Zach's commitment to quality and his dedication to the water sports community have not only shaped his business but also inspired countless adventurers to explore and enjoy the beauty of water sports. His story serves as a testament to the power of pursuing one's passions and turning them into a thriving enterprise that enriches lives nationwide.
            </div>
          );
          
        return(
            <React.Fragment>
                <div style={{backgroundColor: '#f3edd1'}}>
                <PageHelmet pageTitle='About' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'About'}   />
                
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1" style={{backgroundColor: '#f3edd1'}}>
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center" >
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        {/* <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/> */}
                                        <img className="w-100" src="/assets/images/blog/RiversCentralTexas.png"  alt="About Images"/>
                                        {/* trydo/public/assets/images/blog/RiversCentralTexas.png */}
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            {/* <h2 style={{ fontFamily: 'Brice-Black', color: '#ef5474'}}className="title">{title}</h2> */}
                                            <h2 style={{ fontFamily: 'Brice-Black', color: '#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}} data-aos="fade-left" data-aos-duration="1000" className="title">ATX Float</h2>
                                            <p className="description" style={{ fontFamily: 'Brice-Light',}} data-aos="fade-left" data-aos-duration="1000">{description}</p>
                                        </div>
                                        {/* <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Who we are</h3>
                                                    <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Who we are</h3>
                                                    <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                 {/* Start CounterUp Area */}
                 {/* <div className="rn-counterup-area pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">Our Fun Facts</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div> */}
                {/* End CounterUp Area */}

                {/* Start Finding Us Area  */}
                <div className="rn-finding-us-area rn-finding-us bg_color--1" style={{backgroundColor: '#f3edd1'}}>
                    <div className="inner">
                        <div className="content-wrapper" >
                            <div className="content" data-aos="fade-left" data-aos-duration="1000">
                                <TypingAnimation elementType="h4"
        typingSpeed={50} style={{fontFamily: 'Brice-Black', color: '#54eeef'}} className="theme-gradient" text="Find what you need to take your venue to the next level!!!" />
                                <p>Go one step ahead with Every Order! ATX Float is your gateway to a world of water fun, delivering quality products to venues and providers nationwide. Dive into Success with Us!"</p>
                                <a style={{fontFamily: 'Brice-Black', color: '#ef5474'}} className="rn-btn btn-white" href="/portfolio">Catalog</a>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <div className="image">
                                <img src="/assets/images/IMG_6288.png"       style={{
        // width: '80%', // Set the image width to 80%
        // maxWidth: '1300px', // Ensure the image doesn't exceed its original size
        float: 'right', // Align the image to the right side
      }}  alt="Finding Images"/>

                                {/* trydo/public/assets/images/IMG_6288.png */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Finding Us Area  */}

                {/* Start Team Area  */}
                <div className="rn-team-area bg_color--1 ptb--120" style={{backgroundColor: '#f3edd1'}}>
                    <div className="container">

                        <div className="row">
                            
                            {/* Start Single Team  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-left" data-aos-duration="1000">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-01.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Jone Due</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>
                                    <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Single Team  */}

                            {/* Start Single Team  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-down" data-aos-duration="1000">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-02.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">BM. Alamin</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>
                                    <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Single Team  */}

                            {/* Start Single Team  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-right" data-aos-duration="1000">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-03.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Jone Due</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>
                                    <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Single Team  */}

                        </div>
                        <div className="row" style={{marginTop: '60px'}}>
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25">
                                    <h2 className="title" style={{fontFamily: 'Brice-Black', color: '#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}}>Skilled Team</h2>
                                    <p>Your success is our success, and we're committed to going the extra mile to ensure that your experience with us is nothing short of exceptional. Our doors are always open, and we welcome the opportunity to discuss how our products and services can benefit your business. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120" style={{display:'none'}}>
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}

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
                </div>
            </React.Fragment>
        )
    }
}
export default About