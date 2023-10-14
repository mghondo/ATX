import React from 'react'
import data from "./data";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init();
const getAnimation = (index) => {
    if (index === 0) {
      return "fade-left";
    } else if (index === 1) {
      return "fade-up";
    } else if (index === 2) {
      return "fade-right";
    } else {
      return "fade-up";
    }
  };

const TeamOne = (props) => {
    const itemSlice = data.slice(0 , props.item)
    return (


        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
            {itemSlice.map((value , i ) => (
                <div className={`${props.column}`} key={i} data-aos={getAnimation(i)} data-aos-duration="750">
                    <div className={`team ${props.teamStyle}`}>
                        <div className="thumbnail">
                            <img src={`/assets/images/team/team-${value.images}.jpg`} alt="Blog Images"/>
                        </div>
                        <div className="content">
                            <h4 className="title">{value.title}</h4>
                            <p className="designation">{value.designation}</p>
                        </div>
                        <ul className="social-icon" >
                            {value.socialNetwork.map((social, index) =>
                                <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                            )}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default TeamOne

