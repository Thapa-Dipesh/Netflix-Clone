import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    app: userReducer,
    movie: movieReducer,
    searchMovie: searchSlice,
  },
});
