import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    
    <footer className='bg-black text-white pb-5 p-15'>
      <div className='p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

        {/* Col 1 - Brand */}
        <div>
          <img className='h-24 w-32 object-contain' src={Logo} alt="logo" />
          <p className='text-gray-400 mt-1'>Learn • Build • Grow</p>
          <p className='my-5 text-gray-400 text-sm leading-relaxed'>
            Providing top-tier roadmaps, mentorship, and community
            to advance your skills and career. Stay connected and keep learning.
          </p>

          <h4 className='text-xl font-bold mt-8 mb-3'>Contact</h4>
          <p className='text-gray-400 text-sm'>test@gmail.com</p>
          <p className='text-gray-400 text-sm mt-1'>+91 9876543210</p>
          <address className='my-5 text-gray-400 text-sm not-italic leading-relaxed'>
            Vivekananda Global University <br />
            Jagatpura, Jaipur 302017
          </address>
          <div className='mt-10 flex items-center gap-10 text-xl'>
            <FaXTwitter />
            <FaDiscord />
            <FaLinkedin />
            <FaFacebook />
            <FaSquareInstagram />
          </div>
        </div>

        {/* Col 2 - Quick Links */}
        <div className='mt-0 sm:mt-5'>
          <h2 className='text-xl font-bold'>Quick Links</h2>
          <div className='flex flex-col mt-5'>
            <Link className='mt-3 text-gray-400 text-sm hover:text-white transition-colors'>Home</Link>
            <Link className='mt-3 text-gray-400 text-sm hover:text-white transition-colors'>About</Link>
            <Link className='mt-3 text-gray-400 text-sm hover:text-white transition-colors'>Services</Link>
            <Link className='mt-3 text-gray-400 text-sm hover:text-white transition-colors'>Careers / Opportunity</Link>
            <Link className='mt-3 text-gray-400 text-sm hover:text-white transition-colors'>Mentorship</Link>
          </div>
        </div>

        {/* Col 3 - Explore */}
        <div className='mt-0 sm:mt-5'>
          <h2 className='text-xl font-bold'>Explore</h2>
          <div className='flex flex-col mt-5'>
            <Link className='mt-3 text-gray-400 text-sm hover:text-white transition-colors'>Roadmaps</Link>
            <Link className='mt-3 text-gray-400 text-sm hover:text-white transition-colors'>Resources</Link>
            <Link className='mt-3 text-gray-400 text-sm hover:text-white transition-colors'>Forum</Link>
            <Link className='mt-3 text-gray-400 text-sm hover:text-white transition-colors'>Community</Link>
          </div>
        </div>

        {/* Col 4 - Legal */}
        <div className='mt-0 sm:mt-5'>
          <h2 className='text-xl font-bold'>Legal</h2>
          <div className='flex flex-col mt-5'>
            <Link className='mt-3 text-gray-400 text-sm hover:text-white transition-colors'>Terms & Conditions</Link>
            <Link className='mt-3 text-gray-400 text-sm hover:text-white transition-colors'>Privacy Policy</Link>
            <Link className='mt-3 text-gray-400 text-sm hover:text-white transition-colors'>Code Of Conduct</Link>
          </div>
        </div>

        {/* Newsletter */}
       <div className='sm:col-span-2 lg:col-start-3 lg:col-span-2 min-w-0 lg:relative lg:-top-50'>
          <h2 className='font-bold text-xl leading-snug'>
            Get in touch. Subscribe to our Newsletter
          </h2>
          <div className='flex items-center mt-4 bg-gray-800 rounded-3xl px-3 py-1 w-full min-w-0'>
            <input
              type="email"
              placeholder='your@email.com'
              className='min-w-0 flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-500 py-2 px-2'
            />
            <button className='shrink-0 bg-white text-black text-sm font-semibold px-4 py-2 rounded-3xl hover:bg-gray-200 transition-colors whitespace-nowrap ml-2'>
              Subscribe
            </button>
          </div>
        </div>


      </div>
    </footer>
        <div className='bg-black text-white pb-5'>
          <hr />
        <p className='font-medium text-center mt-5'>@{new Date().getFullYear()} Nexus of Nerds . all right reserved.</p>
        </div>
    </>
  )
}

export default Footer