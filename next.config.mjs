/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    swcMinify: true,
    images: {
      loader: "akamai",
      path: "",
      unoptimized: true,
    },
    basePath: "",
    assetPrefix: "",
};

export default nextConfig;
