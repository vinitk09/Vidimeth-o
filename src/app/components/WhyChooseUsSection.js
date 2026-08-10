const iconCards = [
  {
    title: "Personal Service",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12.25a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4.75 20c1.2-3.35 3.65-5 7.25-5s6.05 1.65 7.25 5" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.75v2.5" />
        <path d="M17.85 6.15 16.1 7.9" />
        <path d="M20.25 12h-2.5" />
        <path d="M6.15 6.15 7.9 7.9" />
        <path d="M3.75 12h2.5" />
        <path d="M8.75 15.25h6.5" />
        <path d="M9.5 18h5" />
        <path d="M9.25 12.5a3 3 0 1 1 5.5 1.65c-.65.75-.9 1.1-.9 1.1h-3.7s-.25-.35-.9-1.1a2.95 2.95 0 0 1 0-1.65Z" />
      </svg>
    ),
  },
  {
    title: "Trust",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.75 18.25 6v5.25c0 4.25-2.45 7.25-6.25 9-3.8-1.75-6.25-4.75-6.25-9V6L12 3.75Z" />
        <path d="m8.95 12.15 2.05 2.05 4.1-4.45" />
      </svg>
    ),
  },
];

const reasons = [
  {
    title: "We Make It Personal",
    text: "When you work with us, you can count on personalized, one-on-one service every step of the way.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.75 11.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z" />
        <path d="M3.75 19.25c.8-3.3 2.45-5 5-5 1.4 0 2.55.5 3.45 1.5" />
        <path d="M16.75 19.5 20.25 16a2.15 2.15 0 0 0-3.05-3.03l-.45.45-.45-.45A2.15 2.15 0 0 0 13.25 16l3.5 3.5Z" />
      </svg>
    ),
  },
  {
    title: "We Innovate for You",
    text: "We're a team of dreamers, thinkers and creators.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 18.5h14" />
        <path d="M7 15.75V9.5" />
        <path d="M12 15.75V5.5" />
        <path d="M17 15.75v-8" />
        <path d="m4.75 11.25 3-3 3 2.5 5.75-5.75 2.75 2.75" />
      </svg>
    ),
  },
  {
    title: "Leaders Trust Us",
    text: "We're proud of the company we keep.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4.25 14.3 9l5.2.75-3.75 3.65.9 5.15L12 16.1l-4.65 2.45.9-5.15L4.5 9.75 9.7 9 12 4.25Z" />
      </svg>
    ),
  },
  {
    title: "Our Reputation",
    text: "within the Industry is impeccable.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.75 18.25 6v5.25c0 4.25-2.45 7.25-6.25 9-3.8-1.75-6.25-4.75-6.25-9V6L12 3.75Z" />
        <path d="m8.95 12.15 2.05 2.05 4.1-4.45" />
      </svg>
    ),
  },
  {
    title: "Communication & Responsiveness",
    text: "We are known for our proven ability to maintain open communication around the clock and a high level of responsiveness to our clients.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.75 6.5h14.5v9H9l-4.25 3.25V6.5Z" />
        <path d="M8 9.5h8" />
        <path d="M8 12.5h5.5" />
      </svg>
    ),
  },
  {
    title: "Social Media",
    text: "Facebook, Twitter, LinkedIn …Technology has changed the way we live, play, work, communicate, shop and advertise. We embrace the ever-changing world of technology and are always seeking the best applications to serve our clients personally and efficiently.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20.25a8.25 8.25 0 1 0 0-16.5 8.25 8.25 0 0 0 0 16.5Z" />
        <path d="M4.25 12h15.5" />
        <path d="M12 3.75c2.1 2.2 3.15 4.95 3.15 8.25s-1.05 6.05-3.15 8.25" />
        <path d="M12 3.75C9.9 5.95 8.85 8.7 8.85 12s1.05 6.05 3.15 8.25" />
      </svg>
    ),
  },
  {
    title: "Commitment",
    text: "Commitment is a term that we honour. We are trusted to fulfil promises and take care of our clients’ concerns. We’re the trusted partner that takes a proactive approach to your technology. We’re the fellow small business owner that understand your day-to-day needs. We’re the built-in technology support staff that’s always there when you need us. We Stand by Our Values. Our Clients Are Happy.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.25 12.75 10.5 16l6.25-7" />
        <path d="M4.75 6.5h14.5v11A1.75 1.75 0 0 1 17.5 19.25h-11A1.75 1.75 0 0 1 4.75 17.5v-11Z" />
        <path d="M8 4.75V8" />
        <path d="M16 4.75V8" />
      </svg>
    ),
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[#f4f7fb] px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-stretch gap-10 lg:grid-cols-[0.49fr_0.51fr]">
        <div
          className="relative h-full overflow-hidden rounded-[28px] bg-[#061326] p-5 shadow-[0_28px_80px_rgba(6,19,38,0.22)] sm:p-6"
          data-aos="fade-right"
        >
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full border border-[#0077c8]/25" />
          <div className="absolute -bottom-24 right-6 h-64 w-64 rounded-full border border-[#39b76f]/25" />

          <div className="relative z-10 mb-5 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/8 p-5">
            <div>
              <p className="text-xs font-normal uppercase tracking-[0.18em] text-[#39b76f]">
                Vidi Meth Advantage
              </p>
              <h3 className="mt-2 text-[24px] font-medium leading-[1.22] text-white">
                Quality, trust, and digital growth in one place.
              </h3>
            </div>
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[18px] font-semibold text-[#0077c8] sm:flex">
              VM
            </span>
          </div>

          <div className="relative z-10 grid gap-4">
            {iconCards.map((card) => (
              <article
                key={card.title}
                className="group relative min-h-32 overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={card.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/58" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/52 to-[#0077c8]/28" />
                <div className="relative z-10 flex h-full min-h-32 items-center gap-5 p-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#0077c8] shadow-sm ring-1 ring-white/35 [&_svg]:h-8 [&_svg]:w-8 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.7] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round">
                    {card.icon}
                  </span>
                  <div>
                    <h4 className="text-[19px] font-medium leading-tight text-white">
                      {card.title}
                    </h4>
                    <p className="mt-2 text-[14px] font-normal leading-[1.5] text-white/78">
                      Reliable support shaped around your business needs.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="relative z-10 mt-5 rounded-2xl border border-white/10 bg-white p-5 text-[#0a1f44] shadow-[0_18px_48px_rgba(0,0,0,0.18)]">
            <p className="text-[18px] font-medium leading-[1.38]">
              Dependable digital support for businesses that want quality,
              trust, and steady growth.
            </p>
          </div>
        </div>

        <div className="flex h-full flex-col justify-center" data-aos="fade-left">
          <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]">
            Why Choose Us
          </p>
          <h2 className="text-[32px] font-semibold leading-[1.18] text-[#1d2736] sm:text-[38px]">
            Why Choose Vidi Meth Digital Services?
          </h2>
          <p className="mt-5 text-[16px] font-normal leading-[1.58] text-[#555555]">
            Businesses have come to depend on us for our expertise, quality, and customer service. We’ve worked with college/university, real estate organisation, company, designers, architects, government agencies and business owners from a range of industries to transform the way they work.
          </p>

          <div className="mt-7 grid gap-3 xl:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex gap-3 rounded-lg bg-white/72 p-3.5 shadow-[0_10px_28px_rgba(10,31,68,0.06)] ring-1 ring-slate-200/70"
                data-aos="fade-up"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef8ff] text-[#0077c8] ring-1 ring-[#0077c8]/12 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.7] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round">
                  {reason.icon}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold leading-[1.2] text-[#1d2736]">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] font-normal leading-[1.48] text-[#555555]">
                    {reason.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/contact"
            className="mt-7 inline-flex w-fit self-start rounded-full bg-[#0aa64f] px-9 py-3 text-base font-semibold text-white shadow-[0_12px_28px_rgba(10,166,79,0.25)] transition hover:bg-[#087d3e]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
