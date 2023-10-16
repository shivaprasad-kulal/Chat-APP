import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [User, setUser] = useState([]);
  const [password, setPassword] = useState();

  const signupForm = (
    <div>
      <form>
        <div className="input-container">
          <input
            type="text"
            placeholder="Email"
            name="uname"
            id="username"
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Name"
            name="pass"
            onChange={(e) => setPassword(e.target.value)}
            id="pass"
            required
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            name="pass"
            onChange={(e) => setPassword(e.target.value)}
            id="pass"
            required
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Confirm Password"
            name="pass"
            onChange={(e) => setPassword(e.target.value)}
            id="pass"
            required
          />
        </div>

        <div className="button-container">
          <input type="submit" placeholder="Sign Up" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="signup">
      <div className="box1">
        <div className="title">SIGN UP</div>
        {signupForm}
        hii
      </div>
    </div>
  );
};

export default Signup;
