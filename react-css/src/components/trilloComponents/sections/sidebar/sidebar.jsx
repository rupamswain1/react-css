import React from 'react'
import './sidebar.style.scss';
import SidebarMenuItems from '../../components/sideBarMenuItems/sidebarMenuItems.comonent';
import sprite from '../../../../assets/trilloAssets/icon/sprite.svg';
const menuItemContent=[
    {
        id:1,
        logo:`${sprite}#icon-home`,
        text:'Hotel',
    },
    {
        id:2,
        logo:`${sprite}#icon-aircraft-take-off`,
        text:'Flight',
    },
    {
        id:3,
        logo:`${sprite}#icon-key`,
        text:'Car Rental',
    },
    {
        id:4,
        logo:`${sprite}#icon-map`,
        text:'Tours',
    },
]

function Sidebar() {
    return (
        <div className='sideBar'>
            <ul className='side-nav'>
                {menuItemContent.map(item=>{
                    return(
                        <SidebarMenuItems key={item.id} {...item}/>
                    )
                })}
            </ul>
            <div className='legal'>
                &copy; 2021 by trillo, All right reserved
            </div>
        </div>
    )
}

export default Sidebar
