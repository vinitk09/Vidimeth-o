const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

/**
 * Generic fetch wrapper with standard error handling
 */
async function apiFetch(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
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
export async function getOptOutRequests() {
  return await apiFetch("/api/privacy-policy");
}

export async function submitOptOutRequest(optOutData) {
  return await apiFetch("/api/privacy-policy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(optOutData),
  });
}
