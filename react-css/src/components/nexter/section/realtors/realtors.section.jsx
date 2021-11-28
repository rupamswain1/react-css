import React from 'react'
import './realtors.style.scss';
import realtor1 from '../../../../assets/nexter/img/realtor-1.jpeg';
import realtor2 from '../../../../assets/nexter/img/realtor-2.jpeg';
import realtor3 from '../../../../assets/nexter/img/realtor-3.jpeg';
import {H3, H4} from '../../../nexter/components/headings/headings.component'
function Realtors() {
    return (
        <div className='realtors'>
            <H3 text='Top 3 Realtors'/>
            <div className='realtors__list'>
                <img src={realtor1} alt='Realtor 1' className='realtors__img'/>
                <div className='realtors__details'>
                    <H4 style='heading-4--light' text='ABC Dev'/>
                    <p className='realtors__sold'>245 houses sold</p>
                </div>

                <img src={realtor2} alt='Realtor 2' className='realtors__img'/>
                <div className='realtors__details'>
                    <H4 style='heading-4--light' text='PQR Dev'/>
                    <p className='realtors__sold'>222 houses sold</p>
                </div>

                <img src={realtor3} alt='Realtor 3' className='realtors__img'/>
                <div className='realtors__details'>
                    <H4 style='heading-4--light' text='XYZ Dev'/>
                    <p className='realtors__sold'>200 houses sold</p>
                </div>
            </div>
        </div>
    )
}

export default Realtors
 