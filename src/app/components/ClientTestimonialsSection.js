const testimonials = [
  {
    name: "Laxmi Mahato",
    role: "Business Partner",
    initials: "LM",
    quote:
      "Exceptional business development insights. Your team's dedication to fostering opportunities has been a game-changer for our company.",
  },
  {
    name: "Manab Kumar",
    role: "Finance Client",
    initials: "MK",
    quote:
      "Remarkable impact! Your innovative financial planning and business development strategies transformed our path, leading to sustained growth.",
  },
  {
    name: "Nisha Sharma",
    role: "Growth Client",
    initials: "NS",
    quote:
      "Business development strategies exceeded expectations, driving growth and ensuring sustained success. Truly an impactful partnership.",
  },
];

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.8 5.25C6.35 6 4.5 8.35 4.5 11.95v6.8h6.8v-6.8H8.15c.1-1.85 1.05-3.15 2.85-3.9L9.8 5.25Zm9.1 0c-3.45.75-5.3 3.1-5.3 6.7v6.8h6.8v-6.8h-3.15c.1-1.85 1.05-3.15 2.85-3.9L18.9 5.25Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.75 14.55 8.9l5.7.82-4.12 4 .97 5.66L12 16.7l-5.1 2.68.97-5.66-4.12-4 5.7-.82L12 3.75Z" />
    </svg>
  );
}

export default function ClientTestimonialsSection() {
  return (
    <section className="bg-white px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
          <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]">
            Testimonials
          </p>
          <h2 className="text-[30px] font-semibold leading-[1.2] text-[#005f91] sm:text-[36px]">
            What Our Client Says
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[17px] font-normal leading-[1.68] text-[#555555]">
            Practical guidance, reliable support, and business development
            strategies shaped around real client growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`relative overflow-hidden rounded-lg border bg-white p-7 shadow-[0_18px_50px_rgba(10,31,68,0.08)] ${
                index === 1
                  ? "border-[#0077c8]/28 lg:-translate-y-4"
                  : "border-slate-200"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="absolute right-6 top-6 text-[#0077c8]/12 [&_svg]:h-16 [&_svg]:w-16 [&_svg]:fill-current">
                <QuoteIcon />
              </div>

              <div className="relative z-10 flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0077c8] text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(0,119,200,0.22)]">
                  {testimonial.initials}
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold leading-tight text-[#0a1f44]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-sm font-normal text-[#647084]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="relative z-10 mt-7 text-[16px] font-normal leading-[1.75] text-[#555555]">
                {testimonial.quote}
              </p>

              <div className="relative z-10 mt-7 flex gap-1 text-[#f4b400] [&_svg]:h-4 [&_svg]:w-4 [&_svg]:fill-current">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <StarIcon key={starIndex} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
