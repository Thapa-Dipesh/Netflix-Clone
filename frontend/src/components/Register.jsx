import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="text-black">
      <div className="px-16 py-4 border-b-2">
        <Link to="/">
          <img
            className="w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="netflix logo"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="flex flex-col px-16 pt-16 h-[80%] w-[28%] rounded">
          <h2 className="text-4xl font-bold pb-10">Sign Up</h2>
          <form onSubmit={handleLogin} className="flex flex-col">
            <input
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              className="px-4 py-3 bg-transparent border-2 border-gray-600 rounded mb-4 font-bold"
              type="text"
              placeholder="Full Name"
              required
            />
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
            />
            <button className="bg-red-600 hover:bg-red-700 text-white py-3 outline-none rounded font-bold mb-4">
              Create Account
            </button>
          </form>
          <p className="text-base mb-32">
            Already Have an Account?
            <Link to="/login" className="font-bold ml-1">
              Sign In Here
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

export default Register;
