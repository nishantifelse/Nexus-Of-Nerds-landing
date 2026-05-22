import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav_Logo from "../assets/nav_logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='bg-white w-full p-1.5 shadow-[10px_16px_30px_rgba(0,0,0,0.1)]' style={{ borderRadius: '50px' }}>
      <div className='flex items-center justify-between'>

        {/* Left - Logo */}
        <div className='ml-2 mr-5'>
          <img className='w-14 h-8' src={Nav_Logo} alt="Nav Logo" />
        </div>

        {/* Center - Desktop Nav Links */}
        <div className='hidden font-medium md:flex ml-10'>
          <ul className='flex items-center gap-5'>
            <Link to="/">Home</Link>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#f&q">F&Q</a>
          </ul>
        </div>

        {/* Right - Desktop Buttons */}
        <div className='hidden md:flex mr-2 items-center gap-2'>
          <button className='py-2 px-4 bg-black text-white rounded-3xl cursor-pointer'>
            <Link to="/login">User Login</Link>
          </button>
          <button className='py-2 px-4 bg-black text-white rounded-3xl cursor-pointer'>
            Mentor Login
          </button>
        </div>

        {/* Hamburger - Mobile Only */}
        <button
          className='md:hidden mr-4 flex flex-col justify-center items-center gap-1.5 cursor-pointer'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='md:hidden mt-2 pb-4 px-4 flex flex-col items-center gap-4'>
          <ul className='flex flex-col items-center gap-4 w-full text-center'>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#f&q" onClick={() => setMenuOpen(false)}>F&Q</a>
          </ul>
          <div className='flex flex-col gap-2 w-full'>
            <button className='py-2 px-4 bg-black text-white rounded-3xl cursor-pointer w-full'>
              <Link to="/login" onClick={() => setMenuOpen(false)}>User Login</Link>
            </button>
            <button className='py-2 px-4 bg-black text-white rounded-3xl cursor-pointer w-full'>
              Mentor Login
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar