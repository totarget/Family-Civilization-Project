/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/volume-01', destination: '/books/volume-01-relationships', permanent: true },
      { source: '/volume-i', destination: '/books/volume-01-relationships', permanent: true },
      { source: '/relationships', destination: '/books/volume-01-relationships', permanent: true }
    ];
  }
};

export default nextConfig;
