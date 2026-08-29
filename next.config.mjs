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
    return [
      {
        source: "/api/:path*",
        destination: "http://187.77.184.141:5050/api/:path*",
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
