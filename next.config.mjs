/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zaposlise.hr",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "restcountries.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
