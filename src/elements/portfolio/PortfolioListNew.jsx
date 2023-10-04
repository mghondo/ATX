import React, { Component } from "react";
import { Link } from "react-router-dom";

class PortfolioListNew extends Component {
  render() {
    const { column, styevariation, portfolioItems } = this.props;

    return (
      <React.Fragment>
        {portfolioItems.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
              {/* <div className={`thumbnail ${value.image}`} style={{ backgroundImage: `url('/assets/images/bg/ATXBanner.jpg')` }}></div> */}
              <div className={`thumbnail ${value.image}`} style={{ backgroundImage: `url(${value.url})` }}></div>

                <div className={`bg-blr-image ${value.image}`}></div>
                // "image-4"
              </div>
              <div className="content">
                <div className="inner">
                  <p style={{ fontFamily: 'Brice-Black', fontSize: '40px', color: '#ef5474' }}>{value.category}</p>
                  <h4 style={{ fontFamily: 'Brice-Light' }}><a href="/portfolio-details">{value.title}</a></h4>
                  <div className="portfolio-button">
                    <a style={{ fontFamily: 'Brice-Black', color: '#ef5474' }} className="rn-btn" href="/portfolio-details">View Details</a>
                  </div>
                </div>
              </div>
              <Link className="link-overlay" to="/portfolio-details"></Link>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default PortfolioListNew;

// "image-4"