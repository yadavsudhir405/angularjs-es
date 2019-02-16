const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";

const entries = {
    app: './app/app.js',

};
const outputs = {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
   // publicPath: '/yadsud/'

};
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
                loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
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

const commonPlugins = [
    new CopyWebpackPlugin(
        [{
            from: "app",
            test: /.ico$/,
            ignore:['*.js','*.scss','*.css','*.jpg','*.png','*.html','*.json','*.md','*.txt','*.map']
        }]
    ),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
        minify: false,
        favicon:'./app/favicon.ico',
        template: path.join(__dirname, 'app/index.html'),
        inject: 'body',
        hash: false
    }),
    new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin('dist')
];

module.exports = {
    entry: entries,
    output: outputs,
    module: {
        rules: rules
    },
    plugins: commonPlugins,
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules']
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all'
                }
            }
        }
    }

};
