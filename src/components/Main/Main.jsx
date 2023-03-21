import './Main.css'
import React from "react";
import Profile1 from "../../images/profile-1.jpg";
import Home from "@iconscout/react-unicons/icons/uil-home";
import Compass from "@iconscout/react-unicons/icons/uil-compass";
import Bell from "@iconscout/react-unicons/icons/uil-bell";
import Envelope from "@iconscout/react-unicons/icons/uil-envelope";
import Bookmark from "@iconscout/react-unicons/icons/uil-bookmark";
import Chart from "@iconscout/react-unicons/icons/uil-chart-line";
import Palette from "@iconscout/react-unicons/icons/uil-palette";
import Setting from "@iconscout/react-unicons/icons/uil-setting";
import Profile2 from '../../images/profile-2.jpg'
import Profile3 from '../../images/profile-3.jpg'
import Profile4 from '../../images/profile-4.jpg'
import Profile5 from '../../images/profile-5.jpg'
import Profile6 from '../../images/profile-6.jpg'

import Feed1 from '../../images/feed-1.jpg'
import Feed2 from '../../images/feed-2.jpg'
import Feed3 from '../../images/feed-3.jpg'
import Feed4 from '../../images/feed-4.jpg'
import Feed5 from '../../images/feed-5.jpg'
import Feed6 from '../../images/feed-6.jpg'
import Feed7 from '../../images/feed-7.jpg'

import Notification from './Notification';
import Story from '../Story/Story';
import Story1 from '../../images/story-1.jpg'
import Story2 from '../../images/story-2.jpg'
import Story3 from '../../images/story-3.jpg'
import Story4 from '../../images/story-4.jpg'
import Story5 from '../../images/story-5.jpg'
import Story6 from '../../images/story-6.jpg'
import CreatePost from '../CreatePost/CreatePost';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import Feed from '../Feed/Feed';


const Main = ()=>{
    return (
        <main>
            <div className="container">
                <div className="left">
                    <div className="profile">
                            <ProfilePhoto  photo={Profile1}/>
                            <div className="name">
                                <span className='text-bold'>Diana Ross</span>
                                <span className='text-muted'>@yep</span>
                            </div>
                    </div>
                    <div className="sidebar">
                        <div className="menu-item active">
                            <Home className= 'icon'/>
                            <h4>Home</h4>
                        </div>

                        <div className="menu-item">
                            <Compass className= 'icon'/>
                            <h4>Explore</h4>
                        </div>

                        <div className="menu-item">
                            <div className="icon">
                                <Bell className= 'icon'/>
                                <div className="notifications-count"><em>18+</em> </div>
                            </div>
                            
                            <h4>Notifications</h4>

                            <div className="notifications-popup">
                             
                                <Notification photo={Profile2}/>
                                <Notification photo={Profile3}/>
                                <Notification photo={Profile4}/>
                                <Notification photo={Profile5}/>
                                <Notification photo={Profile6}/>
                                

                               


                                
                            </div>
                            
                        </div>
                        <div className="menu-item">
                            <div className="icon">
                                <Envelope className= 'icon'/>
                                <div className="messages-count"><em>7</em> </div>
                            </div>
                            <h4>Messages</h4>
                        </div>
                        <div className="menu-item">
                            <Bookmark className= 'icon'/>
                            <h4>Bookmarks</h4>
                        </div>

                        <div className="menu-item">
                            <Chart className= 'icon'/>
                            <h4>Analytics</h4>
                        </div>
                        <div className="menu-item">
                            <Palette className= 'icon'/>
                            <h4>Theme</h4>
                        </div>

                        <div className="menu-item">
                            <Setting className= 'icon'/>
                            <h4>Settings</h4>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="stories">
                        <Story photo={Profile1} fName="Your" lName="Story" storyImg={Story1}/>
                        <Story photo={Profile2} fName="Sala" lName="Mani" storyImg={Story2}/>
                        <Story photo={Profile3} fName="Prada" lName="Tau" storyImg={Story3}/>
                        <Story photo={Profile4} fName="Limule" lName="Tempest" storyImg={Story4}/>
                        <Story photo={Profile5} fName="Agon" lName="Lame" storyImg={Story5}/>
                        <Story photo={Profile6} fName="Scilicon" lName="Valley" storyImg={Story6}/>
                    </div>

                    <CreatePost/>

                    <div className="feeds">
                        <Feed profileImg={Profile2} feedImg={Feed1} name="Bradley Cooper"/>
                        <Feed profileImg={Profile3} feedImg={Feed2} name="Mani Bella"/>
                        <Feed profileImg={Profile4} feedImg={Feed3} name="Love Delog"/>
                        <Feed profileImg={Profile5} feedImg={Feed4} name="Cona Mass"/>
                        <Feed profileImg={Profile6} feedImg={Feed5} name="Ive Yavier"/>
                        <Feed profileImg={Profile1} feedImg={Feed6} name="Mali Music"/>
                        <Feed profileImg={Profile4} feedImg={Feed7} name="Brad Pit"/>
                    </div>
                </div>
                <div className="right">
                    Right
                </div>

            </div>
        </main>
    )
}

export default Main;