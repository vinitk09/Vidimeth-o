const mainFeatures = [
  {
    title: "We Make It Personal",
    text: "Count on personalized, one-on-one service every step of the way to address your unique needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "from-blue-500/10 to-cyan-500/10 text-blue-600 border-blue-100",
  },
  {
    title: "We Innovate for You",
    text: "We're a team of dreamers, thinkers, and creators building advanced digital strategies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v8" />
        <path d="m4.93 10.93 1.41 1.41" />
        <path d="M2 18h2" />
        <path d="M20 18h2" />
        <path d="m19.07 10.93-1.41 1.41" />
        <path d="M9 22h6" />
        <path d="M10 18a4 4 0 0 0 4 0v-4H10v4Z" />
      </svg>
    ),
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-100",
  },
  {
    title: "Leaders Trust Us",
    text: "We are proud of the company we keep, built on integrity and consistent excellence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    color: "from-amber-500/10 to-yellow-500/10 text-amber-600 border-amber-100",
  },
  {
    title: "Our Reputation",
    text: "Our standing within the industry is impeccable across real estate, education, and enterprise.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    color: "from-purple-500/10 to-indigo-500/10 text-purple-600 border-purple-100",
  },
  {
    title: "Communication & Responsiveness",
    text: "Proven ability to maintain open communication around the clock with rapid response times.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: "from-sky-500/10 to-blue-500/10 text-sky-600 border-sky-100",
  },
  {
    title: "Social Media & Technology",
    text: "Embracing ever-changing technology and social platforms to serve clients personally and efficiently.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    color: "from-rose-500/10 to-pink-500/10 text-rose-600 border-rose-100",
  },
  {
    title: "Unwavering Commitment",
    text: "Commitment is a term that we honour. We are trusted to fulfil promises and take proactive care of your business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    color: "from-red-500/10 to-rose-500/10 text-red-600 border-red-100",
  },
  {
    title: "Results-Driven Strategy",
    text: "Targeted marketing and administration strategies tailored to drive measurable growth, market reach, and ROI.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    color: "from-indigo-500/10 to-violet-500/10 text-indigo-600 border-indigo-100",
  },
  {
    title: "Quality & Excellence",
    text: "Rigorous standards across all services ensuring high-impact digital products and long-term client satisfaction.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    color: "from-teal-500/10 to-emerald-500/10 text-teal-600 border-teal-100",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-slate-50 py-20 px-5 sm:px-8 lg:px-10 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <span className="inline-block rounded-full bg-[#0077c8]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0077c8]">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0a1f44] sm:text-4xl">
            Why Businesses Depend On Us
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
            Businesses have come to depend on us for our expertise, quality, and customer service across universities, real estate, government agencies, and business owners.
          </p>
        </div>

        {/* 9 Grid Cards (3x3 on Desktop) */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mainFeatures.map((feature, idx) => (
            <div
              key={feature.title}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className={`group relative rounded-2xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0077c8]/40 hover:shadow-xl hover:shadow-[#0077c8]/5 ${feature.color.split(" ").pop()}`}
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color.replace(/border-\S+/, '')} ring-1 ring-inset ring-slate-900/5 transition-transform duration-300 group-hover:scale-110`}>
                <div className="h-6 w-6">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-[#0a1f44] group-hover:text-[#0077c8] transition-colors">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
