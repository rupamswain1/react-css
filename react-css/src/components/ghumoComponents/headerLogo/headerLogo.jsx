import React from 'react'
import logo from '../../../assets/ghumoAssets/img/logo-white.png'

import './headerLogo.style.scss'
function HeaderLogo() {
    return (
        <div className='logoContainer'>
            <img className='logo' src={logo} alt='Logo'/>
        </div>
    )
}

export default HeaderLogo;