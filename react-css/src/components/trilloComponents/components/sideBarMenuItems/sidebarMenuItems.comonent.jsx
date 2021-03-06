import React from 'react'
import './sidebarMenuItems.style.scss';
function SidebarMenuItems({logo,text,style}) {
    return (
        <ul className={`side-nav__item ${style}`}>
            <a href='#' className='side-nav__link'>
                <svg className='side-nav__icon'>
                    <use xlinkHref={logo}>
                    </use>
                </svg>
                <span>{text}</span>
            </a>
        </ul>
    
    )
}
export default SidebarMenuItems;
