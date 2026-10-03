import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/feed",
        destination: "/feed.xml",
        permanent: true,
      },
      {
        source: "/rss",
        destination: "/feed.xml",
        permanent: true,
      },
      {
        source: "/rss.xml",
        destination: "/feed.xml",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
