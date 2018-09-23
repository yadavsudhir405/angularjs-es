const merge = require('webpack-merge');
const commonConfigs = require('./webpack-common.config');

const  prodConfigs = {
};
module.exports =  merge(commonConfigs, prodConfigs);