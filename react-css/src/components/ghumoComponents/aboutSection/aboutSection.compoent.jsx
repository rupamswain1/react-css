import React from 'react'
import SecondaryHeader from '../secondaryHeader/secondaryHeader'
import TertiaryHeading from '../tertiaryHeading/tertiaryHeading'
import Paragraph from '../paragraph/paragraph';
import LinkButtonSecondary from '../linkButtonSecondary/linkButtonSecondary';
import './aboutSection.style.scss'
function AboutSection() {
    return (
        <>
            <section className='section-about'>
                <SecondaryHeader textContent="exciting tours for adventurous people" Style={'u-margin-bottom-big'}/>
                <div className='row'>
                    <div className='col-1-of-2'>
                       <TertiaryHeading 
                            text={"You're going to fall in love with nature"} Style={'u-margin-bottom-small'}
                       />
                       <Paragraph
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                       />
                        <TertiaryHeading 
                            text={"live adventure like you have never before"}
                        />
                       <Paragraph
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                       />
                       <LinkButtonSecondary text='Learn More &rarr;'/>
                    </div>
                    <div className='col-1-of-2'>
                        Image will be displayed here
                    </div>
                </div>
           
            </section>
            
        </>
    )
}

export default AboutSection
