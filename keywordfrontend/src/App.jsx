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
import TagExactractor from "./pages/YoutubeTools/TagExactractor";
import TitleDescriptionExtract from "./pages/YoutubeTools/TitleDescriptionExtract";
import ChannelAudit from "./pages/YoutubeTools/ChannelAudit";
import VideoAudit from "./pages/YoutubeTools/VideoAudit";
import TrendingVideos from "./pages/YoutubeTools/TrendingVideos";
import ChannelBannerDownloader from "./pages/YoutubeTools/ChannelBannerDownloader";
import ChannelLogoDownloader from "./pages/YoutubeTools/ChannelLogoDownloader";
import ThumbnailsDownloader from "./pages/YoutubeTools/ThumbnailsDownloader";
import MoneyCalculator from "./pages/YoutubeTools/MoneyCalculator";
import CaseConvertor from "./pages/YoutubeTools/CaseConvertor";
import CommentPicker from "./pages/YoutubeTools/CommentPicker";
import Aboutus from "./pages/OtherData/Aboutus";
import Contactus from "./pages/OtherData/Contactus";
import AdvertiseWithUs from "./pages/OtherData/AdvertiseWithUs";
import WriteForUs from "./pages/OtherData/WriteForUs";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import EmbedCodeGen from "./pages/YoutubeTools/EmbedCodeGen";
import ChannelSearchTool from "./pages/YoutubeTools/ChannelSearchTool";
import VideoDownloader from "./pages/YoutubeTools/VideoDownloader";
import VideoSplitter from "./pages/YoutubeTools/VideoSplitter";
import { useDispatch, useSelector } from "react-redux";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.currentUser);
  console.log(user);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/:value" element={<Signup />} />
        <Route
          path="/youtube-title-description-generator"
          element={<TitleDescriptionGen />}
        />
        <Route path="/youtube-hashtag-generator" element={<HashtagGen />} />
        <Route path="/youtube-tag-generator" element={<TagGen />} />
        <Route
          path="/youtube-embed-code-generator"
          element={<EmbedCodeGen />}
        />
        <Route
          path="/youtube-channel-id-finder"
          element={<ChannelIdFinder />}
        />
        <Route path="/youtube-tag-extractor" element={<TagExactractor />} />
        <Route
          path="/youtube-title-description-extractor"
          element={<TitleDescriptionExtract />}
        />
        <Route path="/youtube-channel-audit" element={<ChannelAudit />} />
        <Route path="/youtube-video-audit" element={<VideoAudit />} />
        <Route path="/youtube-trending-videos" element={<TrendingVideos />} />
        <Route
          path="/youtube-channel-search-tool"
          element={<ChannelSearchTool />}
        />
        <Route
          path="/youtube-channel-banner-downloader"
          element={<ChannelBannerDownloader />}
        />
        <Route
          path="/youtube-channel-logo-downloader"
          element={<ChannelLogoDownloader />}
        />
        <Route
          path="/youtube-thumbnails-downloader"
          element={<ThumbnailsDownloader />}
        />
        <Route path="/youtube-money-calculator" element={<MoneyCalculator />} />
        <Route path="/youtube-case-convertor" element={<CaseConvertor />} />
        <Route path="/youtube-comment-picker" element={<CommentPicker />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/advertise-with-us" element={<AdvertiseWithUs />} />
        <Route path="/write-for-us" element={<WriteForUs />} />
        <Route path="/video-downloader" element={<VideoDownloader />} />
        <Route path="/video-splitter" element={<VideoSplitter />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
