"use client";

import { useState } from "react";
import Image from "next/image";

const divisions = [
  {
    id: "education",
    name: "VM Academy",
    category: "Education Portal",
    domain: "www.vmacademys.com",
    href: "https://www.vmacademys.com/",
    logo: "/vmlogo.png",
    previewImage: "/vmbanner.png",
    accentColor: "#0284c7",
    badgeStyle: "bg-sky-50 text-[#0284c7] ring-sky-200 border-sky-100",
    buttonStyle: "bg-[#0284c7] hover:bg-[#0369a1]",
    summary:
      "An online education portal providing course and college selection services. VM Academy helps students discover courses, colleges, entrance exams, placement statistics, and career guidance across popular UG & PG streams in India.",
    highlights: [
      "Comprehensive college & course selection platform",
      "Post-examination admission guidance & eligibility insights",
      "Information across Engineering, Medical, Management & Law",
    ],
    tags: ["Education", "Colleges", "Courses", "Admissions", "Guidance"],
  },
  {
    id: "realestate",
    name: "VillageMyCity",
    category: "Real Estate Network",
    domain: "www.villagemycity.com",
    href: "https://www.villagemycity.com/",
    logo: "/villagemycitylogo.png",
    previewImage: "/village.png",
    accentColor: "#16a34a",
    badgeStyle: "bg-emerald-50 text-[#16a34a] ring-emerald-200 border-emerald-100",
    buttonStyle: "bg-[#16a34a] hover:bg-[#15803d]",
    summary:
      "A premier real estate property portal in India. VillageMyCity connects buyers, sellers, property owners, builders, and dealers online for transparent, hassle-free property discovery and offline transactions.",
    highlights: [
      "Verified property listings for buyers & sellers",
      "Direct platform for builders, promoters & real estate agents",
      "Meet online, transact offline property ecosystem",
    ],
    tags: ["Real Estate", "Properties", "Listings", "Builders", "Local"],
  },
  {
    id: "recruitment",
    name: "GoJobin",
    category: "Recruitment Solution",
    domain: "www.gojobin.com",
    href: "https://www.gojobin.com/",
    logo: "/gojobinlogo.png",
    previewImage: "/gojobinbanner.png",
    accentColor: "#9333ea",
    badgeStyle: "bg-purple-50 text-[#9333ea] ring-purple-200 border-purple-100",
    buttonStyle: "bg-[#9333ea] hover:bg-[#7e22ce]",
    summary:
      "An innovative online recruitment portal connecting candidates with top employers across India. GoJobin offers free job posting, staffing services, and career opportunities for freshers and experienced professionals.",
    highlights: [
      "Free job posting portal for employers & recruiters",
      "Curated vacancies for freshers & experienced candidates",
      "End-to-end online staffing & employment solutions",
    ],
    tags: ["Jobs", "Hiring", "Recruitment", "Careers", "Staffing"],
  },
  {
    id: "finance",
    name: "LOAN vidhi",
    category: "Financial Consultancy",
    domain: "www.loanvidhi.com",
    href: "https://www.loanvidhi.com/",
    logo: "/loanvidhilogo.png",
    previewImage: "/loanslider.png",
    accentColor: "#ea580c",
    badgeStyle: "bg-amber-50 text-[#ea580c] ring-amber-200 border-amber-100",
    buttonStyle: "bg-[#ea580c] hover:bg-[#c2410c]",
    summary:
      "A trusted financial consultancy platform specializing in secured and unsecured loan arrangements, insurance advisory, monetary planning, and portfolio management services across India.",
    highlights: [
      "Secured & unsecured loan arrangements with partner banks",
      "Custom financial planning & portfolio management",
      "Insurance & real estate monetary advisory",
    ],
    tags: ["Finance", "Loans", "Insurance", "Advisory", "Portfolio"],
  },
  {
    id: "ecommerce",
    name: "VMhomeMART",
    category: "E-Commerce Store",
    domain: "www.vmhomemart.com",
    href: "https://www.vmhomemart.com/",
    logo: "/vmhomemartlogo.png",
    previewImage: "/vmhomemart-image.jpeg",
    accentColor: "#e11d48",
    badgeStyle: "bg-rose-50 text-[#e11d48] ring-rose-200 border-rose-100",
    buttonStyle: "bg-[#e11d48] hover:bg-[#be123c]",
    summary:
      "A modern e-commerce marketplace in the fast-growing Indian retail sector, featuring electronics, fashion, kitchenware, home essentials, and lifestyle products with a direct seller-to-buyer platform.",
    highlights: [
      "Direct seller-to-buyer online retail marketplace",
      "Wide selection across electronics, fashion & home needs",
      "Reliable online shopping experience with secure ordering",
    ],
    tags: ["E-Commerce", "Retail", "Shopping", "Electronics", "Lifestyle"],
  },
];

const categoryFilters = [
  { id: "all", label: "All Divisions" },
  { id: "education", label: "Education" },
  { id: "realestate", label: "Real Estate" },
  { id: "recruitment", label: "Recruitment" },
  { id: "finance", label: "Finance" },
  { id: "ecommerce", label: "E-Commerce" },
];

export default function OurDivisionsContent() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredDivisions =
    activeCategory === "all"
      ? divisions
      : divisions.filter((div) => div.id === activeCategory);

  return (
    <div className="bg-[#f8fafc] text-[#1d2736] font-sans">
      {/* Hero Banner Section */}
      <section
        className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-[#071326] bg-cover bg-center px-5 pt-28 pb-20 text-center text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 11, 34, 0.75), rgba(5, 11, 34, 0.85)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="relative mx-auto w-full max-w-4xl" data-aos="fade-up">
          {/* <span className="inline-block rounded-md bg-[#0077c8]/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#38bdf8] border border-[#38bdf8]/30 mb-4">
            Specialized Business Ecosystem
          </span> */}

          <h1 className="text-[36px] font-bold tracking-tight leading-tight sm:text-[48px] lg:text-[56px]">
            Our Divisions
          </h1>

          {/* <p className="mt-4 mx-auto max-w-2xl text-[15px] text-white/85 font-normal leading-relaxed">
            Vidi Meth Digital Services brings together specialized digital portals spanning online education, real estate marketplace, job recruitment, financial advisory, and retail e-commerce.
          </p> */}
        </div>
      </section>

      {/* Main Divisions Showcase */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">

        {/* Section Heading & Category Filters */}
        <div className="mb-12 text-center" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-widest text-[#005f91]">
            Business Network
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Specialized Platforms Built for Scale
          </h2>
          <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
            Each division is independently operated to serve targeted consumer and enterprise needs with maximum efficiency.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categoryFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveCategory(filter.id)}
                className={`rounded-md px-4 py-2 text-xs font-semibold transition ${activeCategory === filter.id
                  ? "bg-[#005f91] text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Division Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {filteredDivisions.map((division, index) => (
            <article
              key={division.name}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#005f91]/40 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div>
                {/* Header Row: Logo & Category Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-32 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white p-2 shadow-2xs">
                      <Image
                        src={division.logo}
                        alt={`${division.name} logo`}
                        width={140}
                        height={60}
                        className="max-h-10 w-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#005f91] transition-colors">
                        {division.name}
                      </h3>
                      <p className="text-xs font-medium text-slate-500">
                        {division.domain}
                      </p>
                    </div>
                  </div>

                  <span className={`rounded-md px-3 py-1 text-xs font-semibold border ${division.badgeStyle}`}>
                    {division.category}
                  </span>
                </div>

                {/* Banner / Showcase Image */}
                <div className="mt-5 relative h-48 w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                  <Image
                    src={division.previewImage}
                    alt={`${division.name} platform preview`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-semibold tracking-wide">
                      {division.domain}
                    </p>
                  </div>
                </div>

                {/* Summary Description */}
                <p className="mt-5 text-sm text-slate-600 leading-relaxed">
                  {division.summary}
                </p>

                {/* Highlights List */}
                <div className="mt-4 space-y-2 text-xs text-slate-700">
                  <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                    Key Highlights:
                  </p>
                  {division.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <svg className="h-4 w-4 shrink-0 text-[#005f91] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tags Row */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {division.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                {/* <span className="text-xs text-slate-500 font-medium">
                  Official Portal
                </span> */}
                <a
                  href={division.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-xs font-semibold text-white transition ${division.buttonStyle}`}
                >
                  <span>{division.domain}</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Network Strategic Synergy Section */}
      <section className="bg-white border-t border-slate-200 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
            <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
              Why Our Multi-Division Ecosystem Delivers Excellence
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Vidi Meth Digital Services integrates technology, customer support, and strategic partnerships across all five divisions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-[#f8fafc] p-6 text-center shadow-2xs" data-aos="fade-up">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-[#005f91] font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-black">Dedicated Specialization</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Each platform is engineered to address domain-specific requirements in education, recruitment, property, finance, and commerce.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-[#f8fafc] p-6 text-center shadow-2xs" data-aos="fade-up" data-aos-delay="100">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-[#005f91] font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-black">Verified Trust & Security</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                We prioritize user data privacy, verified listing standards, and ethical service delivery across all our web properties.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-[#f8fafc] p-6 text-center shadow-2xs" data-aos="fade-up" data-aos-delay="200">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-[#005f91] font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900">Seamless Cross-Synergy</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Shared digital infrastructure allows our divisions to deliver higher performance, rapid innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
