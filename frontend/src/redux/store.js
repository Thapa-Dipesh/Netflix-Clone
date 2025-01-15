import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

export const store = configureStore({
  reducer: {
    app: userReducer,
    movie: movieReducer,
  },
});
