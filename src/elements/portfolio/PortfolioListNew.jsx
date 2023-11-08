import React, { Component } from "react";
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

class PortfolioListNew extends Component {

  getRandomAOSAnimation() {
    const animations = ["fade-left", "fade-right", "fade-up", "fade-down"];
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  }
  render() {
    const { column, styevariation, portfolioItems } = this.props;

    return (
      <React.Fragment>
        {portfolioItems.map((value, index) => (


          <div className={`${column}`} key={index} 
          data-aos={this.getRandomAOSAnimation()}
          data-aos-duration="1000">
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
              {/* <div className={`thumbnail ${value.image}`} style={{ backgroundImage: `url('/assets/images/bg/ATXBanner.jpg')` }}></div> */}
              {/* <div className={`thumbnail ${value.image}`} style={{ backgroundImage: `url(${value.url})`, backgroundSize: '90%' }}></div> */}
              <div
                  className={`thumbnail ${value.image}`}
                  style={{
                    backgroundImage: `url(${value.url})`,
                    ...value.addittionalStyles, // Include additional styles
                      // Include additional styles
                  }}
                ></div>

                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  {/* <p style={{ fontFamily: 'Brice-Black', fontSize: '30px',  }}>{value.category}</p>
                  <h4 style={{ fontFamily: 'Brice-Light' }}><a href="/portfolio-details">{value.title}</a></h4> */}
                  {/* <div className="portfolio-button">
                    <a style={{ fontFamily: 'Brice-Black', color: '#ef5474' }} className="rn-btn" href="/portfolio-details">View Details</a>
                  </div> */}
                </div>
              </div>
              <Link className="link-overlay" to="/portfolio-details"></Link>
            </div>
            <div style={{paddingTop: '20px'}}>
            <p style={{ fontFamily: 'Brice-Black', fontSize: '30px', color: '#ef5474', textAlign: 'center' }}>{value.category}</p>
              {/* <h4 style={{ fontFamily: 'Brice-Light', color: 'black', textAlign:'center'}}><a href="/portfolio-details">{value.title}</a></h4> */}
              <h4 style={{ fontFamily: 'Brice-Light', color: 'black', textAlign:'center'}}><a href="/portfolio-details">
    {value.title.length > 50 ? value.title.slice(0, 50) + '...' : value.title}
  </a></h4>

              
              <div className="portfolio-button" style={{textAlign:'center'}}>
                    <a style={{ fontFamily: 'Brice-Black', color: '#ef5474' }} className="rn-btn" href="/portfolio-details">View Details</a>
                  </div>



            </div>

          </div>
          
        ))}
      </React.Fragment>
    );
  }
}

export default PortfolioListNew;

// "image-4"