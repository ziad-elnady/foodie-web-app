/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{ hostname: 'images.unsplash.com', protocol: 'https' },
			{ hostname: 'placehold.co', protocol: 'https' }
		]
	}
};

export default nextConfig;
