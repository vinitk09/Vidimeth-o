"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { newsArticles, getArticleById } from "@/app/data/newsData";

export default function NewsDetailPage() {
  const params = useParams();
  const articleId = params?.id;
  const article = getArticleById(articleId);

  // Slider State for "More Articles"
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [imgError, setImgError] = useState(false);
  const [sliderImgErrors, setSliderImgErrors] = useState({});

  // Filter out current article for "More Articles" slider
  const otherArticles = newsArticles.filter(
    (item) => String(item.id) !== String(articleId) && item.slug !== articleId
  );

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

  const maxIndex = Math.max(0, otherArticles.length - visibleCards);

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  if (!article) {
    return (
      <main className="min-h-screen bg-white text-[#0a1f44] pt-24">
        <Header />
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-32 text-center">
          <span className="rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-600">
            Article Not Found
          </span>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl text-[#0a1f44]">
            The requested article could not be found.
          </h1>
          <p className="mt-4 text-slate-600">
            The news release you are looking for might have been moved or removed.
          </p>
          <Link
            href="/"
            className="mt-8 rounded-full bg-[#0077c8] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#005f91]"
          >
            ← Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#0a1f44] pt-24 overflow-x-hidden">
      <Header />

      {/* Breadcrumb Navigation Bar */}
      <section className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-5xl items-center gap-2 text-xs sm:text-sm text-slate-600">
          <Link href="/" className="hover:text-[#0077c8] transition-colors">
            Home
          </Link>
          <span className="text-slate-400">/</span>
          <Link href="/#news" className="hover:text-[#0077c8] transition-colors">
            News & Updates
          </Link>
          <span className="text-slate-400">/</span>
          <span className="truncate max-w-[200px] sm:max-w-md text-[#0077c8] font-semibold">
            {article.title}
          </span>
        </div>
      </section>

      <article className="px-4 py-8 sm:px-6 lg:px-8 bg-slate-50/50 min-h-screen">
        <div className="mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">

            {/* LEFT COLUMN: MAIN ARTICLE */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              
              {/* 1. Article Title */}
              <h1 className="text-2xl font-bold leading-tight text-black md:text-[32px]">
                {article.title}
              </h1>

              {/* 2. Author Metadata & Social Share Bar */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0077c8] text-white font-bold text-sm shadow-sm">
                    VM
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{article.author}</div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                      <span>{article.category || "Official Release"}</span>
                      <span>•</span>
                      <span>Updated: {article.date}</span>
                    </div>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 mr-1">Share:</span>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877f2] text-white transition hover:opacity-90 shadow-sm"
                    title="Share on Facebook"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition hover:opacity-90 shadow-sm"
                    title="Share on X (Twitter)"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0a66c2] text-white transition hover:opacity-90 shadow-sm"
                    title="Share on LinkedIn"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + " - " + (typeof window !== "undefined" ? window.location.href : ""))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25d366] text-white transition hover:opacity-90 shadow-sm"
                    title="Share on WhatsApp"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  </a>
                  <button
                    onClick={() => {
                      if (typeof navigator !== "undefined") {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Article link copied to clipboard!");
                      }
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-white transition hover:bg-slate-900 shadow-sm"
                    title="Copy Link"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </button>
                </div>
              </div>

              {/* 3. Main Image */}
              <div className="mt-6 relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  {!article.image || imgError ? (
                    <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center bg-slate-100">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0077c8] text-white font-black text-xl mb-2 shadow-sm">
                        VM
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#0077c8]">
                        {article.category} Release
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      priority
                      className="object-cover"
                      onError={() => setImgError(true)}
                    />
                  )}
                </div>
                {article.imageCaption && (
                  <div className="bg-slate-50 px-4 py-2 text-center text-xs font-medium text-slate-500 border-t border-slate-200">
                    {article.imageCaption}
                  </div>
                )}
              </div>

              {/* 4. Intro Quote / Summary */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-700 text-justify border-l-4 border-[#0077c8] pl-4 bg-sky-50/70 py-3.5 pr-4 rounded-r-lg">
                {article.content?.intro || article.description}
              </p>

              {/* 5. Detailed Sections */}
              {article.content?.sections && (
                <div className="mt-8 space-y-6 text-slate-700">
                  {article.content.sections.map((sec, sIdx) => (
                    <section key={sIdx} className="space-y-3">
                      <h2 className="text-xl font-bold text-[#0a1f44] sm:text-2xl border-b border-slate-200 pb-2">
                        {sec.heading}
                      </h2>
                      {sec.paragraphs.map((pText, pIdx) => (
                        <p key={pIdx} className="text-base leading-relaxed text-slate-700 text-justify">
                          {pText}
                        </p>
                      ))}
                    </section>
                  ))}
                </div>
              )}

              {/* 6. Key Highlights (Simple Bullet Points) */}
              {article.content?.keyPoints && (
                <div className="mt-8">
                  <h2 className="text-xl font-bold text-[#0a1f44] sm:text-2xl border-b border-slate-200 pb-2 mb-4">
                    Key Highlights
                  </h2>

                  <ul className="space-y-3">
                    {article.content.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#0077c8]" />
                        <div className="text-base text-slate-700 leading-relaxed">
                          <strong className="font-bold text-[#0a1f44]">{point.title}: </strong>
                          <span className="text-slate-600">{point.detail}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* RIGHT COLUMN: STICKY SIDEBAR */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">

              {/* BOX 1: LATEST NEWS */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-slate-100 bg-slate-50/70 font-bold text-xs uppercase tracking-wider text-[#0a1f44]">
                  <svg className="h-4 w-4 text-[#0077c8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Latest News
                </div>

                <div className="divide-y divide-slate-100">
                  {otherArticles.slice(0, 4).map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.id}`}
                      className="group flex items-start gap-3 p-4 transition-colors hover:bg-slate-50/80"
                    >
                      <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100 border border-slate-200/60">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-[#0077c8] text-white font-bold text-[10px]">
                            VM
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-[#0077c8] transition-colors">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1.5">
                          <svg className="h-3 w-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>


            </div>

          </div>
        </div>
      </article>

      {/* MORE ARTICLES SLIDER AT THE LAST */}
      {otherArticles.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="inline-block rounded-full bg-[#0077c8]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#0077c8]">
                  Related Stories
                </span>
                <h2 className="mt-2 text-2xl font-bold text-[#0a1f44] sm:text-3xl">
                  More Articles Slider
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Explore other recent announcements and platform updates from Vidi Meth Digital Services.
                </p>
              </div>
            </div>

            {/* Carousel Slider with Controls */}
            <div
              className="relative mt-8 px-4 sm:px-8 lg:px-10"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Left Arrow Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute -left-2 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[#0a1f44] shadow-md transition-all hover:bg-[#0077c8] hover:text-white hover:border-[#0077c8] hover:scale-110 focus:outline-none"
                aria-label="Previous Articles"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Right Arrow Button */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute -right-2 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[#0a1f44] shadow-md transition-all hover:bg-[#0077c8] hover:text-white hover:border-[#0077c8] hover:scale-110 focus:outline-none"
                aria-label="Next Articles"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              {/* Track */}
              <div className="overflow-hidden py-2">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${activeIndex * (100 / visibleCards)}%)`,
                  }}
                >
                  {otherArticles.map((item) => (
                    <div
                      key={item.id}
                      className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
                    >
                      <article className="group relative flex h-[350px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0077c8]/50 hover:shadow-xl">
                        <div className="relative h-36 w-full shrink-0 overflow-hidden bg-gradient-to-br from-[#0077c8] to-[#071326]">
                          {!item.image || sliderImgErrors[item.id] ? (
                            <div className="flex h-full w-full flex-col items-center justify-center p-3 text-center">
                              <span className="text-xs font-bold uppercase tracking-widest text-white">
                                {item.category}
                              </span>
                            </div>
                          ) : (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              onError={() =>
                                setSliderImgErrors((prev) => ({ ...prev, [item.id]: true }))
                              }
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        </div>

                        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                          <div>
                            <span className="text-[11px] font-medium text-slate-500">
                              {item.date}
                            </span>
                            <h3 className="mt-1 text-sm font-bold leading-snug text-[#0a1f44] group-hover:text-[#0077c8] transition-colors line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-2 text-justify">
                              {item.description}
                            </p>
                          </div>

                          <Link
                            href={`/news/${item.id}`}
                            className="mt-3 shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0077c8] transition-colors group-hover:text-[#005f91]"
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

            {/* Indicators */}
            {maxIndex > 0 && (
              <div className="mt-6 flex justify-center items-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx
                      ? "w-8 bg-[#0077c8]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
