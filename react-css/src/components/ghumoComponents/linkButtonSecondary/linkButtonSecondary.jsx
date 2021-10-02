import React from 'react'
import './linkButtonSecondary.style.scss'

function LinkButtonSecondary({text,style}) {
    return (
        <a href="#" className='link-btn-text'> 
            {text}
        </a>
    )
}

export default LinkButtonSecondary
