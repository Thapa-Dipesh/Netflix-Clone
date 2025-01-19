import axios from "axios";
import { useDispatch } from "react-redux";
import { getPopularMovies } from "../redux/movieSlice";
import { Popular_Movie, options } from "../utils/constants";

const usePopularMovie = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(Popular_Movie, options);
    dispatch(getPopularMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default usePopularMovie;
