var webpack = require('webpack');
var path = require('path');
var APP = __dirname + '/src' ;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: APP,
    entry: {
        app: ['webpack/hot/dev-server', './app.js']
    },
    output: {
        path:'build/',
        filename:'js/bundles.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /(\.spec.js$|node_modules)/ },
            { test: /\.html/, loader: 'html'},
            { test: /\.(css|less)$/,loader: 'style!css!less' }
        ]
    },
    resolve: {
	    extensions: ['', '.js', '.json', '.less', '.html', 'tpl.html'],
	    modulesDirectories: [
	      './node_modules',
	      'src/app',
	      'module1',
	      'controllers',
	      'services'
	    ]
	  },
    plugins: [
    	 new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.DedupePlugin()
    ],
    watch:  process.env.NODE_ENV !== 'production',
    node: {
        fs: "empty"
    }
};
