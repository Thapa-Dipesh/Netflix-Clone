import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import { useEffect } from "react";
import axios from "axios";
import { API_END_POINT } from "../utils/constants";
import { logoutUser } from "../redux/userSlice";
import toast from "react-hot-toast";

const Browse = () => {
  const user = useSelector(store => store.app.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, []);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if(res.data.success){
        toast.success(res.data.message)
      }
      dispatch(logoutUser());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-32 py-4 bg-gradient-to-b from-black">
        <img
          className="w-40"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
        />
        <div className="flex items-center justify-center gap-4">
          <h1>User</h1>
          <button
            onClick={logoutHandler}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-base font-bold">
            Log Out
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Browse;
