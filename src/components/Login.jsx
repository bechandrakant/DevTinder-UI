import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("sachin@gmail.com");
  const [password, setPassword] = useState("sachin123");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post(
        "http://localhost:3000/login",
        { email, password },
        { withCredentials: true }
      )
      .then((response) => {
        dispatch(addUser(response.data));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Login failed, please try again");
      });
  };

  return (
    <div className="flex justify-center items-center flex-auto">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title place-self-center">Login</h2>
          <label className="input validator my-2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="mail@site.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <label className="input validator my-2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="Password"
              minlength="4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="card-actions place-content-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
