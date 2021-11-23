import React from 'react'
import './feature.style.scss'
function Feature({id,h4,description,logo}) {
    return (
        <div className='feature'>
            <svg className='feature__icon'>
                <use xlinkHref={logo}></use>
            </svg>
            <h4 className='heading-4'>{h4}</h4>
            <p className='feature__text'>
                {description}
            </p>
        </div>
    )
}

export default Feature
