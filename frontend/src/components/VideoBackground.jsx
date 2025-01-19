import React from "react";
import useMovieById from "../hooks/useMovieById";

const VideoBackground = (movieId) => {
  useMovieById(movieId)
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/bY_gRApfoJk?si=G-mAF5pCw9idGYgQ&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
    </div>
  );
};

export default VideoBackground;
