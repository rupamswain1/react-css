import React from 'react'
import SecondaryHeader from '../secondaryHeader/secondaryHeader';
import './bookingSection.style.scss';

function BookingSection() {
    return (
       <section className='section-book'> 
            <div className='row'>
                <div className='book'>
                    
                    <div className='book__form'>
                        <form action='#' className='form'>
                            <SecondaryHeader textContent='start bookin now' Style='book_from_heading u-margin-bottom-small'/>
                            <div className='form__group'>
                                <input type='text' className='form__input' placeholder='Full Name' id='name' required/>
                                <label for='name' className='form__label'>Full Name</label>
                            </div>
                            <div className='form__group'>
                                <input type='email' className='form__input' placeholder='Email' id='email' name='email  ' required/>
                                <label for='email' className='form__label'>Email Address</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
       </section>
    )
}

export default BookingSection
