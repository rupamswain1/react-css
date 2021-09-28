import React from 'react'
import HeaderLogo from '../headerLogo/headerLogo';
import HeaderText from '../headerText/headerText';
import './headerComponent.style.scss'
function Header() {
    return (
        <header className='headerMain'>
            <HeaderLogo/>
            <HeaderText/>
        </header>
    )
}

export default Header
