"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const networkSlides = [
  {
    category: "Education Solutions",
    title: "VM Academy",
    image: "/vm.png",
    href: "https://www.vmacademys.com/",
    description:
      "VMAcademy (www.vmacademys.com) online education portal that provides education related services and products. Find the Course and College, which is best for you. VM Academy is India’s leading college and course selection platform with information. vmacademys.com is a one-stop-solution making course and college selection easy for students looking to pursue undergraduate (UG) and postgraduate (PG) courses in India, also accessible to users on the move through the website’s mobile site. vmacademys.com offers easy access to detailed information on career choice, courses, admission criteria, eligibility, exam, fees, placement statistics, reviews, scholarships, latest updates etc. Our motive to find the easiest way for those students who are suffering to find a good college to achieve their life goals. vmacademys.com also assists aspirants in post examination guidance; admission related queries and real insights for choosing right institutes. We offer specific information for students interested in UG/PG courses in India across the most popular educational streams – Management, Engineering, Computer Application, Medical, Dental, Pharmacy, Paramedical, Veterinary Science, Education, Law, Hotel Management, Mass Communication, Animation, Design, Architecture, Agriculture, Arts, Commerce, Science, Vocational, Aviation etc.",
  },
  {
    category: "Property Network",
    title: "VillageMyCity",
    image: "/village.png",
    href: "https://www.villagemycity.com/",
    description:
      "VillageMyCity (www.villagemycity.com) is a premier Real Estate Property Portal in India accessible anywhere, anytime. Just one click to post and sell your property items or real estate listings. VillageMyCity provides an intuitive platform for buyers, sellers, property owners, builders, and real estate agents to connect seamlessly. Our vision is 'Meet Online, Transact Offline', empowering transparent deals and complete peace of mind across residential, commercial, agricultural, and industrial real estate sectors nationwide.",
  },
  {
    category: "Career Platform",
    title: "GoJobin",
    image: "/gojobinsection-image.jpeg",
    href: "https://www.gojobin.com/",
    description:
      "GoJobin.com is India’s leading Job Site providing you the best opportunity to find the right job today! GoJobin has become a prominent name in the recruitment industry. GoJobin.com is India’s most innovative and fastest growing recruitment portal. A platform for Candidates and Employers to find their perfect matches. Our Service Online Recruitment Solution Provider, Staffing & Recruiting. GoJobin.com classified recruitment online business. GoJobin is an online employment solution for people seeking jobs and the employers who need great people. GoJobin.com is the best free Job posting site in India. GoJobin is one of the best job portals for freshers, offering opportunities to trained and experienced professionals. GoJobin is one of the most popular recruitment sites for freshers and experienced job seekers alike.",
  },
  {
    category: "Finance Support",
    title: "LOAN vidhi",
    image: "/loanslider.png",
    href: "https://www.loanvidhi.com/",
    description:
      "LOAN vidhi (www.loanvidhi.com) is a premier service provider of Insurance, Financial affairs, Monetary affairs, and Real Estate advisory across India. LoanVidhi is one of India's leading financial consultancies specializing in customized loan arrangements and insurance services. We offer our expert services to arrange both Secured and Un-Secured Loans from various top banks and financial institutions. Doing comprehensive financial planning helps our customers understand their future monetary needs, and we work towards that common objective with dedicated portfolio management services. Our aim is to bring in innovative ideas, strategic guidance, and cutting-edge technology to transform the Indian financial sector, offering hassle-free solutions for every personal and enterprise financial requirement with end-to-end guidance.",
  },
  {
    category: "Retail Network",
    title: "VMhomeMART",
    image: "/vmhomemart-image.jpeg",
    href: "https://www.vmhomemart.com/",
    description:
      "VMhomeMart (www.vmhomemart.com) represents the best of e-commerce in the fast-growing Indian retail market. The platform focuses on high-quality goods across electronics, fashion, kitchen appliances, home essentials, and daily lifestyle products. VMhomeMART is an expansive marketplace that allows users to explore, buy, and sell a wide variety of items with dynamic pricing options and transparent vendor connections. Experience seamless digital shopping with fast delivery, secure payment processing, hassle-free order tracking, and dedicated customer support.",
  },
];

function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={direction === "left" ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6"} />
    </svg>
  );
}

function getNextIndex(currentIndex) {
  return currentIndex === networkSlides.length - 1 ? 0 : currentIndex + 1;
}

function getPreviousIndex(currentIndex) {
  return currentIndex === 0 ? networkSlides.length - 1 : currentIndex - 1;
}

export default function FoundationNetworkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedSlides, setExpandedSlides] = useState({});

  const toggleExpand = (index) => {
    setExpandedSlides((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    if (isPaused || Object.values(expandedSlides).some(Boolean)) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => getNextIndex(currentIndex));
    }, 4200);

    return () => window.clearInterval(interval);
  }, [isPaused, expandedSlides]);

  return (
    <section className="bg-[#f4f6f9] px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-5xl" data-aos="fade-up">
          <div className="mb-5 flex flex-wrap items-center gap-5">
            <h2 className="text-[20px] font-bold  text-black sm:text-[32px]">
              Facilitating Global Business Networks
            </h2>
            {/* <span className="h-0.5 w-28 bg-[#4d65ff]" /> */}
          </div>
          <p className="max-w-4xl text-[16px] font-normal leading-[1.72] text-[#1d2736] sm:text-[16px]">
            We highly value collaborative relationships with our partners.
            Together, we create practical digital platforms for education,
            careers, property, finance, retail, and shared business growth.
          </p>
        </div>

        <div
          className="relative mt-12 px-2 sm:px-6 lg:px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          data-aos="fade-up"
          data-aos-delay="120"
        >
          {/* Left Outward Arrow Button */}
          <button
            type="button"
            onClick={() =>
              setActiveIndex((currentIndex) =>
                getPreviousIndex(currentIndex),
              )
            }
            className="absolute -left-3 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all hover:bg-[#0077c8] hover:text-white hover:border-[#0077c8] hover:scale-110 focus:outline-none"
            aria-label="Previous business network"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Outward Arrow Button */}
          <button
            type="button"
            onClick={() =>
              setActiveIndex((currentIndex) => getNextIndex(currentIndex))
            }
            className="absolute -right-3 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all hover:bg-[#0077c8] hover:text-white hover:border-[#0077c8] hover:scale-110 focus:outline-none"
            aria-label="Next business network"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Main Card Slider Box */}
          <div className="overflow-hidden rounded-2xl shadow-[0_22px_70px_rgba(10,31,68,0.11)] ring-1 ring-slate-200/80 bg-white">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {networkSlides.map((slide, index) => (
                <article
                  key={slide.title}
                  className="grid min-w-full items-start bg-white p-4 sm:p-5 lg:grid-cols-[0.52fr_0.48fr] lg:gap-4 lg:p-6 lg:min-h-[440px]"
                >
                  <div className="relative h-[280px] sm:h-[360px] lg:h-[400px] w-full shrink-0 overflow-hidden rounded-2xl bg-[#eef3f8]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      unoptimized
                      sizes="(min-width: 1024px) 52vw, 100vw"
                      priority={index === 0}
                      className="h-full w-full object-cover object-top rounded-2xl"
                    />
                  </div>

                  <div className="relative flex flex-col justify-center px-6 pb-12 pt-6 sm:px-10 lg:px-12 lg:py-4">
                    <span className="pointer-events-none absolute right-8 top-6 text-[48px] font-semibold leading-none text-[#1f2168]/5 sm:text-[60px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10">
                      <p className="mb-3 flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.25em] text-[#1f2168]">
                        <span className="h-px w-6 bg-[#1f2168]/50" />
                        {slide.category}
                      </p>
                      <h3 className="text-[24px] font-semibold leading-[1.15] text-[#20242d] sm:text-[28px]">
                        {slide.title}
                      </h3>
                      <p className={`mt-4 max-w-3xl text-[15px] font-normal leading-[1.65] text-[#5d6470] text-justify ${
                        expandedSlides[index] ? "" : "line-clamp-6 sm:line-clamp-8 lg:line-clamp-8"
                      }`}>
                        {slide.description}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-4">
                        <button
                          type="button"
                          onClick={() => toggleExpand(index)}
                          className="inline-flex w-fit items-center gap-2 rounded-md bg-[#20242d] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(32,36,45,0.18)] transition hover:bg-[#0077c8] group/link focus:outline-none"
                        >
                          {expandedSlides[index] ? "Read Less" : "Read More"}
                          <svg className={`h-4 w-4 transition-transform duration-300 ${expandedSlides[index] ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {networkSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${activeIndex === index
                  ? "w-9 bg-[#0077c8]"
                  : "w-2.5 bg-[#0077c8]/25 hover:bg-[#0077c8]/50"
                  }`}
                aria-label={`Show ${slide.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
