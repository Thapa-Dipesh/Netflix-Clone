import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || !movies.length) {
    return <div>Loading movies...</div>; // Or display a loading indicator
  }
  return (
    <div>
      <h1 className="text-3xl text-gray-400 pt-12 pb-4"> {title}</h1>
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex items-center ">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
