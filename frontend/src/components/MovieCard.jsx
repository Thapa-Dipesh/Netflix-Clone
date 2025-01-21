import React from "react";
import { useDispatch } from "react-redux";
import { getId, setOpen } from "../redux/movieSlice";
import { TMDB_IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();

  if (posterPath === null) return null;

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  };
  return (
    <div className="w-48 pr-3" onClick={handleOpen}>
      <img
        className="rounded-md cursor-pointer"
        src={`${TMDB_IMG_URL}/${posterPath}`}
        alt="movie-banner"
      />
    </div>
  );
};

export default MovieCard;
