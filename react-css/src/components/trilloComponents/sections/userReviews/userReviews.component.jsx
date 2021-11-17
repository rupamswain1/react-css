import React from 'react'
import './userReviews.style.scss';
import Review from '../review/review.component';
import PulsatingButton from '../../components/pulsatingButton/pulsatingButton.component'
import img1 from '../../../../assets/trilloAssets/img/user-1.jpg';
import img2 from '../../../../assets/trilloAssets/img/user-2.jpg';
const data=[
    {
        id:1,
        reviewText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        userPicture:img1,
        userName:'Random Person',
        userDate:'Nov 17th, 2021',
        rating:'7.8'
    },
    {
        id:2,
        reviewText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        userPicture:img2,
        userName:'Second Person',
        userDate:'Jan 17th, 2021',
        rating:'8.8'
    }
]


function UserReviews() {
    return (
        <div className='user-reviews'>
            {
                data.map(review=>{
                    return(
                        <Review key={review.id} {...review}/>
                    )})
            }
            <PulsatingButton text='show more &rarr;' style='review__btn'/>
        </div>
    )
}

export default UserReviews;
