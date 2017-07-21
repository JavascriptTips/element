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

	module.exports = __webpack_require__(252);


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

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _main = __webpack_require__(253);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_main2.default.install = function (Vue) {
	  Vue.component(_main2.default.name, _main2.default);
	};

	exports.default = _main2.default;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(254),
	  /* template */
	  __webpack_require__(255),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 254:
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
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'ElPairTabs',
	  props: {
	    tabs: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    size: String
	  },
	  data: function data() {
	    return {
	      curIndex: 0
	    };
	  },

	  computed: {
	    activeTabs: function activeTabs() {
	      var _this = this;

	      return [this.tabs[this.curIndex]].concat(this.tabs.filter(function (name, i) {
	        return i !== _this.curIndex;
	      })).map(function (name, i) {
	        return {
	          name: name,
	          active: i === 0,
	          i: _this.tabs.indexOf(name)
	        };
	      });
	    }
	  },
	  mounted: function mounted() {
	    var _this2 = this;

	    this.$nextTick(function () {
	      _this2.showIndex(_this2.curIndex);
	    });
	    this.$watch('tabs', function () {
	      _this2.$nextTick(function () {
	        _this2.showIndex(_this2.curIndex);
	      });
	    });
	  },

	  methods: {
	    switchTab: function switchTab(index) {
	      this.curIndex = index;
	      this.showIndex(index);
	    },
	    showIndex: function showIndex(index) {
	      var children = this.$refs.box.children;
	      if (children.length > 0) {
	        [].map.call(children, function (node, i) {
	          node.style.display = i === index ? 'block' : 'none';
	        });
	      }
	    }
	  }
	};

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-pair-tabs"
	  }, [_c('ul', {
	    staticClass: "el-pair-tabs__tabs",
	    class: {
	      'el-pair-tabs__tabs--small': _vm.size === 'small'
	    }
	  }, _vm._l((_vm.activeTabs), function(tab, index) {
	    return _c('li', {
	      class: {
	        active: tab.active,
	      },
	      on: {
	        "click": function($event) {
	          _vm.switchTab(tab.i)
	        }
	      }
	    }, [_vm._v("\n        " + _vm._s(tab.name) + "\n      ")])
	  })), _c('div', {
	    ref: "box",
	    staticClass: "el-pair-tabs__box"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ })

/******/ });