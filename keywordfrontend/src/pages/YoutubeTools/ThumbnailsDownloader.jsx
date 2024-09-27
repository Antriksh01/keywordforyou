import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const ThumbnailsDownloader = () => {
  return (
    <>
      <div>
        <h2 className="text-4xl mt-12 font-bold text-center text-cyan-800">
          YouTube Thumbnails Generator
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg mb-6 shadow-xl shadow-red-300/50 max-w-4xl mx-auto">
          <div className="w-auto flex space-x-2 max-w-auto">
            <input
              type="text"
              placeholder="Example : https://youtu.be/eUDEdKzw0Lg"
              className="w-screen p-3 h-10 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="bg-red-600 text-white rounded p-2 h-10 font-bold">
              Extract
            </button>
          </div>

          <div className="flex justify-center space-x-4 mt-2">
            <button className="text-cyan-800">Share :</button>
            <ul className="flex space-x-2 items-center text-cyan-800">
              <li>
                <IoLogoWhatsapp className="text-2xl" />
              </li>
              <li>
                <FaTelegram className="text-2xl" />
              </li>
              <li>
                <FaFacebook className="text-2xl" />
              </li>
              <li>
                <BsTwitterX className="text-2xl" />
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800">
            Thumbnail Generator For YouTube
          </h2>
          <p className="text-justify text-sm text-gray-400">
            Keywordsforyou is an online YouTube thumbnail downloader where you
            can download existing YouTube video thumbnails with different sizes
            and better quality. This quick and accurate thumbnail downloader
            helps you to grab YouTube thumbnails and save the thumbnails on your
            computer.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800">
            What Are YouTube Video Thumbnails?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            Thumbnails are clickable and visual icons that present the video
            content on YouTube. YouTube thumbnails are the images that operate
            as preview images for your videos. It's like your video's cover page
            that reveals what's good in your video content.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800">
            Why Are Thumbnails Important?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            As per the YouTube data, 90% of YouTube videos use custom
            thumbnails. A superb video thumbnail can make all the difference in
            getting a viewer to click on your video. It's necessary to make your
            video more professional, and a thumbnail is a super-easy way to make
            your video professional. A good thumbnail gives you the desire to
            watch the video. Thumbnails invite more users, and it's a reason why
            YouTube thumbnails are a crucial part of your YouTube channel. For
            YouTube, thumbnails come on priority. By default, if you forgot to
            put your thumbnail for your videos, YouTube will pick automatically
            from various still shots from your video.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800">
            The Advantages Of Our YouTube Thumbnail Downloader Tool:
          </h2>
          <p className="text-justify text-sm text-gray-400 mt-2">
            The YouTube thumbnail download feature does not exist, and you must
            use other apps to download the thumbnails. Our tool has several
            advantages over other programs and is entirely free and safe.
          </p>
          <ul className="mx-5 list-disc mt-4">
            <li className="text-gray-400 text-sm mt-2 text-justify">
              Download any video thumbnail easily.
            </li>
            <li className="text-gray-400 text-sm mt-2 text-justify">
              There is no YouTube account or channel needed to use the tool.
            </li>
            <li className="text-gray-400 text-sm mt-2 text-justify">
              Our tool is free and limitless.
            </li>
            <li className="text-gray-400 text-sm mt-2 text-justify">
              User-friendly experience.
            </li>
            <li className="text-gray-400 text-sm mt-2 text-justify">
              You can download a Full HD quality thumbnail.
            </li>
            <li className="text-gray-400 text-sm mt-2 text-justify">
              No required to sign up.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800">
            How To Use The YouTube Thumbnail Downloader?
          </h2>
          <p className="text-justify text-sm text-gray-400 mt-3">
            You can use our YTube thumbnail downloader tool to save a YouTube
            thumbnail to your device very easily and safely. All you have to do
            is follow a few simple steps.
          </p>
          <ul className="list-none mt-4">
            <li className="text-gray-400 text-sm mt-2 text-justify">
              <span className="font-bold">Step #1:</span> Open YouTube Thumbnail
              Downloader
            </li>
            <li className="text-gray-400 text-sm mt-2 text-justify">
              <span className="font-bold">Step #2:</span> Select any video link
              and paste it into the text box
            </li>
            <li className="text-gray-400 text-sm mt-2 text-justify">
              <span className="font-bold">Step #3:</span> Click the find button
              and get the result
            </li>
            <li className="text-gray-400 text-sm mt-2 text-justify">
              <span className="font-bold">Step #4:</span> Download the thumbnail
              according to your requirements.
            </li>
          </ul>
          <p className="text-justify text-sm text-gray-400 mt-3">
            You can also check our YouTube tags generator tool and the YouTube
            channel audit tool if you're satisfied with our agency.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6 mb-4">
          <h2 className="text-lg font-bold text-cyan-800">
            How Many Thumbnails Does A YouTube Video Have?
          </h2>
          <p className="text-justify text-sm text-gray-400 mt-3">
            YouTube automatically thumbnails your videos when you upload them.
            That's a very easy option, but creating custom thumbnails will
            always look better. Ideally, your video thumbnail should have a
            width of 640 pixels and a height of 1280 pixels. Before you get
            started, it's helpful to know the recommended YouTube thumbnail
            size. Google recommends 1280 pixels wide by 720 pixels tall.
          </p>
        </div>
      </div>
    </>
  );
};

export default ThumbnailsDownloader;
