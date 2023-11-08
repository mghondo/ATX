import React from 'react';
// import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Parallax } from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// import TeamOne from '../blocks/team/TeamOne';
import Team10 from '../blocks/team/Team1.0';

AOS.init();

// const getAnimation = (index) => {
//     if (index === 0) {
//       return "fade-left";
//     } else if (index === 1) {
//       return "fade-up";
//     } else if (index === 2) {
//       return "fade-right";
//     } else {
//       return "fade-up";
//     }
//   };

// Import any necessary icons here, like FaFacebookF, FaLinkedinIn, and FaInstagram
const image1 = '/assets/images/bg/riverTube2.0.png';
const PopoverExample = () => {
  // const [selectedMember, setSelectedMember] = useState(null);

  // const data = [
  //   {
  //     images: '01',
  //     title: 'Zach Martin',
  //     designation: 'President',
  //     summary: 'Zach Martin, the owner of ATX Float, is a driven entrepreneur whose journey from Florida to Ohio and eventually to Austin, Texas, reflects his commitment to turning a passion into a thriving business...',
  //     socialNetwork: [
  //       {
  //         icon: <FaFacebookF />,
  //         url: '#'
  //       },
  //       {
  //         icon: <FaLinkedinIn />,
  //         url: '#'
  //       },
  //       {
  //         icon: <FaInstagram />,
  //         url: '#'
  //       },
  //     ]
  //   },
  //   {
  //     images: '02',
  //     title: 'Jay Perry',
  //     designation: 'Lead Sales',
  //     summary: 'Jay Perry stands as a key figure at ATX Float, where he has consistently led the company&apos;s sales efforts for an impressive five years...',
  //     socialNetwork: [
  //       {
  //         icon: <FaFacebookF />,
  //         url: '#'
  //       },
  //       {
  //         icon: <FaLinkedinIn />,
  //         url: '#'
  //       },
  //     ]
  //   },
  //   {
  //     images: '03',
  //     title: 'Morgan Hondros',
  //     designation: 'Web Architech',
  //     summary: 'Some gibberish',
  //     socialNetwork: [
  //       {
  //         icon: <FaFacebookF />,
  //         url: 'https://www.facebook.com/morgan.hondros'
  //       },
  //       {
  //         icon: <FaLinkedinIn />,
  //         url: 'https://www.linkedin.com/in/morgan-hondros-781878151/'
  //       },
  //     ]
  //   },
  // ];

  // const getAnimation = (index) => {
  //   if (index === 0) {
  //     return 'fade-left';
  //   } else if (index === 1) {
  //     return 'fade-up';
  //   } else if (index === 2) {
  //     return 'fade-right';
  //   } else {
  //     return 'fade-up';
  //   }
  // };

  // const handleMemberClick = (memberIndex) => {
  //   setSelectedMember(memberIndex);
  // };

  return (
    <div className="rn-team-wrapper pb--120 bg_color--1" id="team" style={{backgroundColor: '#f3edd1', paddingBottom: '0px'}}>
    <Parallax bgImage={image1} strength={800} style={{paddingTop: '70px', paddingBottom: '70px'}}>
        <div className="rn-team-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-left mb--30">
                            <h2 style={{ color: '#EF5474', fontFamily: 'Brice-Black', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750">Meet Our Staff</h2>
                            {/* <p style={{color: 'white', fontFamily: 'Brice-Light'}}>ATX Float's mission to enhance the lives of individuals by providing a unique and rejuvenating escape makes it truly exceptional. With a strong commitment to customer satisfaction, it offers a serene and transformative experience to its clients. The company's dedication to promoting relaxation, well-being, and mindfulness through cutting-edge technology and luxurious facilities sets it apart in the industry.</p> */}
                        </div>
                        
                    </div>
                </div>
                <Team10 column="col-lg-3 col-md-6 col-sm-6 col-12" teamStyle="team-style--bottom" item="3" />
            </div>
        </div>
        </Parallax>
    </div>
  );
};

export default PopoverExample;
