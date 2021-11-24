import React from 'react'
import './button.style.scss';
function Button({text,style}) {
    return (
        <button className={`nexter-btn ${style?style:style}`}>
            {text}
        </button>
    )
}

export default Button
