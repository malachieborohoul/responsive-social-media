import './Feed.css'
import React from "react";
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import Ellipsis from "@iconscout/react-unicons/icons/uil-ellipsis-h";
import Heart from "@iconscout/react-unicons/icons/uil-heart";
import Comment from "@iconscout/react-unicons/icons/uil-comment";
import Share from "@iconscout/react-unicons/icons/uil-share";
import Bookmark from "@iconscout/react-unicons/icons/uil-bookmark";


const Feed = ({profileImg, feedImg, name})=>{
    return (
        <div className="feed">
            <div className="header">
                <div className="user">
                    <ProfilePhoto photo={profileImg}/>
                    <div className="info">
                        <h4>{name}</h4>
                        <small>Dubai, 15 MINUTES AGO</small>
                    </div>
                </div>

                <div className="edit">
                    <Ellipsis size="1rem"/>
                </div>


            </div>
            <div className="feedImg">
            <img src={feedImg} alt="" />
            </div>
            

            <div className="interaction-buttons">
                <div className="left">
                    <Heart/>
                    <Comment/>
                    <Share/>
                </div>
                <div className="right">
                    <Bookmark/>
                </div>
            </div>

            <div className="liked-by">
                <div className="images">
                    <img src={profileImg} alt="" />
                    <img src={profileImg} alt="" />
                    <img src={profileImg} alt="" />
                </div>

                <div className="text">
                <span>Liked by </span>
                <span className='text-bold'>Ernest Kloss </span>
                <span>and </span>
                <span className='text-bold'>2,323 others</span>

                </div>
                
                
            </div>

            <div className="caption">
                <span className='text-bold'>Lana Rose </span>
                <span>Lorem, ipsum dolor sit amet consectetur #lifestyle</span>
            </div>

            <div className="comments">
                <span className="text-muted">
                    View all 277 comments
                </span>
            </div>
        </div>
    );
}

export default Feed;