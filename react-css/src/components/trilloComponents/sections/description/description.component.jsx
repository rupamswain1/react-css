import React from 'react'
import ListItem from '../../components/listItem/listItem.component';
import Paragraph from '../../components/paragraph/paragraph.component';
import './description.style.scss'

import img1 from '../../../../assets/trilloAssets/img/user-3.jpg';
import img2 from '../../../../assets/trilloAssets/img/user-4.jpg';
import img3 from '../../../../assets/trilloAssets/img/user-5.jpg';
import img4 from '../../../../assets/trilloAssets/img/user-6.jpg';

let paragrah1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
let paragraph2= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
<<<<<<< HEAD
=======
let features=['Close to the Beach','Breakfast included','Free Airport Shuttle','Free Wifi in All Rooms','Air conditioning and Heating','Pets Allowed','We Speak All Languages','Perfect for Families']
>>>>>>> 2bf393e75f1b9459aa88c81010d71a61416b3bd6
function Description() {
    return (
        <div className='description'>
            <Paragraph text={paragrah1}/>
            <Paragraph text={paragraph2}/>
            <ul className='list'>
                {
                    features.map(item=>{
                        return(
                            <ListItem text={item}/>
                        )
                    })
                }
            </ul>
            <div className='recommend'>
                <p className='recommend__Count'>'Lucy and 3 Other friend recomended this Hotel'</p>
                <div className='recommend__friends'>
                    <img src={img1} alt='Friend 1' className='recommend__photo'/>
                    <img src={img2} alt='Friend 2' className='recommend__photo'/>
                    <img src={img3} alt='Friend 3' className='recommend__photo'/>
                    <img src={img4} alt='Friend 4' className='recommend__photo'/>
                </div>
            </div>
        </div>
    )
}

export default Description;
