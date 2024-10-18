import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../Extras/animated-modal";
import { GiArmorUpgrade } from "react-icons/gi";

const UserProfile = () => {
  const user = useSelector((state) => state?.user?.currentUser);
  console.log(user);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    youtubeName: "",
    youtubeLink: "",
    facebookLink: "",
    instagramLink: "",
    twitterLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  console.log(formattedDate);

  const billingData = [
    {
      invoiceNumber: "K4U2284838",
      date: "Sep 13, 2024",
      amount: "Rs. 730",
      status: "Success",
    },
  ];
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex justify-center items-center py-6">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 sm:p-8">
          <div className="flex justify-between">
            {/* Subscription Info */}
            <div className="w-full sm:w-1/2">
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                Subscription
              </h2>
              <h2 className="text-xl font-bold text-cyan-800 mb-1 uppercase">
                {user.Membership}
              </h2>
              {user.Membership === "monthly" && (
                <>
                  {/* <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Upgrade Plan
                  </button> */}
                  <Modal>
                    <ModalTrigger className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 text-white flex justify-center group/modal-btn">
                      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        Upgrade Plan
                      </span>
                      <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        <GiArmorUpgrade />
                      </div>
                    </ModalTrigger>
                    <ModalBody>
                      <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                          Upgrade Your Membership Plan To{" "}
                          <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                            Yearly
                          </span>{" "}
                          now!
                        </h4>
                        <div className="flex justify-center items-center"></div>
                        <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                          <div className="flex  items-center justify-center">
                            <span className="text-red-700 dark:text-neutral-300 text-2xl">
                              Registration Fee : ₹730 only
                            </span>
                          </div>
                        </div>
                      </ModalContent>
                      <ModalFooter className="gap-4">
                        {/* <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                          Cancel
                        </button> */}
                        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                          Checkout
                        </button>
                      </ModalFooter>
                    </ModalBody>
                  </Modal>
                </>
              )}
            </div>
            <div className="w-full sm:w-1/2 text-right">
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                Plan Ends On
              </h2>
              <p className="text-lg text-cyan-800">
                {user.MembershipExpiryDate?.split(" ")[0]}
              </p>
              {formattedDate >= user.MembershipExpiryDate?.split(" ")[0] && (
                <>
                  {/* <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2">
                    Renew
                  </button> */}
                  <Modal>
                    <ModalTrigger className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2 group/modal-btn">
                      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        Renew Plan
                      </span>
                      {/* <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        <GiArmorUpgrade />
                      </div> */}
                    </ModalTrigger>
                    <ModalBody>
                      <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                          Renew Your Membership Plan{" "}
                          <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                            now!
                          </span>{" "}
                        </h4>
                        <div className="flex justify-center items-center"></div>
                        <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                          <div className="flex  items-center justify-center">
                            <span className="text-red-700 dark:text-neutral-300 text-2xl">
                              Renewal Fee : ₹{user.charges} only
                            </span>
                          </div>
                        </div>
                      </ModalContent>
                      <ModalFooter className="gap-4">
                        {/* <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                          Cancel
                        </button> */}
                        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                          Checkout
                        </button>
                      </ModalFooter>
                    </ModalBody>
                  </Modal>
                </>
              )}
            </div>
          </div>

          {/* Profile Section */}
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Profile</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="mb-2">
                <p className="text-gray-700 font-semibold">
                  Full Name : <span className="font-normal">{user.Name}</span>
                </p>
              </div>
              <div className="mb-2">
                <p className="text-gray-700 font-semibold">
                  Email :{" "}
                  <span className="font-normal">{user.EmailAddress}</span>
                </p>
              </div>
              <div className="mb-2">
                <p className="text-gray-700 font-semibold">
                  Youtube Channel :{" "}
                  <a
                    href={user.channel_link}
                    className="text-red-500 font-normal hover:underline"
                  >
                    YTMETHOD
                  </a>
                </p>
              </div>
              <div className="mb-2">
                <p className="text-gray-700 font-semibold">
                  Youtube Channel URL :{" "}
                  <a
                    href={user.channel_link}
                    className="text-red-500 font-normal hover:underline"
                  >
                    {user.channel_link}
                  </a>
                </p>
              </div>
              <div className="mb-2">
                <p className="text-blue-500 hover:text-blue-700 font-semibold">
                  Facebook URL :{" "}
                  <a
                    href={user.facebook}
                    className="text-red-500 font-normal hover:underline"
                  >
                    {user.facebook}
                  </a>
                </p>
              </div>
              <div className="mb-2">
                <p className="text-pink-500 hover:text-pink-700 font-semibold">
                  Instagram URL :{" "}
                  <a
                    href={user.instagram}
                    className="text-red-500 font-normal hover:underline"
                  >
                    {user.instagram}
                  </a>
                </p>
              </div>
              <div className="mb-2">
                <p className="text-blue-400 hover:text-blue-600 font-semibold">
                  Twitter :{" "}
                  <a
                    href={user.twitter}
                    className="text-red-500 font-normal hover:underline"
                  >
                    {user.twitter}
                  </a>
                </p>
              </div>

              {/* Social Links */}
              {/* <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Facebook
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-700">
                  Instagram
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  Twitter
                </a>
              </div> */}

              {/* Update Buttons */}
              <div className="flex mt-4 space-x-4">
                {/* <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
                  Update Details
                </button> */}
                <div>
                  <Modal>
                    <ModalTrigger className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 flex justify-center group/modal-btn">
                      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        Update Details
                      </span>
                      <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        Update Details
                      </div>
                    </ModalTrigger>
                    <ModalBody>
                      <ModalContent>
                        <h2 className="text-xl font-bold text-cyan-800">
                          Update Details
                        </h2>
                        <hr />
                        <div className="max-h-screen mx-auto bg-white rounded-lg mt-4">
                          <form className="grid grid-cols-2 gap-2">
                            {/* Full Name */}
                            <div className="col-span-2">
                              <label className="block text-gray-700 font-bold text-sm mb-1">
                                Full Name
                              </label>
                              <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter full name"
                              />
                            </div>

                            {/* Email */}
                            <div className="col-span-2">
                              <label className="block text-gray-700 font-bold text-sm mb-2">
                                Email Id
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter email"
                              />
                            </div>

                            {/* Youtube Channel Name */}
                            <div className="col-span-2">
                              <label className="block text-gray-700 text-sm font-bold mb-2">
                                Youtube Channel Name
                              </label>
                              <input
                                type="text"
                                name="youtubeName"
                                value={formData.youtubeName}
                                onChange={handleChange}
                                className="w-full px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Youtube Channel Name"
                              />
                            </div>

                            {/* Youtube Channel Link */}
                            <div className="col-span-2">
                              <label className="block text-gray-700 font-bold text-sm mb-2">
                                Youtube Channel Link
                              </label>
                              <input
                                type="url"
                                name="youtubeLink"
                                value={formData.youtubeLink}
                                onChange={handleChange}
                                className="w-full px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Youtube Channel Link"
                              />
                            </div>

                            {/* Facebook Profile Link */}
                            <div className="col-span-2">
                              <label className="block text-gray-700 font-bold text-sm mb-2">
                                Facebook Profile Link
                              </label>
                              <input
                                type="url"
                                name="facebookLink"
                                value={formData.facebookLink}
                                onChange={handleChange}
                                className="w-full px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Facebook Profile Link"
                              />
                            </div>

                            {/* Instagram Profile Link */}
                            <div>
                              <label className="block text-gray-700 font-bold text-sm mb-2">
                                Instagram Profile Link
                              </label>
                              <input
                                type="url"
                                name="instagramLink"
                                value={formData.instagramLink}
                                onChange={handleChange}
                                className="w-full px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Instagram Profile Link"
                              />
                            </div>

                            {/* Twitter Profile Link */}
                            <div className="col-span-2">
                              <label className="block text-gray-700 font-bold mb-2">
                                Twitter Profile Link
                              </label>
                              <input
                                type="url"
                                name="twitterLink"
                                value={formData.twitterLink}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Twitter Profile Link"
                              />
                            </div>

                            {/* Buttons */}
                            <div className="col-span-2 flex justify-end space-x-4 mt-4">
                              <button
                                type="submit"
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                              >
                                Save
                              </button>
                              <button
                                type="button"
                                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                              >
                                Close
                              </button>
                            </div>
                          </form>
                        </div>
                      </ModalContent>
                    </ModalBody>
                  </Modal>
                </div>
                <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
                  Change Password
                </button>
              </div>
            </div>
          </div>
          <div className="h-auto bg-gray-50 flex justify-center items-center py-12">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
              <h2 className="text-3xl font-bold text-red-600 mb-6">
                Billing History
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-collapse">
                  <thead>
                    <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left border-b-2 border-gray-300">
                        Invoice Number
                      </th>
                      <th className="py-3 px-6 text-left border-b-2 border-gray-300">
                        Date
                      </th>
                      <th className="py-3 px-6 text-left border-b-2 border-gray-300">
                        Amount
                      </th>
                      <th className="py-3 px-6 text-left border-b-2 border-gray-300">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm">
                    {billingData.map((bill, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="py-3 px-6 border-b border-gray-300">
                          {bill.invoiceNumber}
                        </td>
                        <td className="py-3 px-6 border-b border-gray-300">
                          {bill.date}
                        </td>
                        <td className="py-3 px-6 border-b border-gray-300">
                          {bill.amount}
                        </td>
                        <td className="py-3 px-6 border-b border-gray-300">
                          {bill.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
