/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "6valley.6amtech.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
