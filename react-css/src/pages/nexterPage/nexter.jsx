import React from 'react'
import './nexter.style.scss';

import Sidebar from '../../components/nexter/section/sidebar/sidebar.section'
import Headers from '../../components/nexter/section/header/header.section';
import Realtors from '../../components/nexter/section/realtors/realtors.section'
import Features from '../../components/nexter/section/features/features.section'
import StoryPictures from '../../components/nexter/section/storyPictures/storyPictures.section';
import StoryContent from '../../components/nexter/section/storyContent/storyContent.section';
import Homes from '../../components/nexter/section/homes/homes.sections';
import Galary from '../../components/nexter/section/gallary/gallary.section';
import Footer from '../../components/nexter/section/footer/footer.section';
function Nexter() {
    return (
        <div className='nexterMainContainer'>
            <div className='nexterContainer'>
                 <Sidebar/>
                 <Headers/>
                 <Realtors/>
                 <Features/>
                 <StoryPictures/>
                 <StoryContent/>
                 <Homes/>
                 <Galary/>
                 <Footer/>
            </div>
        </div>
        
    )
}

export default Nexter;
