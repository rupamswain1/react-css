
import React from 'react'
import FeatureBox from '../featureBox/featureBox';
import './featureSection.style.scss';
function FeatureSection() {
    return (
        <section className="featureSection">
            <div className='row'>
                <div className='col-1-of-4'>
                    <FeatureBox 
                        icon='icon-basic-world'
                        heading='Explore the world'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    />
                </div>
                <div className='col-1-of-4'>
                    <FeatureBox 
                        icon='icon-basic-compass'
                        heading='Meet Nature'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    />
                </div>
                <div className='col-1-of-4'>
                    <FeatureBox 
                            icon='icon-basic-map'
                            heading='Find your way'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    />
                </div>
                <div className='col-1-of-4'>
                    <FeatureBox 
                            icon='icon-basic-heart'
                            heading='Live a healthier life'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    />
                </div>
            </div>
        </section>
    )
}

export default FeatureSection
