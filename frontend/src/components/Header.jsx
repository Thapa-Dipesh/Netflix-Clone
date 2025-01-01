import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-32 py-4 bg-gradient-to-b from-black">
      <img
        className="w-40"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="netflix logo"
      />
      <div className="flex items-center justify-center gap-4">
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-base font-bold">
          <Link to="/login">Sign In</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
