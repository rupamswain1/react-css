import React from 'react'

import "./button.style.scss";

function Button({text,style,target}) {
    if(!target){
        target="";
    }
    return (
        <a href={`#${target}`} className={`btn btn-white btn-animated ${style}`}>{text}</a>
    )
}

export default Button
