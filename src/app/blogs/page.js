"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogPosts } from "../data/blogsData";

const categories = [
  "All",
  "Online Education",
  "Real Estate & PropTech",
  "Careers & Recruitment",
  "Finance & Loans",
  "Digital Marketing",
  "E-Commerce & Retail",
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogPosts.filter((blog) => {
    const matchesCat =
      selectedCategory === "All" ||
      blog.category?.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      searchQuery.trim() === "" ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-20 flex flex-col justify-between">
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#071526] via-[#0b223d] to-[#0d2c52] py-16 px-4 sm:px-6 lg:px-8 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Knowledge &amp; Thought Leadership
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Vidi Meth Blogs &amp; Articles
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Expert insights, strategies, and in-depth articles across education, proptech, recruitment, finance, and digital innovation.
          </p>

          {/* Search Input */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by topic, keyword..."
              className="w-full rounded-full bg-slate-900/80 border border-slate-700 py-3 pl-5 pr-12 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 shadow-inner"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              🔍
            </span>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-slate-200 sticky top-20 z-20 px-4 sm:px-6 lg:px-8 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#0077c8] text-white shadow"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow w-full">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg font-bold text-slate-700">No articles found matching your criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-bold text-[#0077c8] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0077c8]/50 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={blog.featuredImage || blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#0077c8] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span>{blog.date}</span>
                      <span className="text-[11px] font-medium text-slate-500">
                        {blog.author}
                      </span>
                    </div>

                    <h2 className="text-base font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#0077c8] transition-colors">
                      {blog.title}
                    </h2>

                    <p className="text-xs text-slate-600 leading-relaxed mt-2.5 line-clamp-3">
                      {blog.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/blogs/${blog.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0077c8] hover:text-[#005f91] transition group/btn"
                    >
                      <span>View Full Blog</span>
                      <span className="transition-transform group-hover/btn:translate-x-1">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
