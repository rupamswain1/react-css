import React from 'react'
import SecondaryHeader from '../secondaryHeader/secondaryHeader'
import TertiaryHeading from '../tertiaryHeading/tertiaryHeading'
import Paragraph from '../paragraph/paragraph';
import LinkButtonSecondary from '../linkButtonSecondary/linkButtonSecondary';
import './aboutSection.style.scss'
import img1 from '../../../assets/ghumoAssets/img/nat-1-large.jpg'
import img2 from '../../../assets/ghumoAssets/img/nat-2-large.jpg'
import img3 from '../../../assets/ghumoAssets/img/nat-3-large.jpg'

//const img1='../../../assets/ghumoAssets/img/nat-1.jpg'
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
                        <div class="composition">
                            <img src={img1} alt="photo1" className="composition__photo composition__photo--p1"/>
                            <img src={img2} alt="photo2" className="composition__photo composition__photo--p2"/>
                            <img src={img3} alt="photo3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
           
            </section>
            
            
        </>
    )
}

export default AboutSection
