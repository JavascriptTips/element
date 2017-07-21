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
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(179);


/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _input = __webpack_require__(9);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_input2.default.install = function (Vue) {
	  Vue.component(_input2.default.name, _input2.default);
	};

	exports.default = _input2.default;

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(10)

	/* template */
	var __vue_template__ = __webpack_require__(14)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _calcTextareaHeight = __webpack_require__(12);

	var _calcTextareaHeight2 = _interopRequireDefault(_calcTextareaHeight);

	var _merge = __webpack_require__(13);

	var _merge2 = _interopRequireDefault(_merge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElInput',

	  componentName: 'ElInput',

	  mixins: [_emitter2.default],

	  data: function data() {
	    return {
	      currentValue: this.value,
	      textareaCalcStyle: {}
	    };
	  },


	  props: {
	    value: [String, Number],
	    placeholder: String,
	    size: String,
	    resize: String,
	    readonly: Boolean,
	    autofocus: Boolean,
	    icon: String,
	    disabled: Boolean,
	    type: {
	      type: String,
	      default: 'text'
	    },
	    name: String,
	    autosize: {
	      type: [Boolean, Object],
	      default: false
	    },
	    rows: {
	      type: Number,
	      default: 2
	    },
	    autoComplete: {
	      type: String,
	      default: 'off'
	    },
	    autoClear: {
	      type: Boolean,
	      default: false
	    },
	    form: String,
	    maxlength: Number,
	    minlength: Number,
	    max: {},
	    min: {},
	    step: {},
	    validateEvent: {
	      type: Boolean,
	      default: true
	    },
	    onIconClick: Function
	  },

	  computed: {
	    validating: function validating() {
	      return this.$parent.validateState === 'validating';
	    },
	    hasClear: function hasClear() {
	      return this.autoClear && this.currentValue.length > 0;
	    },
	    textareaStyle: function textareaStyle() {
	      return (0, _merge2.default)({}, this.textareaCalcStyle, { resize: this.resize });
	    }
	  },

	  watch: {
	    'value': function value(val, oldValue) {
	      this.setCurrentValue(val);
	    }
	  },

	  methods: {
	    handleEnter: function handleEnter(event) {
	      this.$emit('keyupenter', event);
	    },
	    handleBlur: function handleBlur(event) {
	      this.$emit('blur', event);
	      if (this.validateEvent) {
	        this.dispatch('ElFormItem', 'el.form.blur', [this.currentValue]);
	      }
	    },
	    inputFocus: function inputFocus() {
	      this.$refs.input.focus();
	    },
	    inputSelect: function inputSelect() {
	      this.$refs.input.select();
	    },
	    resizeTextarea: function resizeTextarea() {
	      if (this.$isServer) return;
	      var autosize = this.autosize;
	      var type = this.type;

	      if (!autosize || type !== 'textarea') return;
	      var minRows = autosize.minRows;
	      var maxRows = autosize.maxRows;

	      this.textareaCalcStyle = (0, _calcTextareaHeight2.default)(this.$refs.textarea, minRows, maxRows);
	    },
	    handleFocus: function handleFocus(event) {
	      this.$emit('focus', event);
	    },
	    handleInput: function handleInput(event) {
	      var value = event.target.value;
	      this.$emit('input', value);
	      this.setCurrentValue(value);
	      this.$emit('change', value);
	    },
	    handleIconClick: function handleIconClick(event) {
	      if (this.onIconClick) {
	        this.onIconClick(event);
	      }
	      this.$emit('click', event);
	    },
	    handleClearClick: function handleClearClick() {
	      this.setCurrentValue('');
	      this.$emit('clear');
	    },
	    setCurrentValue: function setCurrentValue(value) {
	      var _this = this;

	      if (value === this.currentValue) return;
	      this.$nextTick(function (_) {
	        _this.resizeTextarea();
	      });
	      this.currentValue = value;
	      if (this.validateEvent) {
	        this.dispatch('ElFormItem', 'el.form.change', [value]);
	      }
	    }
	  },

	  created: function created() {
	    this.$on('inputSelect', this.inputSelect);
	  },
	  mounted: function mounted() {
	    this.resizeTextarea();
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

/***/ },

/***/ 11:
/***/ function(module, exports) {

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

/***/ },

/***/ 12:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = calcTextareaHeight;
	var hiddenTextarea = void 0;

	var HIDDEN_STYLE = '\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';

	var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

	function calculateNodeStyling(node) {
	  var style = window.getComputedStyle(node);

	  var boxSizing = style.getPropertyValue('box-sizing');

	  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

	  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

	  var contextStyle = CONTEXT_STYLE.map(function (name) {
	    return name + ':' + style.getPropertyValue(name);
	  }).join(';');

	  return { contextStyle: contextStyle, paddingSize: paddingSize, borderSize: borderSize, boxSizing: boxSizing };
	}

	function calcTextareaHeight(targetNode) {
	  var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	  if (!hiddenTextarea) {
	    hiddenTextarea = document.createElement('textarea');
	    document.body.appendChild(hiddenTextarea);
	  }

	  var _calculateNodeStyling = calculateNodeStyling(targetNode);

	  var paddingSize = _calculateNodeStyling.paddingSize;
	  var borderSize = _calculateNodeStyling.borderSize;
	  var boxSizing = _calculateNodeStyling.boxSizing;
	  var contextStyle = _calculateNodeStyling.contextStyle;


	  hiddenTextarea.setAttribute('style', contextStyle + ';' + HIDDEN_STYLE);
	  hiddenTextarea.value = targetNode.value || targetNode.placeholder || '';

	  var height = hiddenTextarea.scrollHeight;

	  if (boxSizing === 'border-box') {
	    height = height + borderSize;
	  } else if (boxSizing === 'content-box') {
	    height = height - paddingSize;
	  }

	  hiddenTextarea.value = '';
	  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

	  if (minRows !== null) {
	    var minHeight = singleRowHeight * minRows;
	    if (boxSizing === 'border-box') {
	      minHeight = minHeight + paddingSize + borderSize;
	    }
	    height = Math.max(minHeight, height);
	  }
	  if (maxRows !== null) {
	    var maxHeight = singleRowHeight * maxRows;
	    if (boxSizing === 'border-box') {
	      maxHeight = maxHeight + paddingSize + borderSize;
	    }
	    height = Math.min(maxHeight, height);
	  }

	  return { height: height + 'px' };
	};

/***/ },

/***/ 13:
/***/ function(module, exports) {

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

/***/ },

/***/ 14:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [
	      _vm.type === 'textarea' ? 'el-textarea' : 'el-input',
	      _vm.size ? 'el-input--' + _vm.size : '',
	      {
	        'is-disabled': _vm.disabled,
	        'el-input-group': _vm.$slots.prepend || _vm.$slots.append,
	        'el-input-group--append': _vm.$slots.append,
	        'el-input-group--prepend': _vm.$slots.prepend
	      }
	    ]
	  }, [(_vm.type !== 'textarea') ? [(_vm.$slots.prepend) ? _c('div', {
	    staticClass: "el-input-group__prepend"
	  }, [_vm._t("prepend")], 2) : _vm._e(), _vm._t("icon", [(_vm.icon) ? _c('i', {
	    staticClass: "el-input__icon",
	    class: [
	      'el-icon-' + _vm.icon,
	      _vm.icon,
	      _vm.onIconClick ? 'is-clickable' : ''
	    ],
	    on: {
	      "click": _vm.handleIconClick
	    }
	  }) : _vm._e()]), (_vm.type !== 'textarea') ? _c('input', _vm._b({
	    ref: "input",
	    staticClass: "el-input__inner",
	    class: {
	      'el-input__inner--no-icon': !_vm.icon
	    },
	    attrs: {
	      "autocomplete": _vm.autoComplete
	    },
	    domProps: {
	      "value": _vm.currentValue
	    },
	    on: {
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        _vm.handleEnter($event)
	      },
	      "input": _vm.handleInput,
	      "focus": _vm.handleFocus,
	      "blur": _vm.handleBlur
	    }
	  }, 'input', _vm.$props, false)) : _vm._e(), (_vm.validating) ? _c('i', {
	    staticClass: "el-input__icon el-icon-loading"
	  }) : _vm._e(), (_vm.hasClear && !_vm.validating) ? _c('i', {
	    staticClass: "el-input__icon el-icon-circle-cross",
	    on: {
	      "click": _vm.handleClearClick
	    }
	  }) : _vm._e(), (_vm.$slots.append) ? _c('div', {
	    staticClass: "el-input-group__append"
	  }, [_vm._t("append")], 2) : _vm._e()] : _c('textarea', _vm._b({
	    ref: "textarea",
	    staticClass: "el-textarea__inner",
	    style: (_vm.textareaStyle),
	    domProps: {
	      "value": _vm.currentValue
	    },
	    on: {
	      "input": _vm.handleInput,
	      "focus": _vm.handleFocus,
	      "blur": _vm.handleBlur
	    }
	  }, 'textarea', _vm.$props, false))], 2)
	},staticRenderFns: []}

/***/ },

/***/ 18:
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getStyle = exports.once = exports.off = exports.on = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* istanbul ignore next */

	exports.hasClass = hasClass;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.setStyle = setStyle;

	var _vue = __webpack_require__(18);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isServer = _vue2.default.prototype.$isServer;
	var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
	var MOZ_HACK_REGEXP = /^moz([A-Z])/;
	var ieVersion = isServer ? 0 : Number(document.documentMode);

	/* istanbul ignore next */
	var trim = function trim(string) {
	  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
	};
	/* istanbul ignore next */
	var camelCase = function camelCase(name) {
	  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
	    return offset ? letter.toUpperCase() : letter;
	  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
	};

	/* istanbul ignore next */
	var on = exports.on = function () {
	  if (!isServer && document.addEventListener) {
	    return function (element, event, handler) {
	      if (element && event && handler) {
	        element.addEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function (element, event, handler) {
	      if (element && event && handler) {
	        element.attachEvent('on' + event, handler);
	      }
	    };
	  }
	}();

	/* istanbul ignore next */
	var off = exports.off = function () {
	  if (!isServer && document.removeEventListener) {
	    return function (element, event, handler) {
	      if (element && event) {
	        element.removeEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function (element, event, handler) {
	      if (element && event) {
	        element.detachEvent('on' + event, handler);
	      }
	    };
	  }
	}();

	/* istanbul ignore next */
	var once = exports.once = function once(el, event, fn) {
	  var listener = function listener() {
	    if (fn) {
	      fn.apply(this, arguments);
	    }
	    off(el, event, listener);
	  };
	  on(el, event, listener);
	};

	/* istanbul ignore next */
	function hasClass(el, cls) {
	  if (!el || !cls) return false;
	  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
	  if (el.classList) {
	    return el.classList.contains(cls);
	  } else {
	    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
	  }
	};

	/* istanbul ignore next */
	function addClass(el, cls) {
	  if (!el) return;
	  var curClass = el.className;
	  var classes = (cls || '').split(' ');

	  for (var i = 0, j = classes.length; i < j; i++) {
	    var clsName = classes[i];
	    if (!clsName) continue;

	    if (el.classList) {
	      el.classList.add(clsName);
	    } else {
	      if (!hasClass(el, clsName)) {
	        curClass += ' ' + clsName;
	      }
	    }
	  }
	  if (!el.classList) {
	    el.className = curClass;
	  }
	};

	/* istanbul ignore next */
	function removeClass(el, cls) {
	  if (!el || !cls) return;
	  var classes = cls.split(' ');
	  var curClass = ' ' + el.className + ' ';

	  for (var i = 0, j = classes.length; i < j; i++) {
	    var clsName = classes[i];
	    if (!clsName) continue;

	    if (el.classList) {
	      el.classList.remove(clsName);
	    } else {
	      if (hasClass(el, clsName)) {
	        curClass = curClass.replace(' ' + clsName + ' ', ' ');
	      }
	    }
	  }
	  if (!el.classList) {
	    el.className = trim(curClass);
	  }
	};

	/* istanbul ignore next */
	var getStyle = exports.getStyle = ieVersion < 9 ? function (element, styleName) {
	  if (isServer) return;
	  if (!element || !styleName) return null;
	  styleName = camelCase(styleName);
	  if (styleName === 'float') {
	    styleName = 'styleFloat';
	  }
	  try {
	    switch (styleName) {
	      case 'opacity':
	        try {
	          return element.filters.item('alpha').opacity / 100;
	        } catch (e) {
	          return 1.0;
	        }
	      default:
	        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
	    }
	  } catch (e) {
	    return element.style[styleName];
	  }
	} : function (element, styleName) {
	  if (isServer) return;
	  if (!element || !styleName) return null;
	  styleName = camelCase(styleName);
	  if (styleName === 'float') {
	    styleName = 'cssFloat';
	  }
	  try {
	    var computed = document.defaultView.getComputedStyle(element, '');
	    return element.style[styleName] || computed ? computed[styleName] : null;
	  } catch (e) {
	    return element.style[styleName];
	  }
	};

	/* istanbul ignore next */
	function setStyle(element, styleName, value) {
	  if (!element || !styleName) return;

	  if ((typeof styleName === 'undefined' ? 'undefined' : _typeof(styleName)) === 'object') {
	    for (var prop in styleName) {
	      if (styleName.hasOwnProperty(prop)) {
	        setStyle(element, prop, styleName[prop]);
	      }
	    }
	  } else {
	    styleName = camelCase(styleName);
	    if (styleName === 'opacity' && ieVersion < 9) {
	      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
	    } else {
	      element.style[styleName] = value;
	    }
	  }
	};

/***/ },

/***/ 78:
/***/ function(module, exports) {

	module.exports = require("throttle-debounce/debounce");

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _inputNumber = __webpack_require__(180);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_inputNumber2.default.install = function (Vue) {
	  Vue.component(_inputNumber2.default.name, _inputNumber2.default);
	};

	exports.default = _inputNumber2.default;

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(181)

	/* template */
	var __vue_template__ = __webpack_require__(182)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _input = __webpack_require__(8);

	var _input2 = _interopRequireDefault(_input);

	var _dom = __webpack_require__(21);

	var _debounce = __webpack_require__(78);

	var _debounce2 = _interopRequireDefault(_debounce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElInputNumber',
	  directives: {
	    repeatClick: {
	      bind: function bind(el, binding, vnode) {
	        var interval = null;
	        var startTime = void 0;
	        var handler = function handler() {
	          return vnode.context[binding.expression].apply();
	        };
	        var clear = function clear() {
	          if (new Date() - startTime < 100) {
	            handler();
	          }
	          clearInterval(interval);
	          interval = null;
	        };

	        (0, _dom.on)(el, 'mousedown', function () {
	          startTime = new Date();
	          (0, _dom.once)(document, 'mouseup', clear);
	          clearInterval(interval);
	          interval = setInterval(handler, 100);
	        });
	      }
	    }
	  },
	  components: {
	    ElInput: _input2.default
	  },
	  props: {
	    step: {
	      type: Number,
	      default: 1
	    },
	    max: {
	      type: Number,
	      default: Infinity
	    },
	    min: {
	      type: Number,
	      default: -Infinity
	    },
	    value: {
	      default: 0
	    },
	    disabled: Boolean,
	    size: String,
	    controls: {
	      type: Boolean,
	      default: true
	    },
	    debounce: {
	      type: Number,
	      default: 300
	    }
	  },
	  data: function data() {
	    return {
	      currentValue: 0
	    };
	  },

	  watch: {
	    value: {
	      immediate: true,
	      handler: function handler(value) {
	        var newVal = Number(value);
	        if (isNaN(newVal)) return;
	        if (newVal >= this.max) newVal = this.max;
	        if (newVal <= this.min) newVal = this.min;
	        this.currentValue = newVal;
	        this.$emit('input', newVal);
	      }
	    }
	  },
	  computed: {
	    minDisabled: function minDisabled() {
	      return this._decrease(this.value, this.step) < this.min;
	    },
	    maxDisabled: function maxDisabled() {
	      return this._increase(this.value, this.step) > this.max;
	    },
	    precision: function precision() {
	      var value = this.value;
	      var step = this.step;
	      var getPrecision = this.getPrecision;

	      return Math.max(getPrecision(value), getPrecision(step));
	    }
	  },
	  methods: {
	    toPrecision: function toPrecision(num, precision) {
	      if (precision === undefined) precision = this.precision;
	      return parseFloat(parseFloat(Number(num).toFixed(precision)));
	    },
	    getPrecision: function getPrecision(value) {
	      var valueString = value.toString();
	      var dotPosition = valueString.indexOf('.');
	      var precision = 0;
	      if (dotPosition !== -1) {
	        precision = valueString.length - dotPosition - 1;
	      }
	      return precision;
	    },
	    _increase: function _increase(val, step) {
	      if (typeof val !== 'number') return this.currentValue;

	      var precisionFactor = Math.pow(10, this.precision);

	      return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor);
	    },
	    _decrease: function _decrease(val, step) {
	      if (typeof val !== 'number') return this.currentValue;

	      var precisionFactor = Math.pow(10, this.precision);

	      return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor);
	    },
	    increase: function increase() {
	      if (this.disabled || this.maxDisabled) return;
	      var value = this.value || 0;
	      var newVal = this._increase(value, this.step);
	      if (newVal > this.max) return;
	      this.setCurrentValue(newVal);
	    },
	    decrease: function decrease() {
	      if (this.disabled || this.minDisabled) return;
	      var value = this.value || 0;
	      var newVal = this._decrease(value, this.step);
	      if (newVal < this.min) return;
	      this.setCurrentValue(newVal);
	    },
	    handleBlur: function handleBlur() {
	      this.$refs.input.setCurrentValue(this.currentValue);
	    },
	    setCurrentValue: function setCurrentValue(newVal) {
	      var oldVal = this.currentValue;
	      if (newVal >= this.max) newVal = this.max;
	      if (newVal <= this.min) newVal = this.min;
	      if (oldVal === newVal) {
	        this.$refs.input.setCurrentValue(this.currentValue);
	        return;
	      }
	      this.$emit('change', newVal, oldVal);
	      this.$emit('input', newVal);
	      this.currentValue = newVal;
	    },
	    handleInput: function handleInput(value) {
	      if (value === '') {
	        return;
	      }
	      var newVal = Number(value);
	      if (!isNaN(newVal)) {
	        this.setCurrentValue(newVal);
	      } else {
	        this.$refs.input.setCurrentValue(this.currentValue);
	      }
	    }
	  },
	  created: function created() {
	    var _this = this;

	    this.debounceHandleInput = (0, _debounce2.default)(this.debounce, function (value) {
	      _this.handleInput(value);
	    });
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
	//

/***/ },

/***/ 182:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-input-number",
	    class: [
	      _vm.size ? 'el-input-number--' + _vm.size : '',
	      {
	        'is-disabled': _vm.disabled
	      },
	      {
	        'is-without-controls': !_vm.controls
	      }
	    ]
	  }, [(_vm.controls) ? _c('span', {
	    directives: [{
	      name: "repeat-click",
	      rawName: "v-repeat-click",
	      value: (_vm.decrease),
	      expression: "decrease"
	    }],
	    staticClass: "el-input-number__decrease",
	    class: {
	      'is-disabled': _vm.minDisabled
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-minus"
	  })]) : _vm._e(), (_vm.controls) ? _c('span', {
	    directives: [{
	      name: "repeat-click",
	      rawName: "v-repeat-click",
	      value: (_vm.increase),
	      expression: "increase"
	    }],
	    staticClass: "el-input-number__increase",
	    class: {
	      'is-disabled': _vm.maxDisabled
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-plus"
	  })]) : _vm._e(), _c('el-input', {
	    ref: "input",
	    attrs: {
	      "value": _vm.currentValue,
	      "disabled": _vm.disabled,
	      "size": _vm.size,
	      "max": _vm.max,
	      "min": _vm.min
	    },
	    on: {
	      "blur": _vm.handleBlur,
	      "input": _vm.debounceHandleInput
	    },
	    nativeOn: {
	      "keydown": [function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
	        $event.preventDefault();
	        _vm.increase($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
	        $event.preventDefault();
	        _vm.decrease($event)
	      }]
	    }
	  }, [(_vm.$slots.prepend) ? _c('template', {
	    slot: "prepend"
	  }, [_vm._t("prepend")], 2) : _vm._e(), (_vm.$slots.append) ? _c('template', {
	    slot: "append"
	  }, [_vm._t("append")], 2) : _vm._e()], 2)], 1)
	},staticRenderFns: []}

/***/ }

/******/ });