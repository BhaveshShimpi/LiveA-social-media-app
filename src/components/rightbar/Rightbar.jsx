import React from 'react';
import "./rightbar.scss"

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Suggestions for you..</span>
          <div className="user">
            <div className="userinfo">
            <img src="https://images.pexels.com/photos/16354644/pexels-photo-16354644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <span>Bhavesh S</span>
              <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
              </div>
            </div>
          </div>

          <div className="user">
            <div className="userinfo">
            <img src="https://images.pexels.com/photos/16354644/pexels-photo-16354644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <span>Sumit Patil</span>
              <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>

          <div className="user">
            <div className="userinfo">
            <img src="https://images.pexels.com/photos/16354644/pexels-photo-16354644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <p>
              <span>Chetan Borse</span> Updated
              </p>
              <div>
                <span>1m ago</span>
              </div>
            </div>
          </div>

          <div className="user">
            <div className="userinfo">
            <img src="https://images.pexels.com/photos/16354644/pexels-photo-16354644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <p>
              <span>Kirti C</span> Updated
              </p>
              <div>
                <span>1m ago</span>
              </div>
            </div>
          </div>

          <div className="user">
            <div className="userinfo">
            <img src="https://images.pexels.com/photos/16354644/pexels-photo-16354644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <p>
              <span>khushbu R</span> Updated
              </p>
              <div>
                <span>40m ago</span>
              </div>
            </div>
          </div>

          <div className="user">
            <div className="userinfo">
            <img src="https://images.pexels.com/photos/16354644/pexels-photo-16354644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <p>
              <span>Rahul Lakade </span> Posted
              </p>
              <div>
                <span>11m ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>

          <div className="user">
            <div className="userinfo">
            <img src="https://images.pexels.com/photos/16354644/pexels-photo-16354644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online" />
              <span>Rahul Lakade </span>
              </div>
          </div>

          <div className="user">
            <div className="userinfo">
            <img src="https://images.pexels.com/photos/16354644/pexels-photo-16354644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online" />
              <span>Rohan Sudhakar </span>
              </div>
          </div>

          <div className="user">
            <div className="userinfo">
            <img src="https://images.pexels.com/photos/16354644/pexels-photo-16354644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online" />
              <span>Vinit Chaudhari </span>
              </div>
          </div>

          <div className="user">
            <div className="userinfo">
            <img src="https://images.pexels.com/photos/16354644/pexels-photo-16354644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online" />
              <span>Avinash Bhoi </span>
              </div>
          </div>

          <div className="user">
            <div className="userinfo">
            <img src="https://images.pexels.com/photos/16354644/pexels-photo-16354644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online" />
              <span>Rohit Pardhi </span>
              </div>
          </div>

          <div className="user">
            <div className="userinfo">
            <img src="https://images.pexels.com/photos/16354644/pexels-photo-16354644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online" />
              <span>Akshay Kumar </span>
              </div>
          </div>

          <div className="user">
            <div className="userinfo">
            <img src="https://images.pexels.com/photos/16354644/pexels-photo-16354644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <div className="online" />
              <span>Lokesh Kuwar </span>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
