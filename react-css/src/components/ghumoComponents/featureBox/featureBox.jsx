import './featureBox.style.scss'

import React from 'react'
import TertiaryHeading from '../tertiaryHeading/tertiaryHeading';
import Paragraph from '../paragraph/paragraph';

function FeatureBox({icon,heading,text}) {
    return (
        <div className="featureBox">
                <i className={`featureBox__icon ${icon}`}></i>
                <TertiaryHeading text={heading}/>
                <Paragraph text={text} style='paragraph__text'/>
        </div>
    )
}

export default FeatureBox
