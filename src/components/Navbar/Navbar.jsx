import "./Navbar.css";
import React from "react";
import Profile1 from "../../images/profile-1.jpg";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <span className="text-bold">bsmSocial</span>
        <SearchBar/>
        <div className="right">
          <Button text="Create"/>
          <ProfilePhoto photo={Profile1}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
