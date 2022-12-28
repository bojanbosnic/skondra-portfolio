/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  rules: [
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    },
  ],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  reactStrictMode: true,
};
