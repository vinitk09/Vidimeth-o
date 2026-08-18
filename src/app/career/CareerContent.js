"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const initialJobs = [
  {
    id: 1,
    title: "Receptionist | vidimeth",
    company: "Vidi Meth Digital Services",
    location: "Jamshedpur",
    category: "Administration",
    type: "Full-Time",
    postedDate: "Posted 2 days ago",
    skills: ["Front Desk", "Client Communication", "MS Office", "Record Keeping"],
    description:
      "As a Receptionist at vidimeth, you will be the first point of contact for our visitors and clients. Your role is crucial in representing our brand professionally, managing office calls, welcoming guests, and handling day-to-day front office administration.",
    responsibilities: [
      "Greet visitors and clients warmly and direct them to the appropriate team members.",
      "Answer incoming phone calls, address basic inquiries, and forward messages accurately.",
      "Maintain office register logs, visitor records, and incoming/outgoing mail.",
      "Assist management with basic document formatting, filing, and office supply tracking.",
      "Ensure the reception area remains clean, orderly, and welcoming at all times.",
    ],
    requirements: [
      "Higher Secondary (10+2) or Graduate in any discipline.",
      "Prior experience as a Receptionist or Front Desk Executive is preferred.",
      "Good spoken and written communication skills in Hindi & English.",
      "Working knowledge of MS Word, Excel, and basic computer operations.",
      "Punctual, organized, and courteous demeanor.",
    ],
    benefits: [
      "Stable monthly salary with timely payment.",
      "Clean, modern, and supportive office environment.",
      "Paid festive holidays and leave entitlements.",
      "Opportunity to learn administrative and customer operations.",
    ],
  },
  {
    id: 2,
    title: "Marketing Manager | vidimeth",
    company: "Vidi Meth Digital Services",
    location: "Jamshedpur",
    category: "Marketing",
    type: "Full-Time",
    postedDate: "Posted 5 days ago",
    skills: ["Digital Strategy", "SEO & PPC", "Meta Ads", "Team Leadership"],
    description:
      "We are seeking an experienced Marketing Manager to oversee digital marketing campaigns, manage lead generation, and guide our marketing team in Jamshedpur across web and social platforms.",
    responsibilities: [
      "Plan and execute online marketing strategies across search engines, social media, and direct ads.",
      "Monitor Meta ad accounts, Google Search campaigns, and monthly campaign outcomes.",
      "Coordinate with content writers and graphic designers to maintain consistent brand messaging.",
      "Review monthly traffic and conversion analytics to optimize marketing spend.",
      "Lead team discussions and maintain client communication regarding project milestones.",
    ],
    requirements: [
      "Bachelor's degree in Marketing, Communications, or Business Administration.",
      "3+ years of experience in digital marketing or agency account management.",
      "Hands-on familiarity with Google Ads, Meta Business Manager, and Google Analytics.",
      "Strong team management and problem-solving abilities.",
    ],
    benefits: [
      "Competitive compensation with performance incentives.",
      "Leadership role within an established regional digital company.",
      "Annual appraisal and career growth trajectory.",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Executive | vidimeth",
    company: "Vidi Meth Digital Services",
    location: "Jamshedpur",
    category: "Marketing",
    type: "Full-Time",
    postedDate: "Posted 1 week ago",
    skills: ["Social Media", "Canva", "Content Scheduling", "Local SEO"],
    description:
      "Looking for a motivated Digital Marketing Executive to create posts, manage social media accounts, assist with ad campaigns, and support client digital promotions.",
    responsibilities: [
      "Draft engaging social media posts for Facebook, Instagram, and LinkedIn.",
      "Design basic promotional graphics using Canva or Photoshop.",
      "Schedule content posts and respond to user messages or comments.",
      "Assist senior managers in setting up local business listings and Google Maps profiles.",
    ],
    requirements: [
      "Graduate or Diploma holder in Marketing, Mass Communication, or related field.",
      "1-2 years experience managing business social media accounts.",
      "Good command over Hindi and English writing.",
      "Basic graphic editing and post design skills.",
    ],
    benefits: [
      "Friendly work culture with direct guidance from experienced marketers.",
      "Hands-on learning across diverse business domains.",
      "Paid leave and regular work hours.",
    ],
  },
  {
    id: 4,
    title: "Frontend Web Developer | vidimeth",
    company: "Vidi Meth Digital Services",
    location: "Remote",
    category: "Development",
    type: "Full-Time",
    postedDate: "Posted 3 days ago",
    skills: ["React.js", "Next.js", "JavaScript", "HTML/CSS", "Git"],
    description:
      "Join our development team to build clean, responsive web pages and web applications using React, Next.js, and modern frontend tools for our client projects and internal platforms.",
    responsibilities: [
      "Convert UI designs into clean, responsive HTML/CSS and React components.",
      "Ensure web pages load quickly and display correctly across desktop and mobile devices.",
      "Connect frontend interfaces with backend REST APIs.",
      "Fix UI layout bugs and update existing website features based on user feedback.",
    ],
    requirements: [
      "2+ years experience building web applications with React or Next.js.",
      "Good understanding of JavaScript (ES6+), HTML5, CSS3, and Git version control.",
      "Ability to write structured, readable, and maintainable code.",
    ],
    benefits: [
      "Work from home flexibility with stable project assignments.",
      "Timely monthly salary payout.",
      "Opportunity to work on education, real estate, and finance portals.",
    ],
  },
  {
    id: 5,
    title: "Academic Counselor | VM Academy",
    company: "Vidi Meth Digital Services",
    location: "Jamshedpur",
    category: "Counseling",
    type: "Full-Time",
    postedDate: "Posted 4 days ago",
    skills: ["Student Counseling", "Admission Guidance", "Course Selection"],
    description:
      "Guide students and parents through college course options, eligibility criteria, and admission procedures across various UG and PG streams in India on our VM Academy portal.",
    responsibilities: [
      "Answer student calls and inquiries regarding college courses, eligibility, and fee structures.",
      "Conduct counseling sessions to help candidates choose appropriate academic pathways.",
      "Follow up with prospective applicants and assist them with college admission steps.",
    ],
    requirements: [
      "Bachelor's degree in any stream.",
      "Good listening skills and patient, clear speech in Hindi and English.",
      "Interest in education counseling and student guidance.",
    ],
    benefits: [
      "Fixed monthly salary plus performance incentives for successful student enrollments.",
      "Structured work hours and regular holidays.",
    ],
  },
  {
    id: 6,
    title: "Financial Loan Officer | LOAN vidhi",
    company: "Vidi Meth Digital Services",
    location: "Ranchi",
    category: "Finance",
    type: "Full-Time",
    postedDate: "Posted 1 week ago",
    skills: ["Loan Verification", "Client Advisory", "Banking Documentation"],
    description:
      "Assist clients in understanding loan requirements, evaluating financial documentation, and coordinating with bank partners for loan processing under our LOAN vidhi division.",
    responsibilities: [
      "Review client loan applications and check supporting financial documents.",
      "Explain loan options, interest structures, and repayment terms to applicants clearly.",
      "Coordinate with banking partners to track application status through approval.",
    ],
    requirements: [
      "Graduate in Commerce, Economics, Banking, or Finance.",
      "1-3 years experience in banking, DSA loan processing, or financial services.",
    ],
    benefits: [
      "Competitive monthly pay with quarterly incentive structure.",
      "Official travel reimbursement where applicable.",
    ],
  },
];

const culturePerks = [
  {
    title: "Career Stability & Growth",
    text: "We offer steady employment with clear growth paths across our digital platforms in education, real estate, finance, and marketing.",
  },
  {
    title: "Supportive Work Environment",
    text: "Work alongside approachable managers and supportive teammates who value clear communication and practical teamwork.",
  },
  {
    title: "Timely Compensation & Perks",
    text: "Enjoy reliable monthly pay, festive allowances, paid leaves, and performance incentives based on honest effort.",
  },
  {
    title: "Real Industry Experience",
    text: "Gain practical exposure working on live digital portals serving thousands of students, business clients, and customers.",
  },
];

const hiringSteps = [
  { step: "1", title: "Submit Application", desc: "Select an open role below and submit your details along with your resume link." },
  { step: "2", title: "Profile Screening", desc: "Our HR team reviews your qualifications and work background to match job requirements." },
  { step: "3", title: "Personal Interview", desc: "Shortlisted candidates are invited for an interview with the department head." },
  { step: "4", title: "Offer & Joining", desc: "Selected candidates receive an official offer letter and onboarding schedule." },
];

export default function CareerContent() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Active filter state
  const [activeFilter, setActiveFilter] = useState({
    keyword: "",
    location: "",
    category: "",
  });

  // Modal states
  const [applyingJob, setApplyingJob] = useState(null);
  const [readingJob, setReadingJob] = useState(null);

  // Form input state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    resumeLink: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    setActiveFilter({
      keyword: searchKeyword.trim().toLowerCase(),
      location: selectedLocation,
      category: selectedCategory,
    });
  };

  const resetFilters = () => {
    setSearchKeyword("");
    setSelectedLocation("");
    setSelectedCategory("");
    setActiveFilter({ keyword: "", location: "", category: "" });
  };

  const filteredJobs = initialJobs.filter((job) => {
    const matchesKeyword =
      !activeFilter.keyword ||
      job.title.toLowerCase().includes(activeFilter.keyword) ||
      job.description.toLowerCase().includes(activeFilter.keyword) ||
      job.category.toLowerCase().includes(activeFilter.keyword) ||
      job.skills.some((s) => s.toLowerCase().includes(activeFilter.keyword));

    const matchesLocation =
      !activeFilter.location || job.location.toLowerCase() === activeFilter.location.toLowerCase();

    const matchesCategory =
      !activeFilter.category || job.category.toLowerCase() === activeFilter.category.toLowerCase();

    return matchesKeyword && matchesLocation && matchesCategory;
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setApplyingJob(null);
        setFormData({
          name: "",
          email: "",
          phone: "",
          experience: "",
          resumeLink: "",
          message: "",
        });
      }, 2500);
    }, 1000);
  };

  return (
    <div className="bg-[#f8fafc] text-[#1d2736] font-sans">
      {/* Clean Professional Hero Section */}
      <section
        className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#071326] bg-cover bg-center px-5 pt-28 pb-20 text-center text-white sm:px-8 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5, 11, 34, 0.78), rgba(5, 11, 34, 0.88)), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,119,200,0.25),transparent_50%)]" />

        <div className="relative mx-auto w-full max-w-4xl" data-aos="fade-up">
          <h1 className="text-[36px] font-bold tracking-tight leading-tight sm:text-[42px] lg:text-[52px]">
            Build Your Career at Vidi Meth
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">

        {/* Search & Filter Header Box */}
        <div className="mb-10 rounded-2xl bg-gradient-to-r from-sky-50/70 via-white to-sky-50/50 p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,119,200,0.07)] border border-sky-100" data-aos="fade-up">

          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#0077c8]" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#0077c8]">
                Search Open Positions
              </h2>
            </div>
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs font-semibold text-slate-500 hover:text-[#0077c8] transition underline"
            >
              Clear Filters
            </button>
          </div>

          <form onSubmit={handleSearchSubmit} className="grid gap-4 md:grid-cols-12 items-center">

            {/* Keywords Input */}
            <div className="md:col-span-5">
              <label htmlFor="search-keywords" className="sr-only">Keywords</label>
              <input
                id="search-keywords"
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Job title or key skill..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-[#0077c8] focus:bg-white focus:ring-2 focus:ring-[#0077c8]/20"
              />
            </div>

            {/* Location Dropdown */}
            <div className="md:col-span-3">
              <label htmlFor="search-location" className="sr-only">Location</label>
              <select
                id="search-location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0077c8] focus:bg-white focus:ring-2 focus:ring-[#0077c8]/20"
              >
                <option value="">Location (All)</option>
                <option value="Jamshedpur">Jamshedpur</option>
                <option value="Ranchi">Ranchi</option>
                <option value="Remote">Work from Home / Remote</option>
              </select>
            </div>

            {/* Category Dropdown */}
            <div className="md:col-span-3">
              <label htmlFor="search-category" className="sr-only">Category</label>
              <select
                id="search-category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0077c8] focus:bg-white focus:ring-2 focus:ring-[#0077c8]/20"
              >
                <option value="">All Departments</option>
                <option value="Administration">Administration</option>
                <option value="Marketing">Marketing</option>
                <option value="Development">Development</option>
                <option value="Counseling">Counseling</option>
                <option value="Finance">Finance</option>
              </select>
            </div>

            {/* Search Submit Button */}
            <div className="md:col-span-1 flex justify-stretch">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-xl bg-[#0077c8] py-3 text-white shadow-md transition hover:bg-[#005f91] hover:shadow-lg focus:outline-none"
                aria-label="Search Jobs"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Filter Applied Indicator */}
        {(activeFilter.keyword || activeFilter.location || activeFilter.category) && (
          <div className="mb-6 flex items-center justify-between rounded-xl bg-sky-50 px-4 py-3 text-xs text-[#0077c8] border border-sky-200">
            <span>
              Active Filter:{" "}
              <strong>
                {[
                  activeFilter.keyword && `"${activeFilter.keyword}"`,
                  activeFilter.location && `Location: ${activeFilter.location}`,
                  activeFilter.category && `Department: ${activeFilter.category}`,
                ]
                  .filter(Boolean)
                  .join(" | ")}
              </strong>
            </span>
            <button
              onClick={resetFilters}
              className="font-semibold underline hover:text-[#005f91]"
            >
              Reset
            </button>
          </div>
        )}

        {/* Job Listings Header */}
        <div className="mb-6 flex items-center justify-between border-b border-slate-200/80 pb-4">
          <h2 className="text-xl font-bold text-[#0a1f44]">
            Available Positions ({filteredJobs.length})
          </h2>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Vidi Meth Opportunities
          </span>
        </div>

        {/* Job Cards List */}
        {filteredJobs.length > 0 ? (
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <article
                key={job.id}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-xl hover:-translate-y-1"
                data-aos="fade-up"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">

                  {/* Company Logo Badge */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-2.5 shadow-sm">
                    <Image
                      src="/logo_vidi.png"
                      alt="Vidi Meth Logo"
                      width={48}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Main Job Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-black group-hover:text-[#0077c8] transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-semibold mt-0.5">
                          {job.company}
                        </p>
                      </div>

                      {/* Location & Posted Date */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
                        <span className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1 font-semibold text-slate-700">
                          <svg className="h-3.5 w-3.5 text-[#0077c8]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                          <span>{job.location}</span>
                        </span>
                        <span className="rounded-lg bg-sky-50 px-3 py-1 font-bold text-[#0077c8] border border-sky-100">
                          {job.type}
                        </span>
                        <span className="text-slate-400 font-medium">{job.postedDate}</span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="mt-3.5 text-sm text-slate-600 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Clean Skills Row */}
                    {job.skills && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg bg-sky-50/70 text-[#0077c8] border border-sky-100 px-3 py-1 font-semibold text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="mt-5 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                      <button
                        onClick={() => setApplyingJob(job)}
                        className="rounded-full bg-[#0077c8] px-5 py-2 text-xs font-bold text-white shadow-md transition-all hover:bg-[#005f91] hover:shadow-lg hover:-translate-y-0.5"
                      >
                        Quick Apply
                      </button>
                      <button
                        onClick={() => setReadingJob(job)}
                        className="rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                      >
                        Read Details
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <h3 className="text-lg font-bold text-[#0a1f44]">
              No openings match your search
            </h3>
            <p className="mt-2 text-xs text-slate-500">
              Please clear your search filters to view all available positions.
            </p>
            <button
              onClick={resetFilters}
              className="mt-5 rounded-full bg-[#0077c8] px-6 py-2.5 text-xs font-bold text-white transition hover:bg-[#005f91]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Why Work With Vidi Meth Section */}
      <section className="bg-slate-50/80 border-t border-slate-200/80 px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center" data-aos="fade-up">
            <span className="mb-2 inline-block rounded-full bg-[#0077c8]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0077c8]">
              Culture &amp; Benefits
            </span>
            <h2 className="text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
              Why Work With Us
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
              We provide a supportive, ethical, and growth-oriented workplace for all our team members.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {culturePerks.map((perk, index) => (
              <div
                key={perk.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#0077c8]/40 hover:shadow-lg hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-[#0077c8] font-bold">
                  {index + 1}
                </div>
                <h3 className="text-base font-bold text-black">
                  {perk.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {perk.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Apply Modal */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div
            className="relative w-full max-w-lg rounded-md bg-white p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setApplyingJob(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-700 text-lg font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="mb-4 border-b border-slate-200 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#005f91]">
                Application Form
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                {applyingJob.title}
              </h3>
              <p className="text-xs text-slate-500">
                Location: {applyingJob.location} | {applyingJob.type}
              </p>
            </div>

            {submitSuccess ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold">
                  ✓
                </div>
                <h4 className="text-base font-bold text-slate-900">Application Received</h4>
                <p className="mt-2 text-xs text-slate-600">
                  Thank you for applying for <strong>{applyingJob.title}</strong>. Our HR team will review your information and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full rounded border border-slate-300 px-3 py-2 text-xs text-slate-800 focus:border-[#005f91] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full rounded border border-slate-300 px-3 py-2 text-xs text-slate-800 focus:border-[#005f91] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded border border-slate-300 px-3 py-2 text-xs text-slate-800 focus:border-[#005f91] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Years of Relevant Experience
                  </label>
                  <input
                    type="text"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="e.g. Fresher, 1 Year, 3 Years"
                    className="w-full rounded border border-slate-300 px-3 py-2 text-xs text-slate-800 focus:border-[#005f91] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Resume Link / Google Drive Link <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.resumeLink}
                    onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                    placeholder="https://drive.google.com/..."
                    className="w-full rounded border border-slate-300 px-3 py-2 text-xs text-slate-800 focus:border-[#005f91] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Brief Introduction / Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly state your qualifications and why you are applying for this role..."
                    className="w-full rounded border border-slate-300 px-3 py-2 text-xs text-slate-800 focus:border-[#005f91] focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setApplyingJob(null)}
                    className="rounded bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded bg-[#005f91] px-5 py-2 text-xs font-semibold text-white hover:bg-[#004a73] disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Read More Detailed Modal */}
      {readingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-md bg-white p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setReadingJob(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-700 text-lg font-bold"
              aria-label="Close details modal"
            >
              &times;
            </button>

            {/* Header */}
            <div className="mb-5 border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 shrink-0 rounded border border-slate-200 p-1">
                  <Image
                    src="/logo_vidi.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{readingJob.title}</h3>
                  <p className="text-xs text-[#005f91] font-semibold">{readingJob.company}</p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded bg-blue-50 px-2.5 py-1 font-semibold text-[#005f91]">
                  Location: {readingJob.location}
                </span>
                <span className="rounded bg-slate-100 px-2.5 py-1 font-semibold text-slate-700">
                  Type: {readingJob.type}
                </span>
                <span className="rounded bg-slate-100 px-2.5 py-1 text-slate-600">
                  Department: {readingJob.category}
                </span>
                <span className="rounded bg-slate-100 px-2.5 py-1 text-slate-600">
                  {readingJob.postedDate}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="space-y-5 text-xs leading-relaxed text-slate-700">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Job Summary</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{readingJob.description}</p>
              </div>

              {readingJob.responsibilities && (
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">Responsibilities</h4>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    {readingJob.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {readingJob.requirements && (
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">Qualifications & Requirements</h4>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    {readingJob.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {readingJob.benefits && (
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">Offered Benefits</h4>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    {readingJob.benefits.map((ben, idx) => (
                      <li key={idx}>{ben}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="mt-6 flex items-center justify-end gap-2 border-t border-slate-200 pt-4">
              <button
                onClick={() => setReadingJob(null)}
                className="rounded border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const jobToApply = readingJob;
                  setReadingJob(null);
                  setApplyingJob(jobToApply);
                }}
                className="rounded bg-[#005f91] px-5 py-1.5 text-xs font-semibold text-white hover:bg-[#004a73]"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
