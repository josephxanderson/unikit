const webpack = require('webpack');

const nodeEnv = (process.env.NODE_ENV !== 'production') ? 'development' : 'production';

module.exports = function(_env, argv) {
	const isProduction = argv.mode === "production" ? true : false;

	return {
		output: {
			filename: 'UniKit.js',
			libraryTarget: 'commonjs2',
		},

		externals: {
			'react': 'commonjs react',
			'react-dom': 'commonjs react-dom',
			'react-router-dom': 'commonjs react-router-dom',
		},

		plugins: [
			// Gives access to `process`.env.
			new webpack.ProvidePlugin({
				process: 'process/browser',
			}),
		],

		module: {
			rules: [
				// JS / JSX files
				{
					test: /\.js$|jsx/,
					exclude: /node_modules/,
					use: [
						{
							loader: "babel-loader",
							options: {
								cacheDirectory: true,
								cacheCompression: false,
							}
						}
					]
				},

				{
					test: /\.(ttf|woff|woff2|)$/,
					use: [
						{
							loader: 'file-loader?name=[name].[ext]',
						},
					],
				},

				// CSS / SASS / SCSS files
				{
					test: /\.(css|sass|scss)$/,
					use: [
						{
							loader: 'style-loader',
						},

						{
							loader: 'css-loader',
							options: {
								importLoaders: 2,
								sourceMap: true,
							},
						},

						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [
										[
											require('autoprefixer'),
										]
									]
								}
							},
						},

						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						},
					],
				},
			],
		},
	};
}
