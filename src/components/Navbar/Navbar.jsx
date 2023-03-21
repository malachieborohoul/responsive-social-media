import "./Navbar.css";
import React from "react";
import Profile1 from "../../images/profile-1.jpg";
import Search from "@iconscout/react-unicons/icons/uil-search";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <span className="text-bold">bsmSocial</span>
        <div className="search-bar">
          {<Search size="18" />}
          <input type="text" placeholder="Search for creators" />
        </div>
        <div className="right">
          <Button text="Create"/>
          <ProfilePhoto photo={Profile1}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
