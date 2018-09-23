const  path =  require('path');
const merge = require('webpack-merge');
const commonConfigs =  require('./webpack-common.config');

const devConfigs = {
    devtool: 'sourcemap',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        historyApiFallback: true
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

module.exports = merge(commonConfigs, devConfigs);
