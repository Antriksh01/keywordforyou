import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const TrendingVideos = () => {
  return (
    <>
      <div>
        <h2 className="text-4xl mt-12 mb-3 font-bold text-center text-cyan-800">
          YouTube Trending Videos
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg mb-6 shadow-xl shadow-red-300/50 max-w-4xl mx-auto">
          <div className="w-auto flex space-x-2 max-w-auto">
            <select
              name=""
              id=""
              className="w-screen p-1 h-10 border rounded mb-4 focus:outline-none focus:ring-2"
            >
              <option value="">All</option>
            </select>
            <select
              name=""
              id=""
              className="w-screen p-1 h-10 border rounded mb-4 focus:outline-none focus:ring-2"
            >
              <option value="">All</option>
            </select>
            <button className="w-full font-bold bg-red-600 text-white rounded p-1 h-10">
              Get Your Trends
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
            Trending YouTube Videos
          </h2>
          <p className="text-justify text-sm text-gray-400">
            YouTube has become one of the most popular platforms for people to
            upload and share their videos with the rest of the world in recent
            years. With millions of videos uploaded every day, viewers may find
            it difficult to keep up with what's popular and trending on YouTube.
            YouTube offers a trending feature to its users, although it has a
            restricted number of categories, and you can only view videos that
            are currently trending within your country. However, our YouTube
            Trending video tool allows you to discover global trends. You have
            the freedom to select any country from a dropdown list to see the
            trending videos in that particular region.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            How Does the YouTube Trending Videos Tool Work?
          </h2>

          <p className="text-justify text-sm text-gray-400 mt-2">
            The steps for using this tool are as follows: <br />
            <br />
            <span className="font-bold">Step 1:</span> Go to Tools and Open
            YouTube Trending Videos Tool.
            <br />
            <br />
            <span className="font-bold">Step 2:</span> Choose your preferred
            Country & Category from the drop-down list.
            <br />
            <br />
            <span className="font-bold">Step 3:</span> Browse Through the
            Trending Videos.
            <br />
            <br />
            <span className="font-bold">Step 4:</span> Have fun and Interact
            with the Trending Videos.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            What Are the Benefits of Using YouTube Trending Videos Tool?
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Here are some benefits of using the YouTube Trending Videos tool,
          </p>

          <ul className="mx-3 mt-2 list-disc">
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Keep up to date:</span> The Trending
              Videos tool keeps you up to date on the most trending YouTube
              videos.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Discover new content:</span> You can
              find new videos, channels, and creators that you might not have
              discovered otherwise.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">
                Look at what's trending in your country or category:
              </span>{" "}
              You can see the trending YouTube videos that are relevant to your
              interests by selecting your country and category.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Interact with popular creators:</span>{" "}
              The most popular videos often come from the platform's most
              popular creators, and you can interact with these creators by
              leaving comments and subscribing to their channels using the
              Trending Videos tool.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Explore various categories:</span> The
              Trending Videos tool covers a wide range of categories, from music
              and gaming to news and politics, allowing you to delve into a
              variety of topics.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Get encouraged:</span> Seeing what's
              trending can inspire you to make your own videos or to experiment
              with new content creation techniques.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Save time:</span> Instead of spending
              time searching for videos to watch, the Trending Videos tool
              provides a curated list of the most popular videos, saving you
              time and effort.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-6 mb-4">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            Why Should You Use Trending Topics for Content Ideas?
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Here are some reasons why you should use trending topics for content
            ideas,
          </p>

          <ul className="list-disc mx-3 mt-2">
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Get new content ideas:</span> By using
              popular YouTube topics as inspiration for your own videos, you can
              generate new content ideas that are likely to be popular and
              relevant to your audience.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Keep up with current events:</span>{" "}
              Because trending topics on YouTube frequently reflect current
              events and news stories, you can use them as inspiration to keep
              your content current and relevant.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Stand out from the crowd:</span> While
              many creators may be making videos on popular topics, you can set
              yourself apart by putting your own spin on it or approaching it
              from a different perspective.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">Gain visibility:</span> Because
              YouTube's Trending page is a highly visible spot on the platform,
              creating videos on trending topics has the potential to increase
              your channel's visibility and exposure.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold">
                Discover new niches or areas of interest:
              </span>{" "}
              Trending topics can help you discover new niches or interest areas
              that you may not have considered previously, opening up new
              opportunities for content creation and growth on YouTube.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-6 mb-4">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            How to Find Trending Topics for YouTube Videos?
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Finding trending topics is a great place to start if you're looking
            for ideas for your next YouTube video. Here are some strategies for
            tracking down trending topics for YouTube videos:
          </p>
          <h3 className="text-md text-gray-400 font-bold mt-2">
            Use Our <span className="font-bold">YouTube Trending Videos</span>{" "}
            Tool:
          </h3>
          <p className="text-gray-400 text-sm text-justify mt-2">
            Using our website is a quick and easy way to find trending topics
            for your next Video. This section of the website showcases a diverse
            collection of videos that are currently trending in your area,
            ranked by their overall popularity.
            <br />
            <br />
            <span className="font-bold">YouTube Tag Generator</span> is another
            tool to generate YouTube tags for your videos.
          </p>
          <h3 className="text-md text-gray-400 font-bold mt-2">
            Google Trends:
          </h3>
          <p className="text-gray-400 text-sm text-justify mt-2">
            Google Trends is a free tool that displays the historical popularity
            of search queries. It can help you find trending topics in your
            industry or niche and create videos about them. You can reap
            numerous benefits from using Google Trends.
          </p>
          <ul className="list-disc mt-2 mx-2">
            <li className="text-gray-400 mt-2 text-sm">
              Aids in understanding the audience's interests.
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              Trends are discovered and capitalised on.
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              encourages competitive analysis.
            </li>
            <li className="text-gray-400 mt-2 text-sm">
              Helps in the identification of regional interests.
            </li>
          </ul>
          <h3 className="text-md text-gray-400 font-bold mt-2">
            Google Keyword Planner:
          </h3>
          <p className="text-gray-400 text-sm text-justify mt-2">
            Google Keyword Planner is a free tool that helps you find popular
            keywords and topics on Google. YouTubers can use this tool to find
            popular search queries related to their video topic, which can help
            them create content around those trending keywords. As a result,
            their YouTube videos may receive more views and engagement. The tool
            also provides data on the average monthly search volume for specific
            keywords, which can assist YouTubers in creating content around
            popular topics.
          </p>
          <h3 className="text-md text-gray-400 font-bold mt-2">
            Find Hot Topics on TikTok:
          </h3>
          <p className="text-gray-400 text-sm text-justify mt-2">
            TikTok is an incredible guide for discovering trending topics and
            discovering what people are interested in. You can find popular
            hashtags and challenges using the app's search function and use them
            as inspiration for your own videos.
          </p>
          <h3 className="text-md text-gray-400 font-bold mt-2">
            Discover Trends on Twitter:
          </h3>
          <p className="text-gray-400 text-sm text-justify mt-2">
            Another platform where you can find trending topics and see what
            people are talking about is Twitter. You can find popular topics and
            create videos around them by using the platform's search function
            and hashtags.
          </p>
          <h3 className="text-md text-gray-400 font-bold mt-2">
            Be Inspired By Your Competitors:
          </h3>
          <p className="text-gray-400 text-sm text-justify mt-2">
            Look at what your competitors are doing and see what's working for
            them. You can get inspiration from their videos and put your own
            unique spin on the topic to stand out. Whatever method you use,
            remember to stay relevant to your niche and audience at all times.
            To increase your chances of appearing in YouTube trending videos,
            YouTube trending today, and YouTube trending worldwide now, use
            popular keywords and hashtags ( YouTube Hashtag Generator can help
            you get popular hashtags for your videos. ) related to your niche.
            You'll be able to find trending topics and create videos that engage
            and resonate with your audience if you follow these tips.
          </p>
        </div>
      </div>
    </>
  );
};

export default TrendingVideos;
