import React from 'react';
import Button from '../button/button';
import './cards.style.scss';
import img1 from '../../../assets/ghumoAssets/img/nat-4.jpg';
function Cards({sno,heading,details,price,image}) {
    
    return (
        <div className='card'>
            <div className={`card__side card__side--front card__side--front--${sno}`}>
                <div className={`card__picture card__picture--${sno}`}>
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className={`card__heading--span card__heading--span--${sno}`}>
                        {heading}
                    </span>
                </h4>
                <span className='card__details'>
                    <ul>
                        {details.map(d=>{
                            return(
                                <li>{d.toUpperCase()}</li>
                            )
                        })}
                    </ul>
                </span>
            </div>
            <div className={`card__side card__side--back card__side--back--${sno}`}>
                <div className="card__cta">
                    <div className='card__price-box'>
                        <p className='card__price-only'>
                            Only
                        </p>
                        <p className='card__price-value'>
                            {price}
                        </p>
                    </div>
                    <Button text='book now' style='card__btn' target='booking-popup'/>

                </div>
            </div>
        </div>
    )
}

export default Cards;
