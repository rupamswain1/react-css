import React from 'react'
import './secondaryHeader.style.scss';
function SecondaryHeader({textContent,Style}) {
    return (
        <div className={`u-test-center ${Style}`}>
            <h2 className='secondary-header'>
                {textContent}
            </h2>
        </div>
    )
}

export default SecondaryHeader
