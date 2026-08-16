import Image from "next/image";
import BusinessDevelopmentSection from "./components/BusinessDevelopmentSection";
import ClientTestimonialsSection from "./components/ClientTestimonialsSection";
import FoundationNetworkSection from "./components/FoundationNetworkSection";
import Footer from "./components/Footer";
import GrowthSupportSection from "./components/GrowthSupportSection";
import Header from "./components/Header";
import WhatWeDoSection from "./components/WhatWeDoSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import StatsCounterSection from "./components/StatsCounterSection";
import FloatingActions from "./components/FloatingActions";

const welcomeHighlights = [
  {
    label: "Concept Marketing",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
  },
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
    label: "Business Administration",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
        <path d="M9 14h6M9 10h6M9 18h2" />
      </svg>
    ),
  },
  {
    label: "Office Function",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
        <path d="M9 7h2M9 11h2M9 15h2M13 7h2M13 11h2M13 15h2" />
      </svg>
    ),
  },
  {
    label: "Direct Marketing",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    label: "High Quality Services",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.75 18.25 6v5.25c0 4.25-2.45 7.25-6.25 9-3.8-1.75-6.25-4.75-6.25-9V6L12 3.75Z" />
        <path d="m8.9 12.2 2.05 2.05 4.25-4.5" />
      </svg>
    ),
  },
  {
    label: "Online Education",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  },
  {
    label: "Real Estate Solutions",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 21h18M3 10l9-7 9 7M5 10v11M19 10v11" />
        <path d="M9 14h6v7H9z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden no-scrollbar bg-white pt-20">
      <Header />

      {/* Hero Banner Section (Responsive Banner without image cutoff) */}
      <section
        className="relative w-full overflow-hidden bg-[#eef7ff]"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="relative w-full flex items-center justify-center">
          <Image
            src="/banner (1).png"
            alt="Vidi Meth Digital Services Banner"
            width={1920}
            height={720}
            priority
            unoptimized
            className="w-full h-auto max-h-[680px] object-contain"
          />
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-[#0a1f44] sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto flex flex-col items-center text-center w-full max-w-7xl">
          <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]" data-aos="fade-up">
            Welcome To
          </p>
          <h1 className="max-w-4xl text-[30px] font-bold  text-black sm:text-[36px] lg:text-[32px]" data-aos="fade-up" data-aos-delay="100">
            Vidi Meth Digital Services (OPC) Private Limited
          </h1>
          <p className="mt-5 max-w-3xl text-[16px] sm:text-[16px] font-normal  text-[#555555]" data-aos="fade-up" data-aos-delay="200">
            To carry on in India or elsewhere the business of concept
            marketing and online marketing, advertising, business management,
            business administration, office function, direct marketing and to
            provide high quality of services and products to clients.
          </p>

          <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
            {welcomeHighlights.map((item, idx) => (
              <div
                key={item.label}
                className="flex min-h-[120px] flex-col items-center justify-center rounded-xl border border-[#0077c8]/15 bg-[#f5fbff] px-4 py-5 text-center shadow-[0_8px_24px_rgba(0,119,200,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(0,119,200,0.14)] hover:border-[#0077c8]/30"
                data-aos="zoom-in"
                data-aos-delay={80 + (idx % 5) * 40}
              >
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0077c8] shadow-sm ring-1 ring-[#0077c8]/15 [&_svg]:h-6 [&_svg]:w-6 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.7] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round">
                  {item.icon}
                </span>
                <span className="text-sm font-bold leading-5 text-black">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BusinessDevelopmentSection />
      <GrowthSupportSection />
      <WhyChooseUsSection />
      <WhatWeDoSection />
      <FoundationNetworkSection />
      <StatsCounterSection />
      <ClientTestimonialsSection />
      <Footer />
    </main>
  );
}
