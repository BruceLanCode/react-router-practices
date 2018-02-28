module.exports = {
	entry: './index.js',

	output: {
		filename: 'bundle.js',
		publicPath: ''
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_module/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015','stage-0','react']
				}
			}
		]
	}
}