"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getOptOutRequests } from "../../utils/api";

export default function AdminOptOutPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await getOptOutRequests();
      if (res && res.data && Array.isArray(res.data)) {
        setRequests(res.data);
      } else if (Array.isArray(res)) {
        setRequests(res);
      }
    } catch (err) {
      console.warn("Opt-out API error, sample fallback:", err);
      setRequests([
        {
          id: "OPT-501",
          name: "Vikram Malhotra",
          email: "vikram.malhotra@example.com",
          phoneNumber: "+91 9876543210",
          subject: "Telemarketing Opt-Out Request",
          message: "Please remove my phone number from all marketing calls and SMS campaigns.",
          createdAt: "2026-08-21T12:00:00.000Z",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-6 sm:p-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-rose-500 animate-ping" />
              <h1 className="text-2xl font-bold text-white">Telemarketing Opt-Out Console</h1>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Do-Not-Call (DNC) Registry &amp; Opt-Out Requests (`GET /api/telemarketing-opt-out`)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="rounded-lg bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 border border-slate-700 hover:bg-slate-700 transition"
            >
              &larr; Admin Dashboard
            </Link>
            <Link
              href="/privacy-policy#opt-out"
              className="rounded-lg bg-[#0077c8] px-4 py-2 text-xs font-semibold text-white hover:bg-[#005f91] transition"
            >
              View Opt-Out Form &rarr;
            </Link>
          </div>
        </div>

        {/* Requests Table / List */}
        <div className="mt-8 space-y-4">
          {loading ? (
            <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-12 text-center text-sm text-slate-400">
              Loading opt-out requests...
            </div>
          ) : requests.length === 0 ? (
            <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-12 text-center text-sm text-slate-400">
              No opt-out requests logged yet.
            </div>
          ) : (
            requests.map((item, idx) => (
              <div
                key={item.id || item._id || idx}
                className="rounded-xl border border-slate-800 bg-slate-800/80 p-6 shadow-sm space-y-3 text-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-white text-sm">{item.name}</span>
                    <span className="text-slate-400">({item.email})</span>
                    <span className="font-bold text-rose-400 bg-rose-950 px-2.5 py-0.5 rounded border border-rose-800">
                      {item.phoneNumber}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${item.status === "Processed" ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : "bg-amber-950 text-amber-400 border border-amber-800"}`}>
                      {item.status || "Pending"}
                    </span>
                  </div>
                  {item.createdAt && (
                    <span className="text-[11px] text-slate-500">
                      {new Date(item.createdAt).toLocaleString()}
                    </span>
                  )}
                </div>

                <p className="font-bold text-slate-200 text-sm">
                  Subject: <span className="text-rose-300">{item.subject}</span>
                </p>

                <div className="rounded-lg bg-slate-900/60 p-4 border border-slate-800 text-slate-300 leading-relaxed">
                  {item.message}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
