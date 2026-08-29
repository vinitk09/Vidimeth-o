export const DEPLOYED_API_BASE_URL = "http://187.77.184.141:5050";

/**
 * Resolves the API base URL.
 * Checks environment variables (NEXT_PUBLIC_API_BASE_URL, API_BASE_URL)
 * and falls back to the live deployed URL if missing, empty, or undefined.
 */
export const getBaseUrl = () => {
  const envUrl =
    (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_API_BASE_URL) ||
    (typeof process !== "undefined" && process.env?.API_BASE_URL);

  if (
    envUrl &&
    typeof envUrl === "string" &&
    envUrl.trim() !== "" &&
    envUrl !== "undefined" &&
    envUrl !== "null"
  ) {
    return envUrl.trim().replace(/\/+$/, "");
  }

  return DEPLOYED_API_BASE_URL;
};

/**
 * Generic fetch wrapper with standard error handling and deployed URL fallback
 */
async function apiFetch(endpoint, options = {}) {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;

  const urlsToTry = [];
  if (typeof window !== "undefined") {
    urlsToTry.push(cleanEndpoint); // Use Next.js rewrite proxy (avoids CORS & Mixed Content)
  }
  urlsToTry.push(`${getBaseUrl()}${cleanEndpoint}`);
  if (getBaseUrl() !== DEPLOYED_API_BASE_URL) {
    urlsToTry.push(`${DEPLOYED_API_BASE_URL}${cleanEndpoint}`);
  }

  const uniqueUrls = Array.from(new Set(urlsToTry));
  let lastError;

  for (const url of uniqueUrls) {
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
      lastError = error;
      console.warn(`[API] Fetch attempt failed for ${url}:`, error.message);
    }
  }

  throw lastError || new Error(`Failed to fetch ${endpoint}`);
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
// Helper: Normalize Image URLs from Deployed Backend
// ----------------------------------------------------
export function normalizeImageUrl(url) {
  if (!url || typeof url !== "string") return "";
  const trimmed = url.trim();
  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("data:")
  ) {
    return trimmed;
  }
  const base = getBaseUrl().replace(/\/+$/, "");
  const cleanPath = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return `${base}${cleanPath}`;
}

function extractListFromPayload(payload) {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.data)) return payload.data;
  if (Array.isArray(payload.records)) return payload.records;
  if (Array.isArray(payload.posts)) return payload.posts;
  if (Array.isArray(payload.articles)) return payload.articles;
  if (Array.isArray(payload.news)) return payload.news;
  if (Array.isArray(payload.blogs)) return payload.blogs;
  if (Array.isArray(payload.items)) return payload.items;
  if (Array.isArray(payload.result)) return payload.result;
  if (Array.isArray(payload.data?.blogs)) return payload.data.blogs;
  if (Array.isArray(payload.data?.posts)) return payload.data.posts;
  if (Array.isArray(payload.data?.articles)) return payload.data.articles;
  if (Array.isArray(payload.data?.news)) return payload.data.news;
  if (Array.isArray(payload.data?.records)) return payload.data.records;
  if (Array.isArray(payload.data?.items)) return payload.data.items;
  return [];
}

function extractItemFromPayload(payload) {
  if (!payload) return null;
  if (payload.data && typeof payload.data === "object" && !Array.isArray(payload.data)) {
    return payload.data;
  }
  if (payload.blog && typeof payload.blog === "object") return payload.blog;
  if (payload.article && typeof payload.article === "object") return payload.article;
  if (payload.post && typeof payload.post === "object") return payload.post;
  if (payload.news && typeof payload.news === "object") return payload.news;
  if (payload.result && typeof payload.result === "object" && !Array.isArray(payload.result)) {
    return payload.result;
  }
  if (typeof payload === "object" && (payload._id || payload.id || payload.heading || payload.title)) {
    return payload;
  }
  return null;
}

function formatNewsArticle(item) {
  const id = item._id || item.id || item.slug || String(Math.random());
  const title = item.heading || item.title || item.name || item.topic || "Vidi Meth Update";
  const desc = item.description || item.excerpt || item.shortDescription || item.content?.replace(/<[^>]*>?/gm, "") || "";
  const rawImg = item.imageUrl || item.featuredImage || item.image || item.thumbnail || item.banner || item.coverImage;
  const rawDate = item.createdAt || item.date || item.publishedAt || item.updatedAt;

  let formattedDate = "Latest";
  if (rawDate) {
    try {
      const d = new Date(rawDate);
      if (!isNaN(d.getTime())) {
        formattedDate = d.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      } else {
        formattedDate = String(rawDate);
      }
    } catch (_e) {
      formattedDate = String(rawDate);
    }
  }

  return {
    ...item,
    id: id,
    _id: id,
    title: title,
    heading: title,
    category: item.category || "Updates",
    slug: item.slug || id,
    description: desc,
    content: item.content || desc,
    image: normalizeImageUrl(rawImg),
    imageUrl: normalizeImageUrl(rawImg),
    featuredImage: normalizeImageUrl(rawImg),
    date: formattedDate,
  };
}

function formatBlogPost(item) {
  const id = item._id || item.id || item.slug || String(Math.random());
  const title = item.heading || item.title || item.name || item.topic || "Vidi Meth Article";
  const desc = item.description || item.excerpt || item.shortDescription || item.content?.replace(/<[^>]*>?/gm, "") || "";
  const rawImg = item.imageUrl || item.featuredImage || item.image || item.thumbnail || item.banner || item.coverImage;
  const rawDate = item.createdAt || item.date || item.publishedAt || item.updatedAt;
  const author = item.author || item.authorName || item.creator || item.createdBy || "Vidi Meth Editorial Team";

  let formattedDate = "Latest";
  if (rawDate) {
    try {
      const d = new Date(rawDate);
      if (!isNaN(d.getTime())) {
        formattedDate = d.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      } else {
        formattedDate = String(rawDate);
      }
    } catch (_e) {
      formattedDate = String(rawDate);
    }
  }

  return {
    ...item,
    id: id,
    _id: id,
    title: title,
    heading: title,
    category: item.category || "General",
    slug: item.slug || id,
    description: desc,
    content: item.content || desc,
    author: author,
    image: normalizeImageUrl(rawImg),
    imageUrl: normalizeImageUrl(rawImg),
    featuredImage: normalizeImageUrl(rawImg),
    date: formattedDate,
  };
}

// ----------------------------------------------------
// 6. News & Media Releases API (GET Live Integration)
// ----------------------------------------------------
import { newsArticles, getArticleById as findLocalNewsById } from "../data/newsData";

/**
 * Fetch all published news articles from deployed backend: http://187.77.184.141:5050/api/news
 */
export async function getNewsArticles(filters = {}) {
  const queryParams = new URLSearchParams();
  if (filters.category) queryParams.set("category", filters.category);
  if (filters.status) queryParams.set("status", filters.status);
  const queryString = queryParams.toString() ? `?${queryParams.toString()}` : "";

  const endpoints = Array.from(
    new Set([
      `/api/news${queryString}`,
      `${getBaseUrl()}/api/news${queryString}`,
      `${DEPLOYED_API_BASE_URL}/api/news${queryString}`,
      `/api/vidimeth/news${queryString}`,
      `${DEPLOYED_API_BASE_URL}/api/vidimeth/news${queryString}`,
    ])
  );

  for (const url of endpoints) {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { Accept: "application/json" },
        next: { revalidate: 30 }, // Next.js ISR revalidation
      });
      if (res.ok) {
        const payload = await res.json();
        const rawList = extractListFromPayload(payload);

        if (Array.isArray(rawList) && rawList.length > 0) {
          const activeArticles = rawList.filter((item) => {
            if (!item.status) return true;
            const st = String(item.status).toLowerCase();
            return st !== "inactive" && st !== "draft" && st !== "deleted" && st !== "false";
          });

          const listToUse = activeArticles.length > 0 ? activeArticles : rawList;
          if (listToUse.length > 0) {
            return listToUse.map(formatNewsArticle);
          }
        }
      }
    } catch (_err) {
      // Continue to next endpoint or fallback
    }
  }

  // Fallback to local dataset if backend is unreachable
  return newsArticles;
}

/**
 * Fetch a single news article by ID or Slug from deployed backend: http://187.77.184.141:5050/api/news/:id
 */
export async function getNewsArticleById(idOrSlug) {
  if (!idOrSlug) return null;
  const decoded = decodeURIComponent(idOrSlug);

  const candidateUrls = Array.from(
    new Set([
      `/api/news/${encodeURIComponent(decoded)}`,
      `${getBaseUrl()}/api/news/${encodeURIComponent(decoded)}`,
      `${DEPLOYED_API_BASE_URL}/api/news/${encodeURIComponent(decoded)}`,
      `/api/vidimeth/news/${encodeURIComponent(decoded)}`,
      `${DEPLOYED_API_BASE_URL}/api/vidimeth/news/${encodeURIComponent(decoded)}`,
    ])
  );

  for (const url of candidateUrls) {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { Accept: "application/json" },
        next: { revalidate: 30 },
      });
      if (res.ok) {
        const payload = await res.json();
        const item = extractItemFromPayload(payload);
        if (item && (item._id || item.id || item.heading || item.title)) {
          return formatNewsArticle(item);
        }
      }
    } catch (_e) {
      // Continue to next candidate URL
    }
  }

  // Search in all fetched articles or local dataset
  const localMatch = findLocalNewsById(decoded);
  if (localMatch) return localMatch;

  const allArticles = await getNewsArticles();
  return (
    allArticles.find(
      (item) =>
        String(item.id) === decoded ||
        String(item._id) === decoded ||
        item.slug === decoded
    ) || allArticles[0]
  );
}

// ----------------------------------------------------
// 7. Blogs & Articles API (GET Live Integration)
// ----------------------------------------------------
import { blogPosts, getBlogById as findLocalBlogById } from "../data/blogsData";

/**
 * Fetch all published blog posts from deployed backend: http://187.77.184.141:5050/api/blogs
 */
export async function getBlogPosts(filters = {}) {
  const queryParams = new URLSearchParams();
  if (filters.category) queryParams.set("category", filters.category);
  if (filters.status) queryParams.set("status", filters.status);
  const queryString = queryParams.toString() ? `?${queryParams.toString()}` : "";

  const endpoints = Array.from(
    new Set([
      `/api/blogs${queryString}`,
      `${getBaseUrl()}/api/blogs${queryString}`,
      `${DEPLOYED_API_BASE_URL}/api/blogs${queryString}`,
      `/api/blog${queryString}`,
      `${DEPLOYED_API_BASE_URL}/api/blog${queryString}`,
    ])
  );

  for (const url of endpoints) {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { Accept: "application/json" },
        next: { revalidate: 30 }, // Next.js ISR revalidation
      });
      if (res.ok) {
        const payload = await res.json();
        const rawList = extractListFromPayload(payload);

        if (Array.isArray(rawList) && rawList.length > 0) {
          const activePosts = rawList.filter((item) => {
            if (!item.status) return true;
            const st = String(item.status).toLowerCase();
            return st !== "inactive" && st !== "draft" && st !== "deleted" && st !== "false";
          });

          const listToUse = activePosts.length > 0 ? activePosts : rawList;
          if (listToUse.length > 0) {
            return listToUse.map(formatBlogPost);
          }
        }
      }
    } catch (_err) {
      // Continue to next candidate or fallback
    }
  }

  // Fallback to local dataset if backend is unreachable
  return blogPosts;
}

/**
 * Fetch a single blog post by ID or Slug from deployed backend: http://187.77.184.141:5050/api/blogs/:id
 */
export async function getBlogPostById(idOrSlug) {
  if (!idOrSlug) return null;
  const decoded = decodeURIComponent(idOrSlug);

  const candidateUrls = Array.from(
    new Set([
      `/api/blogs/${encodeURIComponent(decoded)}`,
      `${getBaseUrl()}/api/blogs/${encodeURIComponent(decoded)}`,
      `${DEPLOYED_API_BASE_URL}/api/blogs/${encodeURIComponent(decoded)}`,
      `/api/blog/${encodeURIComponent(decoded)}`,
      `${DEPLOYED_API_BASE_URL}/api/blog/${encodeURIComponent(decoded)}`,
    ])
  );

  for (const url of candidateUrls) {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { Accept: "application/json" },
        next: { revalidate: 30 },
      });
      if (res.ok) {
        const payload = await res.json();
        const item = extractItemFromPayload(payload);
        if (item && (item._id || item.id || item.heading || item.title)) {
          return formatBlogPost(item);
        }
      }
    } catch (_e) {
      // Continue to fallback
    }
  }

  // Search in local dataset or list
  const localMatch = findLocalBlogById(decoded);
  if (localMatch) return localMatch;

  const allBlogs = await getBlogPosts();
  return (
    allBlogs.find(
      (item) =>
        String(item.id) === decoded ||
        String(item._id) === decoded ||
        item.slug === decoded
    ) || allBlogs[0]
  );
}



