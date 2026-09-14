/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    // Disabled: auto-redirecting by browser locale stops crawlers (which
    // mostly request as en-US) from ever reaching /, so Google would never
    // index the Spanish version. Language choice is exposed via the visible
    // switcher and hreflang tags instead.
    localeDetection: false,
  },
};

module.exports = nextConfig;
