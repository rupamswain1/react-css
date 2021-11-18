import React from 'react'
import './listItem.style.scss';
function ListItem({text}) {
    return (
       <li className='list__item'>
           {text}
       </li>
    )
}

export default ListItem 
