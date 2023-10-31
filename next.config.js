/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? "/stoic-quotes" : "",
  assetPrefix: isProd ? "/stoic-quotes/" : "",
};

module.exports = nextConfig;
