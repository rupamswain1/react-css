import React from 'react'
import BookingPopup from '../../components/ghumoComponents/bookingPopup/bookingPopup';
import Header from '../../components/ghumoComponents/header/header.component';
import Main from '../../components/ghumoComponents/main/main.component';
import Navigation from '../../components/ghumoComponents/navigation/navigation';
import './ghumo.style.scss';

function GhumoPage() {
    return (
        <div className='bodyContainer'>
            <BookingPopup/>
            <Navigation/>
            <Header/>
            <Main/>
        </div>
    )
}

export default GhumoPage;