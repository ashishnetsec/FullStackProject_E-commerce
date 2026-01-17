/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    domains: ['upload.wikimedia.org'],
  },
};

export default nextConfig;