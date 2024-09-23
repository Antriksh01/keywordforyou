import { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiAlignCenter } from "react-icons/fi";

const EmbedCodeGen = () => {
  const [showMore, setShowMore] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [alignItm, setAlignItm] = useState("");

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <h2 className="text-4xl mt-12 font-bold text-center text-cyan-800">
        YouTube Embed Code Generator
      </h2>
      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Example: https://youtu.be/eUDEdKzw0Lg"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex space-x-4 justify-between items-center">
            <label className="w-full text-sm font-medium text-gray-700">
              Aspect Ratio:
            </label>
            <select className="bg-gray-100 border border-gray-100 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-300 block w-full p-2.5 ">
              <option className="bg-gray-100 ">Web(16:9)</option>
              <option className="bg-gray-100 ">Web(4:3)</option>
              <option className="bg-gray-100 ">Web(1:1)</option>
            </select>
          </div>
          <div className="flex space-x-4 justify-between items-center">
            <label className="w-full text-sm font-medium text-gray-700">
              Video Quality:
            </label>
            <select className="bg-gray-100 border border-gray-100 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-300 block w-full p-2.5 ">
              <option className="bg-gray-100 ">FullHD(1080p)</option>
              <option className="bg-gray-100 ">HD(720p)</option>
              <option className="bg-gray-100 ">HD(480p)</option>
              <option className="bg-gray-100 ">SD(360p)</option>
              <option className="bg-gray-100 ">SD(144p)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex space-x-4 justify-between items-center">
            <label className="w-full text-sm font-medium text-gray-700">
              Width (px):
            </label>
            <input
              type="number"
              defaultValue="560"
              className="w-full mt-1 text-sm p-2 border bg-gray-100 border-gray-100 rounded-md"
            />
          </div>
          <div className="flex space-x-4 justify-between items-center">
            <label className="w-full text-sm font-medium text-gray-700">
              Height (px):
            </label>
            <input
              type="number"
              defaultValue="315"
              className="w-full mt-1 text-sm p-2 bg-gray-100 border border-gray-100 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex space-x-4 justify-between items-center">
            <label className="w-full text-sm font-medium text-gray-700">
              Start Time:
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="hr"
                className="w-full mt-1 p-2 h-8 bg-gray-100 border border-gray-100 rounded-md"
              />
              <input
                type="number"
                placeholder="mm"
                className="w-full mt-1 p-2 h-8 bg-gray-100 border border-gray-100 rounded-md"
              />
              <input
                type="number"
                placeholder="ss"
                className="w-full mt-1 p-2 h-8 bg-gray-100 border border-gray-100 rounded-md"
              />
            </div>
          </div>
          <div className="flex space-x-4 justify-between items-center">
            <label className="w-full text-sm mx-2 font-medium text-gray-700">
              End Time:
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="hr"
                className="w-full mt-1 p-2 h-8 bg-gray-100 border border-gray-100 rounded-md"
              />
              <input
                type="number"
                placeholder="mm"
                className="w-full mt-1 p-2 h-8 bg-gray-100 border border-gray-100 rounded-md"
              />
              <input
                type="number"
                placeholder="ss"
                className="w-full mt-1 p-2 h-8 bg-gray-100 border border-gray-100 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Loop Video
            </label>

            <div
              onClick={toggleSwitch}
              className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                isToggled ? "bg-green-400" : "bg-red-600"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isToggled ? "translate-x-6" : ""
                }`}
              ></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Autoplay Video
            </label>
            <div
              onClick={toggleSwitch}
              className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                isToggled ? "bg-green-400" : "bg-red-600"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isToggled ? "translate-x-6" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700">
              Align:
            </label>
            <div className="flex space-x-2 mt-1">
              <button
                className={`p-2  rounded-md ${
                  alignItm === "left" ? "bg-red-600 text-white" : "bg-gray-200"
                }`}
                onClick={() => setAlignItm("left")}
              >
                <FaAlignLeft />
              </button>
              <button
                className={`p-2  rounded-md ${
                  alignItm === "center"
                    ? "bg-red-600 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setAlignItm("center")}
              >
                <FaAlignCenter />
              </button>
              <button
                className={`p-2  rounded-md ${
                  alignItm === "right" ? "bg-red-600 text-white" : "bg-gray-200"
                }`}
                onClick={() => setAlignItm("right")}
              >
                <FaAlignRight />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label className="w-full text-sm font-medium text-gray-700">
              Progress Bar Color:
            </label>
            <select className="w-full mt-1 p-2 text-sm border border-gray-300 rounded-md">
              <option>Red</option>
              <option>blue</option>
              <option>green</option>
            </select>
          </div>
        </div>

        {showMore && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Show Caption:
              </label>
              <div
                onClick={toggleSwitch}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  isToggled ? "bg-green-400" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isToggled ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Hide Controls:
              </label>
              <div
                onClick={toggleSwitch}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  isToggled ? "bg-green-400" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isToggled ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Enhanced Security:
              </label>
              <div
                onClick={toggleSwitch}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  isToggled ? "bg-green-400" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isToggled ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Enhanced Privacy:
              </label>
              <div
                onClick={toggleSwitch}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  isToggled ? "bg-green-400" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isToggled ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Mute Video:
              </label>
              <div
                onClick={toggleSwitch}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  isToggled ? "bg-green-400" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isToggled ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Allow Fullscreen:
              </label>
              <div
                onClick={toggleSwitch}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  isToggled ? "bg-green-400" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isToggled ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Hide YouTube Logo:
              </label>
              <div
                onClick={toggleSwitch}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  isToggled ? "bg-green-400" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isToggled ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Show Related Video:
              </label>
              <div
                onClick={toggleSwitch}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  isToggled ? "bg-green-400" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isToggled ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>

        <div className="text-center mt-4">
          <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">
            Generate
          </button>
        </div>

        <div className="flex space-x-3 justify-center items-center mt-2">
          <h2>Share</h2>
          <FaFacebook />
          <BsTwitterX />
          <FaLinkedinIn />
        </div>
      </div>
    </>
  );
};

export default EmbedCodeGen;
