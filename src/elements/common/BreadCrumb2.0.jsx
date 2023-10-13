import React, { Component } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

class Breadcrumb2_0 extends Component {
  render() {
    const { title, parent, backgroundImage, dataBlackOverlay } = this.props;
    const bgImageStyle = {
      backgroundImage: `url('${backgroundImage}')`,
      backgroundPosition: '50% 50%',
    };

    const overlayStyle = {
      backgroundColor: `rgba(0, 0, 0, ${dataBlackOverlay})`,
    };

    return (
      <React.Fragment>
        <div className="breadcrumb-area rn-bg-color ptb--120 bg_image" style={bgImageStyle} data-black-overlay={dataBlackOverlay}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner pt--100">
                  <h2 style={{ fontFamily: 'Brice-Black' }} className="title" data-aos="fade-down" data-aos-duration="750">{title}</h2>
                  <ul className="page-list">
                    <li style={{ fontFamily: 'Brice-Light' }} className="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}`}>Home</Link></li>
                    {parent ? <li style={{ fontFamily: 'Brice-Light' }} className="breadcrumb-item">{parent}</li> : ''}
                    <li style={{ fontFamily: 'Brice-Light' }} className="breadcrumb-item active">{title}</li>
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

export default Breadcrumb2_0;
