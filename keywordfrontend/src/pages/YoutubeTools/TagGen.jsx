import axios from "axios";
import { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import CreatableSelect from "react-select/creatable";

const TagGen = () => {
  const [tags, setTags] = useState([]); // Store tags
  const [inputValue, setInputValue] = useState(""); // Store current input
  const [result, setResult] = useState();
  const [showResult, setShowResult] = useState(false);

  // Handle adding tags when 'Enter' is pressed
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault(); // Prevent form submission or newline behavior
      setTags([...tags, inputValue.trim()]); // Add the tag
      setInputValue(""); // Clear the input after adding tag
    } else if (e.key === "Backspace" && inputValue === "") {
      // Remove the last tag when backspace is pressed on empty input
      setTags(tags.slice(0, -1)); // Remove the last tag
    }
  };

  // Handle removing a specific tag
  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove)); // Remove tag by index
  };

  const copyToClipboard = () => {
    // Convert both `tags` and `relatedTag` to strings
    const tagString = tags.join(", ");
    const relatedTagString = relatedTag.map((tag) => tag.keyword).join(", ");

    // Combine both strings into one
    const combinedTags =
      tagString + (relatedTagString ? ", " + relatedTagString : "");

    // Copy the combined tags to the clipboard
    navigator.clipboard
      .writeText(combinedTags)
      .then(() => {
        alert("Tags copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  const downloadTags = () => {
    // Convert `tags` and `relatedTag` to a plain text format
    const tagString = tags.join("\n");
    const relatedTagString = relatedTag.map((tag) => tag.keyword).join("\n");

    // Combine both tag strings into one
    const combinedTags =
      tagString + (relatedTagString ? "\n" + relatedTagString : "");

    // Create a Blob and download the file
    const element = document.createElement("a");
    const file = new Blob([combinedTags], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "tags.txt";
    document.body.appendChild(element); // Required for Firefox
    element.click();

    // Clean up the element after click
    document.body.removeChild(element);
  };

  const generatetags = async () => {
    try {
      const res = await axios.get(
        `https://keyword-research-for-youtube.p.rapidapi.com/yttags.php?keyword=${tags}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "450fb1badcmsh09b0e8dd6502861p189847jsne572f5a074ed",
            "X-RapidAPI-Host": "keyword-research-for-youtube.p.rapidapi.com",
          },
        }
      );
      setResult(res);
      setShowResult(true);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(result?.data);
  const exactTag = result?.data?.exact_keyword;
  const relatedTag = result?.data?.related_keywords;
  console.log(exactTag, relatedTag);

  // const mergedTags = [
  //   ...result?.data?.exact_keyword,
  //   ...result?.data?.related_keywords,
  // ];

  // console.log(mergedTags);

  // https://rappid.in/apis/youtube_tags.php?title=lg%20monitor%20unboxing
  return (
    <>
      <h2 className="text-4xl mt-12 font-bold text-center text-cyan-800">
        YouTube Tag Generator
      </h2>

      <div className="flex items-center justify-center min-h-full">
        <div className="flex flex-col w-10/12 items-center bg-white p-4 shadow-xl rounded-xl mt-10">
          <div className="w-[90%] border rounded-lg p-2 flex flex-wrap items-center">
            {/* Render tags */}
            {tags.map((tag, index) => (
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
            {/* Input for new tags */}
            <input
              className="flex-grow border-none focus:outline-none m-1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} // Update inputValue on change
              onKeyDown={handleKeyDown} // Handle keypress events
              placeholder="Type and press Enter"
            />
          </div>
          {/* <input
            id="price"
            name="price"
            type="text"
            placeholder=""
            className="block w-10/12 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-40"
          /> */}

          <small className="text-gray-500 italic block self-center w-10/12">
            Example: cricket, football, rugby
          </small>
          <button
            className="bg-red-600 px-4 py-2 rounded-xl text-white font-semibold mt-4 shadow-lg"
            onClick={generatetags}
          >
            Generate
          </button>
          <div className="flex space-x-3 items-center mt-2">
            <h2>Share</h2>
            <FaFacebook />
            <BsTwitterX />
            <FaLinkedinIn />
          </div>
          {showResult && (
            <>
              <div className="p-4 max-w-4xl mx-auto">
                <h2 className="text-center text-xl font-semibold mb-4">
                  Result
                </h2>
                <div className="flex flex-wrap">
                  {tags.map((tag, index) => (
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
                  {relatedTag.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 text-gray-700 rounded-full flex items-center px-3 py-1 m-1"
                    >
                      <span>{tag.keyword}</span>
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
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-col mx-28 mt-6">
          <h2 className="text-xl font-bold text-red-600">
            Introduction to Our YouTube Tag Generator
          </h2>
          <p className="text-justify text-gray-500">
            In the vast and ever-expanding world of online video content,
            understanding the intricacies of platforms like YouTube is crucial
            for creators looking to maximize their reach and engagement. Among
            the key elements of YouTube optimization is the proper utilization
            of tags. In this comprehensive guide, we'll delve into the concept
            of YouTube tags, their significance in video optimization, and best
            practices for leveraging them effectively to enhance the visibility
            and discoverability of your content.
          </p>
        </div>

        <div className="flex flex-col mx-28 mt-6">
          <h2 className="text-xl font-bold text-red-600">
            What is a YouTube Tag?
          </h2>
          <p className="text-justify text-gray-500">
            In the context of YouTube, a tag refers to a descriptive keyword or
            phrase that creators assign to their videos to provide context and
            categorize them. Tags serve as metadata that help YouTube's
            algorithm understand the content, topic, and relevance of a video.
            When users search for specific terms or topics on YouTube, the
            algorithm uses tags, along with other factors like video title,
            description, and engagement metrics, to determine which videos to
            display in the search results and recommendations.
          </p>
        </div>
        <div className="flex flex-col mx-28 mt-6">
          <h2 className="text-xl font-bold text-red-600">
            Why Are YouTube Tags Important?
          </h2>
          <p className="text-justify text-gray-500">
            YouTube tags are crucial for video optimization, enhancing
            searchability, and attracting the right audience. By accurately
            describing video content, tags help YouTube's algorithm understand
            and categorize videos, leading to improved visibility in search
            results and recommendations. Effective use of tags enables creators
            to target specific keywords, reach niche audiences, and gain a
            competitive edge. Ultimately, YouTube tags play a vital role in
            maximizing a video's discoverability, engagement, and success on the
            platform.
          </p>
        </div>
        <div className="flex flex-col mx-28 mt-6">
          <h2 className="text-xl font-bold text-red-600">
            Why Should We Use a YouTube Tag Generator?
          </h2>
          <p className="text-justify text-gray-500">
            YouTube tags generator is a tool in keywords4u you can get free for,
            which can help you generate SEO-optimized tags for your videos. With
            the help of tags, you can make your video content quickly. Now, you
            know that with the help of that tag, you can create YouTube tags to
            get reach to more people, but which keywords4u tool will be best for
            you that can present your result accurately? There are many Tags
            generators website for YouTube in the google, and more options must
            be clarified. Now that we've outlined everything you need to know
            about Keywords4u, we'd like to make your decision simple. Let us
            show you how it will make your work easier.
          </p>
        </div>
        <div className="flex flex-col mx-28 mt-6">
          <h2 className="text-xl font-bold text-red-600">
            How to Add Tags to Your YouTube Videos
          </h2>
          <p className="text-justify text-gray-500">
            After uploading a video to your YouTube channel, navigate to the
            Video Manager or YouTube Studio and select the video you wish to
            edit. In the video details section, you'll find a field labeled
            "Tags" where you can enter descriptive keywords or phrases related
            to your video content. Separate each tag with commas or spaces.The
            procedure to add tags to a YouTube video is simple:
          </p>
          <ul className="list-disc pl-10 mt-3">
            <li className="text-gray-500">Visit the YouTube studio page.</li>
            <li className="text-gray-500">
              Select the video you want to add tags to.
            </li>
            <li className="text-gray-500">Please edit it.</li>
            <li className="text-gray-500">
              Add tags in the Video Tags section below the Description tab.
            </li>
          </ul>
        </div>
        <div className="flex flex-col mx-28 mt-6">
          <h2 className="text-xl font-bold text-red-600">
            If you are adding tags to a video, you are just uploading:
          </h2>
          <ul className="list-disc pl-10 mt-3">
            <li className="text-gray-500">Visit the YouTube studio page.</li>
            <li className="text-gray-500">
              Select the video you want to add tags to.
            </li>
            <li className="text-gray-500">Please edit it.</li>
            <li className="text-gray-500">
              Add tags in the Video Tags section below the Description tab.
            </li>
          </ul>
        </div>
        <div className="flex flex-col mx-28 mt-6">
          <h2 className="text-xl font-bold text-red-600">
            How to Use Our YouTube Tag Generator Tool?
          </h2>
          <p className="text-justify text-gray-500">
            YouTube tags are a fundamental aspect of video optimization that can
            significantly impact the discoverability and success of your
            content. By following best practices such as prioritizing relevance,
            conducting keyword research, incorporating long-tail keywords, using
            a variety of tags, analyzing competitors, and continuously
            experimenting and optimizing, you can maximize the effectiveness of
            your tags and improve your chances of ranking higher in search
            results and attracting more viewers. here are the steps given below
            to use our YouTube Tag Generator tool:
          </p>
          <ul className="list-disc pl-10 mt-3">
            <li className="text-gray-500">
              Open the YouTube Tag Generator tool.
            </li>
            <li className="text-gray-500">
              Enter your target topic into the given text box and click on the
              "Generate Tags" button to generate the Viral tags for your video.
            </li>
            <li className="text-gray-500">
              You can easily "Download" and "Copy" the generated Tags.
            </li>
          </ul>
        </div>
        <div className="flex flex-col mx-28 mt-6">
          <h2 className="text-xl font-bold text-red-600">
            What Are the Benefits of Youtube Tag Generator?
          </h2>

          <ul className="list-disc pl-10 mt-3">
            <li className="text-gray-500">It provides SEO-friendly tags.</li>
            <li className="text-gray-500">The workload is minimal.</li>
            <li className="text-gray-500">
              It provides viral and trending tags, using these tags can increase
              your video's reach.
            </li>
            <li className="text-gray-500">
              Make your videos more likely to appear in Suggested Videos.
            </li>
          </ul>
        </div>
        <div className="flex flex-col mx-28 mt-6">
          <h2 className="text-xl font-bold text-red-600">
            How Many Tags Should I Use on Youtube?
          </h2>
          <p className="text-justify text-gray-500">
            Tags are required for YouTube videos. The total number of characters
            that can be used in all tags on YouTube videos is 500, so you can
            use as many characters as you want. The video should have 6-7 tags.
            Use the right keywords in the video so that your target audience
            finds your video and YouTube understands what the video is about.
            Don't use wrong tags in the video.
          </p>
        </div>
        <div className="flex flex-col mx-28 mt-6">
          <h2 className="text-xl font-bold text-red-600">Conclusion:</h2>
          <p className="text-justify text-gray-500">
            There are tag generators on the google, and the count is high. But
            most of the YouTube tag generators are paid. That's why we
            introduced Keywords4u, which provides an accessible facility to
            generate free tags on YouTube. Our tool has been specially designed
            for YouTubers. So, for tags for YouTube video, you can try
            Keywords4u.
          </p>
        </div>
      </div>
    </>
  );
};

export default TagGen;
