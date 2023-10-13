import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init();

const ProgressOne = (props) => {
    return (
        // Start Single Progressbar 
        <div className={`rn-progress-bar ${props.ProgressStyle}`}>
            <div className="single-progress" data-aos="fade-right" data-aos-duration="750">
                <h6 className="title" style={{fontFamily: 'Brice-Light', color: 'black'}}>Designing</h6>
                <ProgressBar now={95} />
                <span className="label" style={{fontFamily: 'Brice-Light', color: 'black'}}>95%</span>
            </div>

            <div className="single-progress" data-aos="fade-right" data-aos-duration="750">
                <h6 className="title" style={{fontFamily: 'Brice-Light', color: 'black'}}>Managment</h6>
                <ProgressBar now={85} />
                <span className="label" style={{fontFamily: 'Brice-Light', color: 'black'}}>85%</span>
            </div>

            <div className="single-progress" data-aos="fade-right" data-aos-duration="750">
                <h6 className="title" style={{fontFamily: 'Brice-Light', color: 'black'}}>Marketing</h6>
                <ProgressBar now={75} />
                <span className="label" style={{fontFamily: 'Brice-Light', color: 'black'}}>75%</span>
            </div>

            <div className="single-progress" data-aos="fade-right" data-aos-duration="750">
                <h6 className="title" style={{fontFamily: 'Brice-Light', color: 'black', }}>Development</h6>
                <ProgressBar now={80} style={{fontFamily: 'Brice-Light', color: 'black', }}/>
                <span className="label" style={{fontFamily: 'Brice-Light', color: 'black'}}>80%</span>
            </div>
        </div>
        // {/* // End Progress Bar */}
    )
}

export default ProgressOne
