"use client";

import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";

const bannerSlides = [
  {
    id: 1,
    src: "/headbanner.png",
    alt: "Vidi Meth Digital Services Main Banner",
  },
  {
    id: 2,
    src: "/SUB 1.webp",
    alt: "Vidi Meth Digital Services Sub Banner 1",
  },
  {
    id: 3,
    src: "/SUB 2.webp",
    alt: "Vidi Meth Digital Services Sub Banner 2",
  },
  {
    id: 4,
    src: "/SUB 3.webp",
    alt: "Vidi Meth Digital Services Sub Banner 3",
  },
];

export default function HeroBannerSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
  }, []);

  const handleSelectSlide = (index) => {
    setActiveIndex(index);
  };

  // Auto slide interval
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#04194d] sm:bg-transparent pt-20 sm:pt-0 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero Banner Carousel"
    >
      {/* Slider Track */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {bannerSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative w-full shrink-0 flex items-center justify-center min-w-full"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1920}
                height={1080}
                priority={index === 0}
                unoptimized
                sizes="100vw"
                className="
                  block
                  w-full
                  h-auto
                  max-w-[1920px]
                  mx-auto
                  object-contain
                  object-center
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous Arrow Button */}
      <button
        type="button"
        onClick={handlePrev}
        className="
          absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20
          flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full
          bg-black/40 text-white backdrop-blur-md border border-white/20
          shadow-lg transition-all duration-300
          hover:bg-[#0077c8] hover:scale-110 hover:border-transparent
          focus:outline-none focus:ring-2 focus:ring-[#0077c8]
          opacity-80 sm:opacity-0 group-hover:opacity-100
        "
        aria-label="Previous Banner Slide"
      >
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Arrow Button */}
      <button
        type="button"
        onClick={handleNext}
        className="
          absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20
          flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full
          bg-black/40 text-white backdrop-blur-md border border-white/20
          shadow-lg transition-all duration-300
          hover:bg-[#0077c8] hover:scale-110 hover:border-transparent
          focus:outline-none focus:ring-2 focus:ring-[#0077c8]
          opacity-80 sm:opacity-0 group-hover:opacity-100
        "
        aria-label="Next Banner Slide"
      >
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10">
        {bannerSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => handleSelectSlide(index)}
            className={`
              h-2.5 rounded-full transition-all duration-300
              ${
                activeIndex === index
                  ? "w-8 bg-[#0077c8]"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
