var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');
var saladConfig = require('../packages/theme-default/salad.config.json');

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
var transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));
var externals = {
  react: 'react',
  'react-dom': 'react-dom'
};

Object.keys(Components).forEach(function(key) {
  externals[`@qp/qp-element-ui/packages/${key}`] = `@qp/qp-element-ui/lib/${key}`;
});

externals['@qp/qp-element-ui/src/locale'] = '@qp/qp-element-ui/lib/locale';
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`@qp/qp-element-ui/src/utils/${file}`] = `@qp/qp-element-ui/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`@qp/qp-element-ui/src/mixins/${file}`] = `@qp/qp-element-ui/lib/mixins/${file}`;
});
transitionList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`@qp/qp-element-ui/src/transitions/${file}`] = `@qp/qp-element-ui/lib/transitions/${file}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'element-ui': path.resolve(__dirname, '../'),
  '@qp/qp-element-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;

exports.postcss = function(webapck) {
  saladConfig.features.partialImport = {
    addDependencyTo: webapck
  };
  return [
    require('postcss-salad')(saladConfig)
  ];
};
