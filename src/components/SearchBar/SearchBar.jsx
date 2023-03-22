import "./SearchBar.css";
import React from "react";
import Search from "@iconscout/react-unicons/icons/uil-search";


const SearchBar = ({message= "Search for creators", width="30rem"}) => {
  return (
    <div className="search-bar" style={{width: width}}>
      {<Search size="18" />}
      <input type="text" placeholder={message} />
    </div>
  );
};

export default SearchBar;
