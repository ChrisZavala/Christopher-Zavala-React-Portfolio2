import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#58C0A9]">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am passionate about building excellent full stack applications that improve
          the lives of those around me. I am thoughtful and extremely diligent about the projects that I create.
          I also have an electrical engineering degree, so I have a diverse technical background.
        </p>
        <br />
        <p className="text-xl">
          My goal from this journey is to refine my craft and skills, from The University of Texas at Austin coding boot camp that I have been in for the past
          three months, with a desire to become a full stack web developer. I have a Bachelors of Science in Electrical Engineering and I
          have a love for the engineering process and solving problems. I hope to have given you a little understanding about what I like to do and love to create.
          I hope you enjoy this site as much as I have enjoyed the process of bringing it to life!
        </p>
      </div>
    </div>
  );
};

export default About;