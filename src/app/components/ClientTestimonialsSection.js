"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const defaultTestimonials = [
  {
    id: "default-1",
    name: "Laxmi Mahato",
    role: "Business Partner",
    division: "Business Development",
    initials: "LM",
    rating: 5,
    quote:
      "Exceptional business development insights. Your team's dedication to fostering opportunities has been a game-changer for our company.",
    status: "approved",
  },
  {
    id: "default-2",
    name: "Manab Kumar",
    role: "Finance Client",
    division: "LOAN vidhi",
    initials: "MK",
    rating: 5,
    quote:
      "Remarkable impact! Your innovative financial planning and business development strategies transformed our path, leading to sustained growth.",
    status: "approved",
  },
  {
    id: "default-3",
    name: "Nisha Sharma",
    role: "Growth Client",
    division: "VM Academy",
    initials: "NS",
    rating: 5,
    quote:
      "Business development strategies exceeded expectations, driving growth and ensuring sustained success. Truly an impactful partnership.",
    status: "approved",
  },
  {
    id: "default-4",
    name: "Ankit Verma",
    role: "Property Buyer",
    division: "VillageMyCity",
    initials: "AV",
    rating: 5,
    quote:
      "VillageMyCity made property discovery so simple and transparent. We connected directly with verified sellers online and closed our deal hassle-free.",
    status: "approved",
  },
  {
    id: "default-5",
    name: "Priya Sundaram",
    role: "HR Manager",
    division: "GoJobin",
    initials: "PS",
    rating: 5,
    quote:
      "GoJobin enabled us to post job openings for free and quickly connect with highly qualified candidates across multiple engineering & management streams.",
    status: "approved",
  },
  {
    id: "default-6",
    name: "Vikram Malhotra",
    role: "Retail Merchant",
    division: "VMhomeMART",
    initials: "VM",
    rating: 5,
    quote:
      "VMhomeMART opened up direct online retail access for our electronics store. Customer reach and order management have been outstanding.",
    status: "approved",
  },
];

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.8 5.25C6.35 6 4.5 8.35 4.5 11.95v6.8h6.8v-6.8H8.15c.1-1.85 1.05-3.15 2.85-3.9L9.8 5.25Zm9.1 0c-3.45.75-5.3 3.1-5.3 6.7v6.8h6.8v-6.8h-3.15c.1-1.85 1.05-3.15 2.85-3.9L18.9 5.25Z" />
    </svg>
  );
}

function StarIcon({ filled }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={filled ? "fill-[#f4b400] text-[#f4b400]" : "fill-slate-200 text-slate-200"}
    >
      <path d="M12 3.75 14.55 8.9l5.7.82-4.12 4 .97 5.66L12 16.7l-5.1 2.68.97-5.66-4.12-4 5.7-.82L12 3.75Z" />
    </svg>
  );
}

export default function ClientTestimonialsSection() {
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);

  // Load dynamically approved reviews from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("vidimeth_reviews");
      if (stored) {
        const parsed = JSON.parse(stored);
        const approvedOnly = parsed.filter((item) => item.status === "approved");
        if (approvedOnly.length > 0) {
          setTestimonials([...approvedOnly, ...defaultTestimonials]);
        }
      }
    } catch (err) {
      console.error("Failed to load reviews:", err);
    }
  }, []);

  // Handle responsive visible card count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play timer for slider
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex, testimonials.length]);

  return (
    <section className="bg-white px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl">
        
        {/* Header with Title & Write Review Button */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-aos="fade-up">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#1b8b4b]">
              Client Feedback
            </p>
            <h2 className="text-[30px] font-bold leading-[1.2] text-black sm:text-[36px]">
              What Our Clients Say
            </h2>
            <p className="mt-3 text-[16px] font-normal leading-[1.68] text-[#555555]">
              Practical guidance, reliable support, and business development strategies shaped around real client growth.
            </p>
          </div>

          <Link
            href="/review"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#0077c8] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:bg-[#005f91] hover:shadow-lg"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Write a Review
          </Link>
        </div>

        {/* Testimonials Slider Container with Outward Controls */}
        <div
          className="relative mt-8 sm:mt-12 group/slider px-1 sm:px-8 lg:px-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          data-aos="fade-up"
        >
          {/* Left Outward Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute -left-2 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all hover:bg-[#0077c8] hover:text-white hover:border-[#0077c8] hover:scale-110 focus:outline-none"
            aria-label="Previous Testimonial"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Outward Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute -right-2 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all hover:bg-[#0077c8] hover:text-white hover:border-[#0077c8] hover:scale-110 focus:outline-none"
            aria-label="Next Testimonial"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden py-3">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / visibleCards)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => {
                const initials =
                  testimonial.initials ||
                  (testimonial.name
                    ? testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()
                    : "VM");

                return (
                  <div
                    key={testimonial.id || index}
                    className="w-full shrink-0 px-2 sm:px-3 sm:w-1/2 lg:w-1/3"
                  >
                    <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-[0_14px_40px_rgba(10,31,68,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0077c8]/40 hover:shadow-lg">
                      <div className="absolute right-4 top-4 sm:right-6 sm:top-6 text-[#0077c8]/10 [&_svg]:h-10 [&_svg]:w-10 sm:[&_svg]:h-16 sm:[&_svg]:w-16 [&_svg]:fill-current">
                        <QuoteIcon />
                      </div>

                      <div>
                        <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                          <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0077c8] to-[#004f85] text-xs sm:text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(0,119,200,0.22)]">
                            {initials}
                          </span>
                          <div>
                            <h3 className="text-base sm:text-[17px] font-bold leading-tight text-[#0a1f44]">
                              {testimonial.name}
                            </h3>
                            <p className="mt-0.5 text-xs font-medium text-[#647084]">
                              {testimonial.role || "Client"}{" "}
                              {testimonial.division ? `• ${testimonial.division}` : ""}
                            </p>
                          </div>
                        </div>

                        <p className="relative z-10 mt-4 sm:mt-6 text-xs sm:text-[15px] font-normal leading-relaxed text-[#555555] text-justify">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                      </div>

                      <div className="relative z-10 mt-5 sm:mt-7 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex gap-1 [&_svg]:h-3.5 [&_svg]:w-3.5 sm:[&_svg]:h-4 sm:[&_svg]:w-4">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <StarIcon
                              key={starIndex}
                              filled={starIndex < (testimonial.rating || 5)}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          Verified Review
                        </span>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Dot Indicators */}
          <div className="mt-4 flex items-center justify-center gap-1.5 sm:hidden">
            {testimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setActiveIndex(dotIdx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === dotIdx ? "w-6 bg-[#0077c8]" : "w-2 bg-slate-300"
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
          {/* Desktop Pagination Dots */}
          <div className="mt-8 hidden sm:flex justify-center items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-8 bg-[#0077c8]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
