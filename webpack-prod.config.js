const merge = require('webpack-merge');
const commonConfigs = require('./webpack-common.config');

const  prodConfigs = {
    mode: "production",
    devtool: "source-map"
};
module.exports =  merge(commonConfigs, prodConfigs);