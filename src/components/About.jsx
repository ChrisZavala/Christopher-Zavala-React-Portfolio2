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
          I am passionate about building excellent software full stack applications that improves
          the lives of those around me. I am thoughtful and extremely diligent about the projects that I create.
          I also have an electrical engineering degree, so I have a vastly diverse technical background.
        </p>

        <br />

        <p className="text-xl">
          My goal from this journey is to refine my craft and skill in this coding bootcamp to become a full-stack web developer
          with the skills necessary to enjoy my new career but also bring the skills that I have learn through all my life experiences
          and bring them altogether in one big broad stroke. I have a degree a Bachelor’s of Science in Electrical Engineering and I also
          have a love for the engineering process and solve problems. With this brief introduction that I have told you, I hope to have given
          you a little understanding about what I like to do and love to create. I hope you enjoy this site as much as I have enjoyed the
          process of bringing it to life! Thank you.
        </p>
      </div>
    </div>
  );
};

export default About;