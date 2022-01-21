module.exports = {
  images: {
    domains: ['res.cloudinary.com', 'localhost'],
  },
  env: {
    STEPZEN_API_KEY: process.env.STEPZEN_API_KEY,
    STEPZEN_API_URL: process.env.STEPZEN_API_URL,
  },
  webpack: function (config, { isServer }) {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    })
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    })
    return config
  },
}
