import React, { useEffect, useState } from "react";
import { useModal } from "../Extras/animated-modal";
import cogoToast from "cogo-toast";
import axios from "axios";

const UpdateDetailsForm = ({ userData, loginId, getUserData }) => {
  console.log(userData);
  console.log(loginId);

  const { setOpen } = useModal();
  const [loading, setLoading] = useState(false);
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

  console.log(formData);

  useEffect(() => {
    setFormData({
      fullName: userData[0]?.Name,
      email: userData[0]?.EmailAddress,
      youtubeName: userData[0]?.channel_name,
      youtubeLink: userData[0]?.channel_link,
      facebookLink: userData[0]?.facebook,
      instagramLink: userData[0]?.instagram,
      twitterLink: userData[0]?.twitter,
    });
  }, [userData]);

  const updateUserData = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(
        `http://localhost:8282/api/v1/user/editUserDetails/${loginId}`,
        formData
      );
      console.log(response);
      cogoToast.success("data updated successfuly");
      setLoading(false);
      getUserData();
      setOpen(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-96 overflow-y-auto mx-auto bg-white rounded-lg mt-4">
        <form className="grid grid-cols-2 gap-2" onSubmit={updateUserData}>
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

          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Twitter Profile Link
            </label>
            <input
              type="url"
              name="twitterLink"
              value={formData.twitterLink}
              onChange={handleChange}
              className="w-full px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Twitter Profile Link"
            />
          </div>

          <div className="col-span-2 flex justify-start space-x-4 mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateDetailsForm;
