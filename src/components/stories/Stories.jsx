import React, { useContext } from 'react'
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    //temporary
    const stories = [
        {
            id:1,
            name:"Rohit Pardhi",
            img:"https://images.pexels.com/photos/16211569/pexels-photo-16211569.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

        },

        {
            id:2,
            name:"Khushbu R",
            img:"https://images.pexels.com/photos/11896928/pexels-photo-11896928.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },

        {
            id:3,
            name:"Lokesh Kuwar",
            img:"https://images.pexels.com/photos/15190048/pexels-photo-15190048.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },

        {
            id:4,
            name:"Sumit Patil",
            img:"https://images.pexels.com/photos/12367754/pexels-photo-12367754.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },

        {
            id:5,
            name:"Chetan Borse",
            img:"https://images.pexels.com/photos/14844108/pexels-photo-14844108.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },

    ]
    

  return (
    <div className='stories'>
      
        <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <button>+</button>
        </div>
        {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
      
    </div>
  )
}

export default Stories
