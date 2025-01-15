import axios from "axios";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { Now_Playing_Movie, options } from "../utils/constants";

const useNowPlayingMovie = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(Now_Playing_Movie, options);
    console.log(res);
    dispatch(getNowPlayingMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default useNowPlayingMovie;
