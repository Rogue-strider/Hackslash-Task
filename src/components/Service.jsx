import React from "react";
import backend from "/backend.png";
import frontend from "/frontend.png";

const Service = () => {
  return (
    <div className="services min-h-screen mb-[20%]">
      <div className="service mb-5 h-[8%]">
        <h1 className="servicehead text-4xl w-full flex justify-center  font-md text-[#344CB7] ">
          SERVICES
        </h1>
      </div>
      {/* Backend */}
      <div className="backend mb-5 p-5 h-[50%]  flex justify-center items-center">
        <div className="backendimgdiv bg-zinc-900 w-1/3 h-[50vh]">
          <img
            src={backend}
            className="backendimg object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="backendcont w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Backend Development
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Translating your complex business topics into secure and maintain-
          </p>{" "}
          <p className="text-lg text-gray-700 leading-relaxed">
            able code. Custom websites or services development with Laravel or{" "}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Symfony and integrations with any SaaS platform like Stripe or
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            {" "}
            Amazon Web Services.
          </p>
          <button className="backendbtn mt-10 bg-[#344CB7] text-white px-8 py-3 rounded font-semibold hover:bg-gray-800 transition duration-300">
            <i className="ri-arrow-right-fill text-lg"></i>
            WORK WITH ME
          </button>
        </div>
      </div>
      <hr className="line invisible ... text-zinc-400  " />
      {/*frontend */}
      <div className="frontend p-5 h-[42%] flex justify-center items-center">
        {/* <div className="frontendcont p-3 bg-red-500 w-[30vw]">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Frontend Development
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Building your awesome product from a visual concept to a fully func-
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            tional application.Sketch integration with Bootstrap or Material
            Design
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            and modern single page apps development with Vue, React or
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
           
            Angular
          </p>
          <button className="backendbtn mt-10 bg-[#344CB7] text-white px-8 py-3 rounded font-semibold hover:bg-gray-800 transition duration-300">
            <i className="ri-arrow-right-fill text-lg"></i>
            WORK WITH ME
          </button>
        </div> */}
        <div className="backendcont pl-[10vw] w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Frontend Development
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Building your awesome product from a visual concept to a fully func-
          </p>{" "}
          <p className="text-lg text-gray-700 leading-relaxed">
            tional application.Sketch integration with Bootstrap or Material
            Design
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            and modern single page apps development with Vue, React or
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">Angular</p>
          <button className="backendbtn mt-10 bg-[#344CB7] text-white px-8 py-3 rounded font-semibold hover:bg-gray-800 transition duration-300">
            <i className="ri-arrow-right-fill text-lg"></i>
            WORK WITH ME
          </button>
        </div>
        <div className="backendimg bg-zinc-900 w-1/3  h-[50vh]">
          <img src={frontend} className="object-cover w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Service;
