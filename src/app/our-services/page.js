"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const services = [
  {
    id: "insurance-policy",
    title: "Insurance Policy",
    category: "Financial & Insurance",
    eyebrow: "Personalized Consultation",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    badgeBg: "bg-sky-50 text-sky-700 ring-sky-200",
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
    category: "Business Growth",
    eyebrow: "Reliable Assistance",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    badgeBg: "bg-emerald-50 text-emerald-700 ring-emerald-200",
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
    category: "Financial & Insurance",
    eyebrow: "Financial Certainty",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    badgeBg: "bg-amber-50 text-amber-700 ring-amber-200",
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
    category: "Education & Commerce",
    eyebrow: "Learning Access",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    badgeBg: "bg-purple-50 text-purple-700 ring-purple-200",
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
    category: "Education & Commerce",
    eyebrow: "Seamless Commerce",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    badgeBg: "bg-rose-50 text-rose-700 ring-rose-200",
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
    category: "Business Growth",
    eyebrow: "Growth Innovation",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    badgeBg: "bg-blue-50 text-blue-700 ring-blue-200",
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
  "Financial & Insurance",
  "Education & Commerce",
  "Business Growth",
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
        className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-[#050c1a] bg-cover bg-center px-5 py-20 text-center text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5, 12, 26, 0.75), rgba(5, 12, 26, 0.88)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,119,200,0.2),transparent_50%)]" />

        <div className="relative mx-auto w-full max-w-7xl" data-aos="fade-up">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#38bdf8] backdrop-blur-md border border-white/10 mb-4">
            World-Class Solutions
          </span>
          <h1 className="text-[38px] font-extrabold tracking-tight sm:text-[52px] lg:text-[60px]">
            Our Digital Services
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[16px] font-normal leading-relaxed text-slate-300 sm:text-[18px]">
            Empowering individuals and enterprises across India with specialized solutions in insurance, education, finance, property, and e-commerce.
          </p>

          <nav
            className="mt-6 flex items-center justify-center gap-3 text-[14px] font-medium text-slate-300"
            aria-label="Breadcrumb"
          >
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
            <span className="text-white">Our Services</span>
          </nav>
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
            <h2 className="text-[30px] font-bold text-[#0a1f44] sm:text-[40px]">
              Innovative Solutions Built For Growth
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#0077c8]" />
          </div>

          {/* Category Filter Pills */}
          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "bg-[#0a1f44] text-white shadow-lg shadow-[#0a1f44]/20 scale-105"
                      : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Grid of Service Cards */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <article
                key={service.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(10,31,68,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0077c8]/30 hover:shadow-[0_20px_48px_rgba(0,119,200,0.12)]"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                {/* Image Container with Top Badges */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ring-1 backdrop-blur-md ${service.badgeBg}`}>
                    {service.category}
                  </span>

                  {/* Number Badge */}
                  <span className="absolute right-4 bottom-3 text-2xl font-black text-white/40 tracking-tighter">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#1b8b4b]">
                    {service.eyebrow}
                  </p>

                  <h3 className="mt-1.5 text-[21px] font-bold text-[#0a1f44] transition-colors group-hover:text-[#0077c8]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[14.5px] font-normal leading-relaxed text-slate-600 text-justify">
                    {service.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Banner */}
      <section className="bg-white border-t border-slate-200/80 px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div data-aos="fade-right">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b8b4b]">
                Service Assurance
              </span>
              <h2 className="mt-2 text-[30px] font-bold leading-tight text-[#0a1f44] sm:text-[38px]">
                Why Businesses Trust Vidi Meth Digital Services
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-slate-600 text-justify">
                We combine deep domain insights across education, real estate, jobs, finance, and e-commerce to deliver end-to-end digital solutions that yield concrete, measurable growth.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { title: "Tailored Planning", desc: "Solutions built around your exact goals." },
                  { title: "Transparent Pricing", desc: "No hidden charges, clear financial roadmap." },
                  { title: "End-to-End Support", desc: "Continuous guidance from launch to scale." },
                  { title: "Proven Track Record", desc: "Over 582+ successful client projects." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-100 bg-[#f8fafc] p-4 shadow-sm">
                    <h4 className="text-sm font-bold text-[#0a1f44]">{item.title}</h4>
                    <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-[#0a1f44] p-8 text-white shadow-xl lg:p-10" data-aos="fade-left">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#0077c8]/20 blur-3xl" />
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#38bdf8]">
                Get Started Today
              </span>
              <h3 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">
                Ready to Elevate Your Digital Presence & Growth?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Connect with our team of specialists to discuss your tailored requirements and unlock new growth opportunities.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-xl bg-[#0077c8] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#005f91]"
                >
                  Contact Our Team
                </a>
                <a
                  href="/about"
                  className="rounded-xl bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20 border border-white/15"
                >
                  Explore Company Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
