const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
const createNextConfig = (phase) => ({
    output: 'export',
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next' : 'dist',
    basePath: '/home',
    reactStrictMode: true,
    images: {
        unoptimized: true,
        //loader: "custom",
        formats:['image/webp' , 'image/avif'],
        domains: ['localhost', 'soleaspay.com']
      },
})

module.exports = createNextConfig
