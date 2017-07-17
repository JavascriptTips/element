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

	module.exports = __webpack_require__(229);


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

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _optionGroup = __webpack_require__(230);

	var _optionGroup2 = _interopRequireDefault(_optionGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_optionGroup2.default.install = function (Vue) {
	  Vue.component(_optionGroup2.default.name, _optionGroup2.default);
	};

	exports.default = _optionGroup2.default;

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(231)

	/* template */
	var __vue_template__ = __webpack_require__(232)
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

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_emitter2.default],

	  name: 'ElOptionGroup',

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

/***/ },

/***/ 232:
/***/ function(module, exports) {

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

/***/ }

/******/ });