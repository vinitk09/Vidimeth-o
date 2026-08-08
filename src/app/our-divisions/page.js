import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "Our Divisions | Vidi Meth Digital Services",
  description:
    "Explore the Vidi Meth Digital Services divisions across education, real estate, jobs, finance, and e-commerce.",
};

const divisions = [
  {
    name: "VM Academy",
    logo: "/vmlogo.png",
    href: "https://vmacademy.in/",
    category: "Education",
    text: "VM Academy online education portal that provides education-related services and products. Find the course and college that is best for you. VM Academy is India's leading college and course selection platform with information.",
  },
  {
    name: "VillageMyCity",
    logo: "/villagemycitylogo.png",
    href: "https://villagemycity.com/",
    category: "Real Estate",
    text: "VillageMyCity is a real estate property portal in India. Anywhere, any time, just one click to sell your items or products.",
  },
  {
    name: "Gojobin",
    logo: "/gojobinlogo.png",
    href: "https://gojobin.com/",
    category: "Jobs",
    text: "Gojobin, India's leading job site, provides you with the best opportunity to find the right job today. Gojobin is India's most innovative and fastest-growing recruitment portal.",
  },
  {
    name: "LoanVidhi",
    logo: "/loanvidhilogo.png",
    href: "https://www.loanvidhi.com/",
    category: "Finance",
    text: "LoanVidhi is a service provider of insurance, financial affairs, monetary affairs, and real estate affairs. It is one of the leading financial consultants dealing in loans and insurance services.",
  },
  {
    name: "VMhomeMart",
    logo: "/vmhomemartlogo.png",
    href: "https://vmhomemart.com/",
    category: "E-commerce",
    text: "VMhomeMart is the best e-commerce platform in the fast-growing Indian market. VMhomeMART is a complete online shopping store.",
  },
];

export default function OurDivisionsPage() {
  return (
    <main className="overflow-x-hidden bg-white pt-20">
      <Header />

      <section
        className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#071326] bg-cover bg-center px-5 py-20 text-center text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 11, 34, 0.6), rgba(5, 11, 34, 0.64)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="relative mx-auto w-full max-w-7xl" data-aos="fade-up">
          <h1 className="text-[40px] font-semibold leading-none sm:text-[54px] lg:text-[64px]">
            Our Divisions
          </h1>
          <nav
            className="mt-5 flex items-center justify-center gap-3 text-[15px] font-normal text-white/82"
            aria-label="Breadcrumb"
          >
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <span className="h-1.5 w-1.5 rounded-full bg-white/55" />
            <span className="text-white">Our Divisions</span>
          </nav>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-[#1d2736] sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
          <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#1b8b4b]">
            Business Network
          </p>
          <h2 className="text-[32px] font-semibold leading-[1.2] text-[#005f91] sm:text-[42px]">
            Digital divisions serving focused customer needs.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[17px] font-normal leading-[1.68] text-[#555555]">
            Vidi Meth Digital Services brings multiple digital divisions
            together across education, property, recruitment, finance, and
            e-commerce.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((division, index) => (
            <article
              key={division.name}
              className="flex min-h-[465px] flex-col items-center justify-between bg-white px-7 py-11 text-center shadow-[0_22px_60px_rgba(10,31,68,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(10,31,68,0.13)]"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="flex h-40 w-full items-center justify-center">
                <Image
                  src={division.logo}
                  alt={`${division.name} logo`}
                  width={460}
                  height={200}
                  className="max-h-36 max-w-full object-contain"
                />
              </div>

              <p className="mt-8 text-justify text-[17px] font-normal leading-[1.72] text-black">
                {division.text}
              </p>

              <a
                href={division.href}
                className="mt-7 inline-flex items-center justify-center bg-[#009846] px-4 py-2 text-[16px] font-semibold text-white underline underline-offset-2 transition hover:bg-[#007f3a]"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
