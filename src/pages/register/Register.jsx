import React from "./register.scss";
import { Link } from "react-router-dom";

const Register= () =>{
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Livea</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi culpa nostrum soluta rem, magni aliquid aspernatur. Minus, culpa asperiores soluta quidem aperiam aliquid temporibus commodi voluptatum sit rerum quo dicta!
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name" />
                        <button>Register</button>

                    </form>
                </div>
            </div>
        </div>
    );
      
    
}

export default Register