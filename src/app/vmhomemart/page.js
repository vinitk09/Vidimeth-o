import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export const metadata = {
  title: "VMhomeMART - Website Under Construction | Vidi Meth Digital Services",
  description:
    "VMhomeMART website is currently under construction. For any inquiries, reach us at info@vmhomemart.com.",
};

export default function VmHomeMartPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="relative flex-1 flex items-center justify-center min-h-screen pt-36 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image without Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/vmhomemart-image copy.jpeg"
            alt="VMhomeMART Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content Card */}
        <div
          className="relative z-10 w-full max-w-xl mx-auto rounded-3xl bg-white/95 backdrop-blur-xl p-8 sm:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] border border-white/80 text-center transform transition-all duration-300 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5)] mt-8"
          data-aos="zoom-in"
        >
          {/* VMhomeMART Logo / Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-rose-50/80 p-3 ring-1 ring-rose-200/60 shadow-inner">
            <Image
              src="/vmhomemartlogo.png"
              alt="VMhomeMART Logo"
              width={64}
              height={64}
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight sm:leading-tight">
            Website Under Construction
          </h1>

          {/* Accent Divider */}
          <div className="mx-auto my-4 h-1 w-16 rounded-full bg-gradient-to-r from-rose-500 to-amber-500" />

          {/* Contact Information */}
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-medium">
            You can reach us at{" "}
            <a
              href="mailto:info@vmhomemart.com"
              className="inline-flex items-center gap-1 font-semibold text-[#e11d48] underline underline-offset-4 transition-colors hover:text-[#be123c]"
            >
              info@vmhomemart.com
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800 active:scale-[0.98]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <Link
              href="/our-divisions"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-50 px-6 py-3 text-sm font-semibold text-[#e11d48] border border-rose-200 transition hover:bg-rose-100 active:scale-[0.98]"
            >
              Explore Divisions
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
