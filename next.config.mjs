/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
  fileExtensions: ["webp", "ico", "svg", "png", "jpg", "jpeg", "gif", "webm", "mp4", "pdf"],
})

const nextConfig = {
  reactStrictMode: true,
};



export default withPWAInit(nextConfig);

