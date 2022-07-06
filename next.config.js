/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';
const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export const config = analyzer({
    webpack5: true,
    reactStrictMode: true,
    esmExternals: true,
    swcLoader: true,
    swcMinify: true,
    experimental: {
      modern: true,
    },
    i18n: {
      locales: ['ja', 'en'],
      defaultLocale: 'ja'
    }
  }
);

export default config;