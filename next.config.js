import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  swcMinify: true,
  cleanDistDir: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  productionBrowserSourceMaps: true,
};

const config =
  process.env.ANALYZE === 'true'
    ? withBundleAnalyzer(nextConfig)({
        enabled: true,
      })
    : nextConfig;

export default config;
