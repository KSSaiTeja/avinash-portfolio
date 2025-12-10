import { RiBookLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'06/2025 – 08/2025'} title={'Graphic Designer'} institution={'Birthday.com | Hyderabad'} description={'Complete photo editing using photoshop'} />
                                    <Card year={'11/2023 – 05/2025'} title={'Executive'} institution={'Mango mass media | Hyderabad'} description={'Conversion of black & white movies into coloured movies with the help of using photoshop'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2017 – 2019'} title={'Board of Intermediate Education'} institution={'Mathrusri junior college | Rajahmundry'} />
                                    <Card year={'2016 – 2017'} title={'Board of Secondary Education'} institution={'Z.P. High School | Ambajipeta'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution, description }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                    {description && <p style={{marginTop: '8px', fontSize: '14px', color: '#666'}}>{description}</p>}
                </div>
            </div>
        </SlideUp>
    )
}