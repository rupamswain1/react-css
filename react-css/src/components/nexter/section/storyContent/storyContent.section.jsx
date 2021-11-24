import React from 'react'
import './storyContent.style.scss';
import {H2,H3} from '../../components/headings/headings.component';
import Paragraph from '../../../../components/nexter/components/paragraph/paragraph.component'
import Button from '../../components/button/button.component';
function StoryContent() {
    return (
        <div className='story__content'>
            <H3 text='Happy Customers' style='mb-sm'/>
            <H2 style='heading-2--dark mb-md' text='&ldquo; The best descision of our lives'/>
            <Paragraph text={'dsfcsadfcsd sdcsadcf asdxjasodjnxaosnd asdko asdaskcnmx cownso'}
            />
            <Button text='Find your Home'/>

        </div>
    )
}

export default StoryContent
