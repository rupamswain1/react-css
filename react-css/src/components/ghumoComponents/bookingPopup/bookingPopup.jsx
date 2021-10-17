import React from 'react'
import SecondaryHeader from '../secondaryHeader/secondaryHeader';
import TertiaryHeading from '../tertiaryHeading/tertiaryHeading';
import Paragraph from '../paragraph/paragraph';
import Button from '../button/button';
import './bookingPopup.style.scss';
import img1 from '../../../assets/ghumoAssets/img/nat-8.jpg';
import img2 from '../../../assets/ghumoAssets/img/nat-9.jpg'


function BookingPopup() {
    return (
        <div className='popup' id='booking-popup'>
            <div className='popup__content'>
                <div className='popup__left'>
                    <img src={img1} alt='Tour Photo' className='popup__img'/>
                    <img src={img2} alt='Tour Photo' className='popup__img'/>
                </div>
                <div className='popup__right'>
                    <a className='popup__close' href="#section-tours">&times;</a>
                     <SecondaryHeader textContent={'start booking now'} Style='popup__heading'/>
                     <TertiaryHeading text='important!!- Plaese read these terms before booking' />
                     <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." style='popup__text'/>
                     <div className='popup__btn-center'>
                        <Button text='Book Now!' style='btn-green popup__btn'/>
                     </div>
                     
                </div>
            </div>
        </div>
    )
}

export default BookingPopup
