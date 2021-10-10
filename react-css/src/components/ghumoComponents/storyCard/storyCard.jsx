import React from 'react'
import TertiaryHeading from '../tertiaryHeading/tertiaryHeading';
import Paragraph from '../paragraph/paragraph';


import './storyCard.style.scss'

function StoryCard({image,caption,story,heading}) {
    console.log('AAAAA')
    console.log(caption)
    return (
        <div className='row'>
                <div className='story'>
                    <figure className='story__shape'>
                        <img className='story__img' src={image} alt='Person on tour' />
                        <figcaption className='story__caption'>
                            {caption}
                        </figcaption>
                    </figure>
                    <div className='story__text'>
                        <TertiaryHeading text={heading}/>
                        <Paragraph 
                            text={story}
                        />
                    </div>
                </div>
            </div>
    )
}

export default StoryCard
