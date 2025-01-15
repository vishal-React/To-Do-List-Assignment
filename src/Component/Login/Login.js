import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/AuthSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username) {
      dispatch(login({ username }));
      navigate("/main");
    }
  };
  const [eye, seteye] = useState(false);
  const show = () => {
    seteye(!eye);
  };
  return (
    <div className="Formcenter">
      <form onSubmit={handleLogin}>
        <div className="log">
          <p>Register</p>
        </div>
        <input
          type="text"
          placeholder="UserName"
          required
          name="fullname"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="email" placeholder="Email" required name="email" />

        <input
          type={eye ? "text" : "password"}
          placeholder="Password"
          required
          name="password"
        />

        {eye ? (
          <p className="login " onClick={show}>
            Hide Password
          </p>
        ) : (
          <p className="login" onClick={show}>
            Show Password
          </p>
        )}

        <button className="create-account">Register</button>
      </form>
    </div>
  );
};

export default Login;
