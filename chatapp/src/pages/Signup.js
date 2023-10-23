import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [User, setUser] = useState([]);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      // Passwords match, proceed with form submission
      console.log("Passwords match. Submitting form...");
      // Add your form submission logic here
    } else {
      // Passwords don't match, handle accordingly (e.g., display an error message)
      console.log("Passwords do not match. Please try again.");
    }
  };

  const signupForm = (
    <div>
      <form onSubmit={handleSubmit}>
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
            onChange={(e) => setConfirmPassword(e.target.value)}
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
        <div>
         Already a member to MY CHAT ? <a href="/">  Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
