// 后端服务器地址
let url = 'http://localhost:80'
module.exports = {
    lintOnSave: false, // 关闭EsLint
    // publicPath: '/assets', // 【必要】静态文件使用相对路径
    outputDir: "./dist", // 打包后的文件夹名字及路径
    devServer: { // 开发环境跨域情况的代理配置
        proxy: {
            // 【必要】访问自己搭建的后端服务器
            '/api': {
                target: url,
                changOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {

                }
            },
        }
    }
}