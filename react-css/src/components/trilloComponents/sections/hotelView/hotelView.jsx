import React from 'react'
import Overview from '../overview/overview.component'
import './hotelView.style.scss'

import img1 from '../../../../assets/trilloAssets/img/hotel-1.jpg'
import img2 from '../../../../assets/trilloAssets/img/hotel-2.jpg'
import img3 from '../../../../assets/trilloAssets/img/hotel-3.jpg'

function HotelView() {
    return (
        <main className='hotelView'>
            <div className='gallary'>
                <figure className='gallary__item'>
                    <img src={img1} alt='Photo of hotel 1' className='gallary__photo'/>
                </figure>
                <figure className='gallary__item'>
                    <img src={img2} alt='Photo of hotel 2' className='gallary__photo'/>
                </figure>
                <figure className='gallary__item'>
                    <img src={img3} alt='Photo of hotel 3' className='gallary__photo'/>
                </figure>
            </div>
            <Overview
                heading={'Hotel Leela Palace'}
                location={'GandhiNagar, Gujrat'}
                averageRating={8.9}
                ratingCount={420}
            />
        </main>
    )
}

export default HotelView
