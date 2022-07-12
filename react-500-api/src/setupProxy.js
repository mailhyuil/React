// setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/get",
    createProxyMiddleware({
      target: "http://apis.data.go.kr",
      changeOrigin: true,
      pathRewrite: {
        "^/get": "",
      },
    })
  );
};