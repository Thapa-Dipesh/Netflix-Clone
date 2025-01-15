import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import { useEffect } from "react";
import { API_END_POINT, Now_Playing_Movie, options } from "../utils/constants";
import { logoutUser } from "../redux/userSlice";
import toast from "react-hot-toast";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import { getNowPlayingMovies } from "../redux/movieSlice";

const Browse = () => {
  const user = useSelector(store => store.app.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nowPlayingMovie = async () => {
    try {
      const res = await axios.get(Now_Playing_Movie, options);
      console.log(res);
      dispatch(getNowPlayingMovies(res.data.results))
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    // if (!user) {
    //   navigate("/login");
    // }
    nowPlayingMovie();
  }, []);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
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
      <div>
        <MainContainer />
        <MovieContainer />
      </div>
      <Footer />
    </>
  );
};

export default Browse;
