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
          <h2 className="text-[32px] font-medium leading-[1.2] text-[#1f2168] sm:text-[38px]">
            Digital services built to help businesses move forward.
          </h2>
          <p className="mt-6 text-[17px] font-normal leading-[1.68] text-[#555555]">
            To carry on in India or elsewhere the business of concept marketing and online marketing, advertising, business management, business administration, office function, direct marketing and to provide high quality of services and products to clients.
          </p>
          <p className="mt-5 text-[17px] font-normal leading-[1.68] text-[#555555]">
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
              className={`rounded-lg bg-[#1f2168] p-7 text-white shadow-[0_22px_58px_rgba(31,33,104,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#0077c8] ${item.className}`}
              data-aos="zoom-in"
            >
              <p className="text-[34px] font-medium leading-none">
                {item.value}
              </p>
              <h3 className="mt-5 text-[18px] font-semibold leading-[1.28]">
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] font-normal leading-[1.55] text-white/88">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
