import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'
import { RiLightbulbFlashLine, RiHeartLine } from '@remixicon/react'

const StrengthsInterests = () => {
    return (
        <section id="strengths-interests" className="strengths-interests-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <SlideUp>
                                <div className="strengths-section">
                                    <div className="section-title">
                                        <RiLightbulbFlashLine size={40} style={{marginBottom: '20px', color: '#007bff'}} />
                                        <h2>Strengths</h2>
                                    </div>
                                    <ul className="strengths-list" style={{listStyle: 'none', padding: 0}}>
                                        <li style={{padding: '10px 0', fontSize: '16px'}}>✓ Quick learner and flexible to any environment</li>
                                        <li style={{padding: '10px 0', fontSize: '16px'}}>✓ Self-motivated and committed</li>
                                        <li style={{padding: '10px 0', fontSize: '16px'}}>✓ Observation skills</li>
                                    </ul>
                                </div>
                            </SlideUp>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <SlideUp>
                                <div className="interests-section">
                                    <div className="section-title">
                                        <RiHeartLine size={40} style={{marginBottom: '20px', color: '#007bff'}} />
                                        <h2>Interests</h2>
                                    </div>
                                    <ul className="interests-list" style={{listStyle: 'none', padding: 0}}>
                                        <li style={{padding: '10px 0', fontSize: '16px'}}>📚 Reading books</li>
                                        <li style={{padding: '10px 0', fontSize: '16px'}}>🎨 Designing</li>
                                        <li style={{padding: '10px 0', fontSize: '16px'}}>🎵 Listening Music</li>
                                    </ul>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StrengthsInterests

