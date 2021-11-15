import React from 'react'
import Paragraph from '../../components/paragraph/paragraph.component';
import './description.style.scss'

let paragrah1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
let paragraph2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
function Description() {
    return (
        <div className='description'>
            <Paragraph text={paragrah1}/>
            <Paragraph text={paragraph2}/>
        </div>
    )
}

export default Description;
