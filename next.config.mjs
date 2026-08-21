/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://187.77.184.141:5050";
    return [
      {
        source: "/api/:path*",
        destination: `${backendUrl}/api/:path*`,
      },
      {
        source: "/www.vmhomemart.com",
        destination: "/vmhomemart",
      },
      {
        source: "/vmhomemart.com",
        destination: "/vmhomemart",
      },
    ];
  },
};

export default nextConfig;
