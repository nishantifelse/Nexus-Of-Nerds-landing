import React, { useState, useRef, useEffect } from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io"
import gsap from "gsap"

const faqs = [
  {
    q: "What exactly is Nexus? Is it another course platform?",
    a: [
      "Nexus is not a course platform — and we mean that seriously. We don't sell pre-recorded videos or certifications. We're an ecosystem that gives engineers and entrepreneurs direct access to mentors, curated resources, personalised roadmaps, real job opportunities, and a community of peers who've done it before. Think of it as the network your college should have given you, but didn't.",
      "If you want to watch videos, there are plenty of platforms for that. If you want to actually move forward — get a mentor, get a roadmap, get a role — that's what Nexus is for."
    ]
  },
  {
    q: "Who is Nexus built for — engineers, founders, or both?",
    a: [
      "Both — under one roof. When you sign up, you pick your path: engineer or entrepreneur. Your path shapes your roadmap, the mentors we match you with, the resources in your feed, and the opportunities shown to you.",
      "Engineers use Nexus for interview prep (FAANG, startups), system design, DSA, and finding their next role or internship. Founders use it for pitch prep, startup roadmaps, fundraising resources, co-founder connections, and investor introductions. The community and forum are shared — because the best conversations happen when both groups are in the room."
    ]
  },
  {
    q: "I'm a student — is Nexus still useful for me?",
    a: [
      "Absolutely — and honestly, the earlier the better. Most of our members wish they'd found Nexus in their second or third year of college rather than six months before placement season.",
      "As a student, you get a roadmap that tells you exactly what to build and learn over the next 12-18 months, access to mentors who can give you the industry context your professors can't, and a community of peers at the same stage. Many students have used Nexus to land PPOs, off-campus offers, and even their first startup funding — all before graduating."
    ]
  },
  {
    q: "How is Nexus different from LinkedIn or Reddit?",
    a: [
      "LinkedIn is a professional social network optimised for broadcasting — it rewards polished posts, not honest conversation. Reddit is anonymous and broad — great for discussions, but nobody's there to help you specifically.",
      "Nexus is structured around your growth. Every feature — the roadmap, the mentor matching, the forum, the opportunities — is connected. Your forum question comes with context about where you are in your roadmap. Your mentor already knows your goal before the session starts. Your job matches are filtered by what you've actually been working on. That integration is what makes it different."
    ]
  },
  {
    q: "Can I do a doubt session vs a full mentorship session?",
    a: [
      `Yes — we offer two session types. Doubt sessions are short, focused 20–30 minute slots for a specific question or problem (e.g., "I'm stuck on this DP problem" or "review my pitch slide 3"). Mentorship sessions are longer, 45–60 minute deep-dives with a regular mentor relationship built over time.`,
      "Most members mix both — doubt sessions for tactical unblocking, full sessions for strategic direction. Your plan determines how many of each you get per month."
    ]
  },
]


const FAQItem = ({ item, isOpen, onToggle }) => {
  const contentRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    const content = contentRef.current
    const inner = innerRef.current
    if (!content || !inner) return

    if (isOpen) {
      gsap.set(content, { height: 0, opacity: 0 })
      gsap.to(content, {
        height: inner.offsetHeight,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
      })
    } else {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power3.inOut",
      })
    }
  }, [isOpen])

  return (
    <div className='overflow-hidden rounded-4xl'>

      {/* Header */}
      <div
        className="flex items-center justify-between gap-3 bg-white text-black py-4 sm:py-6 px-4 sm:px-8 cursor-pointer"
        onClick={onToggle}
      >
        <h2 className='text-base sm:text-lg lg:text-xl basis-[90%]'>{item.q}</h2>
        <IoIosArrowDropdownCircle
          className={`text-xl sm:text-2xl shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Animated dropdown */}
      <div ref={contentRef} style={{ overflow: 'hidden', height: 0, opacity: 0 }}>
        <div ref={innerRef} className='bg-[#D9D9D9CC] font-medium p-4 sm:p-6 flex flex-col gap-3'>
          {item.a.map((para, j) => (
            <p key={j} className='text-sm sm:text-base leading-relaxed'>{para}</p>
          ))}
        </div>
      </div>

    </div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className='px-4 sm:px-8 lg:px-10 py-10 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12'>

      {/* Left - Title */}
      <div className='lg:mt-10 shrink-0'>
        <h1 className='text-3xl sm:text-4xl font-semibold'>FAQ</h1>
        <p className='text-sm font-medium sm:text-base text-black mt-1'>Do you have a different question? Contact us.</p>
      </div>

      {/* Right - Accordion */}
      <div className='flex flex-col gap-3 font-semibold w-full lg:max-w-2xl xl:max-w-3xl lg:mt-10 mb-5'>
        {faqs.map((item, i) => (
          <FAQItem
            key={i}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>

    </div>
  )
}

export default FAQ