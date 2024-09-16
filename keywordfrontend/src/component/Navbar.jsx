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
} from "react-icons/fa";
import { useState } from "react";
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
  const location = useLocation();
  const [active, setActive] = useState(null);
  const [loggedUser, setLoggedUser] = useState(false);
  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
                src="https://keywords4u.com/assets/images/new-logo.png"
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
                    <Link to="/youtube-title-description-generator">
                      <li className="flex items-center">
                        <TbFileDescription className="text-xl font-bold mr-1 hover:text-red-400" />
                        <h5 className="hover:text-red-400">
                          YouTube Title & Description Generator
                        </h5>
                      </li>
                    </Link>
                    <Link to="/youtube-hashtag-generator">
                      <li className="flex items-center">
                        <FaHashtag className="text-lg font-bold mr-1 hover:text-red-400" />
                        <h5 className="hover:text-red-400">
                          YouTube Hashtag Generator
                        </h5>
                      </li>
                    </Link>
                    <Link to="/youtube-tag-generator">
                      <li className="flex items-center">
                        <FaTags className="text-lg font-bold mr-1" />
                        <h5 className="hover:text-red-400">
                          YouTube Tag Generator
                        </h5>
                      </li>
                    </Link>
                    <Link to="/youtube-embed-code-generator">
                      <li className="flex items-center">
                        <ImEmbed2 className="text-lg font-bold mr-1" />
                        <h5 className="hover:text-red-400">
                          YouTube Embed Code Generator
                        </h5>
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="flex-shrink-0 rounded-md shadow-2xl p-5">
                  <h2 className="text-xl font-bold mb-1">YT Extractor Tools</h2>
                  <ul>
                    <Link to="/youtube-channel-id-finder">
                      <li className="flex items-center">
                        <GrChannel className="text-lg font-bold mr-1" />
                        <h5 className="hover:text-red-400">
                          YouTube Channel ID Finder
                        </h5>
                      </li>
                    </Link>

                    <li className="flex items-center">
                      <GiExtractionOrb className="text-lg font-bold mr-1" />
                      <h5 className="hover:text-red-400">
                        YouTube Tag Extractor
                      </h5>
                    </li>
                    <li className="flex items-center">
                      <GiExtractionOrb className="text-lg font-bold mr-1" />
                      <h5 className="hover:text-red-400">
                        YouTube Title & Description Extractor
                      </h5>
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink-0 rounded-md shadow-2xl p-5">
                  <h2 className="text-xl font-bold mb-1">
                    YT Analytics & Audit Tools
                  </h2>
                  <ul>
                    <li className="flex items-center">
                      <AiOutlineAudit className="text-lg font-bold mr-1" />
                      <h5 className="hover:text-red-400">
                        YouTube Channel Audit
                      </h5>
                    </li>
                    <li className="flex items-center">
                      <AiOutlineAudit className="text-lg font-bold mr-1" />
                      <h5 className="hover:text-red-400">
                        YouTube Video Audit
                      </h5>
                    </li>
                    <li className="flex items-center">
                      <FaMoneyBillTrendUp className="text-lg font-bold mr-1" />
                      <h5 className="hover:text-red-400">
                        YouTube Trending Videos
                      </h5>
                    </li>
                    <li className="flex items-center">
                      <TbSettingsSearch className="text-lg font-bold mr-1" />
                      <h5 className="hover:text-red-400">
                        YouTube Channel Search Tool
                      </h5>
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink-0 rounded-md shadow-2xl p-5">
                  <h2 className="text-xl font-bold mb-1">
                    YT Downloader Tools
                  </h2>
                  <ul>
                    <li className="flex items-center">
                      <GiKnightBanner className="text-lg font-bold mr-1" />
                      <h5 className="hover:text-red-400">
                        YouTube Channel Banner Downloader
                      </h5>
                    </li>
                    <li className="flex items-center">
                      <IoLogoYoutube className="text-lg font-bold mr-1" />
                      <h5 className="hover:text-red-400">
                        YouTube Channel Logo Downloader
                      </h5>
                    </li>
                    <li className="flex items-center">
                      <LuGalleryThumbnails className="text-lg font-bold mr-1" />
                      <h5 className="hover:text-red-400">
                        YouTube Thumbnails Downloader
                      </h5>
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink-0 rounded-md shadow-2xl p-5">
                  <h2 className="text-xl font-bold mb-1">Other Tools</h2>
                  <ul>
                    <li className="flex items-center">
                      <RiMoneyRupeeCircleFill className="text-lg font-bold mr-1" />
                      <h5 className="hover:text-red-400">
                        YouTube Money Calculator
                      </h5>
                    </li>
                    <li className="flex items-center">
                      <FaBriefcase className="text-lg font-bold mr-1" />
                      <h5 className="hover:text-red-400">Case Convertor</h5>
                    </li>
                    <li className="flex items-center">
                      <FaComment className="text-lg font-bold mr-1" />
                      <h5 className="hover:text-red-400">
                        YouTube Comment Picker
                      </h5>
                    </li>
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
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  About Us
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  Contact Us
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  Advertise With Us
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  Write For Us
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
          {loggedUser ? (
            <>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                    <button
                      className="text-white bg-red-600 hover:bg-red-900 hover:text-white
                      rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button
                      className="text-white bg-red-600 hover:bg-red-900 hover:text-white
                      rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Signup
                    </button>
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
