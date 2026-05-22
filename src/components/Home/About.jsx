import React from 'react'
import { GiSunflower } from "react-icons/gi";

const shadowStyle = {
  boxShadow: `
    inset 0 1px 4px rgba(0,0,0,0.25),
    inset 0 -1px 3px rgba(0,0,0,0.15),
    0 4px 12px rgba(0,0,0,0.25),
    0 1px 4px rgba(0,0,0,0.18)
  `
};

const About = () => {
  return (
    <div className='px-4 sm:px-10 lg:px-20 xl:px-30'>

      {/* Row 1 */}
      <div className='flex flex-col sm:flex-row gap-3 mt-10'>

        {/* Left pill card */}
        <div
          className='bg-[#219841] sm:flex-1'
          style={{
            borderTopLeftRadius: '290px',
            borderBottomLeftRadius: '290px',
            borderTopRightRadius: '50px',
            borderBottomRightRadius: '50px',
            padding: 'clamp(1.25rem, 5vw, 2.5rem) clamp(1.75rem, 6vw, 3rem)',
            ...shadowStyle
          }}
        >
          <p className='text-white text-left mt-4 ml-5 font-medium text-sm sm:text-base lg:text-xl leading-relaxed'>
            Nexus is an ecosystem — not a course platform. We connect engineers and founders with the mentors, resources, and opportunities that actually move the needle.
          </p>
        </div>

        {/* Right rounded card */}
        <div
          className='bg-[#219841] rounded-4xl sm:flex-1'
          style={{
            padding: 'clamp(1.25rem, 5vw, 2.5rem) clamp(1.5rem, 5vw, 2.5rem)',
            ...shadowStyle
          }}
        >
          <p className='text-white font-medium text-sm sm:text-base lg:text-xl leading-relaxed'>
            We built Nexus because the gap between learning and doing is enormous — and the internet makes it worse by flooding you with content and no direction. What you actually need is access to the right people, a clear path, and real opportunities. That's what we built.
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className='flex justify-center my-3'>
        <div className='flex flex-col sm:flex-row gap-2 w-full' style={{ maxWidth: '900px' }}>

          {/* Left rounded card — wider */}
          <div
            className='bg-[#219841] rounded-4xl flex-1 sm:flex-3 text-left'
            style={{ padding: '40px', ...shadowStyle }}
          >
            <p className='text-[#FCED47] p-3 sm:p-5 font-medium text-sm sm:text-base lg:text-xl leading-relaxed'>
              "To help students, professionals, and aspiring entrepreneurs grow by providing the right mentorship, clear roadmaps, practical guidance, and opportunities."
            </p>
          </div>

          {/* Right pill card — Our Mission */}
          <div
            className='bg-[#219841] flex-1 flex items-center justify-center sm:justify-start'
            style={{
              borderTopRightRadius: '190px',
              borderBottomRightRadius: '190px',
              borderTopLeftRadius: '50px',
              borderBottomLeftRadius: '50px',
              padding: 'clamp(1.5rem, 5vw, 3.75rem) clamp(1.75rem, 6vw, 3.75rem)',
              ...shadowStyle
            }}
          >
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#FCED47]'>
              <span className='flex gap-2 items-center'>Our <GiSunflower className='text-white' /></span>
              <span>Mission</span>
            </h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About