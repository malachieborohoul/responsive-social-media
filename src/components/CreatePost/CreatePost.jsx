import "./CreatePost.css"
import React from "react";
import ProfilePhote from "../ProfilePhoto/ProfilePhoto";
import Profile1 from "../../images/profile-1.jpg";
import Button from "../Button/Button";


const CreatePost = ()=>{
    return (<div className="create-post">
        <ProfilePhote photo={Profile1} width='2rem'/>
        <input type="search" placeholder="What's on your mind ?" />
        <Button text="Post"/>
    </div>)
}

export default CreatePost;