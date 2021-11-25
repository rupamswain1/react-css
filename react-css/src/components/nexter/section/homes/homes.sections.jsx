import React from 'react'
import './homes.style.scss';
import HomeCard from '../../components/homeCard/homeCard.component';
import img1 from '../../../../assets/nexter/img/house-1.jpeg';
import img2 from '../../../../assets/nexter/img/house-2.jpeg'
import img3 from '../../../../assets/nexter/img/house-3.jpeg'
import img4 from '../../../../assets/nexter/img/house-4.jpeg'
import img5 from '../../../../assets/nexter/img/house-5.jpeg'
import img6 from '../../../../assets/nexter/img/house-6.jpeg'
const homes=[
    {
        id:1,
        img:img1,
        homeName:'Beautiful Family House',
        location:'Pune',
        roomCount:'4',
        size:325,
        price:12000
    },
    {
        id:2,
        img:img2,
        homeName:'Beautiful Family House 2',
        location:'Pune',
        roomCount:'3',
        size:450,
        price:600
    },
    {
        id:3,
        img:img3,
        homeName:'Couso comrete aaplive',
        location:'Pune',
        roomCount:'3',
        size:350,
        price:900
    },
    {
        id:4,
        img:img4,
        homeName:'Beautiful Family House',
        location:'Pune',
        roomCount:'4',
        size:400,
        price:1600
    },
    {
        id:5,
        img:img5,
        homeName:'Beautiful Family House',
        location:'Pune',
        roomCount:'3',
        size:250,
        price:2600
    },
    {
        id:6,
        img:img6,
        homeName:'Couso comrete aaplive',
        location:'Pune',
        roomCount:'4',
        size:255,
        price:1600
    },
]

function Homes() {
    return (
        <section className='homes'>
            {homes.map(h=>{
                return(
                    <HomeCard {...h}/>
                )
            })}
        </section>
    )
}

export default Homes
