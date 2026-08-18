"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] pt-0">
      <Header />

      {/* Header Banner */}
      <section
        className="relative flex min-h-[360px] items-center overflow-hidden bg-black bg-cover bg-center px-5 pt-28 pb-20 text-left text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,119,200,0.25),transparent_50%)]" />

        <div className="relative mx-auto w-full max-w-7xl flex flex-col items-center justify-center" data-aos="fade-up">
          {/* <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#38bdf8] backdrop-blur-md">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l9-4 9 4v6c0 5.55-3.84 10.74-9 12A12.062 12.062 0 013 12V6z" />
            </svg>
            LEGAL CENTER
          </span> */}
          <h1 className="text-[34px] font-bold tracking-tight sm:text-[42px] lg:text-[52px]">
            Disclaimer
          </h1>
          {/* <p className="mt-3 max-w-2xl text-sm font-normal text-slate-300 sm:text-base">
            Limitation of warranty and technical liability terms for Vidi Meth Digital Services.
          </p> */}
          <div className="mt-4 flex items-center justify-start gap-2 text-xs sm:text-sm font-medium text-slate-300">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-[#38bdf8] font-semibold">Disclaimer</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[280px_1fr] items-start">

          {/* Legal Navigation Sidebar */}
          <aside className="hidden lg:block sticky top-24 self-start z-20">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_36px_rgba(10,31,68,0.06)]">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-3 px-2">
                Legal
              </h3>
              <nav className="space-y-1.5 text-xs font-medium">
                <Link
                  href="/about"
                  className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-slate-600 hover:bg-slate-100 hover:text-[#0077c8] transition-all"
                >
                  <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>About Us</span>
                </Link>

                <Link
                  href="/privacy-policy"
                  className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-slate-600 hover:bg-slate-100 hover:text-[#0077c8] transition-all"
                >
                  <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Privacy Policy</span>
                </Link>

                <Link
                  href="/terms-of-use"
                  className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-slate-600 hover:bg-slate-100 hover:text-[#0077c8] transition-all"
                >
                  <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Terms of Use</span>
                </Link>

                <Link
                  href="/grievance"
                  className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-slate-600 hover:bg-slate-100 hover:text-[#0077c8] transition-all"
                >
                  <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Grievances</span>
                </Link>

                <Link
                  href="/disclaimer"
                  className="flex items-center gap-3 rounded-xl px-3.5 py-3 bg-[#0077c8]/10 text-[#0a1f44] border-l-4 border-[#0077c8] font-bold transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 shrink-0 text-[#0077c8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Disclaimer</span>
                </Link>
              </nav>
            </div>
          </aside>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_16px_45px_rgba(10,31,68,0.06)] border-t-4 border-t-[#0077c8]" data-aos="fade-up">
            <div className="prose prose-slate max-w-none text-[15px] leading-[1.8] text-slate-700 text-justify">

              {/* Disclaimer Highlight Card */}
              <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h2 className="text-[22px] font-bold text-[#0a1f44] m-0">
                    Disclaimer &amp; Limitation of Warranty
                  </h2>
                </div>
                <p className="mb-0 text-slate-700 leading-relaxed">
                  The User expressly agree that the use of the website is at the user’s sole risk. The Website, service, content, user account and any third party content are provided by <strong className="text-slate-900">Vidi Meth Digital Services OPC Private Limited</strong> on an <em className="font-semibold text-slate-900">“as is”</em> and <em className="font-semibold text-slate-900">“as available”</em> basis without any representation or warranty of any kind, express, implied, statutory or otherwise including the implied warranties of title, non-infringement, accuracy, suitability, reliability, timelines, completeness, safety, performance, merchantability or fitness for a particular purpose permitted by applicable Indian law.
                </p>
              </div>

              {/* Warranty Disclaimers List */}
              <div className="flex items-center gap-3 mt-8 mb-3">
                <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">
                  No Warranty Statements
                </h3>
              </div>
              <p className="mb-3 text-slate-700">
                Without prejudice to the foregoing paragraph, Vidi Meth Digital Services OPC Private Limited does not warrant that:
              </p>

              <ol className="list-decimal pl-6 mb-8 space-y-2.5 text-slate-800 font-medium">
                <li>The website or the services will be uninterrupted, timely, secure or error-free,</li>
                <li>This Website will be constantly available, or available at all;</li>
                <li>The information on this Website is complete, true, accurate or non-misleading,</li>
                <li>Any errors or defects in the website or services will be corrected.</li>
              </ol>

              <div className="my-6 rounded-xl bg-slate-50/80 p-5 border border-slate-200 text-[14.5px]">
                <p className="text-slate-800 leading-relaxed font-medium m-0">
                  No advice or information, whether oral or written, obtained by you from Vidi Meth Digital Services OPC Private Limited or through the website / content or from use of the services shall create any warranty not expressly stated in these Terms of Use.
                </p>
              </div>

              {/* Liability Limitation Notice */}
              <div className="flex items-center gap-3 mt-10 mb-3">
                <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">
                  Limitation of Liability &amp; Technical Risk
                </h3>
              </div>

              <p className="mb-6 text-slate-700 leading-relaxed">
                You expressly understand and agree that, to the maximum extent permitted by applicable law, Vidi Meth Digital Services OPC Private Limited will not be liable to You in any way or in relation to the Contents of, or unauthorised use of your account or account information in connection with the Website or any services, either with or without your knowledge.
              </p>

              <p className="mb-6 text-slate-700 leading-relaxed">
                Vidi Meth Digital Services OPC Private Limited does not warrant that this site; nor makes any representations regarding the quality, accuracy or completeness of any data, information, Contents, materials or services included on or otherwise made available to You through the Website; their servers; or electronic communication sent from Us are free of viruses or other harmful components.
              </p>

              <p className="mb-8 text-slate-700 leading-relaxed">
                Vidi Meth Digital Services OPC Private Limited shall not be responsible for the delay, or inability to use the website or related functionalities, the provision of or failure to provide functionalities, or for any information, software, products, functionalities and related graphics obtained through the website or otherwise arising out of the use of website, whether based on contract, tort, negligence, strict liability.
              </p>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
