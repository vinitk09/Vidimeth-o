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
  },
  {
    name: "Village My City",
    url: "www.villagemycity.com",
    href: "https://www.villagemycity.com/",
    category: "Real Estate Portal",
    text: "A property and marketplace platform for buyers, sellers, owners, builders, promoters, agents, and dealers to connect online and transact offline with greater ease.",
  },
  {
    name: "GoJobin",
    url: "www.gojobin.com",
    href: "https://www.gojobin.com/",
    category: "Recruitment Platform",
    text: "An online recruitment solution for candidates and employers, supporting job discovery, staffing, recruiting, free job posting, and opportunities for freshers and experienced professionals.",
  },
  {
    name: "Loan Vidhi",
    url: "www.loanvidhi.com",
    href: "https://www.loanvidhi.com/",
    category: "Finance Services",
    text: "A financial consultancy platform focused on insurance, secured and unsecured loans, monetary affairs, real estate affairs, financial planning, and portfolio management services.",
  },
  {
    name: "VM Home Mart",
    url: "www.vmhomemart.com",
    href: "https://www.vmhomemart.com/",
    category: "E-commerce Store",
    text: "A marketplace and online shopping concept for electronics, fashion, kitchen items, home needs, and other product categories in the fast-growing Indian market.",
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
    <main className="overflow-x-hidden bg-white pt-20">
      <Header />

      <section
        className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#071326] bg-cover bg-center px-5 py-20 text-center text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 11, 34, 0.58), rgba(5, 11, 34, 0.62)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="relative mx-auto w-full max-w-7xl" data-aos="fade-up">
          <h1 className="text-[40px] font-semibold leading-none sm:text-[54px] lg:text-[64px]">
            About Us
          </h1>
          <nav
            className="mt-5 flex items-center justify-center gap-3 text-[15px] font-normal text-white/82"
            aria-label="Breadcrumb"
          >
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <span className="h-1.5 w-1.5 rounded-full bg-white/55" />
            <span className="text-white">About Us</span>
          </nav>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.42fr_0.58fr]">
          <div data-aos="fade-right">
            <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]">
              Company Profile
            </p>
            <h2 className="text-[32px] font-semibold leading-[1.18] text-[#005f91] sm:text-[40px]">
              An established name in the online industry.
            </h2>
          </div>

          <div
            className="space-y-5 text-[17px] font-normal leading-[1.75] text-[#555555]"
            data-aos="fade-left"
          >
            <p>
              We create and support digital properties that solve everyday
              business and customer needs across multiple sectors. Our work
              brings together online visibility, service delivery, practical
              planning, and customer-first experiences.
            </p>
            <p>
              Through platforms such as VM Academy, Village My City, GoJobin,
              Loan Vidhi, and VM Home Mart, Vidi Meth connects people with
              education, property, career, finance, and commerce opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb] px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
            <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]">
              Our Platforms
            </p>
            <h2 className="text-[32px] font-semibold leading-[1.2] text-[#005f91] sm:text-[40px]">
              One network, focused digital brands.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[17px] font-normal leading-[1.68] text-[#555555]">
              Each platform is designed around a clear user need, from
              admission guidance and job discovery to finance support, property
              listings, online shopping, and future digital services.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {platforms.map((platform, index) => (
              <article
                key={platform.name}
                className="group flex min-h-[320px] flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(10,31,68,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#0077c8]/35 hover:shadow-[0_24px_64px_rgba(0,119,200,0.14)] sm:p-7"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1b8b4b]">
                      {platform.category}
                    </p>
                    <h3 className="mt-3 text-[24px] font-semibold leading-tight text-[#0a1f44]">
                      {platform.name}
                    </h3>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5fbff] text-sm font-semibold text-[#0077c8] ring-1 ring-[#0077c8]/15">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[16px] font-normal leading-[1.68] text-[#555555]">
                  {platform.text}
                </p>
                <a
                  href={platform.href}
                  className="mt-auto pt-7 text-[15px] font-semibold text-[#0077c8] transition hover:text-[#0a1f44]"
                >
                  {platform.url}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
            <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]">
              Why Choose Us
            </p>
            <h2 className="text-[32px] font-semibold leading-[1.2] text-[#005f91] sm:text-[40px]">
              Quality service with practical business thinking.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="rounded-lg border border-[#0077c8]/10 bg-[#f6fbff] p-5 shadow-[0_12px_34px_rgba(10,31,68,0.06)]"
                data-aos="zoom-in"
                data-aos-delay={index * 55}
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0077c8] ring-1 ring-[#0077c8]/15 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[2] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round">
                  <CheckIcon />
                </span>
                <h3 className="text-[17px] font-semibold leading-tight text-[#0a1f44]">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[14px] font-normal leading-[1.58] text-[#555555]">
                  {reason.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071326] px-5 py-14 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className="rounded-lg border border-white/10 bg-white/8 p-7 text-center"
              data-aos="fade-up"
              data-aos-delay={index * 90}
            >
              <p className="text-[40px] font-semibold leading-none">
                {stat.value}
              </p>
              <h3 className="mt-3 text-[16px] font-normal text-white/72">
                {stat.label}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
