import React,{useEffect} from 'react'
import Header from '../../components/trilloComponents/sections/header/header';
import Sidebar from '../../components/trilloComponents/sections/sidebar/sidebar';
import HotelView from '../../components/trilloComponents/sections/hotelView/hotelView';
import './trillo.scss';

function Trillo() {
    useEffect(()=>{
        document.title='Trillo Home Page'
    },[])
    return (
        <div className='container'>
            <Header/>
            <div className='content'>
                <Sidebar/>
                <HotelView/>
                
            </div>
        </div>
    )
}

export default Trillo;
