import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Typed from "react-typed";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center">
        <section
          className="relative flex items-center justify-center h-screen bg-gray-900 w-full"
          data-aos="flip-right"
        >
          <img
            src="https://source.unsplash.com/random/1600x900/?news"
            alt="Coffee shop"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="z-10 px-8 text-center">
            <h1 className="text-5xl font-bold text-white tracking-wide">
              Welcome to NewsFlash
            </h1>
            <p className="mt-4 text-lg font-medium text-gray-300">
              <Typed
                strings={[
                  "One place for all the news and headlines that you need",
                  "Stay informed with the latest news and headlines",
                  "Get real-time updates on global events",
                  "Discover stories from around the world",
                  "Access breaking news as it happens",
                ]}
                typeSpeed={40}
                backSpeed={15}
                loop
              />
            </p>
            <a
              href="#features"
              className="inline-block px-8 py-3 mt-8 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Get started
            </a>
          </div>
        </section>

        <section
          id="features"
          className="flex flex-col items-center justify-center min-h-screen bg-blue-50 w-full"
          data-aos="fade-up"
        >
          <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 items-center">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
              Our Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
              <div
                className="flex flex-col items-center p-6 bg-white shadow rounded-lg"
                data-aos="fade-up"
              >
                <i className="far fa-newspaper text-5xl text-blue-500 mb-4"></i>
                <h3 className="text-xl font-medium text-blue-900">For you</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Get personalized news recommendations in 'For you' section
                </p>
              </div>
              <div
                className="flex flex-col items-center p-6 bg-white shadow rounded-lg"
                data-aos="fade-up"
              >
                <i className="fas fa-search text-5xl text-blue-500 mb-4"></i>
                <h3 className="text-xl font-medium text-blue-900">
                  {" "}
                  Voice Search
                </h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Search for news articles hands-free using our voice search
                  feature
                </p>
              </div>
              <div
                className="flex flex-col items-center p-6 bg-white shadow rounded-lg"
                data-aos="fade-up"
              >
                <i className="far fa-heart text-5xl text-blue-500 mb-4"></i>
                <h3 className="text-xl font-medium text-blue-900">Forum</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Discuss the latest news articles with other users in our forum
                  section
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-full mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16 items-center"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
              Voice Search guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
              <div
                className="flex flex-col justify-between items-center p-6 bg-[#22679c] text-white min-h-[320px] rounded-lg"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-medium  mb-4">
                  Search Latest News
                </h3>
                <p className="mt-2 text-base  text-center italic">
                  Try saying : Give me the recent news
                </p>
              </div>
              <div
                className="flex flex-col justify-between items-center p-6 bg-[#43229c] text-white min-h-[320px] rounded-lg"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-medium mb-4">
                  Search news by categories
                </h3>
                <p className="mt-2 text-base text-center">
                  <span>Categories:</span>
                  <br></br>
                  Business, Technology, General, Entertainement, Health, Sports,
                  Science
                </p>
                <p className="mt-2 text-base text-center italic">
                  Try saying : What are the latest sports news
                </p>
              </div>
              <div
                className="flex flex-col justify-between items-center p-6 bg-[#5e113c] text-white min-h-[320px] rounded-lg"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-medium mb-4 items-center text-center">
                  Search news from different sources
                </h3>
                <p className="mt-2 text-base text-center">
                  <span>Sources:</span>
                  <br></br>
                  BBC News, CNN, Business Insider, ESPN, Buzzfeed, Wired...
                </p>
                <p className="mt-2 text-base text-center italic">
                  Try saying : Fetch me the news from CNN
                </p>
              </div>
              <div
                className="flex flex-col justify-between items-center p-6 bg-[#33115e] text-white min-h-[320px] rounded-lg"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-medium mb-4 items-center text-center">
                  Search news by search term
                </h3>
                <p className="mt-2 text-base text-center">
                  <span>Terms:</span>
                  <br></br>
                  Bitcoin, Donald Trump, Elon musk, Playstation 5...
                </p>
                <p className="mt-2 text-base text-center italic">
                  Try saying : What's up with Bitcoin? or Search news Elon musk
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
