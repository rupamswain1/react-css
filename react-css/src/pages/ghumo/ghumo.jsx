import React from 'react'
import Header from '../../components/ghumoComponents/header/header.component';
import Main from '../../components/ghumoComponents/main/main.component';
import './ghumo.style.scss';

function GhumoPage() {
    return (
        <div className='bodyContainer'>
            <Header/>
            <Main/>
        </div>
    )
}

export default GhumoPage;