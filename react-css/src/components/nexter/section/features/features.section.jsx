import React from 'react';
import './features.style.scss';

import Feature from '../../components/feature/feature.component';

import sprite from '../../../../assets/nexter/img/sprite.svg';

const featureData=[
    {
        id:1,
        h4:'Worlds best luxury homes',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit mauris vitae justo suscipit, nec aliquet lorem pellentesque. Donec a ante neque. Duis diam odio, tempus et sapien sit amet, volutpat pharetra mauris.',
        logo:`${sprite}#icon-global`
    },
    {
        id:2,
        h4:'Only the best properties',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit mauris vitae justo suscipit, nec aliquet lorem pellentesque. Donec a ante neque. Duis diam odio, tempus et sapien sit amet, volutpat pharetra mauris.',
        logo:`${sprite}#icon-trophy`
    },
    {
        id:3,
        h4:'All homes in top location',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit mauris vitae justo suscipit, nec aliquet lorem pellentesque. Donec a ante neque. Duis diam odio, tempus et sapien sit amet, volutpat pharetra mauris.',
        logo:`${sprite}#icon-map-pin`
    },
    {
        id:4,
        h4:'New home in one week',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit mauris vitae justo suscipit, nec aliquet lorem pellentesque. Donec a ante neque. Duis diam odio, tempus et sapien sit amet, volutpat pharetra mauris.',
        logo:`${sprite}#icon-key`
    },
    {
        id:5,
        h4:'Top 1% Realtors',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit mauris vitae justo suscipit, nec aliquet lorem pellentesque. Donec a ante neque. Duis diam odio, tempus et sapien sit amet, volutpat pharetra mauris.',
        logo:`${sprite}#icon-presentation`
    },
    {
        id:6,
        h4:'Secure Payment on XXX',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit mauris vitae justo suscipit, nec aliquet lorem pellentesque. Donec a ante neque. Duis diam odio, tempus et sapien sit amet, volutpat pharetra mauris.',
        logo:`${sprite}#icon-lock`
    },
  
]

function Features() {
    return (
        <section className='features'>
            {featureData.map(fe=>{
                return(
                    <Feature key={fe.id} {...fe}/>
                )
            })}
        </section>
    )
}

export default Features
