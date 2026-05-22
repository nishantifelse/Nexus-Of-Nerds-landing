import React, { useContext, useState } from 'react'
import Logo from "../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { RiArrowRightLongLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
// import axios from "axios"
import { AppContext } from '../context/AppContext';
// import { auth, googleProvider } from '../config/Firebase';
// import { signInWithPopup } from 'firebase/auth';

const SignUp = () => {
  const { url, checkVerifiedUser } = useContext(AppContext)
  const [formState, setFormState] = useState("initial");
  const [checked, setChecked] = useState(false);
  const [toggleDepartment, setToggleDepartment] = useState("engineering");

  const navigate = useNavigate()

  const [otpInput, setOtpInput] = useState("");
  const [otpToken, setOtpToken] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);

  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);

  const [googleUser, setGoogleUser] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      // const result = await signInWithPopup(auth, googleProvider);
      // const user = result.user;

      // Pre-fill name/email from Google, then jump straight to final step
      setFormData(prev => ({
        ...prev,
        firstName: user.displayName?.split(" ")[0] || "",
        lastName: user.displayName?.split(" ").slice(1).join(" ") || "",
        email: user.email || "",
      }));
      // setGoogleUser(user); // store Google user for later use
      // setFormState("final"); // skip OTP, go straight to final step
      alert("Google login functionality is currently disabled, until we start our services");ol
    } catch (error) {
      alert(error.message || "Google sign-in failed");
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
    cpassword: "",
    profileBio: "",
    currentProfession: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setImage(file);
    }
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.contact &&
    formData.password &&
    formData.cpassword &&
    checked;

  const handleSendOtp = async () => {
    if (formData.password !== formData.cpassword) {
      alert("Passwords do not match");
      return;
    }

    setOtpLoading(true);
    try {
      // const res = await axios.post(`${url}/api/user/send-otp`, {
      //   email: formData.email,
      //   contact: formData.contact,
      // });

      // if (res.data.success) {
      //   setOtpToken(res.data.otpToken);
      //   setOtpSent(true);
      //   setFormState("otp");
      //   alert("OTP sent to your email / phone!");
      // } else {
      //   alert(res.data.message || "Failed to send OTP");
      // }
      alert("Google login functionality is currently disabled, until we start our services");
    } catch (error) {
      alert(error.response?.data?.message || "Server error while sending OTP");
    } finally {
      // setOtpLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otpInput.trim()) {
      alert("Please enter the OTP");
      return;
    }

    setVerifyLoading(true);
    try {
      // const res = await axios.post(`${url}/api/user/verify-otp`, {
      //   otp: otpInput,
      //   otpToken,
      // });

      // if (res.data.success) {
      //   alert("OTP verified successfully!");
      //   setFormState("final");
      // } else {
      //   alert(res.data.message || "Invalid OTP");
      // }
    } catch (error) {
      alert(error.response?.data?.message || "Server error while verifying OTP");
    } finally {
      // setVerifyLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.currentProfession) {
      alert("Please select your profession");
      return;
    }

    if(!formData.profileBio) {
      alert("Profile Bio is required!");
      return;
    }

    try {
      const formPayload = new FormData();
      Object.keys(formData).forEach((key) => formPayload.append(key, formData[key]));
      formPayload.append("department", toggleDepartment);
      if (image) formPayload.append("profilePic", image);

      // If Google user: send Firebase UID + idToken instead of OTP
      // if (googleUser) {
      //   const idToken = await googleUser.getIdToken();
      //   formPayload.append("googleIdToken", idToken);
      //   formPayload.append("googleUid", googleUser.uid);
      // } else {
      //   formPayload.append("otpToken", otpToken);
      // }

      // const endpoint = googleUser
      //   ? `${url}/api/user/google-signup`   // new backend route
      //   : `${url}/api/user/signup`;         // existing route

      // const res = await axios.post(endpoint, formPayload, {
      //   headers: { "Content-Type": "multipart/form-data" },
      //   withCredentials: true,
      // });

      // if (res.data.success) {
      //   await checkVerifiedUser();
      //   alert(res.data.message);
      //   navigate("/profile");
      // } else {
      //   alert("Signup failed: " + (res.data.message || ""));
      // }

      alert("Google login functionality is currently disabled, until we start our services");
    } catch (error) {
      alert(error.response?.data?.message || "Server error during signup");
    }
  };

  return (
    <div className='w-full bg-linear-to-br from-[#080808] via-[#131212] to-[#191818] min-h-screen text-white'>

      <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-10 px-4 py-10 lg:py-0 lg:min-h-screen'>

        {/* LEFT */}
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left lg:mt-0'>
          <img src={Logo} alt="Logo" className='w-48 h-32 sm:w-60 sm:h-40 lg:w-75 lg:h-50 mb-4 lg:mb-6' />
          <p className='text-base sm:text-lg lg:text-xl'>Learn • Build • Innovate • Grow</p>
          <div className='mt-4 lg:mt-5'>
            <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-['Bricolage_Grotesque'] font-semibold">
              Welcome !
            </h1>
            <p className='text-lg sm:text-xl'>Please signup to continue</p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className='w-full max-w-sm sm:max-w-md shadow-[0_10px_30px_rgba(128,128,128,0.3)] border border-gray-600 rounded-3xl pt-5 pb-5 px-5 sm:px-7'>

          <h3 className='text-2xl sm:text-3xl ml-1'>SignUp</h3>
          <p className='mt-2 ml-1 text-sm sm:text-base'>
            {formState === "initial" && "Just some steps to get you in"}
            {formState === "otp" && "Enter the OTP sent to your email / phone"}
            {formState === "final" && "Almost there — complete your profile"}
          </p>

          <form className='mt-5' onSubmit={handleSubmit}>

            {/* DEPARTMENT TOGGLE */}
            <div className='border border-gray-600 bg-gray-700 flex p-1 rounded-2xl'>
              <button
                type="button"
                onClick={() => setToggleDepartment("engineering")}
                className={`w-full mr-1 p-2 rounded-xl text-sm sm:text-base transition
                  ${toggleDepartment === "engineering" ? "bg-white text-black" : "text-white"}`}
              >
                Engineering
              </button>
              <button
                type="button"
                onClick={() => setToggleDepartment("entrepreneurship")}
                className={`w-full ml-1 p-2 rounded-xl text-sm sm:text-base transition
                  ${toggleDepartment === "entrepreneurship" ? "bg-white text-black" : "text-white"}`}
              >
                Entrepreneurship
              </button>
            </div>

            {/* STEP 1 */}
            {formState === "initial" && (
              <>
                <div className='flex flex-col sm:flex-row mt-1 gap-0 sm:gap-0'>
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                    className='w-full mt-3 sm:mr-2 rounded-xl outline-2 outline-gray-700 p-2 text-sm sm:text-base bg-transparent'
                    placeholder='First Name'
                  />
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                    className='w-full mt-3 sm:ml-2 rounded-xl outline-2 outline-gray-700 p-2 text-sm sm:text-base bg-transparent'
                    placeholder='Last Name'
                  />
                </div>

                <input
                  type="text"
                  name="contact"
                  onChange={handleChange}
                  value={formData.contact}
                  className='w-full mt-3 rounded-xl outline-2 outline-gray-700 p-2 text-sm sm:text-base bg-transparent'
                  placeholder='Phone'
                />

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className='w-full mt-3 rounded-xl outline-2 outline-gray-700 p-2 text-sm sm:text-base bg-transparent'
                  placeholder='Email'
                />

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  className='w-full mt-5 rounded-xl outline-2 outline-gray-700 p-2 text-sm sm:text-base bg-transparent'
                  placeholder='Password'
                />

                <input
                  type="password"
                  name="cpassword"
                  onChange={handleChange}
                  value={formData.cpassword}
                  className='w-full mt-4 rounded-xl outline-2 outline-gray-700 p-2 text-sm sm:text-base bg-transparent'
                  placeholder='Confirm Password'
                />

                <div className='flex gap-2 mt-4 items-center'>
                  <input
                    type="checkbox"
                    className='w-4 h-4 shrink-0'
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                  <p className='text-xs sm:text-[13px]'>
                    I agree with <span className='text-amber-300'>Terms & Conditions</span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={!isFormValid || otpLoading}
                  className={`w-full flex items-center justify-center gap-1.5 p-2.5 mt-4 rounded-xl text-sm sm:text-base transition
                    ${isFormValid && !otpLoading ? "bg-green-600 cursor-pointer" : "bg-gray-600 cursor-not-allowed"}`}
                >
                  {otpLoading ? "Sending..." : (<>Send OTP <RiArrowRightLongLine /></>)}
                </button>

                <div className='mt-3'>
                  <p className='flex items-center gap-1.5 justify-center text-sm'>
                    <TfiLayoutLineSolid className='text-5xl sm:text-6xl' />
                    Or
                    <TfiLayoutLineSolid className='text-5xl sm:text-6xl' />
                  </p>
                  <div className='flex justify-center'>
                    <FcGoogle onClick={handleGoogleSignIn} className='text-3xl cursor-pointer' />
                  </div>
                </div>
              </>
            )}

            {/* STEP 2 */}
            {formState === "otp" && (
              <>
                <p className='mt-4 text-sm text-gray-400'>
                  OTP sent to <span className='text-white'>{formData.email}</span>
                </p>

                <input
                  type="text"
                  maxLength={6}
                  value={otpInput}
                  onChange={(e) => setOtpInput(e.target.value)}
                  className='w-full mt-4 rounded-xl outline-2 outline-gray-700 p-3 text-center text-xl tracking-[0.5em] bg-transparent'
                  placeholder='------'
                />

                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={verifyLoading}
                  className={`w-full flex items-center justify-center gap-2 p-2.5 mt-5 rounded-xl text-sm sm:text-base transition
                    ${!verifyLoading ? "bg-green-600 cursor-pointer" : "bg-gray-600 cursor-not-allowed"}`}
                >
                  {verifyLoading ? "Verifying..." : (<>Verify OTP <RiArrowRightLongLine /></>)}
                </button>

                <button
                  type="button"
                  onClick={() => { setOtpSent(false); setFormState("initial"); }}
                  className='w-full mt-3 text-sm text-gray-400 underline'
                >
                  ← Go back & edit details
                </button>

                <p className='text-center text-xs text-gray-500 mt-3'>
                  Didn't receive it?{" "}
                  <span
                    className='text-amber-300 cursor-pointer underline'
                    onClick={handleSendOtp}
                  >
                    Resend OTP
                  </span>
                </p>
              </>
            )}

            {/* STEP 3 */}
            {formState === "final" && (
              <>
                <div className='text-[80px] sm:text-[100px] flex items-center justify-center mt-5'>
                  <label className="cursor-pointer">
                    <input type="file" hidden accept="image/*" onChange={handleImageChange} />
                    {preview ? (
                      <img
                        src={preview}
                        alt="preview"
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
                      />
                    ) : (
                      <RxAvatar />
                    )}
                  </label>
                </div>
                <p className='text-center text-xs text-gray-400 mt-1'>Tap to upload profile picture</p>

                <textarea
                  name="profileBio"
                  onChange={handleChange}
                  value={formData.profileBio}
                  className='w-full h-28 sm:h-30 resize-y outline-2 outline-gray-700 p-2 text-white rounded-xl mt-5 text-sm sm:text-base bg-transparent'
                  placeholder='About Yourself...'
                />

                <div className='border-2 border-amber-50 text-white mt-5 rounded-xl overflow-hidden'>
                  <select
                    name="currentProfession"
                    onChange={handleChange}
                    value={formData.currentProfession}
                    className='w-full p-2 bg-[#131212] text-sm sm:text-base'
                  >
                    <option value="" disabled>Select your profession</option>
                    <option value="School Student">School Student</option>
                    <option value="College Student">College Student</option>
                    <option value="IT Professional">IT Professional</option>
                  </select>
                </div>

                <button
                  className='w-full p-2.5 mt-5 rounded-xl transition bg-green-600 cursor-pointer text-sm sm:text-base'
                  type='submit'
                >
                  SignUp
                </button>
              </>
            )}

            <div className='text-center mt-5 text-[11px] sm:text-[12px]'>
              <p>
                Already Registered? <Link to="/login">Login</Link>
              </p>
              <div className='mt-3 flex items-center justify-center gap-3 sm:gap-5 flex-wrap'>
                <span>Terms & Conditions</span>
                <span>Support</span>
                <span>Customer Care</span>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;