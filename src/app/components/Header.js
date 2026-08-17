"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/our-services" },
  { label: "Our Divisions", href: "/our-divisions" },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Terms of Use",
    href: "/terms-of-use",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    label: "Grievances",
    href: "/grievance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    label: "Disclaimer",
    href: "/disclaimer",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

const exploreLinks = [
  {
    label: "Write a Review",
    href: "/review",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: "FAQ",
    href: "/faqs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    label: "Career",
    href: "/career",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    label: "Contact Us",
    href: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

function MenuIcon({ isOpen }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {isOpen ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6 6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

function NavItem({ link, className, onClick }) {
  const isExternal = link.href.startsWith("http");

  if (isExternal) {
    return (
      <a href={link.href} onClick={onClick} className={className} target="_blank" rel="noopener noreferrer">
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} onClick={onClick} className={className}>
      {link.label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isMobileLegalOpen, setIsMobileLegalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const isHomePage = pathname === "/";
  const useDarkText = true;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsExploreOpen(false);
        setIsLegalOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 text-[#0a1f44] shadow-[0_8px_26px_rgba(10,31,68,0.08)] backdrop-blur-md transition-all duration-300"
    >
      <nav className="relative mx-auto flex min-h-20 w-full max-w-7xl items-center gap-4 px-4 py-2 pr-16 font-sans sm:px-6 sm:pr-20 lg:px-8 lg:pr-24 xl:pr-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Vidi Meth Digital Services home"
        >
          <Image
            src="/logo_vidi.png"
            alt="Vidi Meth Digital Services"
            width={112}
            height={112}
            priority
            className="h-12 w-12 rounded-full object-contain shadow-md ring-1 ring-slate-200 sm:h-14 sm:w-14"
          />
          <div className="flex flex-col justify-center">
            <span
              className={`text-[15px] font-bold leading-tight transition-colors sm:text-[17px] ${
                useDarkText ? "text-[#0a1f44]" : "text-white"
              }`}
            >
              Vidi Meth Digital Services
            </span>
            <span
              className={`text-[11px] font-medium transition-colors sm:text-[12px] ${
                useDarkText ? "text-[#0077c8]" : "text-sky-300 font-semibold"
              }`}
            >
              OPC Private Limited
            </span>
          </div>
        </Link>

        <div className="ml-auto hidden items-center gap-2 xl:flex">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              link={link}
              className={`nav-link rounded-md px-4 py-2 text-[15px] font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0077c8] ${
                useDarkText
                  ? "text-[#0a1f44] hover:text-[#0077c8]"
                  : "text-white hover:bg-white/10 hover:text-white"
              }`}
            />
          ))}

          {/* Explore Dropdown (Desktop) */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsExploreOpen(true)}
            onMouseLeave={() => {
              setIsExploreOpen(false);
              setIsLegalOpen(false);
            }}
          >
            <button
              type="button"
              onClick={() => setIsExploreOpen((prev) => !prev)}
              className={`nav-link flex items-center gap-1.5 rounded-md px-4 py-2 text-[15px] font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0077c8] ${
                useDarkText
                  ? "text-[#0a1f44] hover:text-[#0077c8]"
                  : "text-white hover:bg-white/10 hover:text-white"
              }`}
              aria-expanded={isExploreOpen}
            >
              Explore
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${
                  isExploreOpen
                    ? "rotate-180 text-[#0077c8]"
                    : useDarkText
                    ? "text-slate-500"
                    : "text-white/70"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown Menu Panel */}
            <div
              className={`absolute right-0 top-full pt-2 w-60 z-50 transition-all duration-200 origin-top-right ${
                isExploreOpen
                  ? "visible opacity-100 translate-y-0"
                  : "invisible opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-1.5 shadow-[0_20px_50px_rgba(10,31,68,0.14)] ring-1 ring-slate-900/5 space-y-0.5">
                <div className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0077c8] bg-[#f5fbff] rounded-md mb-1">
                  Explore Pages
                </div>

                {/* Legal Nested Dropdown Item */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsLegalOpen(true)}
                  onMouseLeave={() => setIsLegalOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setIsLegalOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#0a1f44] transition hover:bg-[#f4f9ff] hover:text-[#0077c8]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f0f7ff] text-[#0077c8]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </span>
                      <span>Legal</span>
                    </div>
                    <svg
                      className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                        isLegalOpen ? "rotate-90 text-[#0077c8]" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Submenu Expandable List */}
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isLegalOpen
                        ? "max-h-56 opacity-100 my-1 ml-3 border-l-2 border-[#0077c8]/25 pl-2 space-y-0.5"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {legalLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => {
                          setIsExploreOpen(false);
                          setIsLegalOpen(false);
                        }}
                        className="flex items-center gap-2 rounded-md px-2 py-1 text-xs font-medium text-slate-700 transition hover:bg-[#f4f9ff] hover:text-[#0077c8]"
                      >
                        <span className="text-[#0077c8]">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Other Explore Links (Reduced spacing) */}
                {exploreLinks.map((item) => {
                  const isExt = item.href.startsWith("http");
                  const content = (
                    <span className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#0a1f44] transition hover:bg-[#f4f9ff] hover:text-[#0077c8]">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f0f7ff] text-[#0077c8]">
                        {item.icon}
                      </span>
                      <span className="flex-1">{item.label}</span>
                      {isExt && (
                        <svg className="h-3 w-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      )}
                    </span>
                  );

                  if (isExt) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          setIsExploreOpen(false);
                          setIsLegalOpen(false);
                        }}
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        setIsExploreOpen(false);
                        setIsLegalOpen(false);
                      }}
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className={`absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0077c8] sm:right-6 lg:right-8 xl:hidden [&_svg]:h-6 [&_svg]:w-6 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[2] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round ${
            useDarkText
              ? "border border-slate-200 bg-white/90 text-[#0a1f44] shadow-sm hover:border-[#0077c8]/35 hover:text-[#0077c8]"
              : "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
          }`}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="site-mobile-menu"
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        id="site-mobile-menu"
        className={`fixed left-0 right-0 top-20 overflow-y-auto border-t border-slate-200 bg-white shadow-[0_18px_38px_rgba(10,31,68,0.12)] transition-all duration-300 xl:hidden ${
          isMenuOpen ? "max-h-[calc(100vh-80px)] opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="mx-auto grid w-full max-w-7xl gap-1 px-4 sm:px-6 lg:px-8">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              link={link}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md px-3 py-2.5 text-[15px] font-bold text-[#0a1f44] transition hover:bg-[#f4f9ff] hover:text-[#0077c8]"
            />
          ))}

          {/* Mobile Explore Links Submenu */}
          <div className="mt-2 border-t border-slate-100 pt-2">
            <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0077c8]">
              Explore Pages
            </div>

            {/* Mobile Legal Accordion */}
            <div className="mt-1">
              <button
                type="button"
                onClick={() => setIsMobileLegalOpen((prev) => !prev)}
                className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-[#0a1f44] hover:bg-[#f4f9ff] hover:text-[#0077c8]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f0f7ff] text-[#0077c8]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                  <span>Legal</span>
                </div>
                <svg className={`h-4 w-4 text-slate-400 transition-transform ${isMobileLegalOpen ? "rotate-180 text-[#0077c8]" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMobileLegalOpen && (
                <div className="ml-5 mt-1 space-y-0.5 border-l-2 border-[#0077c8]/25 pl-2">
                  {legalLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium text-slate-700 hover:text-[#0077c8]"
                    >
                      <span className="text-[#0077c8]">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Mobile Explore Links */}
            <div className="mt-1 grid gap-0.5">
              {exploreLinks.map((item) => {
                const isExt = item.href.startsWith("http");
                const content = (
                  <span className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold text-[#0a1f44] transition hover:bg-[#f4f9ff] hover:text-[#0077c8]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f0f7ff] text-[#0077c8]">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </span>
                );

                if (isExt) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
