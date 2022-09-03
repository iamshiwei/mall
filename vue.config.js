const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/common": {
        target: "https://www.imooc.com",
        chageOrigin: false,
      },
    },
  },
});
