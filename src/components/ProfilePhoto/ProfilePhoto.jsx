import "./ProfilePhoto.css";
import React from "react";

const ProfilePhoto = ({ photo, width='2.7rem' }) => {
  return (
    <div style={{width: width}} className="profile-photo">
      <img src={photo}/>

    </div>
  );
};
export default ProfilePhoto;
