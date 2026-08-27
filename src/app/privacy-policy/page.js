"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { submitOptOutRequest } from "../utils/api";

export default function PrivacyPolicyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "Telemarketing Opt-Out Request",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await submitOptOutRequest({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

      setSuccessMessage(
        response?.message ||
          "Your opt-out details have been submitted. Your phone number will be removed from calling lists within 21 working days."
      );
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "Telemarketing Opt-Out Request",
        message: "",
      });
    } catch (err) {
      console.error("Opt-Out API submit error:", err);
      setErrorMessage(
        err.message || "Failed to submit opt-out request. Please verify your details and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="min-h-screen bg-[#f8fafc] pt-0">
      <Header />

      {/* Header Banner */}
      <section
        className="relative flex min-h-[360px] items-center overflow-hidden bg-black bg-cover bg-center px-5 pt-28 pb-20 text-left text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=80')",
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
            Privacy Policy
          </h1>
          {/* <p className="mt-3 max-w-2xl text-sm font-normal text-slate-300 sm:text-base">
            How Vidi Meth Digital Services collects, uses, and protects your personal information.
          </p> */}
          <div className="mt-4 flex items-center justify-start gap-2 text-xs sm:text-sm font-medium text-slate-300">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-[#38bdf8] font-semibold">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Main Content Area with Sticky Sidebar */}
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
                  className="flex items-center gap-3 rounded-xl px-3.5 py-3 bg-[#0077c8]/10 text-[#0a1f44] border-l-4 border-[#0077c8] font-bold transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 shrink-0 text-[#0077c8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-slate-600 hover:bg-slate-100 hover:text-[#0077c8] transition-all"
                >
                  <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Disclaimer</span>
                </Link>
              </nav>
            </div>
          </aside>

          {/* Main Privacy Policy Paper Document */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_16px_45px_rgba(10,31,68,0.06)] border-t-4 border-t-[#0077c8]" data-aos="fade-up">
            <div className="prose prose-slate max-w-none text-[15px] leading-[1.8] text-slate-700 text-justify">

              {/* Policy Overview */}
              <div id="overview" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h2 className="text-[24px] font-bold text-[#0a1f44] m-0">Privacy Policy</h2>
                </div>
                <p className="mb-4">
                  While you use and enjoy our services, we view protection of your privacy policy as a very important principle. We understand clearly that You and Your Personal Information is one of our most important assets. We value the trust you place in us, and hence insist upon the highest level of protection for securing your personal information. We are obligated to protect your personal information in accordance with applicable laws, and regulations.
                </p>
                <p className="mb-4">
                  This Policy is subject to modification based on changes in the business, legal and regulatory requirements and will be made available to you online. Vidi Meth Digital Services OPC Private Limited policy on sharing or transferring Your data or information with third parties. You are encouraged to periodically visit the website to review the policy and any changes.
                </p>
                <p className="mb-10">
                  We request to you please read this Privacy Policy carefully. By accessing or using our website, You acknowledge that you have read, understand and agree to be bound by the terms and conditions of this Privacy Policy. If you do not agree please do not use or access our Website.
                </p>
              </div>

              {/* Collection of Information */}
              <div id="collection" className="scroll-mt-28 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 mt-6 mb-4">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">Collection of Information</h3>
                </div>
                <p className="mb-4">
                  When you use our Website, we require certain information be shared by you with us. Vidi Meth Digital Services OPC Private Limited may collect the following types of Information:
                </p>

                <div className="my-5 rounded-xl bg-slate-50 border border-slate-200/80 p-5 sm:p-6">
                  <h4 className="text-[16px] font-bold text-[#0a1f44] mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0077c8]" />
                    Personal Information :
                  </h4>
                  <p className="mb-3 text-slate-600">
                    Personal information collected that can be used to identify personally, Personal Information for the purposes of this Privacy Policy shall include, but not limited to the following:
                  </p>
                  <ul className="list-disc pl-5 mb-2 space-y-2 text-slate-700">
                    <li>Basic details which you provide during the registration process such as Name, Phone Number, Other Contact Information, Email Address, Communication or Permanent Address.</li>
                    <li>User name along with your password.</li>
                    <li>Demographic details such as gender, Date of Birth, city, PIN code or nearest location.</li>
                    <li>Information regarding your transactions on the website.</li>
                    <li>Usage logs/Server logs/Cookies which may contain details of your personal or sensitive personal information.</li>
                    <li>Any other Information that You provide during Your registration process, if any, on the Website.</li>
                  </ul>
                </div>

                <div className="my-5 rounded-xl bg-slate-50 border border-slate-200/80 p-5 sm:p-6">
                  <h4 className="text-[16px] font-bold text-[#0a1f44] mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#1b8b4b]" />
                    Non-Personal Information :
                  </h4>
                  <p className="mb-3 text-slate-600">
                    We also collect your information other than Personal Information, when You use and/or visit the Website. Non-Personal Information that does not identify you or any other individual, and includes session, web beacons and usage and transaction data, aggregate log data and aggregate information.
                  </p>
                  <p className="mb-3 text-slate-600">
                    This Information may include, your geographical location, information may include the URL that you just came from (whether this URL is on our Website or not), which URL you next go to (whether this URL is on our Website or not), your computer browser information, and your IP address. The duration of Your stay on the Website is also stored in the session along with the date and time of Your access, Non-personal information is collected in various ways such as through the use of cookies.
                  </p>
                  <p className="mb-0 text-slate-600">
                    Cookies are small files placed on your hard drive that assist us in providing our services. We place both permanent and temporary cookies in your computer’s hard drive. You can erase or choose to block these cookies from your computer. You can configure your computer’s browser to alert you when we attempt to send you a cookie with an option to accept or refuse the cookie. If You have turned cookies off, You may be prevented from using certain features of the Website.
                  </p>
                </div>
              </div>

              {/* Use of Information */}
              <div id="use" className="scroll-mt-28 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 mt-6 mb-4">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">Use of Information</h3>
                </div>
                <p className="mb-4">
                  The User Information provided by you to us is used for vidimeth.com to facilitate a better, customized and convenient use of the Website’s services.
                </p>
                <p className="mb-3">
                  The User Information is used by Vidi Meth Digital Services OPC Private Limited inter alia to
                </p>
                <ul className="list-disc pl-6 mb-10 space-y-2">
                  <li>responds to the user’s requests and enquiries and complaints, customer services,</li>
                  <li>improve, customize and update new features of the Website,</li>
                  <li>Communicating to you about online and offline offers, bills, invoices, existing or new offers, contents, advertisements, surveys, key policies, other administrative information and marketing communications that Vidi Meth Digital Services OPC Private Limited believes may be of interest to the user</li>
                  <li>detect and protect us against error, fraud and other criminal activity</li>
                  <li>identify and use your IP address to help diagnose problems with our server and to administer our Website,</li>
                  <li>inform any change in the Terms of Use or this Policy or the Terms and Conditions of Sale,</li>
                  <li>complete and fulfill the user’s purchase, process payments, communicate with the user regarding the user’s purchase and provide the user with related customer service,</li>
                  <li>Support to law enforcement agencies or in connection with an investigation on matters related to public safety, as permitted by law or anti-fraud activities/systems</li>
                  <li>protect the integrity of the Website.</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              {/* Sharing and Disclosure */}
              <div id="sharing" className="scroll-mt-28 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 mt-6 mb-4">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">Sharing and Disclosure</h3>
                </div>
                <p className="mb-4">
                  We may share personal information with our other corporate entities and affiliates. These entities and affiliates may market to you as a result of such sharing unless you explicitly opt out.
                </p>
                <p className="mb-4">
                  We may transfer/disclose/share Information (other than Your Personal Information) to those parties (or third parties) who support our business or services, contact information verification, payment processing, customer service, website hosting, data analysis, infrastructure provision, IT services, comply with our legal obligations, to enforce our User Agreement, to facilitate our marketing and advertising activities, or to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our Services and other similar services.
                </p>
                <p className="mb-4">
                  We do not sell, trade or rent Personal Information in any manner, except as specified in this Policy or if express consent is sought from the user. We understand that the User Information is very crucial and is important for the user.
                </p>
                <p className="mb-4">
                  We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to notices, court orders, or other legal process. We may disclose personal information to law enforcement offices, third party rights owners. We may also share Personal Information if Vidi Meth Digital Services OPC Private Limited believe it is necessary in order to investigate, prevent, or take action regarding illegal activities, suspected fraud, and situations involving potential threats to the physical safety of any person, violations of various terms and conditions or our policies.
                </p>
                <p className="mb-4">
                  In a scenario where we or our assets are merged or acquired by the other business entity, or during restructuring of business or re-organization, we may have to share information provided by you with the other business entities. Rest assured, if such a transaction occurs the other business entity or the newly combined business entity would be required to follow this Privacy Policy.
                </p>
                <p className="mb-10">
                  We reserve the right to disclose your information when required to do so by law or regulation, or under any legal obligation or order under law or in response to a request from a law enforcement or governmental agency or judicial, quasi-judicial or any other statutory or constitutional authority or to establish or exercise our legal rights or defend against legal claims.
                </p>
              </div>

              {/* Links to Third Party Websites */}
              <div id="third-party" className="scroll-mt-28 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 mt-6 mb-4">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">Links to Third Party Websites</h3>
                </div>
                <p className="mb-4">
                  Links to third-party advertisements, websites or any third party electronic communication service may be provided on the Website which are operated by third parties. Such websites/application are governed by their respective privacy policies, which are beyond our control. The user should read the privacy policy of each and every linked website and any access or use of the linked websites is entirely at the user’s own risk. VidiMeth Digital Services OPC Private Limited is not responsible for any direct, indirect, solicited or unsolicited communication made by any of these linked third party websites.
                </p>
                <p className="mb-10">
                  We only collect your Personal Information to conduct our business and to enable us to deliver and improve our services.We do not for any reason whatsoever sell your Correspondence Information to any third party or otherwise trade on it.
                </p>
              </div>

              {/* Security Precautions */}
              <div id="security" className="scroll-mt-28 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 mt-6 mb-4">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">Security Precautions</h3>
                </div>
                <p className="mb-4">
                  The security of your Personal Information is important to us. Vidi Meth Digital Services OPC Private Limited strives to ensure the security of Your Personal Information and to protect Your Personal Information against unauthorized access or unauthorized alteration, disclosure or destruction. For the purpose of checking possible vulnerabilities and attacks, Vidi Meth Digital Services OPC Private Limited may conduct periodical internal review of data collection, storage and processing practice and security measures on the Website. Vidi Meth Digital Services OPC Private Limited may use such software as it determines is best for maintaining security. However, the internet is not absolutely a secure environment and the Website cannot ensure or warrant a 100% security of the User Information.
                </p>
                <p className="mb-10">
                  Notwithstanding anything contained in this Policy or elsewhere, VidiMeth Digital Services OPC Private Limited shall not be held responsible for any loss, damage or misuse of the User Information, if such loss, damage or misuse is attributable to a Force Majeure Event. A Force Majeure Event means any event that is beyond the reasonable control of Vidi Meth Digital Services OPC Private Limited and includes, without limitation, fire, flood, explosion, acts of God, civil commotion, strikes, lock outs or industrial action of any kind, riots, insurrection, war, acts of government, power failure, sabotage, computer hacking, unauthorized access to computer data and storage device, system failure, virus, attacks, bugs, computer crashes, breach of security and encryption.
                </p>
              </div>

              {/* User Discretion and Opt-Out Form */}
              <div id="opt-out" className="scroll-mt-28 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 mt-6 mb-4">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">User Discretion and Opt-Out</h3>
                </div>
                <p className="mb-4">
                  The user should be aware that the User Information or other data, the user provides to the Website for availing the services through the Website could be read, collected, or used by third parties in which case the User Information might be used for sending unsolicited messages or communications for which Vidi Meth Digital Services OPC Private Limited is not responsible.
                </p>
                <p className="mb-4">
                  You can add or update Your Personal Information on regular basis. Kindly note that Vidi Meth Digital Services OPC Private Limited would retain Your previous Personal Information in its records.
                </p>
                <p className="mb-6">
                  In case you do not want to be disturbed over telephonic calls, kindly fill up the details requested under this section below, including the details of the telephone number(s) on which you do not wish to be contacted and submit the same at info@vidimeth.com from your email address registered at Vidi Meth Digital Services OPC Private Limited. The details that you provide through the opt-out email will remain confidential and once you have submitted the same to us, your telephone number(s) will be removed from all our telemarketing calling lists within 21 working days. We will make every effort to ensure that you do not get any further telemarketing calls on such telephone number(s). The details to be submitted for opting-out shall be as below:
                </p>

                {/* Modern Form Card */}
                <div className="my-8 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 sm:p-8 shadow-sm">
                  <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#0a1f44]">
                    Telemarketing Opt-Out Submission Form
                  </h4>
                  {submitted ? (
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center text-emerald-900 shadow-sm">
                      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h5 className="font-bold text-base text-emerald-900">Opt-Out Request Received</h5>
                      <p className="mt-1 text-sm text-emerald-800">
                        {successMessage || "Your opt-out details have been submitted. Your phone number will be removed from calling lists within 21 working days."}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setErrorMessage("");
                        }}
                        className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-bold text-white shadow transition hover:bg-emerald-800"
                      >
                        Submit another opt-out request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {errorMessage && (
                        <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs font-medium text-rose-800 flex items-start gap-2.5">
                          <svg className="h-4 w-4 shrink-0 text-rose-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-xs font-semibold text-slate-700">Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0077c8] focus:ring-4 focus:ring-[#0077c8]/10"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-xs font-semibold text-slate-700">E-Mail *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="E-Mail"
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0077c8] focus:ring-4 focus:ring-[#0077c8]/10"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-xs font-semibold text-slate-700">Phone Number *</label>
                          <input
                            type="tel"
                            name="phoneNumber"
                            required
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0077c8] focus:ring-4 focus:ring-[#0077c8]/10"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-xs font-semibold text-slate-700">Subject *</label>
                          <input
                            type="text"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0077c8] focus:ring-4 focus:ring-[#0077c8]/10"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-slate-700">Message Here *</label>
                        <textarea
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Message Here"
                          rows={4}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0077c8] focus:ring-4 focus:ring-[#0077c8]/10"
                        />
                      </div>
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0077c8] to-[#005485] px-8 py-3 text-sm font-bold text-white shadow-md transition hover:from-[#005f91] hover:to-[#00426b] disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Submitting...
                            </>
                          ) : (
                            "Submit Now"
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Advertisements */}
              <div id="ads" className="scroll-mt-28 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 mt-6 mb-4">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">Advertisements</h3>
                </div>
                <p className="mb-10">
                  We may use third-party advertising companies and/or ad agencies to serve ads when you visit our Website. These companies may use information (excluding your name, address, email address, or telephone number) about your visits to this Website in order to provide advertisements on this Website and other third party websites about services that may be of interest to you.
                </p>
              </div>

              {/* EMAIL & SMS Communications */}
              <div id="communications" className="scroll-mt-28 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 mt-6 mb-4">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">EMAIL & SMS Communications from us and Our Partners</h3>
                </div>
                <p className="mb-10">
                  We provide our registered customers with periodic emailers and email/SMS alerts. We also allow users to subscribe to email newsletters and from time to time may transmit emails promoting Vidi Meth Digital Services OPC Private Limited or third-party products. Subject to the express consent clause above, Vidi Meth Digital Services OPC Private Limited’s Website subscribers may opt-out of receiving our promotional emails and terminate their newsletter subscriptions by following the instructions in the emails. Opting out in this manner will not end transmission of service-related emails/SMS, such as email/SMS alerts. The above services are also provided by our partners.
                </p>
              </div>

              {/* Social Media */}
              <div id="social" className="scroll-mt-28 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 mt-6 mb-4">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">Social Media</h3>
                </div>
                <p className="mb-4">
                  Vidi Meth Digital Services OPC Private Limited operates channels, pages and accounts on some social media sites to inform, assist and engage with you. Vidi Meth Digital Services OPC Private Limited monitors and records comments and posts made on these channels about Vidi Meth Digital Services OPC Private Limited in order to improve its products and services. Please note that you must not communicate with Vidi Meth Digital Services OPC Private Limited through such social media sites the following information:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    Sensitive personal data including special categories of personal data meaning any information revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person’s sex life or sexual orientation and other sensitive personal data such as criminal convictions and offenses and national identification number;
                  </li>
                  <li>Excessive, inappropriate, offensive or insulting information towards individuals.</li>
                </ul>
                <p className="mb-10">
                  Vidimeth.com is not responsible for any information posted on those sites other than the information posted by its employees on its behalf. Vidi Meth Digital Services OPC Private Limited is only responsible for its own use of the personal data received through such sites.
                </p>
              </div>

              {/* Changes to Policy */}
              <div id="changes" className="scroll-mt-28 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 mt-6 mb-4">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">Changes to this Privacy Policy</h3>
                </div>
                <p className="mb-10">
                  VidiMeth Digital Services OPC Private Limited reserves the right to update, change or modify this policy at any time. The policy shall come to effect from the date of such update, change or modification.
                </p>
              </div>

              {/* Disclaimer */}
              <div id="disclaimer" className="scroll-mt-28 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 mt-6 mb-4">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">Disclaimer</h3>
                </div>
                <p className="mb-10">
                  VidiMeth Digital Services OPC Private Limited shall not be liable for any loss or damage sustained by reason of any disclosure (inadvertent or otherwise) of any information concerning the user’s account and / or information relating to or regarding online transactions using credit cards / debit cards and / or their verification process and particulars nor for any error, omission or inaccuracy with respect to any information so disclosed and used whether or not in pursuance of a legal process or otherwise. Vidi Meth Digital Services OPC Private Limited does not store any Credit / Debit card details.Any other personal information shared by you which is not asked by Vidi Meth Digital Services OPC Private Limited during registration, either mandatorily or optionally; accounts to wilful and intentional furnishing; and Vidi Meth Digital Services OPC Private Limited will not be liable for breach of such information.
                </p>
              </div>

              {/* Your Consent */}
              <div id="consent" className="scroll-mt-28 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 mt-6 mb-4">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">Your Consent</h3>
                </div>
                <p className="mb-10">
                  Changes in law or changes in Vidi Meth Digital Services OPC Private Limited’s business may require changes to be made to the terms of this Privacy Policy from time to time so Vidi Meth Digital Services OPC Private Limited encourages you to review this Privacy Policy periodically for any such changes. As our privacy policy is subject to change at any time without notice, it is your responsibility to carefully read, agree with the Privacy Policy on each occasion you use the Website. By using or browsing the Website, you agree to be bound by the terms and conditions of this Privacy Policy (as amended and in force from time to time) and you expressly consent to our use and disclosure of your Information including personal Information and other Information in accordance with this Privacy Policy (as amended from time to time). If you do not agree to the terms of this Privacy Policy, please do not use or browse the Website or any Services thereof.
                </p>
              </div>

              {/* Grievance Officer */}
              <div id="grievance" className="scroll-mt-28 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 mt-6 mb-4">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">Grievance Officer</h3>
                </div>
                <p className="mb-10">
                  In case of any complaints or grievances, the user may contact the Grievance Officer at:{" "}
                  <a href="mailto:info@vidimeth.com" className="font-semibold text-[#0077c8] underline">
                    info@vidimeth.com
                  </a>
                </p>
              </div>

              {/* Further Acknowledgements */}
              <div id="acknowledgements" className="scroll-mt-28 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 mt-6 mb-4">
                  <span className="h-6 w-1 rounded-full bg-[#0077c8]" />
                  <h3 className="text-[20px] font-bold text-[#0a1f44] m-0">Further Acknowledgements</h3>
                </div>
                <p className="mb-3">You hereby acknowledge and agree that this Privacy Policy:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Is clear and easily accessible and provide statements of Vidi Meth Digital Services OPC Private Limited policies and practices with respective to the Information;</li>
                  <li>Provides for the various types of personal or sensitive personal data of information to be collected;</li>
                  <li>Provides for the purposes of collection and usage of the Information;</li>
                  <li>provides for disclosure of Information;</li>
                  <li>provides for reasonable security practices and procedures;</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
