import React, { useState } from "react";

const CommentPicker = () => {
  const [includeReplies, setIncludeReplies] = useState(false);
  const [filterDuplicates, setFilterDuplicates] = useState(false);
  const [filterText, setFilterText] = useState(false);
  const [multipleWinners, setMultipleWinners] = useState(false);
  const [numOfWinners, setNumOfWinners] = useState(1);
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div>
        <h2 className="text-center mt-16 font-bold text-4xl text-cyan-800">
          YouTube Comment Picker
        </h2>
      </div>
      {/* comment picker start */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className="mb-4">
          <label
            className="block text-gray-500 text-sm font-bold mb-2"
            htmlFor="youtube-url"
          >
            YouTube Video URL:
          </label>
          <input
            id="youtube-url"
            type="text"
            placeholder="Example : https://youtu.be/eUDEdKzw0Lg"
            className="w-full px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-500">
              YouTube Comment Options:
            </h3>
            <div className="mb-2 mt-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-500">
                  Include replies to comments
                </label>

                <div
                  onClick={toggleSwitch}
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    isToggled ? "bg-green-400" : "bg-red-600"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      isToggled ? "translate-x-6" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-500">
                  Filter duplicate users/names
                </label>

                <div
                  onClick={toggleSwitch}
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    isToggled ? "bg-green-400" : "bg-red-600"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      isToggled ? "translate-x-6" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-500">
                  Filter comments on specific text
                </label>

                <div
                  onClick={toggleSwitch}
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    isToggled ? "bg-green-400" : "bg-red-600"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      isToggled ? "translate-x-6" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* YouTube Raffle Options */}
          <div className="space-x-3">
            <h3 className="text-lg font-semibold mb-2 text-gray-500">
              YouTube Raffle Options:
            </h3>
            <div className="mb-2 mt-4">
              <label className="flex justify-between items-center">
                <span className="text-gray-500 w-full">No. of winners:</span>
                <input
                  type="number"
                  min="1"
                  value={numOfWinners}
                  onChange={(e) => setNumOfWinners(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 text-gray-500"
                />
              </label>
            </div>
            <div className="mb-4 mt-6">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-500">
                  Filter comments on specific text
                </label>

                <div
                  onClick={toggleSwitch}
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    isToggled ? "bg-green-400" : "bg-red-600"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      isToggled ? "translate-x-6" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pick a Winner Button */}
        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition">
            Pick a Winner
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-reddit"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-digg"></i>
          </a>
        </div>
      </div>
      {/* comment picker end */}
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-lg font-bold text-cyan-800">
          What is YouTube Random Comment Picker?
        </h2>
        <p className="text-justify text-sm text-gray-400">
          <span className="font-bold">YouTube Comment Picker</span> is a free
          and useful online tool for picking a winner for any giveaways, events,
          promotions, contests, lotteries, and any function based on comments.
          There are several{" "}
          <span className="font-bold">YouTube Random Comment Pickers</span>{" "}
          available, keywordsforyou is one of them. For use, enter the YouTube
          video URL, and press the get comments option. The tool retrieves all
          the comments from the YouTube API. The tool filters duplicate names,
          comments, and comment replies. Once the{" "}
          <span className="font-bold">YouTube Comment Picker</span>
          retrieves all YouTube comments, it will select one lucky winner
          randomly from the retrieved comments. With keywordsforyou comment
          Picker, you don't need to choose any winner randomly; the tool selects
          and picks a random winner, which makes your work smooth. Use of
          YouTube random comment picker tool constitutes acceptance of the
          YouTube Terms of Service.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-lg font-bold text-cyan-800">
          How Does YouTube Comment Picker Tool Work?
        </h2>
        <p className="text-justify text-sm text-gray-400">
          Our tool, YouTube Comment Picker, is very easy to use and
          user-friendly. <br />
          <br />
          <span className="font-bold">Follow the given steps below:</span>
          <br />
          <br />
          <span className="font-bold">Step 1:</span> Enter any YouTube video
          URL, including the video id.For instance,
          https://www.youtube.com/watch?v=wrEBkkM5Bzw or
          https://youtu.be/wrEBkkM5Bzw. <br />
          <br />
          <span className="font-bold">Step 2:</span> The tool filters duplicate
          names and comments and negates them during the comment selection
          process. It also considers reply comments in a comment-picking
          process. You can use all these options in the YTube’s YouTube random
          comment picker tool according to your needs. Select the number of
          winners from the given filter according to your contest or giveaway
          strategies. You choose from 1 to 10 winners as per your requirements.
          <br />
          <br />
          <span className="font-bold">Step 3:</span> Once you press the “Pick A
          Winner” option, the tool fetches all the comments and picks a winner.
          <br />
          <br />
          <span className="font-bold">Step 4:</span> The result of your YouTube
          comment picker draw or any kind of giveaway will be displayed on the
          screen so you can share it on social media. Additionally, your
          followers can verify the giveaway's authenticity. <br />
          <br />
          With the YouTube random comment picker tool, you don't have to fill in
          all the names to pick a winner.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-lg font-bold text-cyan-800">
          Where Can You Use YouTube Random Comment Picker?
        </h2>
        <p className="text-justify text-sm text-gray-400">
          Here are a few ways where you can use YouTube Random Comment Picker.
        </p>
        <ul className="mx-4 mt-2 list-disc">
          <li className="text-gray-400 text-sm text-justify">
            Choosing one comment among thousands consumes lots of time. You can
            use YTube’s YouTube Random Comment Picker Tool to choose one random
            comment and save your time.
          </li>
          <li className="text-gray-400 text-sm text-justify mt-2">
            This tool makes your giveaways or any other event easy, and you can
            choose one random winner who comments on your videos.
          </li>
          <li className="text-gray-400 text-sm text-justify mt-2">
            Where we want to Pick a random winner who gives the correct answer
            as a result of a contest organised in the comments section.
          </li>
        </ul>
      </div>
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-lg font-bold text-cyan-800">
          What Are The Advantages Of Doing A Giveaway On YouTube?
        </h2>
        <p className="text-justify text-sm text-gray-400">
          The more comments your video gets, the more popular your YouTube
          channel will become. Drawing on YouTube is a great way to get more
          subscribers to your videos. As a result, you will build a community
          that is active and loyal to your channel.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-lg font-bold text-cyan-800">
          Why Should You Use The YouTube Comment Picker?
        </h2>
        <p className="text-justify text-sm text-gray-400">
          Because YouTube Random comment picker is an easy way to pick a winner,
          or we can say, it's a giveaway winner generator tool to pick a
          giveaway winner from YouTube video comments. You can use it to pick a
          winner for your YouTube giveaways, promotions, sweepstakes, or
          contests.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-lg font-bold text-cyan-800">
          How Do You Pick A Winner For A Giveaway?
        </h2>
        <p className="text-justify text-sm text-gray-400">
          Whenever you upload a video URL to YouTube random comment picker,we
          receive all comments. Once all comments are loaded, we filter them
          based on your selected options. For example, we filter duplicate users
          or exclude some comments. The winners will be determined when all
          comments have been checked, and the raffle has been started. We use
          the JS' Maths. random function to select a random winner. As a result,
          the Ytubetool is 100% reliable and cannot be manipulated.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-lg font-bold text-cyan-800">
          What is The Price Of YTube Comment Picker?
        </h2>
        <p className="text-justify text-sm text-gray-400">
          You cannot use the{" "}
          <span className="font-bold">YouTube Random Picker</span> Tool more
          than twice daily after and before logging in. Free use every day for
          two times. Subscribe to YTube if you want more consumption.
        </p>
      </div>
    </>
  );
};

export default CommentPicker;
