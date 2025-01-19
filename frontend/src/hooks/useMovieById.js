import axios from "axios";
import React from "react";
import { options } from "../utils/constants";

const useMovieById = async (movieId) => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
    console.log(res.data.results);
  } catch (error) {
    console.log(error);
  }
};

export default useMovieById;
