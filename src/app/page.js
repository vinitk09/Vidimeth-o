import Image from "next/image";
import BusinessDevelopmentSection from "./components/BusinessDevelopmentSection";
import ClientTestimonialsSection from "./components/ClientTestimonialsSection";
import FoundationNetworkSection from "./components/FoundationNetworkSection";
import Footer from "./components/Footer";
import GrowthSupportSection from "./components/GrowthSupportSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

const navLinks = [
  { label: "Home", href: "https://vidimeth.com/" },
  { label: "About Us", href: "https://vidimeth.com/about/" },
  { label: "Our Services", href: "https://vidimeth.com/our-services/" },
  { label: "Our Divisions", href: "https://vidimeth.com/our-divisions/" },
  { label: "FAQs", href: "https://vidimeth.com/faqs/" },
  { label: "Contact Us", href: "https://vidimeth.com/contact/" },
];

const slides = [
  {
    src: "/vmbanner.png",
    alt: "VM Academy course and college guidance banner",
  },
  {
    src: "/gojobinbanner.png",
    alt: "GoJobin find your dream jobs banner",
  },
  {
    src: "/a1.png",
    alt: "Village My City property banner",
  },
];

const welcomeHighlights = [
  {
    label: "Online Marketing",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 18.5V6.25A2.25 2.25 0 0 1 6.25 4h11.5A2.25 2.25 0 0 1 20 6.25v12.25" />
        <path d="M2.75 18.5h18.5l-1.35 1.75H4.1L2.75 18.5Z" />
        <path d="M8 13.5h2.25l1.6-3.75 1.9 5.25L15.4 12H18" />
      </svg>
    ),
  },
  {
    label: "Advertising",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 13.5h3.75L17 8v8l-9.25-5.5H4v3Z" />
        <path d="M7.75 13.5 9 19h3" />
        <path d="M19 10.25c.9.6 1.35 1.35 1.35 2.25S19.9 14.15 19 14.75" />
      </svg>
    ),
  },
  {
    label: "Business Management",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.5 7.25V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5v1.75" />
        <path d="M4 8.25h16v10A1.75 1.75 0 0 1 18.25 20H5.75A1.75 1.75 0 0 1 4 18.25v-10Z" />
        <path d="M4 12.5h16" />
        <path d="M10.25 12.5v1.75h3.5V12.5" />
      </svg>
    ),
  },
  {
    label: "Quality Services",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.75 18.25 6v5.25c0 4.25-2.45 7.25-6.25 9-3.8-1.75-6.25-4.75-6.25-9V6L12 3.75Z" />
        <path d="m8.9 12.2 2.05 2.05 4.25-4.5" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white text-[#0a1f44] shadow-[0_8px_26px_rgba(10,31,68,0.08)]">
        <nav className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-8 px-5 py-2 font-sans sm:px-8 lg:px-10">
          <a
            href="https://vidimeth.com/"
            className="flex shrink-0 items-center"
            aria-label="Vidi Meth Digital Services home"
          >
            <Image
              src="/vidimethlogo1.png"
              alt="Vidi Meth Digital Services"
              width={112}
              height={112}
              priority
              className="h-14 w-14 rounded-full object-cover shadow-md ring-1 ring-slate-200 sm:h-16 sm:w-16"
            />
          </a>

          <div className="flex flex-1 items-center justify-end overflow-x-auto pb-1">
            <div className="flex min-w-max items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link rounded-md px-3 py-2 text-sm font-normal transition hover:text-[#0077c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0077c8] sm:px-4 sm:text-[15px]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section className="hero-slider relative overflow-hidden bg-[#eef7ff]">
        {slides.map((slide, index) => (
          <div
            className="hero-slide absolute inset-0"
            style={{ "--slide-index": index }}
            key={slide.src}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {slides.map((slide, index) => (
            <span
              key={slide.src}
              className="hero-dot block h-2.5 w-8 rounded-full bg-white/70"
              style={{ "--slide-index": index }}
            />
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-[#0a1f44] sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div
            className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-[0_18px_50px_rgba(10,31,68,0.12)]"
            data-aos="fade-right"
          >
            <Image
              src="/welcomebanner2.png"
              alt="Welcome to Vidimeth"
              width={1158}
              height={1364}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mx-auto max-w-2xl lg:mx-0" data-aos="fade-left">
            <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]">
              Welcome
            </p>
            <h1 className="max-w-xl text-[30px] font-semibold leading-[1.22] text-[#0077c8] sm:text-[34px] lg:text-[38px]">
              Welcome To Vidi Meth Digital Services (OPC) Private Limited.
            </h1>
            <p className="mt-5 max-w-2xl text-[17px] font-normal leading-[1.68] tracking-normal text-[#555555]">
              To carry on in India or elsewhere the business of concept
              marketing and online marketing, advertising, business management,
              business administration, office function, direct marketing and to
              provide high quality of services and products to clients.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {welcomeHighlights.map((item) => (
                <div
                  key={item.label}
                  className="flex min-h-28 flex-col items-center justify-center rounded-lg border border-[#0077c8]/15 bg-[#f5fbff] px-3 py-4 text-center shadow-[0_10px_28px_rgba(0,119,200,0.08)]"
                  data-aos="zoom-in"
                  data-aos-delay="120"
                >
                  <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0077c8] shadow-sm ring-1 ring-[#0077c8]/15 [&_svg]:h-7 [&_svg]:w-7 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.7] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round">
                    {item.icon}
                  </span>
                  <span className="text-sm font-normal leading-5 text-[#0a1f44]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BusinessDevelopmentSection />
      <GrowthSupportSection />
      <WhyChooseUsSection />
      <WhatWeDoSection />
      <FoundationNetworkSection />
      <ClientTestimonialsSection />
      <Footer />
    </main>
  );
}
