/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FiUsers, FiSearch, FiSend, FiTrendingUp, FiSliders, FiDollarSign } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const ServiceList = [
    {
        icon: <FiSearch />,

        title: 'Customizable Product Catalog!!',
        description: 'Waterpark & River Tubes, Waterproof Gear, and more! To make a purchase or get a custom quote contact us at 512-766-4982 '
    },
    {
        icon: <FiSend />,
        title: 'Rapid Nationwide Shipping',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiUsers />,
        title: 'Dedicated Customer Support',
        description: 'Our responsive support team is here to assist you at every splash, providing expert guidance and solutions to elevate your business.'
    },
    {
        icon: <FiTrendingUp />,
        title: 'Exclusive Industry Insights',
        description: 'Stay ahead of the competition with access to our insider industry knowledge and trends, helping you make informed decisions for your water venue.'
    },
    {
        icon: <FiSliders />,
        title: 'Custom Branding Options',
        description: 'Elevate your brand with custom branding options, allowing you to leave a lasting impression on your customers with personalized products.'
    },
    {
        icon: <FiDollarSign />,
        title: 'Bulk Pricing Discounts',
        description: 'Maximize your profitability with our competitive bulk pricing discounts, designed to boost your bottom line and keep your customers thrilled!'
    },
]


class ServiceThree extends Component {
    render() {
        const { column } = this.props;
        const ServiceContent = ServiceList.slice(0, this.props.item);

        return (
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map((val, i) => (
                        <div className={`${column}`} key={i}>
                            <a>
                                <div className="service service__style--2" style={{ backgroundColor: '#9fccd6' }}>
                                    <div data-aos="fade-down" data-aos-duration="650" className="icon" style={{ fontSize: '130px', display: 'flex', justifyContent: 'center' }}>
                                        {val.icon}
                                    </div>
                                    <div className="content" >
                                        <h3 data-aos="fade-right" data-aos-duration="850" style={{ color: '#ef5474', fontFamily: 'Brice-Light', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', fontSize: '40px', textAlign: 'center' }} className="title">{val.title}</h3>
                                        <p data-aos="fade-left" data-aos-duration="950" >{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
