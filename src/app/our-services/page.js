"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const services = [
  {
    id: "insurance-policy",
    title: "Insurance Policy",
    category: "Insurance & Risk",
    eyebrow: "Personalized Consultation",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    badgeBg: "bg-sky-100 text-sky-800 ring-sky-300/60",
    text: "Experience the difference of personalized consultations. Our experts take the time to understand your specific requirements, offering tailored guidance and strategies that align with your needs.",
    features: [
      "Customized Coverage Options",
      "Expert Risk Assessment & Planning",
      "Dedicated Claims Assistance",
    ],
    link: "https://vidimeth.com/our-services/#",
  },
  {
    id: "quality-support",
    title: "Quality Support",
    category: "Assistance & Helpdesk",
    eyebrow: "Reliable Support",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    badgeBg: "bg-emerald-100 text-emerald-800 ring-emerald-300/60",
    text: "Committed to excellence, our unwavering dedication ensures quality support. We prioritize satisfaction and consistently deliver beyond expectations with dependable service.",
    features: [
      "24/7 Priority Support Desk",
      "Proactive Problem Resolution",
      "Dedicated Relationship Managers",
    ],
    link: "https://vidimeth.com/our-services/#",
  },
  {
    id: "financial-planning",
    title: "Financial Planning Services",
    category: "Loans & Capital",
    eyebrow: "Financial Certainty",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    badgeBg: "bg-amber-100 text-amber-800 ring-amber-300/60",
    text: "Navigate your financial journey confidently with Vidimeth.com. Prioritizing financial control, we provide services for effective planning, management, and better financial clarity.",
    features: [
      "Strategic Capital Management",
      "Investment & Loans Consultancy",
      "Long-term Wealth Portfolio Planning",
    ],
    link: "https://vidimeth.com/our-services/#",
  },
  {
    id: "educational-empowerment",
    title: "Educational Empowerment",
    category: "Education & Learning",
    eyebrow: "Academic Access",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    badgeBg: "bg-purple-100 text-purple-800 ring-purple-300/60",
    text: "Empower yourself with Vidimeth.com's online education platform. Access courses, resources, and information to shape your educational path and support personal growth.",
    features: [
      "Course & College Selection Portal",
      "Admission Eligibility Guidance",
      "Career Growth & Skill Resources",
    ],
    link: "https://vidimeth.com/our-services/#",
  },
  {
    id: "ecommerce-experiences",
    title: "E-commerce Experiences",
    category: "Retail & Marketplace",
    eyebrow: "Digital Storefront",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    badgeBg: "bg-rose-100 text-rose-800 ring-rose-300/60",
    text: "Effortlessly navigate online commerce with Vidimeth.com. Our platform simplifies buying and selling, creating a user-friendly experience for consumers and businesses alike.",
    features: [
      "Multi-Category Digital Storefront",
      "Smooth & Secure Checkout",
      "Buyer & Seller Marketplace Support",
    ],
    link: "https://vidimeth.com/our-services/#",
  },
  {
    id: "blending-business",
    title: "Blending Business",
    category: "Growth & Strategy",
    eyebrow: "Business Innovation",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    badgeBg: "bg-blue-100 text-blue-800 ring-blue-300/60",
    text: "Unlock synergy with our blended business ideas services. We catalyze innovation and foster collaboration for stronger outcomes. Your vision and our expertise create a transformative blend.",
    features: [
      "Cross-Industry Concept Integration",
      "Scalable Business Expansion Models",
      "Strategic Partnerships Network",
    ],
    link: "https://vidimeth.com/our-services/#",
  },
];

const categories = [
  "All Services",
  "Insurance & Risk",
  "Assistance & Helpdesk",
  "Loans & Capital",
  "Education & Learning",
  "Retail & Marketplace",
  "Growth & Strategy",
];

export default function OurServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All Services");

  const filteredServices =
    activeCategory === "All Services"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <main className="overflow-x-hidden no-scrollbar bg-[#f8fafc] pt-20">
      <Header />

      {/* Hero Header */}
      <section
        className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-black bg-cover bg-center px-5 py-20 text-center text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.80)), url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,119,200,0.2),transparent_50%)]" />

        <div className="relative mx-auto w-full max-w-7xl" data-aos="fade-up">
          <h1 className="text-[34px] font-bold tracking-tight sm:text-[42px] lg:text-[52px]">
            Our Services
          </h1>
        </div>
      </section>

      {/* Main Services Container */}
      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center" data-aos="fade-up">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1b8b4b]">
              What We Offer
            </p>
            <h2 className="text-[30px] font-bold text-black sm:text-[34px]">
              Innovative Solutions Built For Growth
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#0077c8]" />
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2" data-aos="fade-up">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 sm:text-xs ${isActive
                    ? "bg-[#0a1f44] text-white shadow-md shadow-[#0a1f44]/20 scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Grid of Compact Service Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <article
                key={service.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_14px_35px_rgba(10,31,68,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#0077c8]/50 hover:shadow-[0_24px_50px_rgba(0,119,200,0.18)]"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                {/* Image Container with Top Badges */}
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {/* Unique Category Pill */}
                  <span className={`absolute left-3.5 top-3.5 rounded-full px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider ring-1 backdrop-blur-md ${service.badgeBg}`}>
                    {service.category}
                  </span>

                  {/* Number Badge */}
                  <span className="absolute right-3.5 bottom-2.5 text-xl font-black text-white/50 tracking-tighter">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1b8b4b]">
                    {service.eyebrow}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-black transition-colors group-hover:text-[#0077c8]">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-[13.5px] font-normal leading-relaxed text-slate-600 text-justify">
                    {service.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
