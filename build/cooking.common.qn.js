var cooking = require('cooking');
var config = require('./config');

cooking.set({
  entry: './src/index-qn.js',
  dist: './lib',
  clean: false,
  format: 'cjs',
  extends: ['vue2'],
  minimize: false,
  alias: config.alias,
  externals: config.externals
});

cooking.add('output.filename', 'element-ui.common.qn.js');
cooking.add('loader.js.exclude', config.jsexclude);
cooking.add('vue.preserveWhitespace', false);
module.exports = cooking.resolve();
