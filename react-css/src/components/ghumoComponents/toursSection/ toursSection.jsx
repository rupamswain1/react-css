import React from 'react'
import SecondaryHeader from '../secondaryHeader/secondaryHeader';
import Button from '../button/button';
import Cards from '../cards/cards';
import './toursSection.style.scss'

const cardData=[
    {
        sno:1,
        heading:'the sea explorer ',
        details:[
            '3 days tours',
            'Up to 30 People',
            '2 tour guides',
            'sleep in cozy hotel',
            'Difficulty: Easy'
        ],
        price:'$297'
    },
    {
        sno:2,
        heading:'the forest hiker',
        details:[
            '7 days tours',
            'Up to 40 People',
            '6 tour guides',
            'sleep in provided tents',
            'Difficulty: Moderate'
        ],
        price:'$297'
    },
    {
        sno:3,
        heading:'the Snow Adventure',
        details:[
            '5 days tours',
            'Up to 15 People',
            '3 tour guides',
            'sleep in Provided tents',
            'Difficulty: Hard'
        ],
        price:'$297'
    }
]

function  ToursSection() {
    return (
        <section className="section-tours">
                <SecondaryHeader textContent='most popular tours' Style='u-test-center u-margin-bottom-big'/>
                <div className="row">
                    
                        {cardData.map((c)=>{
                            return(
                                <div className="col-1-of-3"> 
                                    <Cards {...c}/>
                                </div>
                            );
                        })
                        }
                </div>
                <div className='section__button'>
                     <Button text='discover all tours' style='btn-green'/>      
                </div>
                       
        </section>
    )
}


export default  ToursSection
