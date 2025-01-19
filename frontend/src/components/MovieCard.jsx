import React from "react";
import {TMDB_IMG_URL} from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-3">
      <img
      className="rounded-md cursor-pointer"
        src={`${TMDB_IMG_URL}/${posterPath}`}
        alt="movie-banner"
      />
    </div>
  );
};

export default MovieCard;
