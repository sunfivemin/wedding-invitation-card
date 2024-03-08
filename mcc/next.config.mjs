/** @type {import('next').NextConfig} */
import path from "path";
const __dirname = path.resolve();

const nextConfig = {
    webpack: (config, options) => {
        const { isServer } = options;
        config.module.rules.push({
            test: /\.(ogg|mp3|wav|mpe|svg?g)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: `/sounds/`,
                    outputPath: `${isServer ? '../' : ''}/sounds/`,
                },
            },
        });

        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};

export default nextConfig;
