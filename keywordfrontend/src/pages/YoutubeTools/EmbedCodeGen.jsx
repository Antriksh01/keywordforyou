import { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaCopy,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiAlignCenter } from "react-icons/fi";
import EmbedCodeText from "../../component/EmbedCodeText";
import { div } from "framer-motion/client";

const EmbedCodeGen = () => {
  const [showMore, setShowMore] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [alignItm, setAlignItm] = useState("");
  const [url, setUrl] = useState(""); // Store YouTube URL
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [videoQuality, setVideoQuality] = useState("1080p");
  const [width, setWidth] = useState(560);
  const [height, setHeight] = useState(315);
  const [startTime, setStartTime] = useState({ hr: 0, min: 0, sec: 0 });
  const [endTime, setEndTime] = useState({ hr: 0, min: 0, sec: 0 });
  const [loop, setLoop] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const [controls, setControls] = useState(true);
  const [mute, setMute] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [progressColor, setProgressColor] = useState("red");
  const [embedCode, setEmbedCode] = useState("");
  const [showCaption, setShowCaption] = useState(false);
  const [hideControls, setHideControls] = useState(false);
  const [enhancedSecurity, setEnhancedSecurity] = useState(false);
  const [enhancedPrivacy, setEnhancedPrivacy] = useState(false);
  const [muteVideo, setMuteVideo] = useState(false);
  const [allowFullscreen, setAllowFullscreen] = useState(false);
  const [hideYouTubeLogo, setHideYouTubeLogo] = useState(false);
  const [showRelatedVideo, setShowRelatedVideo] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    });
  };

  const toggleSwitch = (setter) => {
    setter((prev) => !prev);
  };

  // Function to generate YouTube embed code
  const generateEmbedCode = () => {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    const start = `start=${
      startTime.hr * 3600 + startTime.min * 60 + startTime.sec
    }`;
    const end =
      endTime.hr || endTime.min || endTime.sec
        ? `&end=${endTime.hr * 3600 + endTime.min * 60 + endTime.sec}`
        : "";
    const autoplayParam = autoplay ? "&autoplay=1" : "";
    const loopParam = loop ? `&loop=1&playlist=${videoId}` : "";
    const muteParam = mute ? "&mute=1" : "";
    const controlsParam = controls ? "" : "&controls=0";
    const fsParam = fullscreen ? "" : "&fs=0";

    const embedUrl = `https://www.youtube.com/embed/${videoId}?${start}${end}${autoplayParam}${loopParam}${muteParam}${controlsParam}${fsParam}`;
    setEmbedCode(
      `<iframe width="${width}" height="${height}" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`
    );
  };

  return (
    <>
      <h2 className="text-4xl mt-12 font-bold text-center text-cyan-800">
        YouTube Embed Code Generator
      </h2>
      <div className="w-full max-w-4xl mb-8 mx-auto bg-white shadow-lg shadow-red-500/50 rounded-lg p-8 ">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Example: https://youtu.be/eUDEdKzw0Lg"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex space-x-4 justify-between items-center">
            <label className="w-full text-sm font-medium text-gray-700">
              Aspect Ratio:
            </label>
            <select
              className="bg-gray-100 border border-gray-100 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-300 block w-full p-2.5 "
              onChange={(e) => setAspectRatio(e.target.value)}
            >
              <option className="bg-gray-100 " value="16:9">
                Web(16:9)
              </option>
              <option className="bg-gray-100 " value="4:3">
                Web(4:3)
              </option>
              <option className="bg-gray-100 " value="1:1">
                Web(1:1)
              </option>
            </select>
          </div>
          <div className="flex space-x-4 justify-between items-center">
            <label className="w-full text-sm font-medium text-gray-700">
              Video Quality:
            </label>
            <select
              className="bg-gray-100 border border-gray-100 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-300 block w-full p-2.5 "
              onChange={(e) => setVideoQuality(e.target.value)}
            >
              <option className="bg-gray-100" value="1080p">
                FullHD(1080p)
              </option>
              <option className="bg-gray-100" value="720p">
                HD(720p)
              </option>
              <option className="bg-gray-100" value="480p">
                HD(480p)
              </option>
              <option className="bg-gray-100" value="360p">
                SD(360p)
              </option>
              <option className="bg-gray-100" value="144p">
                SD(144p)
              </option>
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
              value={width}
              onChange={(e) => setWidth(e.target.value)}
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
              value={height}
              onChange={(e) => setHeight(e.target.value)}
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
                value={startTime.hr}
                onChange={(e) =>
                  setStartTime({ ...startTime, hr: parseInt(e.target.value) })
                }
                className="w-full mt-1 p-2 h-8 bg-gray-100 border border-gray-100 rounded-md"
              />
              <input
                type="number"
                placeholder="mm"
                value={startTime.min}
                onChange={(e) =>
                  setStartTime({ ...startTime, min: parseInt(e.target.value) })
                }
                className="w-full mt-1 p-2 h-8 bg-gray-100 border border-gray-100 rounded-md"
              />
              <input
                type="number"
                placeholder="ss"
                value={startTime.sec}
                onChange={(e) =>
                  setStartTime({ ...startTime, sec: parseInt(e.target.value) })
                }
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
                value={endTime.hr}
                onChange={(e) =>
                  setEndTime({ ...endTime, hr: parseInt(e.target.value) })
                }
                className="w-full mt-1 p-2 h-8 bg-gray-100 border border-gray-100 rounded-md"
              />
              <input
                type="number"
                placeholder="mm"
                value={endTime.min}
                onChange={(e) =>
                  setEndTime({ ...endTime, min: parseInt(e.target.value) })
                }
                className="w-full mt-1 p-2 h-8 bg-gray-100 border border-gray-100 rounded-md"
              />
              <input
                type="number"
                placeholder="ss"
                value={endTime.sec}
                onChange={(e) =>
                  setEndTime({ ...endTime, sec: parseInt(e.target.value) })
                }
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
              onClick={() => toggleSwitch(setLoop)}
              className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                loop ? "bg-green-400" : "bg-red-600"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  loop ? "translate-x-6" : ""
                }`}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Autoplay Video
            </label>

            <div
              onClick={() => toggleSwitch(setAutoplay)}
              className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                autoplay ? "bg-green-400" : "bg-red-600"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  autoplay ? "translate-x-6" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Alignment Buttons */}
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700">
              Align:
            </label>
            <div className="flex space-x-2 mt-1">
              <button
                className={`p-2 rounded-md ${
                  alignItm === "left" ? "bg-red-600 text-white" : "bg-gray-200"
                }`}
                onClick={() => setAlignItm("left")}
              >
                <FaAlignLeft />
              </button>
              <button
                className={`p-2 rounded-md ${
                  alignItm === "center"
                    ? "bg-red-600 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setAlignItm("center")}
              >
                <FaAlignCenter />
              </button>
              <button
                className={`p-2 rounded-md ${
                  alignItm === "right" ? "bg-red-600 text-white" : "bg-gray-200"
                }`}
                onClick={() => setAlignItm("right")}
              >
                <FaAlignRight />
              </button>
            </div>
          </div>

          {/* Progress Bar Color Selector */}
          <div className="flex justify-between items-center">
            <label className="w-full text-sm font-medium text-gray-700">
              Progress Bar Color:
            </label>
            <select
              className="w-full mt-1 p-2 text-sm border border-gray-300 rounded-md"
              value={progressColor}
              onChange={(e) => setProgressColor(e.target.value)}
            >
              <option value="red" className="bg-red-400 text-white">
                Red
              </option>
              <option value="blue" className="bg-blue-300 text-white">
                Blue
              </option>
              <option value="green" className="bg-green-400 text-white">
                Green
              </option>
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
                onClick={() => setShowCaption(!showCaption)}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  showCaption ? "bg-green-400" : "bg-red-600"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    showCaption ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Hide Controls:
              </label>
              <div
                onClick={() => setHideControls(!hideControls)}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  hideControls ? "bg-green-400" : "bg-red-600"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    hideControls ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Enhanced Security:
              </label>
              <div
                onClick={() => setEnhancedSecurity(!enhancedSecurity)}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  enhancedSecurity ? "bg-green-400" : "bg-red-600"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    enhancedSecurity ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Enhanced Privacy:
              </label>
              <div
                onClick={() => setEnhancedPrivacy(!enhancedPrivacy)}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  enhancedPrivacy ? "bg-green-400" : "bg-red-600"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    enhancedPrivacy ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Mute Video:
              </label>
              <div
                onClick={() => setMuteVideo(!muteVideo)}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  muteVideo ? "bg-green-400" : "bg-red-600"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    muteVideo ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Allow Fullscreen:
              </label>
              <div
                onClick={() => setAllowFullscreen(!allowFullscreen)}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  allowFullscreen ? "bg-green-400" : "bg-red-600"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    allowFullscreen ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Hide YouTube Logo:
              </label>
              <div
                onClick={() => setHideYouTubeLogo(!hideYouTubeLogo)}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  hideYouTubeLogo ? "bg-green-400" : "bg-red-600"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    hideYouTubeLogo ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Show Related Video:
              </label>
              <div
                onClick={() => setShowRelatedVideo(!showRelatedVideo)}
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                  showRelatedVideo ? "bg-green-400" : "bg-red-600"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    showRelatedVideo ? "translate-x-6" : ""
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
          <button
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
            onClick={generateEmbedCode}
          >
            Generate
          </button>
        </div>
        {embedCode && (
          // <div className="mt-4">
          //   <h3 className="text-lg font-bold">Generated Embed Code:</h3>
          //   <textarea
          //     className="w-full p-2 border border-gray-300 rounded-md"
          //     value={embedCode}
          //     readOnly
          //   />
          // </div>
          <div>
            <div className="my-6">
              <label className="block text-sm font-medium text-gray-700">
                Embed Code:
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                readOnly
                value={embedCode}
              />
              <button
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md"
                onClick={copyToClipboard}
              >
                {copySuccess ? "Copied!" : "Copy to Clipboard"}
              </button>
            </div>

            {/* Preview */}
            <div className="mt-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Video Preview:
              </label>
              <iframe
                width={width}
                height={height}
                src={`https://www.youtube.com/embed/${url.split("v=")[1]}`}
                allowTransparency="true"
                frameBorder="0"
                allowFullScreen
                className="rounded-md shadow-md"
              ></iframe>
            </div>
          </div>
        )}

        <div className="flex space-x-3 justify-center items-center mt-2">
          <h2>Share</h2>
          <FaFacebook />
          <BsTwitterX />
          <FaLinkedinIn />
        </div>
      </div>
      <EmbedCodeText />
    </>
  );
};

export default EmbedCodeGen;
