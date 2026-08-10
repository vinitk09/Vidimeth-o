"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/our-services" },
  { label: "Our Divisions", href: "/our-divisions" },
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
      <a href={link.href} onClick={onClick} className={className}>
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white text-[#0a1f44] shadow-[0_8px_26px_rgba(10,31,68,0.08)]">
      <nav className="relative mx-auto flex min-h-20 w-full max-w-7xl items-center gap-4 px-4 py-2 pr-16 font-sans sm:px-6 sm:pr-20 lg:px-8 lg:pr-24 xl:pr-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Vidi Meth Digital Services home"
        >
          <Image
            src="/vidimethlogo1.png"
            alt="Vidi Meth Digital Services"
            width={112}
            height={112}
            priority
            className="h-12 w-12 rounded-full object-cover shadow-md ring-1 ring-slate-200 sm:h-14 sm:w-14"
          />
          <div className="flex flex-col justify-center">
            <span className="text-[15px] font-bold leading-tight text-[#0a1f44] sm:text-[17px]">
              Vidi Meth Digital Services
            </span>
            <span className="text-[11px] font-medium text-[#0077c8] sm:text-[12px]">
              OPC Private Limited
            </span>
          </div>
        </Link>

        <div className="ml-auto hidden items-center gap-2 xl:flex">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              link={link}
              className="nav-link rounded-md px-4 py-2 text-[15px] font-normal transition hover:text-[#0077c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0077c8]"
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-slate-200 bg-white text-[#0a1f44] shadow-sm transition hover:border-[#0077c8]/35 hover:text-[#0077c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0077c8] sm:right-6 lg:right-8 xl:hidden [&_svg]:h-6 [&_svg]:w-6 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[2] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="site-mobile-menu"
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>
      </nav>

      <div
        id="site-mobile-menu"
        className={`fixed left-0 right-0 top-20 overflow-hidden border-t border-slate-200 bg-white shadow-[0_18px_38px_rgba(10,31,68,0.12)] transition-all duration-300 xl:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto grid w-full max-w-7xl gap-1 px-4 py-3 sm:px-6 lg:px-8">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              link={link}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md px-3 py-3 text-[15px] font-normal text-[#0a1f44] transition hover:bg-[#f4f9ff] hover:text-[#0077c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0077c8]"
            />
          ))}
        </div>
      </div>
    </header>
  );
}
