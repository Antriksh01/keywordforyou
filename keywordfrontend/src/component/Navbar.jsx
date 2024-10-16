import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  FaTools,
  FaHashtag,
  FaTags,
  FaBriefcase,
  FaComment,
  FaPhotoVideo,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  TbListDetails,
  TbFileDescription,
  TbSettingsSearch,
} from "react-icons/tb";
import { ImEmbed2 } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import { GrChannel } from "react-icons/gr";
import { GiExtractionOrb, GiKnightBanner } from "react-icons/gi";
import { AiOutlineAudit } from "react-icons/ai";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { LuGalleryThumbnails } from "react-icons/lu";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { BackgroundLines } from "../Extras/background-lines";
import { HoverBorderGradient } from "../Extras/hover-border-gradient";
import { useDispatch, useSelector } from "react-redux";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blogs" },
];

const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link to={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.currentUser);
  console.log(user);
  const location = useLocation();
  const [active, setActive] = useState(null);
  const [loggedUser, setLoggedUser] = useState(false);
  console.log(user.token);

  const checkUser = () => {
    if (user.token) {
      setLoggedUser(true);
    } else {
      setLoggedUser(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Disclosure as="nav" className="bg-red">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border shadow-md bg-gradient-to-t from-slate-50 to-slate-200 hover:bg-gradient-to-b">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://res.cloudinary.com/antrix/image/upload/v1728712971/keywordsforyou/keywordforulogo_koel1o.png"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={classNames(
                      item.href === location.pathname
                        ? "text-black border-b-2 border-red-600"
                        : "text-black-300 hover:text-red-500",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Menu as="div" className="relative ml-3">
            <div>
              <MenuButton className="relative flex bg-transparent hover:text-red-500">
                <span className="absolute" />
                <span className="sr-only">Open user menu</span>
                <h4 className="font-bold p-1">Tools</h4>
                <FaTools className="mt-2" />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-[-10rem] z-10 mt-2 w-[68rem] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="text-sm grid grid-cols-3 gap-4 p-2">
                <div className="flex-shrink-0 rounded-md shadow-2xl p-5">
                  <h2 className="text-xl font-bold mb-1">YT Generator Tools</h2>

                  <ul>
                    <MenuItem>
                      <Link
                        to="/youtube-title-description-generator"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <TbFileDescription className="text-xl font-bold mr-1 hover:text-red-400" />
                          <h5 className="hover:text-red-400">
                            YouTube Meta Data Generator
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/youtube-hashtag-generator"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <FaHashtag className="text-lg font-bold mr-1 hover:text-red-400" />
                          <h5 className="hover:text-red-400">
                            YouTube Hashtag Generator
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/youtube-tag-generator"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <FaTags className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            YouTube Tag Generator
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/youtube-embed-code-generator"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <ImEmbed2 className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            YouTube Embed Code Generator
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                  </ul>
                </div>
                <div className="flex-shrink-0 rounded-md shadow-2xl p-5">
                  <h2 className="text-xl font-bold mb-1">YT Extractor Tools</h2>
                  <ul>
                    <MenuItem>
                      <Link
                        to="/youtube-channel-id-finder"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <GrChannel className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            YouTube Channel ID Finder
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/youtube-tag-extractor"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <GiExtractionOrb className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            YouTube Tag Extractor
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/youtube-title-description-extractor"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <GiExtractionOrb className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            YouTube Title & Description Extractor
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                  </ul>
                </div>
                <div className="flex-shrink-0 rounded-md shadow-2xl p-5">
                  <h2 className="text-xl font-bold mb-1">
                    YT Analytics & Audit Tools
                  </h2>
                  <ul>
                    <MenuItem>
                      <Link
                        to="/youtube-channel-audit"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <AiOutlineAudit className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            YouTube Channel Audit
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/youtube-video-audit"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <AiOutlineAudit className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            YouTube Video Audit
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/youtube-trending-videos"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <FaMoneyBillTrendUp className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            YouTube Trending Videos
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/youtube-channel-search-tool"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <TbSettingsSearch className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            YouTube Channel Search Tool
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                  </ul>
                </div>
                <div className="flex-shrink-0 rounded-md shadow-2xl p-5">
                  <h2 className="text-xl font-bold mb-1">
                    YT Downloader Tools
                  </h2>
                  <ul>
                    <MenuItem>
                      <Link
                        to="/youtube-channel-banner-downloader"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <GiKnightBanner className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            YouTube Channel Banner Downloader
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/youtube-channel-logo-downloader"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <IoLogoYoutube className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            YouTube Channel Logo Downloader
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/youtube-thumbnails-downloader"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <LuGalleryThumbnails className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            YouTube Thumbnails Downloader
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                  </ul>
                </div>
                <div className="flex-shrink-0 rounded-md shadow-2xl p-5">
                  <h2 className="text-xl font-bold mb-1">Other Tools</h2>
                  <ul>
                    <MenuItem>
                      <Link
                        to="/youtube-money-calculator"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <RiMoneyRupeeCircleFill className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            YouTube Money Calculator
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/youtube-case-convertor"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <FaBriefcase className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">Case Convertor</h5>
                        </li>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/youtube-comment-picker"
                        className="block text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        <li className="flex items-center">
                          <FaComment className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            YouTube Comment Picker
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                  </ul>
                </div>
                <div className="flex-shrink-0 rounded-md shadow-2xl p-5">
                  <h2 className="text-xl font-bold mb-1">Downloader Tool</h2>
                  <ul>
                    <MenuItem>
                      <Link
                        to="/video-downloader"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <FaPhotoVideo className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            Video Downloader
                          </h5>
                        </li>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/video-splitter"
                        className="block text-sm text-gray-700 "
                      >
                        <li className="flex items-center">
                          <FaPhotoVideo className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">Video Splitter</h5>
                        </li>
                      </Link>
                    </MenuItem>
                    {/* <MenuItem>
                      <Link
                        to="/youtube-comment-picker"
                        className="block text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        <li className="flex items-center">
                          <FaComment className="text-lg font-bold mr-1" />
                          <h5 className="hover:text-red-400">
                            YouTube Comment Picker
                          </h5>
                        </li>
                      </Link>
                    </MenuItem> */}
                  </ul>
                </div>
              </div>
            </MenuItems>
          </Menu>
          <Menu as="div" className="relative ml-3">
            <div>
              <MenuButton className="relative flex bg-transparent hover:text-red-500">
                <span className="absolute" />
                <span className="sr-only">Open user menu</span>
                <h4 className="font-bold p-1 ">Other</h4>
                <TbListDetails className="mt-2" />
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <Link
                  to="/about-us"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  About Us
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/contact-us"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  Contact Us
                </Link>
              </MenuItem>
              {/* <MenuItem>
                <Link
                  to="/advertise-with-us"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  Advertise With Us
                </Link>
              </MenuItem> */}
              <MenuItem>
                <Link
                  to="/write-for-us"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  Write For Us
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu>
          {loggedUser ? (
            <>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://res.cloudinary.com/antrix/image/upload/v1663295252/person_thumbnail_ybahiz.png"
                        className="h-8 w-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Your Profile
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Settings
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Sign out
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </>
          ) : (
            <>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link to="/login">
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                      <button className="text-sm font-medium">Login</button>
                    </HoverBorderGradient>
                  </Link>
                  <Link to="/pricing">
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                      <button className="text-sm font-medium">Signup</button>
                    </HoverBorderGradient>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
