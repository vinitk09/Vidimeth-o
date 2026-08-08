"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const businessCards = [
  {
    image: "/b1.jpeg",
    title: "Use Networking Opportunities",
    text: "Search for new opportunities and make the most of every business resource.",
  },
  {
    image: "/b2.png",
    title: "Establish Strong Relationships",
    text: "Build trust, credibility, and transparency with customers and partners.",
  },
  {
    image: "/b3.jpeg",
    title: "Support Communities",
    text: "Create meaningful partnerships by staying involved with communities and causes.",
  },
  {
    image: "/b4.png",
    title: "Discover New Markets",
    text: "Identify fresh markets, study demand, and expand with a clear growth plan.",
  },
  {
    image: "/b5.png",
    title: "Improve Business Strategy",
    text: "Use focused planning to increase revenue, partnerships, and long-term value.",
  },
  {
    image: "/b6.png",
    title: "Strengthen Client Success",
    text: "Deliver reliable support and better solutions for every client relationship.",
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

  const scrollToCard = (index) => {
    const slider = sliderRef.current;
    const step = getStep();

    if (!slider || !step) {
      return;
    }

    slider.scrollTo({ left: index * step, behavior: "smooth" });
    setActiveIndex(index);
  };

  const updateActiveCard = () => {
    const slider = sliderRef.current;
    const step = getStep();

    if (!slider || !step) {
      return;
    }

    setActiveIndex(
      Math.min(businessCards.length - 1, Math.round(slider.scrollLeft / step)),
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
    <section className="bg-[#f6fbff] px-5 py-16 text-[#0a1f44] sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
          <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]">
            Growth Strategy
          </p>
          <h2 className="text-[30px] font-semibold leading-[1.2] text-[#005f91] sm:text-[36px] lg:text-[40px]">
            Business Development
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[17px] font-normal leading-[1.68] text-[#555555]">
            Goals can include revenue growth, expansion to new markets,
            strategic partnerships, and more. Great business development
            strategies help you increase your revenue, reach new markets, and
            build lasting partnerships.
          </p>
        </div>

        <div className="mt-12 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => moveSlider("prev")}
            className="slider-control"
            aria-label="Previous business development card"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => moveSlider("next")}
            className="slider-control"
            aria-label="Next business development card"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>

        <div
          ref={sliderRef}
          onScroll={updateActiveCard}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          className="business-slider mt-5 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-8"
        >
          {businessCards.map((card, index) => (
            <article
              key={card.title}
              className="group min-w-full snap-start overflow-hidden rounded-lg border border-[#0077c8]/10 bg-white shadow-[0_16px_44px_rgba(10,31,68,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,119,200,0.16)] sm:min-w-[calc((100%-24px)/2)] lg:min-w-[calc((100%-48px)/3)]"
              data-aos="fade-up"
              data-aos-delay={index * 90}
            >
              <div className="relative aspect-[1.42/1] overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-sm font-semibold text-[#0077c8] shadow-md">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="min-h-48 px-6 py-7 text-center">
                <h3 className="mx-auto max-w-sm text-xl font-semibold leading-[1.28] text-[#0a1f44]">
                  {card.title}
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-[16px] font-normal leading-[1.62] text-[#555555]">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          {businessCards.map((card, index) => (
            <button
              key={card.title}
              type="button"
              onClick={() => scrollToCard(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-[#0077c8]"
                  : "w-2.5 bg-[#0077c8]/25 hover:bg-[#0077c8]/50"
              }`}
              aria-label={`Go to business development card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
