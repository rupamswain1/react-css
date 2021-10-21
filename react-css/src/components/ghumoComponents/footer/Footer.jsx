import React from 'react';
import './footer.style.scss';
import Paragraph from '../paragraph/paragraph'
import logo from '../../../assets/ghumoAssets/img/logo-green-small-2x.png';
import logoOneX from '../../../assets/ghumoAssets/img/logo-green-small-1x.png';
import imgLogo from '../../../assets/ghumoAssets/img/logo-green-2x.png';
import imgLogoOneX from '../../../assets/ghumoAssets/img/logo-green-1x.png';
function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__logo-box'>
                <picture className='footer__logo'>
                    <source srcSet={`${logoOneX} 1x,${logo} 2x`} media="(max-width:37.5em)"></source>
                    <img srcSet={`${imgLogoOneX} 1x,${imgLogo} 2x`} alt='Logo' className='footer__logo'/>
                </picture>
                
            </div>
            <div className='row'>
                <div className='col-1-of-2'>
                    <div className='footer__navigation'>
                        <ul className='footer__list'>
                            <li className='footer__item'>
                                <a href='#' className='footer__link'>Company</a>
                            </li>
                            <li className='footer__item'>
                                <a href='#' className='footer__link'>Contact Us</a>
                            </li>
                            <li className='footer__item'>
                                <a href='#' className='footer__link'>Careers</a>
                            </li>
                            <li className='footer__item'>
                                <a href='#' className='footer__link'>Privacy Policy</a>
                            </li>
                            <li className='footer__item'>
                                <a href='#' className='footer__link'>Terms</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-1-of-2'>
                    <Paragraph text='copyright text' style='footer__copyright'/>
                </div>
            </div>
        </footer>
    )
}

export default Footer
