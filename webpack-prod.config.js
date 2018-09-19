const merge = require('webpack-merge');
const commonConfigs = require('./webpack-common.config');

const  prodConfigs = {
    optimization :{
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: '[]'
                    chunks: 'all'
                }
            }
        }
    }
};
module.exports =  merge(commonConfigs, prodConfigs);