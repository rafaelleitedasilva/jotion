/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US","pt-BR"],
    defaultLocale: "pt-BR",
    localeDetection: true,
  },
  images: {
    domains: [
      "files.edgestore.dev"
    ]
  }
};

module.exports = nextConfig;
