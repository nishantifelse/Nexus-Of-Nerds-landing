import React, { useState } from 'react'
import imgage1 from "../../assets/img1_service.png"
import imgage2 from "../../assets/img2_service.png"
import imgage3 from "../../assets/img3_services.png"
import imgage4 from "../../assets/img4_service.png"
import imgage5 from "../../assets/img5_service.png"
import imgage6 from "../../assets/img6_service.png"
import imgage7 from "../../assets/img7_service.png"
import imgage8 from "../../assets/img8_service.png"
import { FaArrowRightLong } from "react-icons/fa6";

const BLACK_SHADOW =
  '0 8px 20px rgba(0,0,0,0.45), inset 0 2px 6px rgba(0,0,0,0.3)';

const engineerContent = {
  hero: {
    title: "Mentorship",
    subtitle: "1:1 Mentorship - Instant Workshop",
    description:
      "Book sessions with vetted mentors from top companies. Targeted help for your actual problem — not generic advice.",
    image: imgage4,
    stats: [
      { value: "50+", label: "Verified Mentors" },
      { value: "20+", label: "Different Domains" },
    ],
    tags: [
      "Software Development",
      "App Development",
      "DSA",
      "DevOps",
      "Career Guide",
    ],
  },
  cards: [
    {
      title: "Roadmap",
      subtitle: "Personalized Roadmap",
      description:
        "A personalised, step-by-step plan — not a syllabus, an actual sequence of actions based on your goal and timeline.",
      image: imgage1,
      pill: true,
      text_align: "right",
      header_align: "end",
    },
    {
      title: "Resources",
      subtitle: "Curated Resources",
      description:
        "Hand-picked by practitioners. Every resource is vetted — no filler, no outdated tutorials.",
      image: imgage5,
      text_align: "",
      header_align: "",
    },
    {
      title: "Interview Prep",
      subtitle: "Personalised roadmap",
      description:
        "Every mock session pairs a technical mentor with a communication mentor — because getting the answer right and explaining it clearly are two different skills.",
      image: imgage6,
      text_align: "",
      header_align: "",
    },
    {
      title: "Opportunity",
      subtitle: "Job, Internship & Open-source",
      description:
        "Not a job board — matched by your skills, roadmap, and readiness score.",
      image: imgage8,
      pill_down: true,
      show_button: true,
      button_text: "Explore Now →",
      text_align: "",
      header_align: "",
    },
  ],
};

const entrepreneurContent = {
  hero: {
    title: "Mentorship",
    subtitle: "",
    description:
      "Book sessions with vetted mentors from top Founders or startup coach. Targeted help for your actual problem — not generic advice.",
    image: imgage4,
    stats: [
      { value: "30+", label: "Expert Founders" },
      { value: "15+", label: "Industries Covered" },
    ],
    tags: [
      "Software Development",
      "App Development",
      "DSA",
      "DevOps",
      "Career Guide",
    ],
  },
  cards: [
    {
      title: "Roadmap",
      subtitle: "TRL wise roadmap",
      description:
        "A personalised, step-by-step plan — not a syllabus, an actual sequence of actions based on your goal and timeline.",
      image: imgage2,
      pill: true,
      text_align: "right",
      header_align: "end",
    },
    {
      title: "Resources",
      subtitle: "Curated resources",
      description:
        "Hand-picked by practitioners. Every resource is vetted — no filler, no outdated tutorials.",
      image: imgage5,
      text_align: "",
      header_align: "",
    },
    {
      title: "Pitch Prep",
      subtitle: "Build Pitch. Get Funded.",
      description:
        "Create investor-ready startup pitches with expert mentorship and proven strategic guidance.\n Build compelling pitch decks and confidently present your startup to investors.",
      image: imgage7,
      text_align: "",
      header_align: "",
    },
    {
      title: "Opportunity",
      subtitle: "Job, Internship & Open-source",
      description:
        "Not a job board — matched by your skills, roadmap, and readiness score.",
      image: imgage8,
      pill_down: true,
      show_button: true,
      button_text: "Explore Now →",
      text_align: "",
      header_align: "",
    },
  ],
};

const ServiceCategory = () => {
  const [active, setActive] = useState("engineer");
  const content =
    active === "engineer" ? engineerContent : entrepreneurContent;

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-10">

      {/* Toggle Buttons */}
      <div className="flex items-center justify-center mb-10 sm:mb-12">
        <div className="flex items-center gap-1 bg-white rounded-4xl shadow-sm px-2 py-2 w-fit">
          <button
            onClick={() => setActive("engineer")}
            className={`px-5 sm:px-8 py-2 rounded-3xl font-medium text-sm transition-all duration-300 cursor-pointer ${
              active === "engineer"
                ? "bg-black text-white shadow"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Engineer
          </button>

          <button
            onClick={() => setActive("entrepreneur")}
            className={`px-5 sm:px-8 py-2 rounded-3xl font-medium text-sm transition-all duration-300 cursor-pointer ${
              active === "entrepreneur"
                ? "bg-black text-white shadow"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Entrepreneur
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row justify-evenly gap-5">

        {/* Left Hero Card */}
        <div
          className="w-full lg:basis-[38%] p-4 sm:p-5 rounded-3xl bg-white overflow-hidden"
          style={{ boxShadow: BLACK_SHADOW }}
        >
          <div className="flex items-center justify-between p-2 sm:p-3">
            <h1 className="font-semibold text-xl sm:text-2xl">
              {content.hero.title} 
            </h1>

            <span className="font-bold text-xl sm:text-2xl cursor-pointer hover:translate-x-1 transition-transform">
              <FaArrowRightLong className="text-xl cursor-pointer sm:text-2xl" />
            </span>
          </div>

          <img
            className="h-44 sm:h-52 mt-4 sm:mt-6 w-full object-contain rounded-2xl"
            src={content.hero.image}
            alt={content.hero.title}
          />

          <h2 className="font-semibold text-lg sm:text-xl mt-10 sm:mt-10 px-2 sm:px-3">
            {content.hero.subtitle}
          </h2>

          <p className="mt-2 sm:mt-3 text-gray-600 px-2 sm:px-3 font-semibold text-sm leading-relaxed">
            {content.hero.description}
          </p>

          {/* Tags */}
          <div className="mt-7 sm:mt-7 px-2 sm:px-3 flex flex-wrap gap-2">
            {content.hero.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="border rounded-full px-3 py-0.5 text-xs font-semibold text-gray-700"
              >
                {tag}
              </span>
            ))}

            {content.hero.tags.slice(3).map((tag) => (
              <span
                key={tag}
                className="border rounded-full px-3 py-0.5 text-xs text-black"
              >
                {tag}
              </span>
            ))}

            <button className="bg-black text-white rounded-full px-3 py-0.5 text-xs">
              More...
            </button>
          </div>

          <hr className="mt-7 sm:mt-8 border-gray-200" />

          {/* Stats */}
          <div className="flex items-center mt-5 justify-around py-5 sm:py-6 px-4">
            {content.hero.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <h1 className="text-4xl sm:text-5xl font-semibold text-black">
                  {stat.value}
                </h1>

                <p className="text-xs sm:text-sm font-semibold text-black mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Cards Grid */}
        <div className="w-full lg:basis-[58%] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {content.cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white overflow-hidden ${
                card.pill
                  ? "rounded-[50px] sm:rounded-[150px_30px_30px_150px]"
                  : card.pill_down
                  ? "rounded-[50px] sm:rounded-[30px_150px_150px_30px]"
                  : "rounded-3xl"
              }`}
              style={{ boxShadow: BLACK_SHADOW }}
            >
              <div
                className={`h-full p-4 sm:p-5 ${
                  card.pill
                    ? "sm:pr-7 lg:pl-14 text-right items-end"
                    : ""
                } ${card.pill_down ? "sm:pr-7 lg:pl-6" : ""}`}
              >

                {/* Roadmap Right Align */}
                <div
                  className={`flex items-center ${
                    card.title === "Roadmap"
                      ? "justify-end"
                      : `justify-${card.header_align || "start"}`
                  } mb-3`}
                >
                  <h1 className="font-semibold text-lg sm:text-xl">
                    {card.title}
                  </h1>
                </div>

                <img
                  className={`h-32 sm:h-32 w-full object-contain rounded-xl ${
                    card.title === "Roadmap" ? "ml-auto" : ""
                  }`}
                  src={card.image}
                  alt={card.subtitle}
                />

                <h3
                  className={`${
                    card.title === "Roadmap"
                      ? "text-right"
                      : `text-${card.text_align || "left"}`
                  } sm:text-lg font-semibold mt-3 sm:mt-4`}
                >
                  {card.subtitle}
                </h3>

                <p
                  className={`text-black ${
                    card.title === "Roadmap"
                      ? "text-right"
                      : `text-${card.text_align || "left"}`
                  } whitespace-pre-line font-medium text-xs sm:text-sm pb-2 mt-1 leading-relaxed`}
                >
                  {card.description}
                </p>

                {card.show_button && (
                  <button className="mt-4 bg-black text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform">
                    {card.button_text}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Forum & Community */}
      <div
        className="bg-amber-50 sm:p-6 my-5 rounded-3xl overflow-hidden"
        style={{
          boxShadow: `
            0 6px 18px rgba(0,0,0,0.28),
            0 2px 6px rgba(0,0,0,0.18),
            inset 0 2px 6px rgba(0,0,0,0.12),
            inset 0 -2px 5px rgba(0,0,0,0.08)
          `, backgroundColor: '#FFFFFF'
        }}
      >
        <div className="flex justify-between p-4">
          <h1 className="text-lg sm:text-2xl font-semibold">
            Forum & Community
          </h1>

          <FaArrowRightLong className="text-xl cursor-pointer sm:text-2xl" />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start">
          <div className="p-4">
            <h3 className="font-semibold text-[20px]">
              Share, Connect & Grow Together
            </h3>

            <p className="font-semibold text-[14px]" style={{color: '#545454'}}>
              Ask questions, share achievements, discuss ideas, and build
              meaningful connections with engineers, founders, and creators.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              <span className="border-2 rounded-4xl pl-5 py-1 pr-5 text-[12px] font-medium" style={{borderWidth: '1.5px'}}>
                Share Achievements
              </span>

              <span className="border-2 rounded-4xl pl-5 py-1 pr-5 text-[12px] font-medium" style={{borderWidth: '1.5px'}}>
                Ask Questions
              </span>

              <span className="border-2 rounded-4xl pl-5 py-1 pr-5 text-[12px] font-medium" style={{borderWidth: '1.5px'}}>
                DSA
              </span>

              <span className="border-2 rounded-4xl pl-5 py-1 pr-5 text-[12px] font-medium" style={{borderWidth: '1.5px'}}>
                Discussions
              </span>

              <span className="border-2 rounded-4xl pl-5 py-1 pr-5 text-[12px] font-medium" style={{borderWidth: '1.5px'}}>
                Networking
              </span>

              <span className="border-2 rounded-4xl pl-5 py-1 pr-5 text-[12px] font-medium" style={{borderWidth: '1.5px'}}>
                Real Conversations
              </span>

              <span className="border-2 rounded-4xl pl-5 py-1 pr-5 text-[12px] font-medium" style={{borderWidth: '1.5px'}}>
                Post Ideas & Projects
              </span>
            </div>

            <div className="numbers-forum flex flex-wrap justify-between mt-10">
              <div className="text-center">
                <h1 className="n-forum text-3xl font-semibold">1000+</h1>
                <p className="t-forum mt-1 text-xl font-medium">
                  Trusted Members
                </p>
              </div>

              <div className="text-center">
                <h1 className="n-forum text-3xl font-semibold">500+</h1>
                <p className="t-forum mt-1 text-xl font-medium">
                  Active Members
                </p>
              </div>

              <div className="text-center">
                <h1 className="n-forum text-3xl font-semibold">70%</h1>
                <p className="t-forum mt-1 text-xl font-medium">
                  Engagement Rate
                </p>
              </div>
            </div>
          </div>

          <div
            className="sm:shrink-0"
            style={{
              height: "240px",
              position: "relative",
              overflow: "visible",
            }}
          >
            <img className='image-forum'
              style={{
                height: "340px",
                position: "relative",
                bottom: "100px",
              }}
              src={imgage3}
              alt="Forum and Community"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default ServiceCategory;