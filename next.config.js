/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
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
};

module.exports = nextConfig;
