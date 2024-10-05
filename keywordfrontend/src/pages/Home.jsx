import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import ToolsCards from "../component/ToolsCards";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [hasBounced, setHasBounced] = useState(false);

  const handleAnimationEnd = () => {
    setHasBounced(true);
  };

  return (
    <>
      <div className="py-4 px-12">
        <div className="flex justify-between space-x-6 mt-24">
          <div className="w-1/3 flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/antrix/image/upload/v1728027295/keywordsforyou/home-feature-cropped_zyvhfm.jpg"
              alt="hero"
              className={`w-[80%] h-auto 
            ${hasBounced ? "" : "animate-[fallDown_1s_ease-out_forwards]"} 
            ${hasBounced ? "" : "animate-bounce-twice"}`}
              onAnimationEnd={handleAnimationEnd}
            />
          </div>
          <div className="w-2/3">
            {/* Typing effect for h1 */}
            <TypeAnimation
              sequence={["YouTube SEO Toolset"]}
              wrapper="h1"
              className="text-4xl text-gray-700"
              speed={50}
              repeat={0}
              cursor={false}
            />

            {/* Typing effect for h2 after h1 completes */}
            <TypeAnimation
              sequence={[
                2000, // Wait 2 seconds
                "Optimize Your Videos. Gain More Views & Subscribers.",
              ]}
              wrapper="h2"
              className="text-2xl text-gray-700 mt-4"
              speed={50}
              repeat={0}
              cursor={false}
            />

            {/* Typing effect for p tag after h2 completes */}
            <TypeAnimation
              sequence={[
                4000, // Wait 4 seconds (for the first two animations to complete)
                `Keywords4u offers the ultimate toolset for Youtubers to optimize their videos against the YouTube algorithm and rank 
          higher in YouTube & Google searches and recommendation engines. YouTube SEO toolsets allow creators to analyze their 
          competitors' video strategies and performance. These tools provide creators with recommendations for optimizing video 
          titles, descriptions, tags, and thumbnails to improve search visibility and CTR.`,
              ]}
              wrapper="p"
              className="text-justify text-gray-500 mt-4"
              speed={100}
              repeat={0}
              cursor={false}
            />
            {/* <h1 className="text-4xl text-gray-700">{title}</h1>
            <h2 className="text-2xl text-gray-700 mt-4">{subtitle}</h2>
            <p className="text-justify text-gray-500 mt-4">{paragraph}</p> */}
          </div>
        </div>
        <div className="mt-24">
          <h2 className="text-3xl text-gray-700 text-center">
            Try The Tools Now
          </h2>
          <ToolsCards />
        </div>
      </div>
    </>
  );
};

export default Home;
