import React from 'react'
import './pulsatingButton.scss'
function PulsatingButton({text,style}) {
    return (
        <button className={`pulsatingButton ${style}`}>
            {text}
        </button>
    )
}

export default PulsatingButton
