import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [email, setEmail] = useState("sachin@gmail.com");
  const [password, setPassword] = useState("sachin123");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateProfile = () => {
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
    <div>
      <div className="flex justify-center items-center flex-auto">
        <div className="card card-border bg-base-300 w-96">
          <div className="card-body">
            <h2 className="card-title place-self-center">Update Profile</h2>
            <div>
              <input type="text" placeholder="Name" className="input my-2" />
            </div>
            <div className="card-actions place-content-center">
              <button className="btn btn-primary" onClick={updateProfile}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
