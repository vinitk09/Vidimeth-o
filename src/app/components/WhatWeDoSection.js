const stats = [
  {
    value: "01",
    title: "Concept & Online Marketing",
    text: "Delivering powerful concept and online marketing strategies in India and globally.",
    className: "lg:mt-14",
  },
  {
    value: "02",
    title: "Advertising & Direct Marketing",
    text: "Targeted advertising and direct marketing to reach your ideal audience effectively.",
    className: "",
  },
  {
    value: "03",
    title: "Business Management",
    text: "Comprehensive business management and administration to streamline your operations.",
    className: "",
  },
  {
    value: "04",
    title: "Quality Services",
    text: "Providing high-quality services, office functions, and products to our valued clients.",
    className: "lg:mt-4",
  },
];

const serviceLinks = [
  "www.vmacademys.com",
  "www.villagemycity.com",
  "www.gojobin.com",
  "www.loanvidhi.com",
  "www.vmhomemart.com",
];

export default function WhatWeDoSection() {
  return (
    <section className="bg-white px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.5fr_0.5fr]">
        <div className="max-w-2xl" data-aos="fade-right">
          <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]">
            What We Do
          </p>
          <h2 className="text-[32px] font-bold leading-[1.2] text-black sm:text-[32px]">
            Digital services built to help businesses move forward
          </h2>
          <p className="mt-6 text-[15px] font-normal leading-[1.68] text-[#555555]">
            To carry on in India or elsewhere the business of concept marketing and online marketing, advertising, business management, business administration, office function, direct marketing and to provide high quality of services and products to clients.
          </p>
          <p className="mt-5 text-[15px] font-normal leading-[1.68] text-[#555555]">
            <strong>Our Services:</strong> We provide master planning for you. Our aim is to provide one stop effective digital marketing solutions for all businesses. Our digital marketing expertise includes:
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {serviceLinks.map((link) => (
              <div
                key={link}
                className="flex items-center gap-3 rounded-lg border border-[#0077c8]/10 bg-[#f6fbff] px-4 py-3 text-[15px] font-normal text-[#0a1f44]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#0aa64f]" />
                {link}
              </div>
            ))}
          </div>


        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {stats.map((item) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f2168] via-[#1a1c59] to-[#0d0f36] p-7 text-white shadow-[0_16px_36px_rgba(31,33,104,0.28),0_6px_16px_rgba(0,0,0,0.14)] border-t border-l border-white/25 border-b border-r border-black/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_60px_rgba(0,119,200,0.38),0_12px_28px_rgba(0,0,0,0.22)] hover:border-cyan-400/40 ${item.className}`}
              data-aos="zoom-in"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0077c8] via-[#0092db] to-[#00a86b] text-[22px] font-extrabold text-white shadow-[0_8px_20px_rgba(0,119,200,0.45)] ring-1 ring-white/35 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {item.value}
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#39b76f] shadow-[0_0_12px_#39b76f]" />
              </div>
              <h3 className="mt-6 text-[20px] font-bold leading-[1.3] text-white transition-colors group-hover:text-cyan-300">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] font-normal leading-[1.6] text-slate-200/90">
                {item.text}
              </p>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition-all duration-300 group-hover:scale-150 group-hover:bg-cyan-400/25" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
