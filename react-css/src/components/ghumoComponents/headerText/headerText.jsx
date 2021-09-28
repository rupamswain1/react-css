import React from 'react'
import Button from '../button/button';

import './headerText.style.scss';

function HeaderText() {
    return (
        <div className="headerTextBox">
            <h1 className="headingPrimary-container"> 
                <span className="headingPrimary">Outdoors</span>
                <span className="headingSub">is where life happens</span>
                <Button/>
            </h1>
        </div>
    )
}

export default HeaderText;
