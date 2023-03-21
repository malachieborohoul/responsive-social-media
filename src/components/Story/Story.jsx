import './Story.css'
import React from "react";


const Story = ({photo, fName, lName, storyImg})=>{
    return (
   
    <div className="story" style={{ background: `url(${storyImg}) no-repeat center center/cover`}}>
            <div className="profile-photo">
                <img src={photo} alt="" />
            </div>
            <span className='name'>{fName} <br />{lName}</span>
        </div>
    )
}

export default Story;