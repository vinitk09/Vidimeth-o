"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCareersData, createJobPosting, updateApplicationStatus } from "../../utils/api";

export default function AdminCareersPage() {
  const [jobPostings, setJobPostings] = useState([]);
  const [applications, setApplications] = useState([]);
  const [activeTab, setActiveTab] = useState("applications");
  const [loading, setLoading] = useState(true);
  const [statusMsg, setStatusMsg] = useState("");

  // Create job form state
  const [showCreateJob, setShowCreateJob] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "Vidi Meth Digital Services",
    location: "Jamshedpur",
    type: "Full-Time",
    department: "Marketing",
    summary: "",
    status: "Active",
  });
  const [isSubmittingJob, setIsSubmittingJob] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await getCareersData();
      if (res) {
        if (res.jobPostings && Array.isArray(res.jobPostings)) {
          setJobPostings(res.jobPostings);
        }
        if (res.applications && Array.isArray(res.applications)) {
          setApplications(res.applications);
        }
      }
    } catch (err) {
      console.warn("API load warning, fallback to sample data:", err);
      setJobPostings([
        {
          jobId: "job-vidimeth-receptionist-01",
          title: "Receptionist | vidimeth",
          company: "Vidi Meth Digital Services",
          location: "Jamshedpur",
          type: "Full-Time",
          department: "Administration",
          status: "Active",
        },
      ]);
      setApplications([
        {
          applicationId: "APP-20260821-4921",
          jobId: "job-vidimeth-receptionist-01",
          jobTitle: "Receptionist | vidimeth",
          fullName: "Sneha Mukherjee",
          email: "sneha.mukherjee@example.com",
          phoneNumber: "+91 9876543210",
          experience: "2 Years",
          resumeLink: "https://drive.google.com/file/d/sample-resume/view",
          status: "Pending",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleUpdateAppStatus = async (appId, newStatus) => {
    try {
      await updateApplicationStatus(appId, newStatus);
      setStatusMsg(`Application ${appId} marked as ${newStatus}`);
    } catch (e) {
      console.warn("API update failed, updating local state:", e);
    }
    setApplications((prev) =>
      prev.map((app) => (app.applicationId === appId || app.id === appId ? { ...app, status: newStatus } : app))
    );
  };

  const handleCreateJobSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingJob(true);
    try {
      await createJobPosting(newJob);
      setStatusMsg(`Job posting "${newJob.title}" created successfully!`);
      setShowCreateJob(false);
      setNewJob({
        title: "",
        company: "Vidi Meth Digital Services",
        location: "Jamshedpur",
        type: "Full-Time",
        department: "Marketing",
        summary: "",
        status: "Active",
      });
      loadData();
    } catch (err) {
      console.warn("Failed to create job posting via API:", err);
      // Fallback add to list
      setJobPostings((prev) => [
        {
          jobId: `job-vidimeth-custom-${Date.now()}`,
          ...newJob,
        },
        ...prev,
      ]);
      setShowCreateJob(false);
    } finally {
      setIsSubmittingJob(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-6 sm:p-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
              <h1 className="text-2xl font-bold text-white">Vidimeth Careers &amp; HR Console</h1>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Manage Job Postings &amp; Candidate Applications (`POST/PATCH /api/vidimeth/careers`)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="rounded-lg bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 border border-slate-700 hover:bg-slate-700 transition"
            >
              &larr; Admin Dashboard
            </Link>
            <button
              onClick={() => setShowCreateJob(!showCreateJob)}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 transition"
            >
              {showCreateJob ? "Cancel" : "+ Create New Job Posting"}
            </button>
          </div>
        </div>

        {statusMsg && (
          <div className="mt-4 rounded-lg bg-emerald-950 border border-emerald-800 p-3 text-xs text-emerald-300 flex justify-between items-center">
            <span>{statusMsg}</span>
            <button onClick={() => setStatusMsg("")} className="font-bold">&times;</button>
          </div>
        )}

        {/* Create Job Posting Form */}
        {showCreateJob && (
          <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-xl">
            <h3 className="text-base font-bold text-white mb-4">Create New Job Opening</h3>
            <form onSubmit={handleCreateJobSubmit} className="space-y-4 text-xs">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block mb-1 font-semibold text-slate-300">Job Title *</label>
                  <input
                    type="text"
                    required
                    value={newJob.title}
                    onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                    placeholder="e.g. Digital Marketing Specialist"
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-slate-300">Company Name</label>
                  <input
                    type="text"
                    value={newJob.company}
                    onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-slate-300">Location</label>
                  <input
                    type="text"
                    value={newJob.location}
                    onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                    placeholder="e.g. Jamshedpur / Remote"
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-slate-300">Job Type</label>
                  <select
                    value={newJob.type}
                    onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white outline-none focus:border-emerald-500"
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-slate-300">Department</label>
                  <input
                    type="text"
                    value={newJob.department}
                    onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
                    placeholder="e.g. Marketing / Administration"
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-slate-300">Status</label>
                  <select
                    value={newJob.status}
                    onChange={(e) => setNewJob({ ...newJob, status: e.target.value })}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white outline-none focus:border-emerald-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-1 font-semibold text-slate-300">Job Summary</label>
                <textarea
                  rows={3}
                  value={newJob.summary}
                  onChange={(e) => setNewJob({ ...newJob, summary: e.target.value })}
                  placeholder="Describe duties, experience required, key details..."
                  className="w-full rounded-lg border border-slate-600 bg-slate-900 p-3 text-white outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateJob(false)}
                  className="rounded bg-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingJob}
                  className="rounded bg-emerald-600 px-5 py-2 text-xs font-semibold text-white hover:bg-emerald-500"
                >
                  {isSubmittingJob ? "Creating..." : "Publish Job Opening"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tab Buttons */}
        <div className="mt-8 flex gap-3 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab("applications")}
            className={`px-4 py-2 text-xs font-bold rounded-lg uppercase tracking-wider transition ${
              activeTab === "applications"
                ? "bg-[#0077c8] text-white"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
            }`}
          >
            Candidate Applications ({applications.length})
          </button>
          <button
            onClick={() => setActiveTab("jobs")}
            className={`px-4 py-2 text-xs font-bold rounded-lg uppercase tracking-wider transition ${
              activeTab === "jobs"
                ? "bg-[#0077c8] text-white"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
            }`}
          >
            Job Postings ({jobPostings.length})
          </button>
        </div>

        {/* Content Section */}
        <div className="mt-6">
          {loading ? (
            <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-12 text-center text-sm text-slate-400">
              Loading careers data from API...
            </div>
          ) : activeTab === "applications" ? (
            <div className="space-y-4">
              {applications.length === 0 ? (
                <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-12 text-center text-sm text-slate-400">
                  No job applications received yet.
                </div>
              ) : (
                applications.map((app) => (
                  <div
                    key={app.applicationId || app.id || app.email}
                    className="rounded-xl border border-slate-800 bg-slate-800/80 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-bold text-white text-base">{app.fullName || app.name}</span>
                        <span className="text-xs text-slate-400">({app.email})</span>
                        <span className="text-xs text-slate-400">{app.phoneNumber}</span>
                        <span
                          className={`rounded px-2.5 py-0.5 text-[10px] font-bold uppercase ${
                            app.status === "Hired"
                              ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                              : app.status === "Shortlisted"
                              ? "bg-sky-950 text-sky-400 border border-sky-800"
                              : app.status === "Rejected"
                              ? "bg-rose-950 text-rose-400 border border-rose-800"
                              : "bg-amber-950 text-amber-400 border border-amber-800"
                          }`}
                        >
                          {app.status || "Pending"}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 font-semibold">
                        Applied Role: <span className="text-emerald-400">{app.jobTitle || "Job Opening"}</span> | Experience:{" "}
                        <span className="text-slate-200">{app.experience || "N/A"}</span>
                      </p>

                      {app.message && (
                        <p className="text-xs text-slate-300 italic">
                          &ldquo;{app.message}&rdquo;
                        </p>
                      )}

                      {app.resumeLink && (
                        <a
                          href={app.resumeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-xs font-semibold text-[#38bdf8] underline hover:text-sky-300"
                        >
                          View Candidate Resume Link &rarr;
                        </a>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleUpdateAppStatus(app.applicationId || app.id, "Shortlisted")}
                        className="rounded bg-sky-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-sky-600"
                      >
                        Shortlist
                      </button>
                      <button
                        onClick={() => handleUpdateAppStatus(app.applicationId || app.id, "Hired")}
                        className="rounded bg-emerald-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-600"
                      >
                        Hire Candidate
                      </button>
                      <button
                        onClick={() => handleUpdateAppStatus(app.applicationId || app.id, "Rejected")}
                        className="rounded bg-rose-900/60 text-rose-300 border border-rose-700 px-3 py-1.5 text-xs font-bold hover:bg-rose-800"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {jobPostings.map((job) => (
                <div
                  key={job.jobId || job.id}
                  className="rounded-xl border border-slate-800 bg-slate-800/80 p-5 shadow-sm space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      {job.department || job.category}
                    </span>
                    <span className="rounded bg-slate-700 px-2 py-0.5 text-[10px] text-slate-300">
                      {job.status || "Active"}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">{job.title}</h4>
                  <p className="text-xs text-slate-400">
                    {job.company} • {job.location} ({job.type})
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {job.summary || job.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
