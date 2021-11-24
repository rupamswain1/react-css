import React from 'react'
import './headings.style.scss';
export function H1({text,style}) {
    return (
        <h1 className={`heading-1 ${style?style:''}`}>
            {text}
        </h1>
    )
}

export function H2({text,style}) {
    return (
        <h2 className={`heading-2 ${style?style:''}`}>
            {text}
        </h2>
    )
}
export function H3({text,style}) {
    return (
        <h3 className={`heading-3 ${style?style:''}`}>
            {text}
        </h3>
    )
}
export function H4({text,style}) {
    return (
        <h4 className={`heading-3 ${style?style:''}`}>
            {text}
        </h4>
    )
}