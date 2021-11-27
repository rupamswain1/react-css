import React from 'react'
import './footer.style.scss';
function Footer() {
    return (
        <div className='nexterFooter'>
            <ul className='nav'>
                <li className='nav__item'>
                    <a href='#' className='nav__link'>Find your dream home</a>
                    
                </li>
                <li className='nav__item'>
                    <a href='#' className='nav__link'>Request Proposal</a>
                </li>
                <li className='nav__item'>
                    <a href='#' className='nav__link'>Download home planner</a>
                </li>
                <li className='nav__item'>
                    <a href='#' className='nav__link'>Contact Us</a>
                </li>
                <li className='nav__item'>
                    <a href='#' className='nav__link'>Submit your Propoerty</a>
                </li>
                <li className='nav__item'>
                    <a href='#' className='nav__link'>Come work with us</a>
                </li>
            </ul>
            <p className='copyright'>
                &copy; Design by Jonas Schmedtmann
            </p>
        </div>
    )
}

export default Footer
