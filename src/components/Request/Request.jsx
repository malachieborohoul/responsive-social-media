import './Request.css'
import React from "react";
import Profile2 from "../../images/profile-2.jpg";
import Profile3 from "../../images/profile-3.jpg";
import Profile4 from "../../images/profile-4.jpg";
import Profile5 from "../../images/profile-5.jpg";
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import Button from '../Button/Button';

const Request = ({fName, lName})=>{
    return (
        <div className="request">
            <div className="heading">
                <ProfilePhoto photo={Profile2}/>
                <div className="info">
                    <h5>{fName} {lName}</h5>
                    <h4 className='text-muted'>8 mutual friends</h4>
                </div>
                
            </div>

            <div className="buttons">
                <Button text="Accept"/>
                <Button text="Accept" color='btn-light'/>
            </div>
        </div>
    )
}

export default Request;