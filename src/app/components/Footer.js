import Image from "next/image";
import Link from "next/link";

function SectionHeading({ title }) {
  return (
    <h3 className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
      <span className="h-0.5 w-4 bg-[#ff6b00]" />
      {title}
    </h3>
  );
}

function CustomIcon({ type }) {
  const icons = {
    info: (
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z" />
    ),
    contact: (
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    ),
    briefcase: (
      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
    ),
    faq: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
    ),
    privacy: (
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    ),
    terms: (
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    ),
    grievance: (
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    ),
    disclaimer: (
      <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    ),
    external: (
      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    ),
    pin: (
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    ),
    mail: (
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    ),
    facebook: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
    twitter: (
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    ),
    instagram: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
    linkedin: (
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    ),
  };

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0 text-white/60">
      {icons[type]}
    </svg>
  );
}

const aboutLinks = [
  { label: "About Us", href: "/about", icon: "info" },
  { label: "Contact Us", href: "/contact", icon: "contact" },
  { label: "Career", href: "/career", icon: "briefcase" },
  { label: "FAQs", href: "/faqs", icon: "faq" },
  { label: "Write a Review", href: "/review", icon: "info" },
];

const divisionLinks = [
  { label: "www.vmacademys.com", href: "https://www.vmacademys.com/", icon: "external" },
  { label: "www.villagemycity.com", href: "https://www.villagemycity.com/", icon: "external" },
  { label: "www.gojobin.com", href: "https://www.gojobin.com/", icon: "external" },
  { label: "www.loanvidhi.com", href: "https://www.loanvidhi.com/", icon: "external" },
  { label: "www.vmhomemart.com", href: "https://www.vmhomemart.com/", icon: "external" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy", icon: "privacy" },
  { label: "Terms of Use", href: "/terms-of-use", icon: "terms" },
  { label: "Grievances", href: "/grievance", icon: "grievance" },
  { label: "Disclaimer", href: "/disclaimer", icon: "disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-[#05070c] text-white font-sans text-sm border-t border-white/10">
      {/* Main Footer Container */}
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Company Logo & Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3.5">
              <Image
                src="/vidimethlogo1.png"
                alt="Vidi Meth Digital Services"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full bg-white object-cover ring-2 ring-white/20"
              />
              <div>
                <p className="text-base font-bold leading-tight text-white">
                  Vidi Meth Digital Services
                </p>
                <p className="mt-0.5 text-xs font-normal text-white/70">
                  OPC Private Limited
                </p>
              </div>
            </div>

            <p className="text-[13px] leading-relaxed text-white/75">
              India&apos;s trusted digital marketing, business management, concept marketing, and online education partner.
            </p>

            <p className="text-xs font-semibold text-white/90">
              Vidi Meth Digital Services (OPC) Pvt. Ltd.
            </p>

            <div className="inline-block rounded-md bg-white/10 px-3 py-1 text-[11px] font-mono font-medium text-white/80 border border-white/10">
              CIN: U52100JH2017OPC009718
            </div>
          </div>

          {/* Column 2: ABOUT */}
          <div>
            <SectionHeading title="ABOUT" />
            <ul className="space-y-2.5 text-[13.5px]">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="flex items-center gap-2.5 text-white/75 transition hover:text-white"
                    >
                      <CustomIcon type={link.icon} />
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="flex items-center gap-2.5 text-white/75 transition hover:text-white"
                    >
                      <CustomIcon type={link.icon} />
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: DIVISIONS */}
          <div>
            <SectionHeading title="DIVISIONS" />
            <ul className="space-y-2.5 text-[13.5px]">
              {divisionLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-white/75 transition hover:text-white"
                  >
                    <CustomIcon type={link.icon} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: LEGAL */}
          <div>
            <SectionHeading title="LEGAL" />
            <ul className="space-y-2.5 text-[13.5px]">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="flex items-center gap-2.5 text-white/75 transition hover:text-white"
                    >
                      <CustomIcon type={link.icon} />
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="flex items-center gap-2.5 text-white/75 transition hover:text-white"
                    >
                      <CustomIcon type={link.icon} />
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: CONTACT */}
          <div className="space-y-4">
            <SectionHeading title="CONTACT" />

            <div className="space-y-3 text-[13px]">
              {/* Registered Office */}
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 shadow-sm border border-white/10 text-[#0077c8]">
                  <CustomIcon type="pin" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                    REGISTERED OFFICE
                  </p>
                  <p className="mt-0.5 text-white/80 leading-snug">
                    147 Aambagan Road, Sakchi, Jamshedpur, Jharkhand – 831001
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 shadow-sm border border-white/10 text-[#0077c8]">
                  <CustomIcon type="mail" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                    EMAIL US
                  </p>
                  <a
                    href="mailto:info@vidimeth.com"
                    className="mt-0.5 block font-medium text-[#38bdf8] hover:underline"
                  >
                    info@vidimeth.com
                  </a>
                </div>
              </div>

              {/* Tax Details & Social Icons */}
              <div className="pt-2 text-xs text-white/60 flex flex-wrap items-center justify-between gap-2 border-t border-white/10">
                <div className="space-y-0.5">
                  <p><span className="font-semibold text-white/80">GSTIN:</span> 20AAFCV8003N1ZC</p>
                  <p><span className="font-semibold text-white/80">PAN:</span> AAFCV8003N</p>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {[
                    { type: "facebook", href: "https://www.facebook.com/vidimeth", label: "Facebook" },
                    { type: "twitter", href: "https://x.com/vidimeth", label: "Twitter" },
                    { type: "linkedin", href: "https://www.linkedin.com/company/vidimeth/", label: "LinkedIn" },
                  ].map((item) => (
                    <a
                      key={item.type}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white shadow-md border border-white/15 transition-all duration-300 hover:bg-[#0077c8] hover:border-[#0077c8] hover:scale-110 focus:outline-none"
                      aria-label={`Vidi Meth ${item.label}`}
                    >
                      <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        {item.type === "facebook" && (
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        )}
                        {item.type === "twitter" && (
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        )}
                        {item.type === "linkedin" && (
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-[#0a0d14] px-5 py-2.5 sm:px-8 lg:px-10 text-xs text-white/60">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>&copy; 2026 Vidi Meth Digital Services (OPC) Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
