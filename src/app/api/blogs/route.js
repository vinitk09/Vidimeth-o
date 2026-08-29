import { NextResponse } from "next/server";
import { blogPosts as fallbackBlogs } from "@/app/data/blogsData";

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
      `${base}/api/blogs${queryString}`,
      `${base}/api/blogs/${queryString}`,
      `${DEPLOYED_BACKEND_URL}/api/blogs${queryString}`,
      `${DEPLOYED_BACKEND_URL}/api/blogs/${queryString}`,
      `${base}/api/blog${queryString}`,
      `${DEPLOYED_BACKEND_URL}/api/blog${queryString}`,
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

  return NextResponse.json({ success: true, data: fallbackBlogs });
}
