import React, { useState } from "react";

const TagSelector = () => {
  const [tags, setTags] = useState([]); // Store tags
  const [inputValue, setInputValue] = useState(""); // Store current input

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

  return (
    <div className="w-full max-w-lg border rounded-lg p-2 flex flex-wrap items-center">
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
  );
};

export default TagSelector;
