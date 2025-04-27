import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "../features/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const fetchUser = async () => {
    if (!user) {
      axios
        .get("http://localhost:3000/profile/view", {
          withCredentials: true,
        })
        .then(({ data }) => {
          dispatch(addUser(data));
        })
        .catch((err) => {
          if (err.status === 400) {
            navigate("/login");
          }
          alert(err.message);
        });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
