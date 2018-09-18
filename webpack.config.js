const cwd = process.cwd();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const rules = [
    {
        test: /\.js$/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    plugins: [
                        ['angularjs-annotate', {explicitOnly: false}]
                    ],
                    presets: ['babel-preset-env']
                }
            }
        ],
        exclude: /node_modules/
    },
    {
        test: /\.(jpg|png)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
            }
        ]
    },
    {
        test: /\.(html)$/,
        use: [{
            loader: 'raw-loader',
        }],
    },
    {
        test: /\.txt$/,
        use: 'raw-loader'
    },
    {
        test: /\.scss$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader
            },
            {
                loader: 'css-loader',
                options: {sourceMap: true}
            },
            {
                loader: 'sass-loader',
                options: {sourceMap: true}
            }
        ]
    }
];
const plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
        minify: false,
        template: path.join(__dirname, 'app/index.html'),
        inject: 'body',
        hash: false
    }),
    new MiniCssExtractPlugin({
        filename: "style.css",
        chunkFilename: "[id].css"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin('dist')
];

if (process.env.NODE_ENV === 'dev') {
    plugins.push(
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    );
}

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            beautify: false,
            mangle: {
                screw_ie8: true
            },
            compress: {
                unused: true,
                dead_code: true,
                drop_debugger: true,
                conditionals: true,
                evaluate: true,
                drop_console: true,
                sequences: true,
                booleans: true,
                screw_ie8: true,
                warnings: false
            },
            comments: false
        })
    );
}

module.exports = {
    cache: true,
    context: __dirname,
    performance: {
        hints: false
    },
    devtool: 'sourcemap',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        historyApiFallback: true
    },
    entry: {
        entry: './app/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules
    },
    node: {
        fs: 'empty',
        global: true,
        crypto: 'empty'
    },
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules', cwd]
    },
    plugins
};
