import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	// `experimental.typedRoutes` has been moved to top-level `typedRoutes`
	// See Next.js migration notes; keep explicit boolean here.
	typedRoutes: true,
};

export default nextConfig;
