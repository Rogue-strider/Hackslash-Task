
import React from "react";
import "remixicon/fonts/remixicon.css";
import img from "/img.png"

const Main = () => {
  
  return (
    <div className="home min-h-screen w-full flex">
      {/* Left Side - Content */}
      <div className="div1 relative mt-5 left-[20vh] w-[50%]   h-[70vh] flex flex-col justify-center items-center p-8">
        <div className="div2 absolute p-2 w-[30%] h-[50%] top-[30%]">
          <div className="div3 flex w-[20vw] text-4xl text-gray-900">
            <h1 className="div4 font-bold mb-4">Hey, </h1>
            <h1>I'm Charles</h1>
          </div>

          <p className="text-2xl text-gray-700 w-[50vh] mb-6">
            I help <u>start-ups.</u> developing outstanding web products.
          </p>
          <button className="bg-[#344CB7] text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition duration-300">
            <i className="mr-2 ri-arrow-right-fill text-lg"></i>
            WORK WITH ME
          </button>
        </div>
        <div className="footer absolute w-[30%] h-[10%] top-[95%] flex space-x-6">
          <a
            href="https://github.com"
            className="text-gray-700 hover:text-black transition duration-300"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-700 hover:text-black transition duration-300"
          >
            LINKEDIN
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-700 hover:text-black transition duration-300"
          >
            TWITTER
          </a>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="imghome mt-5  mt-[8%] ml-[8vw] h-[40vh] w-[30%]">
        <div className="homeimg  w-[100%] h-[100%]   ">
          <img src={img} alt="Charles" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Main;