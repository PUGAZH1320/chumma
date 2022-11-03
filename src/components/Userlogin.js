import React from "react";
import { useNavigate } from "react-router-dom";

const Userlogin = () => {
  const navigate = useNavigate();
  return (
    <>
      <form>
        <h1>User Login </h1>
        <div>
          <label>Username</label>

          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
};

export default Userlogin;
