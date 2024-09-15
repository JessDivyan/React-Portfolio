import React from "react";

const Home = () => {
  return (
    <section className="h-screen  bg-dark-primaryBg  flex justify-center items-center overflow-hidden bg-image p-6">
      {/* Animated Background Elements */}

      {/* Main Content */}
      <div className="relative z-10 bg-dark-secondaryBg text-dark-primaryText p-8 rounded-lg shadow-lg max-w-2xl w-full text-center">
        <h1 className="md:text-5xl font-light mb-4 text-3xl">
          Hi, I'm <br />
          <span className="font-bold">Jess Divyan Pradeep</span>
        </h1>
        <h3 className="md:text-lg text-md font-light mt-2 mb-8">
          Web Developer | Data Analyst | Digital Solutions Strategist
        </h3>

        {/* Call to Action Buttons */}
        <div className="flex justify-center gap-4 md:text-md text-sm">
          <a
            href="/portfolio"
            className="bg-teal-700 text-white py-3 px-6 rounded-full shadow-lg hover:bg-teal-400 hover:border-teal-800 hover:border hover:text-teal-950 font-semibold transition transform duration-200">
            View My Work
          </a>
          <a
            href="#footer"
            className="border border-gray-300 text-gray-300 py-3 px-6 rounded-full shadow-md hover:bg-gray-700 hover:border-gray-500 transition duration-200">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
