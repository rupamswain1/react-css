import React from 'react'
import './header.style.scss';
import icon from '../../../../assets/trilloAssets/img/logo.png';
import icon2 from '../../../../assets/trilloAssets/img/user.jpg';
import sprite from '../../../../assets/trilloAssets/icon/sprite.svg';

function Header() {
    return (
        <div className='header'>
            <img src={icon} alt='trillo logo' className='logo'/>
            <form action='#' class='search'>
                <input type='text' className='search__input' placeholder='Search Hotels'/>
                <button className='search__buttons'>
                    <svg className='search__icon'>
                        <use xlinkHref={`${sprite}#icon-magnifying-glass`}></use>
                    </svg>
                </button>
            </form> 
            <nav className='user-nav'>
                <div className='user-nav__icon-box'>
                    <svg className='user-nav__icon'>
                        <use xlinkHref={`${sprite}#icon-bookmark`}></use>
                    </svg>
                    <span className='user-nav__notification'>15</span>
                </div>
                <div className='user-nav__icon-box'>
                    <svg className='user-nav__icon'>
                        <use xlinkHref={`${sprite}#icon-chat`}></use>
                    </svg>
                    <span className='user-nav__notification'>45</span>
                </div>
                <div className='user-nav__user'>
                    <img src={icon2} alt='trillo logo' className='user-nav__user-photo'/>
                    <span className='user-nav__user-name'>User Name</span>
                </div>
            </nav>           
        </div>
    )
}

export default Header
