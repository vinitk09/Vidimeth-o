"use client";

import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Scroll to Top Floating Button (Right Side) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className={`fixed right-5 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#0077c8] text-white shadow-[0_10px_30px_rgba(0,119,200,0.4)] transition-all duration-300 hover:bg-[#005f91] hover:scale-110 focus:outline-none ${
          showScrollTop
            ? "translate-y-0 opacity-100 visible"
            : "translate-y-6 opacity-0 invisible"
        }`}
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
