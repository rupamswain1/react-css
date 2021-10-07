import React from 'react'

import "./button.style.scss";

function Button({text,style}) {
    return (
        <a href="#" className={`btn btn-white btn-animated ${style}`}>{text}</a>
    )
}

export default Button
