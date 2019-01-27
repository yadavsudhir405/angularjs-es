const  path =  require('path');
const merge = require('webpack-merge');
const commonConfigs =  require('./webpack-common.config');

const devConfigs = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        publicPath:"/yadsud/",
        index: 'index.html',

        historyApiFallback: {
            index: '/yadsud/index.html'
        }
    },
};

module.exports = merge(commonConfigs, devConfigs);
