import React from 'react';
import Button from '../button/button';
import './cards.style.scss';
import img1 from '../../../assets/ghumoAssets/img/nat-4.jpg';
function Cards({heading,details,price,image}) {
    return (
        <div className='card'>
            <div className="card__side card__side--front card__side--front--1">
                <div className='card__picture card__picture--1'>
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className='card__heading--span card__heading--span--1'>
                        the sea explorer
                    </span>
                </h4>
                <span className='card__details'>
                    <ul>
                        <li>3 days tours</li>
                        <li>Up to 30 People</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotel</li>
                        <li>Difficulty: Easy</li>
                    </ul>
                </span>
            </div>
            <div className="card__side card__side--back card__side--back--1">
                <div className="card__cta">
                    <div className='card__price-box'>
                        <p className='card__price-only'>
                            Only
                        </p>
                        <p className='card__price-value'>
                            $297
                        </p>
                    </div>
                    <Button text='book now' style='card__btn'/>

                </div>
            </div>
        </div>
    )
}

export default Cards;
