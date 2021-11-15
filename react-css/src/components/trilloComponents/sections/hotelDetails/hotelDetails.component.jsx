import React from 'react'
import Description from '../description/description.component';
import UserReviews from '../userReviews/userReviews.component';
import './hotelDetail.style.scss'
function HotelDetails() {
    return (
        <div className='details'>
            <Description/>
            <UserReviews/>
        </div>
    )
}

export default HotelDetails;
