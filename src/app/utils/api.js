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
  const primaryBase = getBaseUrl();
  const primaryUrl = `${primaryBase}${cleanEndpoint}`;

  try {
    const response = await fetch(primaryUrl, options);
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
    // If primary base is different from deployed URL and primary request failed, retry with deployed fallback
    if (primaryBase !== DEPLOYED_API_BASE_URL) {
      const fallbackUrl = `${DEPLOYED_API_BASE_URL}${cleanEndpoint}`;
      try {
        console.warn(`[API] Primary fetch failed for ${primaryUrl}, retrying with deployed fallback: ${fallbackUrl}`);
        const fallbackResponse = await fetch(fallbackUrl, options);
        const fallbackContentType = fallbackResponse.headers.get("content-type");

        let fallbackData;
        if (fallbackContentType && fallbackContentType.includes("application/json")) {
          fallbackData = await fallbackResponse.json();
        } else {
          const text = await fallbackResponse.text();
          fallbackData = { message: text };
        }

        if (!fallbackResponse.ok) {
          throw new Error(fallbackData.message || fallbackData.error || `HTTP error! status: ${fallbackResponse.status}`);
        }

        return fallbackData;
      } catch (fallbackError) {
        console.warn(`[API] Deployed fallback fetch also failed for ${fallbackUrl}:`, fallbackError.message);
        throw fallbackError;
      }
    }

    console.warn(`[API] Fetch failed for ${primaryUrl}:`, error.message);
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
// Helper: Normalize Image URLs from Deployed Backend
// ----------------------------------------------------
export function normalizeImageUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("data:")) {
    return url;
  }
  const base = getBaseUrl().replace(/\/+$/, "");
  const cleanPath = url.startsWith("/") ? url : `/${url}`;
  return `${base}${cleanPath}`;
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
      `${getBaseUrl()}/api/news${queryString}`,
      `${DEPLOYED_API_BASE_URL}/api/news${queryString}`,
      `/api/news${queryString}`,
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
        const rawList = Array.isArray(payload)
          ? payload
          : payload.data || payload.records || payload.posts || [];
        if (Array.isArray(rawList) && rawList.length > 0) {
          const activeArticles = rawList.filter(
            (item) => (item.status || "Active").toLowerCase() === "active"
          );
          if (activeArticles.length > 0) {
            return activeArticles.map((item) => ({
              ...item,
              id: item._id || item.id,
              _id: item._id || item.id,
              title: item.heading || item.title,
              heading: item.heading || item.title,
              category: item.category || "Updates",
              slug: item.slug || item._id || item.id,
              description: item.description || item.content?.replace(/<[^>]*>?/gm, ""),
              image: normalizeImageUrl(item.imageUrl || item.featuredImage || item.image),
              imageUrl: normalizeImageUrl(item.imageUrl || item.featuredImage || item.image),
              featuredImage: normalizeImageUrl(item.imageUrl || item.featuredImage || item.image),
              date: item.createdAt
                ? new Date(item.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : item.date || "August 2026",
            }));
          }
        }
      }
    } catch (_err) {
      // Continue to fallback
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
      `${getBaseUrl()}/api/news/${encodeURIComponent(decoded)}`,
      `${DEPLOYED_API_BASE_URL}/api/news/${encodeURIComponent(decoded)}`,
      `/api/news/${encodeURIComponent(decoded)}`,
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
        const item = payload.data || payload;
        if (item && (item._id || item.id || item.heading || item.title)) {
          return {
            ...item,
            id: item._id || item.id,
            _id: item._id || item.id,
            title: item.heading || item.title,
            heading: item.heading || item.title,
            category: item.category || "Updates",
            slug: item.slug || item._id || item.id,
            description: item.description || item.content?.replace(/<[^>]*>?/gm, ""),
            image: normalizeImageUrl(item.imageUrl || item.featuredImage || item.image),
            imageUrl: normalizeImageUrl(item.imageUrl || item.featuredImage || item.image),
            featuredImage: normalizeImageUrl(item.imageUrl || item.featuredImage || item.image),
            date: item.createdAt
              ? new Date(item.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : item.date || "August 2026",
          };
        }
      }
    } catch (_e) {
      // Continue to fallback
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
      `${getBaseUrl()}/api/blogs${queryString}`,
      `${DEPLOYED_API_BASE_URL}/api/blogs${queryString}`,
      `/api/blogs${queryString}`,
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
        const rawList = Array.isArray(payload)
          ? payload
          : payload.data || payload.records || payload.blogs || payload.posts || [];
        if (Array.isArray(rawList) && rawList.length > 0) {
          const activePosts = rawList.filter(
            (item) => (item.status || "Active").toLowerCase() === "active"
          );
          if (activePosts.length > 0) {
            return activePosts.map((item) => ({
              ...item,
              id: item._id || item.id,
              _id: item._id || item.id,
              title: item.heading || item.title,
              heading: item.heading || item.title,
              category: item.category || "General",
              slug: item.slug || item._id || item.id,
              description: item.description || item.content?.replace(/<[^>]*>?/gm, ""),
              image: normalizeImageUrl(item.imageUrl || item.featuredImage || item.image),
              imageUrl: normalizeImageUrl(item.imageUrl || item.featuredImage || item.image),
              featuredImage: normalizeImageUrl(item.imageUrl || item.featuredImage || item.image),
              author: item.author || "Vidi Meth Editorial Team",
              date: item.createdAt
                ? new Date(item.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : item.date || "August 2026",
            }));
          }
        }
      }
    } catch (_err) {
      // Continue to fallback
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
      `${getBaseUrl()}/api/blogs/${encodeURIComponent(decoded)}`,
      `${DEPLOYED_API_BASE_URL}/api/blogs/${encodeURIComponent(decoded)}`,
      `/api/blogs/${encodeURIComponent(decoded)}`,
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
        const item = payload.data || payload;
        if (item && (item._id || item.id || item.heading || item.title)) {
          return {
            ...item,
            id: item._id || item.id,
            _id: item._id || item.id,
            title: item.heading || item.title,
            heading: item.heading || item.title,
            category: item.category || "General",
            slug: item.slug || item._id || item.id,
            description: item.description || item.content?.replace(/<[^>]*>?/gm, ""),
            content: item.content || item.description,
            image: normalizeImageUrl(item.imageUrl || item.featuredImage || item.image),
            imageUrl: normalizeImageUrl(item.imageUrl || item.featuredImage || item.image),
            featuredImage: normalizeImageUrl(item.imageUrl || item.featuredImage || item.image),
            author: item.author || "Vidi Meth Editorial Team",
            date: item.createdAt
              ? new Date(item.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : item.date || "August 2026",
          };
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



