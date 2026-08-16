import Image from "next/image";
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
    name: "VMhomeMart",
    url: "www.vmhomemart.com",
    href: "https://www.vmhomemart.com/",
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

const reasons = [
  {
    title: "Our Speciality",
    text: "We take pleasure in making your life easier.",
  },
  {
    title: "Customer Service",
    text: "Your requirement is important to us and we work to understand your needs clearly.",
  },
  {
    title: "Professionalism",
    text: "We develop long-term relationships that are mutually beneficial.",
  },
  {
    title: "Expandability",
    text: "We are ready to make fast and effective changes that support future growth.",
  },
  {
    title: "Money Back Guarantee",
    text: "We support customers with refund assurance when service cancellation terms are met.",
  },
  {
    title: "Creative Solutions",
    text: "We help clients make a difference with fresh insights and practical solutions.",
  },
  {
    title: "Happy Customers",
    text: "We go the extra mile with commitment that clients value again and again.",
  },
  {
    title: "World-Wide Expertise",
    text: "Our experience and network help us understand wider markets and trends.",
  },
  {
    title: "Commitment to Quality",
    text: "We deliver solutions in a professional, concrete, and practical way.",
  },
  {
    title: "Sustainable Success",
    text: "We use collaborative methods that create ownership and long-term progress.",
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
        className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-black bg-cover bg-center px-5 pt-28 pb-20 text-center text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="relative mx-auto w-full max-w-7xl" data-aos="fade-up">
          <h1 className="text-[40px] font-bold leading-none sm:text-[34px] lg:text-[44px]">
            About Us
          </h1>
        </div>
      </section>

      {/* Company Profile */}
      <section className="bg-white px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.42fr_0.58fr]">
          <div
            className="relative min-h-[240px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_12px_36px_rgba(10,31,68,0.08)] lg:h-full lg:min-h-0"
            data-aos="fade-right"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Vidi Meth Digital Services Company Profile"
              fill
              unoptimized
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>

          <div
            className="flex flex-col justify-center space-y-4 text-slate-800"
            data-aos="fade-left"
          >
            <h2 className="text-2xl font-bold text-black sm:text-[32px]">
              Empowering Digital Innovation Across India
            </h2>
            <p className="text-base sm:text-[16px]  text-slate-700 font-normal">
              We create and support digital properties that solve everyday business and customer needs across multiple sectors. Our work brings together online visibility, service delivery, practical planning, and customer-first experiences.
            </p>
            <p className="text-base sm:text-[16px] text-slate-700 font-normal">
              Through platforms such as <strong className="font-semibold text-[#0a1f44]">VM Academy</strong>, <strong className="font-semibold text-[#0a1f44]">VillageMyCity</strong>, <strong className="font-semibold text-[#0a1f44]">GoJobin</strong>, <strong className="font-semibold text-[#0a1f44]">LOAN vidhi</strong>, and <strong className="font-semibold text-[#0a1f44]">VMhomeMART</strong>, Vidi Meth connects people with education, property, career, finance, and commerce opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Platforms (New Redesign layout with vibrant colored icons & justified text) */}
      <section className="bg-white px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-20 border-t border-slate-100">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14" data-aos="fade-up">
            <h2 className="text-[32px] font-bold tracking-tight text-[#111827]">
              Our Platforms
            </h2>
            <div className="mt-3 flex items-center gap-3 border-l-2 border-[#1d6b9e] pl-3 text-[15px] font-normal text-slate-600">
              Through innovation and collaboration, we build specialized digital platforms to empower education, career, real estate, finance, and commerce.
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
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-semibold text-[#1d6b9e] hover:underline"
                >
                  {platform.url} &rarr;
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Restored as it was previously) */}
      <section className="bg-[#f4f7fb] px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24 border-t border-slate-100">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
            <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]">
              Why Choose Us
            </p>
            <h2 className="text-[32px] font-bold leading-[1.2] text-black sm:text-[30px]">
              Quality service with practical business thinking.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="rounded-lg border border-[#0077c8]/10 bg-white p-5 shadow-[0_12px_34px_rgba(10,31,68,0.06)]"
                data-aos="zoom-in"
                data-aos-delay={index * 55}
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f6fbff] text-[#0077c8] ring-1 ring-[#0077c8]/15 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[2] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round">
                  <CheckIcon />
                </span>
                <h3 className="text-[17px] font-semibold leading-tight text-[#0a1f44]">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[14px] font-normal leading-[1.58] text-[#555555] text-justify">
                  {reason.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
