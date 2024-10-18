/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    basePath: '/home',
    reactStrictMode: true,
    images: {
        //loader: "custom",
        formats:['image/webp' , 'image/avif'],
        domains: ['localhost', 'soleaspay.com']
      },
}

module.exports = nextConfig
