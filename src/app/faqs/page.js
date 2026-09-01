import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

export const metadata = {
  title: "FAQs | Vidi Meth Digital Services",
  description:
    "Frequently asked questions about Vidi Meth Digital Services, our specialized platforms, services, partnerships, and support.",
};

const faqs = [
  {
    question: "What is Vidi Meth Digital Services?",
    answer:
      "Vidi Meth Digital Services is a modern digital services company focused on helping businesses, entrepreneurs, and individuals grow through online marketing, digital solutions, creative services, branding, and technology-driven support. Our goal is to provide high-quality, affordable, and reliable digital services that improve online presence, attract customers, and support long-term business growth. We are developing a multi-platform digital ecosystem, with dedicated websites and digital portals for different sectors such as Education, Real Estate, Jobs & Careers, Insurance, Loan & Financial Support, E-Commerce and other emerging services.",
  },
  {
    question: "What services does Vidi Meth Digital Services provide?",
    answer:
      "Our services and platforms cover areas such as:\n• Digital marketing and online advertising\n• Business promotion and development\n• Online education and career information\n• Recruitment and job-related services\n• Financial and business-related services\n• E-commerce\n• Digital platforms and online solutions\n\nOur objective is to make useful digital services accessible through convenient online platforms.",
  },
  {
    question: "What online platforms are operated by Vidi Meth Digital Services?",
    answer:
      "Vidi Meth Digital Services operates multiple digital platforms designed for different user needs, including:\n• VMAcademy – Online education and career guidance platform\n• GoJobin – Job search and recruitment platform\n• VillageMyCity – Property and marketplace platform\n• LoanVidhi – Financial service platform\n• VMhomeMart – E-commerce platform",
  },
  {
    question: "Why Separate Websites?",
    answer:
      "Rather than putting everything into one complicated portal, our approach is to develop dedicated websites for individual sectors. Each platform can be designed around the specific requirements, expectations, and user journey of that particular industry.",
  },
  {
    question: "Who can use Vidi Meth Digital Services?",
    answer:
      "Our digital platforms are designed for a wide range of users, including students, job seekers, professionals, businesses, entrepreneurs, and consumers. Different services may have different eligibility requirements.",
  },
  {
    question: "What makes Vidi Meth different from other digital service companies?",
    answer:
      "Our strength is our multi-domain digital ecosystem, bringing together initiatives across education, recruitment, business promotion, financial services and e-commerce under a broader digital-services vision.",
  },
  {
    question: "Why should I choose Vidi Meth Digital Services?",
    answer:
      "One Company. Multiple Digital Platforms. One Vision — Making Digital Access Simpler.\n\nVidi Meth combines multiple digital capabilities under one organization, with a focus on innovation, accessibility, customer satisfaction, and practical digital solutions. Whether you are looking for education information, employment opportunities, business promotion, financial-related services, or online commerce, our platforms are designed to make the digital journey easier and more convenient.",
  },
  {
    question: "Does Vidi Meth provide digital marketing services?",
    answer:
      "Yes. Vidi Meth works in areas including concept marketing, online marketing, advertising, direct marketing, and business promotion.",
  },
  {
    question: "Does Vidi Meth help businesses grow online?",
    answer:
      "Yes. We help businesses improve their online presence through digital marketing, branding, online promotion, and technology-based solutions.",
  },
  {
    question: "Can students use Vidi Meth services?",
    answer:
      "Yes. Students can access educational resources, career guidance, and learning opportunities through our education-focused platforms.",
  },
  {
    question: "Does Vidi Meth provide education-related services?",
    answer:
      "Yes. Vidi Meth operates digital education initiatives such as VM Academy, which provides information and resources related to courses, colleges, admissions, eligibility, fees, placements, scholarships, and career choices.",
  },
  {
    question: "Does Vidi Meth provide recruitment or employment services?",
    answer:
      "Yes. Vidi Meth's digital ecosystem includes recruitment and employment solutions, through its recruitment platform GoJobin, Vidi Meth provides online employment solutions connecting job seekers with employers and opportunities.",
  },
  {
    question: "How can I collaborate or partner with Vidi Meth?",
    answer:
      "We welcome partnerships, collaborations, and business opportunities. Interested individuals or organizations can contact our team through our official website or email for service inquiries, partnerships, and support.",
  },
  {
    question: "Do you guarantee leads, sales or employment?",
    answer:
      "No responsible digital service provider should guarantee a specific business outcome without considering market conditions and other external factors. We focus on implementing appropriate strategies and measurable activities rather than making unrealistic guarantees.",
  },
  {
    question: "What is the vision of Vidi Meth Digital Services?",
    answer:
      "Our vision is to build a reliable and customer-focused digital ecosystem where people can conveniently access education, jobs, real estate, insurance, loan support, e-commerce, and other digital services from one platform.",
  },
  {
    question: "Where can I learn about Vidi Meth's latest updates?",
    answer:
      "You can follow the company's website, blog, and social media channels for company updates, educational resources, projects, and industry-related information.",
  },
  {
    question: "Is Vidi Meth a registered company?",
    answer:
      "Yes. Vidi Meth Digital Services (OPC) Private Limited is a registered One Person Company incorporated in 2017, with CIN U52100JH2017OPC009718.",
  },
  {
    question: "How can I contact Vidi Meth Digital Services?",
    answer:
      "You can contact Vidi Meth through the contact information provided on the official website.\n\n• Email: info@vidimeth.com\n• Office: 147, Aambagan Road, Near Bengal Club, Sakchi, Jamshedpur – 831001, Jharkhand, India\n• Working Hours: Monday–Saturday, 10:00 AM–6:00 PM",
  },
];

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export default function FaqsPage() {
  return (
    <main className="overflow-x-hidden no-scrollbar bg-white pt-0">
      <Header />

      <section
        className="relative flex min-h-[360px] items-center overflow-hidden bg-[#071326] bg-cover bg-center px-5 pt-28 pb-20 text-center text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 11, 34, 0.78), rgba(5, 11, 34, 0.88)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,119,200,0.25),transparent_50%)]" />

        <div className="relative mx-auto w-full max-w-7xl flex items-center justify-center flex-col" data-aos="fade-up">
          <h1 className="text-[34px] font-bold tracking-tight sm:text-[42px] lg:text-[52px]">
            Frequently Asked Questions
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-white">FAQs</span>
          </div>
          {/* <p className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Find clear answers to common questions about Vidi Meth Digital Services, our platforms, and business solutions.
          </p> */}
        </div>
      </section>

      <section className="bg-[#f4f7fb] px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <aside
            className="h-fit rounded-xl bg-[#071326] p-8 text-white shadow-[0_22px_60px_rgba(7,19,38,0.18)] lg:sticky lg:top-28"
            data-aos="fade-right"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
              Help &amp; Support
            </p>
            <h2 className="text-[28px] sm:text-[32px] font-bold leading-[1.2]">
              Have More Questions?
            </h2>
            <p className="mt-4 text-[15px] font-normal leading-[1.7] text-white/80">
              Our team is here to assist you with digital marketing, business development, and platform queries.
            </p>
            <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm text-white/90">
              <div className="flex items-start gap-2.5">
                <span className="font-semibold text-[#38bdf8]">Email:</span>
                <a href="mailto:info@vidimeth.com" className="hover:underline text-white/90">info@vidimeth.com</a>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="font-semibold text-[#38bdf8]">Hours:</span>
                <span className="text-white/80">Mon–Sat, 10 AM–6 PM</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="font-semibold text-[#38bdf8]">Location:</span>
                <span className="text-white/80">Sakchi, Jamshedpur, Jharkhand</span>
              </div>
            </div>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#0077c8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#005f91] shadow-md"
            >
              <span>Contact Us</span>
              <span>&rarr;</span>
            </a>
          </aside>

          <div className="space-y-4" data-aos="fade-left">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 open:border-[#0077c8]/40 open:shadow-md"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0f7fd] text-xs font-bold text-[#0077c8]">
                      {index + 1}
                    </span>
                    <h3 className="text-[16px] sm:text-[17px] font-bold leading-[1.35] text-[#0a1f44] group-hover:text-[#0077c8] transition-colors">
                      {faq.question}
                    </h3>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5fbff] text-[#0077c8] transition group-open:rotate-45 group-open:bg-[#0077c8] group-open:text-white [&_svg]:h-4 [&_svg]:w-4 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[2] [&_svg]:stroke-linecap-round">
                    <PlusIcon />
                  </span>
                </summary>
                <div className="mt-4 border-t border-slate-100 pt-4 text-[15px] font-normal leading-[1.7] text-slate-600 whitespace-pre-line">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
