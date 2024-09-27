import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const ChannelSearchTool = () => {
  return (
    <>
      <div>
        <h2 className="text-4xl mt-12 mb-3 font-bold text-center text-cyan-800">
          YouTube Channel Search Tool
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg mb-6 shadow-xl shadow-red-300/50 max-w-4xl mx-auto">
          <div className="w-auto flex space-x-2 max-w-auto">
            <input
              type="text"
              className="w-full p-1 h-10 border rounded mb-4 focus:outline-none focus:ring-2"
              placeholder="Channel name"
            />
            <select
              name=""
              id=""
              className="w-screen p-1 h-10 border text-gray-400 rounded mb-4 focus:outline-none focus:ring-2"
            >
              <option value="" className="text-gray-400">
                All
              </option>
            </select>
            <select
              name=""
              id=""
              className="w-screen p-1 text-gray-400 h-10 border rounded mb-4 focus:outline-none focus:ring-2"
            >
              <option value="">All</option>
            </select>
            <input
              type="number"
              className="w-full p-2 h-10 border rounded mb-4 focus:outline-none focus:ring-2"
              placeholder="10"
            />
            <button className="w-full font-bold bg-red-600 text-white rounded p-1 h-10">
              Search
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
            About Our YouTube Channel Finder
          </h2>
          <p className="text-justify text-sm text-gray-400">
            Hello Users! Welcome to our revolutionary YouTube Channel Finder
            tool, where discovering your next favorite content has become
            easier. No matter what! Whether you are a casual viewer or a
            dedicated enthusiast, we present a meticulously designed tool to
            match your interests with your perfect YouTube channel tailored just
            for you. What's amazing is our YouTube Channel Search ensures that
            our users always have captivating content to explore. Our vast
            database channels span many genres, such as gaming, beauty, cooking,
            education, entertainment and many more. It's the perfect time to say
            goodbye to endless scrolling and let our smart algorithms serve your
            plates.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            How Does Our YouTube Channel Search Tool Work?
          </h2>

          <p className="text-justify text-sm text-gray-400 mt-2">
            YouTube Channel Searcher is here to help users quickly come across
            YouTube channels based on specific criteria. It's just that the user
            needs to enter a channel name, select a country, apply filters, and
            specify the desired number of results. The tool employs YouTube's
            extensive database to ferret out channels that match the provided
            information. The most comforting prospect is that its advanced
            filtering option allows users to search on specific criteria such as
            channel, category, view count, rating, title, date, video count,
            etc. You will want to explore the unexplored more.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            How to Use YouTube Channel Finder?
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            You can effortlessly search YouTube channels through this tool, see
            how it serves you,
          </p>

          <ul className="mx-3 mt-2 list-disc">
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Step: 1</span> - Click here to visit
              our tool.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Step: 2</span> - Once you reach the
              tool's interface, you will find a search bar; enter the channel
              name you are interested in exploring.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Step: 3</span> - Select the country
              you want to focus on or live in from the list.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Step: 4</span> - Apply filters that
              include category, video count, view count, date, title, rating, or
              relevance.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Step: 5</span> - Enter the number of
              results you want to explore simultaneously.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Step: 6</span> - Lastly, click
              “Search” to generate the results.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-6 mb-4">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            Benefits of YouTube Channel Finder Tool.
          </h2>
          <p className="text-sm text-gray-400 mt-2 text-justify">
            Know what the benefits are that our YouTube channel finder tool
            offers, It is a time-saving tool that provides a quick and efficient
            way to discover relevant channels. This will rule out the need for
            extensive research and browsing time. This tool offers various
            filters to choose from that match your criteria so that you will get
            targeted results. You will not only get the target result but also
            detailed information about each channel. It will help you assess the
            popularity and content of a channel before deciding to explore it
            further. This tool will help you bump into new content creators,
            genres and diverse channels that you may have yet to come across
            otherwise. It is an easy-to-use tool due to its user-friendly
            interface that will give you a seamless experience when you find a
            YouTube channel.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6 mb-4">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            YouTube Channel Search Tool: Why Do You Need It?
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            You need a YouTube channel crawler, the reason being,
          </p>

          <ul className="list-disc mt-2 mx-4">
            <li className="text-gray-400 mt-2 text-sm">
              To save your time by quickly discovering YouTube channels without
              manual scrolling.
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              To find YouTube channels based on particular criteria such as
              channel name, country and filters.
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              Discover a plethora of new channels that match your preferences
              and interests.
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              To easily access the popularity and content of a channel through
              elaborated information provided.
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              To explore more new and diverse youtubers, genres, and
              perspectives.
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              To stay updated with the latest trends and popular channels in
              specific countries and categories.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-6 mb-4">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            Smart Tips While Creating a YouTube Channel.
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            If you want to create a buzz for your YouTube Channel among social
            media, follow the below tips,
          </p>

          <ul className="list-disc mt-2 mx-4">
            <li className="text-gray-400 mt-2 text-sm">
              Determine the target audience you want to create content for.
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              Develop a unique and compelling channel name and logo for brand
              identity
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              High-quality videos work best, along with good production value
              and engaging storytelling, to grab the audience's attention
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              Use relevant keywords, tags, titles, and descriptions to stand
              tall in the searches
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              Keeping your audience engaged requires consistency, so be active
              and publish content regularly
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              Promotion is key to attracting an audience; try to promote your
              channel through collaborations, cross-promotions with other
              content creators, or social media.
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              Connect- Interact- Communicate- Engage with your audience in
              communicating discussions.
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              Keep watching and analyzing your performance on YouTube platforms
              so that you can improve accordingly.
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              Also, avoid turning a blind eye to algorithm changes to grow your
              channel; stay updated.
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              Experiment and innovate with different video formats, styles, and
              content to keep your channel fresh and exciting
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ChannelSearchTool;
