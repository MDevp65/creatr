/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com", "img.clerk.com", "ik.imagekit.io"]
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        });
        return config;
    }
};

export default nextConfig;