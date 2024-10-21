import React, { useState } from "react";
import { useModal } from "../Extras/animated-modal";
import axios from "axios";
import cogoToast from "cogo-toast";

const PasswordChangeModal = ({ userData, loginId, getUserData }) => {
  const { setOpen } = useModal();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    currentPass: "",
    newPassword: "",
    confirmPass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Check if newPassword and confirmPass match in real time
    if (name === "confirmPass") {
      if (formData.newPassword !== value) {
        setError("New password and confirm password do not match.");
      } else {
        setError(""); // Clear error if they match
      }
    }
  };

  console.log(formData);

  const updatePassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.newPassword !== formData.confirmPass) {
      cogoToast.error("New password and confirm password do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:8282/api/v1/user/changePassword/${loginId}`,
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
      <div>
        <div className="h-96 overflow-y-auto mx-auto bg-white rounded-lg mt-4">
          <form className="grid grid-cols-2 gap-2" onSubmit={updatePassword}>
            <div className="col-span-2">
              <label className="block text-gray-700 font-bold text-sm mb-1">
                Current Password
              </label>
              <input
                type="text"
                name="currentPass"
                value={formData.currentPass}
                onChange={handleChange}
                className="w-full px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter full name"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 font-bold text-sm mb-2">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPass"
                value={formData.confirmPass}
                onChange={handleChange}
                className="w-full px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Youtube Channel Name"
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
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
      </div>
    </>
  );
};

export default PasswordChangeModal;
