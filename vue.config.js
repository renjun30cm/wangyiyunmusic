module.exports = {
    lintOnSave: false,
    devServer: {
        port: 8888,
        open: true,
        proxy: {
            "/api": {
                target: "http://localhost:4321/", //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
    },
    configureWebpack: {
        resolve: {
            alias: {},
        },
    },
};