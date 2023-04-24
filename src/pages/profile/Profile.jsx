import React from "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile= () =>{
    return (
        <div className="profile">
            <div className="images">
                <img src="https://images.pexels.com/photos/358904/pexels-photo-358904.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="cover"/>
                <img src="https://images.pexels.com/photos/15445847/pexels-photo-15445847.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="profilePic"/>

            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                    <a href="http://facebook.com">
                    <FacebookTwoToneIcon fontSize="small" />
                    </a>
                        <a href="http://facebook.com">
                        <InstagramIcon fontSize="small" />
                        </a>
                        <a href="http://facebook.com">
                        <TwitterIcon fontSize="small" />
                        </a>
                        <a href="http://facebook.com">
                        <LinkedInIcon fontSize="small" />
                        </a>
                        <a href="http://facebook.com">
                        <PinterestIcon fontSize="small" />
                        </a>
                    </div>
                    <div className="center">
                        <span>Rohit Pardhi</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon/>
                                <span>India</span>
                            </div>
                            <div className="item">
                                <LanguageIcon/>
                                <span>Bhavesh.S</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon/>
                        <MoreVertIcon/>
                    </div>
                </div>
                <Posts/>
            </div>
        </div>
    );
      
    
}

export default Profile