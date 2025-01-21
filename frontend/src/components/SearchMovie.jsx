import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovieDetails } from "../redux/searchSlice";
import { setLoading } from "../redux/userSlice";
import { options, SEARCH_MOVIE_URL } from "../utils/constants";
import MovieList from "./MovieList";

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  const { movieName, searchedMovie } = useSelector(
    (store) => store.searchMovie
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      console.log(res.data.results);
      const movies = res?.data?.results;
      dispatch(getSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  };
  return (
    <>
      <div className="flex flex-col items-center ">
        <form onSubmit={submitHandler} className="w-1/2">
          <div className="flex justify-between shadow-md border-2 border-gray-200 rounded-lg w-[100%] p-2 mt-24">
            <input
              value={searchMovie}
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
              className="w-full outline-none rounded-lg text-lg px-4 py-2"
              type="text"
              placeholder="Search Movies..."
            />
            <button className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-6 py-2 text-xl">
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>
      <div className="px-12 py-20">
        {searchedMovie !== null ? (
          <MovieList title={movieName} movies={searchedMovie} />
        ) : (
          <h1>Movies Not Found...</h1>
        )}
      </div>
    </>
  );
};

export default SearchMovie;
