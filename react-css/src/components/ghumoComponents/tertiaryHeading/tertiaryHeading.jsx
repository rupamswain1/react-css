import React from 'react'
import './tertiaryHeading.style.scss'
function TertiaryHeading({text,Style}) {
    return (
        <h3 className={`tertiary-heading ${Style}`}>
            {text}
        </h3>
    )
}

export default TertiaryHeading
