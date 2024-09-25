import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const ChannelAudit = () => {
  return (
    <>
      <div>
        <h2 className="text-4xl mt-12 mb-3 font-bold text-center text-cyan-800">
          YouTube Channel Audit
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg mb-6 shadow-xl shadow-red-300/50 max-w-4xl mx-auto">
          <div className="w-auto flex space-x-2 max-w-auto">
            <input
              type="text"
              placeholder="Example : https://www.youtube.com/channel/UCNApqoVYJbYSrni4YsbXzyQ"
              className="w-screen p-3 h-10 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="bg-red-600 text-white rounded p-2 h-10">
              Audit
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
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            What is a YouTube Channel Audit?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            If you have a YouTube channel and want to audit or see how it`s
            doing and what problems it`s facing, you have come to the right
            place. Our audit tool is free and lets you know the performance of
            your YouTube channel. An audit of your YouTube channel and videos is
            designed to give you an objective, in-depth view of how well it`s
            performing. This is a great place to start for people who are just
            beginning to utilize YouTube. With an audit on YouTube, you can
            identify any issues and focus on fixing them while benchmarking your
            performance. You can use a baseline to determine average views per
            video, engagement rates, view lengths, and other essential metrics.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            Key Features & Benefits
          </h2>
          <p className="text-justify text-sm text-gray-400">
            The YouTube Audit tool is an accurate way to manage and optimize
            your channel through a comprehensive dashboard. <br />
            <br />
            Our YouTube Audit tool can accurately measure key performance
            indicators (including Videos, Playlists, Subscribers, Likes,
            Dislikes, Comments, Country, Title & Description Performance, List
            of channels that owners own, and performance levels.
            <br />
            <br /> Our audit tool works according to YouTube`s terms and
            policies.
            <br />
            <br /> Compile a list of key terms currently associated with a
            video.
            <br />
            <br /> Compile and check all critical terms associated with videos
            as per the Google terms. <br />
            <br />
            YouTube channel audit is free and easy to manage. <br />
            <br />
            Consistent and accurate audit results.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            What Does the YouTube Audit Tool Check?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            This YouTube channel Audit Tool fulfills the ensuing checks:
          </p>
          <h2 className="text-md font-bold text-cyan-800 mt-2">
            Channel Checks
          </h2>
          <ul className="mx-3 mt-2 list-disc">
            <li className="text-gray-400 text-sm mt-2">Title</li>
            <li className="text-gray-400 text-sm mt-2">Description</li>
            <li className="text-gray-400 text-sm mt-2">Keyword</li>
            <li className="text-gray-400 text-sm mt-2">Country</li>
            <li className="text-gray-400 text-sm mt-2">Logo</li>
            <li className="text-gray-400 text-sm mt-2">Banner</li>
          </ul>
          <h2 className="text-md font-bold text-cyan-800 mt-2">
            Channel Content
          </h2>
          <ul className="mx-3 mt-2 list-disc">
            <li className="text-gray-400 text-sm mt-2">Videos</li>
            <li className="text-gray-400 text-sm mt-2">Posting Frequency</li>
            <li className="text-gray-400 text-sm mt-2">Playlist</li>
            <li className="text-gray-400 text-sm mt-2">List of errors</li>
          </ul>
          <h2 className="text-md font-bold text-cyan-800 mt-2">Engagement</h2>
          <ul className="mx-3 mt-2 list-disc">
            <li className="text-gray-400 text-sm mt-2">Subscribers</li>
            <li className="text-gray-400 text-sm mt-2">Video Likes</li>
            <li className="text-gray-400 text-sm mt-2">Video Views</li>
            <li className="text-gray-400 text-sm mt-2">Comments</li>
            <li className="text-gray-400 text-sm mt-2">List of top videos</li>
            <li className="text-gray-400 text-sm mt-2">
              List of the additional channels of the current channel owner
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-6 mb-4">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            How to Use YouTube Audit Tool?
          </h2>
          <h2 className="text-justify text-md text-cyan-800 font-bold">
            Enter the Details:-
          </h2>
          <ul className="list-disc mx-3 mt-2">
            <li className="text-gray-400 text-sm">
              Copy your YouTube channel URL and paste it in the given input box
              and click the audit button.
            </li>
            <li className="text-gray-400 text-sm">
              Get a comprehensive report about the channel, including the title,
              videos, posts, playlists, description, views, comments, list of
              errors, and many more.
            </li>
          </ul>
          <h2 className="text-justify text-md text-cyan-800 font-bold">
            Conclusion:
          </h2>
          <p className="text-justify text-gray-400 text-sm mt-2">
            If you audit YouTube channel metrics regularly, you`re likely to
            discover some trends and metrics that can immediately help you
            improve performance. Other metrics and trends may take some thought
            to interpret. And sometimes you may find things you weren`t
            expecting. You never know until you look. To get your Channel ID,
            simply follow the given steps. Here are the steps:
          </p>
          <ul className="mt-2 list-disc mx-3">
            <li className="text-gray-400 text-sm mt-2">
              Open YouTube > Go to your Profile.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              Select “Your Channel” > “Customise channel” > “Basic info”.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              Copy the Channel URL.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              Add this “Channel URL” to our tool, and you'll get the answer.
            </li>
          </ul>
          <p className="text-justify text-gray-400 text-sm mt-2">
            However, if you're having problems with it, then contact us.
          </p>
        </div>
      </div>
    </>
  );
};

export default ChannelAudit;
