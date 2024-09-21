import React from "react";
import { Tabs } from "../Extras/tabs";
import { CardBody, CardContainer, CardItem } from "../Extras/3d-card";
import { Link } from "react-router-dom";
import Faq from "../component/Faq";

const Pricing = () => {
  const tabs = [
    {
      title: "Monthly",
      value: "Monthly",
      content: (
        <div className="w-full relative h-auto rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-emerald-100 to-emerald-300 shadow-2xl">
          {/* <p>Product Tab</p> */}
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Yearly",
      value: "Yearly",
      content: (
        <div className="w-full relative h-auto rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-emerald-100 to-emerald-300 shadow-lg shadow-red-500/50">
          {/* <p>Services tab</p> */}
          <DummyContent />
        </div>
      ),
    },
  ];
  return (
    <div className="h-auto">
      <h2 className="text-4xl font-semibold mt-6 text-center">
        Plans & Pricing
      </h2>
      <div className="h-full md:h-full [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-center justify-center my-4">
        <Tabs tabs={tabs} />
      </div>
      <div>
        <div className="bg-gray-50 p-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
            {/* Card 1 */}
            {/* <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <img
                    src="/path-to-your-user-icon.svg"
                    alt="Registered Users"
                    className="h-10 w-10"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">1,20,000+</h2>
              <p className="text-gray-500 mt-2">Registered Users</p>
            </div> */}
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="https://res.cloudinary.com/antrix/image/upload/v1726938927/ai-generated-9050757_1280_bgq24i.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex flex-row justify-center items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-green-300 dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <p className="text-gray-500 mt-2">Registered Users</p>
                    <h2 className="text-2xl font-bold text-gray-800">
                      5,00,000+
                    </h2>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>

            {/* Card 2 */}
            {/* <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-100 p-4 rounded-full">
                  <img
                    src="/path-to-your-happy-icon.svg"
                    alt="Happy Users"
                    className="h-10 w-10"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">42,000+</h2>
              <p className="text-gray-500 mt-2">Happy Users</p>
            </div> */}
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[23rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="https://res.cloudinary.com/antrix/image/upload/v1726938927/ai-generated-9050757_1280_bgq24i.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex flex-row justify-center items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-yellow-200 dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <p className="text-gray-500 mt-2">Happy Users</p>
                    <h2 className="text-2xl font-bold text-gray-800">
                      4,00,000+
                    </h2>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>

            {/* Card 3 */}
            {/* <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <img
                    src="/path-to-your-premium-icon.svg"
                    alt="Premium Users"
                    className="h-10 w-10"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">12,000+</h2>
              <p className="text-gray-500 mt-2">Premium Users</p>
            </div> */}
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="https://res.cloudinary.com/antrix/image/upload/v1726938927/ai-generated-9050757_1280_bgq24i.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex flex-row justify-center items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-teal-200 dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <p className="text-gray-500 mt-2">Premium Users</p>
                    <h2 className="text-2xl font-bold text-gray-800">
                      1,00,000+
                    </h2>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
};

export default Pricing;

const DummyContent = () => {
  return (
    <div className="">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="border-b-2 border-emerald-200 shadow-2xl">
            <th className="py-4 px-6 border-r-2 border-r-emerald-200  text-red-600 text-start">
              Pricing & Plan
            </th>
            <th className="py-4 px-6 border-r-2 border-r-emerald-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">Free</div>
                <div className="text-lg text-gray-500">$0.00 / Month</div>
              </div>
            </th>
            <th className="py-4 px-6 ">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600">Pro</div>
                <div className="text-lg text-gray-500">$8.00 / Month</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 text-xl font-semibold text-left text-black border-r-2 border-r-emerald-200">
              Youtube Tag Generator
            </td>
            <td className="py-4 text-center px-6 text-xl text-gray-500 border-r-2 border-r-emerald-200">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 text-xl px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200">
              Youtube Title and Description Extractor
            </td>
            <td className="py-4 text-center px-6 text-xl text-gray-500 border-r-2 border-r-emerald-200">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 text-xl px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200">
              Youtube Thumbnails Generator
            </td>
            <td className="py-4 text-center px-6 text-xl text-gray-500 border-r-2 border-r-emerald-200">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 text-xl font-semibold text-left text-black border-r-2 border-r-emerald-200">
              Youtube Channel Audit
            </td>
            <td className="py-4 text-center px-6 text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl">
              Youtube Money Calculator
            </td>
            <td className="py-4 text-center px-6 text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl">
              Youtube Embed Code Generator
            </td>
            <td className="py-4 text-center px-6 text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl">
              Youtube Hashtag Generator
            </td>
            <td className="py-4 text-center px-6 text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl">
              Case Converter
            </td>
            <td className="py-4 text-center px-6 text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl">
              Youtube Video Audit
            </td>
            <td className="py-4 px-6 text-center text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl">
              Youtube Comment Picker
            </td>
            <td className="py-4 px-6 text-center text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl">
              Youtube Tag Extractor
            </td>
            <td className="py-4 px-6 text-center text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl">
              YouTube Channel ID Finder
            </td>
            <td className="py-4 px-6 text-center text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl">
              YouTube Title Generator
            </td>
            <td className="py-4 px-6 text-center text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl">
              YouTube Description Generator
            </td>
            <td className="py-4 px-6 text-center text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl">
              Youtube Trending Videos
            </td>
            <td className="py-4 px-6 text-center text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl">
              YouTube Channel Search Tool
            </td>
            <td className="py-4 px-6 text-center text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl">
              YouTube Channel Banner Downloader
            </td>
            <td className="py-4 px-6 text-center text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl">
              YouTube Channel Banner Downloader
            </td>
            <td className="py-4 px-6 text-center text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="border-b-2 border-b-emerald-200">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl">
              YouTube Channel Logo Downloader
            </td>
            <td className="py-4 px-6 text-center text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              Limited
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              &#10004;
            </td>
          </tr>
          <tr className="">
            <td className="py-4 px-6 font-semibold text-left text-black border-r-2 border-r-emerald-200 text-xl"></td>
            <td className="py-4 px-6 text-center text-gray-500 border-r-2 border-r-emerald-200 text-xl">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Get started
              </button>
            </td>
            <td className="py-4 text-center px-6 text-green-500 text-xl">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-emerald-800 bg-[linear-gradient(110deg,#164E63,45%,#1e2631,55%,#164E63)] bg-[length:200%_100%] px-6 font-medium text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-2xl">
                Get started
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
