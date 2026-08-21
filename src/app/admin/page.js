"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const adminModules = [
  {
    title: "Customer Reviews & Ratings",
    description: "Moderate client feedback, verify testimonials, reject invalid submissions, and remove reviews.",
    endpoint: "GET / PATCH / DELETE /api/reviews",
    href: "/admin/reviews",
    badge: "API Active",
    color: "from-sky-500 to-blue-700",
  },
  {
    title: "Careers & Job Applications",
    description: "Post new job openings, review candidate applications, resume links, and update application status.",
    endpoint: "GET / POST / PATCH /api/vidimeth/careers",
    href: "/admin/careers",
    badge: "API Active",
    color: "from-emerald-500 to-teal-700",
  },
  {
    title: "Grievance Redressal Portal",
    description: "Track reported compliance concerns, examine supporting legal documents, and update case status.",
    endpoint: "GET / POST / PATCH / DELETE /api/grievance",
    href: "/admin/grievances",
    badge: "API Active",
    color: "from-amber-500 to-orange-700",
  },
  {
    title: "Contact Us Inquiries",
    description: "View customer inquiry submissions, quote requests, and client messages from the contact form.",
    endpoint: "GET / POST /api/vidimeth/contact-us",
    href: "/admin/contact",
    badge: "API Active",
    color: "from-indigo-500 to-purple-700",
  },
  {
    title: "Telemarketing Opt-Out",
    description: "Manage phone number opt-out submissions and maintain compliance lists.",
    endpoint: "GET / POST /api/privacy-policy",
    href: "/admin/opt-out",
    badge: "API Active",
    color: "from-rose-500 to-pink-700",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 font-sans flex flex-col justify-between">
      <Header />

      <main className="flex-grow pt-24 pb-16 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                <h1 className="text-3xl font-bold text-white">Vidi Meth Unified Admin Portal</h1>
              </div>
              <p className="mt-1.5 text-xs text-slate-400">
                Centralized Control Panel &amp; Endpoint Manager (`http://localhost:5000`)
              </p>
            </div>
            <Link
              href="/"
              className="rounded-lg bg-[#0077c8] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#005f91] transition shadow-md self-start sm:self-auto"
            >
              Go to Website &rarr;
            </Link>
          </div>

          {/* Module Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {adminModules.map((module) => (
              <Link
                key={module.title}
                href={module.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/60 p-6 shadow-lg transition-all duration-300 hover:border-slate-700 hover:bg-slate-800 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="rounded bg-slate-700 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                      {module.badge}
                    </span>
                    <span className="text-xs text-[#38bdf8] font-semibold group-hover:translate-x-1 transition-transform">
                      Manage &rarr;
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                    {module.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                    {module.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    {module.endpoint}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Integration Status Footer Info */}
          <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-800/40 p-6 text-xs text-slate-400">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider mb-2">Backend Connection Details</h4>
            <p className="leading-relaxed">
              Base URL: <code className="bg-slate-900 px-2 py-0.5 rounded text-sky-400">http://localhost:5000</code>.
              All admin actions directly call backend API endpoints for live status updates, content moderation, candidate tracking, and grievance redressal handling.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
