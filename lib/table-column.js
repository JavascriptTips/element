module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(341);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	/* globals __VUE_SSR_CONTEXT__ */

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  injectStyles,
	  scopeId,
	  moduleIdentifier /* server only */
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  var hook
	  if (moduleIdentifier) { // server build
	    hook = function (context) {
	      // 2.3 injection
	      context =
	        context || // cached call
	        (this.$vnode && this.$vnode.ssrContext) || // stateful
	        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
	      // 2.2 with runInNewContext: true
	      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	        context = __VUE_SSR_CONTEXT__
	      }
	      // inject component styles
	      if (injectStyles) {
	        injectStyles.call(this, context)
	      }
	      // register component module identifier for async chunk inferrence
	      if (context && context._registeredComponents) {
	        context._registeredComponents.add(moduleIdentifier)
	      }
	    }
	    // used by ssr in case component is cached and beforeCreate
	    // never gets called
	    options._ssrRegister = hook
	  } else if (injectStyles) {
	    hook = injectStyles
	  }

	  if (hook) {
	    var functional = options.functional
	    var existing = functional
	      ? options.render
	      : options.beforeCreate
	    if (!functional) {
	      // inject component registration as beforeCreate hook
	      options.beforeCreate = existing
	        ? [].concat(existing, hook)
	        : [hook]
	    } else {
	      // register for functioal component in vue file
	      options.render = function renderWithStyleInjection (h, context) {
	        hook.call(context)
	        return existing(h, context)
	      }
	    }
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	function _broadcast(componentName, eventName, params) {
	  this.$children.forEach(function (child) {
	    var name = child.$options.componentName;

	    if (name === componentName) {
	      child.$emit.apply(child, [eventName].concat(params));
	    } else {
	      _broadcast.apply(child, [componentName, eventName].concat([params]));
	    }
	  });
	}
	exports.default = {
	  methods: {
	    dispatch: function dispatch(componentName, eventName, params) {
	      var parent = this.$parent || this.$root;
	      var name = parent.$options.componentName;

	      while (parent && (!name || name !== componentName)) {
	        parent = parent.$parent;

	        if (parent) {
	          name = parent.$options.componentName;
	        }
	      }
	      if (parent) {
	        parent.$emit.apply(parent, [eventName].concat(params));
	      }
	    },
	    broadcast: function broadcast(componentName, eventName, params) {
	      _broadcast.call(this, componentName, eventName, params);
	    }
	  }
	};

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (target) {
	  for (var i = 1, j = arguments.length; i < j; i++) {
	    var source = arguments[i] || {};
	    for (var prop in source) {
	      if (source.hasOwnProperty(prop)) {
	        var value = source[prop];
	        if (value !== undefined) {
	          target[prop] = value;
	        }
	      }
	    }
	  }

	  return target;
	};

	;

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _checkbox = __webpack_require__(82);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_checkbox2.default.install = function (Vue) {
	  Vue.component(_checkbox2.default.name, _checkbox2.default);
	};

	exports.default = _checkbox2.default;

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(83),
	  /* template */
	  __webpack_require__(84),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(12);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElCheckbox',

	  mixins: [_emitter2.default],

	  componentName: 'ElCheckbox',

	  data: function data() {
	    return {
	      selfModel: false,
	      focus: false
	    };
	  },


	  computed: {
	    model: {
	      get: function get() {
	        return this.isGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
	      },
	      set: function set(val) {
	        if (this.isGroup) {
	          var isLimitExceeded = false;
	          this._checkboxGroup.min !== undefined && val.length < this._checkboxGroup.min && (isLimitExceeded = true);

	          this._checkboxGroup.max !== undefined && val.length > this._checkboxGroup.max && (isLimitExceeded = true);

	          isLimitExceeded === false && this.dispatch('ElCheckboxGroup', 'input', [val]);
	        } else {
	          this.$emit('input', val);
	          this.selfModel = val;
	        }
	      }
	    },

	    isChecked: function isChecked() {
	      if ({}.toString.call(this.model) === '[object Boolean]') {
	        return this.model;
	      } else if (Array.isArray(this.model)) {
	        return this.model.indexOf(this.label) > -1;
	      } else if (this.model !== null && this.model !== undefined) {
	        return this.model === this.trueLabel;
	      }
	    },
	    isGroup: function isGroup() {
	      var parent = this.$parent;
	      while (parent) {
	        if (parent.$options.componentName !== 'ElCheckboxGroup') {
	          parent = parent.$parent;
	        } else {
	          this._checkboxGroup = parent;
	          return true;
	        }
	      }
	      return false;
	    },
	    store: function store() {
	      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
	    }
	  },

	  props: {
	    value: {},
	    label: {},
	    indeterminate: Boolean,
	    disabled: Boolean,
	    checked: Boolean,
	    name: String,
	    trueLabel: [String, Number],
	    falseLabel: [String, Number],
	    size: String
	  },

	  methods: {
	    addToStore: function addToStore() {
	      if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
	        this.model.push(this.label);
	      } else {
	        this.model = this.trueLabel || true;
	      }
	    },
	    handleChange: function handleChange(ev) {
	      var _this = this;

	      this.$emit('change', ev);
	      if (this.isGroup) {
	        this.$nextTick(function (_) {
	          _this.dispatch('ElCheckboxGroup', 'change', [_this._checkboxGroup.value]);
	        });
	      }
	    }
	  },

	  created: function created() {
	    this.checked && this.addToStore();
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    staticClass: "el-checkbox"
	  }, [_c('span', {
	    staticClass: "el-checkbox__input",
	    class: [{
	      'is-disabled': _vm.disabled,
	      'is-checked': _vm.isChecked,
	      'is-indeterminate': _vm.indeterminate,
	      'is-focus': _vm.focus
	    }]
	  }, [_c('span', {
	    staticClass: "el-checkbox__inner",
	    class: [
	      _vm.size ? 'el-checkbox__inner--' + _vm.size : ''
	    ]
	  }), (_vm.trueLabel || _vm.falseLabel) ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.model),
	      expression: "model"
	    }],
	    staticClass: "el-checkbox__original",
	    attrs: {
	      "type": "checkbox",
	      "name": _vm.name,
	      "disabled": _vm.disabled,
	      "true-value": _vm.trueLabel,
	      "false-value": _vm.falseLabel
	    },
	    domProps: {
	      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, null) > -1 : _vm._q(_vm.model, _vm.trueLabel)
	    },
	    on: {
	      "change": _vm.handleChange,
	      "focus": function($event) {
	        _vm.focus = true
	      },
	      "blur": function($event) {
	        _vm.focus = false
	      },
	      "__c": function($event) {
	        var $$a = _vm.model,
	          $$el = $event.target,
	          $$c = $$el.checked ? (_vm.trueLabel) : (_vm.falseLabel);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _vm._i($$a, $$v);
	          if ($$el.checked) {
	            $$i < 0 && (_vm.model = $$a.concat([$$v]))
	          } else {
	            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.model = $$c
	        }
	      }
	    }
	  }) : _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.model),
	      expression: "model"
	    }],
	    staticClass: "el-checkbox__original",
	    attrs: {
	      "type": "checkbox",
	      "disabled": _vm.disabled,
	      "name": _vm.name
	    },
	    domProps: {
	      "value": _vm.label,
	      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, _vm.label) > -1 : (_vm.model)
	    },
	    on: {
	      "change": _vm.handleChange,
	      "focus": function($event) {
	        _vm.focus = true
	      },
	      "blur": function($event) {
	        _vm.focus = false
	      },
	      "__c": function($event) {
	        var $$a = _vm.model,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = _vm.label,
	            $$i = _vm._i($$a, $$v);
	          if ($$el.checked) {
	            $$i < 0 && (_vm.model = $$a.concat([$$v]))
	          } else {
	            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.model = $$c
	        }
	      }
	    }
	  })]), (_vm.$slots.default || _vm.label) ? _c('span', {
	    staticClass: "el-checkbox__label"
	  }, [_vm._t("default"), (!_vm.$slots.default) ? [_vm._v(_vm._s(_vm.label))] : _vm._e()], 2) : _vm._e()])
	},staticRenderFns: []}

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _tag = __webpack_require__(251);

	var _tag2 = _interopRequireDefault(_tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_tag2.default.install = function (Vue) {
	  Vue.component(_tag2.default.name, _tag2.default);
	};

	exports.default = _tag2.default;

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(252),
	  /* template */
	  __webpack_require__(253),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 252:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'ElTag',
	  props: {
	    text: String,
	    closable: Boolean,
	    type: String,
	    hit: Boolean,
	    closeTransition: Boolean,
	    color: String
	  },
	  methods: {
	    handleClose: function handleClose(event) {
	      this.$emit('close', event);
	    }
	  }
	};

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": _vm.closeTransition ? '' : 'el-zoom-in-center'
	    }
	  }, [_c('span', {
	    staticClass: "el-tag",
	    class: [_vm.type ? 'el-tag--' + _vm.type : '', {
	      'is-hit': _vm.hit
	    }],
	    style: ({
	      backgroundColor: _vm.color
	    })
	  }, [_vm._t("default"), (_vm.closable) ? _c('i', {
	    staticClass: "el-tag__close el-icon-close",
	    on: {
	      "click": _vm.handleClose
	    }
	  }) : _vm._e()], 2)])
	},staticRenderFns: []}

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var getCell = exports.getCell = function getCell(event) {
	  var cell = event.target;

	  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
	    if (cell.tagName.toUpperCase() === 'TD') {
	      return cell;
	    }
	    cell = cell.parentNode;
	  }

	  return null;
	};

	var getValueByPath = exports.getValueByPath = function getValueByPath(object, prop) {
	  prop = prop || '';
	  var paths = prop.split('.');
	  var current = object;
	  var result = null;
	  for (var i = 0, j = paths.length; i < j; i++) {
	    var path = paths[i];
	    if (!current) break;

	    if (i === j - 1) {
	      result = current[path];
	      break;
	    }
	    current = current[path];
	  }
	  return result;
	};

	var isObject = function isObject(obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	};

	var orderBy = exports.orderBy = function orderBy(array, sortKey, reverse, sortMethod) {
	  if (typeof reverse === 'string') {
	    reverse = reverse === 'descending' ? -1 : 1;
	  }
	  if (!sortKey) {
	    return array;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;

	  // sort on a copy to avoid mutating original array
	  return array.slice().sort(sortMethod ? function (a, b) {
	    return sortMethod(a, b) ? order : -order;
	  } : function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? getValueByPath(a, sortKey) : a;
	    b = isObject(b) ? getValueByPath(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	};

	var getColumnById = exports.getColumnById = function getColumnById(table, columnId) {
	  var column = null;
	  table.columns.forEach(function (item) {
	    if (item.id === columnId) {
	      column = item;
	    }
	  });
	  return column;
	};

	var getColumnByCell = exports.getColumnByCell = function getColumnByCell(table, cell) {
	  var matches = (cell.className || '').match(/el-table_[^\s]+/gm);
	  if (matches) {
	    return getColumnById(table, matches[0]);
	  }
	  return null;
	};

	var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

	var mousewheel = exports.mousewheel = function mousewheel(element, callback) {
	  if (element && element.addEventListener) {
	    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', callback);
	  }
	};

	var getRowIdentity = exports.getRowIdentity = function getRowIdentity(row, rowKey) {
	  if (!row) throw new Error('row is required when get row identity');
	  if (typeof rowKey === 'string') {
	    return row[rowKey];
	  } else if (typeof rowKey === 'function') {
	    return rowKey.call(null, row);
	  }
	};

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _tableColumn = __webpack_require__(342);

	var _tableColumn2 = _interopRequireDefault(_tableColumn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_tableColumn2.default.install = function (Vue) {
	  Vue.component(_tableColumn2.default.name, _tableColumn2.default);
	};

	exports.default = _tableColumn2.default;

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _checkbox = __webpack_require__(81);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _tag = __webpack_require__(250);

	var _tag2 = _interopRequireDefault(_tag);

	var _merge = __webpack_require__(14);

	var _merge2 = _interopRequireDefault(_merge);

	var _util = __webpack_require__(329);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

	var columnIdSeed = 1;

	var defaults = {
	  default: {
	    order: ''
	  },
	  selection: {
	    width: 28,
	    minWidth: 28,
	    realWidth: 28,
	    order: '',
	    className: 'el-table-column--selection'
	  },
	  expand: {
	    width: 48,
	    minWidth: 48,
	    realWidth: 48,
	    order: ''
	  },
	  index: {
	    width: 48,
	    minWidth: 48,
	    realWidth: 48,
	    order: ''
	  }
	};

	var forced = {
	  selection: {
	    renderHeader: function renderHeader(h) {
	      return h(
	        'el-checkbox',
	        {
	          nativeOn: {
	            'click': this.toggleAllSelection
	          },
	          domProps: {
	            'value': this.isAllSelected
	          },
	          attrs: {
	            value: this.isAllSelected }
	        },
	        []
	      );
	    },
	    renderCell: function renderCell(h, _ref) {
	      var row = _ref.row,
	          column = _ref.column,
	          store = _ref.store,
	          $index = _ref.$index;

	      return h(
	        'el-checkbox',
	        {
	          domProps: {
	            'value': store.isSelected(row)
	          },
	          attrs: {
	            value: store.isSelected(row),
	            disabled: column.selectable ? !column.selectable.call(null, row, $index) : false
	          },
	          on: {
	            'input': function input() {
	              store.commit('rowSelectedChanged', row);
	            }
	          }
	        },
	        []
	      );
	    },
	    sortable: false,
	    resizable: false
	  },
	  index: {
	    renderHeader: function renderHeader(h, _ref2) {
	      var column = _ref2.column;

	      return column.label || '#';
	    },
	    renderCell: function renderCell(h, _ref3) {
	      var $index = _ref3.$index;

	      return h(
	        'div',
	        null,
	        [$index + 1]
	      );
	    },
	    sortable: false
	  },
	  expand: {
	    renderHeader: function renderHeader(h, _ref4) {
	      _objectDestructuringEmpty(_ref4);

	      return '';
	    },
	    renderCell: function renderCell(h, _ref5, proxy) {
	      var row = _ref5.row,
	          store = _ref5.store;

	      var expanded = store.states.expandRows.indexOf(row) > -1;
	      return h(
	        'div',
	        { 'class': 'el-table__expand-icon ' + (expanded ? 'el-table__expand-icon--expanded' : ''),
	          on: {
	            'click': function click() {
	              return proxy.handleExpandClick(row);
	            }
	          }
	        },
	        [h(
	          'i',
	          { 'class': 'el-icon el-icon-arrow-right' },
	          []
	        )]
	      );
	    },
	    sortable: false,
	    resizable: false,
	    className: 'el-table__expand-column'
	  }
	};

	var getDefaultColumn = function getDefaultColumn(type, options) {
	  var column = {};

	  (0, _merge2.default)(column, defaults[type || 'default']);

	  for (var name in options) {
	    if (options.hasOwnProperty(name)) {
	      var value = options[name];
	      if (typeof value !== 'undefined') {
	        column[name] = value;
	      }
	    }
	  }

	  if (!column.minWidth) {
	    column.minWidth = 80;
	  }

	  column.realWidth = column.width || column.minWidth;

	  return column;
	};

	var DEFAULT_RENDER_CELL = function DEFAULT_RENDER_CELL(h, _ref6) {
	  var row = _ref6.row,
	      column = _ref6.column;

	  var property = column.property;
	  if (column && column.formatter) {
	    return column.formatter(row, column);
	  }

	  if (property && property.indexOf('.') === -1) {
	    return row[property];
	  }

	  return (0, _util.getValueByPath)(row, property);
	};

	exports.default = {
	  name: 'el-table-column',

	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    },
	    label: String,
	    className: String,
	    property: String,
	    prop: String,
	    width: {},
	    minWidth: {},
	    renderHeader: Function,
	    sortable: {
	      type: [String, Boolean],
	      default: false
	    },
	    sortMethod: Function,
	    resizable: {
	      type: Boolean,
	      default: true
	    },
	    context: {},
	    columnKey: String,
	    align: String,
	    headerAlign: String,
	    showTooltipWhenOverflow: Boolean,
	    showOverflowTooltip: Boolean,
	    fixed: [Boolean, String],
	    formatter: Function,
	    selectable: Function,
	    reserveSelection: Boolean,
	    filterMethod: Function,
	    filters: Array,
	    filterMultiple: {
	      type: Boolean,
	      default: true
	    },
	    screens: Array,
	    screenMethod: Function
	  },

	  data: function data() {
	    return {
	      isSubColumn: false,
	      columns: []
	    };
	  },
	  beforeCreate: function beforeCreate() {
	    this.row = {};
	    this.column = {};
	    this.$index = 0;
	  },


	  components: {
	    ElCheckbox: _checkbox2.default,
	    ElTag: _tag2.default
	  },

	  computed: {
	    owner: function owner() {
	      var parent = this.$parent;
	      while (parent && !parent.tableId) {
	        parent = parent.$parent;
	      }
	      return parent;
	    }
	  },

	  created: function created() {
	    var _this = this;

	    var h = this.$createElement;

	    this.customRender = this.$options.render;
	    this.$options.render = function (h) {
	      return h('div', _this.$slots.default);
	    };

	    var columnId = this.columnId = this.columnKey || (this.$parent.tableId || this.$parent.columnId + '_') + 'column_' + columnIdSeed++;

	    var parent = this.$parent;
	    var owner = this.owner;
	    this.isSubColumn = owner !== parent;

	    var type = this.type;

	    var width = this.width;
	    if (width !== undefined) {
	      width = parseInt(width, 10);
	      if (isNaN(width)) {
	        width = null;
	      }
	    }

	    var minWidth = this.minWidth;
	    if (minWidth !== undefined) {
	      minWidth = parseInt(minWidth, 10);
	      if (isNaN(minWidth)) {
	        minWidth = 80;
	      }
	    }

	    var isColumnGroup = false;

	    var column = getDefaultColumn(type, {
	      id: columnId,
	      label: this.label,
	      className: this.className,
	      property: this.prop || this.property,
	      type: type,
	      renderCell: null,
	      renderHeader: this.renderHeader,
	      minWidth: minWidth,
	      width: width,
	      isColumnGroup: isColumnGroup,
	      context: this.context,
	      align: this.align ? 'is-' + this.align : null,
	      headerAlign: this.headerAlign ? 'is-' + this.headerAlign : this.align ? 'is-' + this.align : null,
	      sortable: this.sortable === '' ? true : this.sortable,
	      sortMethod: this.sortMethod,
	      resizable: this.resizable,
	      showOverflowTooltip: this.showOverflowTooltip || this.showTooltipWhenOverflow,
	      formatter: this.formatter,
	      selectable: this.selectable,
	      reserveSelection: this.reserveSelection,
	      fixed: this.fixed === '' ? true : this.fixed,
	      filterMethod: this.filterMethod,
	      filters: this.filters,
	      filterable: this.filters || this.filterMethod,
	      filterMultiple: this.filterMultiple,
	      filterOpened: false,
	      filteredValue: [],
	      screens: this.screens,
	      screenOpened: false,
	      screenedValue: [],
	      screenMethod: this.screenMethod
	    });

	    (0, _merge2.default)(column, forced[type] || {});

	    this.columnConfig = column;

	    var renderCell = column.renderCell;
	    var _self = this;

	    if (type === 'expand') {
	      owner.renderExpanded = function (h, data) {
	        return _self.$scopedSlots.default ? _self.$scopedSlots.default(data) : _self.$slots.default;
	      };

	      column.renderCell = function (h, data) {
	        return h(
	          'div',
	          { 'class': 'cell' },
	          [renderCell(h, data, this._renderProxy)]
	        );
	      };

	      return;
	    }

	    column.renderCell = function (h, data) {
	      // 未来版本移除
	      if (_self.$vnode.data.inlineTemplate) {
	        renderCell = function renderCell() {
	          data._self = _self.context || data._self;
	          if (Object.prototype.toString.call(data._self) === '[object Object]') {
	            for (var prop in data._self) {
	              if (!data.hasOwnProperty(prop)) {
	                data[prop] = data._self[prop];
	              }
	            }
	          }
	          // 静态内容会缓存到 _staticTrees 内，不改的话获取的静态数据就不是内部 context
	          data._staticTrees = _self._staticTrees;
	          data.$options.staticRenderFns = _self.$options.staticRenderFns;
	          return _self.customRender.call(data);
	        };
	      } else if (_self.$scopedSlots.default) {
	        renderCell = function renderCell() {
	          return _self.$scopedSlots.default(data);
	        };
	      }

	      if (!renderCell) {
	        renderCell = DEFAULT_RENDER_CELL;
	      }

	      return _self.showOverflowTooltip || _self.showTooltipWhenOverflow ? h(
	        'el-tooltip',
	        {
	          attrs: {
	            effect: this.effect,
	            placement: 'top',
	            disabled: this.tooltipDisabled }
	        },
	        [h(
	          'div',
	          { 'class': 'cell' },
	          [renderCell(h, data)]
	        ), h(
	          'span',
	          { slot: 'content' },
	          [renderCell(h, data)]
	        )]
	      ) : h(
	        'div',
	        { 'class': 'cell' },
	        [renderCell(h, data)]
	      );
	    };
	  },
	  destroyed: function destroyed() {
	    if (!this.$parent) return;
	    this.owner.store.commit('removeColumn', this.columnConfig);
	  },


	  watch: {
	    label: function label(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.label = newVal;
	      }
	    },
	    prop: function prop(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.property = newVal;
	      }
	    },
	    property: function property(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.property = newVal;
	      }
	    },
	    filters: function filters(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.filters = newVal;
	      }
	    },
	    filterMultiple: function filterMultiple(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.filterMultiple = newVal;
	      }
	    },
	    screens: function screens(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.screens = newVal;
	      }
	    },
	    align: function align(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.align = newVal ? 'is-' + newVal : null;
	      }
	    },
	    headerAlign: function headerAlign(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.headerAlign = newVal ? 'is-' + newVal : this.align;
	      }
	    },
	    width: function width(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.width = newVal;
	        this.owner.store.scheduleLayout();
	      }
	    },
	    minWidth: function minWidth(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.minWidth = newVal;
	        this.owner.store.scheduleLayout();
	      }
	    },
	    fixed: function fixed(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.fixed = newVal;
	        this.owner.store.scheduleLayout();
	      }
	    }
	  },

	  mounted: function mounted() {
	    var owner = this.owner;
	    var parent = this.$parent;
	    var columnIndex = void 0;

	    if (!this.isSubColumn) {
	      columnIndex = [].indexOf.call(parent.$refs.hiddenColumns.children, this.$el);
	    } else {
	      columnIndex = [].indexOf.call(parent.$el.children, this.$el);
	    }

	    owner.store.commit('insertColumn', this.columnConfig, columnIndex, this.isSubColumn ? parent.columnConfig : null);
	  }
	};

/***/ })

/******/ });