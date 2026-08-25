/** @type {import('next').NextConfig} */
const nextConfig = {
  // Stops Next.js from sending the "X-Powered-By: Next.js" response header,
  // which otherwise reveals the framework to anyone probing the site.
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Applies to every route in the app
        source: "/:path*",
        headers: [
          // Prevents the site from being embedded in an iframe on another
          // domain (protects against clickjacking).
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Stops browsers from trying to "guess" (MIME-sniff) content types.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Limits how much referrer info is sent to other sites.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Disables browser features the site doesn't use.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
