import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "FAQs | Vidi Meth Digital Services",
  description:
    "Frequently asked questions about Vidimeth.com, collaborations, vision, updates, educational resources, and where to see our work.",
};

const faqs = [
  {
    question: "What is Vidimeth.com all about?",
    answer:
      "Vidimeth.com is a dynamic platform excelling in diverse domains such as online education, job recruitment, financial consulting, and e-commerce. With a steadfast commitment to excellence and innovation, we provide tailored solutions for businesses and individuals. Our versatile presence empowers users to navigate the realms of education, employment, finance, and online commerce with confidence. Whether it's shaping educational journeys, facilitating career growth, offering financial insights, or providing a seamless e-commerce experience, Vidimeth.com is dedicated to fostering success and satisfaction across various sectors, creating a comprehensive and impactful platform for the modern user.",
  },
  {
    question: "Is Vidimeth.com open to collaborations or partnerships?",
    answer:
      "Vidimeth.com enthusiastically embraces collaboration opportunities. We believe in the power of partnerships to foster mutual growth and innovation. If you are interested in joining forces with us, kindly connect through our Contact Us page. We value open discussions and look forward to exploring synergies that align with our commitment to excellence and customer satisfaction. Together, we can create meaningful collaborations that contribute to the success and impact of Vidimeth.com in diverse sectors, ensuring a dynamic and mutually beneficial partnership for all involved.",
  },
  {
    question: "What is the vision of Vidimeth.com?",
    answer:
      "Vidimeth.com envisions becoming a prominent leader in its industry, recognized for innovation, excellence, and an unwavering dedication to client satisfaction. As we strive for distinction, our vision extends beyond mere industry presence to shaping the future landscape. We aim to set new standards through cutting-edge solutions, fostering a culture of continuous improvement and customer-centricity. By consistently delivering innovative services, we aspire to not only meet but exceed the expectations of our clients, establishing Vidimeth.com as a trusted and influential name synonymous with progressive industry leadership, transformative solutions, and unparalleled commitment to the success of our clients.",
  },
  {
    question: "How can I stay updated on Vidimeth.com's latest developments?",
    answer:
      "To stay informed about Vidimeth.com's latest developments, follow us on our website's blog for in-depth insights. Engage with us through our active presence on social media platforms. Additionally, subscribe to our newsletter for regular updates on projects, industry trends, and valuable insights. By connecting through these channels, you'll be seamlessly integrated into our dynamic community, ensuring you receive timely and relevant information about Vidimeth.com's ongoing initiatives and contributions to the fields of online education, job recruitment, financial consulting, and e-commerce.",
  },
  {
    question: "Does Vidimeth.com provide educational resources or webinars?",
    answer:
      "Vidimeth.com is committed to knowledge-sharing. Dive into our blog where we regularly share valuable educational resources. Stay tuned for upcoming webinars, as we actively contribute to your learning journey. By exploring these avenues, you'll access insightful content, industry updates, and educational materials tailored to enhance your understanding of the diverse domains we specialize in, including online education, job recruitment, financial consulting, and e-commerce. Join us in the pursuit of knowledge and continuous learning through Vidimeth.com's engaging and informative resources.",
  },
  {
    question: "Where can I see your work?",
    answer:
      "You can explore Vidimeth.com's achievements, insights, and contributions on our website blog and social media platforms. Engage with us, stay informed, and join our dynamic community.",
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
            FAQs
          </h1>
        </div>
      </section>

      <section className="bg-[#f4f7fb] px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <aside
            className="h-fit rounded-lg bg-[#071326] p-8 text-white shadow-[0_22px_60px_rgba(7,19,38,0.18)] lg:sticky lg:top-28"
            data-aos="fade-right"
          >
            <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-white/64">
              Help Center
            </p>
            <h2 className="text-[30px] font-semibold leading-[1.18] sm:text-[36px]">
              Questions about Vidimeth.com?
            </h2>
            <p className="mt-5 text-[16px] font-normal leading-[1.7] text-white/74">
              Find quick answers about our platform, partnerships, vision,
              resources, and latest work.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#071326] transition hover:bg-[#0077c8] hover:text-white"
            >
              Contact Us
            </a>
          </aside>

          <div className="space-y-4" data-aos="fade-left">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-slate-200 bg-white p-5 shadow-[0_14px_38px_rgba(10,31,68,0.06)] open:border-[#0077c8]/30 open:shadow-[0_20px_52px_rgba(0,119,200,0.1)]"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[18px] font-semibold leading-[1.35] text-[#0a1f44]">
                    {faq.question}
                  </h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5fbff] text-[#0077c8] transition group-open:rotate-45 group-open:bg-[#0077c8] group-open:text-white [&_svg]:h-5 [&_svg]:w-5 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[2] [&_svg]:stroke-linecap-round">
                    <PlusIcon />
                  </span>
                </summary>
                <p className="mt-5 border-t border-slate-200 pt-5 text-[16px] font-normal leading-[1.75] text-[#555555]">
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
