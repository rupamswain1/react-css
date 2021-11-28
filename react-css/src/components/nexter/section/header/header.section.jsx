import React from 'react'
import './header.style.scss'
import logo from '../../../../assets/nexter/img/logo.png';
import bbc from '../../../../assets/nexter/img/logo-bbc.png';
import forbes from '../../../../assets/nexter/img/logo-forbes.png';
import techCrunch from '../../../../assets/nexter/img/logo-techcrunch.png';
import bi from '../../../../assets/nexter/img/logo-bi.png';
import {H1,H3} from '../../components/headings/headings.component';
import Button from '../../components/button/button.component';
function Header() {
    return (
        <div className='nexterHeader'>
            <img src={logo} alt='Nexter logo' className='nexterHeader__logo'/>
            <H3 text='Your own home'/>
            <H1 text='The ultimate personal freedom'/>
            <Button text={'View our Properties'} style='nexterHeader__btn'/>
            <div className='nexterHeader__seenon-text'>Seen On</div>
            <div className='nexterHeader__seenon-logos'>
                <img src={bbc} alt='Seen On Logo 1'/>
                <img src={forbes} alt='Seen On Logo 2'/>
                <img src={techCrunch} alt='Seen On Logo 3'/>
                <img src={bi} alt='Seen On Logo 4'/>
            </div>
        </div>
    )
}

export default Header
