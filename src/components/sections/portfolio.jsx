import React, { useState } from 'react'
import { projectsData } from '../../utlits/fackData/projectData'
import SlideUp from '../../utlits/animations/slideUp';
import { RiPlayCircleLine } from '@remixicon/react'

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const Portfolio = ({ className }) => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');

    const handleCategoryClick = (item) => {
        setCategory(item)
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);
    }

    // ------ filter unique category
    const filteredCategory = ["All"]
    projectsData.forEach(({ category }) => {
        if (!filteredCategory.includes(category)) {
            filteredCategory.push(category)
        }
    })
    // ------ filter unique category

    const filteredProjects = category === 'All' ? projectsData : projectsData.filter(image => image.category === category);


    return (
        <section id="portfolio" className={`projects-area ${className}`}>
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <h2>Works & Projects</h2>
                                    <p>Explore my portfolio of 3D modeling, animation, rigging, and graphic design projects,
                                        showcasing my expertise in Maya, Photoshop, and creative visual solutions.</p>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <SlideUp>
                        <ul className="project-filter filter-btns-one justify-content-left pb-15">
                            {filteredCategory.map((item, id) => <li key={id} onClick={() => handleCategoryClick(item)} className={item === category ? "current" : ""}>{item}</li>)}
                        </ul>
                    </SlideUp>
                    <div className="row project-masonry-active overflow-hidden">
                        {filteredProjects.map(({ category, id, src, title, videoUrl }) => <Card key={id} id={id} category={category} src={src} title={title} animationClass={animationClass} videoUrl={videoUrl} />)}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio


const Card = ({ category, title, src, animationClass, id, videoUrl }) => {
    const isAnimation = category === "3D Animations";
    
    return (
        <div className={`col-lg-4 col-md-6 item branding game ${animationClass}`}>
            <SlideUp delay={id}>
                <div className="project-item style-two">
                    <div className="project-image">
                        <img src={src} alt="Project" />
                        {isAnimation && videoUrl && (
                            <a 
                                href={videoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="watch-animation-btn"
                            >
                                <RiPlayCircleLine size={20} />
                                Watch Animation
                            </a>
                        )}
                    </div>
                    <div className="project-content">
                        <span className="sub-title">{category}</span>
                        <h3>{title}</h3>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}