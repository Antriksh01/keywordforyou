import React from "react";
import { HoverEffect } from "../Extras/card-hover-effect";
import { BsFillTagsFill } from "react-icons/bs";
import { IoCodeSlash, IoLogoYoutube } from "react-icons/io5";
import { TbFileDescription, TbSettingsSearch } from "react-icons/tb";
import { FaBriefcase, FaComments, FaHashtag } from "react-icons/fa";
import { GrChannel } from "react-icons/gr";
import { GiExtractionOrb, GiKnightBanner } from "react-icons/gi";
import { PiSubtitlesBold } from "react-icons/pi";
import { AiOutlineAudit } from "react-icons/ai";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { LuGalleryThumbnails } from "react-icons/lu";
import { RiMoneyRupeeCircleFill, RiVideoDownloadFill } from "react-icons/ri";

export const projects = [
  {
    icon: <BsFillTagsFill />,
    title: "Tag Generator",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    icon: <IoCodeSlash />,
    title: "Embed Code Generator",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    icon: <TbFileDescription />,
    title: "Meta Data Generator",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    icon: <FaHashtag />,
    title: "Hashtag Generator",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    icon: <GrChannel />,
    title: "Channel ID Finder",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    icon: <GiExtractionOrb />,
    title: "Tag Extractor",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    icon: <PiSubtitlesBold />,
    title: "Title & Description Extractor",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    icon: <AiOutlineAudit />,
    title: "Channel Audit",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    icon: <AiOutlineAudit />,
    title: "Video Audit",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    icon: <FaMoneyBillTrendUp />,
    title: "Trending Videos",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    icon: <TbSettingsSearch />,
    title: "Channel Search Tool",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    icon: <GiKnightBanner />,
    title: "Channel Bannel Downloader",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    icon: <IoLogoYoutube />,
    title: "Channel Logo Downloader",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    icon: <LuGalleryThumbnails />,
    title: "Thumbnail Downloader",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    icon: <RiMoneyRupeeCircleFill />,
    title: "Money Calculator",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    icon: <FaBriefcase />,
    title: "Case Convertor",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    icon: <FaComments />,
    title: "Comment Picker",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    icon: <RiVideoDownloadFill />,
    title: "Video Downloader",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

const ToolsCards = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <HoverEffect items={projects} />
      </div>
    </>
  );
};

export default ToolsCards;
