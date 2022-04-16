const { defineConfig } = require('@vue/cli-service')
const fs = require('fs');
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: {
      key: fs.readFileSync('.certs/key.pem'),
      cert: fs.readFileSync('.certs/cert.pem'),
    },
    // hotOnly: true,
  },

})
