import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "FAQs | Vidi Meth Digital Services",
  description:
    "Frequently asked questions about Vidi Meth Digital Services, our specialized platforms, services, partnerships, and support.",
};

const faqs = [
  {
    question: "What about Vidi Meth Digital Services?",
    answer:
      "Vidi Meth Digital Services (OPC) Private Limited is a modern digital solutions company providing online marketing, concept branding, digital technology, and business management support. We also operate dedicated digital ecosystems for education, real estate, jobs, finance, and e-commerce.",
  },
  {
    question: "What are the main divisions under Vidi Meth?",
    answer:
      "Our multi-platform network includes VM Academy (education & counseling), VillageMyCity (property connect), GoJobin (job recruitment), LOAN vidhi (financial & loan consulting), and VM HomeMart (e-commerce marketplace).",
  },
  {
    question: "How does VM Academy assist students and parents?",
    answer:
      "VM Academy (www.vmacademys.com) helps students navigate higher education through verified college listings, post-exam counseling, stream finder tools, entrance test updates, and expert mentorship.",
  },
  {
    question: "How does VillageMyCity help in property buying and selling?",
    answer:
      "VillageMyCity (www.villagemycity.com) operates on a transparent 'Meet Online, Transact Offline' model connecting buyers, owners, and builders directly with zero brokerage markups and verified title listings.",
  },
  {
    question: "How can job seekers and recruiters use GoJobin?",
    answer:
      "GoJobin (www.gojobin.com) offers instant job matching across multiple industries. Candidates can create professional resumes and apply for free, while employers can post vacancies and connect with verified talent.",
  },
  {
    question: "What financial solutions does LOAN vidhi offer?",
    answer:
      "LOAN vidhi (www.loanvidhi.com) partners with accredited banks and NBFCs to provide customized business expansion loans, machinery financing, working capital, home loans, and personal credit assistance.",
  },
  {
    question: "Is Vidi Meth open to business partnerships and collaborations?",
    answer:
      "Yes, we actively welcome partnerships with educational institutions, property developers, corporate recruiters, and retail merchants. Reach out via our Contact Us page or email info@vidimeth.com.",
  },
  {
    question: "How can I contact Vidi Meth for support or inquiries?",
    answer:
      "You can contact our team through the Contact Us form, email us directly at info@vidimeth.com, or visit our registered office at 147 Aambagan Road, Sakchi, Jamshedpur, Jharkhand – 831001.",
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
        className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#071326] bg-cover bg-center px-5 pt-28 pb-20 text-center text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 11, 34, 0.72), rgba(5, 11, 34, 0.82)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="relative mx-auto w-full max-w-7xl" data-aos="fade-up">
          <h1 className="text-[40px] font-semibold leading-none sm:text-[42px] lg:text-[52px]">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Find clear answers to common questions about Vidi Meth Digital Services, our platforms, and business solutions.
          </p>
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
                  <h3 className="text-[17px] sm:text-[18px] font-bold leading-[1.35] text-[#0a1f44] group-hover:text-[#0077c8] transition-colors">
                    {faq.question}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5fbff] text-[#0077c8] transition group-open:rotate-45 group-open:bg-[#0077c8] group-open:text-white [&_svg]:h-4 [&_svg]:w-4 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[2] [&_svg]:stroke-linecap-round">
                    <PlusIcon />
                  </span>
                </summary>
                <p className="mt-4 border-t border-slate-100 pt-4 text-[15px] font-normal leading-[1.7] text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
