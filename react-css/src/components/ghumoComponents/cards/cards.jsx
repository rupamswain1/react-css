import React from 'react';
import './cards.style.scss';
function Cards() {
    return (
        <div className='card'>
            <div className="card__side card__side--front card__side--front--1">
            Front...
            </div>
            <div className="card__side card__side--back card__side--back--1">
            Back
            </div>
        </div>
    )
}

export default Cards;
