import { useEffect, useRef, useState } from "react";
import { FiBell, FiMessageSquare, FiGrid } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
// import NotificationDropdown from "../components/NotificationDropdown";
// import MessageDropdown from "../components/MessageDropdown";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRankingStar } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = ({ isSidebarOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenIcon, setIsDropdownOpenIcon] = useState(false);
  const [isDropdownNotification, setIsDropdownNotification] = useState(false);
  const [isDropdownMessage, setIsDropdownMessage] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRefIcon = useRef(null);
  const dropdownNotification = useRef(null);
  const dropdownMessageRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdownIcon = () => {
    setIsDropdownOpenIcon((prev) => !prev);
  };

  const toggleDropdownNotification = () => {
    setIsDropdownNotification((prev) => !prev);
  };

  const toggleDropdownMessage = () => {
    setIsDropdownMessage((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    console.log(option);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefIcon.current &&
        !dropdownRefIcon.current.contains(event.target)
      ) {
        setIsDropdownOpenIcon(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRefIcon]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownNotification.current &&
        !dropdownNotification.current.contains(event.target)
      ) {
        setIsDropdownNotification(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownNotification]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownMessageRef.current &&
        !dropdownMessageRef.current.contains(event.target)
      ) {
        setIsDropdownMessage(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownMessageRef]);

  return (
    <header
      className={`fixed top-0 ${
        isSidebarOpen ? "left-64" : "left-20"
      } right-0 flex justify-between items-center p-4 bg-white shadow z-50 transition-all duration-300 ease-in-outy`}
    >
      <div className="flex items-center w-1/2">
        <div className="relative w-full">
          {isSidebarOpen ? (
            ""
          ) : (
            <>
              {" "}
              <img
                src="https://res.cloudinary.com/antrix/image/upload/v1728712971/keywordsforyou/keywordforulogo_koel1o.png"
                alt=""
                className="h-12 w-auto"
              />
            </>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex space-x-4">
          <div className="relative" ref={dropdownRefIcon}>
            <FiGrid
              className="text-gray-600 w-6 h-6"
              onClick={toggleDropdownIcon}
            />
            {/* Dropdown Menu */}
            {isDropdownOpenIcon && (
              <div className="absolute right-0 mt-2 w-96 bg-white border border-white  rounded-md shadow-lg z-10">
                <div className="flex flex-col space-y-4 border-red-100 p-4">
                  <div className="flex flex-row space-x-8">
                    <div className="flex-1 bg-gradient-to-l from-teal-800 to-teal-400 h-16 flex items-center justify-center text-white rounded-xl py-8 shadow-xl shadow-red-300">
                      <Link to="/admin-team">
                        <div className="flex flex-col items-center justify-center">
                          <div className="">
                            {" "}
                            <RiTeamFill className="text-2xl text-white" />{" "}
                          </div>
                          <div>
                            <h2 className="text-md font-semibold text-white">
                              Team
                            </h2>{" "}
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-red-800 to-red-400 h-16 flex items-center justify-center text-white rounded-xl py-8 shadow-xl shadow-red-300">
                      <div className="flex flex-col items-center justify-center">
                        <div className="">
                          {" "}
                          <RiTeamFill className="text-2xl text-white" />{" "}
                        </div>
                        <div>
                          <h2 className="text-md font-semibold text-white">
                            Projects
                          </h2>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-l from-cyan-600 to-green-400 h-16 flex items-center justify-center text-white rounded-xl py-8 shadow-xl shadow-red-300">
                      <div className="flex flex-col items-center justify-center">
                        <div className="">
                          {" "}
                          <RiTeamFill className="text-2xl text-white" />{" "}
                        </div>
                        <div>
                          <h2 className="text-md font-semibold text-white">
                            Tasks
                          </h2>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-8">
                    <div className="flex-1 bg-gradient-to-l from-yellow-800 to-yellow-500 h-16 flex items-center justify-center text-white rounded-xl py-8 shadow-xl shadow-red-300">
                      <div className="flex flex-col items-center justify-center">
                        <div className="">
                          {" "}
                          <RiTeamFill className="text-2xl text-white" />{" "}
                        </div>
                        <div>
                          <h2 className="text-md font-semibold text-white">
                            Feeds
                          </h2>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-l from-blue-800 to-blue-400 h-16 flex items-center justify-center text-white rounded-xl py-8 shadow-xl shadow-red-300">
                      <div className="flex flex-col items-center justify-center">
                        <div className="">
                          {" "}
                          <RiTeamFill className="text-2xl text-white" />{" "}
                        </div>
                        <div>
                          <h2 className="text-md font-semibold text-white">
                            Files
                          </h2>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-l from-green-800 to-green-500 h-16 flex items-center justify-center text-white rounded-xl py-8 shadow-xl shadow-red-300">
                      <div className="flex flex-col items-center justify-center">
                        <div className="">
                          {" "}
                          <RiTeamFill className="text-2xl text-white" />{" "}
                        </div>
                        <div>
                          <h2 className="text-md font-semibold text-white">
                            Alerts
                          </h2>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-8">
                    <div className="flex-1 bg-gradient-to-r from-red-800 to-yellow-500 h-16 flex items-center justify-center text-white rounded-xl py-8 shadow-xl shadow-red-300">
                      <div className="flex flex-col items-center justify-center">
                        <div className="">
                          {" "}
                          <RiTeamFill className="text-2xl text-white" />{" "}
                        </div>
                        <div>
                          <h2 className="text-md font-semibold text-white">
                            Deal
                          </h2>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-cyan-800 to-blue-400 h-16 flex items-center justify-center text-white rounded-xl py-8 shadow-xl shadow-red-300">
                      <div className="flex flex-col items-center justify-center">
                        <div className="">
                          {" "}
                          <RiTeamFill className="text-2xl text-white" />{" "}
                        </div>
                        <div>
                          <h2 className="text-md font-semibold text-white">
                            Meeting
                          </h2>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-l from-green-800 to-green-500 h-16 flex items-center justify-center text-white rounded-xl py-8 shadow-xl shadow-red-300">
                      <div className="flex flex-col items-center justify-center">
                        <div className="">
                          {" "}
                          <RiTeamFill className="text-2xl text-white" />{" "}
                        </div>
                        <div>
                          <h2 className="text-md font-semibold text-white">
                            Calls
                          </h2>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <TfiHeadphoneAlt className="text-gray-600 w-6 h-6" />
          </div>
          <div className="relative">
            <FaRankingStar className="text-gray-600 w-6 h-6" />
          </div>
          <div className="relative">
            <GrLanguage className="text-gray-600 w-6 h-6" />
          </div>

          <div className="relative" ref={dropdownNotification}>
            <FiBell
              className="text-gray-600 w-6 h-6"
              onClick={toggleDropdownNotification}
            />
            <span className="absolute top-[-10px] right-[-10px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              7
            </span>
            {isDropdownNotification && (
              <>
                <div className="absolute right-0 mt-2 w-auto bg-white border border-white  rounded-md shadow-lg z-10">
                  {/* <NotificationDropdown /> */}
                </div>
              </>
            )}
          </div>
          <div className="relative" ref={dropdownMessageRef}>
            <FiMessageSquare
              className="text-gray-600 w-6 h-6 cursor-pointer"
              onClick={toggleDropdownMessage}
            />
            <span className="absolute top-[-10px] right-[-10px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              8
            </span>
            {isDropdownMessage && (
              <>
                <div className="absolute right-0 mt-2 w-auto bg-white border border-white  rounded-md shadow-lg z-50">
                  {/* <MessageDropdown /> */}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              className="w-10 h-10 rounded-full"
              src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1724768237/bigbull/portrait-smiling-boy-helmet-sunglasses-3d-rendering_hhvsge.jpg"
              alt="User avatar"
            />
            <div className="text-sm">
              <p className="font-semibold">mahesh kuldeep</p>
              <p className="text-gray-500">Full stack developer</p>
            </div>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="py-1">
                <li
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionClick("Profile")}
                >
                  Profile
                </li>
                <li
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionClick("Logout")}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
