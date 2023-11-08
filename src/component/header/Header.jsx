import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";
import './header.css';



// const headerStyle = {
//     backgroundImage: `url('/assets/images/IMG_6288.png')`,
//     position: 'top'
//     // backgroundImage: `url('/assets/images/bg/ATXBanner.jpg')`,
//   };


  class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
        };
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({ scrolled: true });
        } else {
            this.setState({ scrolled: false });
        }
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open');
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }
    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        // const { logo, color = 'default-color' } = this.props;
        const headerClass = this.state.scrolled ? 'header-area formobile-menu header--transparent scrolled' : 'header-area formobile-menu header--transparent';
        const fixedClass = this.state.scrolled ? 'fixed-menu' : '';
        const showMenu = this.state.scrolled ? 'block' : 'none'; // Add this line

        let logoUrl= <img src="/assets/images/logo/ATX_Logo_6dcef0.png" style={{ maxWidth: '300px', maxHeight: '40px'  }} alt="Digital Agency" />;
        // if(logo === 'light'){
        //     logoUrl = <img src="/assets/images/logo/" alt="Digital Agency" />;
        // }else if(logo === 'dark'){
        // //    ATX Float_Logo 2/ATX-Float-Logo_Stacked.png
        //     // HERE'S WHERE TO CHANGE THE LOGO-MORGAN
        //     logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
        // }else if(logo === 'symbol-dark'){
        //     logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" />;
        // }else if(logo === 'symbol-light'){
        //     logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />;
        // }else{
        //     logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;
        // }

        
        return(
            // <header className={`header-area formobile-menu header--transparent ${color}`} style={{ backgroundImage: `url(${this.props.backgroundImage})`, backgroundSize: 'cover', }}>
            // <header className={`header-area formobile-menu header--transparent ${color}`} style={{ backgroundColor: this.state.scrolled ? '#343c44' : 'transparent' }}>
            <header className={`${headerClass} ${fixedClass}`} style={{padding: '0px', opacity: this.state.scrolled ? 1 : 0, display: this.state.scrolled ? 'block' : 'none' }}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                                {/* ATX Float */}
                                {/* <h3>ATX Float</h3> */}
                            </a>
                        </div>
                    </div>
                    {/* <div className="header-right"> */}
                    <div className="header-right" style={{ display: showMenu }}>
                        <nav className="mainmenunav d-lg-block" style={{fontFamily: 'Brice-Light'}} >
                            <ul className="mainmenu">
                            <li><Link to="/portfolio" style={{fontFamily:'Brice-Black'}}>Catalog</Link>
                                <ul className="submenu">
                                    <li><a href="/portfolio#riverTubes">River Tubes</a></li>
                                    <li><a href="/portfolio#parkTubes">Park Tubes</a></li>
                                    <li><a href="/portfolio#awesomeGear">Awesome Gear</a></li>
                                </ul>
                                </li>
                                {/* <li><Link to="/" >Home</Link></li> */}
                                {/* <li className="has-droupdown"><Link to="/">Home</Link></li> */}
                                    {/* <ul className="submenu">
                                        <li><Link to="/main-demo">Main Demo</Link></li>
                                        <li><Link to="/dark-main-demo">Main Demo Dark</Link></li>
                                        <li><Link to="/creative-agency">Creative Agency</Link></li>
                                        <li><Link to="/creative-landing">Creative One Page</Link></li>
                                        <li><Link to="/creative-portfolio">Creative Portfolio</Link></li>
                                        <li><Link to="/personal-portfolio">Personal Portfolio</Link></li>
                                        <li><Link to="/portfolio-landing">Portfolio One Page</Link></li>
                                        <li><Link to="/dark-portfolio-landing">Portfolio One Page 02</Link></li>
                                        <li><Link to="/digital-agency">Digital Agency</Link></li>
                                        <li><Link to="/startup">Startup</Link></li>
                                        <li><Link to="/paralax">Paralax</Link></li>
                                        <li><Link to="/portfolio-home">Minimal Portfolio</Link></li>
                                        <li><Link to="/business">Business</Link></li>
                                        <li><Link to="/home-particles">Home Particles</Link></li>
                                        <li><Link to="/studio-agency">Studio Agency</Link></li>
                                        <li><Link to="/designer-portfolio">Designer Portfolio</Link></li>
                                        <li><Link to="/interactive-agency">Interactive Agency</Link></li>
                                    </ul> */}
                                
                                {/* <li className="has-droupdown"><Link to="/service" >Service</Link>
                                    <ul className="submenu">
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/service-details">Service Details</Link></li>
                                    </ul>
                                </li> */}
                                <li><Link to="/about" >About</Link></li>

                                {/* <li className="has-droupdown"><Link to="#pages" >Pages</Link>
                                    <ul className="submenu">
                                        <li><Link to="/blog">Blog List</Link></li>
                                        <li><Link to="/blog-details">Blog Details</Link></li>
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/service-details">Service Details</Link></li>
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                                        <li><Link to="/404">404</Link></li>
                                    </ul>
                                </li> */}
                                {/* <li className="has-droupdown"><Link to="#" >Blocks</Link>
                                    <ul className="submenu">
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/team">Team</Link></li>
                                        <li><Link to="/service">Service</Link></li>
                                        <li><Link to="/video-popup">Video Popup</Link></li>
                                        <li><Link to="/progressbar">Progressbar</Link></li>
                                        <li><Link to="/gallery">Gallery</Link></li>
                                        <li><Link to="/counters">Counters</Link></li>
                                        <li><Link to="/blog">Blog List</Link></li>
                                        <li><Link to="/clint-logo">Clint Logo</Link></li>
                                        <li><Link to="/contact-form">Contact Form</Link></li>
                                        <li><Link to="/google-map">Google Map</Link></li>
                                        <li><Link to="/columns">Columns</Link></li>
                                        <li><Link to="/pricing-table">Pricing Table</Link></li>
                                    </ul>
                                </li> */}
                                <li><Link to="/contact" >Contact</Link></li>

                            </ul>
                        </nav>
                        <div className="header-btn">
                            {/* <a className="rn-btn" href="portfolio">
                                <span>shop now!!!</span>
                            </a> */}
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
                </div>
            </header>
        )
    }
}
export default Header;