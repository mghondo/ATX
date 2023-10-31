import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './GalleryRiver.css'; // Replace with the correct path to your CSS file

AOS.init();

class GalleryFromParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            isOpen: false,
        };
    }

    render() {
        const { tab1, isOpen } = this.state;
        const { photos } = this.props;

        return (
            <div style={{ backgroundColor: '#f3edd1' }}>
                <main className="page-wrapper">
                    {/* Start Portfolio Area */}
                    <div className="rn-portfolio-area ptb--120 bg_color--1 line-separator productImg" style={{ backgroundColor: '#f3edd1', paddingTop: '0px' }}>
                        <div className="container">
                            <div className="row">
                                {photos.map((value, index) => (
                                    <div
                                        className={`col-lg-6 tube ${index % 2 === 0 ? 'even' : 'odd'}`}
                                        key={index}
                                        data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}
                                        data-aos-duration="750"
                                    >
                                        {isOpen && (
                                            <Lightbox
                                                mainSrc={photos[tab1].bigImage}
                                                nextSrc={photos[(tab1 + 1) % photos.length].bigImage}
                                                prevSrc={photos[(tab1 + photos.length - 1) % photos.length].bigImage}
                                                onCloseRequest={() => this.setState({ isOpen: false })}
                                                onMovePrevRequest={() =>
                                                    this.setState({
                                                        tab1: (tab1 + photos.length - 1) % photos.length,
                                                    })
                                                }
                                                onMoveNextRequest={() =>
                                                    this.setState({
                                                        tab1: (tab1 + 1) % photos.length,
                                                    })
                                                }
                                            />
                                        )}
                                        <div className="item-portfolio-static">
                                            <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                                <div className="portfolio-static">
                                                    <div className="thumbnail-inner">
                                                        <div className="thumbnail" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                                        <a href="#portfolio-details">
  <img
    src={value.bigImage}
    
    style={{
      maxWidth: '100%',
      ...value.css, // Merge the styles from value.css
    }}
    alt="Portfolio Images"
  />
</a>

                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p style={{ color: 'grey', fontFamily: 'Brice-Light', textAlign: 'center' }}>{value.category}</p>
                                                            <h4 style={{ fontFamily: 'Brice-Light', textAlign: 'center' }}>
                                                                <a href="#portfolio-details" style={{ color: 'black' }}>{value.title}</a>
                                                            </h4>
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
                    {/* End Portfolio Area */}
                </main>
            </div>
        );
    }
}

export default GalleryFromParent;
