import { NextResponse } from "next/server";
import { newsArticles as fallbackNews, getArticleById as getFallbackArticleById } from "@/app/data/newsData";

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

export async function GET(request, { params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;
  const base = getBackendBase();

  const candidateUrls = Array.from(
    new Set([
      `${base}/api/news/${encodeURIComponent(id)}`,
      `${DEPLOYED_BACKEND_URL}/api/news/${encodeURIComponent(id)}`,
      `${base}/api/vidimeth/news/${encodeURIComponent(id)}`,
      `${DEPLOYED_BACKEND_URL}/api/vidimeth/news/${encodeURIComponent(id)}`,
      `${base}/api/media/${encodeURIComponent(id)}`,
      `${DEPLOYED_BACKEND_URL}/api/media/${encodeURIComponent(id)}`,
      `${base}/api/press/${encodeURIComponent(id)}`,
      `${DEPLOYED_BACKEND_URL}/api/press/${encodeURIComponent(id)}`,
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

  const localMatch = getFallbackArticleById(id);
  if (localMatch) {
    return NextResponse.json({ success: true, data: localMatch });
  }

  return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });
}
