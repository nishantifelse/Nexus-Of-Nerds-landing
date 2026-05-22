import React from 'react'

const Services = ({ pic, iconn, title, desc, tags, reverse }) => {
    return (
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 px-4 sm:px-8 lg:px-16 py-8 sm:py-10`}>

            {/* Text Content */}
            <div className='w-full md:basis-[55%] lg:basis-[50%]'>
                <span className={`text-2xl sm:text-3xl ${reverse ? 'bg-[#E63B3B]' : 'bg-[#5990F6]'} rounded-full p-2 inline-flex items-center justify-center`}>
                    {iconn}
                </span>
                <h1 className='font-medium text-xl sm:text-2xl mt-2'>{title}</h1>
                <p className='my-4 font-medium sm:my-5 text-sm sm:text-base text-justify leading-relaxed'>{desc}</p>

                {/* Tags */}
                <div className='flex flex-wrap gap-2'>
                    {tags?.map((tag, i) => (
                        <p key={i} className='rounded-3xl font-medium px-3 sm:px-4 py-0.5 border-2 text-sm'>
                            {tag}
                        </p>
                    ))}
                </div>

                {/* CTA Button */}
                <div className='mt-4 sm:mt-5'>
                    <button className='bg-black text-white py-2 px-6 sm:px-8 rounded-3xl cursor-pointer text-sm sm:text-base hover:bg-gray-800 transition-colors'>
                        Explore Now →
                    </button>
                </div>
            </div>

            {/* Image */}
            <div className='w-full md:basis-[45%] lg:basis-[50%] flex justify-center'>
                <img
                    className='rounded-3xl w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover aspect-4/3'
                    src={pic}
                    alt={title}
                />
            </div>

        </div>
    )
}

export default Services