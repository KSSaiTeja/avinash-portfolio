import React from 'react'
import { Link } from 'react-router-dom'
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import profile from "../../assets/images/about/profile.jpeg"
import cvPdf from "../../assets/Avinash-cv.pdf"
import SlideUp from '../../utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                                <h2>N.AKSHAY VENKATA AVINASH</h2>
                                <p>3D Artist & Graphic Designer</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link to="https://www.linkedin.com/in/avinash-n-53698a214/"><RiLinkedinFill size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There!</p>
                                <h2>
                                    I'm N.AKSHAY VENKATA AVINASH, a 3D Artist and Graphic Designer specializing in Maya, 3D Modeling, Rigging, and Animation.
                                </h2>
                                <p>To work in an organization that provides mean environment of growth and excellence to meet personal and organizational goals with my hard work, perseverance and dedication.</p>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Available for Freelancing</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <a 
                                        href={cvPdf} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="theme-btn"
                                        onClick={(e) => {
                                            // Open in new tab
                                            window.open(cvPdf, '_blank');
                                            // Trigger download
                                            const link = document.createElement('a');
                                            link.href = cvPdf;
                                            link.download = 'Avinash-cv.pdf';
                                            document.body.appendChild(link);
                                            link.click();
                                            document.body.removeChild(link);
                                        }}
                                    >
                                        Download CV <i><RiDownloadLine size={16} /></i>
                                    </a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero