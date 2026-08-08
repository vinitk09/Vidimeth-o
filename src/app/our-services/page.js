import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "Our Services | Vidi Meth Digital Services",
  description:
    "Explore Vidi Meth Digital Services offerings across insurance, support, financial planning, education, e-commerce, and business innovation.",
};

const services = [
  {
    title: "Insurance Policy",
    image:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1200&q=80",
    eyebrow: "Personalized Consultation",
    text: "Experience the difference of personalized consultations. Our experts take the time to understand your specific requirements, offering tailored guidance and strategies that align with your needs.",
  },
  {
    title: "Quality Support",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    eyebrow: "Reliable Assistance",
    text: "Committed to excellence, our unwavering dedication ensures quality support. We prioritize satisfaction and consistently deliver beyond expectations with dependable service.",
  },
  {
    title: "Financial Planning Services",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80",
    eyebrow: "Financial Certainty",
    text: "Navigate your financial journey confidently with Vidimeth.com. Prioritizing financial control, we provide services for effective planning, management, and better financial clarity.",
  },
  {
    title: "Educational Empowerment",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    eyebrow: "Learning Access",
    text: "Empower yourself with Vidimeth.com's online education platform. Access courses, resources, and information to shape your educational path and support personal growth.",
  },
  {
    title: "E-commerce Experiences",
    image:
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=80",
    eyebrow: "Seamless Commerce",
    text: "Effortlessly navigate online commerce with Vidimeth.com. Our platform simplifies buying and selling, creating a user-friendly experience for consumers and businesses alike.",
  },
  {
    title: "Blending Business",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    eyebrow: "Growth Innovation",
    text: "Unlock synergy with our blended business ideas services. We catalyze innovation and foster collaboration for stronger outcomes. Your vision and our expertise create a transformative blend.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export default function OurServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Header />

      <section
        className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#071326] bg-cover bg-center px-5 py-20 text-center text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 11, 34, 0.6), rgba(5, 11, 34, 0.64)), url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="relative mx-auto w-full max-w-7xl" data-aos="fade-up">
          <h1 className="text-[40px] font-semibold leading-none sm:text-[54px] lg:text-[64px]">
            Our Services
          </h1>
          <nav
            className="mt-5 flex items-center justify-center gap-3 text-[15px] font-normal text-white/82"
            aria-label="Breadcrumb"
          >
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <span className="h-1.5 w-1.5 rounded-full bg-white/55" />
            <span className="text-white">Our Services</span>
          </nav>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
          <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]">
            What We Offer
          </p>
          <h2 className="text-[32px] font-semibold leading-[1.2] text-[#005f91] sm:text-[42px]">
            We help your Business!
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[18px] font-normal leading-[1.68] text-[#555555]">
            Elevating your business success: we are your catalyst for growth
            and innovation.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-7xl gap-7">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;
            const isCompact = service.title === "Blending Business";

            return (
              <article
                key={service.title}
                className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_14px_42px_rgba(10,31,68,0.07)] lg:grid-cols-2"
                data-aos="fade-up"
                >
                  <div
                  className={`relative overflow-hidden bg-[#eef3f8] ${
                    isCompact
                      ? "min-h-[180px] lg:min-h-[210px]"
                      : "min-h-[220px] lg:min-h-[260px]"
                  } ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                  data-aos={isReversed ? "fade-left" : "fade-right"}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`h-full w-full object-cover transition duration-500 hover:scale-105 ${
                      isCompact
                        ? "min-h-[180px] lg:min-h-[210px]"
                        : "min-h-[220px] lg:min-h-[260px]"
                    }`}
                  />
                </div>

                <div
                  className={`flex flex-col justify-center ${
                    isCompact
                      ? "min-h-[180px] p-5 sm:p-6 lg:min-h-[210px] lg:p-7"
                      : "min-h-[220px] p-6 sm:p-7 lg:min-h-[260px] lg:p-9"
                  } ${
                    isReversed ? "lg:order-1" : ""
                  }`}
                  data-aos={isReversed ? "fade-right" : "fade-left"}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1b8b4b]">
                    {service.eyebrow}
                  </p>
                  <h3
                    className={`font-semibold leading-[1.15] text-[#0a1f44] ${
                      isCompact
                        ? "mt-2 text-[23px] sm:text-[27px]"
                        : "mt-3 text-[25px] sm:text-[30px]"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`max-w-2xl text-[16px] font-normal text-[#555555] ${
                      isCompact ? "mt-3 leading-[1.55]" : "mt-4 leading-[1.62]"
                    }`}
                  >
                    {service.text}
                  </p>
                  <a
                    href="https://vidimeth.com/our-services/#"
                    className={`inline-flex w-fit items-center rounded-md bg-[#0a1f44] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(10,31,68,0.16)] transition hover:bg-[#0077c8] ${
                      isCompact ? "mt-5" : "mt-6"
                    }`}
                  >
                    Read More
                    <span className="ml-3 flex h-4 w-4 items-center justify-center [&_svg]:h-4 [&_svg]:w-4 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[2] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round">
                      <ArrowIcon />
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
