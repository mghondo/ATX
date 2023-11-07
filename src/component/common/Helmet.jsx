import React, { Component } from "react";
import {Helmet} from 'react-helmet'

// const backgroundImageStyle = {
//     background: `url('/ATXF_browser_tab_icon_transparent.png')`,
//     // background: url('./ATXF_browser_tab_icon_transparent.png'),
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//   };

class PageHelmet extends Component{

    //sadasda
    render(){
        return(
            <React.Fragment>
                {/* <div style={backgroundImageStyle}> */}
                {/* TRY PUTTING A BACKGROUND IMAGE HERE */}
                <Helmet>
                    {/* <title>{this.props.pageTitle} || React Multipurpose Template </title> */}
                    {/* <title>{this.props.pageTitle} || ATX Float (Helmet) </title> */}
                    
  
                    <title> ATX Float</title>
                    <meta name="description" content="CUSTOM DESIGNS
We offer custom designs on most 
of our products." />
                </Helmet>
                {/* </div> */}
            </React.Fragment>
        )
    }
}


export default PageHelmet;
