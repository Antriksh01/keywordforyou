import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { WithContext as ReactTagInput } from "react-tag-input";

const ItemType = "option";
const KeyCodes = { comma: 188, enter: 13 };

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

  const [generatedDescription, setGeneratedDescription] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [keywords, setKeywords] = useState([]);
  const [keywordCounts, setKeywordCounts] = useState({});
  const [tags, setTags] = useState([]); // Store tags
  const [inputValue, setInputValue] = useState("");

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

  console.log(keywordCounts);

  // Handle removing a specific tag
  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove)); // Remove tag by index
  };

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

  const generateDescription = () => {
    let description =
      "Hi everyone, welcome back to our channel. In this video, We’re going to show you [topic covered in video]\n\n";

    options.forEach((option) => {
      if (selectedOptions[option.key]) {
        switch (option.key) {
          case "timestamps":
            description += `TIMESTAMPS:\n    [00:00] Introduction\n    [01:30] First Topic\n    [03:00] Second Topic\n    [04:15] Third Topic\n    [05:30] Fourth Topic\n    [07:00] Fifth Topic\n    [09:00] Conclusion\n\n`;
            break;
          case "aboutVideo":
            description +=
              "Our channel is about [your topic]. We cover a lot of cool stuff like [topics covered in your channel].\n\n";
            break;
          case "aboutChannel":
            description +=
              "Visit insurance Our YouTube Channel Here:\n    https://www.youtube.com/channel\n\n    Don't forget to like and subscribe.\n\n";
            break;
          case "recommended":
            description +=
              "Check Out Our Other Videos Here:\n    https://www.youtube.com/watch?v=video1\n    https://www.youtube.com/watch?v=video2\n    https://www.youtube.com/watch?v=video3\n\n";
            break;
          case "aboutCompany":
            description +=
              "Click Here to Check Out Our Awesome Products:\n    https://www.website.com/product1\n    https://www.website.com/product2\n    https://www.website.com/product3\n\n";
            break;
          case "website":
            description += "FIND US AT\n    https://www.website.com/\n\n";
            break;
          case "contactSocial":
            description += `Get in Touch With Us:\n    Contact us at contact@company.com\n\n    Follow Us on Social Media:\n    ✅ Instagram: https://instagram.com/<profile>\n    ✅ Twitter: https://twitter.com/<profile>\n    ✅ Facebook: https://facebook.com/<profile>\n    ✅ Spotify: http://spotify.com/<profile>\n\n`;
            break;
          default:
            break;
        }
      }
    });

    setGeneratedDescription(description);
    updateCounts(description);
  };

  const updateCounts = (description) => {
    const words = description.trim().split(/\s+/).length;
    const characters = description.length;

    // Update keyword counts
    const keywordCountMap = {};
    tags.forEach((text) => {
      const regex = new RegExp(`\\b${text}\\b`, "gi");
      const count = (description.match(regex) || []).length;
      keywordCountMap[text] = count;
    });

    setWordCount(words);
    setCharCount(characters);
    setKeywordCounts(keywordCountMap);
  };

  console.log(tags);

  const handleDeleteKeyword = (i) => {
    setKeywords(keywords.filter((_, index) => index !== i));
  };

  const handleAddKeyword = (keyword) => {
    if (keywords.length < 5) {
      setKeywords([...keywords, keyword]);
    }
  };

  // Function to copy the generated description to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedDescription);
    alert("Copied to clipboard!");
  };

  // Function to download the description as a .txt file
  const downloadDescription = () => {
    const blob = new Blob([generatedDescription], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "description.txt";
    link.click();
  };

  console.log(keywords);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-6">
          {/* <h2 className="text-2xl font-semibold mb-6">
            YouTube Meta Data Generator
          </h2> */}
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
                {/* <ReactTagInput
                  tags={keywords}
                  handleDelete={handleDeleteKeyword}
                  handleAddition={handleAddKeyword}
                  delimiters={[KeyCodes.comma, KeyCodes.enter]}
                  placeholder="Enter up to 5 keywords"
                  classNames="p-4"
                  maxTags={7}
                /> */}
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
              </div>
              <div className="text-right">
                <button
                  className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-500"
                  onClick={generateDescription}
                >
                  Generate
                </button>
              </div>
            </div>
            {/* Generated Description */}
            <div className="flex-1/3 mb-4">
              <label className="text-gray-700 block mb-2">
                Generated Video Description
              </label>
              <textarea
                className="w-[34rem] h-48 border border-gray-300 rounded-md p-2"
                placeholder="Generated video description will appear here."
                value={generatedDescription}
                readOnly
              />
              <div className="flex mt-2">
                <button
                  className="mr-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-500"
                  onClick={copyToClipboard}
                >
                  Copy
                </button>
                <button
                  className="bg-green-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-500"
                  onClick={downloadDescription}
                >
                  Download
                </button>
              </div>
              {/* Word and Character Count */}
              <div className="mt-4">
                <p>Total Words: {wordCount}</p>
                <p>Total Characters: {charCount} / 5000</p>
                <p>Keywords:</p>
                <ul>
                  {Object.entries(keywordCounts).map(([keyword, count]) => (
                    <li key={keyword}>
                      {keyword}: {count}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescGenTab;
