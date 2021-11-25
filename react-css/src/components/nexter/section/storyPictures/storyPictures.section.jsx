import React from 'react'
import './storyPictures.style.scss';

import img1 from '../../../../assets/nexter/img/story-1.jpeg';
import img2 from '../../../../assets/nexter/img/story-2.jpeg'
function StoryPictures() {
    return (
        <div className='story__pictures'>
            <img src={img1} alt='Couple with new house' className='story__img--1'/>
            <img src={img2} alt='New House' className='story__img--2'/>
        </div>
    )
}

export default StoryPictures
