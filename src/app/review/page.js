"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getReviews, submitReview } from "../utils/api";

const initialSampleReviews = [
  {
    id: "rev-1",
    name: "Laxmi Mahato",
    email: "laxmi@example.com",
    role: "Business Partner",
    division: "Business Development",
    rating: 5,
    title: "Exceptional Partner Experience",
    quote: "Exceptional business development insights. Your team's dedication to fostering opportunities has been a game-changer for our company.",
    status: "Verified",
    date: "2026-08-01",
  },
  {
    id: "rev-2",
    name: "Manab Kumar",
    email: "manab@example.com",
    role: "Finance Client",
    division: "LOAN vidhi",
    rating: 5,
    title: "Seamless Financial Planning",
    quote: "Remarkable impact! Your innovative financial planning and business development strategies transformed our path, leading to sustained growth.",
    status: "Verified",
    date: "2026-08-05",
  },
  {
    id: "rev-3",
    name: "Nisha Sharma",
    email: "nisha@example.com",
    role: "Growth Client",
    division: "VM Academy",
    rating: 5,
    title: "Outstanding Educational Guidance",
    quote: "Business development strategies exceeded expectations, driving growth and ensuring sustained success. Truly an impactful partnership.",
    status: "Verified",
    date: "2026-08-10",
  },
];

function StarRatingInput({ rating, setRating }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="p-1 focus:outline-none transition-transform hover:scale-110"
        >
          <svg
            className={`h-7 w-7 ${star <= (hover || rating)
              ? "fill-[#f4b400] text-[#f4b400]"
              : "fill-slate-200 text-slate-300"
              }`}
            viewBox="0 0 24 24"
          >
            <path d="M12 3.75 14.55 8.9l5.7.82-4.12 4 .97 5.66L12 16.7l-5.1 2.68.97-5.66-4.12-4 5.7-.82L12 3.75Z" />
          </svg>
        </button>
      ))}
      <span className="ml-2 text-sm font-semibold text-slate-700">
        {hover || rating ? `${hover || rating} out of 5 Stars` : "Select rating"}
      </span>
    </div>
  );
}

export default function ReviewPage() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    division: "General Digital Services",
    title: "",
    quote: "",
  });
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loadReviewsFromApi = async () => {
    try {
      const res = await getReviews();
      if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
        const mapped = res.data.map((r) => ({
          id: r._id || r.reviewId || `rev-${Math.random()}`,
          name: r.fullName || r.name,
          email: r.email,
          role: r.role || "Client",
          division: r.division || "General Digital Services",
          rating: r.rating || 5,
          title: r.headline || r.title || "Client Review",
          quote: r.feedback || r.quote || "",
          status: r.status || "Verified",
          date: r.createdAt ? new Date(r.createdAt).toISOString().split("T")[0] : "2026-08-21",
        }));
        setReviews(mapped);
      } else {
        setReviews(initialSampleReviews);
      }
    } catch (err) {
      console.warn("Could not fetch reviews from backend, using fallback/local storage.", err);
      try {
        const stored = localStorage.getItem("vidimeth_reviews");
        if (stored) {
          setReviews(JSON.parse(stored));
        } else {
          setReviews(initialSampleReviews);
        }
      } catch (e) {
        setReviews(initialSampleReviews);
      }
    }
  };

  useEffect(() => {
    loadReviewsFromApi();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const payload = {
      fullName: formData.name.trim(),
      email: formData.email.trim(),
      role: formData.role.trim() || "Valued Client",
      division: formData.division,
      rating: Number(rating),
      headline: formData.title.trim() || "Client Feedback",
      feedback: formData.quote.trim(),
    };

    try {
      await submitReview(payload);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        role: "",
        division: "General Digital Services",
        title: "",
        quote: "",
      });
      setRating(5);
      // Refresh list
      loadReviewsFromApi();
    } catch (err) {
      console.warn("Backend API submit error, saving locally as fallback:", err);
      // Fallback: save locally
      const newReview = {
        id: `rev-${Date.now()}`,
        name: payload.fullName,
        email: payload.email,
        role: payload.role,
        division: payload.division,
        rating: payload.rating,
        title: payload.headline,
        quote: payload.feedback,
        status: "Pending",
        date: new Date().toISOString().split("T")[0],
      };
      const updated = [newReview, ...reviews];
      setReviews(updated);
      try {
        localStorage.setItem("vidimeth_reviews", JSON.stringify(updated));
      } catch (e) {}
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        role: "",
        division: "General Digital Services",
        title: "",
        quote: "",
      });
      setRating(5);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f8fafc] text-[#1d2736] font-sans min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow pt-0">
        {/* Hero Section */}
        <section
          className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#071326] bg-cover bg-center px-5 pt-28 pb-20 text-center text-white sm:px-8 lg:px-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(5, 11, 34, 0.82), rgba(5, 11, 34, 0.88)), url('https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className="relative mx-auto mt-6 sm:mt-8 w-full max-w-4xl" data-aos="fade-up">
            <h1 className="text-[34px] font-bold tracking-tight leading-tight sm:text-[46px] lg:text-[52px]">
              Share Your Experience
            </h1>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12 items-start">

            {/* Left Column: Client Review Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
                <div className="border-b border-slate-100 pb-5 mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Write a Review
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Please complete the form below to submit your rating and feedback.
                  </p>
                </div>

                {errorMessage && (
                  <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-700">
                    {errorMessage}
                  </div>
                )}

                {submitted && (
                  <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50/90 p-5 text-emerald-900 shadow-sm">
                    <div className="flex items-start gap-3">
                      <svg className="h-6 w-6 shrink-0 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h3 className="font-bold text-base text-emerald-950">
                          Thank You! Review Submitted Successfully
                        </h3>
                        <p className="mt-1 text-xs text-emerald-800 leading-relaxed">
                          Your review has been received! Our verification team will review your feedback shortly before publishing it on our business portals.
                        </p>
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="mt-3 text-xs font-semibold text-emerald-700 underline hover:text-emerald-900"
                        >
                          Submit another review
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0077c8] focus:ring-2 focus:ring-[#0077c8]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@example.com"
                        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0077c8] focus:ring-2 focus:ring-[#0077c8]/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Role / Designation
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="e.g. Business Owner / Student / Client"
                        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0077c8] focus:ring-2 focus:ring-[#0077c8]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Division / Service Used
                      </label>
                      <select
                        name="division"
                        value={formData.division}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0077c8] focus:ring-2 focus:ring-[#0077c8]/20 bg-white"
                      >
                        <option value="General Digital Services">General Digital Services</option>
                        <option value="VM Academy">VM Academy (Education)</option>
                        <option value="VillageMyCity">VillageMyCity (Real Estate)</option>
                        <option value="GoJobin">GoJobin (Recruitment)</option>
                        <option value="LOAN vidhi">LOAN vidhi (Finance)</option>
                        <option value="VMhomeMART">VMhomeMART (E-Commerce)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Overall Rating <span className="text-red-500">*</span>
                    </label>
                    <StarRatingInput rating={rating} setRating={setRating} />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Review Headline
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="e.g. Outstanding service & great support"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0077c8] focus:ring-2 focus:ring-[#0077c8]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Detailed Feedback <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="quote"
                      required
                      rows={5}
                      value={formData.quote}
                      onChange={handleChange}
                      placeholder="Describe your overall experience with our team, services, or digital platforms..."
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0077c8] focus:ring-2 focus:ring-[#0077c8]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0077c8] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#005f91] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Feedback...</span>
                    ) : (
                      <>
                        <span>Submit Review</span>
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: User-Facing Guidelines & Information */}
            <div className="lg:col-span-5 sticky top-24 self-start z-20 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <svg className="h-5 w-5 text-[#0077c8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Why Your Review Matters
                </h3>

                <div className="mt-5 space-y-4 text-xs leading-relaxed text-slate-600">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-[#0077c8] font-bold">1</span>
                    <div>
                      <h4 className="font-bold text-slate-900">Authentic Client Feedback</h4>
                      <p className="mt-0.5">We maintain strict moderation standards to ensure all reviews reflect genuine user experiences across our divisions.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold">2</span>
                    <div>
                      <h4 className="font-bold text-slate-900">Featured across Ecosystem</h4>
                      <p className="mt-0.5">Verified reviews are highlighted on our home platform and portal showcases like VM Academy, VillageMyCity, and GoJobin.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-bold">3</span>
                    <div>
                      <h4 className="font-bold text-slate-900">Privacy & Data Security</h4>
                      <p className="mt-0.5">Your email address will remain confidential and is only used for verification purposes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
