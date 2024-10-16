import axios from "axios";
import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Signup = () => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.value);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    dob: "",
    password: "",
    country: "",
    state: "",
    city: "",
    address: "",
    postcode: "",
    plan: params.value,
    charges: params.value === "monthly" ? 300 : 730,
    paymentStatus: "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const onlyNumbers = value.replace(/\D/g, "");
      if (onlyNumbers.length > 10) {
        return;
      }

      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: onlyNumbers,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  console.log(formData);

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8282/api/v1/user/user-registration",
        formData
      );
      cogoToast.success("user registered successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
      cogoToast.error("user registeration failed!");
    }
  };

  return (
    <>
      <div className="flex space-x-2 my-6 mb-12 mx-12">
        <div className="flex-1">
          <div className="bg-red-300 h-96 rounded-xl w-full mt-12 items-center flex justify-items-center p-12">
            <img
              src="https://res.cloudinary.com/antrix/image/upload/v1728712971/keywordsforyou/keywordforulogo_koel1o.png"
              alt=""
              className=""
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-center h-auto mt-10 bg-white">
            <div className="bg-white p-8 rounded-lg shadow-xl shadow-red-300 w-full max-w-lg">
              <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
              <form onSubmit={registerUser}>
                <div className="flex space-x-2">
                  <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                      type="text"
                      placeholder="Fullname"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="mb-4">
                    <label className="block text-gray-700">Mobile</label>
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Country</label>
                    <input
                      type="text"
                      placeholder="Country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="mb-4">
                    <label className="block text-gray-700">State</label>
                    <input
                      type="text"
                      placeholder="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">City</label>
                    <input
                      type="text"
                      placeholder="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
                {/* <div className="flex space-x-2">
                  <div className="mb-4">
                    <label className="block text-gray-700">Address</label>
                    <input
                      type="text"
                      placeholder="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div> */}
                <div className="flex space-x-2">
                  <div className="mb-4">
                    <label className="block text-gray-700">Post Code</label>
                    <input
                      type="text"
                      placeholder="Postal Code"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700">Address</label>
                    <input
                      type="text"
                      placeholder="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="mb-4">
                    <label className="block text-gray-700">Date of Birth</label>
                    <input
                      type="date"
                      placeholder="dd-mm-yyyy"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                      className="w-52 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  NEXT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="paypal-button-container"></div>
    </>
  );
};

export default Signup;
