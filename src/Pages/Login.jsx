import React, { useContext, useState } from 'react'
import Logo from "../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { TfiLayoutLineSolid } from "react-icons/tfi";
// import axios from "axios"
import { AppContext } from '../context/AppContext';
// import { auth, googleProvider } from '../config/Firebase';
// import { signInWithPopup } from 'firebase/auth';

const Login = () => {
  const { url, checkVerifiedUser } = useContext(AppContext)
  const navigate = useNavigate()
  const [formData, setFormdata] = useState({
    email: "",
    password: ""
  })
  const [agreed, setAgreed] = useState(false)

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      if (!agreed) {
        alert("Please check 'Remember me' to continue")
        return
      }

      // const res = await axios.post(`${url}/api/user/login`, formData, {
      //   withCredentials: true
      // })

      // if (res.data.success) {
      //   await checkVerifiedUser()
      //   navigate("/profile")
      //   window.location.reload()
      // } else {
      //   alert(res.data.message)
      // }
    } catch (error) {
      alert(error.response?.data?.message || "Server error during login");
    }
  }

  const handleGoogleLogin = async () => {
    try {
      // const result = await signInWithPopup(auth, googleProvider);
      // const user = result.user;
      // const idToken = await user.getIdToken();

      // const res = await axios.post(
      //   `${url}/api/user/google-login`,
      //   { googleIdToken: idToken, email: user.email },
      //   { withCredentials: true }
      // );

      // if (res.data.success) {
      //   await checkVerifiedUser();
      //   navigate("/profile");
      //   window.location.reload();
      // } else {
      //   alert(res.data.message || "Google login failed");
      // }
      alert("Google login functionality is currently disabled, until we start our services");
    } catch (error) {
      alert(error.response?.data?.message || error.message || "Google login failed");
    }
  }

  return (
    <div className='w-full bg-linear-to-br from-[#080808] via-[#131212] to-[#191818] min-h-screen text-white'>
      <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-10 lg:gap-0 px-4 py-10 lg:py-0 min-h-screen'>

        {/* Brand / Left Side */}
        <div className='text-center lg:text-left lg:-mt-7.5'>
          <img src={Logo} alt="Logo" className='w-40 h-auto sm:w-56 lg:w-75 lg:h-50 mb-4 mx-auto lg:mx-0' />
          <p className='text-base sm:text-lg lg:text-xl'>Learn • Build • Innovate • Grow</p>
          <div className='mt-4 lg:mt-5'>
            <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] font-['Bricolage_Grotesque','sans-serif'] font-semibold [font-optical-sizing:auto] [font-variation-settings:'wdth'_100]">
              Welcome Back!
            </h1>
            <p className='text-base sm:text-lg lg:text-[20px]'>Please login to continue</p>
          </div>
        </div>

        {/* Card / Right Side */}
        <div className='shadow-[0_10px_30px_rgba(128,128,128,0.3)] border-2 border-white/10 rounded-3xl pt-10 pb-10 px-6 sm:px-8 w-full max-w-sm'>
          <h3 className='text-2xl lg:text-3xl ml-1'>Login</h3>
          <form className='mt-4' onSubmit={handleSubmit}>
            <input
              className='w-full mt-3 rounded-xl outline-2 outline-gray-700 p-2 bg-transparent text-white'
              type="text"
              placeholder='Username'
              name='email'
              onChange={handleChange}
              required
            />
            <input
              className='w-full mt-5 rounded-xl outline-2 outline-gray-700 p-2 bg-transparent text-white'
              type="password"
              name="password"
              placeholder='Password'
              onChange={handleChange}
              required
            />
            <div className='flex gap-2 mt-4'>
              <input type="checkbox" className='w-3' checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
              <p className='text-[13px]'>Remember me</p>
            </div>
            <button
              className='bg-green-600 w-full p-2.5 mt-5 rounded-xl cursor-pointer'
              type='submit'
            >
              Login
            </button>
            <p className='text-center text-[13px] mt-5'>
              <Link>Forgot Password?</Link>
            </p>
            <div className='mt-2'>
              <p className='flex items-center gap-2 justify-center'>
                <TfiLayoutLineSolid className='text-6xl' /> Or <TfiLayoutLineSolid className='text-6xl' />
              </p>
              <div className='flex justify-center'>
                <FcGoogle onClick={handleGoogleLogin} className='text-3xl cursor-pointer' />
              </div>
            </div>
            <div className='text-center mt-10 lg:mt-20 text-[12px]'>
              <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
              <div className='mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-5'>
                <span>Terms &amp; Conditions</span>
                <span>Support</span>
                <span>Customer Care</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
