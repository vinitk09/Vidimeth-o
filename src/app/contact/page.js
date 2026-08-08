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
    <label className={`block ${className}`}>
      <span className="sr-only">{label}</span>
      <input
        type={type}
        name={label.toLowerCase().replaceAll(" ", "-")}
        placeholder={label}
        className="h-14 w-full rounded-md border border-slate-200 bg-white px-5 text-[16px] font-normal text-[#0a1f44] shadow-sm outline-none transition placeholder:text-[#596579] focus:border-[#0077c8] focus:ring-4 focus:ring-[#0077c8]/12"
      />
    </label>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white pt-20">
      <Header />

      <section
        className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#071326] bg-cover bg-center px-5 py-20 text-center text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 11, 34, 0.62), rgba(5, 11, 34, 0.66)), url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="relative mx-auto w-full max-w-7xl" data-aos="fade-up">
          <h1 className="text-[40px] font-semibold leading-none sm:text-[54px] lg:text-[64px]">
            Contact Us
          </h1>
          <nav
            className="mt-5 flex items-center justify-center gap-3 text-[15px] font-normal text-white/82"
            aria-label="Breadcrumb"
          >
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <span className="h-1.5 w-1.5 rounded-full bg-white/55" />
            <span className="text-white">Contact Us</span>
          </nav>
        </div>
      </section>

      <section className="bg-[#f4f7fb] px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
          <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]">
            Get In Touch
          </p>
          <h2 className="text-[32px] font-semibold leading-[1.2] text-[#005f91] sm:text-[42px]">
            We are ready to help you.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[17px] font-normal leading-[1.68] text-[#555555]">
            Send us your enquiry and our team will connect with you for
            services, partnerships, support, or business information.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-7xl gap-6 lg:grid-cols-3">
          {contactCards.map((card, index) => {
            const content = (
              <article className="flex h-full gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-[0_14px_38px_rgba(10,31,68,0.06)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eef8ff] text-[#0077c8] ring-1 ring-[#0077c8]/12 [&_svg]:h-6 [&_svg]:w-6 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.8] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round">
                  <Icon type={card.icon} />
                </span>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#0a1f44]">
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

        <div className="mx-auto mt-12 grid w-full max-w-7xl overflow-hidden rounded-lg bg-white shadow-[0_22px_70px_rgba(10,31,68,0.11)] lg:grid-cols-[0.38fr_0.62fr]">
          <div
            className="bg-[#071326] p-8 text-white sm:p-10 lg:p-12"
            data-aos="fade-right"
          >
            <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-white/64">
              Contact Form
            </p>
            <h2 className="text-[30px] font-semibold leading-[1.18] sm:text-[36px]">
              Share your requirement with us.
            </h2>
            <p className="mt-5 text-[16px] font-normal leading-[1.7] text-white/74">
              Fill in the form and tell us what you need. We will review your
              message and respond during working hours.
            </p>
            <div className="mt-8 rounded-md border border-white/12 bg-white/8 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/64">
                Company Details
              </p>
              <p className="mt-3 text-[15px] leading-[1.65] text-white/78">
                CIN: U52100JH2017OPC009718
                <br />
                GSTIN: 20AAFCV8003N1ZC
                <br />
                PAN: AAFCV8003N
              </p>
            </div>
          </div>

          <form
            className="grid gap-5 bg-[#d9e1e1] p-6 sm:grid-cols-2 sm:p-9 lg:p-12"
            data-aos="fade-left"
          >
            <Field label="Name" />
            <Field label="E-Mail" type="email" />
            <Field label="Phone Number" type="tel" />
            <Field label="Subject" />
            <label className="block sm:col-span-2">
              <span className="sr-only">Message Here</span>
              <textarea
                name="message"
                placeholder="Message Here"
                rows={6}
                className="w-full resize-none rounded-md border border-slate-200 bg-white px-5 py-4 text-[16px] font-normal text-[#0a1f44] shadow-sm outline-none transition placeholder:text-[#596579] focus:border-[#0077c8] focus:ring-4 focus:ring-[#0077c8]/12"
              />
            </label>
            <div className="sm:col-span-2 flex justify-center pt-4">
              <button
                type="submit"
                className="rounded-full bg-[#006dad] px-9 py-4 text-[15px] font-semibold text-white shadow-[0_16px_34px_rgba(0,109,173,0.24)] transition hover:bg-[#005485] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006dad]"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
