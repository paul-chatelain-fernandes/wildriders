/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   ];
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
