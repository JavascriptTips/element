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

	module.exports = __webpack_require__(190);


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

/***/ 15:
/***/ (function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/mixins/emitter");

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _optionGroup = __webpack_require__(191);

	var _optionGroup2 = _interopRequireDefault(_optionGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_optionGroup2.default.install = function (Vue) {
	  Vue.component(_optionGroup2.default.name, _optionGroup2.default);
	};

	exports.default = _optionGroup2.default;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(192),
	  /* template */
	  __webpack_require__(193),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(15);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_emitter2.default],

	  name: 'el-option-group',

	  componentName: 'ElOptionGroup',

	  props: {
	    value: {
	      required: true
	    },
	    label: String,
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },

	  data: function data() {
	    return {
	      visible: true,
	      groupDisabled: false
	    };
	  },

	  computed: {
	    currentLabel: function currentLabel() {
	      return this.label || (typeof this.value === 'string' || typeof this.value === 'number' ? this.value : '');
	    }
	  },

	  watch: {
	    currentLabel: function currentLabel() {
	      this.dispatch('ElSelect', 'setSelected');
	    },
	    disabled: function disabled(val) {
	      this.broadcast('ElOption', 'handleGroupDisabled', val);
	    }
	    //      value() {
	    //        this.dispatch('ElSelect', 'setSelected');
	    //      }

	  },

	  methods: {
	    queryChange: function queryChange() {
	      this.visible = this.$children && Array.isArray(this.$children) && this.$children.some(function (option) {
	        return option.visible === true;
	      });
	    },

	    //      hoverItem() {
	    //        if (!this.disabled && !this.groupDisabled) {
	    //          this.parent.hoverIndex = this.parent.options.indexOf(this);
	    //        }
	    //      },

	    selectOptionClick: function selectOptionClick() {
	      if (this.disabled !== true && this.groupDisabled !== true) {
	        this.dispatch('ElSelect', 'handleOptionClick', this);
	        console.log('option-group select', this.value, this.label);
	      }
	    }
	  },

	  created: function created() {
	    this.$on('queryChange', this.queryChange);
	  },
	  mounted: function mounted() {
	    if (this.disabled) {
	      this.broadcast('ElOption', 'handleGroupDisabled', this.disabled);
	    }
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

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "el-select-group__wrap"
	  }, [_c('li', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    staticClass: "el-select-group__title",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.selectOptionClick($event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.currentLabel))]), _c('li', [_c('ul', {
	    staticClass: "el-select-group"
	  }, [_vm._t("default")], 2)])])
	},staticRenderFns: []}

/***/ })

/******/ });