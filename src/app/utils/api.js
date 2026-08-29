const getBaseUrl = () => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    process.env.API_BASE_URL ||
    "http://187.77.184.141:5050"
  );
};

/**
 * Generic fetch wrapper with standard error handling
 */
async function apiFetch(endpoint, options = {}) {
  const url = `${getBaseUrl()}${endpoint}`;
  try {
    const response = await fetch(url, options);
    const contentType = response.headers.get("content-type");

    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      data = { message: text };
    }

    if (!response.ok) {
      throw new Error(data.message || data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.warn(`[API] Fetch failed for ${url}:`, error.message);
    throw error;
  }
}

// ----------------------------------------------------
// 1. Customer Reviews & Ratings API
// ----------------------------------------------------
export async function getReviews() {
  return await apiFetch("/api/reviews");
}

export async function submitReview(reviewData) {
  return await apiFetch("/api/reviews", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reviewData),
  });
}

export async function updateReviewStatus(id, status) {
  return await apiFetch("/api/reviews", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, status }),
  });
}

export async function deleteReview(id) {
  return await apiFetch(`/api/reviews?id=${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

// ----------------------------------------------------
// 2. Vidimeth Careers & Job Applications API
// ----------------------------------------------------
export async function getCareersData() {
  return await apiFetch("/api/vidimeth/careers");
}

export async function submitJobApplication(applicationData) {
  return await apiFetch("/api/vidimeth/careers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(applicationData),
  });
}

export async function createJobPosting(jobData) {
  return await apiFetch("/api/vidimeth/careers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "create_job",
      target: "job",
      ...jobData,
    }),
  });
}

export async function updateApplicationStatus(id, status) {
  return await apiFetch("/api/vidimeth/careers", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, status }),
  });
}

// ----------------------------------------------------
// 3. Grievance Redressal API
// ----------------------------------------------------
export async function getGrievances() {
  return await apiFetch("/api/grievance");
}

export async function submitGrievance(data, isFormData = false) {
  const options = { method: "POST" };
  if (isFormData) {
    options.body = data; // fetch automatically sets multipart/form-data boundary
  } else {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(data);
  }
  return await apiFetch("/api/grievance", options);
}

export async function updateGrievanceStatus(id, status) {
  return await apiFetch("/api/grievance", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, status }),
  });
}

export async function deleteGrievance(id) {
  return await apiFetch(`/api/grievance?id=${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

// ----------------------------------------------------
// 4. Vidimeth Contact Us API
// ----------------------------------------------------
export async function getContactInquiries() {
  return await apiFetch("/api/vidimeth/contact-us");
}

export async function submitContactInquiry(contactData) {
  return await apiFetch("/api/vidimeth/contact-us", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactData),
  });
}

// ----------------------------------------------------
// 5. Privacy Policy & Telemarketing Opt-Out API
// ----------------------------------------------------
export async function getOptOutRequests(status) {
  const query = status ? `?status=${encodeURIComponent(status)}` : "";
  return await apiFetch(`/api/telemarketing-opt-out${query}`);
}

export async function submitOptOutRequest(optOutData) {
  return await apiFetch("/api/telemarketing-opt-out", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(optOutData),
  });
}

export async function getOptOutRequestById(id) {
  return await apiFetch(`/api/telemarketing-opt-out/${encodeURIComponent(id)}`);
}

export async function updateOptOutRequest(id, updateData) {
  return await apiFetch(`/api/telemarketing-opt-out/${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  });
}

export async function deleteOptOutRequest(id) {
  return await apiFetch(`/api/telemarketing-opt-out/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

// ----------------------------------------------------
// 6. News & Media Releases API
// ----------------------------------------------------
const BACKEND_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.BACKEND_API_BASE_URL ||
  "http://187.77.184.141:5050";

/**
 * Fetch all published news articles
 */
export async function getNewsArticles() {
  const endpoints = [
    `${BACKEND_BASE_URL}/api/news`,
    "/api/news",
  ];
  for (const url of endpoints) {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { Accept: "application/json" },
        next: { revalidate: 60 }, // Cache for 60s in Next.js App Router
      });
      if (res.ok) {
        const payload = await res.json();
        const articles = Array.isArray(payload)
          ? payload
          : payload.data || payload.records || payload.posts || [];
        if (Array.isArray(articles) && articles.length > 0) {
          return articles.filter(
            (item) => (item.status || "Active").toLowerCase() === "active"
          );
        }
      }
    } catch (_err) {
      // Continue to next endpoint or fallback
    }
  }
  // Fallback demo data matching Screenshot 1 & 2
  return [
    {
      _id: "news-01",
      id: "news-01",
      slug: "villagemycity-expands-real-estate-property-connect-platform",
      title: "VillageMyCity Expands Real Estate Property Connect Platform",
      heading: "VillageMyCity Expands Real Estate Property Connect Platform",
      category: "Real Estate",
      subTitle: "Property Marketplace Update",
      featuredImage:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
      content:
        "<h2>Connecting Property Buyers and Sellers</h2><p>Connecting individual property owners, builders, and buyers with transparent online-to-offline listing tools.</p>",
      description:
        "Connecting individual property owners, builders, and buyers with transparent online-to-offline listing tools.",
      createdAt: "2026-07-28T10:00:00.000Z",
      status: "Active",
    },
    {
      _id: "news-02",
      id: "news-02",
      slug: "gojobin-introduces-instant-job-matching-for-freshers-and-experts",
      title: "GoJobin Introduces Instant Job Matching for Freshers & Experts",
      heading: "GoJobin Introduces Instant Job Matching for Freshers & Experts",
      category: "Recruitment",
      subTitle: "Employment Portal Release",
      featuredImage:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80",
      content:
        "<h2>Next-Gen Job Matching</h2><p>India's fastest-growing recruitment portal rolls out direct application channels and verified employee listings.</p>",
      description:
        "India's fastest-growing recruitment portal rolls out direct application channels and verified employee listings.",
      createdAt: "2026-07-15T10:00:00.000Z",
      status: "Active",
    },
    {
      _id: "news-03",
      id: "news-03",
      slug: "loan-vidhi-expands-partnerships-for-business-and-personal-loans",
      title: "LOAN vidhi Expands Partnerships for Business & Personal Loans",
      heading: "LOAN vidhi Expands Partnerships for Business & Personal Loans",
      category: "Finance",
      subTitle: "Banking Network Expansion",
      featuredImage:
        "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&auto=format&fit=crop&q=80",
      content:
        "<h2>Financial Solutions for Enterprises</h2><p>Transforming financial planning and portfolio management services to assist individuals and businesses.</p>",
      description:
        "Transforming financial planning and portfolio management services to assist individuals and businesses.",
      createdAt: "2026-06-30T10:00:00.000Z",
      status: "Active",
    },
  ];
}

// ----------------------------------------------------
// 7. Blogs & Articles API
// ----------------------------------------------------
import { blogPosts, getBlogBySlug as findBlogBySlug } from "../data/blogsData";

/**
 * Fetch all published blog posts
 */
export async function getBlogPosts() {
  const endpoints = [
    `${BACKEND_BASE_URL}/api/blogs`,
    `${BACKEND_BASE_URL}/api/blog`,
    "/api/blogs",
    "/api/blog",
  ];
  for (const url of endpoints) {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { Accept: "application/json" },
        next: { revalidate: 60 },
      });
      if (res.ok) {
        const payload = await res.json();
        const posts = Array.isArray(payload)
          ? payload
          : payload.data || payload.records || payload.blogs || payload.posts || [];
        if (Array.isArray(posts) && posts.length > 0) {
          return posts.filter(
            (item) => (item.status || "Active").toLowerCase() === "active"
          );
        }
      }
    } catch (_err) {
      // Continue to next endpoint or fallback
    }
  }
  return blogPosts;
}

/**
 * Fetch a single blog post by Slug or ID
 */
export async function getBlogPostBySlug(slugOrId) {
  if (!slugOrId) return null;
  const decoded = decodeURIComponent(slugOrId);
  try {
    const res = await fetch(
      `${BACKEND_BASE_URL}/api/blogs/${encodeURIComponent(decoded)}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
        next: { revalidate: 60 },
      }
    );
    if (res.ok) {
      const data = await res.json();
      return data.data || data;
    }
  } catch (_e) {
    // Fallback search in all articles / local dataset
  }

  const foundLocal = findBlogBySlug(decoded);
  if (foundLocal) return foundLocal;

  const all = await getBlogPosts();
  return (
    all.find(
      (item) =>
        item.slug === decoded ||
        item._id === decoded ||
        String(item.id) === decoded
    ) || all[0]
  );
}


