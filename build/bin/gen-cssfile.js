var fs = require('fs');
var path = require('path');
var Components = require('../../components.json');
var themes = [
  'theme-default',
  'theme-weike'
  // 'theme-qn'
];
Components = Object.keys(Components);
var basepath = path.resolve(__dirname, '../../packages/');

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

function writeIndexCss(theme, initIndexContent, resourcePre = './', filters = [], noWrite) {
  var indexContent = initIndexContent || '@import "./base.css";\n';
  Components.forEach(function(key) {
    if (['icon', 'option', 'option-group'].concat(filters).indexOf(key) > -1) return;
    var fileName = key + '.css';
    indexContent += `@import "${resourcePre}${fileName}";\n`;
    var filePath = path.resolve(basepath, theme, 'src', fileName);
    if (!fileExists(filePath)) {
      fs.writeFileSync(filePath, '', 'utf8');
      console.log(theme, ' 创建遗漏的 ', fileName, ' 文件');
    }
  });
  if (!noWrite) {
    fs.writeFileSync(path.resolve(basepath, theme, 'src', 'index.css'), indexContent);
  }
  return indexContent;
}

themes.forEach((theme) => {
  writeIndexCss(theme);
});

// build weike-theme-qn
// const weikeThemeIndex = writeIndexCss(
//   'theme-weike',
//   undefined,
//   path.join(basepath, './theme-weike/src/'),
//   ['pagination', 'button'],
//   true
// );
writeIndexCss(
  'theme-qn',
  undefined,
  undefined,
  ['pagination']
);
