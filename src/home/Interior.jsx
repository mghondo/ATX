import React, { Component , Fragment, useState } from "react";
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";
import CounterOne from "../elements/counters/CounterTwo";
import Testimonial from "../elements/Testimonial";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";
import TeamOne from "../blocks/team/TeamOne";
import Slider from "react-slick";
import { slickDot , portfolioSlick2 } from "../page-demo/script";
import ContactTwo from "../elements/contact/ContactTwo";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";
import ServiceList from '../elements/service/ServiceList'
import TypingAnimation from "../elements/common/TypingAnimation";
import { Parallax } from "react-parallax";

import './interiorStyles.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init();

// const image1 = '/assets/images/bg/ATXBanner.jpg';
// const image1 = '/assets/images/bg/AmandaTube2.png';
const image1 = '/assets/images/bg/riverTube2.0.png';


const getAnimationClass = (index) => {
    if (index === 0) {
      return "fade-left"; // First item
    } else if (index === 1) {
      return "fade-up"; // Second item
    } else if (index === 2) {
      return "fade-right"; // Third item
    } else {
      return "fade-up"; // Rest of the items
    }
  };

// /elements/service/ServiceList.jsx

const textToType = "Hello, I'm a typing animation!";

const customStyle = {
    fontFamily: 'Brice-Black', color: '#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
    // Add any other CSS properties as needed
  };

  

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'ATX Float',
        description: 'Dive into success with our water sports wholesale company, where quality meets adventure for businesses seeking top-notch products.',
        buttonText: 'Shop Now!',
        // buttonLink: '/contact'
        buttonLink: 'portfolio'
    }
]

const backgroundStyle = {

    // backgroundImage: `url('IMG_6288.png')`,
    backgroundImage: `url('/assets/images/bg/ATXBanner.jpg')`,
      backgroundPosition: 'center 70%',
      backgroundSize: 'cover', // Choose the desired option
    
    
    // trydo/build/assets/images/bg/ATXBanner.jpg

  };

  const amandaBkGround = {
    backgroundImage: `url('/assets/images/bg/AJS_4086-Edit_02.jpg')`
  }

const backgroundlightYellow = {
    backgroundColor: '#fbff68'
}

const backGroundBrown = {
    backgroundColor: '#f3edd1'
}

const contactAreaStyle = {
    padding: '75px 0', // 30px padding on top and bottom, 0px padding on left and right
    backgroundColor: '#f3edd1',

 }

 const footerBackground ={
    backgroundColor: '#44494e'
 }

const backgroundStyleService = {
    backgroundColor: 'rgb(196 225 245)',
    backgroundSize: 'cover', // You can adjust this property
  };

  // Carousel for Interior design portfolio. Morgan

const PortfolioList2 = [
    {
        image: 'image-1',
        category: 'Trump2',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-5',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    // {
    //     image: 'image-4',
    //     category: 'Development',
    //     title: ' Getting tickets to the big show'
    // },
    // {
    //     image: 'image-4',
    //     category: 'Development',
    //     title: ' Getting tickets to the big show'
    // }
]


const ServiceListOne = [
    {
        icon: "icon-01.png",
        title: 'Shipping Anywhere',
        description: 'Enjoy superb shipping on all your orders.'
    },
    {
        icon: "icon-02.png",
        title: 'Top Notch Support',
        description: 'Reach out to us, We are at your service.'
    },
    {
        icon: "icon-03.png",
        title: 'Custom Designs',
        description: 'We offer custom designs on most of our products.'
    },
    // <span> Shipping Anywhere </span>
    // <span> Top Notch Support </span>
    // <span> Custom Designs </span>
]

const list = [
    {
        image: 'image-1',
        category: 'River Tubes',
        title: 'Get your custom made river tubes here!!',
        url: '/portfolio#riverTubes'
    },
    {
        image: 'image-2',
        category: 'Park Tubes',
        title: 'Get tubes for your water park here!',
        url: '/portfolio#parkTubes'
    },
    {
        image: 'image-3',
        category: 'Awesome Gear',
        title: 'Every adventure needs extra gear. Click here',
        url: '/portfolio#awesomeGear'
    },

]



class InteriorLanding extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);
        this.state = {
            scrolled: false, // Initialize the scroll state
          };

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        });
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        if (window.scrollY > 0) {
          this.setState({ scrolled: true });
        } else {
          this.setState({ scrolled: false });
        }
      };
    
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    stickyHeader () {}
    render(){
        
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 50) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }

        return(
            
            <Fragment>
                <Helmet pageTitle="Interior Design" />

                {/* Start Header Area  */}
                {/* <header className="header-area formobile-menu header--fixed default-color"> */}
                <header
          className={`header-area formobile-menu header--fixed default-color ${
            this.state.scrolled ? 'header-right-visible' : ''
          }`}
        >
                    <div className="header-wrapper" id="header-wrapper">
                    {this.state.scrolled && (
                        <>
                        <div className="header-left">
                            <div className="logo">
                                <a href="/">
                                
                                    <img style={{ maxWidth: '200px', maxHeight: '30px' }}  className="logo-1" src="/assets/images/logo/ATX_Logo_6dcef0.png" alt="Logo Images"/>
                                    <img style={{ maxWidth: '200px', maxHeight: '20px' }}  className="logo-2" src="/assets/images/logo/ATX_Logo_6dcef0.png" alt="Logo Images"/>
                                    {/* <img className="logo-1" src="/assets/images/logo/logo-light.png" alt="Logo Images"/>
                                    <img className="logo-2" src="/assets/images/logo/logo-all-dark.png" alt="Logo Images"/> */}
                                </a>
                            </div>
                        </div>
                       
                        <div className="header-right">
                            <nav className="mainmenunav d-lg-block">
                                <Scrollspy className="mainmenu" style={{ fontFamily: 'Brice-Light' }} items={['home','service','getstart','about','team','testimonial','portfolio']} currentClassName="is-current" offset={-200}>
                                    <li><a href="#home">Home</a></li>
                                    {/* <li><a href="#catalog">Catalog</a></li> */}
                                    {/* <li><a href="#service">Service</a></li>
                                    <li><a href="#getstart">Get Start</a></li>
                                    <li><a href="#about">About</a></li> */}
                                    <li><a href="/about">About</a></li> 
                                    {/* <li><a href="#testimonial">Testimonial</a></li> */}
                                    {/* <li><a href="#team">Team</a></li> */}
                                    <li><a href="/contact">Contact</a></li>
                                    {/* <li><a href="/portfolio" style={{ fontFamily: 'Brice-Black'}}>Catalog</a></li> 

                                    
                                    <ul className="dropdown-menu">
                                        <li><a href="/portfolio#riverTubes">River Tubes</a></li>
                                        <li><a href="/portfolio#parkTubes">Park Tubes</a></li>
                                        <li><a href="/portfolio#awesomeGear">Awesome Gear</a></li>
                                    </ul> */}
                                        <li className="dropdown">
        <a href="#catalog">Catalog</a>
        <ul className="dropdown-menu">
            <li><a href="/portfolio#riverTubes">River Tubes</a></li>
            <li><a href="/portfolio#parkTubes">Park Tubes</a></li>
            <li><a href="/portfolio#awesomeGear">Awesome Gear</a></li>
        </ul>
    </li>
                                </Scrollspy>
                            </nav>
                            <div className="header-btn">
                                <a className="rn-btn" href="/portfolio">
                                    <span style={{ fontFamily: 'Brice-Black'}} data-aos="fade-down" data-aos-duration="750">Shop Now</span>
                                </a>
                            </div>
                            {/* Start Humberger Menu  */}
                            <div className="humberger-menu d-block d-lg-none pl--20">
                                <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                            </div>
                            {/* End Humberger Menu  */}
                            <div className="close-menu d-block d-lg-none">
                                <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                            </div>
                        </div>
                        </>)}
                    </div>
                </header>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-activation slider-creative-agency" id="home">
                    <div className="bg_image bg_image--100" style={backgroundStyle} data-black-overlay="1">
                        {SlideList.map((value , index) => (
                            <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index} href="portfolio">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                
                                            <div className={`inner ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 data-aos="fade-down" data-aos-duration="750" className="title" style={{fontFamily: 'Brice-Black', color: '#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}}>{value.title}</h1> : ''}
                                                {value.description ? <p data-aos="fade-up" data-aos-duration="750" style={{ fontFamily: 'Brice-Light', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} className="description">{value.description}</p> : ''}
                                                {value.buttonText ? <div data-aos="fade-up" data-aos-duration="750"className="slide-btn"><a style={{fontFamily: 'Brice-Black', fontSize:'30px', color: '#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}}  className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`} >{value.buttonText}</a></div> : ''}
                                                {/* href={`${value.buttonLink}`} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* End Slider Area   */}

                                {/* Start Portfolio Area */}
    <div className="portfolio-area pt--90 pb--140 bg_color--1" style={{ backgroundColor: '#f3edd1', paddingBottom: '40px' }}>
      <div className="rn-slick-dot">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos='fade-up' data-aos-duration="750">
              <div className={`section-title text-center service-style--3 mb--30`}>
                <h2 style={{ fontFamily: 'Brice-Black', color: '#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} className="title">Park Tubes, River Tubes and More!!!</h2>
              </div>
              <div className="slick-space-gutter--15 slickdot--20">
                <Slider {...slickDot}>
                  {list.map((value, index) => (
                    <div className={`portfolio`} key={index} data-aos='fade-down'  data-aos-duration="750">
                      <div className="thumbnail-inner">
                        <div className={`thumbnail ${value.image}`}></div>
                        <div className={`bg-blr-image ${value.image}`}></div>
                      </div>
                      <div className="content">
                        <div className="inner">
                          <p style={{ fontFamily: 'Brice-Black', fontSize: '40px', color: '#ef5474' }}>{value.category}</p>
                          <h4 style={{ fontFamily: 'Brice-Light' }}>
                            <a href="/portfolio-details">{value.title}</a>
                          </h4>
                          <div className="portfolio-button">
                            <a style={{ fontFamily: 'Brice-Black' }} className="rn-btn" href={value.url}>
                              See More!
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                {/* End Portfolio Area */}

                


                {/* Start Service Area  */}

                {/* End Service Area  */} 

                {/* Start Call To Action Area  */}
                {/*  style={amandaBkGround} */}
                {/* <div style={amandaBkGround} className="call-to-action-wrapper call-to-action bg_image bg_image-36 text-white-wrapper ptb--180 ptb_lg--80 ptb_md--80 ptb_sm--80" id="getstart" >
                    
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4"></div>
                            <div className="col-lg-8">
                                <div className="inner text-right" style={{ paddingBottom: '40px' }}>
                                    <span>Shop Around</span>
                                    <h2>Take a look at <br/>our catalog</h2>
                                    <a className="rn-button-style--2 mt-d-70 mt_sm--30 mt_md--30" href="/portfolio"><span>Shop</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Call To Action Area  */}


                {/* Start CounterUp Area */}
                {/* <div className="rn-counterup-area pt--80 pt_sm--50 pt_md--50 pb--120 bg_color--1">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div> */}
                {/* End CounterUp Area */}

                <div id="service" className="fix">
                <div className="service-area creative-service-wrapper ptb--120 bg_color--5" style={{ paddingTop: '10px', backgroundColor: '#f3edd1',}} >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title" style={{ color: '#ef5474', fontFamily: 'Brice-Black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',}}>My Awesome Service</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div> */}
                                <div className="feature-area" style={{textAlign: 'center'}}>
                                    <span style={{ color: '#ef5474', fontFamily: 'Brice-Black', fontSize: '45px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}} data-aos="fade-up" data-aos-duration="750">Wholesale Custom Gear</span>
                                    <h3 className="title mt--20 fontWeight500 lineheight--1-8" style={{color: 'black', fontFamily: 'Brice-Light'}}>ATX Float is a team of product developers & designers, graphic artists, sales managers, and distribution personnel. The product design and management team office in Austin Texas, and warehousing and distribution is based in New Braunfels Texas.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>

                {/* Start Content Box  */}
                
                {/* <div className="rn-team-wrapper pb--120 bg_color--1" id="team" style={{backgroundColor: '#f3edd1', paddingTop: '70px'}}>
                <Parallax bgImage={image1} strength={1000} style={{padding: '30px'}}>
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left mb--30">
                                        <h2 style={{ color: '#EF5474', fontFamily: 'Brice-Black', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750">Meet Our Designers</h2>
     </div>
                                    
                                </div>
                            </div>
                            <TeamOne column="col-lg-3 col-md-6 col-sm-6 col-12" teamStyle="team-style--bottom" item="3" />
                        </div>
                    </div>
                    </Parallax>
                </div> */}


                
                {/* End Content Box  */}

                {/* Start Team Area  */}
                <div className="rn-team-wrapper pb--120 bg_color--1" id="team" style={{backgroundColor: '#f3edd1', paddingTop: '70px'}}>
                <Parallax bgImage={image1} strength={800} style={{padding: '70px',}}>
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left mb--30">
                                        <h2 style={{ color: '#EF5474', fontFamily: 'Brice-Black', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750">Meet Our Staff</h2>
                                        <p style={{color: 'white', fontFamily: 'Brice-Light'}}>ATX Float's mission to enhance the lives of individuals by providing a unique and rejuvenating escape makes it truly exceptional. With a strong commitment to customer satisfaction, it offers a serene and transformative experience to its clients. The company's dedication to promoting relaxation, well-being, and mindfulness through cutting-edge technology and luxurious facilities sets it apart in the industry.</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <TeamOne column="col-lg-3 col-md-6 col-sm-6 col-12" teamStyle="team-style--bottom" item="3" />
                        </div>
                    </div>
                    </Parallax>
                </div>
                {/* End Team Area  */}
                {/* <ContactTwo /> */}

                {/* Start Testimonial Area */}
                {/* <div className="rn-testimonial-area bg_color--5 ptb--120" id="testimonial" >
                    <div className="container">
                        <Testimonial />
                    </div>
                </div> */}
                {/* End Testimonial Area */}
                
                <div id="contact" style={contactAreaStyle}>
                <ContactTwo />
                </div>

                                {/* Start Contact Top Area  */}
                <div className="rn-contact-top-area ptb--120 bg_color--5" style={footerBackground}>
                    <div className="container">
                       
                        <div className="row">
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-left" data-aos-duration="750">
                                <div className="rn-address" style={{ backgroundColor: '#f3edd1'}}>
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
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50" data-aos="fade-up" data-aos-duration="750">
                                <div className="rn-address" style={{ backgroundColor: '#f3edd1'}}>
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
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50" data-aos="fade-right" data-aos-duration="750">
                                <div className="rn-address" style={{ backgroundColor: '#f3edd1'}}>
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


                 {/* Start Footer Style  */}
                 <FooterTwo />
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top" >
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp style={{ color: '#EF5474'}}/>
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}

export default InteriorLanding;