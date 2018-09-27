const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const commonConfigs = require('./webpack-common.config');

const  prodConfigs = {
    mode: "production",
    devtool: "source-map",
   optimization: {
        minimizer : [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCssPlugin({})
        ]
    }

};
module.exports =  merge(commonConfigs, prodConfigs);
