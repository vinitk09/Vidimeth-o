"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Manab Kumar",
    role: "Client",
    initials: "MK",
    quote:
      "Remarkable impact! Your innovative financial planning and business development strategies transformed our path, leading to sustained growth.",
  },
  {
    name: "Nisha Sharma",
    role: "Client",
    initials: "NS",
    quote:
      "Business development strategies exceeded expectations, driving growth and ensuring sustained success. Truly an impactful partnership.",
  },
  {
    name: "Mahabub Alam",
    role: "Client",
    initials: "MA",
    quote:
      "The creative financial planning transformed our approach, ensuring financial stability and paving the way for strategic growth.",
  },
  {
    name: "Ravi Patel",
    role: "Business Partner",
    initials: "RP",
    quote:
      "A game-changer for our expansion! Their practical guidance and digital solutions took our operations to an entirely new level.",
  },
  {
    name: "Sara Khan",
    role: "Client",
    initials: "SK",
    quote:
      "Exceptional service. They took the time to understand our goals and delivered a marketing approach that actually generated results.",
  },
];

function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={direction === "left" ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6"} />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.8 5.25C6.35 6 4.5 8.35 4.5 11.95v6.8h6.8v-6.8H8.15c.1-1.85 1.05-3.15 2.85-3.9L9.8 5.25Zm9.1 0c-3.45.75-5.3 3.1-5.3 6.7v6.8h6.8v-6.8h-3.15c.1-1.85 1.05-3.15 2.85-3.9L18.9 5.25Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.75 14.55 8.9l5.7.82-4.12 4 .97 5.66L12 16.7l-5.1 2.68.97-5.66-4.12-4 5.7-.82L12 3.75Z" />
    </svg>
  );
}

export default function ClientTestimonialsSection() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getStep = () => {
    const slider = sliderRef.current;
    const firstCard = slider?.querySelector("article");
    if (!slider || !firstCard) return 0;
    const gap = Number.parseFloat(getComputedStyle(slider).columnGap) || 24;
    return firstCard.getBoundingClientRect().width + gap;
  };

  const moveSlider = (direction) => {
    const slider = sliderRef.current;
    const step = getStep();
    if (!slider || !step) return;
    slider.scrollBy({ left: direction === "next" ? step : -step, behavior: "smooth" });
  };

  const scrollToCard = (index) => {
    const slider = sliderRef.current;
    const step = getStep();
    if (!slider || !step) return;
    slider.scrollTo({ left: index * step, behavior: "smooth" });
    setActiveIndex(index);
  };

  const updateActiveCard = () => {
    const slider = sliderRef.current;
    const step = getStep();
    if (!slider || !step) return;
    
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    if (slider.scrollLeft >= maxScroll - 8) {
      setActiveIndex(testimonials.length - 1);
      return;
    }
    setActiveIndex(Math.min(testimonials.length - 1, Math.round(slider.scrollLeft / step)));
  };

  return (
    <section className="bg-white px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row" data-aos="fade-up">
          <div className="max-w-2xl text-center sm:text-left">
            <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]">
              Testimonials
            </p>
            <h2 className="text-[30px] font-semibold leading-[1.2] text-[#005f91] sm:text-[36px]">
              What Our Client Says
            </h2>
            <p className="mt-5 text-[17px] font-normal leading-[1.68] text-[#555555]">
              Practical guidance, reliable support, and business development
              strategies shaped around real client growth.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => moveSlider("prev")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0077c8]/20 bg-[#f5fbff] text-[#0077c8] shadow-sm transition hover:bg-[#0077c8] hover:text-white [&_svg]:h-5 [&_svg]:w-5 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[2.5] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round"
              aria-label="Previous testimonial"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => moveSlider("next")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0077c8]/20 bg-[#f5fbff] text-[#0077c8] shadow-sm transition hover:bg-[#0077c8] hover:text-white [&_svg]:h-5 [&_svg]:w-5 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[2.5] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round"
              aria-label="Next testimonial"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          onScroll={updateActiveCard}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative min-w-full shrink-0 snap-start overflow-hidden rounded-lg border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(10,31,68,0.08)] transition duration-300 hover:border-[#0077c8]/28 hover:shadow-[0_24px_60px_rgba(0,119,200,0.12)] sm:min-w-[calc((100%-24px)/2)] lg:min-w-[calc((100%-48px)/3)]"
            >
              <div className="absolute right-6 top-6 text-[#0077c8]/12 [&_svg]:h-16 [&_svg]:w-16 [&_svg]:fill-current">
                <QuoteIcon />
              </div>

              <div className="relative z-10 flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0077c8] text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(0,119,200,0.22)]">
                  {testimonial.initials}
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold leading-tight text-[#0a1f44]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-sm font-normal text-[#647084]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="relative z-10 mt-7 text-[16px] font-normal leading-[1.75] text-[#555555]">
                {testimonial.quote}
              </p>

              <div className="relative z-10 mt-7 flex gap-1 text-[#f4b400] [&_svg]:h-4 [&_svg]:w-4 [&_svg]:fill-current">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <StarIcon key={starIndex} />
                ))}
              </div>
            </article>
          ))}
        </div>
        
        <div className="flex justify-center gap-2">
          {testimonials.map((card, index) => (
            <button
              key={card.name}
              type="button"
              onClick={() => scrollToCard(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-[#0077c8]"
                  : "w-2.5 bg-[#0077c8]/25 hover:bg-[#0077c8]/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
