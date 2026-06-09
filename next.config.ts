/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US', 'it'],
    defaultLocale: 'it',
  },

  async redirects() {
    return [
      {
        source: '/en-US/:path*',
        destination: '/en/:path*',
        permanent: true,
      },
      {
        source: '/en-US',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;