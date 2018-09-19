const devConfigs = require('./webpack-dev.cofig');
const prodConfigs = require('./webpack-prod.config');

console.log('Running build for '+process.env.NODE_ENV);

module.exports = process.env.NODE_ENV === 'prod' ? prodConfigs : devConfigs;
