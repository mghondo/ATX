import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import ProgressOne from "../blocks/progressbar/ProgressOne";
import GalleryRiver from "../blocks/GalleryRiver";


import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init();

const images = [
    {
      productTitle: 'Product 1',
      imageUrl: '/assets/images/ATX_Float_Wholesale_files/Buckees2_Web-1.png',
      imageDesc: 'Description for Product 1',
    },
    {
      productTitle: 'Product 2',
      imageUrl: '/assets/images/ATX_Float_Wholesale_files/blind_lemon_Web-1.png',
      imageDesc: 'Description for Product 2',
    },
    {
        productTitle: 'Product 1',
        imageUrl: '/assets/images/ATX_Float_Wholesale_files/photo-19-scaled-thumbnail-optimized_0013_lazyll1.png',
        imageDesc: 'Description for Product 1',
      },
      {
        productTitle: 'Product 2',
        imageUrl: '/assets/images/ATX_Float_Wholesale_files/Rudys_Web-1.png',
        imageDesc: 'Description for Product 2',
      },
      {
        productTitle: 'Product 1',
        imageUrl: '/assets/images/ATX_Float_Wholesale_files/photo-19-scaled-thumbnail-optimized_0007_sons1.png',
        imageDesc: 'Description for Product 1',
      },
      {
        productTitle: 'Product 2',
        imageUrl: '/assets/images/ATX_Float_Wholesale_files/landa_Web-1.png',
        imageDesc: 'Description for Product 2',
      },
    // Add more image objects as needed
  ];

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/atxfloat/'},
    // {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/atx.float/'},
    // {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

class PortfolioDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Portfolio Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image"  data-black-overlay="7" style={{backgroundImage: `url(/assets/images/ATX_Float_Wholesale_files/photo-19-scaled-thumbnail-optimized_0008_native1.png)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 style={{ fontFamily: 'Brice-Black', }} className="title theme-gradient" data-aos="fade-down" data-aos-duration="750">Getting tickets to the big show</h2>
                                    <p style={{ fontFamily: 'Brice-Light', }} data-aos="fade-up" data-aos-duration="750">Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

  

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1" style={{ backgroundColor: '#f3edd1', paddingBottom: '0px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2 style={{ color: '#ef5474', fontFamily: 'Brice-Black', textAlign:'center', fontSize: '55px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}} data-aos="fade-up" data-aos-duration="750">Trydo</h2>
                                        <p style={{ color: '#ef5474', fontFamily: 'Brice-Light', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}} data-aos="fade-up" data-aos-duration="750" className="subtitle">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        <p style={{ color: 'black', fontFamily: 'Brice-Light'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commod viverra maecenas accumsan lacus vel facilisis. ut labore et dolore magna aliqua. </p>
                                        {/* <div className="row">
                                        <div className="col-lg-6">        */}

        {/* </div> */}
            {/* <div className="col-lg-6">  */}
                <h2 style={{ color: '#ef5474', fontFamily: 'Brice-Black', textAlign:'center', fontSize: '55px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}} data-aos="fade-up" data-aos-duration="750">$39.99</h2>
            {/* </div>
        </div> */}
                    <button
            style={{ color: "#EF5474", marginTop: '30px' }}
            className="rn-button-style--2 btn-solid"
            >
            Buy Now!
            </button>

                                        <div className="portfolio-view-list d-flex flex-wrap" style={{paddingTop: '30px'}}>
                                            <div className="port-view">
                                                <span style={{ color: 'grey', fontFamily: 'Brice-Light'}}>Branch</span>
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light'}}>Ability</h4>
                                            </div>

                                            <div className="port-view">
                                                <span style={{ color: 'grey', fontFamily: 'Brice-Light'}}>Project Types</span>
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light'}}>Website</h4>
                                            </div>

                                            <div className="port-view">
                                                <span style={{ color: 'grey', fontFamily: 'Brice-Light'}}>Program</span>
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light'}}>View Project</h4>
                                            </div>
                                            <div className="port-view">
                                                <span style={{ color: 'grey', fontFamily: 'Brice-Light'}}>Program</span>
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light'}}>View Project</h4>
                                            </div>

                                        </div>

                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15" >
                                                {SocialShare.map((val , i) => (
                                                    <li key={i}><a href={`${val.link}`} target="_blank" style={{borderColor:'grey', color: 'grey', fontFamily: 'Brice-Light'}}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ProgressOne/>
                                        </div>
                                       
                                    </div>


                                    {/* <div className="portfolio-thumb-inner">
                                        <div className="thumb position-relative mb--30" data-aos="fade-in">
                                            <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                        
                                        <div className="thumb mb--30" data-aos="fade-in">
                                            <img src="/assets/images/portfolio/portfolio-big-02.jpg" alt="Portfolio Images"/>
                                        </div>

                                        <div className="thumb" data-aos="fade-in">
                                            <img src="/assets/images/portfolio/portfolio-big-01.jpg" alt="Portfolio Images"/>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}
<GalleryRiver/>

                {/* Start Related Work */}
                <div className="portfolio-related-work pb--120 bg_color--1" style={{ backgroundColor: '#f3edd1'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 style={{color: '#ef5474', fontFamily: 'Brice-Black', fontSize: '32', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}}>Related Work</h3>
                                    <h2 style={{ color: '#00f2ff', fontFamily: 'Brice-Light', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}}>More Cool Stuff</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-01.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Digital Analysis</a></h4>
                                        <span className="category">Technique</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-02.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="/portfolio-details">Plan Management</a></h4>
                                        <span className="category">PLANNING</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                        </div>
                    </div>
                </div>
                {/* End Related Work */}


                {/* Start Back To Top */}
                <div className="backto-top" >
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
export default PortfolioDetails;
