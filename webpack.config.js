const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode    : 'production',
	entry   : './src/js/app.js',
	output  : {
		filename : 'bundle.js',
		path     : path.resolve(__dirname, './dist')
	},
	module  : {
		rules : [
			{
				test : /\.css$/,
				use  : [ 'style-loader', 'css-loader' ]
			},
			{
				test : /\.ttf$/,
				use  : [ 'url-loader' ]
			}
		]
	},
	plugins : [ new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }) ]
};
 