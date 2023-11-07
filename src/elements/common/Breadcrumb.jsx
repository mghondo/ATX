import React, { Component } from "react";
import { Link } from "react-router-dom";
// import TypingAnimation from "./TypingAnimation";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

class Breadcrumb extends Component {
  render() {
    const { title, parent, backgroundImage } = this.props;
    // Set the background image URL to the provided prop or use a default image URL
    const backgroundUrl = backgroundImage || '/assets/images/bg/ATXBanner.jpg';

    // Check if the title from the parent is 'ATX Float'
    const shouldHideBreadcrumb = title === 'ATX Float';

    return (
      <React.Fragment>
        <div
          className="breadcrumb-area rn-bg-color ptb--120 bg_image"
          style={{
            backgroundImage: `url(${backgroundUrl})`, // Use the provided or default image URL
            backgroundPosition: 'right', // Set the background position
          }}
          data-black-overlay="1"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner pt--100">
                  <h2 style={{ fontFamily: 'Brice-Black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', color: '#ef5474'}} data-aos="fade-down" data-aos-duration="750" className="title">{title}</h2>
                  <ul className="page-list">
                    {/* Conditionally render the 'breadcrumb-item' elements and the 'Shop Now' button */}
                    {!shouldHideBreadcrumb && (
                      <li style={{ fontFamily: 'Brice-Light' }} className="breadcrumb-item">
                        <Link to={`${process.env.PUBLIC_URL}`}>Home</Link>
                      </li>
                    )}
                    {parent ? (!shouldHideBreadcrumb ? (
                      <li style={{ fontFamily: 'Brice-Light' }} className="breadcrumb-item">
                        {parent}
                      </li>
                    ) : null) : null}
                    {!shouldHideBreadcrumb && (
                      <li style={{ fontFamily: 'Brice-Light' }} className="breadcrumb-item active">
                        {title}
                      </li>
                    )}
                    {/* Conditionally render the 'Shop Now' button based on the 'title' and 'shouldHideBreadcrumb' */}
                    {title !== "Catalog" && (
                      <div data-aos="fade-up" data-aos-duration="750" className="slide-btn">
                        <a
                          style={{
                            fontFamily: 'Brice-Black',
                            fontSize: '30px',
                            color: '#ef5474',
                            marginTop: '30px',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                          }}
                          className="rn-button-style--2 btn-primary-color"
                          href="/portfolio"
                        >
                          Shop Now!
                        </a>
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Breadcrumb;
