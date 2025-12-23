/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: "loose",
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  env: {
    GOOGLE_TRANSLATION_CONFIG: JSON.stringify({
      languages: [
        { icon: "/flags/en.svg", name: "en" },
        // { icon: "/flags/ar.svg", name: "ar" },
        // { icon: "/flags/zh-hans.svg", name: "zh-CN" },
        // { icon: "/flags/hi.svg", name: "hi" },
      ],
      defaultLanguage: "en",
    }),
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        // locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=1209600",
          },
        ],
      },
    ];
  },
  transpilePackages: [
    "sanity-plugin-seo-pane",
    "lodash-es",
    "yoastseo",
    "@yoast",
  ],
};

module.exports = nextConfig;
