import React,{useEffect} from 'react'


function Trillo() {
    useEffect(()=>{
        document.title='Trillo Home Page'
    },[])
    return (
        <div className='trialloMain'>
            Trillo
        </div>
    )
}

export default Trillo;
