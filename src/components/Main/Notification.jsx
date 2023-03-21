import React from "react";

const Notification = ({photo}) => {
  return (
    <div className="notification">
      <div className="profile-photo">
        <img src={photo} alt="" />
      </div>
      <div className="text">
        <span className="text-bold">Keke Palmer </span>
        <span>accepted your friend request</span>
        <br />
        <span className="text-muted"> 2 DAYS AGO</span>
      </div>
    </div>
  );
};

export default Notification;
