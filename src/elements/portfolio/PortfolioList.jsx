import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Parallax } from "react-parallax";

const image1 = '/assets/images/bg/riverTube2.0.png';

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'GettiFFFng tickets to the big show'
    },
    {
        image: 'image-5',
        category: 'Development NEW',
        title: 'Getting tickets to the big show'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p style={{fontFamily: 'Brice-Black', fontSize: '40px', color: '#ef5474'}}>{value.category}</p>
                                    <h4 style={{fontFamily: 'Brice-Light'}}><a href="/portfolio-details">{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href="/portfolio-details">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <Link className="link-overlay" to="/portfolio-details"></Link>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;