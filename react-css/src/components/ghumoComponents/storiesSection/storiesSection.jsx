import React from 'react'
import SecondaryHeader from '../secondaryHeader/secondaryHeader'
import StoryCard from '../storyCard/storyCard';
import LinkButtonSecondary from '../linkButtonSecondary/linkButtonSecondary';
import img from '../../../assets/ghumoAssets/img/nat-8.jpg';
import img2 from '../../../assets/ghumoAssets/img/nat-9.jpg';
import videomp4 from '../../../assets/ghumoAssets/img/video.mp4';
import videowebm from '../../../assets/ghumoAssets/img/video.webm';
import './storiesSection.style.scss'

const storyData=[
    {
        image:img,
        heading:'i had the best week with my family',
        caption:'Rupam Swain',
        story:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla ultrices sapien et cursus. Duis vel est eu orci malesuada pretium. Etiam volutpat vestibulum mattis. Nunc sit amet dolor at lacus malesuada ullamcorper. Morbi dapibus tortor sed diam egestas, sed sodales odio ornare. Orci varius natoque penatibus et magnis dis parturient montes,',
    },
    {
        image:img2,
        heading:'Best Trip Ever!!!!',
        caption:'Rupam Swain',
        story:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla ultrices sapien et cursus. Duis vel est eu orci malesuada pretium. Etiam volutpat vestibulum mattis. Nunc sit amet dolor at lacus malesuada ullamcorper. Morbi dapibus tortor sed diam egestas, sed sodales odio ornare. Orci varius natoque penatibus et magnis dis parturient montes,',
    }
];

function StoriesSection() {
    return (
        <section className='story-section'>
            <div className='bg-video'>
                <video className='bg-video__content' autoPlay muted loop>
                    <source src={videomp4} type='video/mp4'/>
                    <source src={videowebm} type='video/webm'/>
                    Your video cannot be played
                </video>
            </div>
            <div className='u-test-center u-margin-bottom-big'>
                <SecondaryHeader textContent={'We make people genuinly happy'} Style='u-margin-top-medium'/>
               
            </div>
            {
                    storyData.map((story)=>{
                       return(
                        <StoryCard {...story}/>
                       );
                    })
                }
            <div className='story-section__link-btn-center'>
                <LinkButtonSecondary text='read all stories &rarr;'/>
            </div>
           
        </section>
    )
}

export default StoriesSection
