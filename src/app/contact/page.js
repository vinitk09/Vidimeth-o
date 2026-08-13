import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "Contact Us | Vidi Meth Digital Services",
  description:
    "Contact Vidi Meth Digital Services for business, support, partnership, and service enquiries.",
};

const contactCards = [
  {
    title: "Registered Office",
    text: "147, Aambagan Road, Near Bengal Club, Sakchi, Jamshedpur - 831001, Jharkhand, INDIA",
    icon: "pin",
  },
  {
    title: "Email Us",
    text: "info@vidimeth.com",
    href: "mailto:info@vidimeth.com",
    icon: "mail",
  },
  {
    title: "Working Hours",
    text: "Mon-Sat: 10:00 AM - 6:00 PM",
    icon: "clock",
  },
];

function Icon({ type }) {
  const paths = {
    pin: "M12 21s6.5-5.9 6.5-11.2A6.5 6.5 0 0 0 5.5 9.8C5.5 15.1 12 21 12 21Z M12 12.1a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z",
    mail: "M4.5 6.5h15v11h-15v-11Z M5.2 7.4 12 12.2l6.8-4.8",
    clock:
      "M12 20.25a8.25 8.25 0 1 0 0-16.5 8.25 8.25 0 0 0 0 16.5Z M12 7.5V12l3 1.8",
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[type]} />
    </svg>
  );
}

function Field({ label, type = "text", className = "" }) {
  return (
    <div className={`block ${className}`}>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
        {label}
      </label>
      <input
        type={type}
        name={label.toLowerCase().replaceAll(" ", "-")}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 text-sm font-medium text-slate-900 shadow-2xs outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#0077c8] focus:bg-white focus:ring-4 focus:ring-[#0077c8]/12 hover:border-slate-300"
      />
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden no-scrollbar bg-white pt-20">
      <Header />

      <section
        className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-black bg-cover bg-center px-5 py-20 text-center text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.80)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="relative mx-auto w-full max-w-7xl" data-aos="fade-up">
          <h1 className="text-[40px] font-semibold leading-none sm:text-[40px] lg:text-[52px]">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl text-center" data-aos="fade-up">
          <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]">
            Get In Touch
          </p>
          <h2 className="text-[32px] font-semibold leading-[1.2] text-black sm:text-[32px]">
            We are ready to help you.
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-[16px] font-normal leading-[1.68] text-[#555555]">
            Send us your enquiry and our team will connect with you for
            services, partnerships, support, or business information.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card, index) => {
            const content = (
              <article className="group h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_12px_36px_rgba(10,31,68,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0077c8]/40 hover:shadow-lg">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0077c8]/10 text-[#0077c8] transition-transform duration-300 group-hover:scale-110 [&_svg]:h-7 [&_svg]:w-7 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.8] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round">
                  <Icon type={card.icon} />
                </span>
                <div>
                  <h3 className="text-[18px] font-bold text-black">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[15px] font-normal leading-[1.58] text-[#555555]">
                    {card.text}
                  </p>
                </div>
              </article>
            );

            return card.href ? (
              <a
                href={card.href}
                key={card.title}
                className="block transition hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {content}
              </a>
            ) : (
              <div
                key={card.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {content}
              </div>
            );
          })}
        </div>

        {/* Modern Form Container Card */}
        <div className="mx-auto mt-14 grid w-full max-w-7xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_24px_70px_rgba(10,31,68,0.09)] lg:grid-cols-[0.4fr_0.6fr]">
          {/* Left Info Panel */}
          <div
            className="relative overflow-hidden bg-gradient-to-br from-[#071326] via-[#0a1e3d] to-[#004f85] p-8 text-white sm:p-10 lg:p-12"
            data-aos="fade-right"
          >
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-[#0077c8]/20 blur-3xl" />
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#38bdf8]">
              Send Us A Message
            </p>
            <h2 className="text-[28px] font-bold leading-[1.2] text-white sm:text-[32px]">
              Share your requirement with us.
            </h2>
            <p className="mt-4 text-[14px] font-normal leading-[1.7] text-slate-300">
              Fill in the form and tell us what you need. We will review your
              message and respond during working hours.
            </p>

            <div className="mt-10 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
                Company Details
              </p>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-slate-200">
                <span className="font-semibold text-white">CIN:</span> U52100JH2017OPC009718
                <br />
                <span className="font-semibold text-white">GSTIN:</span> 20AAFCV8003N1ZC
                <br />
                <span className="font-semibold text-white">PAN:</span> AAFCV8003N
              </p>
            </div>
          </div>

          {/* Right Form Fields */}
          <form
            className="grid gap-5 bg-white p-7 sm:grid-cols-2 sm:p-10 lg:p-12"
            data-aos="fade-left"
          >
            <Field label="Name" />
            <Field label="E-Mail" type="email" />
            <Field label="Phone Number" type="tel" />
            <Field label="Subject" />

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">
                Message Here
              </label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows={5}
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-sm font-medium text-slate-900 shadow-2xs outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#0077c8] focus:bg-white focus:ring-4 focus:ring-[#0077c8]/12 hover:border-slate-300"
              />
            </div>

            <div className="sm:col-span-2 flex justify-end pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#0077c8] to-[#005485] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0077c8]/25 transition-all duration-300 hover:from-[#005f91] hover:to-[#00426b] hover:shadow-xl hover:scale-[1.02] focus:outline-none"
              >
                Submit Message
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
