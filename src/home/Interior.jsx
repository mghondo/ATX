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


const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'ATX Float',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Shop Now!',
        buttonLink: '/contact'
    }
]

const backgroundStyle = {

    // backgroundImage: `url('IMG_6288.png')`,
    backgroundImage: `url('/assets/images/bg/ATXBanner.jpg')`,
    // backgroundSize: '150% auto',
    backgroundSize: 'cover',
    
    // trydo/build/assets/images/bg/ATXBanner.jpg

  };

  const amandaBkGround = {
    backgroundImage: `url('/assets/images/bg/AJS_4086-Edit_02.jpg')`
  }

const backgroundlightYellow = {
    backgroundColor: '#fbff68'
}

const backGroundBrown = {
    backgroundColor: '#dad27a'
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
                                    {/* <li><a href="#service">Service</a></li>
                                    <li><a href="#getstart">Get Start</a></li>
                                    <li><a href="#about">About</a></li> */}
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#testimonial">Testimonial</a></li>
                                    <li><a href="#catalog">Catalog</a></li>
                                </Scrollspy>
                            </nav>
                            <div className="header-btn">
                                <a className="rn-btn" href="#catalog">
                                    <span>Shop Now</span>
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
                            <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                
                                            <div className={`inner ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                {value.description ? <p style={{ fontFamily: 'Brice-Light' }} className="description">{value.description}</p> : ''}
                                                {value.buttonText ? <div  style={{ fontFamily: 'Brice-Light' }}className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href="#catalog">{value.buttonText}</a></div> : ''}
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
                <div className="portfolio-area ptb--120 bg_color--1" id="catalog" style={ backgroundlightYellow }>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-left service-style--3 mb--30">
                                    <h2 style={{ fontFamily: 'Brice-Black', color: '#ef5474'}} className="title text-center">Park Tubes, River Tubes and More</h2>
                                    <p style={{ fontFamily: 'Brice-Light' }} className="text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper portfolio-sacousel-inner mb--55">
                        <div className="portfolio-slick-activation mt--30 mt_sm--30">
                            <Slider {...portfolioSlick2}>
                                {PortfolioList2.map((value , index) => (
                                    <div className="portfolio portfolio-interior-design" key={index}>
                                        <div className="thumbnail-inner">
                                            <div className={`thumbnail ${value.image}`}></div>
                                            <div className={`bg-blr-image ${value.image}`}></div>
                                        </div>
                                        <div className="content">
                                            <div className="inner">
                                                <p>{value.category}</p>
                                                <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                <div className="portfolio-button">
                                                    <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start Service Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg_color--1" style={backGroundBrown} id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="feature-area">
                                    <span style={{ color: '#ef5474'}}>FUTURE HOUSE</span>
                                    <h3 className="title mt--20 fontWeight500 lineheight--1-8">ATX Float is a team of product developers & designers, graphic artists, sales managers, and distribution personnel. The product design and management team office in Austin Texas, and warehousing and distribution is based in New Braunfels Texas.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper mt--30">
                            {ServiceListOne.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--1">
                                            <div className="icon">
                                                {/* <img src={`/assets/images/icons/${val.icon}`} alt="Service Icon"/> */}
                                            </div>
                                            <div className="content">
                                                <h4 style={{ color: '#ef5474'}} className="title">{val.title}</h4>
                                                <p style={{ color: '#423f39' }}>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>  
                {/* End Service Area  */} 

                {/* Start Call To Action Area  */}
                <div style={amandaBkGround} className="call-to-action-wrapper call-to-action bg_image bg_image-36 text-white-wrapper ptb--180 ptb_lg--80 ptb_md--80 ptb_sm--80" id="getstart" >
                    {/*  style={amandaBkGround} */}
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4"></div>
                            <div className="col-lg-8">
                                <div className="inner text-right" style={{ paddingBottom: '40px' }}>
                                    <span>Shop Around</span>
                                    <h2>Take a look at <br/>our catalog</h2>
                                    <a className="rn-button-style--2 mt-d-70 mt_sm--30 mt_md--30" href="#catalog"><span>Shop</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Call To Action Area  */}


                {/* Start CounterUp Area */}
                {/* <div className="rn-counterup-area pt--80 pt_sm--50 pt_md--50 pb--120 bg_color--1">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div> */}
                {/* End CounterUp Area */}

                {/* Start Content Box  */}
                <div className="rn-content-box-area rn-content-box-style--1 pb--120 bg_color--1" id="about" style={{ paddingTop: '30px' }}>
                    <div className="row row--0 align-items-center">
                        <div className="col-lg-12 col-xl-4">
                            <div className="thumbnail">
                                {/* <img src="/assets/images/featured/featured-01.jpg" alt="Featured Images"/> */}
                                <img src="/assets/images/about/IMG_6294.png" alt="Featured Images"/>
                                {/* /assets/images/featured/featured-01.jpg
                               /assets/images/about/IMG_6294.png */}
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                        {/* mt_lg--50 mt_md--30 mt_sm--30 */}
                            <div className="content">
                                {/* <p className="subtitle"><span>Modern</span> Design For Interior</p> */}
                                <h2 className="fontWeight500" style={{ color: 'black' }}>How We Started</h2>
                                <p> Founded by Zachary Martin in 2013, ATX Float was born on the rivers in Central Texas. While running another product development company called Product Creations Group and living in Austin Texas, Zach spent much of the summers on the rivers in San Marcos Texas and New Braunfels Texas. <br/><br/>After realizing a significant need for better equipment and gear, Zach began developing river tubes, waterproof phone pouches, dry bags, and other waterproof gear that replaced the old black tire inner tubes and other tired old products used and discarded in the rivers. The new colorful tubes and products have added value to river patrons and enhanced the beauty of the rivers by changing the visual landscape of tubes floating down the river while allowing the river operators to customize their branding and equipment to better serve their river patrons.
                                <br/><br/>As the river supply grew, Zach expanded the team and product line serving waterparks, beaches, marinas, and retailers while giving the watersport supply operation its own brand name and life under ATX Float. 
                                <br/><br/>ATX Float now supplies wholesale tubes and products to Waterparks, River Outfitters, Marinas, Beach Shops, and retailers all around the USA and abroad. </p>
                                {/* <ul className="list-style mt--30">
                                    <li>Yet this above sewed flirted opened ouch</li>
                                    <li>Goldfinch realistic sporadic ingenuous</li>
                                    <li>Abominable this abidin far successfully then like piquan</li>
                                    <li>Risus commodo viverra</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                </ul> */}
                            </div>
                        </div> 
                    </div>
                </div>
                {/* End Content Box  */}

                {/* Start Team Area  */}
                <div className="rn-team-wrapper pb--120 bg_color--1" id="team">
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="section-title text-left mb--30">
                                        <h2>Meet Our Designer</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <TeamOne column="col-lg-3 col-md-6 col-sm-6 col-12" teamStyle="team-style--bottom" item="4" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120" id="testimonial" >
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}
                


                 {/* Start Footer Style  */}
                 <FooterTwo />
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}

export default InteriorLanding;