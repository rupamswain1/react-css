import React from 'react'
import './homeCard.style.scss';

import sprite from '../../../../assets/nexter/img/sprite.svg';
import Button from '../../components/button/button.component';


function HomeCard({id,img,homeName,location,roomCount,size,price}) {
    return (
        <div className='home'>
            <img src={img} alt={`home ${id}`} className='home__img'/>
            <svg className='home__like'>
                <use xlinkHref={`${sprite}#icon-heart-full`}></use>
            </svg>
            <h5 className='name'>{homeName}</h5>
            <div className='home__location'>
                <svg>
                        <use xlinkHref={`${sprite}#icon-map-pin`}></use>
                </svg>
                <p>
                    {location}
                </p>
            </div>
            <div className='home__rooms'>
                <svg>
                        <use xlinkHref={`${sprite}#icon-profile-male`}></use>
                </svg>
                <p>{roomCount} Rooms</p>
            </div>
            <div className='home__area'>
                <svg>
                        <use xlinkHref={`${sprite}#icon-expand`}></use>
                </svg>
                <p>{size} m<sup>2</sup></p>
            </div>
            <div className='home__price'>
                <svg>
                    <use xlinkHref={`${sprite}#icon-key`}></use>
                </svg>
                <p>${`${price}`}</p>
            </div>
            <Button text='Contact Realtors'/>
        </div>
    )
}

export default HomeCard
