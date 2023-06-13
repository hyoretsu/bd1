/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {styledComponents: true},

    webpack: (config, options) => {
        config.module.rules.push({
            test: /.svg$/,
            use: [{ loader: "@svgr/webpack" }],
        });

        return config;
    },
}

module.exports = nextConfig

