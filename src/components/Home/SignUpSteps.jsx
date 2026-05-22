import React from 'react'
import curvebg from '../../assets/curvebg.png';

const shadowStyle = {
    borderRadius: '200px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.5), inset 0 2px 8px rgba(0,0,0,0.35)'
};

const pillStyle = {
    borderRadius: '100px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.5), inset 0 2px 8px rgba(0,0,0,0.35)'
};

const SignUpSteps = () => {
    return (
        <div className='flex flex-wrap justify-evenly p-10' style={{ backgroundImage: `url(${curvebg})`, backgroundPosition : 'center'}}>

            {/* row 1 */}
            <div className='mt-5 mr-2 flex flex-col'>
                <div className='bg-[#219841] p-5 w-50 flex-1' style={shadowStyle}>
                    <p className='text-white font-semibold mt-10 mb-5 p-2'>
                        1. Pick your path Engineer or founder — your path shapes your roadmap, mentor matches, and resource feed from day one. Every feature adapts to the path you choose, from opportunities surfaced to mentors recommended. Most members find their first choice is exactly right.
                    </p>
                </div>
                <div className='bg-[#219841] mt-5 p-5' style={pillStyle}>
                    <div className='flex gap-2 items-center'>
                        <span className='bg-yellow-300 py-3 px-5 font-semibold rounded-full'>1</span>
                        <h3 className='text-white font-semibold'>Pick your <br /> path</h3>
                    </div>
                </div>
            </div>

            {/* row 2 */}
            <div className='mt-0 mr-2 flex flex-col'>
                <div className='bg-[#219841] mt-5 p-5' style={pillStyle}>
                    <div className='flex gap-2 items-center'>
                        <span className='bg-yellow-300 py-3 px-5 font-semibold rounded-full'>2</span>
                        <h3 className='text-white font-semibold'>Get <br /> your <br /> roadmap</h3>
                    </div>
                </div>
                <div className='bg-[#219841] p-5 w-50 mt-3 flex-1' style={shadowStyle}>
                    <p className='text-white font-semibold mt-10 mb-5 p-2'>
                        Based on your goal, you receive a step-by-step plan — not a list of courses, an actual sequence of actions. Each step is prioritised by impact, not a generic syllabus. Whether 6 months from a FAANG interview or 6 weeks from a pitch, the roadmap tells you exactly what to do next.
                    </p>
                </div>
            </div>

            {/* row 3 */}
            <div className='mt-5 mr-2 flex flex-col'>
                <div className='bg-[#219841] p-5 w-50 flex-1' style={shadowStyle}>
                    <p className='text-white font-semibold mt-10 mb-5 p-2' style={{ fontSize: '17px' }}>
                        Find a mentor with the exact background you need — book in minutes, no cold emails, no gatekeeping. Fill in a short context form so your mentor arrives prepared. After the session, you get a written summary and action items so nothing is lost.
                    </p>
                </div>
                <div className='bg-[#219841] mt-5 p-5' style={pillStyle}>
                    <div className='flex gap-2 items-center'>
                        <span className='bg-yellow-300 py-3 px-5 font-semibold rounded-full'>3</span>
                        <h3 className='text-white font-semibold'>Book <br /> a mentor</h3>
                    </div>
                </div>
            </div>

            {/* row 4 */}
            <div className='mt-0 mr-2 flex flex-col'>
                <div className='bg-[#219841] mt-5 p-5' style={pillStyle}>
                    <div className='flex gap-2 items-center'>
                        <span className='bg-yellow-300 py-3 px-5 font-semibold rounded-full'>4</span>
                        <h3 className='text-white font-semibold'>Engage <br /> With <br /> Network</h3>
                    </div>
                </div>
                <div className='bg-[#219841] p-5 w-50 mt-3 flex-1' style={shadowStyle}>
                    <p className='text-white font-semibold mt-10 mb-5 p-2' style={{ fontSize: "17px" }}>
                        Ask in the forum, find collaborators, and connect with peers working on the same things. Every member is verified and goal-oriented, so the advice is real and conversations stay useful. Post at midnight, have three thoughtful responses by morning.
                    </p>
                </div>
            </div>

            {/* row 5 */}
            <div className='mt-5 mr-2 flex flex-col'>
                <div className='bg-[#219841] p-5 w-50 flex-1' style={shadowStyle}>
                    <p className='text-white font-semibold mt-10 mb-5 p-2' style={{ fontSize: '18px' }}>
                        When you're ready — apply to jobs, close a round, or ship something real from within the ecosystem. Opportunities come with context, match scores, and often a warm introduction through a mentor already in the room.
                    </p>
                </div>
                <div className='bg-[#219841] mt-5 p-5' style={pillStyle}>
                    <div className='flex gap-2 items-center'>
                        <span className='bg-yellow-300 py-3 px-5 font-semibold rounded-full'>5</span>
                        <h3 className='text-white font-semibold'>Land the <br /> opportunity</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUpSteps