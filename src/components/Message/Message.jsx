import './Message.css'
import React from "react";
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';

const Message = ({photo, statut}) => {
  return (
    <div className="message ">
      <div className="user ">
        <ProfilePhoto photo={photo} />
        <div className={statut}></div>
      </div>
      <div className="body">
        <span>Rizzn Bear</span>
        <span>2 news messages</span>
      </div>
    </div>
  );
};

export default Message;
