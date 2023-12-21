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
          publicPath: '/_next/static/files', // Adjust the path as needed
          outputPath: 'static/files', // Adjust the path as needed
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
