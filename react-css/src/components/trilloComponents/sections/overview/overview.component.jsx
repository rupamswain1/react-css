import React from 'react'
import './overview.style.scss';
import sprite from '../../../../assets/trilloAssets/icon/sprite.svg';
function Overview({heading,location,averageRating,ratingCount}) {
    return (
        <div className='overview'>
            <h1 className='overview__heading'>
                {heading}
            </h1>
            <div className='overview__stars'>
                <svg className='overview__icon-star'>
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                </svg>
                <svg className='overview__icon-star'>
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                </svg>
                <svg className='overview__icon-star'>
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                </svg>
                <svg className='overview__icon-star'>
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                </svg>
                <svg className='overview__icon-star'>
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                </svg>
            </div>
            <div className='overview__location'>
                <svg className='overview__icon-location'>
                    <use xlinkHref={`${sprite}#icon-location-pin`}></use>
                </svg>
                <button className='btn-inline'>{location}</button>
            </div>
            <div className='overview__rating'>
                <div className='overview__rating-average'>{averageRating}</div>
                <div className='overview__rating-count'>{`${ratingCount} votes`}</div>
            </div>
        </div>
    )
}

export default Overview
