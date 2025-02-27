import React, { useState } from "react";
import logo from "/logo.png";

const Page5 = () => {
  const cards = [
    {
      title: "Swap",
      description: "Currency exchange rates library for PHP",
      stars: 645,
      forks: 324,
    },
    {
      title: "Swap",
      description: "Currency exchange rates library for PHP",
      stars: 645,
      forks: 324,
    },
    {
      title: "Swap",
      description: "Currency exchange rates library for PHP",
      stars: 645,
      forks: 324,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-10">
      {/* Header */}
      <div className="swap mb-[5%] mt-[10%] ">
        <h1 className="text-4xl w-full   font-md text-[#344CB7] ">
          OPEN SOURCE
        </h1>
      </div>

      {/* Cards Section */}
      <div className="swap relative  h-[30vh] w-[120vh]  flex justify-between gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-8 w-1/3 h-[100%] shadow-lg transition-all duration-300 ${
              index === activeIndex ? "bg-gray-900 text-white" : "bg-white"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="flex items-center space-x-2">
              <span className="text-3xl gap-4">{"</>"}</span>
              <h3 className="text-3xl font-semibold">{card.title}</h3>
            </div>
            <p className="mt-2 text-xl">{card.description}</p>
            <div className="flex justify-between mt-4 text-lg">
              <span>
                <i className="ri-star-fill"></i> {card.stars}
              </span>
              <span>
                <i className="ri-git-fork-fill"></i> {card.forks}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="swap flex space-x-2">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === activeIndex ? "bg-blue-500 w-3" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>

      {/* Call to Action */}

      <div className="call text-center h-[5vw]  pl-[5vw] w-[70vw] flex items-center ">
        <div className="para mt-5 mr-[20%]">
          <p className="text-2xl text-blue-600 w-[70vh]  ">
            Need help developing your application?
          </p>
          <p className="para2 text-start text-xl px-[9%]">
            Let's get in touch!
          </p>
        </div>
        <button className="mt-4 px-4 w-[18%] py-3 bg-[#344CB7] hover:bg-gray-800  transition duration-300 text-white  shadow-md">
          <i className="ri-arrow-right-fill text-lg mr-2"></i>
          WORK WITH ME
        </button>
      </div>

      {/* Footer */}
      <footer className="flex footerlast p-1 text-sm h-[5vw] w-[70vw] mb-[5vw] items-center space-y-2 text-gray-500">
        <div className="foot1 flex mr-[20%] mt-[2vw] w-[50vw]">
          <div>
            <div className="circle h-[3vw] w-[3vw]  bg-[#25282F]   rounded-full mr-5">
              <img
                src={logo}
                className="rounded-full pl-2 pt-2 h-[80%] w-[80%]"
                alt=""
              />
            </div>
          </div>
          <div>
            <p>Charles Von der Hejden</p>
            <p>© 2018 - All rights reserved</p>
          </div>
        </div>

        <div className="end flex space-x-4">
          <a href="#" className="hover:text-gray-700">
            GITHUB
          </a>
          <a href="#" className="hover:text-gray-700">
            LINKEDIN
          </a>
          <a href="#" className="hover:text-gray-700">
            TWITTER
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Page5;
