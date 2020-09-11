const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
	template: path.join(__dirname, './src/index.html'),
	filename: 'index.html'
});

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve('./dist'),
		filename: 'bundle.js'
	},
	plugins: [ htmlPlugin ],
	module: {
		rules: [
			{ test: /\.js|.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.less|.css$/, use: [ 'style-loader', 'css-loader', 'postcss-loader', 'less-loader' ] },
			{ test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000' },
			{ test: /\.ttf|.woff|.woff2|.eot|.svg$/, use: [ 'url-loader' ] } //打包处理字体文字的loader
		]
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.json' ],
		alias: {
			'@': path.join(__dirname, './src')
		}
	}
};
