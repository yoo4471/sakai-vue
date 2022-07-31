module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/sakai-vue' : '/',
	devServer: {
		proxy : 'http://127.0.0.1:8000'
	},
}