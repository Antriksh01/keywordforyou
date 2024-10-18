import axios from "axios";
import cogoToast from "cogo-toast";
import React, { useState } from "react";
import { IoEye, IoEyeOffOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../redux/user/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.currentUser);
  console.log(user);

  const userLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8282/api/v1/user/userLogin",
        {
          email,
          password,
        }
      );

      console.log(response.data);
      setLoading(false);
      // cogoToast.success(response.data.message);
      // setLocalhost(response.data);
      if (response.data.success) {
        // sendOtp();
        cogoToast.success(response.data.message);
        dispatch(setUser(response.data.user));
        setLoading(false);
        navigate("/user-profile");
        // setPopupVisible(true);
      } else {
        setLoading(false);
        cogoToast.error(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log("Axios error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setLoading(false);
        // If there is a response object and it contains a message property
        cogoToast.info(error.response.data.message);
      } else {
        setLoading(false);
        // If there is no response object or no message property
        cogoToast.error("An error occurred while processing your request.");
      }
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
          <div className="flex items-center justify-center h-96 mt-10 bg-white">
            <div className="bg-white p-8 rounded-lg shadow-xl shadow-red-300 w-full max-w-lg">
              <h2 className="text-2xl font-semibold mb-6">Login</h2>
              <form onSubmit={userLogin}>
                <div className="">
                  <div className="mb-4">
                    <label className="block text-gray-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="First Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="mb-4 relative">
                    <label className="block text-gray-700">Password</label>
                    <input
                      name="password"
                      type={show ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                    <div className="absolute cursor-pointer right-3 top-9">
                      {show ? (
                        <IoEye onClick={() => setShow(false)} />
                      ) : (
                        <IoEyeOffOutline onClick={() => setShow(true)} />
                      )}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-64 bg-[#ff0000] text-white py-2 rounded-lg hover:bg-red-800 transition-colors"
                >
                  {loading ? "Login..." : "Login"}{" "}
                </button>
              </form>
              <div>
                <h2>
                  <Link to="/reset-password">Forgot Password</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
