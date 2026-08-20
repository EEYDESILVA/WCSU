/** @type {import('next').NextConfig} */
const nextConfig = {
  // @splinetool packages ship as modern ESM — transpile explicitly so
  // they're processed consistently in both dev and production builds.
  transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime'],
};

export default nextConfig;
