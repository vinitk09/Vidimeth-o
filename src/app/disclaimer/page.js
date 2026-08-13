"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] pt-20">
      <Header />

      {/* Header Banner */}
      <section
        className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-black bg-cover bg-center px-5 py-20 text-center text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.82)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,119,200,0.25),transparent_50%)]" />

        <div className="relative mx-auto w-full max-w-7xl" data-aos="fade-up">
          {/* <span className="mb-3 inline-block rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#38bdf8] backdrop-blur-md">
            Legal & Compliance
          </span> */}
          <h1 className="text-[34px] font-bold tracking-tight sm:text-[42px] lg:text-[52px]">
            Disclaimer
          </h1>
          {/* <p className="mx-auto mt-3 max-w-2xl text-sm font-normal text-slate-300 sm:text-base">
            Limitation of warranty and technical liability terms for Vidi Meth Digital Services.
          </p> */}
        </div>
      </section>

      {/* Content Section */}
      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto w-full max-w-4xl">

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_16px_45px_rgba(10,31,68,0.06)]" data-aos="fade-up">
            <div className="prose prose-slate max-w-none text-[15px] leading-[1.8] text-slate-700">

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

              <div className="my-6 rounded-xl bg-amber-50/80 p-5 border-l-4 border-amber-500 text-[14.5px]">
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
