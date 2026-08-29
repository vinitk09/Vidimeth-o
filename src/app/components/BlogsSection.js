"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "../data/blogsData";

export default function BlogsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, blogPosts.length - itemsPerPage);

  function handlePrev() {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }

  const visibleBlogs = blogPosts.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="blogs" className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-[#0077c8] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0077c8] animate-pulse" />
              Articles &amp; Industry Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Vidi Meth Knowledge &amp; Growth Hub
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Explore in-depth articles, expert perspectives, and actionable strategies across education, real estate, recruitment, finance, and digital business.
            </p>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0077c8] hover:text-[#005f91] transition shrink-0 self-start md:self-auto py-2 px-4 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200"
          >
            <span>View All Blogs</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative mt-8 group/slider px-1 sm:px-6 lg:px-8">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute -left-2 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all hover:bg-[#0077c8] hover:text-white hover:border-[#0077c8] hover:scale-110 focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-slate-800 cursor-pointer"
            aria-label="Previous Blogs"
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
            className="absolute -right-2 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all hover:bg-[#0077c8] hover:text-white hover:border-[#0077c8] hover:scale-110 focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-slate-800 cursor-pointer"
            aria-label="Next Blogs"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleBlogs.map((blog) => {
              return (
                <div
                  key={blog.id}
                  className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0077c8]/50 transition-all duration-300 group"
                >
                  {/* Card Top Image & Category Badge */}
                  <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={blog.featuredImage || blog.imageUrl}
                      alt={blog.title || blog.heading}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#0077c8] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                      {blog.category}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta bar */}
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                        <span>{blog.date}</span>
                        <span className="text-[11px] text-slate-500 font-medium truncate max-w-[130px]">
                          By {blog.author.split(" ")[0]} {blog.author.split(" ")[1] || ""}
                        </span>
                      </div>

                      {/* Heading */}
                      <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#0077c8] transition-colors">
                        {blog.title || blog.heading}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed mt-2.5 line-clamp-2">
                        {blog.description}
                      </p>
                    </div>

                    {/* View Full Blog Button */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/blogs/${blog.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0077c8] hover:text-[#005f91] transition group/link"
                      >
                        <span>View Full Blog</span>
                        <span className="transition-transform group-hover/link:translate-x-1">&rarr;</span>
                      </Link>
                      <span className="text-[11px] text-slate-400 font-medium">
                        Read post
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-1.5 mt-8">
            {Array.from({ length: Math.ceil(blogPosts.length / itemsPerPage) || 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx * itemsPerPage > maxIndex ? maxIndex : idx * itemsPerPage)}
                aria-label={`Go to blog slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  Math.floor(currentIndex / itemsPerPage) === idx
                    ? "w-6 bg-[#0077c8]"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
