"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { newsArticles } from "@/app/data/newsData";

export default function StatsCounterSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [imgErrors, setImgErrors] = useState({});

  const handleImageError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

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

  const maxIndex = Math.max(0, newsArticles.length - visibleCards);

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  return (
    <section id="news" className="bg-[#071326] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-20 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl">
        {/* News Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-aos="fade-up">
          <div>
            <span className="inline-block rounded-full bg-[#0077c8]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0077c8]">
              Latest News & Updates
            </span>
            <h2 className="mt-3 text-3xl font-bold  text-white sm:text-32px">
              Stay Informed With Vidi Meth
            </h2>
            <p className="mt-2 text-[16px] text-slate-300 max-w-3xl">
              Explore our latest platform announcements, media releases, and business network milestones.
            </p>
          </div>
        </div>

        {/* News Cards Slider Container with Outward Controls */}
        <div
          className="relative mt-10 px-4 sm:px-8 lg:px-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Outward Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute -left-2 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#0d1f3c] text-white shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all hover:bg-[#0077c8] hover:border-[#0077c8] hover:scale-110 focus:outline-none"
            aria-label="Previous News"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Outward Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute -right-2 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#0d1f3c] text-white shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all hover:bg-[#0077c8] hover:border-[#0077c8] hover:scale-110 focus:outline-none"
            aria-label="Next News"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden py-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / visibleCards)}%)`,
              }}
            >
              {newsArticles.map((article) => (
                <div
                  key={article.id}
                  className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
                >
                  <article className="group relative flex h-[360px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0d1f3c] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#0077c8]/50 hover:shadow-2xl hover:shadow-[#0077c8]/20">
                    <Link href={`/news/${article.id}`} className="block relative h-36 w-full shrink-0 overflow-hidden bg-gradient-to-br from-[#0077c8] via-[#005f91] to-[#071326] flex items-center justify-center">
                      {!article.image || imgErrors[article.id] ? (
                        <div className="flex flex-col items-center justify-center p-4 text-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-extrabold text-sm mb-1.5 shadow-md">
                            VM
                          </div>
                          <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-300">
                            {article.category || "Vidi Meth News"}
                          </span>
                        </div>
                      ) : (
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={() => handleImageError(article.id)}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c] via-transparent to-transparent pointer-events-none" />
                    </Link>

                    <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                      <div>
                        <span className="text-[11px] font-medium text-slate-400">
                          {article.date}
                        </span>
                        <h3 className="mt-1 text-sm sm:text-base font-bold leading-snug text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                          <Link href={`/news/${article.id}`}>
                            {article.title}
                          </Link>
                        </h3>
                        <p className="mt-1.5 text-xs text-slate-300/90 leading-relaxed line-clamp-2 text-justify">
                          {article.description}
                        </p>
                      </div>

                      <Link
                        href={`/news/${article.id}`}
                        className="mt-3 shrink-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0077c8] transition-colors group-hover:text-cyan-300"
                      >
                        Read Full Article
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="mt-8 flex justify-center items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx
                ? "w-8 bg-[#0077c8]"
                : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
