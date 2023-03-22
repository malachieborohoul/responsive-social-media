import "./MessagesCard.css";
import React from "react";
import Edit from "@iconscout/react-unicons/icons/uil-edit";
import SearchBar from "../SearchBar/SearchBar";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import Profile2 from "../../images/profile-2.jpg";
import Profile3 from "../../images/profile-3.jpg";
import Profile4 from "../../images/profile-4.jpg";
import Profile5 from "../../images/profile-5.jpg";
import Profile6 from "../../images/profile-6.jpg";
import Message from "../Message/Message";

const MessagesCard = () => {
  return (
    <div className="messages">
      <div className="header">
        <h4>Messages</h4>
        <Edit />
      </div>
      <SearchBar message="Search messages"  width="14rem" />
      <div className="category">
        <h5>Primary</h5>

        <h5>General</h5>
        <h5>Requests(7)</h5>
      </div>
      <Message photo={Profile2} statut='active'/>
      <Message photo={Profile3} statut='inactive'/>
      <Message photo={Profile4} statut='active'/>
      <Message photo={Profile5} statut='inactive'/>

    </div>
  );
};

export default MessagesCard;
