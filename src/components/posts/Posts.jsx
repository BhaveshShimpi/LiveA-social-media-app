import React from 'react'
import Post from '../post/Post'
import "./posts.scss"

const Posts = () => {

  const posts = [
    {
      id:1,
      name:"Rohit Pardhi",
      userID:1,
      profilePic:
      "https://images.pexels.com/photos/16211569/pexels-photo-16211569.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc:"Todays pic in the nature",
      img:"https://images.pexels.com/photos/16027424/pexels-photo-16027424.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      id:2,
      name:"Sumit Patil",
      userID:2,
      profilePic:
      "https://images.pexels.com/photos/12367754/pexels-photo-12367754.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc:"outside of home and chilling",
    },
  ]

  return (
    <div className='posts'>
        {posts.map(post=>(
          <Post post={post} key={post.id}/>
        ))}
    </div>
  )
}

export default Posts
