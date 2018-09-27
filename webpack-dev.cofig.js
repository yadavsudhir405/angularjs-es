const  path =  require('path');
const merge = require('webpack-merge');
const commonConfigs =  require('./webpack-common.config');

const devConfigs = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        historyApiFallback: true
    },
};

module.exports = merge(commonConfigs, devConfigs);
