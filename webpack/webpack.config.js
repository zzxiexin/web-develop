const path = require('path');
const distDir = path.join(__dirname, 'dist');
module.exports = {
    mode: "production",
    entry: "/src/index.js",
    output: {
        path: distDir,
        // 入口文件和其依赖模块
        filename: '[name].[contenthash:8].js',
    }
}