import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GrievancePage() {
  return (
    <main className="min-h-screen no-scrollbar overflow-hidden bg-white pt-20">
      <Header />
      {/* Header Banner */}
      <section className="bg-[#005f91] py-16 text-white px-5 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <h1 className="text-[32px] font-bold leading-tight sm:text-[40px]">
            Grievance
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-5xl rounded-sm bg-[#fafafa] p-6 sm:p-10">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-slate-200 bg-white px-4 py-3 text-[15px] text-[#555] outline-none transition focus:border-[#005f91]"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="w-full border border-slate-200 bg-white px-4 py-3 text-[15px] text-[#555] outline-none transition focus:border-[#005f91]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-slate-200 bg-white px-4 py-3 text-[15px] text-[#555] outline-none transition focus:border-[#005f91]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-slate-200 bg-white px-4 py-3 text-[15px] text-[#555] outline-none transition focus:border-[#005f91]"
              />
            </div>

            <input
              type="url"
              placeholder="Please Share the Link(URL) of the Page Which You are Reporting Against"
              className="w-full border border-slate-200 bg-white px-4 py-3 text-[15px] text-[#555] outline-none transition focus:border-[#005f91]"
            />

            <div className="pt-4 text-[15px] text-[#222]">
              <p className="mb-4 text-[#111]">
                Please tell us a reason for your complain/concern. Choose an option which most closely matches with your concern. If you are unsure which option to choose: Please Select a Last option thank you.
              </p>

              <div className="space-y-4">
                {[
                  "Belongs to another person and to which the user does not have any right.",
                  "is defamatory, obscene, pornographic, paedophilic, invasive of another's privacy, including bodily privacy, insulting and harassing on the basis of gender, Libellous, racially or ethnically objectionable, relating or encouraging money laundering or gambling or otherwise inconsistent with or contrary to the laws in force.",
                  "is harmful to child.",
                  "infringes any patent, trademark, copyright or other proprietary rights.",
                  "violates any law for the time being in force, impersonates another person",
                  "deceives or misleads the addressee about the origin of the message knowingly and intentionally communicates any information which is patently false or misleading in nature but may reasonably be perceived as a fact.",
                  "contains software virus or any other computer code, file or program designed to interrupt, destroy or limit the functionality of any computer resource.",
                  "is patently false and untrue, and is written or published in any form, with the intent to mislead or harass a person, entity or agency for financial gain or to cause any injury to.",
                  "Others"
                ].map((reason, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group text-[14.5px] leading-relaxed">
                    <input type="radio" name="reason" className="mt-1 shrink-0 cursor-pointer h-3.5 w-3.5 accent-[#005f91]" />
                    <span className="text-[#333] group-hover:text-[#000] transition">{reason}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <p className="mb-3 text-[14px] text-[#333]">
                Please upload any supporting documents pertaining to the issue you are reporting
              </p>
              <div className="flex items-center gap-3 border border-slate-200 bg-white max-w-2xl">
                <label className="cursor-pointer bg-[#e9ecef] px-4 py-2.5 text-[14px] text-[#495057] transition hover:bg-[#dde0e3]">
                  Choose File
                  <input type="file" className="hidden" />
                </label>
                <span className="text-[14px] text-[#6c757d]">No file chosen</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="rounded-full bg-[#005f91] px-8 py-2.5 text-[15px] font-medium text-white transition hover:bg-[#004a70]"
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
