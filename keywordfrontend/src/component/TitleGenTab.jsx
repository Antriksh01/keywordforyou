import cogoToast from "cogo-toast";
import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCopySharp } from "react-icons/io5";

const TitleGenTab = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedResults, setSelectedResults] = useState({});

  const travelResults = [
    "10 Out Of This World Traveling Things",
    "4 Experts Share Their Astonishing Thoughts On Traveling",
    "Powerful Guidelines For Traveling",
    "Secrets To Traveling Revealed: Here's What You Need To Know",
    "How To Travel [Fast And Easy]",
    "Top 15 Tools For Traveling",
    "Thousands Already Travel And So You Can",
    "16 Simple Tricks You Can Follow To Travel",
    "Why You Need To Travel",
    "28 Tips That Show Anybody How To Travel - Guaranteed",
  ];

  const handleGenerate = () => {
    // Simulating result generation based on user input
    if (query) {
      setResults(travelResults);
    }
  };

  const handleCheckboxChange = (index) => {
    setSelectedResults((prevSelected) => ({
      ...prevSelected,
      [index]: !prevSelected[index],
    }));
  };

  const handleDownload = () => {
    const selectedItems = results.filter((_, index) => selectedResults[index]);

    if (selectedItems.length > 0) {
      const blob = new Blob([selectedItems.join("\n")], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "selected-travel-results.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      alert("Please select at least one item to download.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(results.join("\n"));
    alert("Copied to clipboard!");
  };

  const handleSelectAll = () => {
    // Check if all results are already selected
    const allSelected = results.every((_, index) => selectedResults[index]);

    // If all are selected, unselect all; otherwise, select all
    const newSelectedResults = results.reduce((acc, _, index) => {
      acc[index] = !allSelected; // Toggle based on allSelected state
      return acc;
    }, {});

    setSelectedResults(newSelectedResults);
  };

  return (
    <div className="bg-white pb-10">
      <div className="bg-gray-100 p-8 rounded-lg shadow-2xl shadow-red-500/50 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-cyan-800">
          YouTube Title Generator
        </h2>
        <div className="w-auto flex space-x-2 max-w-auto">
          <input
            type="text"
            placeholder="Example: travel"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-screen p-3 h-10 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            className="bg-red-600 text-white rounded p-2 h-10"
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {results.map((result, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 rounded-3xl bg-gray-200 px-3 py-1 shadow"
            >
              <input
                type="checkbox"
                checked={!!selectedResults[index]}
                onChange={() => handleCheckboxChange(index)}
                className="h-4 w-4"
              />
              <span>{result}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(result);
                  cogoToast.success(`Copied`);
                }}
                className=" text-gray-500 px-2 py-1 rounded-md"
              >
                <IoCopySharp />
              </button>
            </div>
          ))}
        </div>
        {results.length > 0 && (
          <>
            <div className="flex justify-center space-x-4 mb-4 mt-4">
              <button
                onClick={handleDownload}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Download
              </button>
              <button
                onClick={handleCopy}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Copy All
              </button>
              <button
                onClick={handleSelectAll}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Select All
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
        <h2 className="text-lg font-bold text-cyan-800">
          What is a YouTube Title ?
        </h2>
        <p className="text-justify text-xs text-gray-600">
          YouTube titles are the name of your YouTube videos, and titles are
          mandatory to post the videos on YouTube. That means you cannot post
          your video content on YouTube without the title. They are essential
          and vary in length. When viewed from the angle of SEO (Search Engine
          Optimization), the title of your YouTube video is the crucial part of
          your video, and this can be challenging. The YouTube title generator
          is a tool to generate titles for your YouTube channel.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-6">
        <h2 className="text-lg font-bold text-cyan-800">
          Why is the YouTube Title Important?
        </h2>
        <p className="text-justify text-xs text-gray-600">
          Imagine someone having classy content but not getting recognition due
          to its ordinary title. Will an ordinary and incomplete title grab your
          attention? Of course not! Because a title gives a glimpse of an entire
          content and hooks the viewer. People only dive right into the content
          when the title seems appealing. A smart title embraces the most-trendy
          keywords that never fail to give heights to video SEO. If you want to
          hit high on YouTube or across the Internet, enrich your content with a
          healthy title.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-6">
        <h2 className="text-lg font-bold text-cyan-800">
          How Does the Video Title Generator Work?
        </h2>
        <p className="text-justify text-xs text-gray-600">
          Well, the truth is creating the best YouTube title isn’t easy. At some
          points, it feels like watching the paint getting dry. Therefore, we
          have come up with the best YouTube title generator to rule out all
          your worries, boredom and confusion. Our tool is meticulously designed
          after intense research into the entire YouTube elements, such as
          trending videos, trendy keywords, themes, channels, and well-known key
          phrases. It will definitely help you broaden your vision and boost
          your brainstorming. You will get numerous suggestions and unique
          ideas. What’s more, you can use this tool and create a mixture of your
          own ideas with our suggestions in a flash of a second. Look how it
          makes your task a kid’s stuff. For instance, if your video is about
          street food, you can type the keyword ‘street food’, and when you
          click on ‘Generate’, you will find a bunch of title suggestions.
        </p>
        <ul className="list-disc mx-4 mt-3">
          <li className="text-xs text-gray-600">
            Enter the main keyword of your video.
          </li>
          <li className="text-xs text-gray-600">Click on the ‘Generate’</li>
          <li className="text-xs text-gray-600">
            You will find a list of suggestions.
          </li>
          <li className="text-xs text-gray-600">
            Beside every title, you will find a check box.
          </li>
          <li className="text-xs text-gray-600">
            You can select all or some titles by clicking on the check box.
          </li>
          <li className="text-xs text-gray-600">
            Once done with the selection, you can either copy or download the
            titles.
          </li>
          <li className="text-xs text-gray-600">
            Your list will be saved as a text file if you click on download.
          </li>
          <li className="text-xs text-gray-600">
            If you want more titles, click on ‘generate’ once again.
          </li>
        </ul>
      </div>
      <div className="max-w-4xl mx-auto mt-6">
        <h2 className="text-lg font-bold text-cyan-800">
          Can YouTube Video Titles Be Changed?
        </h2>
        <p className="text-justify text-xs text-gray-600">
          Well, the truth is creating the best YouTube title isn’t easy. At some
          points, it feels like watching the paint getting dry. Therefore, we
          have come up with the best YouTube title generator to rule out all
          your worries, boredom and confusion. Our tool is meticulously designed
          after intense research into the entire YouTube elements, such as
          trending videos, trendy keywords, themes, channels, and well-known key
          phrases. It will definitely help you broaden your vision and boost
          your brainstorming. You will get numerous suggestions and unique
          ideas. What’s more, you can use this tool and create a mixture of your
          own ideas with our suggestions in a flash of a second. Look how it
          makes your task a kid’s stuff. For instance, if your video is about
          street food, you can type the keyword ‘street food’, and when you
          click on ‘Generate’, you will find a bunch of title suggestions.
        </p>
        <ul className="list-disc mx-4 mt-3">
          <li className="text-xs text-gray-600">
            #1- Sign in into your YouTube Studio.
          </li>
          <li className="text-xs text-gray-600">
            #2- Click on the video you want to go ahead and edit the title for.
          </li>
          <li className="text-xs text-gray-600">
            #3- Click on the edit, and you can change the title if it’s your
            video.
          </li>
          <li className="text-xs text-gray-600">
            #4- Once you have edited your title, click on ‘save’, and you are
            good to go!
          </li>
        </ul>
      </div>
      <div className="max-w-4xl mx-auto mt-6">
        <h2 className="text-lg font-bold text-cyan-800">
          What Does a Good YouTube Video Title Have?
        </h2>
        <p className="text-justify text-xs text-gray-600">
          People can easily fall in love with the words. So, show little care
          and consider the below tips if you want to create a good YouTube video
          title.
        </p>
        <ul className="list-decimal mx-4 mt-3">
          <li className="text-xs text-gray-600">
            Short Titles are healthy titles. YouTube Title limit is 100
            characters, but you don’t need to utilize all. Instead, try to
            create a title within 70-80 characters.
          </li>
          <li className="text-xs text-gray-600">
            Make sure that the first letter of every word is capitalized because
            this will look more clear and more attractive.
          </li>
          <li className="text-xs text-gray-600">
            If you use easy and emotive language, an optimum number of audiences
            will engage in your content.
          </li>
          <li className="text-xs text-gray-600">
            Neglect using clickbait titles to engage your audience. Resultantly,
            this will disappoint your viewers
          </li>
          <li className="text-xs text-gray-600">
            Use the right keywords in the right place to optimize your ranking
            on search engines.
          </li>
          <li className="text-xs text-gray-600">
            Make use of Numbers as numbers have power. For example, ‘Top 5
            Richest Countries’. This title is quite catchy. People will jump
            into your content at first sight.
          </li>
          <li className="text-xs text-gray-600">
            One of the words from the title must be in Uppercase to make it more
            catchy. For instance, ‘5 Secrets to Make MONEY’. Uppercase gives
            more power to the words.
          </li>
        </ul>
      </div>
      <div className="max-w-4xl mx-auto mt-6">
        <h2 className="text-lg font-bold text-cyan-800">
          How to Create the Best YouTube Video Titles?
        </h2>
        <p className="text-justify text-xs text-gray-600">
          There are a good many components needed to knead the best YouTube
          video titles. To make your video click-worthy, please turn a keen eye
          to the below tips,
        </p>
        <ul className="list-disc mx-4 mt-3">
          <li className="text-xs text-gray-600">
            Though the word limit is 100 characters, try fixing your title
            within 70-80.
          </li>
          <li className="text-xs text-gray-600">
            Emphasize one main keyword at a time which is most searched related
            to your video content.
          </li>
          <li className="text-xs text-gray-600">
            You must avoid insider language and use the language your audience
            will understand.
          </li>
          <li className="text-xs text-gray-600">
            Use the Alert or hype words in your content, such as Shocking,
            Unbelievable, Oh My God and so on.
          </li>
          <li className="text-xs text-gray-600">
            Keep in mind the intent of your audience.
          </li>
          <li className="text-xs text-gray-600">
            Use numbers, dates or data if necessary to make it more attractive.
          </li>
          <li className="text-xs text-gray-600">
            Use curious words such as Here is why, What made this, This is the
            reason etc.
          </li>
          <li className="text-xs text-gray-600">
            Mention the things or points you have used in the entire video to
            hook your viewers.
          </li>
        </ul>
        <p className="text-justify text-xs text-gray-600 mt-4">
          It is pretty challenging to gather all the things under one roof. So,
          without any second thought, you can use our YouTube title generator
          for creative titles.
        </p>
        <h2 className="text-sm font-bold text-gray-500 mt-3">
          The Goal of Having Good YouTube Video Titles:
        </h2>
        <ul className="list-disc mx-4 mt-3">
          <li className="text-xs text-gray-600">
            #1- To have Findability and Clickability.
          </li>
          <li className="text-xs text-gray-600">
            #2- To get endless views on the videos.
          </li>
          <li className="text-xs text-gray-600">
            #3- To optimize the Video SEO using keywords and key phrases.
          </li>
          <li className="text-xs text-gray-600">
            #4- To get content recognition.
          </li>
          <li className="text-xs text-gray-600">
            #5- To hit- high on the Internet.
          </li>
          <li className="text-xs text-gray-600">
            #6- To ensure that the material reaches the intended audience.
          </li>
        </ul>
      </div>
      <div className="max-w-4xl mx-auto mt-6">
        <h2 className="text-lg font-bold text-cyan-800">
          How to Title Your YouTube Videos to Get More Views?
        </h2>
        <p className="text-justify text-xs text-gray-600">
          Make sure that the title should not be more than 70 characters.
          YouTube shows all the video titles, so it will not be entirely
          displayed if you put longer titles. If possible, start with a keyword:
          start the title with the related keywords if you want your videos to
          be associated. Keywords should be exact. As the term implies, these
          are actual words that describe your video and help you position it
          better in search engines. YouTube's algorithm finds the exact keyword
          matches most often. <br />
          <br /> Avoid clickbait titles—the phrases or words you just put into
          getting clicks. For instance, using a title like “how to get rich in
          one day” makes it sound impossible, and YouTube can punish you for it.
          Use “how to get rich” and avoid unrealistic promises. Try to include
          numbers or “how to” terms whenever possible (for example, “5 habits to
          a healthier life”), both of which tend to grab viewers' attention.
        </p>
      </div>
    </div>
  );
};

export default TitleGenTab;
