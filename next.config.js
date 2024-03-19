/** @type {import('next').NextConfig} */
const stylexPlugin = require("@stylexjs/nextjs-plugin")

const nextConfig = {
  output: 'export',
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
}

module.exports = stylexPlugin({
  filename: 'stylex-bundle.css',
  rootDir: __dirname,
  useCSSLayers: true,
})((nextConfig))