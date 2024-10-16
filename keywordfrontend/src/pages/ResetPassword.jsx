import cogoToast from "cogo-toast";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(true);
  const [showVerify, setShowVerify] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://doctor-dentalguru-demo.jyvflirl.a2hosted.com/api/doctor/sendOtp",
        {
          email,
        }
      );
      console.log(response);
      setShowOtp(false);
      setShowVerify(true);
      setShowReset(false);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtpAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://doctor-dentalguru-demo.jyvflirl.a2hosted.com/api/doctor/verifyOtp",
        {
          email,
          otp,
        }
      );
      console.log(response);
      setShowOtp(false);
      setShowVerify(false);
      setShowReset(true);
    } catch (error) {
      console.log(error);
      cogoToast.error("Wrong OTP!");
    }
  };

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://doctor-dentalguru-demo.jyvflirl.a2hosted.com/api/doctor/resetPassword",
        {
          email,
          password: newPassword,
        }
      );

      console.log(response);
      cogoToast.success("password update successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
            <h2 className="text-2xl font-semibold mb-6">Password Reset</h2>

            {showOtp && (
              <form className="mx-1 sendOtp" onSubmit={sendOtp}>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example3c">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send OTP
                  </button>
                </div>
              </form>
            )}

            {/* **************************************** */}
            {showVerify && (
              <form className="mx-1 verify-otp" onSubmit={verifyOtpAdmin}>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example3c">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  {" "}
                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example3c">
                      OTP
                    </label>
                    <input
                      type="text"
                      name="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="form-control"
                      placeholder="otp"
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Verify OTP
                  </button>
                </div>
              </form>
            )}

            {/* ************************************************ */}
            {showReset && (
              <form className="mx-1 reset" onSubmit={changePassword}>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example3c">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Reset Password
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
