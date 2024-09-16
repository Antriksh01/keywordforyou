import { Route, Routes } from "react-router-dom";
import Homepage from "./component/Homepage";
import Navbar from "./component/Navbar";
import Pricing from "./pages/Pricing";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TitleDescriptionGen from "./pages/YoutubeTools/TitleDescriptionGen";
import HashtagGen from "./pages/YoutubeTools/HashtagGen";
import TagGen from "./pages/YoutubeTools/TagGen";
import ChannelIdFinder from "./pages/YoutubeTools/ChannelIdFinder";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/youtube-title-description-generator"
          element={<TitleDescriptionGen />}
        />
        <Route path="/youtube-hashtag-generator" element={<HashtagGen />} />
        <Route path="/youtube-tag-generator" element={<TagGen />} />
        <Route
          path="/youtube-embed-code-generator"
          element={<TitleDescriptionGen />}
        />
        <Route
          path="/youtube-channel-id-finder"
          element={<ChannelIdFinder />}
        />
      </Routes>
    </>
  );
};

export default App;
