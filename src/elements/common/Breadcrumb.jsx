import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends Component{
    render(){
        const { title , parent} = this.props;
        return(
            <React.Fragment>
                <div className="breadcrumb-area rn-bg-color ptb--120 bg_image "     style={{
      backgroundImage: `url('/assets/images/IMG_6288.png')`, // Use the relative path to your image
      backgroundPosition: '50% 50%', // Set the background position
    }} data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner pt--100">
                                    <h2 style={{fontFamily: 'Brice-Black'}} className="title">{title}</h2>
                                    <ul className="page-list">
                                        <li style={{fontFamily: 'Brice-Light'}} className="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}`}>Home</Link></li>
                                        {parent? <li style={{fontFamily: 'Brice-Light'}}  className="breadcrumb-item">{parent}</li>:''}
                                        <li style={{fontFamily: 'Brice-Light'}}  className="breadcrumb-item active">{title}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Breadcrumb;

