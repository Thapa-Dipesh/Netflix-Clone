import React from "react";
import Body from "./components/Body";
import { Toaster } from "react-hot-toast";
import MovieDialog from "./components/MovieDialog";

const App = () => {
  return (
    <>
      <Body />
      <Toaster />
      <MovieDialog />
    </>
  );
};

export default App;
