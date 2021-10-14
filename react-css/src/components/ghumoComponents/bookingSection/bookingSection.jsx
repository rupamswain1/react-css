import React from 'react'
import SecondaryHeader from '../secondaryHeader/secondaryHeader';
import Button from '../button/button';
import InputField from '../inputField/inputField';
import './bookingSection.style.scss';

function BookingSection() {
    return (
       <section className='section-book'> 
            <div className='row'>
                <div className='book'>
                    
                    <div className='book__form'>
                        <form action='#' className='form'>
                            <SecondaryHeader textContent='start bookin now' Style='book_from_heading u-margin-bottom-small'/>
                            <InputField type='text' placeholder='Full Name' id='name' lable='Full Name' required={true}/>
                            <InputField type='email' placeholder='Email' id='email' lable='Email' required={true}/>
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
