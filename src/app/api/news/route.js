import { NextResponse } from "next/server";
import { newsArticles as fallbackNews } from "@/app/data/newsData";

const DEPLOYED_BACKEND_URL = "http://187.77.184.141:5050";

function getBackendBase() {
  const envUrl = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL;
  if (
    envUrl &&
    typeof envUrl === "string" &&
    envUrl.trim() &&
    envUrl !== "undefined" &&
    envUrl !== "null"
  ) {
    return envUrl.trim().replace(/\/+$/, "");
  }
  return DEPLOYED_BACKEND_URL;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const queryString = searchParams.toString() ? `?${searchParams.toString()}` : "";
  const base = getBackendBase();

  const candidateUrls = Array.from(
    new Set([
      `${base}/api/news${queryString}`,
      `${base}/api/news/${queryString}`,
      `${DEPLOYED_BACKEND_URL}/api/news${queryString}`,
      `${DEPLOYED_BACKEND_URL}/api/news/${queryString}`,
      `${base}/api/vidimeth/news${queryString}`,
      `${DEPLOYED_BACKEND_URL}/api/vidimeth/news${queryString}`,
      `${base}/api/media${queryString}`,
      `${DEPLOYED_BACKEND_URL}/api/media${queryString}`,
      `${base}/api/press${queryString}`,
      `${DEPLOYED_BACKEND_URL}/api/press${queryString}`,
      `${base}/api/announcements${queryString}`,
      `${DEPLOYED_BACKEND_URL}/api/announcements${queryString}`,
    ])
  );

  for (const url of candidateUrls) {
    try {
      const res = await fetch(url, {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
      }
    } catch (_err) {
      // Continue to next candidate
    }
  }

  // If backend is completely offline, return fallback dataset
  return NextResponse.json({ success: true, data: fallbackNews });
}
