import React from 'react'
import profile from "../../assets/images/about/profile.png"
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I'm N.AKSHAY VENKATA AVINASH, a 3D Artist and Graphic Designer.
                                </h2>
                                <p>To work in an organization that provides mean environment of growth and excellence to meet personal and organizational goals with my hard work, perseverance and dedication.</p>
                                <p>I specialize in 3D Modeling, Rigging, Animation, and Graphic Design using Maya and Photoshop. With experience in converting black & white movies to color and complete photo editing, I bring creativity and technical expertise to every project.</p>
                                <div className="hero-btns">
                                    <a href="contact.html" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></a>
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

export default Summery