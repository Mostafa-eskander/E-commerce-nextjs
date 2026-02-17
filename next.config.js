/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',        // اختياري، لو مفيش اتركه فاضي
        pathname: '/**', // ** يعني كل الصور تحت أي مسار
      },
    ],
  },
};

module.exports = nextConfig;
