import React from "react";

const VideoBackground = () => {
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/bY_gRApfoJk?si=G-mAF5pCw9idGYgQ&autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>
  );
};

export default VideoBackground;
