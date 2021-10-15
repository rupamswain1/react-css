import React from 'react'
import AboutSection from '../aboutSection/aboutSection.compoent';
import FeatureSection from '../../ghumoComponents/featureSection/featureSection';
import ToursSection from '../toursSection/ toursSection';
import StoriesSection from '../storiesSection/storiesSection';
import BookingSection from '../bookingSection/bookingSection';
import Footer from '../footer/Footer';

function Main() {
    return (
        <main>           
            <AboutSection/>
            <FeatureSection/>
            <ToursSection/>
            <StoriesSection/>
            <BookingSection/>
            <Footer/>
        </main>
    )
}

export default Main;
