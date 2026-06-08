/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local placeholder photography lives in /public/img.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
