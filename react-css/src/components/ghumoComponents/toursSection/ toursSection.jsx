import React from 'react'
import SecondaryHeader from '../secondaryHeader/secondaryHeader';
import Cards from '../cards/cards';
import './toursSection.style.scss'

function  ToursSection() {
    return (
        <section className="section-tours">
                <SecondaryHeader textContent='most popular tours' Style='u-test-center u-margin-bottom-big'/>
                <div className="row">
                    <div className="col-1-of-3"> 
                        <Cards/>
                    </div>
                    <div className="col-1-of-3"> 1 OF 3</div>
                    <div className="col-1-of-3"> 1 OF 3</div>
                </div>
        </section>
    )
}


export default  ToursSection
