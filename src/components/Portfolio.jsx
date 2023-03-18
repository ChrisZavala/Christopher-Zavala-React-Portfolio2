import React from "react";
import { data } from "../data/data";

const Portfolio = () => {
  const project = data;

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-20">
          <p className="text-4xl font-bold inline border-b-4 text-[white] border-[#58C0A9]">
            Portfolio
          </p>
          <p className="py-6">Here are my past projects!</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-4 md:gap-12 px-12 sm:px-0">
          {project.map((item, index) => (
            <div key={index} className="relative">
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-100 h-80 bg-cover bg-center"
              >
                <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-50">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                  <div className="pt-4 text-center">
                    <a href={item.github} target="">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                    <a href={item.deploy} target="">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
