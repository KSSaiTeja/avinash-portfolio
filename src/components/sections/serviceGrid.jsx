import { RiGlobalFill, RiPantoneFill, RiQuillPenLine, RiCodeSSlashLine, RiFileEditLine, RiComputerLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Skills</p>
                                    <h2>My Skills & Expertise</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiCodeSSlashLine size={60} />} title={"Diploma in Maya"} description={"Professional certification in Autodesk Maya for 3D modeling, animation, and visual effects."} />
                        <Card id={2} icon={<RiGlobalFill size={60} />} title={"3D Modeling"} description={"Creating assets, cords, environment buildings, and characters with precision and detail."} />
                        <Card id={3} icon={<RiFileEditLine size={60} />} title={"Rigging"} description={"Full human body and vehicle rigging for animation pipelines."} />
                        <Card id={4} icon={<RiPantoneFill size={60} />} title={"Animation"} description={"Character animation including running, walking, and facial expressions."} />
                        <Card id={5} icon={<RiQuillPenLine size={60} />} title={"Photoshop"} description={"Complete photo editing, colorization, and graphic design work."} />
                        <Card id={6} icon={<RiComputerLine size={60} />} title={"M.S. Office"} description={"Proficient in Microsoft Office suite for documentation and presentations."} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}