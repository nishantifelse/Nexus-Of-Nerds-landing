import React, { useState, useRef, useEffect } from 'react'
import HeroSection from '../components/Home/HeroSection'
import FeaturesTextScroll from '../components/Home/FeaturesTextScroll'
import ComponentTitle from '../components/Home/ComponentTitle'
import PricingCard from '../components/Home/PricingCard'
import { FaCheckCircle } from "react-icons/fa";
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

import non_service1 from "../assets/service_1.jpeg"
import non_service2 from "../assets/service_2.png"

import { FaLaptopCode } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import FAQ from '../components/Home/FAQ'
import Services from '../components/Home/Services'
import About from '../components/Home/About'
import ServiceCategory from '../components/Home/ServiceCategory'
import SignUpSteps from '../components/Home/SignUpSteps'
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { RiStarSLine } from "react-icons/ri";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import gsap from 'gsap'

const billingOptions = [
  { label: "Monthly", val: "monthly" },
  { label: "Semi-Annually", val: "semi-annually" },
  { label: "Annually", val: "annually" },
]

const reviews = [
  {
    name: "Nishant Tiwari",
    role: "Student",
    text: "The mentorship was extremely helpful. I got clear guidance, practical advice, and a roadmap that made learning much easier.",
  },
  {
    name: "Priya Sharma",
    role: "Engineer",
    text: "Amazing platform! The mentorship sessions helped me crack my dream company interview. Highly recommend to anyone looking to level up.",
  },
  {
    name: "Rahul Gupta",
    role: "Founder",
    text: "The roadmap and VC connect features are incredibly useful. Got connected with 3 investors within a month of joining.",
  },
  {
    name: "Ananya Singh",
    role: "Student",
    text: "The curated resources saved me so much time. No filler, no outdated content — everything is practical and relevant.",
  },
]

const ReviewCard = ({ review }) => (
  <div className='bg-white text-black pb-2 rounded-2xl w-full'>
    <div className='flex items-center justify-between ml-3 sm:ml-5 gap-4 sm:gap-10'>
      <div className='flex'>
        {[...Array(5)].map((_, i) => (
          <span key={i} className='text-2xl sm:text-4xl cursor-pointer'><RiStarSLine /></span>
        ))}
      </div>
      <div className='flex'>
        <span className='text-5xl sm:text-8xl'><BiSolidQuoteSingleRight /></span>
        <span className='text-5xl sm:text-8xl relative -right-2 sm:right-10'><BiSolidQuoteSingleRight /></span>
      </div>
    </div>
    <p className='p-2 ml-2 text-sm sm:text-base'>{review.text}</p>
    <hr className='w-[80%] m-auto mt-5 text-gray-200 font-medium' />
    <div className='m-3 sm:m-5 flex items-center gap-2'>
      <span className='text-4xl sm:text-6xl'><RxAvatar /></span>
      <div>
        <h2 className='font-semibold text-sm sm:text-base'>{review.name}</h2>
        <p className='font-medium text-sm'>{review.role}</p>
      </div>
    </div>
  </div>
)

const Home = () => {
  const navigate = useNavigate()
  const [billing, setBilling] = useState("semi-annually")
  const [current, setCurrent] = useState(0)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const isAnimating = useRef(false)

  const features = ["Test1", "Test2", "Test3", "Test4"]

  const engineerTags = [
    "Every domain roadmap", "Interview prep", "Mentorship",
    "Curated Resources", "Community", "Job Opportunities"
  ]

  const founderTags = [
    "TRL wise roadmap", "VC Pitch prep", "Mentorship",
    "Resources & Community", "VC Connect", "Networking Opportunities",
  ]

  // Returns index of second visible card
  const nextIndex = (idx) => (idx + 1) % reviews.length

  const slide = (direction) => {
    if (isAnimating.current) return
    isAnimating.current = true

    const slideOut = direction === 'right' ? '-100%' : '100%'
    const slideIn = direction === 'right' ? '100%' : '-100%'

    const newCurrent = direction === 'right'
      ? (current + 2) % reviews.length
      : (current - 2 + reviews.length) % reviews.length

    // Prepare incoming cards offscreen
    gsap.set([card1Ref.current, card2Ref.current], { x: slideIn, opacity: 0 })

    // Animate out current pair (use a clone trick via opacity+x)
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrent(newCurrent)
        gsap.set([card1Ref.current, card2Ref.current], { x: 0, opacity: 1 })
        isAnimating.current = false
      }
    })

    tl.to([card1Ref.current, card2Ref.current], {
      x: slideOut,
      opacity: 0,
      duration: 0.35,
      ease: 'power2.in',
    }).set([card1Ref.current, card2Ref.current], { x: slideIn })
      .to([card1Ref.current, card2Ref.current], {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      })
  }

  // Reset position whenever current changes so cards are visible
  useEffect(() => {
    gsap.set([card1Ref.current, card2Ref.current], { x: 0, opacity: 1 })
  }, [current])

  return (
    <>
      {/* Hero */}
      <div className='min-h-screen pb-20 w-full bg-[#219841]'>
        <HeroSection />
        <FeaturesTextScroll />
      </div>

      {/* Services - Built For Builders */}
      <section id='services' className='bg-[#FFFFFF] w-full p-10 my-5'>
        <ComponentTitle
          tagLine="WHO IT'S FOR"
          title="Built For Builders"
          desc="Two paths, one ecosystem. Pick yours and we'll shape the experience around your goals."
        />
        <div className='mt-10 sm:mt-15'>
          <Services
            pic={non_service1}
            iconn={<FaLaptopCode />}
            title="Engineer"
            desc="Students and working devs aiming for top companies, open source impact, or building their own thing on the side."
            tags={engineerTags}
          />
          <Services
            pic={non_service2}
            iconn={<HiUserGroup />}
            title="Entrepreneurs"
            desc="First-time or repeat founders who need investor-ready pitches, co-founder connections, growth mentorship and roadmap to success."
            tags={founderTags}
            reverse={true}
          />
        </div>
      </section>

      {/* About */}
      <section id='about' className='bg-[#FFFFFF] w-full px-2 py-5'>
        <ComponentTitle
          tagLine="ABOUT NON"
          title={`We are Building a Better \n Ecosystem Together`}
          size='70'
        />
        <About />
      </section>

      {/* Service Category */}
      <section id='services' className='bg-[#219841] w-full pb-10 px-2 py-5 my-5'>
        <ComponentTitle
          tagLine='SERVICES'
          title="One ecosystem, everything you need"
          desc="Six pillars, one platform. Every feature is designed around one question: does this get you closer to your goal?"
        />
        <ServiceCategory />

      </section>

      {/* Signup Steps */}
      <section className='bg-[#FFFFFF] w-full px-2'>
        <ComponentTitle
          tagLine="HOW IT WORKS"
          title="From sign-up to outcome"
          desc="You don't start with an empty dashboard. You start with a plan."
        />
        <SignUpSteps />
      </section>

      {/* Pricing */}
      <section id='pricing' className='bg-[#FFFFF] w-full px-4 sm:px-8 py-5 my-5'>
        <ComponentTitle
          tagLine="Pricing"
          title="Simple, honest pricing"
          desc="Start free. Upgrade when you're ready. No tricks, no lock-in."
        />

        <div className='flex flex-col items-center mt-12 sm:mt-16 lg:mt-20'>

          {/* Cards row */}
          <div className='flex flex-col sm:flex-row items-stretch justify-center gap-5 w-full px-2 sm:px-4'>

            {/* Basic */}
            <div className='w-full sm:w-72 lg:w-90'>
              <PricingCard
                package="Basics"
                desc="Start Basics. Upgrade when you're ready. No tricks, no lock-in."
                price="XX9"
                size
                features={features}
              />
            </div>

            {/* Most Popular */}
            <div
              className='w-full sm:w-72 lg:w-90 flex flex-col rounded-3xl sm:-mt-14'
              style={{ boxShadow: "0px 5px 30px rgba(0,0,0,0.3)" }}
            >
              <h1 className='bg-[#FCED47] p-4 text-center text-lg sm:text-xl font-semibold text-black rounded-tl-3xl rounded-tr-3xl tracking-wide'>
                Most Popular
              </h1>
              <div
                className='flex-1 rounded-bl-3xl rounded-br-3xl p-5 sm:p-6 flex flex-col'
                style={{ backgroundColor: 'white' }}
              >
                <h3 className='text-xl sm:text-2xl font-bold text-gray-800'>Growth</h3>
                <p className='text-xs sm:text-sm text-gray-600 mt-1 mb-4'>
                  Start free. Upgrade when you're ready. No tricks, no lock-in.
                </p>
                <div className='flex items-end gap-1 text-2xl sm:text-3xl font-bold text-gray-800 mt-2 mb-4'>
                  <p className='text-lg sm:text-xl mb-1'>₹</p>
                  <span>XX9</span>
                  <span className='text-xs sm:text-sm font-normal text-gray-600 mb-1'>/ Month</span>
                </div>
                <button className='w-full bg-[#FCED47] text-black border-none rounded-3xl p-2.5 sm:p-3 my-3 cursor-pointer font-semibold hover:bg-yellow-400 transition-colors text-sm sm:text-base'>
                  Get Started →
                </button>
                <p className='mt-4 mb-3 text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-widest'>
                  Features
                </p>
                <ul className='flex flex-col gap-2'>
                  {/* {features.map((item, index) => (
                    <li className='flex items-center gap-2 text-gray-700 text-sm sm:text-base' key={index}>
                      <FaCheckCircle className='text-[#219841] shrink-0' /> {item}
                    </li>
                  ))} */}

                  <div className='flex items-center gap-5 text-2xl'>
                    <FaLock className='ml-5' />
                    <p className='mt-50 relative bottom-25 text-center'> COMING SOON...</p>
                  </div>
                </ul>
              </div>
            </div>

            {/* Scale */}
            <div className='w-full sm:w-72 lg:w-90'>
              <PricingCard
                package="Scale"
                desc="Start free. Upgrade when you're ready. No tricks, no lock-in."
                price="XX99"
                features={features}
              />
            </div>

          </div>

          {/* Billing Toggle + CTA */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-10 pb-8 sm:pb-10 px-4 w-full sm:ml-50'>
            <div className='flex items-center justify-center gap-1 sm:gap-2 border-2 border-gray-300 rounded-3xl py-1.5 px-2 sm:px-3 w-full sm:w-auto'>
              {billingOptions.map(({ label, val }) => {
                const isActive = billing === val
                return (
                  <span
                    key={val}
                    onClick={() => setBilling(val)}
                    className={`cursor-pointer font-medium text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 rounded-3xl transition-all whitespace-nowrap ${isActive ? 'bg-black text-white' : 'text-gray-600 hover:text-black'}`}
                  >
                    {label}
                  </span>
                )
              })}
            </div>
            <button
              onClick={() => navigate("/signup")}
              className='bg-black text-white rounded-3xl px-8 sm:px-12 py-2.5 cursor-pointer text-sm sm:text-base hover:bg-gray-800 transition-colors w-full sm:w-auto'
            >
              Start Free →
            </button>
          </div>

        </div>
      </section>

      {/* FAQ + Reviews */}
      <section id='f&q' className='bg-[#219841] p-4 sm:p-5'>
        <FAQ />

        {/* Reviews */}
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-6 p-4 sm:p-10 items-start lg:items-center justify-evenly overflow-hidden'>

          {/* Left — heading + arrows */}
          <div className='lg:basis-[30%]'>
            <span className='inline-block text-6xl sm:text-8xl'><BiSolidQuoteSingleLeft /></span>
            <span className='inline-block text-6xl sm:text-8xl relative -right-2 sm:right-10'><BiSolidQuoteSingleLeft /></span>
            <p className='ml-2 sm:ml-5 font-bold text-2xl sm:text-3xl'>See What Our <br /> Mentees Said!!</p>
            <div className='flex items-center gap-3 sm:gap-5 ml-2 sm:ml-5 mt-4'>
              <span
                className='text-2xl sm:text-3xl cursor-pointer hover:scale-110 transition-transform'
                onClick={() => slide('left')}
              >
                <FaArrowLeftLong />
              </span>
              <span className='text-7xl sm:text-8xl'><MdOutlineHorizontalRule /></span>
              <span
                className='text-2xl sm:text-3xl cursor-pointer hover:scale-110 transition-transform'
                onClick={() => slide('right')}
              >
                <FaArrowRightLong />
              </span>
            </div>
          </div>

          {/* Right — two review cards side by side, slide together */}
          <div className='lg:basis-[65%] w-full grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-hidden'>
            <div ref={card1Ref}>
              <ReviewCard review={reviews[current]} />
            </div>
            <div ref={card2Ref} className='hidden sm:block'>
              <ReviewCard review={reviews[nextIndex(current)]} />
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home