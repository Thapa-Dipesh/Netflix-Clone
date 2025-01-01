import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen text-white bg-cover bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/NP-en-20241223-TRIFECTA-perspective_c56cd923-0f3e-4935-8016-0a734afd96e1_small.jpg)]">
      <div className="px-40 py-4 bg-gradient-to-b from-black">
        <Link to="/">
          <img
            className="w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="netflix logo"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="flex flex-col bg-black opacity-80 px-16 pt-16 h-[80%] w-[28%] rounded">
          <h2 className="text-4xl font-bold pb-10">Sign In</h2>
          <form onSubmit={handleLogin} className="flex flex-col">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="px-4 py-3 bg-transparent border-2 border-gray-600 rounded mb-4 font-bold"
              type="email"
              placeholder="Email"
              required
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="px-4 py-3 bg-transparent border-2 border-gray-600 rounded mb-4 font-bold"
              type="password"
              placeholder="Password"
              required
            />
            <button className="bg-red-600 hover:bg-red-700 py-2 rounded font-bold mb-4">
              Sign In
            </button>
          </form>
          <p className="text-base mb-32">
            New to Netflix?
            <Link to="/register" className="font-bold ml-1">
              Sign up now
            </Link>
          </p>
          <p className="text-sm text-gray-500 py-16">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;