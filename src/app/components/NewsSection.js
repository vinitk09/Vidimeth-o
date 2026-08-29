"use client";

import { useState } from "react";
import Link from "next/link";
import { newsArticles } from "../data/newsData";

export default function NewsSection() {
  const articles = newsArticles;
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, articles.length - itemsPerPage);

  function handlePrev() {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }

  const visibleArticles = articles.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="news" className="bg-[#0b1d33] py-16 px-4 sm:px-6 lg:px-8 text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-block bg-blue-900/60 border border-blue-500/30 text-cyan-400 text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            Latest News &amp; Updates
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Stay Informed With Vidi Meth
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Explore our latest platform announcements, media releases, and business network milestones.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative mt-8 group/slider px-1 sm:px-6 lg:px-8">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute -left-2 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-[0_8px_25px_rgba(0,0,0,0.25)] transition-all hover:bg-[#0077c8] hover:text-white hover:border-[#0077c8] hover:scale-110 focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-slate-800 cursor-pointer"
            aria-label="Previous Articles"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute -right-2 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-[0_8px_25px_rgba(0,0,0,0.25)] transition-all hover:bg-[#0077c8] hover:text-white hover:border-[#0077c8] hover:scale-110 focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-slate-800 cursor-pointer"
            aria-label="Next Articles"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleArticles.map((article) => {
              return (
                <div
                  key={article.id}
                  className="flex flex-col justify-between rounded-2xl bg-[#0f2744] border border-blue-900/40 overflow-hidden shadow-lg hover:border-blue-500/50 transition-all group"
                >
                  {/* Card Top Image / Badge */}
                  <div className="relative h-48 w-full bg-slate-800 overflow-hidden">
                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title || "News Article"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-cyan-900">
                        <span className="w-10 h-10 rounded-lg bg-blue-600/80 text-white font-bold flex items-center justify-center">
                          VM
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-300 mt-2">
                          {article.category || "Updates"}
                        </span>
                      </div>
                    )}
                    <span className="absolute top-3 left-3 bg-[#0077c8]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-1.5">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-base font-bold text-white leading-snug line-clamp-2 group-hover:text-cyan-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mt-2 line-clamp-2">
                        {article.description}
                      </p>
                    </div>

                    {/* Read Full Article Link */}
                    <div className="mt-5 pt-3 border-t border-slate-700/50">
                      <Link
                        href={`/news/${article.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition"
                      >
                        <span>Read Full Article</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-8">
            {Array.from({ length: Math.ceil(articles.length / itemsPerPage) || 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx * itemsPerPage > maxIndex ? maxIndex : idx * itemsPerPage)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  Math.floor(currentIndex / itemsPerPage) === idx
                    ? "w-6 bg-cyan-400"
                    : "w-1.5 bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
