/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => [
    {
      source: "/",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
  images: {
    remotePatterns: [
      {
        hostname: "**",
        port: "",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
