import React, { Component } from 'react'
// import PageHelmet from "../component/common/Helmet";
// import Breadcrumb from "../elements/common/Breadcrumb";
// import ScrollToTop from 'react-scroll-up';
// import { FiChevronUp } from "react-icons/fi";
// import Header from "../component/header/Header";
// import Footer from "../component/footer/FooterTwo";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './GalleryRiver.css'; // Replace with the correct path to your CSS file



AOS.init();



const TabOne = [
    {
        image: '02',
        // bigImage: '/assets/images/ATX_Float_Wholesale_files/atx_float_tubes_0013_atx_float_tubes.png_0011_Vector-Smart-Object.jpg',
        // bigImage: '/assets/images/bg/bg-image-10.jpg',
        bigImage: '/assets/images/bg/AmandaTube2.jpg',

        category: 'Web Design',
        title: 'Design is a creative part'
    },
    {
        image: '02',
        // bigImage: '/assets/images/ATX_Float_Wholesale_files/photo-19-scaled-thumbnail-optimized_0017_blindlemon_web-2.png',
        bigImage: '/assets/images/bg/bg-image-4.jpg',
        category: 'Mobile App',
        title: 'The service provide for designer'
    },
    {
        image: '02',
        // bigImage: '/assets/images/ATX_Float_Wholesale_files/atx_float_tubes_0013_atx_float_tubes.png_0011_Vector-Smart-Object.jpg',
        bigImage: '/assets/images/bg/bg-image-5.jpg',
        category: 'Web Design cock',
        title: 'Mobile App landing Design'
    },
    {
        image: '04',
        // bigImage: '/assets/images/ATX_Float_Wholesale_files/photo-19-scaled-thumbnail-optimized_0027_red1_web.png',
        bigImage: '/assets/images/bg/bg-image-6.jpg',
        category: 'Mobile App',
        title: 'Logo Design creativity'
    },
    {
        image: '05',
        // bigImage: '/assets/images/ATX_Float_Wholesale_files/ATX-Float_Tube-Art_Rockin-R-optimized.png',
        bigImage: '/assets/images/bg/bg-image-7.jpg',
        category: 'Web Design',
        title: 'T-shirt design is the part of design'
    },
    {
        image: '06',
        // bigImage: '/assets/images/ATX_Float_Wholesale_files/photo-19-scaled-thumbnail-optimized_0026_floatfest_web.png',
        bigImage: '/assets/images/bg/bg-image-9.jpg',
        category: 'Logo Design',
        title: 'Getting tickets to the big show'
    },
]

class GalleryRiver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            isOpen: false,
        };
    }
    render() {
        const { tab1, isOpen } = this.state;
        return (
            <div style={{ backgroundColor: '#f3edd1'}}>


            <main className="page-wrapper" >

                {/* Start Portfolio Area  */}
                <div className="rn-portfolio-area ptb--120 bg_color--1 line-separator" style={{ backgroundColor: '#f3edd1', paddingTop: '0px'}}>
                    <div className="container">
                        <div className="row">
                            {TabOne.map((value , index) => (
                                // <div className="col-lg-6 tube" key={index} data-aos="fade-down" data-aos-duration="750">
                                <div
                                className={`col-lg-6 tube ${index % 2 === 0 ? 'even' : 'odd'}`}
                                key={index}
                                data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}
                                data-aos-duration="750" 
                              >
                                    {isOpen && (
                                        <Lightbox 
                                            mainSrc={TabOne[tab1].bigImage}
                                            nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                                            prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                                            onCloseRequest={() => this.setState({ isOpen: false })}
                                            onMovePrevRequest={() =>
                                            this.setState({
                                                tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                            })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    tab1: (tab1 + 1) % TabOne.length,
                                                })
                                            }
                                        />
                                    )}
                                    <div className="item-portfolio-static" >
                                        <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                            <div className="portfolio-static">
                                                <div className="thumbnail-inner">
                                                    <div className="thumbnail" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                        <a href="#portfolio-details" >
                                                            {/* <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/> */}
                                                            <img src={`${value.bigImage}`} style={{ maxWidth: '100%', height: '500px' }} alt="Portfolio Images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <div className="inner">
                                                        <p style={{color: 'grey', fontFamily: 'Brice-Light', textAlign:'center'}}>{value.category}</p>
                                                        <h4 style={{ fontFamily: 'Brice-Light', textAlign:'center'}}><a href="#portfolio-details" style={{color:'black'}}>{value.title}</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area  */}

                {/* Start Portfolio Area  */}

                {/* End Portfolio Area  */} 

            </main>
            {/* End Page Wrapper  */}

            {/* Start Back To Top */}

            {/* End Back To Top */}
            
            {/* Start Footer Area  */}
            
            {/* End Footer Area  */}                
            </div>
        )
    }
}


export default GalleryRiver;