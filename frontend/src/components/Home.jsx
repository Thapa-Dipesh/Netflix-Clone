import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import Footer from "./Footer";

const Home = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="h-screen bg-cover bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/NP-en-20241223-TRIFECTA-perspective_c56cd923-0f3e-4935-8016-0a734afd96e1_small.jpg)]">
      <div className="bg-black opacity-80 h-screen">
        <Header />
        <div className="flex items-center justify-center p-40 mt-8">
          <div className="w-1/2 text-white flex items-center flex-col justify-center">
            <h1 className="text-6xl font-extrabold pb-4">
              Unlimited movies,
            </h1>
            <h1 className="text-6xl font-extrabold pb-6">TV shows, and more</h1>
            <h4 className="text-xl font-medium pb-8">
              Starts at USD 2.99. Cancel anytime.
            </h4>
            <p className="text-lg  pb-5">
              Ready to watch? Enter your email to create and restart your
              membership.
            </p>
            <form className="flex items-center justify-between w-full mb-8">
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="px-4 py-3 bg-transparent w-3/4 rounded border-2 border-gray-600 text-base font-bold"
                type="email"
                placeholder="Email address"
                required
              />
              <button className="bg-red-600 hover:bg-red-700 text-white w-1/2 px-4 py-3 ml-4 rounded text-2xl font-bold">
                <Link
                  to="/register"
                  className="flex items-center justify-center gap-6">
                  Get Started <FaChevronRight />
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
