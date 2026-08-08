"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const networkSlides = [
  {
    category: "Education Solutions",
    title: "VM Academy",
    image: "/vmdivision.png",
    href: "https://www.vmacademys.com/",
    tags: ["Admissions", "Courses", "Guidance", "Campus"],
    description:
      "A focused education platform for learners who need clear guidance, course discovery, college support, and digital access to academic opportunities. VM Academy helps students and institutions connect through practical information, simplified journeys, and dependable support.",
  },
  {
    category: "Property Network",
    title: "Village My City",
    image: "/villagemycity.png",
    href: "https://www.villagemycity.com/",
    tags: ["Property", "Listing", "Local", "Connect"],
    description:
      "A property and local discovery network designed to bring residential, commercial, and location-based opportunities closer to users. Village My City supports smarter discovery for buyers, sellers, tenants, and local communities through a clean digital presence.",
  },
  {
    category: "Career Platform",
    title: "GoJobin",
    image: "/gojobinsection-image.jpeg",
    href: "https://www.gojobin.com/",
    tags: ["Jobs", "Hiring", "Training", "Career"],
    description:
      "A career support platform that helps candidates find relevant openings and gives employers a better way to reach talent. GoJobin focuses on practical hiring, job discovery, candidate support, and employment pathways for growing teams and job seekers.",
  },
  {
    category: "Finance Support",
    title: "Loan Vidhi",
    image: "/loanvidhi.png",
    href: "https://www.loanvidhi.com/",
    tags: ["Loans", "Finance", "Planning", "Support"],
    description:
      "A finance-focused initiative created to simplify loan awareness, product discovery, and user support. Loan Vidhi helps customers understand options, compare needs, and move toward financial decisions with better clarity and more confidence.",
  },
  {
    category: "Retail Network",
    title: "VM Home Mart",
    image: "/vmhomemart-image.jpeg",
    href: "https://www.vmhomemart.com/",
    tags: ["Home", "Retail", "Shopping", "Lifestyle"],
    description:
      "A home and lifestyle marketplace concept built for convenient product discovery and customer-friendly shopping. VM Home Mart brings everyday home needs, retail categories, and digital commerce support together under the Vidi Meth business network.",
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
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-5xl" data-aos="fade-up">
          <div className="mb-5 flex flex-wrap items-center gap-5">
            <h2 className="text-[28px] font-semibold leading-[1.22] text-[#005f91] sm:text-[34px]">
              Facilitating Global Business Networks
            </h2>
            <span className="h-0.5 w-28 bg-[#4d65ff]" />
          </div>
          <p className="max-w-4xl text-[16px] font-normal leading-[1.72] text-[#1d2736] sm:text-[17px]">
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
          <div className="relative overflow-hidden rounded-lg shadow-[0_22px_70px_rgba(10,31,68,0.13)]">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {networkSlides.map((slide, index) => (
                <article
                  key={slide.title}
                  className="grid min-w-full overflow-hidden rounded-lg bg-white ring-1 ring-slate-200/80 lg:min-h-[520px] lg:grid-cols-[0.55fr_0.45fr]"
                >
                  <div className="relative min-h-[320px] overflow-hidden bg-[#eef3f8] lg:min-h-full">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      priority={index === 0}
                      className="h-full w-full object-fill"
                    />
                  </div>

                  <div className="relative flex min-h-[520px] flex-col justify-center px-6 pb-24 pt-10 sm:px-10 lg:px-12 lg:py-10">
                    <span className="pointer-events-none absolute right-8 top-7 text-[56px] font-semibold leading-none text-[#1f2168]/5 sm:text-[72px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10">
                      <p className="mb-5 flex items-center gap-4 text-[15px] font-semibold uppercase tracking-[0.28em] text-[#1f2168]">
                        <span className="h-px w-8 bg-[#1f2168]/50" />
                        {slide.category}
                      </p>
                      <h3 className="text-[30px] font-semibold leading-[1.15] text-[#20242d] sm:text-[36px]">
                        {slide.title}
                      </h3>
                      <p className="mt-6 max-w-3xl text-[16px] font-normal leading-[1.75] text-[#5d6470] sm:text-[17px]">
                        {slide.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {slide.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-[#0077c8]/15 bg-[#f5fbff] px-3 py-2 text-sm font-semibold text-[#0077c8]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={slide.href}
                        className="mt-9 inline-flex w-fit items-center rounded-md bg-[#20242d] px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(32,36,45,0.18)] transition hover:bg-[#0077c8]"
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
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index
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
