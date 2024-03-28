/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
