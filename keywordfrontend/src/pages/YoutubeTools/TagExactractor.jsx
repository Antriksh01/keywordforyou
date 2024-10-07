import axios from "axios";
import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const TagExactractor = () => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const [result, setResult] = useState();
  const [showResult, setShowResult] = useState(false);

  const tagExtract = async () => {
    try {
      const { data } = await axios.get(
        `https://youtube-video-info1.p.rapidapi.com/youtube-info/?url=${inputValue}`,
        {
          headers: {
            "X-RapidAPI-Host": "youtube-video-info1.p.rapidapi.com",
            "X-RapidAPI-Key":
              "450fb1badcmsh09b0e8dd6502861p189847jsne572f5a074ed",
          },
        }
      );

      setResult(data?.info?.tags);
      console.log(data);

      setShowResult(true);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(result);

  const removeTag = (indexToRemove) => {
    setResult(result?.filter((_, index) => index !== indexToRemove)); // Remove tag by index
  };

  const copyToClipboard = () => {
    // Convert both `tags` and `relatedTag` to strings
    const tagString = result.join(", ");

    // Copy the combined tags to the clipboard
    navigator.clipboard
      .writeText(tagString)
      .then(() => {
        alert("Tags copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  const downloadTags = () => {
    const tagString = result.join("\n");

    // Create a Blob and download the file
    const element = document.createElement("a");
    const file = new Blob([tagString], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "tag_extractor.txt";
    document.body.appendChild(element); // Required for Firefox
    element.click();

    // Clean up the element after click
    document.body.removeChild(element);
  };

  return (
    <>
      <div>
        <h2 className="text-4xl mt-12 mb-3 font-bold text-center text-cyan-800">
          YouTube Tag Extractor
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg mb-6 shadow-xl shadow-red-300/50 max-w-4xl mx-auto">
          <div className="w-auto flex space-x-2 max-w-auto">
            <input
              type="text"
              placeholder="Example : https://youtu.be/eUDEdKzw0Lg"
              className="w-screen p-3 h-10 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="bg-red-600 text-white rounded p-2 h-10"
              onClick={tagExtract}
            >
              Extract
            </button>
          </div>
          {showResult && (
            <>
              <div className="p-4 max-w-4xl mx-auto">
                <h2 className="text-center text-xl font-semibold mb-4">
                  Result
                </h2>
                <div className="flex flex-wrap">
                  {result?.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 text-gray-700 rounded-full flex items-center px-3 py-1 m-1"
                    >
                      <span>{tag}</span>
                      <button
                        onClick={() => removeTag(index)}
                        className="ml-2 text-gray-500 hover:text-gray-800"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>

                {/* Download and Copy Buttons */}
                <div className="mt-4 text-center">
                  <button
                    onClick={downloadTags}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-red-600"
                  >
                    ⬇ Download
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    📋 Copy
                  </button>
                </div>
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
            YouTube Tags Extractor
          </h2>
          <p className="text-justify text-sm text-gray-400">
            Well! Well! Well! Online platforms have indubitably become a
            battlefield for many business rivals. What’s more amazing is,
            YouTube has taken the front seat and has surpassed almost all the
            other social media platforms in terms of popularity. A good many
            people withstand the competition while on the other side, some
            people do lack in competing, despite using good content in YouTube.
            The reason for the disparity is that each competitor employs
            different technical strategies. One approach that competitors
            frequently target is YouTube tags. You might have heard that YouTube
            tags are hidden meta tags, and publishers often use them while
            publishing video content. Your video can hit impressive places on
            YouTube with decent quality and a lot of tags. Would you like to
            find YouTube tags that help you to compete with your competitors?
            You are at the right place now! Your concern is over here. You can
            find your competitor's tags with our YouTube tag extractor tool. you
            can now find out what tags your competitors or others are using to
            boost their videos' performance. Take your eyes through this!
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            What is a YouTube tags extractor?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            <span className="font-bold text-gray-600">
              YouTube Tag Extractor
            </span>{" "}
            is a tool that extracts tags from YouTube videos. You can use a
            YouTube tag extractor to find the tags of other people's top-ranking
            videos and Know which popular tags they are using to rank on
            YouTube.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            How Does The YouTube Tags Extractor Work?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            With the help of Yt tag extractor, you can easily extract tags from
            YouTube. It’s like a simple game of Copy-Paste-Extract.
          </p>
          <ul className="list-disc mx-4 mt-3">
            <li className="text-gray-400 text-sm">
              Open our{" "}
              <span className="text-gray-600 font-bold">
                YouTube video tag extractor
              </span>{" "}
              tool in a one tab.
            </li>
            <li className="text-gray-400 text-sm">
              Then, open the new tab and get the relevant YouTube video as per
              your requirements.
            </li>
            <li className="text-gray-400 text-sm">
              On the top, you will find the URL of that video.
            </li>
            <li className="text-gray-400 text-sm">
              Just copy that link and paste it into the text field of an
              extractor tool.
            </li>
            <li className="text-gray-400 text-sm">
              Click on the “Find” to extract{" "}
              <span className="font-bold">YouTube video tags.</span>
            </li>
            <li className="text-gray-400 text-sm">
              On your very search, you will find a list of all the tags on your
              screen.
            </li>
            <li className="text-gray-400 text-sm">
              Grab the tags as per your wish or you can copy and paste the
              entire list at a safer place.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            How To Choose Best YouTube Tags?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            Tags in YouTube videos are a great way to get more valuable leads
            for your business. YouTube video tags will help you attract people
            who are more interested in your videos. Here are some tips to help
            you choose your tags wisely!
          </p>
          <p className="text-justify text-md text-cyan-800 font-bold mt-2">
            1. Your first tag should be your target keyword; the rest should be
            ordered by importance.
          </p>
          <p className="text-justify text-sm text-gray-400 mt-2">
            The first tag in your video is heavily considered when YouTube ranks
            content in their search results. The first tag should be your target
            keyword.
          </p>
          <p className="text-justify text-md text-cyan-800 font-bold mt-2">
            2. In addition to some broad keywords, you may wish to include some
            tags that describe the topic your video falls under.
          </p>
          <p className="text-justify text-sm text-gray-400 mt-2">
            Tags help YouTube to understand your video content topic. For
            instance, if you create a video content called “How to Kick
            Football,” you should add “football” as a tag that clarifies the
            topic is football.
          </p>
          <p className="text-justify text-md text-cyan-800 font-bold mt-2">
            3. Keep all your tags between 2-3 words.
          </p>
          <p className="text-justify text-sm text-gray-400 mt-2">
            To have a better search appearance in a YouTube search engine, keep
            the tags between 2 - 4 word phrases, including long tail and focus
            keywords.
          </p>
          <p className="text-justify text-md text-cyan-800 font-bold mt-2">
            4. Don't overuse tags.
          </p>
          <p className="text-justify text-sm text-gray-400 mt-2">
            You are adding tags to your video to help the algorithm understand
            what your video is about. Using too many keywords can confuse what
            your video is actually about.
          </p>
          <p className="text-justify text-md text-cyan-800 font-bold mt-2">
            5. Check out the most popular videos right now to get some
            inspiration.
          </p>
          <p className="text-justify text-sm text-gray-400 mt-2">
            Take notes from those already ranking on the topic if you know what
            you want to rank for. The keywords they use can be a good starting
            point for your research.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            Why extract tags from YouTube video?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            It is apparent that you want to extract tags for the views and
            optimize your ranking. To acquire a better understanding of how your
            competitors are vying for viewers on YouTube, it would be good to
            extract tags from popular videos. Above all, you will learn which
            tags are frequently used by well-known YouTubers and how they might
            improve the exposure of their video in search results. Thus, you can
            use those tags that way.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            How Many Tags Can You Use On YouTube?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            Don't use too many tags in a single video. The more tags you add to
            a video, the less relevant it becomes for viewers searching. All
            tags on YouTube must not exceed 500 characters (approximately) in
            total (all tags combined). Tags should usually be between 5-8 on
            most videos. As a rule of thumb, using tags between 5 to 20 is a
            best practice. As per the proven study, more than 30 tags got higher
            views. But I don't think it a relevant and applicable to all the
            videos. Focus on including all appropriate and relevant tags rather
            than worrying about the number of tags. Doing this will give your
            video the best chance of ranking for relevant keywords. After
            reading this post, you can use some good tools like YTubetool to
            determine which tags are most appropriate.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            What is the Best Way to Extract Tags From a YouTube Video?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            One of the best ways to grab quality tags and keywords from the
            YouTube video is to use the YouTube tag extractor tool. You can use
            our most reliable tool to extract YouTube tags for free. It is quite
            reliable and will save your time at the same time.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            What Are the Benefits of Using a YouTube Video Extractor?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            You are aware that Meta tags are concealed and you cannot see the
            popular tags being used by well-known YouTubers. You will therefore
            receive a list of all the tags and be able to determine the keywords
            that drive their search appearance with the support of a YouTube
            video tag extractor. Yt tag extractor will assist you in working
            smarter rather than harder. It will save your time when it comes to
            tag extraction. So you can devote your time to other technical
            strategies. Furthermore, it will optimise your search engine to
            compete on the YouTube platform.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            How Do I Pull Tags From a YouTube Video?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            To extract the tags from a YouTube video, simply copy the URL of
            that video and paste it into the text field of the YouTube tag
            extractor tool. When you click “Extract The Tags”, the entire list
            of tags will appear on your screen.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            Are Tags Still Useful on YouTube?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            Of course, the answer is yes! Yes, indeed! YouTube tags are
            important because they help the audience to grasp your content. It
            effectively optimises your search engine and propels you to a high
            ranking on online platforms. YouTube tags are, without a doubt, the
            most strategic element to use to improve your ranking. What’s more,
            right tags help you find the targeted audience and tend to get the
            best results on YouTube and Google. It will definitely assist you to
            acquire the limelight to YouTube view in suggestion videos. It will
            not only optimise your search queries but also recommend the same
            content from similar channels.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800 mb-2">
            Can I Extract YouTube Tags Without Desktop Software?
          </h2>
          <p className="text-justify text-sm text-gray-400 mb-4">
            Yes, definitely. You can Extract YouTube Tags without Desktop
            Software. As the popularity of YouTube tag extractors reaches an
            all-time high. With the help of our YouTube tag extractor tool, you
            can now grab the entire list of tags of any publicly available
            YouTube video.
          </p>
        </div>
      </div>
    </>
  );
};

export default TagExactractor;
