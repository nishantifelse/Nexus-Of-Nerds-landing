import React from 'react'
import { FaCheckCircle, FaLock } from "react-icons/fa";

const PricingCard = (props) => {
  return (
    <div className='bg-[#2C2B2B] py-6 sm:py-7 px-1 sm:px-5 text-white rounded-3xl w-full flex flex-col'>

      <h3 className='text-xl sm:text-2xl font-medium'>{props.package}</h3>
      <p className='text-xs sm:text-sm text-gray-300 my-2 leading-relaxed'>{props.desc}</p>

      <div className='flex items-baseline gap-1 sm:gap-2 text-xl sm:text-2xl mt-8 sm:mt-10 mb-3'>
        <p className='text-lg sm:text-xl'>₹</p>
        <span className='font-semibold'>{props.price}</span>
        <span className='text-sm sm:text-base text-gray-400 font-normal'>/ Month</span>
      </div>

      <button className='w-full border-2 rounded-3xl p-2 my-3 cursor-pointer text-sm sm:text-base hover:bg-white hover:text-black transition-colors duration-200'>
        Get Started →
      </button>

      <p className='mt-4 mb-3 text-[#FCED47] text-sm font-medium tracking-wide'>Features</p>

      <ul className='flex flex-col gap-2 sm:gap-2.5'>
        {/* {props.features.map((item, index) => (
          <li className='flex items-start gap-2 text-sm sm:text-base leading-snug' key={index}>
            <FaCheckCircle className='text-[#FCED47] mt-0.5 shrink-0 text-sm' />
            <span>{item}</span>
          </li>
        ))} */}
        <div className='flex items-center gap-5 text-2xl'>
          <FaLock className='ml-5'/>
          <p className='mt-50 relative bottom-25 text-center'> COMING SOON...</p>
        </div>
      </ul>

    </div>
  )
}

export default PricingCard