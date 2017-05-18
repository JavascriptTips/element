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

	module.exports = __webpack_require__(136);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
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

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/input");

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/utils/dom");

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _inputNumber = __webpack_require__(137);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_inputNumber2.default.install = function (Vue) {
	  Vue.component(_inputNumber2.default.name, _inputNumber2.default);
	};

	exports.default = _inputNumber2.default;

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(138),
	  /* template */
	  __webpack_require__(139),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _input = __webpack_require__(9);

	var _input2 = _interopRequireDefault(_input);

	var _dom = __webpack_require__(69);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	exports.default = {
	  name: 'ElInputNumber',
	  directives: {
	    repeatClick: {
	      bind: function bind(el, binding, vnode) {
	        var interval = null;
	        var startTime = void 0;

	        var handler = function handler() {
	          return vnode.context[binding.expression]();
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
	      default: 0
	    },
	    value: {
	      default: 0
	    },
	    disabled: Boolean,
	    size: String,
	    controls: {
	      type: Boolean,
	      default: true
	    }
	  },
	  data: function data() {
	    // correct the init value
	    var value = this.value;
	    if (value < this.min) {
	      this.$emit('input', this.min);
	      value = this.min;
	    }
	    if (value > this.max) {
	      this.$emit('input', this.max);
	      value = this.max;
	    }
	    return {
	      currentValue: value
	    };
	  },

	  watch: {
	    value: function value(val) {
	      this.currentValue = val;
	    },
	    currentValue: function currentValue(newVal, oldVal) {
	      if (newVal <= this.max && newVal >= this.min) {
	        this.$emit('change', newVal, oldVal);
	        this.$emit('input', newVal);
	      } else {
	        this.currentValue = oldVal;
	      }
	    }
	  },
	  computed: {
	    minDisabled: function minDisabled() {
	      return this.accSub(this.value, this.step) < this.min;
	    },
	    maxDisabled: function maxDisabled() {
	      return this.accAdd(this.value, this.step) > this.max;
	    }
	  },
	  methods: {
	    accSub: function accSub(arg1, arg2) {
	      var r1, r2, m, n;
	      try {
	        r1 = arg1.toString().split('.')[1].length;
	      } catch (e) {
	        r1 = 0;
	      }
	      try {
	        r2 = arg2.toString().split('.')[1].length;
	      } catch (e) {
	        r2 = 0;
	      }
	      m = Math.pow(10, Math.max(r1, r2));
	      n = r1 >= r2 ? r1 : r2;
	      return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n));
	    },
	    accAdd: function accAdd(arg1, arg2) {
	      var r1, r2, m, c;
	      try {
	        r1 = arg1.toString().split('.')[1].length;
	      } catch (e) {
	        r1 = 0;
	      }
	      try {
	        r2 = arg2.toString().split('.')[1].length;
	      } catch (e) {
	        r2 = 0;
	      }
	      c = Math.abs(r1 - r2);
	      m = Math.pow(10, Math.max(r1, r2));
	      if (c > 0) {
	        var cm = Math.pow(10, c);
	        if (r1 > r2) {
	          arg1 = Number(arg1.toString().replace('.', ''));
	          arg2 = Number(arg2.toString().replace('.', '')) * cm;
	        } else {
	          arg1 = Number(arg1.toString().replace('.', '')) * cm;
	          arg2 = Number(arg2.toString().replace('.', ''));
	        }
	      } else {
	        arg1 = Number(arg1.toString().replace('.', ''));
	        arg2 = Number(arg2.toString().replace('.', ''));
	      }
	      return (arg1 + arg2) / m;
	    },
	    increase: function increase() {
	      if (this.maxDisabled) return;
	      var value = this.value || 0;
	      if (this.accAdd(value, this.step) > this.max || this.disabled) return;
	      this.currentValue = this.accAdd(value, this.step);
	    },
	    decrease: function decrease() {
	      if (this.minDisabled) return;
	      var value = this.value || 0;
	      if (this.accSub(value, this.step) < this.min || this.disabled) return;
	      this.currentValue = this.accSub(value, this.step);
	    },
	    handleBlur: function handleBlur() {
	      this.$refs.input.setCurrentValue(this.currentValue);
	    }
	  }
	};

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

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
	    staticClass: "el-input-number__decrease el-icon-minus",
	    class: {
	      'is-disabled': _vm.minDisabled
	    }
	  }) : _vm._e(), (_vm.controls) ? _c('span', {
	    directives: [{
	      name: "repeat-click",
	      rawName: "v-repeat-click",
	      value: (_vm.increase),
	      expression: "increase"
	    }],
	    staticClass: "el-input-number__increase el-icon-plus",
	    class: {
	      'is-disabled': _vm.maxDisabled
	    }
	  }) : _vm._e(), _c('el-input', {
	    ref: "input",
	    attrs: {
	      "disabled": _vm.disabled,
	      "size": _vm.size
	    },
	    on: {
	      "blur": _vm.handleBlur
	    },
	    nativeOn: {
	      "keydown": [function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
	        _vm.increase($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
	        _vm.decrease($event)
	      }]
	    },
	    model: {
	      value: (_vm.currentValue),
	      callback: function($$v) {
	        _vm.currentValue = _vm._n($$v)
	      },
	      expression: "currentValue"
	    }
	  }, [(_vm.$slots.prepend) ? _c('template', {
	    slot: "prepend"
	  }, [_vm._t("prepend")], 2) : _vm._e(), (_vm.$slots.append) ? _c('template', {
	    slot: "append"
	  }, [_vm._t("append")], 2) : _vm._e()], 2)], 1)
	},staticRenderFns: []}

/***/ })

/******/ });