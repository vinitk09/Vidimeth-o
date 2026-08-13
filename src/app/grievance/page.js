"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GrievancePage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedReason, setSelectedReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen no-scrollbar bg-[#f8fafc] pt-0">
      <Header />

      {/* Header Banner */}
      <section
        className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-black bg-cover bg-center px-5 pt-28 pb-20 text-center text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,119,200,0.25),transparent_50%)]" />

        <div className="relative mx-auto w-full max-w-7xl" data-aos="fade-up">
          {/* <span className="mb-3 inline-block rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#38bdf8] backdrop-blur-md">
            Grievance Redressal Mechanism
          </span> */}
          <h1 className="text-[34px] font-bold tracking-tight sm:text-[42px] lg:text-[52px]">
            Grievance
          </h1>
          {/* <p className="mx-auto mt-3 max-w-2xl text-sm font-normal text-slate-300 sm:text-base">
            Official portal under IT Act, 2000 &amp; Intermediary Guidelines Rules for reporting content, legal or compliance concerns.
          </p> */}
        </div>
      </section>

      {/* Content Area */}
      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto w-full max-w-5xl space-y-10">

          {/* Form Container */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_16px_45px_rgba(10,31,68,0.06)]" data-aos="fade-up">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0a1f44]">Grievance Submitted Successfully</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for submitting your concern. Our Grievance Redressal Officer will review your submission and contact you via email within 24-48 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-xl border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Submit Another Report
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-[#0a1f44] mb-1">Your Contact &amp; Complaint Details</h3>
                  <p className="text-xs text-slate-500">Please fill out all relevant information accurately for prompt resolution.</p>
                </div>

                {/* 2-column input fields */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0077c8] focus:bg-white focus:ring-2 focus:ring-[#0077c8]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">E-Mail Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0077c8] focus:bg-white focus:ring-2 focus:ring-[#0077c8]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0077c8] focus:bg-white focus:ring-2 focus:ring-[#0077c8]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Subject *</label>
                    <input
                      type="text"
                      required
                      placeholder="Brief subject of concern"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0077c8] focus:bg-white focus:ring-2 focus:ring-[#0077c8]/20"
                    />
                  </div>
                </div>

                {/* Page URL input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Reported Page URL (Optional)</label>
                  <input
                    type="url"
                    placeholder="Please Share the Link(URL) of the Page Which You are Reporting Against"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0077c8] focus:bg-white focus:ring-2 focus:ring-[#0077c8]/20"
                  />
                </div>

                {/* Reason Radio Selection */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Select Reason for Complaint *</label>
                  <p className="mb-4 text-xs text-slate-600">
                    Please tell us a reason for your complain/concern. Choose an option which most closely matches with your concern. If you are unsure which option to choose: Please Select a Last option thank you.
                  </p>

                  <div className="space-y-3">
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
                      <label
                        key={i}
                        className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-all ${selectedReason === reason
                            ? "border-[#0077c8] bg-sky-50/50 ring-1 ring-[#0077c8]/30"
                            : "border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/40"
                          }`}
                      >
                        <input
                          type="radio"
                          name="reason"
                          required
                          checked={selectedReason === reason}
                          onChange={() => setSelectedReason(reason)}
                          className="mt-1 shrink-0 h-4 w-4 text-[#0077c8] focus:ring-[#0077c8]"
                        />
                        <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{reason}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* File Upload Zone */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Supporting Documents</label>
                  <p className="mb-3 text-xs text-slate-500">
                    Please upload any supporting documents pertaining to the issue you are reporting
                  </p>

                  <div className="relative rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-6 text-center transition hover:border-[#0077c8] hover:bg-sky-50/30">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="absolute inset-0 z-10 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="space-y-2">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-[#0077c8]">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700">
                        {selectedFile ? selectedFile.name : "Click or drag file to upload"}
                      </p>
                      <p className="text-[11px] text-slate-500">Supports PDF, DOC, PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0077c8] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#005f91] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Submit Grievance Report
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
