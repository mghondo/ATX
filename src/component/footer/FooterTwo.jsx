import React from 'react';
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const SocialShare = [
    // {Social: <FaFacebookF /> , link: 'https://www.facebook.com/atxfloat/'},
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/atxfloat/' },
    // {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    // {Social: <FaInstagram /> , link: 'https://www.instagram.com/atx.float/'},
    { Social: <FaInstagram />, link: 'https://www.instagram.com/atx.float/' },
    // {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

const FooterTwo = () => {
    return (
        <div className="footer-style-2 ptb--30 bg_image " data-black-overlay="1" style={{ backgroundColor: '#343c44' }}>
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20">
                                <a href="/">
                                    {/* <img src="/assets/images/logo/logo.png" alt="Logo images"/> */}
                                    <img src="/assets/images/logo/ATX_Logo_6dcef0.png" alt="Logo images" />
                                    {/* trydo/src/component/footer/ATX_Logo_6dcef0.png */}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val, i) => (
                                    <li key={i}><a href={`${val.link}`} rel="noopener noreferrer" target="_blank">{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                            <div className="text">
                                <p>© 2023 ATX-Float. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterTwo;