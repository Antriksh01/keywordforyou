import axios from "axios";
import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const VideoSplitter = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState();
  const [showResult, setShowResult] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState("");

  const handleGenerate = async () => {
    try {
      const { data } = await axios.post(
        `https://social-download-all-in-one.p.rapidapi.com/v1/social/autolink`,
        { url: inputValue },
        {
          headers: {
            "x-rapidapi-key":
              "450fb1badcmsh09b0e8dd6502861p189847jsne572f5a074ed",
            "x-rapidapi-host": "social-download-all-in-one.p.rapidapi.com",
            "Content-Type": "application/json",
          },
        }
      );

      setResult(data);
      console.log(data);
      setShowResult(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownload = () => {
    if (!selectedQuality) {
      alert("Please select a video quality to download.");
      return;
    }

    const media = result.medias.find(
      (item) => item.quality === selectedQuality
    );

    if (media) {
      const link = document.createElement("a");
      link.href = media.url;
      link.setAttribute(
        "download",
        `video_${selectedQuality}.${media.extension}`
      );
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Selected quality not available.");
    }
  };

  return (
    <>
      <div>
        <h2 className="text-4xl mt-12 mb-3 font-bold text-center text-cyan-800">
          Video Splitter
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg mb-6 shadow-xl shadow-red-300/50 max-w-4xl mx-auto">
          <div className="w-auto flex space-x-2 max-w-auto">
            <input
              type="text"
              placeholder="Example : https://www.youtube.com/watch?v=9GBydDR4D2k"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-screen p-3 h-10 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button
              className="bg-red-600 text-white rounded p-2 h-10"
              onClick={handleGenerate}
            >
              Generate
            </button>
          </div>
          {showResult && (
            <>
              <div className="flex flex-col items-center justify-center p-4">
                <img
                  src={result.thumbnail}
                  alt={result.title}
                  className="mb-4 w-1/2"
                />
                <h2 className="text-lg font-bold mb-2">{result.title}</h2>
                <p className="text-gray-600 mb-4">Author: {result.author}</p>

                <label htmlFor="quality" className="mb-2 font-medium">
                  Select Video Quality:
                </label>
                <select
                  id="quality"
                  value={selectedQuality}
                  onChange={(e) => setSelectedQuality(e.target.value)}
                  className="mb-4 p-2 border rounded"
                >
                  <option value="">--Select Quality--</option>
                  {result.medias
                    .filter((media) => media.type === "video")
                    .map((media, index) => (
                      <option key={index} value={media.quality}>
                        {media.quality}
                      </option>
                    ))}
                </select>

                <button
                  onClick={handleDownload}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-lg"
                >
                  Download Video
                </button>
              </div>
            </>
          )}
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
            Extract YouTube Title and Description
          </h2>
          <p className="text-justify text-sm text-gray-400">
            YouTube is one of the most popular video-sharing platforms in the
            world, with over 2 billion monthly active users. As a result, it has
            become an important tool for marketers, researchers, and content
            creators where they can share their video content or promote their
            brand or services. However, they are often concerned about the title
            and description, which are the most crucial aspects of any YouTube
            video. A video cannot be published without a title and description.
            On top of it, both elements are essential for SEO and attracting the
            audience. As a result, it becomes pretty challenging. However, one
            of the best ways to do this is using a YouTube title and description
            extractor. A YouTube title and description extractor is a tool that
            automates the process of extracting the title and description of a
            YouTube video.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            What is a YouTube Title & Description?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            YouTube video title is an important part of any YouTube video. The
            title shows what your video is about in short. You cannot publish
            your video without the title and description. It is the centerpiece
            of your YouTube video that works for SEO and helps the audience know
            about the video. You may wonder title is mandatory, but why a
            YouTube video description? So, yes, description is as important as
            the title, as it is a summary of your video involving relevant
            keywords. It shows what it includes so that your audience can decide
            whether it is worth watching the video. If the title and description
            are created in an ideal way, it will get you in the top rank, boost
            SEO, and increase your number of subscribers or views.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            Importance of Title & Description for YouTube.
          </h2>
          <p className="text-justify text-sm text-gray-400">
            There is no stop to the importance of Titles & Descriptions for
            YouTube. Some of them include the following:
          </p>
          <ul className="list-disc mx-4 mt-3">
            <li className="text-gray-400 text-sm mt-2">
              Video Titles and Descriptions have the power to enhance the
              performance of the video if emphasized properly on keywords and
              details of the video.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              It helps to set you in a position to succeed by optimizing your
              rank on the search engine and boosting SEO.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              The video title and description box are one of the places the
              algorithm searches since the algorithm cannot watch your videos.
              The algorithm can promote a video more successfully when it
              understands what it is about.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              It increases the number of subscribers and viewers of your YouTube
              Channel.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              It boosts the watch time of your video by getting you great
              recognition on the search engine.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              It has the power to spike your audience's interest.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            How Does the YouTube Title and Description Extractor Work?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            This extractor is super-easy to operate. In order to use a YouTube
            title and description extractor follow the below steps,
          </p>
          <ul className="list-disc mx-3 mt-2">
            <li className="text-gray-400 text-sm">
              <span className="text-gray-600 font-bold">Step: 1</span> – Click
              Here to use the YouTube title and description extractor.
            </li>
            <li className="text-gray-400 text-sm">
              <span className="text-gray-600 font-bold">Step: 2</span> – Enter
              the YouTube Video URL in the input box.
            </li>
            <li className="text-gray-400 text-sm">
              <span className="text-gray-600 font-bold">Step: 3</span> – Click
              on the “extract” button to extract the video's title and
              description.
            </li>
            <li className="text-gray-400 text-sm">
              <span className="text-gray-600 font-bold">Step: 4</span> – You can
              copy and download (txt file) the result.
            </li>
          </ul>
          <p className="text-cyan-800 font-bold mt-2">NOTE:</p>
          <ul className="mt-2 list-disc mx-3">
            <li className="text-gray-400 text-sm">
              You can add only one URL at a time.
            </li>
            <li className="text-gray-400 text-sm">
              This YouTube title and description extractor will only extract the
              title and description of the video. It'll not show view count,
              number of likes, comments, video uploader, etc.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            What Are the Benefits of Using a YouTube Title and Description
            Extractor?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            There are several reasons why you might want to use a YouTube title
            and description extractor, including:
          </p>
          <ul className="mx-3 list-disc">
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold text-gray-600">Keyword Research:</span>{" "}
              By analyzing the titles and descriptions of popular videos, you
              can identify which keywords and phrases are used most frequently.
              It can be useful for optimizing your own video content for search.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold text-gray-600">
                Understanding Popular Content:
              </span>{" "}
              By analyzing the titles and descriptions of popular videos, you
              can gain a better understanding of the types of content that
              resonate with viewers.
            </li>
            <li className="text-gray-400 text-sm mt-2">
              <span className="font-bold text-gray-600">
                Competitor Research:
              </span>{" "}
              By analyzing the titles and descriptions of videos from your
              competitors, you can gain insight into their strategies and
              identify areas where you can improve your own content.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            Tips to Write Unique YouTube Title & Description.
          </h2>
          <p className="text-justify text-sm text-gray-400">
            By following the below tips, you can create unique and effective
            titles and descriptions for your YouTube videos that will help them
            stand out from the crowd and attract more views. Remember always to
            keep your audience in mind and ensure that the title and description
            accurately reflect the content of your video.
          </p>
          <ul className="mx-3 list-decimal mt-3">
            <li className="text-gray-400 text-sm text-justify mt-2">
              Use keywords relevant to your video's content in the title and
              description. It will help your video appear in search results when
              people are looking for content related to your topic
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Make the title and description engaging and descriptive. Viewers
              should be able to tell what your video is about just by reading
              the title and description. Use descriptive words and phrases to
              grab their attention and make them want to watch your video.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Use numbers, lists, and questions in the title to make it more
              attention-grabbing.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Use the description to provide additional information about the
              video and include calls to action. Let viewers know what they can
              expect from your video and ask them to subscribe to your channel
              or watch more videos.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Use proper formattings, such as bullet points and headings, to
              make the description easy to read. It will make viewers more
              likely to read the entire description and understand what your
              video is about.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Optimize the title and description for search by including
              relevant keywords that viewers might use to find your video. Use
              tools like Google's Keyword Planner to find popular keywords
              related to your topic.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Try to be unique and creative with your title and description.
              Stand out from others in search results by thinking outside the
              box and coming up with a title and description that is unlike any
              other.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            Tips to Improve the Performance of Your YouTube Channel Using Title
            and Description Extractor.
          </h2>
          <p className="text-justify text-sm text-gray-400">
            You can use our tool if you are looking for the best existing
            description and title for your YouTube channel. Here are some tips
            to enhance the performance of your YouTube channel using a title and
            description extractor.
          </p>
          <ul className="mx-3 list-disc mt-3">
            <li className="text-gray-400 text-sm text-justify mt-2">
              Choose the relevant videos for the title and description
              extraction. It means the URLs you use must be related to your
              content.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Choose the URLs of the popular YouTube videos.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Once you get the list of descriptions and titles, choose the most
              appropriate one for your video.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Capitalize the first letter of each word.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Try to Be within the character limit, don't utilize the full limit
              ( Title- 100 characters, use 70), (Description- 5000 characters,
              Use 3500-4000).
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Add numbers to your title.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Add hashtags in your description and title.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Feel free to make the call to action, such as, Stay tuned for
              more, subscribe for more, and follow me on Facebook or Instagram.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Add links of your other related videos in the description.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            How to Edit Your YouTube Video Title & Description in YouTube?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            We are grateful to YouTube as it lets us edit or change the YouTube
            video title and description effortlessly, even if you have already
            published your video.
          </p>
          <ul className="mt-3 mx-3 list-disc">
            <li className="text-gray-400 text-sm text-justify mt-2">
              Enter in your YouTube Studio, if you don’t have then sign up.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Click on 'content' from the left-side menu.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              Choose the video you want to edit and click on the pencil-shaped
              icon to the right of it, or you can directly click on the title
              and description to change it.
            </li>
            <li className="text-gray-400 text-sm text-justify">
              You can then edit your YouTube title or description and click on
              'save.'
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            Can a YouTube Title and Description Extractor Be Used for SEO
            Purposes?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            Yes, definitely, using a YouTube title and description extractor,
            you can boost video SEO.
          </p>
          <ul className="mt-3 mx-3 list-disc">
            <li className="text-gray-400 text-sm text-justify mt-2">
              Extracted YouTube video titles and descriptions help to boost
              search results and drive more audience to your video.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              You can use the extracted YouTube video titles and descriptions in
              your own video to produce a decent and optimized SEO plan for
              YouTube and Google results.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              It will help you get in the eyes of the audience or algorithm
              simultaneously.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            Are There Any Limitations to Using a YouTube Title and Description
            Extractor?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            You have two options,
          </p>
          <ul className="mt-3 mx-3 list-disc">
            <li className="text-gray-400 text-sm text-justify mt-2">
              <span className="font-bold text-gray-600">Free Plan:</span> You
              will enjoy two limits in free plan.
            </li>
            <li className="text-gray-400 text-sm text-justify mt-2">
              <span className="font-bold text-gray-600">Premium Plan:</span> You
              need to purchase our premium plan to enjoy unlimited extracted
              YouTube titles and descriptions.
            </li>
          </ul>
          <p className="text-justify text-sm text-gray-400 mt-2 mb-4">
            In conclusion, a YouTube title and description extractor is a
            powerful tool that can help you understand the trends, popular
            videos, and keywords within the platform. By analysing the titles
            and descriptions of popular videos, you can gain valuable insights
            into the types of content that resonate with viewers and identify
            influencers within a specific niche or topic. However, it's
            important to use these tools responsibly and only for legitimate
            purposes.
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoSplitter;
