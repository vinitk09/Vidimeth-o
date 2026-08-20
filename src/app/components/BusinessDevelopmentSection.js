"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const businessCards = [
  {
    image: "/network.png",
    title: "Use Networking Opportunities",
    text: "To search for new opportunities and use most of your resources.",
  },
  {
    image: "/b2.png",
    title: "Establish strong relationships with customers",
    text: "To preserve trust, credibility, and transparency.",
  },
  {
    image: "/community2.png",
    title: "Support communities and charities",
    text: "To have partnerships with other successful businesses, consider getting involved in charity.",
  },
  {
    image: "/social.png",
    title: "Make use of social media",
    text: "You can use Facebook, LinkedIn, and Instagram to promote your product, get in touch with customers, and sell.",
  },
  {
    image: "/referral.png",
    title: "Implement referral programs",
    text: "we support your company has an excellent reputation and loyal customers; you can consider referral programs.",
  },
  {
    image: "/professional.png",
    title: "Gather a team of professionals",
    text: "Our team plays an important role in your business success and development of your company.",
  },
];

function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={direction === "left" ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6"} />
    </svg>
  );
}

export default function BusinessDevelopmentSection() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const getStep = () => {
    const slider = sliderRef.current;
    const firstCard = slider?.querySelector("article");

    if (!slider || !firstCard) {
      return 0;
    }

    const gap = Number.parseFloat(getComputedStyle(slider).columnGap) || 24;
    return firstCard.getBoundingClientRect().width + gap;
  };

  const moveSlider = (direction) => {
    const slider = sliderRef.current;
    const step = getStep();

    if (!slider || !step) {
      return;
    }

    slider.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  const scrollToPage = (index) => {
    const slider = sliderRef.current;
    const step = getStep();

    if (!slider || !step) {
      return;
    }

    // Each dot represents 2 cards, so multiply index by 2
    slider.scrollTo({ left: index * 2 * step, behavior: "smooth" });
    // Force active index to update immediately and reflect the clicked dot
    setActiveIndex(index);
  };

  const updateActiveCard = () => {
    const slider = sliderRef.current;
    const step = getStep();

    if (!slider || !step) {
      return;
    }

    const scrollLeft = slider.scrollLeft;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    // If we are at the very end of the scroll, highlight the last dot (index 2)
    if (scrollLeft >= maxScroll - 8) {
      setActiveIndex(2);
      return;
    }

    // Divide by 2 since each dot represents 2 cards
    setActiveIndex(
      Math.min(2, Math.round((scrollLeft / step) / 2))
    );
  };

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      const slider = sliderRef.current;
      const step = getStep();

      if (!slider || !step) {
        return;
      }

      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const isAtEnd = slider.scrollLeft + step >= maxScroll - 8;

      slider.scrollTo({
        left: isAtEnd ? 0 : slider.scrollLeft + step,
        behavior: "smooth",
      });
    }, 2800);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="bg-[#f6fbff] px-5 py-14 text-[#0a1f44] sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
          <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]">
            Growth Strategy
          </p>
          <h2 className="text-[30px] font-bold leading-[1.2] text-black sm:text-[32px] lg:text-[32px]">
            Business Development
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] font-normal leading-[1.68] text-[#555555]">
            Goals can include revenue growth, expansion to new markets,
            strategic partnerships, and more. Great business development
            strategies that will help you fulfill your goals. Make use of these
            to increase your revenue, reach new markets, or partnerships.
          </p>
        </div>

        {/* Business Development Cards Slider Container with Outward Controls */}
        <div className="relative mt-10 group/slider px-4 sm:px-8 lg:px-10">
          {/* Left Outward Arrow Button */}
          <button
            type="button"
            onClick={() => moveSlider("prev")}
            className="absolute -left-2 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all hover:bg-[#0077c8] hover:text-white hover:border-[#0077c8] hover:scale-110 focus:outline-none"
            aria-label="Previous business development card"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Outward Arrow Button */}
          <button
            type="button"
            onClick={() => moveSlider("next")}
            className="absolute -right-2 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all hover:bg-[#0077c8] hover:text-white hover:border-[#0077c8] hover:scale-110 focus:outline-none"
            aria-label="Next business development card"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Cards Track */}
          <div
            ref={sliderRef}
            onScroll={updateActiveCard}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            className="business-slider flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth py-3"
          >
            {businessCards.map((card, index) => (
              <article
                key={card.title}
                className="group min-w-full snap-start overflow-hidden rounded-2xl border border-[#0077c8]/10 bg-white shadow-[0_12px_36px_rgba(10,31,68,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,119,200,0.15)] sm:min-w-[calc((100%-24px)/2)] lg:min-w-[calc((100%-48px)/3)]"
                data-aos="fade-up"
                data-aos-delay={index * 90}
              >
                <div className="relative aspect-[1.85/1] overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-xs font-bold text-[#0077c8] shadow-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex min-h-[140px] flex-col justify-center px-5 py-5 text-center">
                  <h3 className="mx-auto max-w-sm text-lg font-bold leading-[1.3] text-black">
                    {card.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-sm text-[14px] font-normal leading-[1.55] text-[#555555] text-justify">
                    {card.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              onClick={() => scrollToPage(index)}
              className={`h-2.5 rounded-full transition-all ${activeIndex === index
                ? "w-8 bg-[#0077c8]"
                : "w-2.5 bg-[#0077c8]/25 hover:bg-[#0077c8]/50"
                }`}
              aria-label={`Go to business development page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
