import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Header />

      {/* Header Banner */}
      <section className="bg-[#005f91] py-16 text-white px-5 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <h1 className="text-[32px] font-bold leading-tight sm:text-[40px]">
            Disclaimer
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-4xl text-[#333]">
          
          <div className="prose prose-slate max-w-none text-[15px] leading-[1.75]">

            {/* Disclaimer Highlight Card */}
            <div className="mb-8 rounded-lg border border-slate-200 bg-slate-50/70 p-6 sm:p-8">
              <h2 className="text-[22px] font-bold text-[#0a1f44] mb-4">
                Disclaimer &amp; Limitation of Warranty
              </h2>
              <p className="mb-4 text-slate-700 leading-relaxed">
                The User expressly agree that the use of the website is at the user’s sole risk. The Website, service, content, user account and any third party content are provided by <strong className="text-slate-900">Vidi Meth Digital Services OPC Private Limited</strong> on an <em className="font-semibold text-slate-900">“as is”</em> and <em className="font-semibold text-slate-900">“as available”</em> basis without any representation or warranty of any kind, express, implied, statutory or otherwise including the implied warranties of title, non-infringement, accuracy, suitability, reliability, timelines, completeness, safety, performance, merchantability or fitness for a particular purpose permitted by applicable Indian law.
              </p>
            </div>

            {/* Warranty Disclaimers List */}
            <h3 className="text-[20px] font-semibold text-[#0a1f44] mt-8 mb-3">
              No Warranty Statements
            </h3>
            <p className="mb-3 text-slate-700">
              Without prejudice to the foregoing paragraph, Vidi Meth Digital Services OPC Private Limited does not warrant that:
            </p>
            
            <ol className="list-decimal pl-6 mb-8 space-y-2.5 text-slate-800 font-medium">
              <li>The website or the services will be uninterrupted, timely, secure or error-free,</li>
              <li>This Website will be constantly available, or available at all;</li>
              <li>The information on this Website is complete, true, accurate or non-misleading,</li>
              <li>Any errors or defects in the website or services will be corrected.</li>
            </ol>

            <div className="my-6 rounded-md bg-[#fff8f0] p-5 border-l-4 border-[#ff6b00] text-[14.5px]">
              <p className="text-slate-800 leading-relaxed">
                No advice or information, whether oral or written, obtained by you from Vidi Meth Digital Services OPC Private Limited or through the website / content or from use of the services shall create any warranty not expressly stated in these Terms of Use.
              </p>
            </div>

            {/* Liability Limitation Notice */}
            <h3 className="text-[20px] font-semibold text-[#0a1f44] mt-10 mb-3">
              Limitation of Liability &amp; Technical Risk
            </h3>
            
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
      </section>

      <Footer />
    </main>
  );
}
