'use strict';

require('element-ui/build/bin/qn-env');

var _index = require('../packages/pagination/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../packages/dialog/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../packages/autocomplete/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('../packages/dropdown/index.js');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('../packages/dropdown-menu/index.js');

var _index10 = _interopRequireDefault(_index9);

var _index11 = require('../packages/dropdown-item/index.js');

var _index12 = _interopRequireDefault(_index11);

var _index13 = require('../packages/menu/index.js');

var _index14 = _interopRequireDefault(_index13);

var _index15 = require('../packages/submenu/index.js');

var _index16 = _interopRequireDefault(_index15);

var _index17 = require('../packages/menu-item/index.js');

var _index18 = _interopRequireDefault(_index17);

var _index19 = require('../packages/menu-item-group/index.js');

var _index20 = _interopRequireDefault(_index19);

var _index21 = require('../packages/input/index.js');

var _index22 = _interopRequireDefault(_index21);

var _index23 = require('../packages/input-number/index.js');

var _index24 = _interopRequireDefault(_index23);

var _index25 = require('../packages/radio/index.js');

var _index26 = _interopRequireDefault(_index25);

var _index27 = require('../packages/radio-group/index.js');

var _index28 = _interopRequireDefault(_index27);

var _index29 = require('../packages/radio-button/index.js');

var _index30 = _interopRequireDefault(_index29);

var _index31 = require('../packages/checkbox/index.js');

var _index32 = _interopRequireDefault(_index31);

var _index33 = require('../packages/checkbox-button/index.js');

var _index34 = _interopRequireDefault(_index33);

var _index35 = require('../packages/checkbox-group/index.js');

var _index36 = _interopRequireDefault(_index35);

var _index37 = require('../packages/switch/index.js');

var _index38 = _interopRequireDefault(_index37);

var _index39 = require('../packages/select/index.js');

var _index40 = _interopRequireDefault(_index39);

var _index41 = require('../packages/option/index.js');

var _index42 = _interopRequireDefault(_index41);

var _index43 = require('../packages/option-group/index.js');

var _index44 = _interopRequireDefault(_index43);

var _index45 = require('../packages/button/index.js');

var _index46 = _interopRequireDefault(_index45);

var _index47 = require('../packages/button-group/index.js');

var _index48 = _interopRequireDefault(_index47);

var _index49 = require('../packages/table/index.js');

var _index50 = _interopRequireDefault(_index49);

var _index51 = require('../packages/table-column/index.js');

var _index52 = _interopRequireDefault(_index51);

var _index53 = require('../packages/date-picker/index.js');

var _index54 = _interopRequireDefault(_index53);

var _index55 = require('../packages/time-select/index.js');

var _index56 = _interopRequireDefault(_index55);

var _index57 = require('../packages/time-picker/index.js');

var _index58 = _interopRequireDefault(_index57);

var _index59 = require('../packages/popover/index.js');

var _index60 = _interopRequireDefault(_index59);

var _index61 = require('../packages/tooltip/index.js');

var _index62 = _interopRequireDefault(_index61);

var _index63 = require('../packages/message-box/index.js');

var _index64 = _interopRequireDefault(_index63);

var _index65 = require('../packages/breadcrumb/index.js');

var _index66 = _interopRequireDefault(_index65);

var _index67 = require('../packages/breadcrumb-item/index.js');

var _index68 = _interopRequireDefault(_index67);

var _index69 = require('../packages/form/index.js');

var _index70 = _interopRequireDefault(_index69);

var _index71 = require('../packages/form-item/index.js');

var _index72 = _interopRequireDefault(_index71);

var _index73 = require('../packages/tabs/index.js');

var _index74 = _interopRequireDefault(_index73);

var _index75 = require('../packages/tab-pane/index.js');

var _index76 = _interopRequireDefault(_index75);

var _index77 = require('../packages/tag/index.js');

var _index78 = _interopRequireDefault(_index77);

var _index79 = require('../packages/tree/index.js');

var _index80 = _interopRequireDefault(_index79);

var _index81 = require('../packages/alert/index.js');

var _index82 = _interopRequireDefault(_index81);

var _index83 = require('../packages/notification/index.js');

var _index84 = _interopRequireDefault(_index83);

var _index85 = require('../packages/slider/index.js');

var _index86 = _interopRequireDefault(_index85);

var _index87 = require('../packages/loading/index.js');

var _index88 = _interopRequireDefault(_index87);

var _index89 = require('../packages/icon/index.js');

var _index90 = _interopRequireDefault(_index89);

var _index91 = require('../packages/row/index.js');

var _index92 = _interopRequireDefault(_index91);

var _index93 = require('../packages/col/index.js');

var _index94 = _interopRequireDefault(_index93);

var _index95 = require('../packages/upload/index.js');

var _index96 = _interopRequireDefault(_index95);

var _index97 = require('../packages/progress/index.js');

var _index98 = _interopRequireDefault(_index97);

var _index99 = require('../packages/spinner/index.js');

var _index100 = _interopRequireDefault(_index99);

var _index101 = require('../packages/message/index.js');

var _index102 = _interopRequireDefault(_index101);

var _index103 = require('../packages/badge/index.js');

var _index104 = _interopRequireDefault(_index103);

var _index105 = require('../packages/card/index.js');

var _index106 = _interopRequireDefault(_index105);

var _index107 = require('../packages/rate/index.js');

var _index108 = _interopRequireDefault(_index107);

var _index109 = require('../packages/steps/index.js');

var _index110 = _interopRequireDefault(_index109);

var _index111 = require('../packages/step/index.js');

var _index112 = _interopRequireDefault(_index111);

var _index113 = require('../packages/carousel/index.js');

var _index114 = _interopRequireDefault(_index113);

var _index115 = require('../packages/scrollbar/index.js');

var _index116 = _interopRequireDefault(_index115);

var _index117 = require('../packages/carousel-item/index.js');

var _index118 = _interopRequireDefault(_index117);

var _index119 = require('../packages/collapse/index.js');

var _index120 = _interopRequireDefault(_index119);

var _index121 = require('../packages/collapse-item/index.js');

var _index122 = _interopRequireDefault(_index121);

var _index123 = require('../packages/switching-tabs/index.js');

var _index124 = _interopRequireDefault(_index123);

var _index125 = require('../packages/jdate-time-picker/index.js');

var _index126 = _interopRequireDefault(_index125);

var _index127 = require('../packages/pair-tabs/index.js');

var _index128 = _interopRequireDefault(_index127);

var _index129 = require('../packages/cascader/index.js');

var _index130 = _interopRequireDefault(_index129);

var _index131 = require('../packages/color-picker/index.js');

var _index132 = _interopRequireDefault(_index131);

var _index133 = require('../packages/transfer/index.js');

var _index134 = _interopRequireDefault(_index133);

var _locale = require('@qp/qp-element-ui/lib/locale');

var _locale2 = _interopRequireDefault(_locale);

var _collapseTransition = require('@qp/qp-element-ui/lib/transitions/collapse-transition');

var _collapseTransition2 = _interopRequireDefault(_collapseTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Automatic generated by './build/bin/build-entry.js' */
var components = [_index2.default, _index4.default, _index6.default, _index8.default, _index10.default, _index12.default, _index14.default, _index16.default, _index18.default, _index20.default, _index22.default, _index24.default, _index26.default, _index28.default, _index30.default, _index32.default, _index34.default, _index36.default, _index38.default, _index40.default, _index42.default, _index44.default, _index46.default, _index48.default, _index50.default, _index52.default, _index54.default, _index56.default, _index58.default, _index60.default, _index62.default, _index66.default, _index68.default, _index70.default, _index72.default, _index74.default, _index76.default, _index78.default, _index80.default, _index82.default, _index86.default, _index90.default, _index92.default, _index94.default, _index96.default, _index98.default, _index100.default, _index104.default, _index106.default, _index108.default, _index110.default, _index112.default, _index114.default, _index116.default, _index118.default, _index120.default, _index122.default, _index124.default, _index126.default, _index128.default, _index130.default, _index132.default, _index134.default, _collapseTransition2.default];

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /* istanbul ignore if */
  if (install.installed) return;
  _locale2.default.use(opts.locale);
  _locale2.default.i18n(opts.i18n);

  components.map(function (component) {
    Vue.component(component.name, component);
  });

  Vue.use(_index88.default.directive);

  Vue.prototype.$loading = _index88.default.service;
  Vue.prototype.$msgbox = _index64.default;
  Vue.prototype.$alert = _index64.default.alert;
  Vue.prototype.$confirm = _index64.default.confirm;
  Vue.prototype.$prompt = _index64.default.prompt;
  Vue.prototype.$notify = _index84.default;
  Vue.prototype.$message = _index102.default;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  version: '1.3.77',
  locale: _locale2.default.use,
  i18n: _locale2.default.i18n,
  install: install,
  CollapseTransition: _collapseTransition2.default,
  Loading: _index88.default,
  Pagination: _index2.default,
  Dialog: _index4.default,
  Autocomplete: _index6.default,
  Dropdown: _index8.default,
  DropdownMenu: _index10.default,
  DropdownItem: _index12.default,
  Menu: _index14.default,
  Submenu: _index16.default,
  MenuItem: _index18.default,
  MenuItemGroup: _index20.default,
  Input: _index22.default,
  InputNumber: _index24.default,
  Radio: _index26.default,
  RadioGroup: _index28.default,
  RadioButton: _index30.default,
  Checkbox: _index32.default,
  CheckboxButton: _index34.default,
  CheckboxGroup: _index36.default,
  Switch: _index38.default,
  Select: _index40.default,
  Option: _index42.default,
  OptionGroup: _index44.default,
  Button: _index46.default,
  ButtonGroup: _index48.default,
  Table: _index50.default,
  TableColumn: _index52.default,
  DatePicker: _index54.default,
  TimeSelect: _index56.default,
  TimePicker: _index58.default,
  Popover: _index60.default,
  Tooltip: _index62.default,
  MessageBox: _index64.default,
  Breadcrumb: _index66.default,
  BreadcrumbItem: _index68.default,
  Form: _index70.default,
  FormItem: _index72.default,
  Tabs: _index74.default,
  TabPane: _index76.default,
  Tag: _index78.default,
  Tree: _index80.default,
  Alert: _index82.default,
  Notification: _index84.default,
  Slider: _index86.default,
  Icon: _index90.default,
  Row: _index92.default,
  Col: _index94.default,
  Upload: _index96.default,
  Progress: _index98.default,
  Spinner: _index100.default,
  Message: _index102.default,
  Badge: _index104.default,
  Card: _index106.default,
  Rate: _index108.default,
  Steps: _index110.default,
  Step: _index112.default,
  Carousel: _index114.default,
  Scrollbar: _index116.default,
  CarouselItem: _index118.default,
  Collapse: _index120.default,
  CollapseItem: _index122.default,
  SwitchingTabs: _index124.default,
  JdateTimePicker: _index126.default,
  PairTabs: _index128.default,
  Cascader: _index130.default,
  ColorPicker: _index132.default,
  Transfer: _index134.default
};