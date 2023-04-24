
import React, { useContext } from 'react'
import "./comments.scss"
import {AuthContext} from "../../context/authContext"

const Comments = () => {

    const {currentUser} = useContext(AuthContext)


    const comments = [
        {
            id:1,
            desc:"Nice photo",
            name:"Rohit Pardhi",
            userId:1,
            profilePic:
            "https://images.pexels.com/photos/16211569/pexels-photo-16211569.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id:2,
            desc:"Beautiful",
            name:"Avinash Bhoi",
            userId:2,
            profilePic:
            "https://images.pexels.com/photos/12367754/pexels-photo-12367754.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
    ];

  return (
    <div className='comments'>
        <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder='write a comment' />
        <button>Send</button>
        </div>
        {comments.map(comment=>(
        <div className="comment">
            <img src={comment.profilePic} alt="" />
            <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
            </div>
            <span>1m ago</span>
        </div>
      ))
}
    </div>
  )
}

export default Comments
