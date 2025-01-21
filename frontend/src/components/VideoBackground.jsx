import React from "react";
import { useSelector } from "react-redux";
import useMovieById from "../hooks/useMovieById";

const VideoBackground = ({ movieId, bool }) => {
  const trailerMovie = useSelector((store) => store.movie.trailerMovie);
  useMovieById(movieId);

  const videoURL = `https://www.youtube.com/embed/${trailerMovie?.key}?si=G-mAF5pCw9idGYgQ&autoplay=1&mute=1`;

  return (
    <div className="w-full">
      <iframe
        className={`${bool ? "w-[100%]" : "w-full aspect-video"}`}
        src={videoURL}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen></iframe>
    </div>
  );
};

export default VideoBackground;
