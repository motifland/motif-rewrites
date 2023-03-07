/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  skipMiddlewareUrlNormalize: true,
  experimental: {
    externalMiddlewareRewritesResolve: true,
  },
}

module.exports = nextConfig
