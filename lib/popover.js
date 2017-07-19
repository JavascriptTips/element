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

	module.exports = __webpack_require__(238);


/***/ },

/***/ 11:
/***/ function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/utils/vue-popper");

/***/ },

/***/ 53:
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },

/***/ 121:
/***/ function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/utils/dom");

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _main = __webpack_require__(239);

	var _main2 = _interopRequireDefault(_main);

	var _directive = __webpack_require__(242);

	var _directive2 = _interopRequireDefault(_directive);

	var _vue = __webpack_require__(53);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.directive('popover', _directive2.default);

	/* istanbul ignore next */
	_main2.default.install = function (Vue) {
	  Vue.directive('popover', _directive2.default);
	  Vue.component(_main2.default.name, _main2.default);
	};
	_main2.default.directive = _directive2.default;

	exports.default = _main2.default;

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(240)

	/* template */
	var __vue_template__ = __webpack_require__(241)
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

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vuePopper = __webpack_require__(11);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	var _dom = __webpack_require__(121);

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

	exports.default = {
	  name: 'ElPopover',

	  mixins: [_vuePopper2.default],

	  props: {
	    trigger: {
	      type: String,
	      default: 'click',
	      validator: function validator(value) {
	        return ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1;
	      }
	    },
	    title: String,
	    disabled: Boolean,
	    content: String,
	    reference: {},
	    popperClass: String,
	    width: {},
	    visibleArrow: {
	      default: true
	    },
	    closeTransition: Boolean,
	    transition: {
	      type: String,
	      default: 'fade-in-linear'
	    }
	  },

	  watch: {
	    showPopper: function showPopper(newVal, oldVal) {
	      newVal ? this.$emit('show') : this.$emit('hide');
	    }
	  },

	  mounted: function mounted() {
	    var reference = this.reference || this.$refs.reference;
	    var popper = this.popper || this.$refs.popper;

	    if (!reference && this.$slots.reference && this.$slots.reference[0]) {
	      reference = this.referenceElm = this.$slots.reference[0].elm;
	    }
	    if (this.trigger === 'click') {
	      (0, _dom.on)(reference, 'click', this.doToggle);
	      (0, _dom.on)(document, 'click', this.handleDocumentClick);
	    } else if (this.trigger === 'hover') {
	      (0, _dom.on)(reference, 'mouseenter', this.handleMouseEnter);
	      (0, _dom.on)(popper, 'mouseenter', this.handleMouseEnter);
	      (0, _dom.on)(reference, 'mouseleave', this.handleMouseLeave);
	      (0, _dom.on)(popper, 'mouseleave', this.handleMouseLeave);
	    } else if (this.trigger === 'focus') {
	      var found = false;

	      if ([].slice.call(reference.children).length) {
	        var children = reference.childNodes;
	        var len = children.length;
	        for (var i = 0; i < len; i++) {
	          if (children[i].nodeName === 'INPUT' || children[i].nodeName === 'TEXTAREA') {
	            (0, _dom.on)(children[i], 'focus', this.doShow);
	            (0, _dom.on)(children[i], 'blur', this.doClose);
	            found = true;
	            break;
	          }
	        }
	      }
	      if (found) return;
	      if (reference.nodeName === 'INPUT' || reference.nodeName === 'TEXTAREA') {
	        (0, _dom.on)(reference, 'focus', this.doShow);
	        (0, _dom.on)(reference, 'blur', this.doClose);
	      } else {
	        (0, _dom.on)(reference, 'mousedown', this.doShow);
	        (0, _dom.on)(reference, 'mouseup', this.doClose);
	      }
	    }
	  },


	  methods: {
	    doToggle: function doToggle() {
	      this.showPopper = !this.showPopper;
	    },
	    doShow: function doShow() {
	      this.showPopper = true;
	    },
	    doClose: function doClose() {
	      this.showPopper = false;
	    },
	    handleMouseEnter: function handleMouseEnter() {
	      this.showPopper = true;
	      clearTimeout(this._timer);
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      var _this = this;

	      this._timer = setTimeout(function () {
	        _this.showPopper = false;
	      }, 200);
	    },
	    handleDocumentClick: function handleDocumentClick(e) {
	      var reference = this.reference || this.$refs.reference;
	      var popper = this.popper || this.$refs.popper;

	      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
	        reference = this.referenceElm = this.$slots.reference[0].elm;
	      }
	      if (!this.$el || !reference || this.$el.contains(e.target) || reference.contains(e.target) || !popper || popper.contains(e.target)) return;
	      this.showPopper = false;
	    }
	  },

	  destroyed: function destroyed() {
	    var reference = this.reference;

	    (0, _dom.off)(reference, 'click', this.doToggle);
	    (0, _dom.off)(reference, 'mouseup', this.doClose);
	    (0, _dom.off)(reference, 'mousedown', this.doShow);
	    (0, _dom.off)(reference, 'focus', this.doShow);
	    (0, _dom.off)(reference, 'blur', this.doClose);
	    (0, _dom.off)(reference, 'mouseleave', this.handleMouseLeave);
	    (0, _dom.off)(reference, 'mouseenter', this.handleMouseEnter);
	    (0, _dom.off)(document, 'click', this.handleDocumentClick);
	  }
	};

/***/ },

/***/ 241:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', [(!_vm.closeTransition) ? _c('transition', {
	    attrs: {
	      "name": _vm.transition
	    },
	    on: {
	      "after-leave": _vm.doDestroy
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.disabled && _vm.showPopper),
	      expression: "!disabled && showPopper"
	    }],
	    ref: "popper",
	    staticClass: "el-popover",
	    class: [_vm.popperClass],
	    style: ({
	      width: _vm.width + 'px'
	    })
	  }, [(_vm.title) ? _c('div', {
	    staticClass: "el-popover__title",
	    domProps: {
	      "textContent": _vm._s(_vm.title)
	    }
	  }) : _vm._e(), _c('div', {
	    staticClass: "el-popover__content"
	  }, [_vm._t("default", [_c('span', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])], 2)])]) : _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showPopper),
	      expression: "showPopper"
	    }],
	    ref: "popper",
	    staticClass: "el-popover",
	    class: [_vm.popperClass],
	    style: ({
	      width: _vm.width + 'px'
	    })
	  }, [(_vm.title) ? _c('div', {
	    staticClass: "el-popover__title",
	    domProps: {
	      "textContent": _vm._s(_vm.title)
	    }
	  }) : _vm._e(), _c('div', {
	    staticClass: "el-popover__content"
	  }, [_vm._t("default", [_c('span', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])], 2)]), _vm._t("reference")], 2)
	},staticRenderFns: []}

/***/ },

/***/ 242:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = {
	  bind: function bind(el, binding, vnode) {
	    vnode.context.$refs[binding.arg].$refs.reference = el;
	  }
	};

/***/ }

/******/ });