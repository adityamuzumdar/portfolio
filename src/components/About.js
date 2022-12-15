import React from "react";
function About() {
  return (
    <div className="flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-White">Hey There! I'm Aditya. I am a Software Developer.</h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laboriosam, voluptatum. Dolorum laboriosam repellat illo excepturi
            velit? Unde praesentium consectetur aliquid?
          </p>
      </div>
      <div className="object-cover object-center rounded">
        <img src="./coding.svg" alt="" />
      </div>
    </div>
  );
}
export default About;
