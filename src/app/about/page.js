import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "About Vidi Meth Digital Services",
  description:
    "Learn about Vidi Meth Digital Services and its digital platforms across education, real estate, jobs, finance, and e-commerce.",
};

const platforms = [
  {
    name: "VM Academy",
    url: "www.vmacademys.com",
    href: "https://www.vmacademys.com/",
    category: "Education Portal",
    text: "An online education platform that helps students discover courses, colleges, admissions, eligibility, exams, fees, placements, scholarships, and career guidance across popular UG and PG streams in India.",
    color: "bg-[#e0f2fe] text-[#0284c7] ring-[#0284c7]/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
      </svg>
    ),
  },
  {
    name: "VillageMyCity",
    url: "www.villagemycity.com",
    href: "https://www.villagemycity.com/",
    category: "Real Estate Portal",
    text: "A property and marketplace platform for buyers, sellers, owners, builders, promoters, agents, and dealers to connect online and transact offline with greater ease.",
    color: "bg-[#dcfce7] text-[#16a34a] ring-[#16a34a]/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
      </svg>
    ),
  },
  {
    name: "GoJobin",
    url: "www.gojobin.com",
    href: "https://www.gojobin.com/",
    category: "Recruitment Platform",
    text: "An online recruitment solution for candidates and employers, supporting job discovery, staffing, recruiting, free job posting, and opportunities for freshers and experienced professionals.",
    color: "bg-[#f3e8ff] text-[#9333ea] ring-[#9333ea]/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
      </svg>
    ),
  },
  {
    name: "LOAN vidhi",
    url: "www.loanvidhi.com",
    href: "https://www.loanvidhi.com/",
    category: "Finance Services",
    text: "A financial consultancy platform focused on insurance, secured and unsecured loans, monetary affairs, real estate affairs, financial planning, and portfolio management services.",
    color: "bg-[#ffedd5] text-[#ea580c] ring-[#ea580c]/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      </svg>
    ),
  },
  {
    name: "VMhomeMART",
    url: "www.vmhomemart.com",
    href: "/vmhomemart",
    category: "E-commerce Store",
    text: "A marketplace and online shopping concept for electronics, fashion, kitchen items, home needs, and other product categories in the fast-growing Indian market.",
    color: "bg-[#ffe4e6] text-[#e11d48] ring-[#e11d48]/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z" />
      </svg>
    ),
  },
];

const whyChoosePoints = [
  {
    number: "01",
    title: "Our Commitment",
    description:
      "We are committed to building our platforms with a strong focus on simplicity, accessibility, innovation, reliability, developing digital platforms with a long-term perspective and responsible digital practices. As our ecosystem grows, we aim to continuously improve our technology, services, partnerships, and user experience.",
  },
  {
    number: "02",
    title: "Our Vision",
    description:
      "Our vision is to build a reliable and customer-focused digital ecosystem where people can conveniently access education, jobs, real estate, insurance, loan support, e-commerce, and other digital services from one platform.",
  },
  {
    number: "03",
    title: "Our Mission",
    description:
      "Our mission is to use technology to simplify access, connect people with opportunities, provide useful information, and deliver convenient digital services while maintaining transparency, professionalism, and customer satisfaction.",
  },
  {
    number: "04",
    title: "Our Approach",
    description:
      "Discover. Connect. Compare. Choose. Grow.\nWe are building our platforms around five fundamental principles:\n\n• Discover : Help users find relevant information, products, services and opportunities.\n• Connect : Connect users with institutions, businesses, employers, professionals and service providers.\n• Compare : Where appropriate, provide useful information that helps users evaluate available choices.\n• Choose : Enable users to make better-informed decisions based on their own requirements.\n• Grow : Create digital opportunities for individuals, businesses, professionals and entrepreneurs.",
  },
  {
    number: "05",
    title: "Our Core Aspirations",
    description:
      "We aspire to create digital platforms that are:\n\nTrusted • Accessible • User-Friendly • Innovative • Transparent • Scalable • Technology-Driven • Customer-Centric • Building a Digital Ecosystem for the Future",
  },
  {
    number: "06",
    title: "Our Tagline",
    description:
      "Vidi Meth Digital Services — Connecting Ideas, Technology & Growth.",
  },
];

const stats = [
  { value: "215+", label: "Happy Clients" },
  { value: "582", label: "Projects Done" },
  { value: "70+", label: "Awards Won" },
  { value: "25+", label: "Experience Years" },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m7.5 12.3 3 3 6-6.6" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden no-scrollbar bg-white pt-0">
      <Header />

      {/* Banner */}
      <section
        className="relative flex min-h-[360px] items-center overflow-hidden bg-black bg-cover bg-center px-5 pt-28 pb-20 text-left text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,119,200,0.25),transparent_50%)]" />

        <div className="relative mx-auto w-full max-w-7xl flex items-center justify-center flex-col" data-aos="fade-up">
          <h1 className="text-[34px] font-bold tracking-tight sm:text-[42px] lg:text-[52px]">
            About Us
          </h1>
          <div className="mt-4 flex items-center justify-start gap-2 text-xs sm:text-sm font-medium text-slate-300">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-[#38bdf8] font-semibold">About Us</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Company Profile */}
      <section className="bg-white px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl items-start gap-12 lg:grid-cols-[0.45fr_0.55fr]">
          <div className="lg:sticky lg:top-24 w-full">
            <div
              className="relative w-full max-w-md mx-auto lg:max-w-none aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_36px_rgba(10,31,68,0.08)]"
              data-aos="fade-right"
            >
              <Image
                src="/whychooseus.png"
                alt="Why Choose Vidi Meth Digital Services"
                fill
                unoptimized
                className="object-contain p-2"
              />
            </div>
          </div>

          <div
            className="flex flex-col space-y-6 text-slate-800"
            data-aos="fade-left"
          >
            <div>
              {/* <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-[#1d6b9e]">
                Why Choose Us
              </span> */}
              <h2 className="text-2xl font-bold text-black sm:text-[30px] leading-tight">
                Connecting People, Opportunities & Services Through One Digital Ecosystem
              </h2>
              <div className="mt-4 space-y-4 text-slate-700 text-sm sm:text-[15px] font-normal leading-relaxed">
                <p>
                  Welcome to <strong className="font-semibold text-slate-900">Vidi Meth Digital Services</strong>, a technology-driven digital services company focused on building a trusted, convenient, and accessible ecosystem for individuals, families, students, job seekers, professionals, businesses, property seekers, and consumers.
                </p>

                <div className="space-y-3 pt-1">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#1d6b9e]" />
                    Our Digital Ecosystem
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    At Vidi Meth Digital Services, we are developing a multi-platform digital ecosystem, with dedicated websites and digital portals for different sectors:
                  </p>

                  <div className="space-y-2.5 pt-1 text-xs sm:text-sm">
                    {[
                      { name: "Education", text: "Educational information, courses, admissions, learning resources, and related services." },
                      { name: "Real Estate", text: "Property listings, buying, selling, renting, and real-estate information." },
                      { name: "Jobs & Careers", text: "Job opportunities, recruitment information, career resources, and employment support." },
                      { name: "Insurance", text: "Insurance-related information, comparisons, guidance, and support services." },
                      { name: "Loan Support", text: "Loan information, eligibility guidance, financial resources, and application support." },
                      { name: "E-Commerce", text: "Online shopping, products, services, and digital marketplace solutions." },
                      { name: "Many More Services", text: "We aim to continuously expand into new digital categories based on customer needs and emerging opportunities." },
                    ].map((item) => (
                      <div key={item.name} className="flex items-start gap-2.5">
                        <span className="mt-0.5 text-[#1d6b9e] font-bold text-sm leading-none shrink-0">
                          ✓
                        </span>
                        <p className="text-slate-700 leading-relaxed">
                          <strong className="font-semibold text-slate-900">{item.name}:</strong> {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1d6b9e] mb-2.5">
                    Each platform can have:
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-800">
                    {["Its own identity", "Its own website", "Its own audience", "Its own services", "Its own digital experience"].map((step, idx, arr) => (
                      <span key={step} className="flex items-center gap-1.5">
                        <span className="rounded-md bg-white px-2.5 py-1.5 border border-slate-200 text-[#0a1f44] shadow-2xs">
                          {step}
                        </span>
                        {idx < arr.length - 1 && <span className="text-[#1d6b9e] font-bold">→</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Point-wise List */}
            <div className="space-y-4 pt-2">
              {whyChoosePoints.map((pt) => (
                <div
                  key={pt.number}
                  className="group rounded-xl border border-slate-200/80 bg-[#f8fafc] p-4 sm:p-5 transition-all duration-200 hover:border-[#1d6b9e]/40 hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1d6b9e]/10 text-sm font-bold text-[#1d6b9e] ring-1 ring-[#1d6b9e]/20 group-hover:bg-[#1d6b9e] group-hover:text-white transition-colors">
                      {pt.number}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1d6b9e] transition-colors">
                        {pt.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed font-normal whitespace-pre-line">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Platforms (New Redesign layout with vibrant colored icons & justified text) */}
      <section
        className="px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-20 border-t border-slate-200/80"
        style={{ background: "linear-gradient(135deg, #f4f6fb 0%, #e8eaf6 100%)" }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14" data-aos="fade-up">
            <h2 className="text-[32px] font-bold tracking-tight text-[#111827]">
              Our Platforms
            </h2>
            <div className="mt-3 flex flex-col gap-3 border-l-2 border-[#1d6b9e] pl-3">
              <p className="text-[15px] font-semibold text-slate-900">
                Whether someone is:
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <span className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 border border-slate-200 shadow-2xs text-slate-800">
                  Looking for a course
                </span>
                <span className="text-[#1d6b9e] font-bold">→</span>
                <span className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 border border-slate-200 shadow-2xs text-slate-800">
                  Searching for a job
                </span>
                <span className="text-[#1d6b9e] font-bold">→</span>
                <span className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 border border-slate-200 shadow-2xs text-slate-800">
                  Exploring a property
                </span>
                <span className="text-[#1d6b9e] font-bold">→</span>
                <span className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 border border-slate-200 shadow-2xs text-slate-800">
                  Understanding insurance
                </span>
                <span className="text-[#1d6b9e] font-bold">→</span>
                <span className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 border border-slate-200 shadow-2xs text-slate-800">
                  Seeking loan information
                </span>
                <span className="text-[#1d6b9e] font-bold">→</span>
                <span className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 border border-slate-200 shadow-2xs text-slate-800">
                  Shopping online
                </span>
                <span className="text-[#1d6b9e] font-bold">→</span>
                <span className="inline-flex items-center rounded-lg bg-[#1d6b9e] text-white px-3 py-1.5 font-semibold shadow-2xs">
                  Looking for a local service
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {platforms.map((platform, index) => (
              <article
                key={platform.name}
                className="flex flex-col items-center text-center group rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 90}
              >
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${platform.color} ring-1 shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold text-[#111827]">
                  {platform.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#1d6b9e]">
                  {platform.category}
                </p>
                <p className="mt-3 text-[14.5px] font-normal leading-[1.7] text-slate-600 text-justify flex-1">
                  {platform.text}
                </p>
                {platform.href.startsWith("/") ? (
                  <Link
                    href={platform.href}
                    className="mt-4 text-sm font-semibold text-[#1d6b9e] hover:underline"
                  >
                    {platform.url} &rarr;
                  </Link>
                ) : (
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-semibold text-[#1d6b9e] hover:underline"
                  >
                    {platform.url} &rarr;
                  </a>
                )}
              </article>
            ))}

            {/* 6th Card: Redirect to Services */}
            <article
              className="flex flex-col items-center justify-between text-center group rounded-2xl bg-transparent p-6 sm:p-8 transition-all duration-300 min-h-[320px]"
              data-aos="fade-up"
              data-aos-delay={5 * 90}
            >
              <div className="flex flex-col items-center justify-center w-full my-auto py-2">
                <p className="text-sm sm:text-[15px] font-medium text-slate-700 leading-relaxed mb-5 px-2">
                  Discover all our comprehensive digital solutions, enterprise offerings, and specialized services.
                </p>

                {/* Arrow Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#1d6b9e]/10 text-[#1d6b9e] ring-1 ring-[#1d6b9e]/20 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1d6b9e] group-hover:text-white">
                  <svg className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                <Link
                  href="/our-services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1d6b9e] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#005f91] transition-all duration-300 group-hover:shadow-md"
                >
                  <span>View All</span>
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
