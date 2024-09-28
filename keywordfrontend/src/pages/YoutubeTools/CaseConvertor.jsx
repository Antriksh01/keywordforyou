import cogoToast from "cogo-toast";
import { useState } from "react";

const CaseConvertor = () => {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  const handleButtonClick = (action) => {
    let result;
    switch (action) {
      case "countChars":
        result = `Character Count: ${inputText.length}`;
        break;
      case "countWords":
        result = `Word Count: ${inputText.trim().split(/\s+/).length}`;
        break;
      case "uppercase":
        result = inputText.toUpperCase();
        break;
      case "lowercase":
        result = inputText.toLowerCase();
        break;
      case "capitalize":
        result = inputText.charAt(0).toUpperCase() + inputText.slice(1);
        break;
      case "sentenceCase":
        result = inputText
          .toLowerCase()
          .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        break;
      case "titleCase":
        result = inputText
          .toLowerCase()
          .replace(/\b(\w)/g, (char) => char.toUpperCase());
        break;
      case "inverseCase":
        result = inputText
          .split("")
          .map((char) =>
            char === char.toLowerCase()
              ? char.toUpperCase()
              : char.toLowerCase()
          )
          .join("");
        break;
      case "alternatingCase":
        result = inputText
          .split("")
          .map((char, index) =>
            index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
          )
          .join("");
        break;
      default:
        result = inputText;
    }
    setResultText(result);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        cogoToast.success("Copied to clipboard!");
      },
      () => {
        cogoToast.error("Failed to copy!");
      }
    );
  };

  return (
    <>
      <div>
        <h2 className="text-center mt-16 font-bold text-4xl text-cyan-800">
          Case Converter
        </h2>
        <h2 className="text-center mt-4 font-bold text-xl text-cyan-800">
          Convert Your Case With Title Case Converter Online
        </h2>
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="flex justify-center space-x-4">
          <div className="relative">
            <textarea
              className="w-96 h-64 rounded-xl border-2 p-4"
              placeholder="Enter Text"
              value={inputText}
              onChange={handleInputChange}
            />
            <button
              className="absolute top-2 right-2 bg-gray-200 p-1"
              onClick={() => copyToClipboard(inputText)}
            >
              📋
            </button>
          </div>

          <div className="relative">
            <textarea
              className="w-96 h-64 rounded-xl border-2 p-4"
              placeholder="Result"
              value={resultText}
              readOnly
            />
            <button
              className="absolute top-2 right-2 bg-gray-200 p-1"
              onClick={() => copyToClipboard(resultText)}
            >
              📋
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center space-x-2 mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 m-2 rounded-xl hover:bg-red-700"
            onClick={() => handleButtonClick("countChars")}
          >
            Count Characters
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 m-2 rounded-xl hover:bg-red-700"
            onClick={() => handleButtonClick("countWords")}
          >
            Count Words
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 m-2 rounded-xl hover:bg-red-700"
            onClick={() => handleButtonClick("uppercase")}
          >
            Uppercase
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 m-2 rounded-xl hover:bg-red-700"
            onClick={() => handleButtonClick("lowercase")}
          >
            Lowercase
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 m-2 rounded-xl hover:bg-red-700"
            onClick={() => handleButtonClick("capitalize")}
          >
            Capitalize
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 m-2 rounded-xl hover:bg-red-700"
            onClick={() => handleButtonClick("sentenceCase")}
          >
            Sentence Case
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 m-2 rounded-xl hover:bg-red-700"
            onClick={() => handleButtonClick("titleCase")}
          >
            Title Case
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 m-2 rounded-xl hover:bg-red-700"
            onClick={() => handleButtonClick("inverseCase")}
          >
            InVeRsE CaSe
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 m-2 rounded-xl hover:bg-red-700"
            onClick={() => handleButtonClick("alternatingCase")}
          >
            AlTeRnAtInG cAsE
          </button>
        </div>
      </div>
      <hr className="shadow-3xl shadow-red-300" />
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-lg font-bold text-cyan-800">
          What is a Case Convertor?
        </h2>
        <p className="text-justify text-sm text-gray-400">
          Changing the text case of any given text is easy with the change text
          case convertor. The text should be copied and pasted into the text
          area, and the text case should be selected. Here is an online tool
          that lets you change your text between lowercase and uppercase
          letters, capitalize and uncapitalize, convert it to mix case, and
          transform it. Explore the YTube case converter.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-lg font-bold text-cyan-800">
          How to Use Case Converter?
        </h2>
        <p className="text-justify text-sm text-gray-400">
          An input string's case is standardized using the Case Converter online
          transformation. Are you guilty of writing entire notes or documents
          using caps lock without realizing it? It doesn't need to be deleted
          and rewritten. Now, you can instantly use our case converter online
          tool to convert the text with the right capitalization style. It is
          possible to change lowercase letters to uppercase letters, uppercase
          letters to lowercase letters, and title cases to sentence cases. To
          use the case changer, follow these three steps: <br />
          <br />
          <span className="font-bold">Step #1:</span> The Case Converter tool is
          accessed by copying and pasting: sentences, paragraphs, or whole
          documents from other documents. Although the case changer preserves
          space, it does not recognize bold, italic or underlined text, fonts or
          hyperlinks. <br />
          <br />
          <span className="font-bold">Step #2:</span> There are four options to
          choose from: 'Normal text', 'ALL CAPITALIZED' (uppercase), 'all
          minimalized' (lowercase), Count Word, Capitalize, and Count Charactor.
          <br />
          <br />
          <span className="font-bold">Step #3:</span> You will see your text
          capitalized in the right-hand box as you specify. By clicking on 'Copy
          results,' you can save it to your clipboard manually or with a click
          on the 'Copy results' button.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-lg font-bold text-cyan-800">
          Why You Should Use the Case Converter?
        </h2>
        <p className="text-justify text-sm text-gray-400">
          Case converters can be helpful for a variety of reasons, including:
        </p>
        <ul className="mt-2 mx-4 list-disc">
          <li className="text-gray-400 text-sm text-justify">
            It's easier to convert to lowercase if you accidentally left your
            caps to lock on. Capitalization issues in the text can be easily
            corrected with the tool.
          </li>
          <li className="text-gray-400 text-sm text-justify">
            Is there a word in your document that you forgot to capitalize? It
            doesn't need to be retyped. Performing an automatic conversion is as
            simple as using the capitalize text feature.
          </li>
          <li className="text-gray-400 text-sm text-justify">
            CTR (click-through rate) can be increased by capitalizing each word
            in a title when optimizing for search engines. Each comment can be
            automatically capitalized with the case converter tool.
          </li>
        </ul>
      </div>
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-lg font-bold text-cyan-800">
          Benefits of Using the Case Converter.
        </h2>
        <p className="text-justify text-sm text-gray-400">
          Case conversion is not available in many word editing programs. You
          can solve possible capitalization problems using our free tool. Still
          unsure if the text converter is suitable for you? Some of the benefits
          are as follows:
        </p>
        <ul className="mt-2 mx-4 list-disc">
          <li className="text-gray-400 text-sm text-justify mt-2">
            To correct text case errors, copy and paste the text to be converted
            into the text converter tool after noticing the mistake.
          </li>
          <li className="text-gray-400 text-sm text-justify mt-2">
            Make all first letters of text phrases bold by choosing 'All First
            Letters Big.'
          </li>
          <li className="text-gray-400 text-sm text-justify mt-2">
            'Normal text' can be used to remove incorrect capitalizations.
          </li>
          <li className="text-gray-400 text-sm text-justify mt-2">
            The caps converter option: 'ALL CAPITALIZED,' can convert text to
            all capital letters.
          </li>
          <li className="text-gray-400 text-sm text-justify mt-2">
            When selecting 'all minimalized,' all capital letters will be
            converted instantly to lowercase.
          </li>
          <li className="text-gray-400 text-sm text-justify mt-2">
            The caps converter option: 'ALL CAPITALIZED,' can convert text to
            all capital letters.
          </li>
        </ul>
      </div>
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-lg font-bold text-cyan-800">
          What is the Proper Case Used for?
        </h2>
        <p className="text-justify text-sm text-gray-400">
          Every word in the proper case has its first letter capitalized. For
          example, 'This Is An Example Of Proper Case.' is an example of a
          sentence in an appropriate case.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-lg font-bold text-cyan-800">
          What is an Upper Case Letter Example?
        </h2>
        <p className="text-justify text-sm text-gray-400">
          Any text you provide will be converted to upper case using the upper
          case transformer. It will convert all lowercase letters into capital
          letters (while keeping uppercase letters the same). Then click the tab
          for UPPER CASE and paste the text you need to change. Uppercase
          convertor online will help you to convert text into a Uppercase.
          Example: THIS IS AN EXAMPLE OF AN UPPER CASE.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-lg font-bold text-cyan-800">
          What is a Lower Case Letter Example?
        </h2>
        <p className="text-justify text-sm text-gray-400">
          A lower case text converter is just what you need if you're wondering
          how to uncapitalize text - it converts all the letters in your text to
          lowercase. You can simply copy and paste the text that needs to be
          converted to lower case into the box above and select 'lower case'.
          Example: Lower case is shown here.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-lg font-bold text-cyan-800">
          How Do You Change Uppercase to Lowercase Without Re-typing?
        </h2>
        <p className="text-justify text-sm text-gray-400">
          You can change uppercase and lowercase using Microsoft Word's Change
          Case feature.
        </p>
        <ul className="mt-2 mx-4 list-disc">
          <li className="text-gray-400 text-sm text-justify">
            You can change the case of text by clicking or pressing the mouse
            button.
          </li>
          <li className="text-gray-400 text-sm text-justify">
            To change the case of an object, click the Change Case button under
            the Fonts command group on the Home tab of the Ribbon.
          </li>
          <li className="text-gray-400 text-sm text-justify">
            Decide which option is best for you.
          </li>
        </ul>
      </div>
      <div className="max-w-4xl mx-auto mt-4 mb-6">
        <h2 className="text-lg font-bold text-cyan-800">
          How Do You Convert to the Proper Case?
        </h2>
        <p className="text-justify text-sm text-gray-400">
          By using the =PROPER( ) function in Microsoft Excel, you can convert
          the contents of a cell to the proper case. Otherwise, you can user
          case convertor online to convert text into a proper case.
        </p>
      </div>
    </>
  );
};

export default CaseConvertor;
