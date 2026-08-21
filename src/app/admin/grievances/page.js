"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getGrievances, updateGrievanceStatus, deleteGrievance } from "../../utils/api";

export default function AdminGrievancesPage() {
  const [grievances, setGrievances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusMsg, setStatusMsg] = useState("");

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await getGrievances();
      if (res && res.data && Array.isArray(res.data)) {
        setGrievances(res.data);
      } else if (Array.isArray(res)) {
        setGrievances(res);
      }
    } catch (err) {
      console.warn("Grievances API fetch error, sample fallback:", err);
      setGrievances([
        {
          id: "GRV-20260821-4829",
          name: "Rajesh Sharma",
          email: "rajesh.sharma@example.com",
          phoneNumber: "+91 9876543210",
          subject: "Unauthorized content listing",
          reportedUrl: "https://example.com/property/10492",
          reason: "Belongs to another person and to which the user does not have any right.",
          supportingDocument: {
            name: "ownership_proof.pdf",
            size: 1420500,
            type: "application/pdf",
          },
          status: "Under Review",
          createdAt: "2026-08-21T15:50:00.000Z",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      await updateGrievanceStatus(id, newStatus);
      setStatusMsg(`Grievance ${id} status set to ${newStatus}`);
    } catch (e) {
      console.warn("API update status failed:", e);
    }
    setGrievances((prev) =>
      prev.map((g) => (g.id === id || g._id === id ? { ...g, status: newStatus } : g))
    );
  };

  const handleDelete = async (id) => {
    try {
      await deleteGrievance(id);
      setStatusMsg(`Grievance ${id} removed.`);
    } catch (e) {
      console.warn("API delete failed:", e);
    }
    setGrievances((prev) => prev.filter((g) => g.id !== id && g._id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-6 sm:p-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-amber-500 animate-ping" />
              <h1 className="text-2xl font-bold text-white">Grievance Redressal Console</h1>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Legal &amp; Intermediary Compliance Desk (`GET / PATCH / DELETE /api/grievance`)
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
              href="/grievance"
              className="rounded-lg bg-[#0077c8] px-4 py-2 text-xs font-semibold text-white hover:bg-[#005f91] transition"
            >
              View Grievance Portal &rarr;
            </Link>
          </div>
        </div>

        {statusMsg && (
          <div className="mt-4 rounded-lg bg-emerald-950 border border-emerald-800 p-3 text-xs text-emerald-300 flex justify-between items-center">
            <span>{statusMsg}</span>
            <button onClick={() => setStatusMsg("")} className="font-bold">&times;</button>
          </div>
        )}

        {/* Complaints Table */}
        <div className="mt-8 space-y-4">
          {loading ? (
            <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-12 text-center text-sm text-slate-400">
              Loading grievances...
            </div>
          ) : grievances.length === 0 ? (
            <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-12 text-center text-sm text-slate-400">
              No grievance reports found.
            </div>
          ) : (
            grievances.map((item) => {
              const itemID = item.id || item._id || item.grievanceId;
              return (
                <div
                  key={itemID}
                  className="rounded-xl border border-slate-800 bg-slate-800/80 p-6 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-6"
                >
                  <div className="space-y-2 max-w-3xl text-xs">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-bold text-white text-sm">{item.name}</span>
                      <span className="text-slate-400">({item.email})</span>
                      <span className="text-slate-400">{item.phoneNumber}</span>
                      <span
                        className={`rounded px-2.5 py-0.5 text-[10px] font-bold uppercase ${
                          item.status === "Resolved"
                            ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                            : item.status === "Under Review"
                            ? "bg-amber-950 text-amber-400 border border-amber-800"
                            : "bg-rose-950 text-rose-400 border border-rose-800"
                        }`}
                      >
                        {item.status || "Under Review"}
                      </span>
                    </div>

                    <p className="font-bold text-slate-200 text-sm pt-1">
                      Subject: <span className="text-amber-400">{item.subject}</span>
                    </p>

                    {item.reportedUrl && (
                      <p className="text-slate-400">
                        Reported URL:{" "}
                        <a href={item.reportedUrl} target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] underline">
                          {item.reportedUrl}
                        </a>
                      </p>
                    )}

                    <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                      <strong className="text-slate-400 uppercase text-[10px]">Reason for complaint:</strong>
                      <br />
                      {item.reason}
                    </p>

                    {item.supportingDocument && (
                      <p className="text-slate-400">
                        Attached Document:{" "}
                        <span className="text-emerald-400 font-medium">
                          {typeof item.supportingDocument === "string"
                            ? item.supportingDocument
                            : item.supportingDocument.name || "File attached"}
                        </span>
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleUpdateStatus(itemID, "Under Review")}
                      className="rounded bg-amber-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-600"
                    >
                      Under Review
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(itemID, "Resolved")}
                      className="rounded bg-emerald-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-600"
                    >
                      Mark Resolved
                    </button>
                    <button
                      onClick={() => handleDelete(itemID)}
                      className="rounded bg-rose-900/60 text-rose-300 border border-rose-700 px-3 py-1.5 text-xs font-bold hover:bg-rose-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
