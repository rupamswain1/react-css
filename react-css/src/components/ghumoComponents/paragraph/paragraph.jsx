import React from 'react';
import './paragraph.style.scss';
function Paragraph({text,style}) {
    return (
        <p className={`paragraph ${style}`}>
            {text}
        </p>
    )
}

export default Paragraph
