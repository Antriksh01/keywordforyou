import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <h2 className="text-4xl mt-12 font-bold text-center">
        YouTube Tag Generator
      </h2>
      <div className="flex items-center justify-center min-h-full">
        <div className="flex flex-col w-10/12 items-center bg-slate-100 p-4 shadow-xl rounded-xl mt-10">
          <input
            id="price"
            name="price"
            type="text"
            placeholder=""
            className="block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-40"
          />
          <small className="text-gray-500 italic block self-center w-10/12">
            Example: cricket, football, rugby
          </small>
          <button className="bg-red-600 px-4 py-2 rounded-xl text-white font-semibold mt-4 shadow-lg">
            Generate
          </button>
          <div className="flex space-x-3 items-center mt-2">
            <h2>Share</h2>
            <FaFacebook />
            <BsTwitterX />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-28 mt-6">
        <h2 className="text-xl font-bold">
          Introduction to Our YouTube Tag Generator
        </h2>
        <p className="text-justify">
          In the vast and ever-expanding world of online video content,
          understanding the intricacies of platforms like YouTube is crucial for
          creators looking to maximize their reach and engagement. Among the key
          elements of YouTube optimization is the proper utilization of tags. In
          this comprehensive guide, we'll delve into the concept of YouTube
          tags, their significance in video optimization, and best practices for
          leveraging them effectively to enhance the visibility and
          discoverability of your content.
        </p>
      </div>
    </>
  );
};

export default Home;
