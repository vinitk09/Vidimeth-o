"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vidimeth_reviews");
      if (stored) {
        setReviews(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const saveReviews = (updated) => {
    setReviews(updated);
    try {
      localStorage.setItem("vidimeth_reviews", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleApprove = (id) => {
    const updated = reviews.map((r) => (r.id === id ? { ...r, status: "approved" } : r));
    saveReviews(updated);
  };

  const handleReject = (id) => {
    const updated = reviews.map((r) => (r.id === id ? { ...r, status: "rejected" } : r));
    saveReviews(updated);
  };

  const handleDelete = (id) => {
    const updated = reviews.filter((r) => r.id !== id);
    saveReviews(updated);
  };

  const filteredReviews =
    filter === "all" ? reviews : reviews.filter((r) => r.status === filter);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-6 sm:p-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
              <h1 className="text-2xl font-bold text-white">Vidi Meth Admin Portal</h1>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Review & Moderation Console for Client Feedback
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/review"
              className="rounded-lg bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 border border-slate-700 hover:bg-slate-700 transition"
            >
              &larr; View Public Review Form
            </Link>
            <Link
              href="/"
              className="rounded-lg bg-[#0077c8] px-4 py-2 text-xs font-semibold text-white hover:bg-[#005f91] transition"
            >
              Go to Website &rarr;
            </Link>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["all", "pending", "approved", "rejected"].map((st) => (
            <button
              key={st}
              onClick={() => setFilter(st)}
              className={`rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                filter === st
                  ? "bg-[#0077c8] text-white"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {st} ({st === "all" ? reviews.length : reviews.filter((r) => r.status === st).length})
            </button>
          ))}
        </div>

        {/* Reviews List Table / Grid */}
        <div className="mt-6 space-y-4">
          {filteredReviews.length === 0 ? (
            <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-12 text-center text-sm text-slate-400">
              No reviews found under the selected filter ({filter}).
            </div>
          ) : (
            filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="rounded-xl border border-slate-800 bg-slate-800/80 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-bold text-white text-base">{rev.name}</span>
                    <span className="text-xs text-slate-400">({rev.email})</span>
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase ${
                        rev.status === "approved"
                          ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                          : rev.status === "pending"
                          ? "bg-amber-950 text-amber-400 border border-amber-800"
                          : "bg-rose-950 text-rose-400 border border-rose-800"
                      }`}
                    >
                      {rev.status}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-slate-400">
                    Role: <span className="text-slate-200">{rev.role || "Client"}</span> | Division:{" "}
                    <span className="text-[#38bdf8]">{rev.division}</span> | Rating:{" "}
                    <span className="text-amber-400 font-bold">{rev.rating}/5</span>
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed italic pt-1">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {rev.status !== "approved" && (
                    <button
                      type="button"
                      onClick={() => handleApprove(rev.id)}
                      className="rounded bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition"
                    >
                      Approve
                    </button>
                  )}
                  {rev.status !== "rejected" && (
                    <button
                      type="button"
                      onClick={() => handleReject(rev.id)}
                      className="rounded bg-amber-700 px-3.5 py-2 text-xs font-bold text-white hover:bg-amber-600 transition"
                    >
                      Reject
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => handleDelete(rev.id)}
                    className="rounded bg-rose-900/60 text-rose-300 border border-rose-700/50 px-3.5 py-2 text-xs font-bold hover:bg-rose-800 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
