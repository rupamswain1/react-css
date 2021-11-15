import React from 'react'
import './pulsatingButton.scss'
function PulsatingButton({text}) {
    return (
        <button className='pulsatingButton'>
            {text}
        </button>
    )
}

export default PulsatingButton
