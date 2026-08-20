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
