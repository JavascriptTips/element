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

	module.exports = __webpack_require__(273);


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

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _main = __webpack_require__(274);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_main2.default.install = function (Vue) {
	  Vue.component(_main2.default.name, _main2.default);
	};

	exports.default = _main2.default;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(275),
	  /* template */
	  __webpack_require__(276),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 275:
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
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'ElSwitchingTabs',

	  props: {
	    value: Number, // 索引
	    tabs: {
	      type: Array,
	      required: true
	    }
	  },

	  data: function data() {
	    return {
	      tabIndex: 0
	    };
	  },
	  mounted: function mounted() {

	    this.hideChilren(0);
	  },


	  methods: {
	    hideChilren: function hideChilren(index) {
	      [].forEach.call(this.$refs.content.children, function (node, i) {

	        node.style.display = i === index ? 'block' : 'none';
	      });

	      this.tabIndex = index;

	      this.$emit('input', index);
	    },
	    changeTab: function changeTab(e) {
	      var i = parseInt(e.currentTarget.dataset.index, 10);

	      if (i !== this.tabIndex) {
	        this.hideChilren(i);
	      }
	    }
	  }
	};

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-switching-tabs"
	  }, [_c('nav', {
	    staticClass: "el-switching-tabs__header"
	  }, [_c('ul', _vm._l((_vm.tabs), function(title, index) {
	    return _c('li', {
	      class: ['el-switching-tabs__tab', {
	        'el-switching-tabs__tab--active': index === _vm.tabIndex
	      }],
	      attrs: {
	        "data-index": index
	      },
	      on: {
	        "click": _vm.changeTab
	      }
	    }, [_vm._v("\n        " + _vm._s(title) + "\n      ")])
	  }))]), _c('div', {
	    ref: "content",
	    staticClass: "el-switching-tabs__content"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ })

/******/ });