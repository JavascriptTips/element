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

	module.exports = __webpack_require__(200);


/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _main = __webpack_require__(201);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_main2.default.install = function (Vue) {
	  Vue.component(_main2.default.name, _main2.default);
	};

	exports.default = _main2.default;

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(202)

	/* template */
	var __vue_template__ = __webpack_require__(203)
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

/***/ 202:
/***/ function(module, exports) {

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

	      return this.tabs.map(function (name, i) {
	        return {
	          name: name,
	          active: _this.curIndex === i
	        };
	      });
	    }
	  },
	  mounted: function mounted() {
	    this.$nextTick(function () {});
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

/***/ },

/***/ 203:
/***/ function(module, exports) {

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
	          _vm.switchTab(index)
	        }
	      }
	    }, [_vm._v("\n        " + _vm._s(tab.name) + "\n      ")])
	  })), _c('div', {
	    ref: "box",
	    staticClass: "el-pair-tabs__box"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ }

/******/ });