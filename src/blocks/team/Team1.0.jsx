import React from 'react'
import data from "./data";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init();


const Team10  = (props) => {
    const itemSlice = data.slice(0 , props.item)
    return (
        <div>
        <div className="container" style={{marginTop: '50px', padding: '0px'}}>      
            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="750">
                    <div className='team'>
                        <div className="thumbnail">
                            <img src={`/assets/images/team/IMG_6427.JPG`} style={{height: '500px'}} alt="Blog Images"/>
                        </div>

                        <div className="content">
                            <h4 className="title">Zach Martin</h4>
                            <p className="designation">CEO</p>
                        </div>
                        {/* <ul className="social-icon" >
                        
                                <li><a>Something</a></li>
                    
                        </ul> */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className='staffPersonal' style={{padding: '30px'}}>
                                <h2 style={{color: '#EF5474', fontFamily: 'Brice-Black', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750">Zach Martin</h2>
                                <p style={{color: 'white', fontFamily: 'Brice-Light'}}>Zach Martin, the owner of ATX Float, is a driven entrepreneur whose journey from Florida to Ohio and eventually to Austin, Texas, reflects his commitment to turning a passion into a thriving business. With over 15 years of experience, he has honed his craft in creating enjoyable and innovative products for individuals seeking fun and relaxation. This wealth of experience has allowed Zach to build invaluable connections with some of the finest producers worldwide, enabling him to craft products that cater to a wide range of budgets and preferences. His unwavering dedication and expertise have found a perfect home in the world of tubes and water sports, bringing the joy of recreation and leisure to countless people. Zach Martin&aposs ATX Float is not just a business but a testament to his pursuit of making outdoor adventures more accessible and enjoyable for all.</p>
                            </div>
                </div>
            </div> 
        </div>
               <hr/>
                <div className="container" style={{marginTop: '60px'}}>
                    <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>

                    <div className="col-lg-6" data-aos="fade-right" data-aos-duration="750">
                        <div className='team'>
                            <div className="thumbnail" >
                                <img src={`/assets/images/team/Jay.jpg`} style={{height: '500px'}} alt="Blog Images"/>
                            </div>

                            <div className="content">
                                <h4 className="title">Jay Perry</h4>
                                <p className="designation">Lead Sales</p>
                            </div>
                            {/* <ul className="social-icon" >
                            
                        
                            </ul> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className='staffPersonal' style={{marginTop: '30px'}}>
                                <h2 style={{color: '#EF5474', fontFamily: 'Brice-Black', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750">Jay Perry</h2>
                                <p style={{color: 'white', fontFamily: 'Brice-Light'}}>Jay Perry stands as a key figure at ATX Float, where he has consistently led the company&apos;s sales efforts for an impressive five years. His unwavering dedication and expertise in the field have played an instrumental role in building and solidifying ATX Float&apos;s reputation as a prominent player in the water sports industry. A true Texas native, Jay&apos;s roots run deep in the Lone Star State, where his local insights and understanding of the Texan lifestyle have greatly contributed to the company&apos;s success. His impressive track record as a leader in sales and his role in nurturing ATX Float&apos;s growth make him a central figure in the company&apos;s journey.</p>
                            </div>
                            </div>
                    </div>
                    </div>

                    
                    <div className="container" style={{marginTop: '60px'}}>
                    <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="750">
                    <div className='team'>
                        <div className="thumbnail">
                            <img src={`/assets/images/team/IMG_6438.jpg`} style={{height: '500px', backgroundPosition: 'top',}} alt="Blog Images"/>
                        </div>

                        <div className="content">
                            <h4 className="title">Morgan Hondros</h4>
                            <p className="designation">Web Engineer</p>
                        </div>
                        {/* <ul className="social-icon" >
                         
                     
                        </ul> */}
                    </div>
                </div>
                <div className="col-lg-6" style={{padding: '30px'}}>
                                <div className='staffPersonal'>
                            <h2 style={{ color: '#EF5474', fontFamily: 'Brice-Black', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', fontSize: '40px' }} data-aos="fade-up" data-aos-duration="750">Morgan Hondros</h2>
                            <p style={{color: 'white', fontFamily: 'Brice-Light'}}>Morgan Hondros is an accomplished web developer with an extensive background in web development, amassing eight years of hands-on experience in the field. His expertise spans various web technologies, with a strong focus on WordPress, Angular, and, most notably, React. As a seasoned React developer, Morgan excels in creating dynamic, interactive, and user-friendly web applications that provide a seamless and engaging user experience. Morgan's commitment to perfection sets him apart in the web development industry. He is known for his meticulous attention to detail and a relentless pursuit of the best-looking and cleanest solutions. This dedication ensures that the websites and web applications he creates not only function flawlessly but also exhibit a high level of visual appeal.</p>
                        </div>

                </div>
                </div>
                </div>

        </div>
        

        // <div className='container'>
        //     <div className="row">
        //         <div className="section-title text-left mb--30" style={{marginTop: '40px'}}>
        //                     <div className='staffPersonal'>
        //                         <h3 style={{ color: '#EF5474', fontFamily: 'Brice-Black', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750">Zach Martin</h3>
        //                         <p style={{color: 'white', fontFamily: 'Brice-Light'}}>Zach Martin, the owner of ATX Float, is a driven entrepreneur whose journey from Florida to Ohio and eventually to Austin, Texas, reflects his commitment to turning a passion into a thriving business. With over 15 years of experience, he has honed his craft in creating enjoyable and innovative products for individuals seeking fun and relaxation. This wealth of experience has allowed Zach to build invaluable connections with some of the finest producers worldwide, enabling him to craft products that cater to a wide range of budgets and preferences. His unwavering dedication and expertise have found a perfect home in the world of tubes and water sports, bringing the joy of recreation and leisure to countless people. Zach Martin&aposs ATX Float is not just a business but a testament to his pursuit of making outdoor adventures more accessible and enjoyable for all.</p>
        //                     </div>
        //         </div>
        //         <div className="section-title text-left mb--30" style={{marginTop: '40px'}}>
        //                     <div className='staffPersonal'>
        //                         <h3 style={{ color: '#EF5474', fontFamily: 'Brice-Black', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750">Jay Perry</h3>
        //                         <p style={{color: 'white', fontFamily: 'Brice-Light'}}>Jay Perry stands as a key figure at ATX Float, where he has consistently led the company&apos;s sales efforts for an impressive five years. His unwavering dedication and expertise in the field have played an instrumental role in building and solidifying ATX Float&apos;s reputation as a prominent player in the water sports industry. A true Texas native, Jay&apos;s roots run deep in the Lone Star State, where his local insights and understanding of the Texan lifestyle have greatly contributed to the company&apos;s success. His impressive track record as a leader in sales and his role in nurturing ATX Float&apos;s growth make him a central figure in the company&apos;s journey.</p>
        //                     </div>
        //         </div>
        //         <div className="section-title text-left mb--30" style={{marginTop: '40px'}}>
        //                     <div className='staffPersonal'>
        //                         <h3 style={{ color: '#EF5474', fontFamily: 'Brice-Black', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750">Morgan Hondros</h3>
        //                         <p style={{color: 'white', fontFamily: 'Brice-Light'}}>Morgan Hondros is an accomplished web developer with an extensive background in web development, amassing eight years of hands-on experience in the field. His expertise spans various web technologies, with a strong focus on WordPress, Angular, and, most notably, React. As a seasoned React developer, Morgan excels in creating dynamic, interactive, and user-friendly web applications that provide a seamless and engaging user experience. Morgan's commitment to perfection sets him apart in the web development industry. He is known for his meticulous attention to detail and a relentless pursuit of the best-looking and cleanest solutions. This dedication ensures that the websites and web applications he creates not only function flawlessly but also exhibit a high level of visual appeal.</p>
        //                     </div>
        //         </div>

        //         </div>
        //             </div>

// 'Zach Martin, the owner of ATX Float, is a driven entrepreneur whose journey from Florida to Ohio and eventually to Austin, Texas, reflects his commitment to turning a passion into a thriving business. With over 15 years of experience, he has honed his craft in creating enjoyable and innovative products for individuals seeking fun and relaxation. This wealth of experience has allowed Zach to build invaluable connections with some of the finest producers worldwide, enabling him to craft products that cater to a wide range of budgets and preferences. His unwavering dedication and expertise have found a perfect home in the world of tubes and water sports, bringing the joy of recreation and leisure to countless people. Zach Martin&aposs ATX Float is not just a business but a testament to his pursuit of making outdoor adventures more accessible and enjoyable for all.',
    
    )
}
export default Team10

