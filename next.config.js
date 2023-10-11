/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dl5zpyw5k3jeb.cloudfront.net',
                port: '',
            }
        ]
    }
}

module.exports = nextConfig
