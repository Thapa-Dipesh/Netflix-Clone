import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    movieName: null,
    searchedMovie: null,
  },
  reducers: {
    //actions
    getSearchMovieDetails: (state, action) => {
      const { searchMovie, movies } = action.payload;
      state.movieName = searchMovie;
      state.searchedMovie = movies;
    },
  },
});

export const { getSearchMovieDetails } = searchSlice.actions;
export default searchSlice.reducer;
