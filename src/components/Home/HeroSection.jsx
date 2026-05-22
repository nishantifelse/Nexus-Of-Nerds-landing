import React from 'react'
import Navbar from '../Navbar';
import Avatar1 from "../../assets/avatar1.jpg"
import Avatar2 from "../../assets/avatar2.jpg"
import Avatar3 from "../../assets/avatar3.jpg"
import Avatar4 from "../../assets/avatar4.jpg"
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate()
    return (
        <div className='py-2.5 px-4 sm:px-8 lg:px-15'>
            <div className='bg-[#E7FC47] pt-2 px-4 sm:px-10 lg:px-20 rounded-bl-4xl rounded-br-4xl'>
                <Navbar />
                <div className='my-10 sm:my-14 lg:my-10 flex flex-col items-center text-center'>

                    <p className='bg-white text-black font-medium inline-block py-2 px-6 sm:px-10 rounded-4xl border text-xs sm:text-sm'>
                        ENGINEERS • ENTREPRENEURS
                    </p>

                    <h1 className='mt-3 mb-2 text-3xl sm:text-5xl lg:text-7xl font-semibold leading-tight'>
                        The gap between where you are{' '}
                        <br className='hidden sm:block' />
                        and where you want to be
                    </h1>

                    <h3 className='text-green-500 font-semibold text-3xl sm:text-5xl lg:text-7xl my-3'>
                        — we close it.
                    </h3>

                    <p className='text-xs sm:text-sm my-5 sm:my-7 max-w-xl leading-relaxed px-2'>
                        Mentorship, curated resources, roadmaps, real opportunities, Pitch —{' '}
                        <br className='hidden sm:block' />
                        and a community that pushes you forward. Everything in one place.
                    </p>

                    <div className='my-6 sm:my-0 flex flex-col sm:flex-row items-center gap-3'>
                        <button
                            onClick={() => navigate("/signup")}
                            className='w-full sm:w-auto bg-black text-white px-6 py-2.5 rounded-3xl cursor-pointer text-sm'
                        >
                            Start as an Engineer
                        </button>
                        <button
                            onClick={() => navigate("/signup")}
                            className='w-full sm:w-auto bg-black text-white px-6 py-2.5 rounded-3xl cursor-pointer text-sm'
                        >
                            Start as an Entrepreneur
                        </button>
                    </div>

                    <div className='flex items-center justify-center mt-0 sm:mt-16 lg:mt-20 pb-5 flex-wrap gap-2'>
                        <div className='flex items-center'>
                            <img className='h-9 w-9 rounded-full object-cover' src={Avatar1} alt="avatar" />
                            <img className='h-9 w-9 rounded-full object-cover -ml-2' src={Avatar2} alt="avatar" />
                            <img className='h-9 w-9 rounded-full object-cover -ml-2' src={Avatar3} alt="avatar" />
                            <img className='h-9 w-9 rounded-full object-cover -ml-2' src={Avatar4} alt="avatar" />
                        </div>
                        <p className='text-xs sm:text-sm text-center'>
                            Joined by 1000+ engineers & founders this month
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection