import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white px-32 pt-16">
      <footer className=" md:p-8 lg:p-1">
        <div className="mx-auto max-w-screen-xl text-center">
          <span className="text-sm sm:text-center">
            © 2025{" "}
            <a href="#" className="hover:underline">
              Dipesh Thapa
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
