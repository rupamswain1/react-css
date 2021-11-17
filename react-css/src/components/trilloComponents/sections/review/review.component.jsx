import React from 'react'
import './review.style.scss';


function Review({reviewText,userPicture,userName,userDate,rating}) {
    return (
        <figure className='review'>
            <blockquote className='review__text'>
                {reviewText}
            </blockquote>
            <figcaption className='review__user'>
                <img src={userPicture} alt='user photo' className='review__photo'/>
                <div className='review__user-box'>
                    <p className='review__user-name'>
                        {userName}
                    </p>
                    <p className='review__user-date'>
                        {userDate}
                    </p>
                </div>
                <div className='review__rating'>{rating}</div>
            </figcaption>
        </figure>
    )
}

export default Review;
