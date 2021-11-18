import React from 'react'
import './cta.style.scss';
function Cta() {
    return (
        <div className='cta'>
            <h2 className='cta__book-now'>
                Good News!! We have 4 rooms for your selected Dates
            </h2>
            <button className='btn'>
                    <span className='btn__visible'>
                        Book Now
                    </span>
                    <span className='btn__invisible'>
                        Only 4 rooms left
                    </span> 
            </button>
        </div>
    )
}

export default Cta
