import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const teamMembers = [
    {
      name: "Sankalan Chanda",
      quote:
        "I believe in the power of technology to transform lives and make a positive impact.",
      image: "https://source.unsplash.com/150x150/?male+developer",
    },
    {
      name: "Anirban Debnath",
      quote:
        "Passionate about creating intuitive and user-friendly interfaces that bring joy to people's lives.",
      image: "https://source.unsplash.com/150x150/?male+coder",
    },
    {
      name: "Soumik Shyam",
      quote:
        "Dedicated to crafting elegant and efficient code to deliver high-quality software solutions.",
      image: "https://source.unsplash.com/150x150/?male+tester",
    },
    {
      name: "Sagnik Mitra",
      quote:
        "I strive to bring innovative ideas to life and solve complex problems through creative solutions.",
      image: "https://source.unsplash.com/150x150/?male+programmer",
    },
    {
      name: "Arpan Bhowmick",
      quote:
        "Passionate about continuous learning and staying up-to-date with the latest technologies.",
      image: "https://source.unsplash.com/150x150/?male+manager",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold text-gray-900 sm:mb-0">About Us</h2>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <a
              href="#"
              className="inline-block bg-indigo-600 py-2 px-4 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-8 sm:flex">
          <div className="sm:w-1/2 sm:mr-8">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Our Mission
            </h3>
            <p className="mt-2 text-gray-600">
              At our company, our mission is to harness the power of technology
              and create innovative solutions that improve people's lives. We
              are committed to delivering high-quality software products and
              services that exceed our clients' expectations. Through our
              expertise and dedication, we aim to make a positive impact in the
              digital world and contribute to the advancement of society.
            </p>
          </div>
          <div className="mt-8 sm:mt-0 sm:w-1/2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Our Vision
            </h3>
            <p className="mt-2 text-gray-600">
              Our vision is to be a leading technology company that drives
              innovation and sets new standards in the industry. We strive to be
              a trusted partner for our clients, providing them with
              cutting-edge solutions that solve complex challenges. By fostering
              a culture of continuous learning and collaboration, we aim to
              attract top talent and nurture their skills. Through our work, we
              aspire to shape the future of technology and make a lasting impact
              on businesses and communities around the world.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="p-6 items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto w-32 h-32 rounded-full mb-4"
                  />
                  <div className="flex justify-center items-center mb-4 text-center">
                    <h4 className="text-xl font-bold">{member.name}</h4>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-4 text-center">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="w-6 h-6 mr-2 text-indigo-600"
                    />
                    <p className="text-gray-600 leading-relaxed">
                      {member.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
