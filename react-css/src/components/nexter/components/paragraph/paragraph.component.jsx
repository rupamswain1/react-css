import React from 'react'
import './paragraph.style.scss'
function Paragraph({text,style}) {
    return (
        <p className={`story__text &{style?style:''}`}>
            {text}
        </p>
    )
}

export default Paragraph
