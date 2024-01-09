/** @type {import('next').NextConfig} */
// next.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextIntl = require('next-intl/plugin');

const nextConfig = withNextIntl()({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(riv)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/_next/static/public/',
          outputPath: 'static/public/',
        },
      },
    });
    return config;
  },
});

module.exports = nextConfig;
