import React from 'react'
import './pararaph.style.scss';
function Paragraph({text}) {
    return (
        <div className='paragraph'>
            {text}  
        </div>
    )
}

export default Paragraph;
