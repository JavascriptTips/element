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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
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
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _autocomplete = __webpack_require__(7);

	var _autocomplete2 = _interopRequireDefault(_autocomplete);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_autocomplete2.default.install = function (Vue) {
	  Vue.component(_autocomplete2.default.name, _autocomplete2.default);
	};

	exports.default = _autocomplete2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(8),
	  /* template */
	  __webpack_require__(16),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _input = __webpack_require__(9);

	var _input2 = _interopRequireDefault(_input);

	var _clickoutside = __webpack_require__(10);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _autocompleteSuggestions = __webpack_require__(11);

	var _autocompleteSuggestions2 = _interopRequireDefault(_autocompleteSuggestions);

	var _emitter = __webpack_require__(15);

	var _emitter2 = _interopRequireDefault(_emitter);

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

	exports.default = {
	  name: 'ElAutocomplete',

	  mixins: [_emitter2.default],

	  components: {
	    ElInput: _input2.default,
	    ElAutocompleteSuggestions: _autocompleteSuggestions2.default
	  },

	  directives: { Clickoutside: _clickoutside2.default },

	  props: {
	    popperClass: String,
	    placeholder: String,
	    disabled: Boolean,
	    name: String,
	    size: String,
	    value: String,
	    fetchSuggestions: Function,
	    triggerOnFocus: {
	      type: Boolean,
	      default: true
	    },
	    customItem: String
	  },
	  data: function data() {
	    return {
	      suggestions: [],
	      suggestionVisible: false,
	      loading: false,
	      highlightedIndex: -1
	    };
	  },

	  watch: {
	    suggestionVisible: function suggestionVisible(val) {
	      this.broadcast('ElAutocompleteSuggestions', 'visible', [val, this.$refs.input.$refs.input.offsetWidth]);
	    }
	  },
	  methods: {
	    handleChange: function handleChange(value) {
	      this.$emit('input', value);
	      this.showSuggestions(value);
	    },
	    handleFocus: function handleFocus() {
	      if (this.triggerOnFocus) {
	        this.showSuggestions(this.value);
	      }
	    },
	    handleBlur: function handleBlur() {
	      this.hideSuggestions();
	    },
	    select: function select(index) {
	      var _this = this;

	      if (this.suggestions && this.suggestions[index]) {
	        this.$emit('input', this.suggestions[index].value);
	        this.$emit('select', this.suggestions[index]);
	        this.$nextTick(function () {
	          _this.hideSuggestions();
	        });
	      }
	    },
	    hideSuggestions: function hideSuggestions() {
	      this.suggestionVisible = false;
	      this.loading = false;
	    },
	    showSuggestions: function showSuggestions(value) {
	      var _this2 = this;

	      this.suggestionVisible = true;
	      this.loading = true;
	      this.fetchSuggestions(value, function (suggestions) {
	        _this2.loading = false;
	        if (Array.isArray(suggestions) && suggestions.length > 0) {
	          _this2.suggestions = suggestions;
	        } else {
	          _this2.hideSuggestions();
	        }
	      });
	    },
	    highlight: function highlight(index) {
	      if (!this.suggestionVisible || this.loading) {
	        return;
	      }
	      if (index < 0) {
	        index = 0;
	      } else if (index >= this.suggestions.length) {
	        index = this.suggestions.length - 1;
	      }
	      var elSuggestions = this.$refs.suggestions.$el;

	      var elSelect = elSuggestions.children[index];
	      var scrollTop = elSuggestions.scrollTop;
	      var offsetTop = elSelect.offsetTop;

	      if (offsetTop + elSelect.scrollHeight > scrollTop + elSuggestions.clientHeight) {
	        elSuggestions.scrollTop += elSelect.scrollHeight;
	      }
	      if (offsetTop < scrollTop) {
	        elSuggestions.scrollTop -= elSelect.scrollHeight;
	      }

	      this.highlightedIndex = index;
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$refs.suggestions.$destroy();
	  }
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/input");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/utils/clickoutside");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(12),
	  /* template */
	  __webpack_require__(14),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vuePopper = __webpack_require__(13);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_vuePopper2.default],

	  componentName: 'ElAutocompleteSuggestions',

	  data: function data() {
	    return {
	      parent: this.$parent,
	      dropdownWidth: ''
	    };
	  },


	  props: {
	    suggestions: Array,
	    options: {
	      default: function _default() {
	        return {
	          forceAbsolute: true,
	          gpuAcceleration: false
	        };
	      }
	    }
	  },

	  mounted: function mounted() {
	    this.popperElm = this.$el;
	    this.referenceElm = this.$parent.$refs.input.$refs.input;
	  },
	  created: function created() {
	    var _this = this;

	    this.$on('visible', function (val, inputWidth) {
	      _this.dropdownWidth = inputWidth + 'px';
	      _this.showPopper = val;
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

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/utils/vue-popper");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "el-zoom-in-top"
	    },
	    on: {
	      "after-leave": _vm.doDestroy
	    }
	  }, [_c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showPopper),
	      expression: "showPopper"
	    }],
	    staticClass: "el-autocomplete__suggestions",
	    class: {
	      'is-loading': _vm.parent.loading
	    },
	    style: ({
	      width: _vm.dropdownWidth
	    })
	  }, [(_vm.parent.loading) ? _c('li', [_c('i', {
	    staticClass: "el-icon-loading"
	  })]) : _vm._l((_vm.suggestions), function(item, index) {
	    return [(!_vm.parent.customItem) ? _c('li', {
	      class: {
	        'highlighted': _vm.parent.highlightedIndex === index
	      },
	      on: {
	        "click": function($event) {
	          _vm.parent.select(index)
	        }
	      }
	    }, [_vm._v("\n        " + _vm._s(item.value) + "\n      ")]) : _c(_vm.parent.customItem, {
	      tag: "component",
	      class: {
	        'highlighted': _vm.parent.highlightedIndex === index
	      },
	      attrs: {
	        "item": item,
	        "index": index
	      },
	      on: {
	        "click": function($event) {
	          _vm.parent.select(index)
	        }
	      }
	    })]
	  })], 2)])
	},staticRenderFns: []}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/mixins/emitter");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "clickoutside",
	      rawName: "v-clickoutside",
	      value: (_vm.handleBlur),
	      expression: "handleBlur"
	    }],
	    staticClass: "el-autocomplete"
	  }, [_c('el-input', {
	    ref: "input",
	    attrs: {
	      "value": _vm.value,
	      "disabled": _vm.disabled,
	      "placeholder": _vm.placeholder,
	      "name": _vm.name,
	      "size": _vm.size
	    },
	    on: {
	      "change": _vm.handleChange,
	      "focus": _vm.handleFocus
	    },
	    nativeOn: {
	      "keydown": [function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
	        _vm.highlight(_vm.highlightedIndex - 1)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
	        _vm.highlight(_vm.highlightedIndex + 1)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        $event.stopPropagation();
	        _vm.select(_vm.highlightedIndex)
	      }]
	    }
	  }, [(_vm.$slots.prepend) ? _c('template', {
	    slot: "prepend"
	  }, [_vm._t("prepend")], 2) : _vm._e(), (_vm.$slots.append) ? _c('template', {
	    slot: "append"
	  }, [_vm._t("append")], 2) : _vm._e()], 2), _c('el-autocomplete-suggestions', {
	    ref: "suggestions",
	    class: [_vm.popperClass ? _vm.popperClass : ''],
	    attrs: {
	      "suggestions": _vm.suggestions
	    }
	  })], 1)
	},staticRenderFns: []}

/***/ })
/******/ ]);