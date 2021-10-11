import React from 'react'
import AboutSection from '../aboutSection/aboutSection.compoent';
import FeatureSection from '../../ghumoComponents/featureSection/featureSection';
import ToursSection from '../toursSection/ toursSection';
import StoriesSection from '../storiesSection/storiesSection';
import BookingSection from '../bookingSection/bookingSection';
function Main() {
    return (
        <main>
            <AboutSection/>
            <FeatureSection/>
            <ToursSection/>
            <StoriesSection/>
            <BookingSection/>
        </main>
    )
}

export default Main;
