import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemType = "option";

const DraggableOption = ({
  option,
  index,
  moveOption,
  toggleOption,
  selected,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveOption(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`mb-2 flex items-center justify-between p-2 border ${
        isDragging ? "bg-gray-100" : "bg-sky-200"
      } rounded-md shadow-sm cursor-move`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={selected}
          onChange={toggleOption}
          className="mr-2"
        />
        <label className="text-gray-700">{option.label}</label>
      </div>
      <span className="cursor-move">≡</span>
    </div>
  );
};

const DescGenTab = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    timestamps: false,
    aboutVideo: false,
    aboutChannel: false,
    recommended: false,
    aboutCompany: false,
    website: false,
    contactSocial: false,
  });

  const [options, setOptions] = useState([
    { key: "timestamps", label: "Timestamps" },
    { key: "aboutVideo", label: "About the Video" },
    { key: "aboutChannel", label: "About the Channel" },
    { key: "recommended", label: "Recommended Videos/playlists" },
    { key: "aboutCompany", label: "About Our Company & Products" },
    { key: "website", label: "Our Website" },
    { key: "contactSocial", label: "Contact & Social" },
  ]);

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const updatedOptions = Object.keys(selectedOptions).reduce((acc, key) => {
      acc[key] = checked;
      return acc;
    }, {});
    setSelectedOptions(updatedOptions);
  };

  const toggleOption = (key) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [key]: !prevOptions[key],
    }));
  };

  const moveOption = (fromIndex, toIndex) => {
    const updatedOptions = [...options];
    const [movedItem] = updatedOptions.splice(fromIndex, 1);
    updatedOptions.splice(toIndex, 0, movedItem);
    setOptions(updatedOptions);
  };

  const allSelected = Object.values(selectedOptions).every(Boolean);
  const someSelected = Object.values(selectedOptions).some(Boolean);
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-semibold mb-6">
            YouTube Description Generator
          </h2>
          <div className="flex space-x-3">
            <div className="flex-2/3">
              {/* Select All */}
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  checked={allSelected}
                  indeterminate={someSelected && !allSelected}
                  onChange={handleSelectAll}
                  className="mr-2"
                />
                <label className="text-gray-700 font-semibold">
                  Select All
                </label>
              </div>

              {/* Draggable Options */}
              <DndProvider backend={HTML5Backend}>
                {options.map((option, index) => (
                  <DraggableOption
                    key={option.key}
                    option={option}
                    index={index}
                    moveOption={moveOption}
                    selected={selectedOptions[option.key]}
                    toggleOption={() => toggleOption(option.key)}
                  />
                ))}
              </DndProvider>

              {/* Keywords to Target */}
              <div className="mb-4 mt-6">
                <label className="text-gray-700 block mb-2">
                  Keywords to Target (Optional)
                </label>
                <textarea
                  type="text"
                  placeholder="Enter up to 5 keywords"
                  className="w-full h-24 bg-gray-100 border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="text-right">
                <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-500">
                  Generate
                </button>
              </div>
            </div>
            {/* Generated Description */}
            <div className="flex=1/3 mb-4">
              <label className="text-gray-700 block mb-2">
                Generated Video Description
              </label>
              <textarea
                className="w-[34rem] h-48 border border-gray-300 rounded-md p-2"
                placeholder="Generated video description will appear here."
              />
            </div>
          </div>

          {/* Generate Button */}
        </div>
      </div>
      <div className="bg-white pb-10">
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800">
            Why is the YouTube Description Important?
          </h2>
          <p className="text-justify text-xs text-gray-600">
            YouTube Description has the back of the title and the entire video
            content. An engaging YouTube description is essential because it
            draws viewers in, attracts new subscribers, drives viewers to stick
            with the video to the end, and generates endless views. It
            organically improves search engine rankings through YouTube's
            algorithm, letting the publisher reach the broadest possible
            audience. There is a certain way to write an engaging description to
            make it more helpful.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800">
            How Does the YouTube Video Description Generator Work?
          </h2>
          <p className="text-justify text-xs text-gray-600">
            Writing an engaging description for a YouTube video is not a game.
            You must put in a lot of effort and research to create an optimized
            description, which is time-consuming. For a hassle-free experience,
            we solved this issue. Our tool, YouTube Description Generator, will
            help you. We’ve created a tool based on our research and expertise
            on how your description should be written. We went through a lot of
            research to develop this tool to generate optimized YouTube
            descriptions for YouTube.
          </p>
          <h2 className="text-sm font-bold text-cyan-800 mt-4">
            Follow These Steps to Use YouTube Description Generator:
          </h2>
          <p className="text-justify text-xs text-gray-600">
            The YouTube Description Generator lets you generate the optimized
            description. Open a YouTube Description Generator and complete the
            given required information first. You can select and fill in the
            description options according to your requirements and simply click
            the “Generate” button to generate a description.
          </p>
          <p className="text-justify text-xs text-gray-600">
            Click here and enter the YouTube video description generator. You
            will find 8 complete sections to form a unique description.
          </p>
          <ul className="list-disc mt-3 mx-4">
            <li className="text-gray-600 text-xs">
              <span className="font-bold">#1- About the Video:</span> Fill in
              the most crucial information of your video in the first 2-3 lines,
              including main keywords, and then you can add other details.
              Moreover, you must remember to add Hashtags to your video at the
              end part. (Character limit: 500-1000)
            </li>
            <li className="text-gray-600 text-xs mt-2">
              <span className="font-bold">#2- Timestamps:</span> this is the
              same as the table of content; this will cover the Chapterization
              of your video. It will divide the main sections of your video by
              time. You have to insert links on the video’s time code. It will
              automatically appear as a hyperlink, and viewers can directly jump
              to their interest part. (Character limit: 500 approx)
            </li>
            <li className="text-gray-600 text-xs mt-2">
              <span className="font-bold">#3- About the Channel:</span> This is
              the core part of your YouTube channel. You have to fill in the
              detailed information about what kind of video content you publish
              on your channel. It will increase your subscribers if they find it
              interesting. Don’t forget to add the main keywords to this
              information. (Character limit: 500- 1000)
            </li>
            <li className="text-gray-600 text-xs mt-2">
              <span className="font-bold">
                #4- Recommended Videos/Playlists:
              </span>{" "}
              If you have other related or linking video content with the
              existing one, provide a direct link here. It will promote your
              other videos too. You can update this section anytime or after
              publishing your new videos. (Character limit: 250 approx)
            </li>
            <li className="text-gray-600 text-xs mt-2">
              <span className="font-bold">
                #5- About Our Company & Company:
              </span>{" "}
              Give a piece of detailed information about your organization and
              the products or services you offer. (Character limit: 500-1000)
            </li>
            <li className="text-gray-600 text-xs mt-2">
              <span className="font-bold">#6- Our Website:</span> This is the
              most important part. Provide a direct link to your website.
              (Character limit: 50-60 approx)
            </li>
            <li className="text-gray-600 text-xs mt-2">
              <span className="font-bold">
                #7- Contact & social media links:
              </span>{" "}
              provide links to your social media accounts for more traffic. Such
              as LinkedIn, Instagram, Twitter, Pinterest, Facebook etc.
              (Character limit: 100-500 approx)
            </li>
            <li className="text-gray-600 text-xs mt-2">
              <span className="font-bold">#8- Keywords to Target:</span> Write
              Five main keywords based on ranking.
            </li>
          </ul>
          <p className="text-justify text-xs text-gray-600 mt-4">
            Once done with all the sections, you can drag and drop them to
            change the sequence as per your requirement. Moreover, you can
            uncheck the sections if you don’t want to provide information about
            that part. Lastly, click on ‘Generate’. You will find your YouTube
            Video Description right in front of you. You can either copy it to
            the clipboard or download the description in the text format.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800">
            What Should You Write in a YouTube Description?
          </h2>
          <p className="text-justify text-xs text-gray-600">
            Writing a unique description may double-cross your mind at times.
            Therefore, we have foregathered some tips for you to fill your
            description box strategically,
          </p>
          <ul className="list-disc mx-4 mt-3">
            <li className="text-xs text-gray-600">
              The YouTube description character limit is 5000; you must utilize
              at least 1000.
            </li>
            <li className="text-xs text-gray-600 mt-2">
              It would help if you used the most searched keyword in the right
              way.
            </li>
            <li className="text-xs text-gray-600 mt-2">
              Your description must be of high quality words.
            </li>
            <li className="text-xs text-gray-600 mt-2">
              Add hashtags to your descriptions.
            </li>
            <li className="text-xs text-gray-600 mt-2">
              You can add a timestamp, subscribe, blog, social media, or
              affiliated links to the description.
            </li>
            <li className="text-xs text-gray-600 mt-2">
              Make sure you use simple language.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <h2 className="text-lg font-bold text-cyan-800">
            How to Find a Unique Description for a YouTube Video?
          </h2>
          <p className="text-justify text-xs text-gray-600">
            You can effortlessly access unique Descriptions for YouTube Videos
            on our generator in a blink of an eye. You can use our handy
            converter to generate unique descriptions in a proper format. It is
            easy to use and will give you a systematic description. Experience
            how our suggested descriptions give heights to your video content.
          </p>
        </div>
      </div>
    </>
  );
};

export default DescGenTab;
