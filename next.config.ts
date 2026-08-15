import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disables the dev-only build-activity badge (the floating circular "N"
  // indicator) that Next.js overlays in the bottom-left corner during
  // `next dev`. Doesn't affect production builds either way.
  devIndicators: false,
};

export default nextConfig;
