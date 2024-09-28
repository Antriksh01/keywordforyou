import React, { useState } from "react";
import EstEarnCpm from "../../component/EstEarnCpm";
import EstEarnCtr from "../../component/EstEarnCtr";
import { Link } from "react-router-dom";

const MoneyCalculator = () => {
  const [activeTab, setActiveTab] = useState("title");
  return (
    <>
      <div className="flex flex-col items-center bg-white p-6">
        <h1 className="text-4xl font-semibold mb-4">
          YouTube Money Calculator
        </h1>
        <h2 className="text-md font-bold">
          Check How Much Money Do YouTubers Make?
        </h2>

        <div className="flex space-x-4 mb-2 mt-4">
          <button
            onClick={() => setActiveTab("title")}
            className={`py-2 font-bold text-xs px-6 rounded-xl ${
              activeTab === "title"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Estimated Total Earning By CPM
          </button>
          <button
            onClick={() => setActiveTab("description")}
            className={`py-2 text-xs px-6 font-bold rounded-xl ${
              activeTab === "description"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Estimated Total Earning By CTR
          </button>
        </div>
      </div>
      {activeTab === "title" ? <EstEarnCpm /> : <EstEarnCtr />}
      <div>
        <div className="max-w-4xl mx-auto mt-2">
          <h2 className="text-lg font-bold text-cyan-800">
            What Is a YouTube Money Calculator?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            A YouTube pay calculator estimates what a YouTube video or channel
            will earn. Among other factors, it depends on how many views and
            engagement your video receives.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-2">
          <h2 className="text-lg font-bold text-cyan-800">
            How to Use YouTube Money Calculator?
          </h2>
          <ul className="mt-2 list-disc mx-4">
            <li className="text-sm text-justify text-gray-400">
              Drag the YouTube View Count slider up or down based on how many
              videos you watch each day.
            </li>
            <li className="text-sm text-justify text-gray-400">
              Using your channel's historical CTR, estimate your CTR.
            </li>
            <li className="text-sm text-justify text-gray-400">
              See projected earnings per day, per week, and year.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-2">
          <h2 className="text-lg font-bold text-cyan-800">
            What Does CPM Mean on YouTube?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            CPM means cost per impression, a metric representing how much
            advertisers spend to show YouTube ads. Among the metrics available
            on YouTube Analytics are the following: CPM: How much an advertiser
            pays for 1,000 ads. Any time an ad is displayed, it counts as an
            impression.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-2">
          <h2 className="text-lg font-bold text-cyan-800">
            What Impacts Your YouTube Cpm?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            Your YouTube CPM can change based on several factors, such as:
          </p>
          <ul className="mt-2 mx-4 list-disc">
            <li className="text-gray-400 text-sm text-justify">
              CPMs may increase on Black Friday (if it's during the holiday
              season)
            </li>
            <li className="text-gray-400 text-sm text-justify">
              Advertising can target visitors based on their location
              (advertisers can target viewers based on their location)
            </li>
            <li className="text-gray-400 text-sm text-justify">
              Advertising formats are changing (video pays more than static
              Display ads)
            </li>
          </ul>
          <p className="text-justify text-sm text-gray-400 mt-2">
            Perhaps you need to change your geographic location if your CPM
            drops. In this case, CPM rates may be lower because the ads will
            change. Monitoring these elements may help you identify the cause of
            the problem. This method can boost your CPM by changing your YouTube
            SEO strategy and content topics.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-2">
          <h2 className="text-lg font-bold text-cyan-800">
            What Does CTR Mean on YouTube?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            CTR is one of the top metrics to consider if you want to grow your
            YouTube channel and improve visibility (To get more views on your
            video you need to add right hashtags/ tags which you can get it with{" "}
            <Link className="font-bold hover:text-red-600" to="/">
              YouTube Hashtag Generator
            </Link>{" "}
            and{" "}
            <Link className="font-bold hover:text-red-600" to="/">
              YouTube Tag Generator
            </Link>{" "}
            tool). When viewers discover it on YouTube, the number of times your
            video is clicked. An example of a CTR would be that if you get 1,000
            impressions and 100 people click on your video, you have a 10% CTR.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-2">
          <h2 className="text-lg font-bold text-cyan-800">
            How much do YouTubers make?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            With our{" "}
            <span className="font-bold">YouTube Earnings Calculator</span>, you
            can estimate your estimated earnings on YouTube every day and every
            month. It considers the number of views, engagement, and other
            metrics associated with the video. Your YouTube account must have at
            least 1,000 subscribers to use this{" "}
            <span className="font-bold">YouTube revenue Calculator</span>.
            YouTube earnings are affected by four factors:
          </p>
          <ul className="mt-2 mx-4 list-disc">
            <li className="text-gray-400 text-sm text-justify">
              Using video engagement, estimate variance.
            </li>
            <li className="text-gray-400 text-sm text-justify">
              Based on an estimated 1,000 views, the gross earnings are:
            </li>
            <li className="text-gray-400 text-sm text-justify">
              Per-subscriber earnings estimated.
            </li>
            <li className="text-gray-400 text-sm text-justify">CPM vs CPC.</li>
            <li className="text-gray-400 text-sm text-justify">
              Estimated variance based on video engagement.
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-2">
          <h2 className="text-lg font-bold text-cyan-800">
            Do Longer Videos Help With YouTube Revenue?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            More ads mean more revenue for creators, and longer videos have more
            space for ads. A ten-minute break is crucial since YouTube allows
            creators to insert ads into their videos from the beginning rather
            than just at the top. An unique thumbnail impacts your YouTube
            views. You can attract audience with good and interesting
            thumbnails. You can try keywordsforyou’s{" "}
            <Link className="font-bold hover:text-red-600" to="/">
              YouTube Thumbnail Generator
            </Link>{" "}
            for thumbnail ideas.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-2 mb-8">
          <h2 className="text-lg font-bold text-cyan-800">
            Can I Sell Products on a YouTube Channel?
          </h2>
          <p className="text-justify text-sm text-gray-400">
            Videos can be easily created and shared on YouTube. Selling
            products, promoting your business, and engaging customers online are
            some of the ways you can use YouTube channels. Audit your channel
            with{" "}
            <Link className="font-bold hover:text-red-600" to="/">
              YouTube Channel Audit
            </Link>{" "}
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default MoneyCalculator;
