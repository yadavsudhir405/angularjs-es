const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entries = {
    entry: './app/app.js'
};
const outputs = {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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

const commonPlugins = [
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
    }
};