import React from 'react'
import SecondaryHeader from '../secondaryHeader/secondaryHeader';
import Button from '../button/button';
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
                            <div className='form__group'>
                                <div className='form__radio-group'>
                                    <input type='radio' className='form__radio-input' id='small' name='book-radio'/>
                                    <label for="small" className='form__radio-lable'>
                                        <span class='form__radio-button'></span> 
                                        Small tour group
                                    </label>
                                    
                                 </div>
                                 <div className='form__radio-group'>
                                    <input type='radio' className='form__radio-input' id='large'  name='book-radio'/>
                                    <label for="large" className='form__radio-lable'>
                                        <span className='form__radio-button'></span>
                                        Large tour group
                                    </label> 
                                    
                                 </div>
                                 <div className='form__group u-test-center'>
                                    <Button text='Next Steps &rarr;' style='btn-green u-margin-top-medium u-test-center'/>
                                 </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
       </section>
    )
}

export default BookingSection
