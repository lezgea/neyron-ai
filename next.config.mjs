import withBundleAnalyzer from '@next/bundle-analyzer';
import path from 'path';
import { fileURLToPath } from 'url';
import createNextIntlPlugin from 'next-intl/plugin'; // Import next-intl plugin

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isAnalyze = process.env.ANALYZE === 'true';

// Create the NextIntl plugin wrapper
const withNextIntl = createNextIntlPlugin();

// Define your Next.js config
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
    },
    images: {
        domains: ['api.datarace.ai'],
    },
    webpack(config) {
        // Add your existing rule for handling .riv files
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

        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgo: false, // Optional: Disable SVGO optimizations if necessary
                    },
                },
            ],
        });
        return config;
    },
};

// Combine the bundle analyzer and next-intl plugins
export default withBundleAnalyzer({ enabled: isAnalyze })(
    withNextIntl(nextConfig)
);
