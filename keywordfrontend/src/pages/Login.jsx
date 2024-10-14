import React from "react";

const Login = () => {
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
              <form>
                <div className="">
                  <div className="mb-4">
                    <label className="block text-gray-700">
                      Email Address/ Mobile Number
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-64 bg-[#ff0000] text-white py-2 rounded-lg hover:bg-red-800 transition-colors"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
