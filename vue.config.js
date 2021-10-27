const path = require('path');
const Timestamp = new Date().getTime();
module.exports = {
	productionSourceMap: false,
	devServer: {
		proxy: {
			//设置代理
			'/api': {
				target: 'http://local.v2-old-api.jwcjzb.com',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			}
		},
	},
	lintOnSave:false,
	configureWebpack: { // webpack 配置
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js?=v${Math.random()}`,
      chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js?v=${Math.random()}`
    },
  },
};
