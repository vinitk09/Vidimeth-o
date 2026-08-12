"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const networkSlides = [
  {
    category: "Education Solutions",
    title: "VM Academy",
    image: "/vm.png",
    href: "https://www.vmacademys.com/",
    tags: ["Admissions", "Courses", "Guidance", "Campus"],
    description:
      "VMAcademy (www.vmacademys.com) online education portal that provides education related services and products. Find the Course and College, which is best for you. VM Academy is India’s leading college and course selection platform with information. vmacademys.com is a one-stop-solution making course and college selection easy for students looking to pursue undergraduate (UG) and postgraduate (PG) courses in India, also accessible to users on the move through the website’s mobile site. vmacademys.com offers easy access to detailed information on career choice, courses, admission criteria, eligibility, exam, fees, placement statistics, reviews, scholarships, latest updates etc. Our motive to find the easiest way for those students who are suffering to find a good college to achieve their life goals. vmacademys.com also assists aspirants in post examination guidance; admission related queries and real insights for choosing right institutes. We offer specific information for students interested in UG/PG courses in India across the most popular educational streams – Management, Engineering, Computer Application, Medical, Dental, Pharmacy, Paramedical, Veterinary Science, Education, Law, Hotel Management, Mass Communication, Animation, Design, Architecture, Agriculture, Arts, Commerce, Science, Vocational, Aviation etc.",
  },
  {
    category: "Property Network",
    title: "Village My City",
    image: "/village.png",
    href: "https://www.villagemycity.com/",
    tags: ["Property", "Listing", "Local", "Connect"],
    description:
      "VillageMyCity (www.villagemycity.com) is a Real Estate Property Portal in India. anywhere, any time; Just One Click to Sell your Items or Products. VillageMyCity platform for finding buyers and sellers to purchase or sell goods and services. Our vision for buyers and sellers is to “Meet Online, transact offline”. Post your Ads: Individual Owner, Builder & Promoters and Agents & Dealers.",
  },
  {
    category: "Career Platform",
    title: "GoJobin",
    image: "/gojobinsection-image.jpeg",
    href: "https://www.gojobin.com/",
    tags: ["Jobs", "Hiring", "Training", "Career"],
    description:
      "Gojobin.com India’s leading Job Site provides you the best opportunity to find the right job today! GoJobin has become a prominent name in the recruitment industry. Gojobin.com is India’s most innovative and fastest growing recruitment portal. A platform for Candidates and Employers to find their perfect matches. Our Service Online Recruitment Solution Provider, Staffing & Recruiting. Gojobin.com classified recruitment online business. GoJobin is an online employment solution for people seeking jobs and the employers who need great people. Gojobin.com is the best free Job posting sites in India. GoJobin is one of the best job portals for freshers, offers opportunities to trained and experienced professionals, useful if you are a fresher who is searching for a job. GoJobin is the most popular sites for freshers and user reviews are outstanding when compared to other job sites in India.",
  },
  {
    category: "Finance Support",
    title: "Loan Vidhi",
    image: "/loanslider.png",
    href: "https://www.loanvidhi.com/",
    tags: ["Loans", "Finance", "Planning", "Support"],
    description:
      "LoanVidhi is a service provider of Insurance, Financial affairs, Monetary affairs, Real Estate affairs. LoanVidhi is one of the leading financial consultants who deal in loans & Insurance services. LoanVidhi offering our services to arrange Secured and Un-Secured Loans from various banks, doing financial planning which helps the customer to understand his future needs and we work towards that common objective which does include Portfolio management services. Our aim is to bring in innovative ideas and cutting edge technology to transform the Indian financial sector.",
  },
  {
    category: "Retail Network",
    title: "VM Home Mart",
    image: "/vmhomemart-image.jpeg",
    href: "https://www.vmhomemart.com/",
    tags: ["Home", "Retail", "Shopping", "Lifestyle"],
    description:
      "VMhomeMart (www.vmhomemart.com) is the best of e-commerce in the fast-growing Indian market. The company focuses on goods such as electronics, fashion, kitchen item etc. VMhomeMART is a marketplace that allows users to offer, sell and buy just about anything in a variety of pricing formats and locations. The actual contract for sale is directly between the sellers and buyers. VMhomeMART a complete online shopping store.",
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

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => getNextIndex(currentIndex));
    }, 4200);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="bg-[#f4f6f9] px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-5xl" data-aos="fade-up">
          <div className="mb-5 flex flex-wrap items-center gap-5">
            <h2 className="text-[20px] font-bold leading-[1.22] text-black sm:text-[30px]">
              Facilitating Global Business Networks
            </h2>
            <span className="h-0.5 w-28 bg-[#4d65ff]" />
          </div>
          <p className="max-w-4xl text-[16px] font-normal leading-[1.72] text-[#1d2736] sm:text-[16px]">
            We highly value collaborative relationships with our partners.
            Together, we create practical digital platforms for education,
            careers, property, finance, retail, and shared business growth.
          </p>
        </div>

        <div
          className="mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-[0_22px_70px_rgba(10,31,68,0.11)] ring-1 ring-slate-200/80">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {networkSlides.map((slide, index) => (
                <article
                  key={slide.title}
                  className="grid min-w-full items-stretch bg-white p-4 sm:p-5 lg:grid-cols-[0.52fr_0.48fr] lg:gap-4 lg:p-6 lg:min-h-[440px]"
                >
                  <div className="relative min-h-[260px] w-full overflow-hidden rounded-2xl bg-[#eef3f8] sm:min-h-[320px] lg:h-full lg:min-h-[380px]">
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

                  <div className="relative flex flex-col justify-center px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:py-4">
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
                      <p className="mt-4 max-w-3xl text-[15px] font-normal leading-[1.65] text-[#5d6470] line-clamp-3 sm:line-clamp-4">
                        {slide.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {slide.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-[#0077c8]/15 bg-[#f5fbff] px-2.5 py-1 text-xs sm:text-sm font-semibold text-[#0077c8]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={slide.href}
                        className="mt-6 inline-flex w-fit items-center rounded-md bg-[#20242d] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(32,36,45,0.18)] transition hover:bg-[#0077c8]"
                      >
                        Read More
                        <span className="ml-3 text-lg leading-none">-</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="absolute bottom-5 right-5 z-20 flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((currentIndex) =>
                    getPreviousIndex(currentIndex),
                  )
                }
                className="slider-control"
                aria-label="Previous business network"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((currentIndex) => getNextIndex(currentIndex))
                }
                className="slider-control"
                aria-label="Next business network"
              >
                <ArrowIcon direction="right" />
              </button>
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
