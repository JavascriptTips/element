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

	module.exports = __webpack_require__(244);


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

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _input = __webpack_require__(10);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_input2.default.install = function (Vue) {
	  Vue.component(_input2.default.name, _input2.default);
	};

	exports.default = _input2.default;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(11),
	  /* template */
	  __webpack_require__(15),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(12);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _calcTextareaHeight = __webpack_require__(13);

	var _calcTextareaHeight2 = _interopRequireDefault(_calcTextareaHeight);

	var _merge = __webpack_require__(14);

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
	      var autosize = this.autosize,
	          type = this.type;

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
	    var _this2 = this;

	    this.resizeTextarea();

	    this.$nextTick(function () {
	      if (_this2.autofocus) {
	        if (_this2.$refs.textarea) {
	          _this2.$refs.textarea.focus();
	        }
	        if (_this2.$refs.input) {
	          _this2.$refs.input.focus();
	        }
	      }
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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

/***/ 13:
/***/ (function(module, exports) {

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

	  var _calculateNodeStyling = calculateNodeStyling(targetNode),
	      paddingSize = _calculateNodeStyling.paddingSize,
	      borderSize = _calculateNodeStyling.borderSize,
	      boxSizing = _calculateNodeStyling.boxSizing,
	      contextStyle = _calculateNodeStyling.contextStyle;

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

/***/ 15:
/***/ (function(module, exports) {

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

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vue = __webpack_require__(19);

	var _vue2 = _interopRequireDefault(_vue);

	var _popup = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PopperJS = _vue2.default.prototype.$isServer ? function () {} : __webpack_require__(24);
	var stop = function stop(e) {
	  return e.stopPropagation();
	};

	/**
	 * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
	 * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
	 * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -end), left(-start, -end)
	 * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
	 * @param {Boolean} [visible=false] Visibility of the popup element.
	 * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
	 */
	exports.default = {
	  props: {
	    placement: {
	      type: String,
	      default: 'bottom'
	    },
	    boundariesPadding: {
	      type: Number,
	      default: 5
	    },
	    reference: {},
	    popper: {},
	    offset: {
	      default: 0
	    },
	    value: Boolean,
	    visibleArrow: Boolean,
	    transition: String,
	    appendToBody: {
	      type: Boolean,
	      default: true
	    },
	    popperOptions: {
	      type: Object,
	      default: function _default() {
	        return {
	          gpuAcceleration: false
	        };
	      }
	    }
	  },

	  data: function data() {
	    return {
	      showPopper: false,
	      currentPlacement: ''
	    };
	  },


	  watch: {
	    value: {
	      immediate: true,
	      handler: function handler(val) {
	        this.showPopper = val;
	        this.$emit('input', val);
	      }
	    },

	    showPopper: function showPopper(val) {
	      val ? this.updatePopper() : this.destroyPopper();
	      this.$emit('input', val);
	    }
	  },

	  methods: {
	    createPopper: function createPopper() {
	      var _this = this;

	      if (this.$isServer) return;
	      this.currentPlacement = this.currentPlacement || this.placement;
	      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
	        return;
	      }

	      var options = this.popperOptions;
	      var popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
	      var reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;

	      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
	        reference = this.referenceElm = this.$slots.reference[0].elm;
	      }

	      if (!popper || !reference) return;
	      if (this.visibleArrow) this.appendArrow(popper);
	      if (this.appendToBody) {
	        document.body.appendChild(this.popperElm);
	      };
	      if (this.popperJS && this.popperJS.destroy) {
	        this.popperJS.destroy();
	      }

	      options.placement = this.currentPlacement;
	      options.offset = this.offset;
	      this.popperJS = new PopperJS(reference, popper, options);
	      this.popperJS.onCreate(function (_) {
	        _this.$emit('created', _this);
	        _this.resetTransformOrigin();
	        _this.$nextTick(_this.updatePopper);
	      });
	      if (typeof options.onUpdate === 'function') {
	        this.popperJS.onUpdate(options.onUpdate);
	      }
	      this.popperJS._popper.style.zIndex = _popup.PopupManager.nextZIndex();
	      this.popperElm.addEventListener('click', stop);
	    },
	    updatePopper: function updatePopper() {
	      this.popperJS ? this.popperJS.update() : this.createPopper();
	    },
	    doDestroy: function doDestroy() {
	      /* istanbul ignore if */
	      if (this.showPopper || !this.popperJS) return;
	      this.popperJS.destroy();
	      this.popperJS = null;
	    },
	    destroyPopper: function destroyPopper() {
	      if (this.popperJS) {
	        this.resetTransformOrigin();
	      }
	    },
	    resetTransformOrigin: function resetTransformOrigin() {
	      var placementMap = {
	        top: 'bottom',
	        bottom: 'top',
	        left: 'right',
	        right: 'left'
	      };
	      var placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];
	      var origin = placementMap[placement];
	      this.popperJS._popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1 ? 'center ' + origin : origin + ' center';
	    },
	    appendArrow: function appendArrow(element) {
	      var hash = void 0;
	      if (this.appended) {
	        return;
	      }

	      this.appended = true;

	      for (var item in element.attributes) {
	        if (/^_v-/.test(element.attributes[item].name)) {
	          hash = element.attributes[item].name;
	          break;
	        }
	      }

	      var arrow = document.createElement('div');

	      if (hash) {
	        arrow.setAttribute(hash, '');
	      }
	      arrow.setAttribute('x-arrow', '');
	      arrow.className = 'popper__arrow';
	      element.appendChild(arrow);
	    }
	  },

	  beforeDestroy: function beforeDestroy() {
	    this.doDestroy();
	    if (this.popperElm && this.popperElm.parentNode === document.body) {
	      this.popperElm.removeEventListener('click', stop);
	      document.body.removeChild(this.popperElm);
	    }
	  },


	  // call destroy in keep-alive mode
	  deactivated: function deactivated() {
	    this.$options.beforeDestroy[0].call(this);
	  }
	};

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

	module.exports = require("vue");

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.PopupManager = undefined;

	var _vue = __webpack_require__(19);

	var _vue2 = _interopRequireDefault(_vue);

	var _merge = __webpack_require__(14);

	var _merge2 = _interopRequireDefault(_merge);

	var _popupManager = __webpack_require__(21);

	var _popupManager2 = _interopRequireDefault(_popupManager);

	var _scrollbarWidth = __webpack_require__(23);

	var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var idSeed = 1;
	var transitions = [];

	var hookTransition = function hookTransition(transition) {
	  if (transitions.indexOf(transition) !== -1) return;

	  var getVueInstance = function getVueInstance(element) {
	    var instance = element.__vue__;
	    if (!instance) {
	      var textNode = element.previousSibling;
	      if (textNode.__vue__) {
	        instance = textNode.__vue__;
	      }
	    }
	    return instance;
	  };

	  _vue2.default.transition(transition, {
	    afterEnter: function afterEnter(el) {
	      var instance = getVueInstance(el);

	      if (instance) {
	        instance.doAfterOpen && instance.doAfterOpen();
	      }
	    },
	    afterLeave: function afterLeave(el) {
	      var instance = getVueInstance(el);

	      if (instance) {
	        instance.doAfterClose && instance.doAfterClose();
	      }
	    }
	  });
	};

	var scrollBarWidth = void 0;

	var getDOM = function getDOM(dom) {
	  if (dom.nodeType === 3) {
	    dom = dom.nextElementSibling || dom.nextSibling;
	    getDOM(dom);
	  }
	  return dom;
	};

	exports.default = {
	  model: {
	    prop: 'visible',
	    event: 'visible-change'
	  },
	  props: {
	    visible: {
	      type: Boolean,
	      default: false
	    },
	    transition: {
	      type: String,
	      default: ''
	    },
	    openDelay: {},
	    closeDelay: {},
	    zIndex: {},
	    modal: {
	      type: Boolean,
	      default: false
	    },
	    modalFade: {
	      type: Boolean,
	      default: true
	    },
	    modalClass: {},
	    modalAppendToBody: {
	      type: Boolean,
	      default: false
	    },
	    lockScroll: {
	      type: Boolean,
	      default: true
	    },
	    closeOnPressEscape: {
	      type: Boolean,
	      default: false
	    },
	    closeOnClickModal: {
	      type: Boolean,
	      default: false
	    }
	  },

	  created: function created() {
	    if (this.transition) {
	      hookTransition(this.transition);
	    }
	  },
	  beforeMount: function beforeMount() {
	    this._popupId = 'popup-' + idSeed++;
	    _popupManager2.default.register(this._popupId, this);
	  },
	  beforeDestroy: function beforeDestroy() {
	    _popupManager2.default.deregister(this._popupId);
	    _popupManager2.default.closeModal(this._popupId);
	    if (this.modal && this.bodyOverflow !== null && this.bodyOverflow !== 'hidden') {
	      document.body.style.overflow = this.bodyOverflow;
	      document.body.style.paddingRight = this.bodyPaddingRight;
	    }
	    this.bodyOverflow = null;
	    this.bodyPaddingRight = null;
	  },
	  data: function data() {
	    return {
	      opened: false,
	      bodyOverflow: null,
	      bodyPaddingRight: null,
	      rendered: false
	    };
	  },


	  watch: {
	    visible: function visible(val) {
	      var _this = this;

	      if (val) {
	        if (this._opening) return;
	        if (!this.rendered) {
	          this.rendered = true;
	          _vue2.default.nextTick(function () {
	            _this.open();
	          });
	        } else {
	          this.open();
	        }
	      } else {
	        this.close();
	      }
	    }
	  },

	  methods: {
	    open: function open(options) {
	      var _this2 = this;

	      if (!this.rendered) {
	        this.rendered = true;
	        this.$emit('visible-change', true);
	      }

	      var props = (0, _merge2.default)({}, this.$props || this, options);

	      if (this._closeTimer) {
	        clearTimeout(this._closeTimer);
	        this._closeTimer = null;
	      }
	      clearTimeout(this._openTimer);

	      var openDelay = Number(props.openDelay);
	      if (openDelay > 0) {
	        this._openTimer = setTimeout(function () {
	          _this2._openTimer = null;
	          _this2.doOpen(props);
	        }, openDelay);
	      } else {
	        this.doOpen(props);
	      }
	    },
	    doOpen: function doOpen(props) {
	      if (this.$isServer) return;
	      if (this.willOpen && !this.willOpen()) return;
	      if (this.opened) return;

	      this._opening = true;

	      this.$emit('visible-change', true);

	      var dom = getDOM(this.$el);
	      var modal = props.modal;

	      var zIndex = props.zIndex;
	      if (zIndex) {
	        _popupManager2.default.zIndex = zIndex;
	      }

	      if (modal) {
	        if (this._closing) {
	          _popupManager2.default.closeModal(this._popupId);
	          this._closing = false;
	        }
	        _popupManager2.default.openModal(this._popupId, _popupManager2.default.nextZIndex(), this.modalAppendToBody ? undefined : dom, props.modalClass, props.modalFade);
	        if (props.lockScroll) {
	          if (!this.bodyOverflow) {
	            this.bodyPaddingRight = document.body.style.paddingRight;
	            this.bodyOverflow = document.body.style.overflow;
	          }
	          scrollBarWidth = (0, _scrollbarWidth2.default)();
	          var bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
	          if (scrollBarWidth > 0 && bodyHasOverflow) {
	            document.body.style.paddingRight = scrollBarWidth + 'px';
	          }
	          document.body.style.overflow = 'hidden';
	        }
	      }

	      if (getComputedStyle(dom).position === 'static') {
	        dom.style.position = 'absolute';
	      }

	      dom.style.zIndex = _popupManager2.default.nextZIndex();
	      this.opened = true;

	      this.onOpen && this.onOpen();

	      if (!this.transition) {
	        this.doAfterOpen();
	      }
	    },
	    doAfterOpen: function doAfterOpen() {
	      this._opening = false;
	    },
	    close: function close() {
	      var _this3 = this;

	      if (this.willClose && !this.willClose()) return;

	      if (this._openTimer !== null) {
	        clearTimeout(this._openTimer);
	        this._openTimer = null;
	      }
	      clearTimeout(this._closeTimer);

	      var closeDelay = Number(this.closeDelay);

	      if (closeDelay > 0) {
	        this._closeTimer = setTimeout(function () {
	          _this3._closeTimer = null;
	          _this3.doClose();
	        }, closeDelay);
	      } else {
	        this.doClose();
	      }
	    },
	    doClose: function doClose() {
	      var _this4 = this;

	      this.$emit('visible-change', false);
	      this._closing = true;

	      this.onClose && this.onClose();

	      if (this.lockScroll) {
	        setTimeout(function () {
	          if (_this4.modal && _this4.bodyOverflow !== 'hidden') {
	            document.body.style.overflow = _this4.bodyOverflow;
	            document.body.style.paddingRight = _this4.bodyPaddingRight;
	          }
	          _this4.bodyOverflow = null;
	          _this4.bodyPaddingRight = null;
	        }, 200);
	      }

	      this.opened = false;

	      if (!this.transition) {
	        this.doAfterClose();
	      }
	    },
	    doAfterClose: function doAfterClose() {
	      _popupManager2.default.closeModal(this._popupId);
	      this._closing = false;
	    }
	  }
	};
	exports.PopupManager = _popupManager2.default;

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vue = __webpack_require__(19);

	var _vue2 = _interopRequireDefault(_vue);

	var _dom = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hasModal = false;

	var getModal = function getModal() {
	  if (_vue2.default.prototype.$isServer) return;
	  var modalDom = PopupManager.modalDom;
	  if (modalDom) {
	    hasModal = true;
	  } else {
	    hasModal = false;
	    modalDom = document.createElement('div');
	    PopupManager.modalDom = modalDom;

	    modalDom.addEventListener('touchmove', function (event) {
	      event.preventDefault();
	      event.stopPropagation();
	    });

	    modalDom.addEventListener('click', function () {
	      PopupManager.doOnModalClick && PopupManager.doOnModalClick();
	    });
	  }

	  return modalDom;
	};

	var instances = {};

	var PopupManager = {
	  zIndex: 2000,

	  modalFade: true,

	  getInstance: function getInstance(id) {
	    return instances[id];
	  },

	  register: function register(id, instance) {
	    if (id && instance) {
	      instances[id] = instance;
	    }
	  },

	  deregister: function deregister(id) {
	    if (id) {
	      instances[id] = null;
	      delete instances[id];
	    }
	  },

	  nextZIndex: function nextZIndex() {
	    return PopupManager.zIndex++;
	  },

	  modalStack: [],

	  doOnModalClick: function doOnModalClick() {
	    var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
	    if (!topItem) return;

	    var instance = PopupManager.getInstance(topItem.id);
	    if (instance && instance.closeOnClickModal) {
	      instance.close();
	    }
	  },

	  openModal: function openModal(id, zIndex, dom, modalClass, modalFade) {
	    if (_vue2.default.prototype.$isServer) return;
	    if (!id || zIndex === undefined) return;
	    this.modalFade = modalFade;

	    var modalStack = this.modalStack;

	    for (var i = 0, j = modalStack.length; i < j; i++) {
	      var item = modalStack[i];
	      if (item.id === id) {
	        return;
	      }
	    }

	    var modalDom = getModal();

	    (0, _dom.addClass)(modalDom, 'v-modal');
	    if (this.modalFade && !hasModal) {
	      (0, _dom.addClass)(modalDom, 'v-modal-enter');
	    }
	    if (modalClass) {
	      var classArr = modalClass.trim().split(/\s+/);
	      classArr.forEach(function (item) {
	        return (0, _dom.addClass)(modalDom, item);
	      });
	    }
	    setTimeout(function () {
	      (0, _dom.removeClass)(modalDom, 'v-modal-enter');
	    }, 200);

	    var modalParent = null;
	    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
	      dom.parentNode.appendChild(modalDom);
	      modalParent = dom.parentNode;
	    } else {
	      document.body.appendChild(modalDom);
	      modalParent = document.body;
	    }

	    if (zIndex) {
	      modalDom.style.zIndex = zIndex;
	    }
	    modalDom.style.display = '';

	    this.modalStack.push({
	      id: id,
	      zIndex: zIndex,
	      modalClass: modalClass,
	      modalParent: modalParent
	    });
	  },

	  closeModal: function closeModal(id) {
	    var modalStack = this.modalStack;
	    var modalDom = getModal();

	    if (modalStack.length > 0) {
	      var topItem = modalStack[modalStack.length - 1];
	      if (topItem.id === id) {
	        if (topItem.modalClass) {
	          var classArr = topItem.modalClass.trim().split(/\s+/);
	          classArr.forEach(function (item) {
	            return (0, _dom.removeClass)(modalDom, item);
	          });
	        }

	        modalStack.pop();
	        if (modalStack.length > 0) {
	          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
	          modalStack[modalStack.length - 1].modalParent.appendChild(modalDom);
	        }
	      } else {
	        for (var i = modalStack.length - 1; i >= 0; i--) {
	          if (modalStack[i].id === id) {
	            modalStack.splice(i, 1);
	            break;
	          }
	        }
	      }
	    }

	    if (modalStack.length === 0) {
	      if (this.modalFade) {
	        (0, _dom.addClass)(modalDom, 'v-modal-leave');
	      }
	      setTimeout(function () {
	        if (modalStack.length === 0) {
	          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
	          modalDom.style.display = 'none';
	          PopupManager.modalDom = undefined;
	        }
	        (0, _dom.removeClass)(modalDom, 'v-modal-leave');
	      }, 200);
	    }
	  }
	};

	var getTopPopup = function getTopPopup() {
	  if (_vue2.default.prototype.$isServer) return;
	  if (PopupManager.modalStack.length > 0) {
	    var topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
	    if (!topPopup) return;
	    var instance = PopupManager.getInstance(topPopup.id);

	    return instance;
	  }
	};

	if (!_vue2.default.prototype.$isServer) {
	  // handle `esc` key when the popup is shown
	  window.addEventListener('keydown', function (event) {
	    if (event.keyCode === 27) {
	      var topPopup = getTopPopup();

	      if (topPopup && topPopup.closeOnPressEscape) {
	        topPopup.handleClose ? topPopup.handleClose() : topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close();
	      }
	    }
	  });
	}

	exports.default = PopupManager;

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getStyle = exports.once = exports.off = exports.on = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* istanbul ignore next */

	exports.hasClass = hasClass;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.setStyle = setStyle;

	var _vue = __webpack_require__(19);

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

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function () {
	  if (_vue2.default.prototype.$isServer) return 0;
	  if (scrollBarWidth !== undefined) return scrollBarWidth;

	  var outer = document.createElement('div');
	  outer.className = 'el-scrollbar__wrap';
	  outer.style.visibility = 'hidden';
	  outer.style.width = '100px';
	  outer.style.position = 'absolute';
	  outer.style.top = '-9999px';
	  document.body.appendChild(outer);

	  var widthNoScroll = outer.offsetWidth - 17;
	  outer.style.overflow = 'scroll';

	  var inner = document.createElement('div');
	  inner.style.width = '100%';
	  outer.appendChild(inner);

	  var widthWithScroll = inner.offsetWidth;
	  outer.parentNode.removeChild(outer);
	  scrollBarWidth = widthNoScroll - widthWithScroll;

	  return scrollBarWidth;
	};

	var _vue = __webpack_require__(19);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var scrollBarWidth = void 0;

	;

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version {{version}}
	 * @license
	 * Copyright (c) 2016 Federico Zivolo and contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */

	//
	// Cross module loader
	// Supported: Node, AMD, Browser globals
	//
	;(function (root, factory) {
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module === 'object' && module.exports) {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like environments that support module.exports,
	        // like Node.
	        module.exports = factory();
	    } else {
	        // Browser globals (root is window)
	        root.Popper = factory();
	    }
	}(this, function () {

	    'use strict';

	    var root = window;

	    // default options
	    var DEFAULTS = {
	        // placement of the popper
	        placement: 'bottom',

	        gpuAcceleration: true,

	        // shift popper from its origin by the given amount of pixels (can be negative)
	        offset: 0,

	        // the element which will act as boundary of the popper
	        boundariesElement: 'viewport',

	        // amount of pixel used to define a minimum distance between the boundaries and the popper
	        boundariesPadding: 5,

	        // popper will try to prevent overflow following this order,
	        // by default, then, it could overflow on the left and on top of the boundariesElement
	        preventOverflowOrder: ['left', 'right', 'top', 'bottom'],

	        // the behavior used by flip to change the placement of the popper
	        flipBehavior: 'flip',

	        arrowElement: '[x-arrow]',

	        // list of functions used to modify the offsets before they are applied to the popper
	        modifiers: [ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],

	        modifiersIgnored: [],

	        forceAbsolute: false
	    };

	    /**
	     * Create a new Popper.js instance
	     * @constructor Popper
	     * @param {HTMLElement} reference - The reference element used to position the popper
	     * @param {HTMLElement|Object} popper
	     *      The HTML element used as popper, or a configuration used to generate the popper.
	     * @param {String} [popper.tagName='div'] The tag name of the generated popper.
	     * @param {Array} [popper.classNames=['popper']] Array of classes to apply to the generated popper.
	     * @param {Array} [popper.attributes] Array of attributes to apply, specify `attr:value` to assign a value to it.
	     * @param {HTMLElement|String} [popper.parent=window.document.body] The parent element, given as HTMLElement or as query string.
	     * @param {String} [popper.content=''] The content of the popper, it can be text, html, or node; if it is not text, set `contentType` to `html` or `node`.
	     * @param {String} [popper.contentType='text'] If `html`, the `content` will be parsed as HTML. If `node`, it will be appended as-is.
	     * @param {String} [popper.arrowTagName='div'] Same as `popper.tagName` but for the arrow element.
	     * @param {Array} [popper.arrowClassNames='popper__arrow'] Same as `popper.classNames` but for the arrow element.
	     * @param {String} [popper.arrowAttributes=['x-arrow']] Same as `popper.attributes` but for the arrow element.
	     * @param {Object} options
	     * @param {String} [options.placement=bottom]
	     *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -right),
	     *      left(-start, -end)`
	     *
	     * @param {HTMLElement|String} [options.arrowElement='[x-arrow]']
	     *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
	     *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
	     *      reference element.
	     *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
	     *
	     * @param {Boolean} [options.gpuAcceleration=true]
	     *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
	     *      browser to use the GPU to accelerate the rendering.
	     *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
	     *
	     * @param {Number} [options.offset=0]
	     *      Amount of pixels the popper will be shifted (can be negative).
	     *
	     * @param {String|Element} [options.boundariesElement='viewport']
	     *      The element which will define the boundaries of the popper position, the popper will never be placed outside
	     *      of the defined boundaries (except if `keepTogether` is enabled)
	     *
	     * @param {Number} [options.boundariesPadding=5]
	     *      Additional padding for the boundaries
	     *
	     * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
	     *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
	     *      this means that the last ones will never overflow
	     *
	     * @param {String|Array} [options.flipBehavior='flip']
	     *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
	     *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
	     *      its axis (`right - left`, `top - bottom`).
	     *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
	     *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
	     *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
	     *
	     * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
	     *      List of functions used to modify the data before they are applied to the popper, add your custom functions
	     *      to this array to edit the offsets and placement.
	     *      The function should reflect the @params and @returns of preventOverflow
	     *
	     * @param {Array} [options.modifiersIgnored=[]]
	     *      Put here any built-in modifier name you want to exclude from the modifiers list
	     *      The function should reflect the @params and @returns of preventOverflow
	     *
	     * @param {Boolean} [options.removeOnDestroy=false]
	     *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
	     */
	    function Popper(reference, popper, options) {
	        this._reference = reference.jquery ? reference[0] : reference;
	        this.state = {};

	        // if the popper variable is a configuration object, parse it to generate an HTMLElement
	        // generate a default popper if is not defined
	        var isNotDefined = typeof popper === 'undefined' || popper === null;
	        var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
	        if (isNotDefined || isConfig) {
	            this._popper = this.parse(isConfig ? popper : {});
	        }
	        // otherwise, use the given HTMLElement as popper
	        else {
	            this._popper = popper.jquery ? popper[0] : popper;
	        }

	        // with {} we create a new object with the options inside it
	        this._options = Object.assign({}, DEFAULTS, options);

	        // refactoring modifiers' list
	        this._options.modifiers = this._options.modifiers.map(function(modifier){
	            // remove ignored modifiers
	            if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return;

	            // set the x-placement attribute before everything else because it could be used to add margins to the popper
	            // margins needs to be calculated to get the correct popper offsets
	            if (modifier === 'applyStyle') {
	                this._popper.setAttribute('x-placement', this._options.placement);
	            }

	            // return predefined modifier identified by string or keep the custom one
	            return this.modifiers[modifier] || modifier;
	        }.bind(this));

	        // make sure to apply the popper position before any computation
	        this.state.position = this._getPosition(this._popper, this._reference);
	        setStyle(this._popper, { position: this.state.position, top: 0 });

	        // fire the first update to position the popper in the right place
	        this.update();

	        // setup event listeners, they will take care of update the position in specific situations
	        this._setupEventListeners();
	        return this;
	    }


	    //
	    // Methods
	    //
	    /**
	     * Destroy the popper
	     * @method
	     * @memberof Popper
	     */
	    Popper.prototype.destroy = function() {
	        this._popper.removeAttribute('x-placement');
	        this._popper.style.left = '';
	        this._popper.style.position = '';
	        this._popper.style.top = '';
	        this._popper.style[getSupportedPropertyName('transform')] = '';
	        this._removeEventListeners();

	        // remove the popper if user explicity asked for the deletion on destroy
	        if (this._options.removeOnDestroy) {
	            this._popper.remove();
	        }
	        return this;
	    };

	    /**
	     * Updates the position of the popper, computing the new offsets and applying the new style
	     * @method
	     * @memberof Popper
	     */
	    Popper.prototype.update = function() {
	        var data = { instance: this, styles: {} };

	        // store placement inside the data object, modifiers will be able to edit `placement` if needed
	        // and refer to _originalPlacement to know the original value
	        data.placement = this._options.placement;
	        data._originalPlacement = this._options.placement;

	        // compute the popper and reference offsets and put them inside data.offsets
	        data.offsets = this._getOffsets(this._popper, this._reference, data.placement);

	        // get boundaries
	        data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);

	        data = this.runModifiers(data, this._options.modifiers);

	        if (typeof this.state.updateCallback === 'function') {
	            this.state.updateCallback(data);
	        }

	    };

	    /**
	     * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
	     * @method
	     * @memberof Popper
	     * @param {Function} callback
	     */
	    Popper.prototype.onCreate = function(callback) {
	        // the createCallbacks return as first argument the popper instance
	        callback(this);
	        return this;
	    };

	    /**
	     * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
	     * used to style popper and its arrow.
	     * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
	     * @method
	     * @memberof Popper
	     * @param {Function} callback
	     */
	    Popper.prototype.onUpdate = function(callback) {
	        this.state.updateCallback = callback;
	        return this;
	    };

	    /**
	     * Helper used to generate poppers from a configuration file
	     * @method
	     * @memberof Popper
	     * @param config {Object} configuration
	     * @returns {HTMLElement} popper
	     */
	    Popper.prototype.parse = function(config) {
	        var defaultConfig = {
	            tagName: 'div',
	            classNames: [ 'popper' ],
	            attributes: [],
	            parent: root.document.body,
	            content: '',
	            contentType: 'text',
	            arrowTagName: 'div',
	            arrowClassNames: [ 'popper__arrow' ],
	            arrowAttributes: [ 'x-arrow']
	        };
	        config = Object.assign({}, defaultConfig, config);

	        var d = root.document;

	        var popper = d.createElement(config.tagName);
	        addClassNames(popper, config.classNames);
	        addAttributes(popper, config.attributes);
	        if (config.contentType === 'node') {
	            popper.appendChild(config.content.jquery ? config.content[0] : config.content);
	        }else if (config.contentType === 'html') {
	            popper.innerHTML = config.content;
	        } else {
	            popper.textContent = config.content;
	        }

	        if (config.arrowTagName) {
	            var arrow = d.createElement(config.arrowTagName);
	            addClassNames(arrow, config.arrowClassNames);
	            addAttributes(arrow, config.arrowAttributes);
	            popper.appendChild(arrow);
	        }

	        var parent = config.parent.jquery ? config.parent[0] : config.parent;

	        // if the given parent is a string, use it to match an element
	        // if more than one element is matched, the first one will be used as parent
	        // if no elements are matched, the script will throw an error
	        if (typeof parent === 'string') {
	            parent = d.querySelectorAll(config.parent);
	            if (parent.length > 1) {
	                console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
	            }
	            if (parent.length === 0) {
	                throw 'ERROR: the given `parent` doesn\'t exists!';
	            }
	            parent = parent[0];
	        }
	        // if the given parent is a DOM nodes list or an array of nodes with more than one element,
	        // the first one will be used as parent
	        if (parent.length > 1 && parent instanceof Element === false) {
	            console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
	            parent = parent[0];
	        }

	        // append the generated popper to its parent
	        parent.appendChild(popper);

	        return popper;

	        /**
	         * Adds class names to the given element
	         * @function
	         * @ignore
	         * @param {HTMLElement} target
	         * @param {Array} classes
	         */
	        function addClassNames(element, classNames) {
	            classNames.forEach(function(className) {
	                element.classList.add(className);
	            });
	        }

	        /**
	         * Adds attributes to the given element
	         * @function
	         * @ignore
	         * @param {HTMLElement} target
	         * @param {Array} attributes
	         * @example
	         * addAttributes(element, [ 'data-info:foobar' ]);
	         */
	        function addAttributes(element, attributes) {
	            attributes.forEach(function(attribute) {
	                element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
	            });
	        }

	    };

	    /**
	     * Helper used to get the position which will be applied to the popper
	     * @method
	     * @memberof Popper
	     * @param config {HTMLElement} popper element
	     * @param reference {HTMLElement} reference element
	     * @returns {String} position
	     */
	    Popper.prototype._getPosition = function(popper, reference) {
	        var container = getOffsetParent(reference);

	        if (this._options.forceAbsolute) {
	            return 'absolute';
	        }

	        // Decide if the popper will be fixed
	        // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
	        var isParentFixed = isFixed(reference, container);
	        return isParentFixed ? 'fixed' : 'absolute';
	    };

	    /**
	     * Get offsets to the popper
	     * @method
	     * @memberof Popper
	     * @access private
	     * @param {Element} popper - the popper element
	     * @param {Element} reference - the reference element (the popper will be relative to this)
	     * @returns {Object} An object containing the offsets which will be applied to the popper
	     */
	    Popper.prototype._getOffsets = function(popper, reference, placement) {
	        placement = placement.split('-')[0];
	        var popperOffsets = {};

	        popperOffsets.position = this.state.position;
	        var isParentFixed = popperOffsets.position === 'fixed';

	        //
	        // Get reference element position
	        //
	        var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed);

	        //
	        // Get popper sizes
	        //
	        var popperRect = getOuterSizes(popper);

	        //
	        // Compute offsets of popper
	        //

	        // depending by the popper placement we have to compute its offsets slightly differently
	        if (['right', 'left'].indexOf(placement) !== -1) {
	            popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
	            if (placement === 'left') {
	                popperOffsets.left = referenceOffsets.left - popperRect.width;
	            } else {
	                popperOffsets.left = referenceOffsets.right;
	            }
	        } else {
	            popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
	            if (placement === 'top') {
	                popperOffsets.top = referenceOffsets.top - popperRect.height;
	            } else {
	                popperOffsets.top = referenceOffsets.bottom;
	            }
	        }
	        // Add width and height to our offsets object
	        popperOffsets.width   = popperRect.width;
	        popperOffsets.height  = popperRect.height;

	        return {
	            popper: popperOffsets,
	            reference: referenceOffsets
	        };
	    };


	    /**
	     * Setup needed event listeners used to update the popper position
	     * @method
	     * @memberof Popper
	     * @access private
	     */
	    Popper.prototype._setupEventListeners = function() {
	        // NOTE: 1 DOM access here
	        this.state.updateBound = this.update.bind(this);
	        root.addEventListener('resize', this.state.updateBound);
	        // if the boundariesElement is window we don't need to listen for the scroll event
	        if (this._options.boundariesElement !== 'window') {
	            var target = getScrollParent(this._reference);
	            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
	            if (target === root.document.body || target === root.document.documentElement) {
	                target = root;
	            }
	            target.addEventListener('scroll', this.state.updateBound);
	        }
	    };

	    /**
	     * Remove event listeners used to update the popper position
	     * @method
	     * @memberof Popper
	     * @access private
	     */
	    Popper.prototype._removeEventListeners = function() {
	        // NOTE: 1 DOM access here
	        root.removeEventListener('resize', this.state.updateBound);
	        if (this._options.boundariesElement !== 'window') {
	            var target = getScrollParent(this._reference);
	            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
	            if (target === root.document.body || target === root.document.documentElement) {
	                target = root;
	            }
	            target.removeEventListener('scroll', this.state.updateBound);
	        }
	        this.state.updateBound = null;
	    };

	    /**
	     * Computed the boundaries limits and return them
	     * @method
	     * @memberof Popper
	     * @access private
	     * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
	     * @param {Number} padding - Boundaries padding
	     * @param {Element} boundariesElement - Element used to define the boundaries
	     * @returns {Object} Coordinates of the boundaries
	     */
	    Popper.prototype._getBoundaries = function(data, padding, boundariesElement) {
	        // NOTE: 1 DOM access here
	        var boundaries = {};
	        var width, height;
	        if (boundariesElement === 'window') {
	            var body = root.document.body,
	                html = root.document.documentElement;

	            height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	            width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );

	            boundaries = {
	                top: 0,
	                right: width,
	                bottom: height,
	                left: 0
	            };
	        } else if (boundariesElement === 'viewport') {
	            var offsetParent = getOffsetParent(this._popper);
	            var scrollParent = getScrollParent(this._popper);
	            var offsetParentRect = getOffsetRect(offsetParent);

				// Thanks the fucking native API, `document.body.scrollTop` & `document.documentElement.scrollTop`
				var getScrollTopValue = function (element) {
					return element == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : element.scrollTop;
				}
				var getScrollLeftValue = function (element) {
					return element == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : element.scrollLeft;
				}

	            // if the popper is fixed we don't have to substract scrolling from the boundaries
	            var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : getScrollTopValue(scrollParent);
	            var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : getScrollLeftValue(scrollParent);

	            boundaries = {
	                top: 0 - (offsetParentRect.top - scrollTop),
	                right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
	                bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
	                left: 0 - (offsetParentRect.left - scrollLeft)
	            };
	        } else {
	            if (getOffsetParent(this._popper) === boundariesElement) {
	                boundaries = {
	                    top: 0,
	                    left: 0,
	                    right: boundariesElement.clientWidth,
	                    bottom: boundariesElement.clientHeight
	                };
	            } else {
	                boundaries = getOffsetRect(boundariesElement);
	            }
	        }
	        boundaries.left += padding;
	        boundaries.right -= padding;
	        boundaries.top = boundaries.top + padding;
	        boundaries.bottom = boundaries.bottom - padding;
	        return boundaries;
	    };


	    /**
	     * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
	     * @method
	     * @memberof Popper
	     * @access public
	     * @param {Object} data
	     * @param {Array} modifiers
	     * @param {Function} ends
	     */
	    Popper.prototype.runModifiers = function(data, modifiers, ends) {
	        var modifiersToRun = modifiers.slice();
	        if (ends !== undefined) {
	            modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
	        }

	        modifiersToRun.forEach(function(modifier) {
	            if (isFunction(modifier)) {
	                data = modifier.call(this, data);
	            }
	        }.bind(this));

	        return data;
	    };

	    /**
	     * Helper used to know if the given modifier depends from another one.
	     * @method
	     * @memberof Popper
	     * @param {String} requesting - name of requesting modifier
	     * @param {String} requested - name of requested modifier
	     * @returns {Boolean}
	     */
	    Popper.prototype.isModifierRequired = function(requesting, requested) {
	        var index = getArrayKeyIndex(this._options.modifiers, requesting);
	        return !!this._options.modifiers.slice(0, index).filter(function(modifier) {
	            return modifier === requested;
	        }).length;
	    };

	    //
	    // Modifiers
	    //

	    /**
	     * Modifiers list
	     * @namespace Popper.modifiers
	     * @memberof Popper
	     * @type {Object}
	     */
	    Popper.prototype.modifiers = {};

	    /**
	     * Apply the computed styles to the popper element
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @returns {Object} The same data object
	     */
	    Popper.prototype.modifiers.applyStyle = function(data) {
	        // apply the final offsets to the popper
	        // NOTE: 1 DOM access here
	        var styles = {
	            position: data.offsets.popper.position
	        };

	        // round top and left to avoid blurry text
	        var left = Math.round(data.offsets.popper.left);
	        var top = Math.round(data.offsets.popper.top);

	        // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
	        // we automatically use the supported prefixed version if needed
	        var prefixedProperty;
	        if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
	            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	            styles.top = 0;
	            styles.left = 0;
	        }
	        // othwerise, we use the standard `left` and `top` properties
	        else {
	            styles.left =left;
	            styles.top = top;
	        }

	        // any property present in `data.styles` will be applied to the popper,
	        // in this way we can make the 3rd party modifiers add custom styles to it
	        // Be aware, modifiers could override the properties defined in the previous
	        // lines of this modifier!
	        Object.assign(styles, data.styles);

	        if(data.offsets.arrow && this.modifiers.arrow && data.placement !== 'right' && data.placement !== 'left'){
	          // 箭头和边的最小间隔 15, 除了框了在左右两边的除外
	          if(data.offsets.arrow.left <= 15){
	            styles.left -= 15;
	            data.offsets.arrow.left = 15;
	          }
	        }

	        setStyle(this._popper, styles);

	        // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
	        // NOTE: 1 DOM access here
	        this._popper.setAttribute('x-placement', data.placement);

	        // if the arrow modifier is required and the arrow style has been computed, apply the arrow style
	        if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
	            setStyle(data.arrowElement, data.offsets.arrow);
	        }

	        return data;
	    };

	    /**
	     * Modifier used to shift the popper on the start or end of its reference element side
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.shift = function(data) {
	        var placement = data.placement;
	        var basePlacement = placement.split('-')[0];
	        var shiftVariation = placement.split('-')[1];

	        // if shift shiftVariation is specified, run the modifier
	        if (shiftVariation) {
	            var reference = data.offsets.reference;
	            var popper = getPopperClientRect(data.offsets.popper);

	            var shiftOffsets = {
	                y: {
	                    start:  { top: reference.top },
	                    end:    { top: reference.top + reference.height - popper.height }
	                },
	                x: {
	                    start:  { left: reference.left },
	                    end:    { left: reference.left + reference.width - popper.width }
	                }
	            };

	            var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';

	            data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftVariation]);
	        }

	        return data;
	    };


	    /**
	     * Modifier used to make sure the popper does not overflows from it's boundaries
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.preventOverflow = function(data) {
	        var order = this._options.preventOverflowOrder;
	        var popper = getPopperClientRect(data.offsets.popper);

	        var check = {
	            left: function() {
	                var left = popper.left;
	                if (popper.left < data.boundaries.left) {
	                    left = Math.max(popper.left, data.boundaries.left);
	                }
	                return { left: left };
	            },
	            right: function() {
	                var left = popper.left;
	                if (popper.right > data.boundaries.right) {
	                    left = Math.min(popper.left, data.boundaries.right - popper.width);
	                }
	                return { left: left };
	            },
	            top: function() {
	                var top = popper.top;
	                if (popper.top < data.boundaries.top) {
	                    top = Math.max(popper.top, data.boundaries.top);
	                }
	                return { top: top };
	            },
	            bottom: function() {
	                var top = popper.top;
	                if (popper.bottom > data.boundaries.bottom) {
	                    top = Math.min(popper.top, data.boundaries.bottom - popper.height);
	                }
	                return { top: top };
	            }
	        };

	        order.forEach(function(direction) {
	            data.offsets.popper = Object.assign(popper, check[direction]());
	        });

	        return data;
	    };

	    /**
	     * Modifier used to make sure the popper is always near its reference
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.keepTogether = function(data) {
	        var popper  = getPopperClientRect(data.offsets.popper);
	        var reference = data.offsets.reference;
	        var f = Math.floor;

	        if (popper.right < f(reference.left)) {
	            data.offsets.popper.left = f(reference.left) - popper.width;
	        }
	        if (popper.left > f(reference.right)) {
	            data.offsets.popper.left = f(reference.right);
	        }
	        if (popper.bottom < f(reference.top)) {
	            data.offsets.popper.top = f(reference.top) - popper.height;
	        }
	        if (popper.top > f(reference.bottom)) {
	            data.offsets.popper.top = f(reference.bottom);
	        }

	        return data;
	    };

	    /**
	     * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
	     * Requires the `preventOverflow` modifier before it in order to work.
	     * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.flip = function(data) {
	        // check if preventOverflow is in the list of modifiers before the flip modifier.
	        // otherwise flip would not work as expected.
	        if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
	            console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
	            return data;
	        }

	        if (data.flipped && data.placement === data._originalPlacement) {
	            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
	            return data;
	        }

	        var placement = data.placement.split('-')[0];
	        var placementOpposite = getOppositePlacement(placement);
	        var variation = data.placement.split('-')[1] || '';

	        var flipOrder = [];
	        if(this._options.flipBehavior === 'flip') {
	            flipOrder = [
	                placement,
	                placementOpposite
	            ];
	        } else {
	            flipOrder = this._options.flipBehavior;
	        }

	        flipOrder.forEach(function(step, index) {
	            if (placement !== step || flipOrder.length === index + 1) {
	                return;
	            }

	            placement = data.placement.split('-')[0];
	            placementOpposite = getOppositePlacement(placement);

	            var popperOffsets = getPopperClientRect(data.offsets.popper);

	            // this boolean is used to distinguish right and bottom from top and left
	            // they need different computations to get flipped
	            var a = ['right', 'bottom'].indexOf(placement) !== -1;

	            // using Math.floor because the reference offsets may contain decimals we are not going to consider here
	            if (
	                a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) ||
	                !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])
	            ) {
	                // we'll use this boolean to detect any flip loop
	                data.flipped = true;
	                data.placement = flipOrder[index + 1];
	                if (variation) {
	                    data.placement += '-' + variation;
	                }
	                data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;

	                data = this.runModifiers(data, this._options.modifiers, this._flip);
	            }
	        }.bind(this));
	        return data;
	    };

	    /**
	     * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
	     * The offsets will shift the popper on the side of its reference element.
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.offset = function(data) {
	        var offset = this._options.offset;
	        var popper  = data.offsets.popper;

	        if (data.placement.indexOf('left') !== -1) {
	            popper.top -= offset;
	        }
	        else if (data.placement.indexOf('right') !== -1) {
	            popper.top += offset;
	        }
	        else if (data.placement.indexOf('top') !== -1) {
	            popper.left -= offset;
	        }
	        else if (data.placement.indexOf('bottom') !== -1) {
	            popper.left += offset;
	        }
	        return data;
	    };

	    /**
	     * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
	     * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.arrow = function(data) {
	        var arrow  = this._options.arrowElement;

	        // if the arrowElement is a string, suppose it's a CSS selector
	        if (typeof arrow === 'string') {
	            arrow = this._popper.querySelector(arrow);
	        }

	        // if arrow element is not found, don't run the modifier
	        if (!arrow) {
	            return data;
	        }

	        // the arrow element must be child of its popper
	        if (!this._popper.contains(arrow)) {
	            console.warn('WARNING: `arrowElement` must be child of its popper element!');
	            return data;
	        }

	        // arrow depends on keepTogether in order to work
	        if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
	            console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
	            return data;
	        }

	        var arrowStyle  = {};
	        var placement   = data.placement.split('-')[0];
	        var popper      = getPopperClientRect(data.offsets.popper);
	        var reference   = data.offsets.reference;
	        var isVertical  = ['left', 'right'].indexOf(placement) !== -1;

	        var len         = isVertical ? 'height' : 'width';
	        var side        = isVertical ? 'top' : 'left';
	        var altSide     = isVertical ? 'left' : 'top';
	        var opSide      = isVertical ? 'bottom' : 'right';
	        var arrowSize   = getOuterSizes(arrow)[len];

	        //
	        // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
	        //

	        // top/left side
	        if (reference[opSide] - arrowSize < popper[side]) {
	            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
	        }
	        // bottom/right side
	        if (reference[side] + arrowSize > popper[opSide]) {
	            data.offsets.popper[side] += (reference[side] + arrowSize) - popper[opSide];
	        }

	        // compute center of the popper
	        var center = reference[side] + (reference[len] / 2) - (arrowSize / 2);

	        var sideValue = center - popper[side];

	        // prevent arrow from being placed not contiguously to its popper
	        sideValue = Math.max(Math.min(popper[len] - arrowSize - 3, sideValue), 3);
	        arrowStyle[side] = sideValue;
	        arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow

	        data.offsets.arrow = arrowStyle;
	        data.arrowElement = arrow;

	        return data;
	    };


	    //
	    // Helpers
	    //

	    /**
	     * Get the outer sizes of the given element (offset size + margins)
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @returns {Object} object containing width and height properties
	     */
	    function getOuterSizes(element) {
	        // NOTE: 1 DOM access here
	        var _display = element.style.display, _visibility = element.style.visibility;
	        element.style.display = 'block'; element.style.visibility = 'hidden';
	        var calcWidthToForceRepaint = element.offsetWidth;

	        // original method
	        var styles = root.getComputedStyle(element);
	        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
	        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
	        var result = { width: element.offsetWidth + y, height: element.offsetHeight + x };

	        // reset element styles
	        element.style.display = _display; element.style.visibility = _visibility;
	        return result;
	    }

	    /**
	     * Get the opposite placement of the given one/
	     * @function
	     * @ignore
	     * @argument {String} placement
	     * @returns {String} flipped placement
	     */
	    function getOppositePlacement(placement) {
	        var hash = {left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	        return placement.replace(/left|right|bottom|top/g, function(matched){
	            return hash[matched];
	        });
	    }

	    /**
	     * Given the popper offsets, generate an output similar to getBoundingClientRect
	     * @function
	     * @ignore
	     * @argument {Object} popperOffsets
	     * @returns {Object} ClientRect like output
	     */
	    function getPopperClientRect(popperOffsets) {
	        var offsets = Object.assign({}, popperOffsets);
	        offsets.right = offsets.left + offsets.width;
	        offsets.bottom = offsets.top + offsets.height;
	        return offsets;
	    }

	    /**
	     * Given an array and the key to find, returns its index
	     * @function
	     * @ignore
	     * @argument {Array} arr
	     * @argument keyToFind
	     * @returns index or null
	     */
	    function getArrayKeyIndex(arr, keyToFind) {
	        var i = 0, key;
	        for (key in arr) {
	            if (arr[key] === keyToFind) {
	                return i;
	            }
	            i++;
	        }
	        return null;
	    }

	    /**
	     * Get CSS computed property of the given element
	     * @function
	     * @ignore
	     * @argument {Eement} element
	     * @argument {String} property
	     */
	    function getStyleComputedProperty(element, property) {
	        // NOTE: 1 DOM access here
	        var css = root.getComputedStyle(element, null);
	        return css[property];
	    }

	    /**
	     * Returns the offset parent of the given element
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @returns {Element} offset parent
	     */
	    function getOffsetParent(element) {
	        // NOTE: 1 DOM access here
	        var offsetParent = element.offsetParent;
	        return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
	    }

	    /**
	     * Returns the scrolling parent of the given element
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @returns {Element} offset parent
	     */
	    function getScrollParent(element) {
	        var parent = element.parentNode;

	        if (!parent) {
	            return element;
	        }

	        if (parent === root.document) {
	            // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
	            // greater than 0 and return the proper element
	            if (root.document.body.scrollTop) {
	                return root.document.body;
	            } else {
	                return root.document.documentElement;
	            }
	        }

	        // Firefox want us to check `-x` and `-y` variations as well
	        if (
	            ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow')) !== -1 ||
	            ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-x')) !== -1 ||
	            ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-y')) !== -1
	        ) {
	            // If the detected scrollParent is body, we perform an additional check on its parentNode
	            // in this way we'll get body if the browser is Chrome-ish, or documentElement otherwise
	            // fixes issue #65
	            return parent;
	        }
	        return getScrollParent(element.parentNode);
	    }

	    /**
	     * Check if the given element is fixed or is inside a fixed parent
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @argument {Element} customContainer
	     * @returns {Boolean} answer to "isFixed?"
	     */
	    function isFixed(element) {
	        if (element === root.document.body) {
	            return false;
	        }
	        if (getStyleComputedProperty(element, 'position') === 'fixed') {
	            return true;
	        }
	        return element.parentNode ? isFixed(element.parentNode) : element;
	    }

	    /**
	     * Set the style to the given popper
	     * @function
	     * @ignore
	     * @argument {Element} element - Element to apply the style to
	     * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
	     */
	    function setStyle(element, styles) {
	        function is_numeric(n) {
	            return (n !== '' && !isNaN(parseFloat(n)) && isFinite(n));
	        }
	        Object.keys(styles).forEach(function(prop) {
	            var unit = '';
	            // add unit if the value is numeric and is one of the following
	            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
	                unit = 'px';
	            }
	            element.style[prop] = styles[prop] + unit;
	        });
	    }

	    /**
	     * Check if the given variable is a function
	     * @function
	     * @ignore
	     * @argument {*} functionToCheck - variable to check
	     * @returns {Boolean} answer to: is a function?
	     */
	    function isFunction(functionToCheck) {
	        var getType = {};
	        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	    }

	    /**
	     * Get the position of the given element, relative to its offset parent
	     * @function
	     * @ignore
	     * @param {Element} element
	     * @return {Object} position - Coordinates of the element and its `scrollTop`
	     */
	    function getOffsetRect(element) {
	        var elementRect = {
	            width: element.offsetWidth,
	            height: element.offsetHeight,
	            left: element.offsetLeft,
	            top: element.offsetTop
	        };

	        elementRect.right = elementRect.left + elementRect.width;
	        elementRect.bottom = elementRect.top + elementRect.height;

	        // position
	        return elementRect;
	    }

	    /**
	     * Get bounding client rect of given element
	     * @function
	     * @ignore
	     * @param {HTMLElement} element
	     * @return {Object} client rect
	     */
	    function getBoundingClientRect(element) {
	        var rect = element.getBoundingClientRect();

	        // whether the IE version is lower than 11
	        var isIE = navigator.userAgent.indexOf("MSIE") != -1;

	        // fix ie document bounding top always 0 bug
	        var rectTop = isIE && element.tagName === 'HTML'
	            ? -element.scrollTop
	            : rect.top;

	        return {
	            left: rect.left,
	            top: rectTop,
	            right: rect.right,
	            bottom: rect.bottom,
	            width: rect.right - rect.left,
	            height: rect.bottom - rectTop
	        };
	    }

	    /**
	     * Given an element and one of its parents, return the offset
	     * @function
	     * @ignore
	     * @param {HTMLElement} element
	     * @param {HTMLElement} parent
	     * @return {Object} rect
	     */
	    function getOffsetRectRelativeToCustomParent(element, parent, fixed) {
	        var elementRect = getBoundingClientRect(element);
	        var parentRect = getBoundingClientRect(parent);

	        if (fixed) {
	            var scrollParent = getScrollParent(parent);
	            parentRect.top += scrollParent.scrollTop;
	            parentRect.bottom += scrollParent.scrollTop;
	            parentRect.left += scrollParent.scrollLeft;
	            parentRect.right += scrollParent.scrollLeft;
	        }

	        var rect = {
	            top: elementRect.top - parentRect.top ,
	            left: elementRect.left - parentRect.left ,
	            bottom: (elementRect.top - parentRect.top) + elementRect.height,
	            right: (elementRect.left - parentRect.left) + elementRect.width,
	            width: elementRect.width,
	            height: elementRect.height
	        };
	        return rect;
	    }

	    /**
	     * Get the prefixed supported property name
	     * @function
	     * @ignore
	     * @argument {String} property (camelCase)
	     * @returns {String} prefixed property (camelCase)
	     */
	    function getSupportedPropertyName(property) {
	        var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

	        for (var i = 0; i < prefixes.length; i++) {
	            var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
	            if (typeof root.document.body.style[toCheck] !== 'undefined') {
	                return toCheck;
	            }
	        }
	        return null;
	    }

	    /**
	     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
	     * objects to a target object. It will return the target object.
	     * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
	     * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	     * @function
	     * @ignore
	     */
	    if (!Object.assign) {
	        Object.defineProperty(Object, 'assign', {
	            enumerable: false,
	            configurable: true,
	            writable: true,
	            value: function(target) {
	                if (target === undefined || target === null) {
	                    throw new TypeError('Cannot convert first argument to object');
	                }

	                var to = Object(target);
	                for (var i = 1; i < arguments.length; i++) {
	                    var nextSource = arguments[i];
	                    if (nextSource === undefined || nextSource === null) {
	                        continue;
	                    }
	                    nextSource = Object(nextSource);

	                    var keysArray = Object.keys(nextSource);
	                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	                        var nextKey = keysArray[nextIndex];
	                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	                        if (desc !== undefined && desc.enumerable) {
	                            to[nextKey] = nextSource[nextKey];
	                        }
	                    }
	                }
	                return to;
	            }
	        });
	    }

	    return Popper;
	}));


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _main = __webpack_require__(26);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_main2.default.install = function (Vue) {
	  Vue.component(_main2.default.name, _main2.default);
	};

	exports.default = _main2.default;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _resizeEvent = __webpack_require__(27);

	var _scrollbarWidth = __webpack_require__(23);

	var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

	var _util = __webpack_require__(28);

	var _bar = __webpack_require__(29);

	var _bar2 = _interopRequireDefault(_bar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	// reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js

	exports.default = {
	  name: 'ElScrollbar',

	  components: { Bar: _bar2.default },

	  props: {
	    native: Boolean,
	    wrapStyle: {},
	    wrapClass: {},
	    viewClass: {},
	    viewStyle: {},
	    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
	    tag: {
	      type: String,
	      default: 'div'
	    }
	  },

	  data: function data() {
	    return {
	      sizeWidth: '0',
	      sizeHeight: '0',
	      moveX: 0,
	      moveY: 0
	    };
	  },


	  computed: {
	    wrap: function wrap() {
	      return this.$refs.wrap;
	    }
	  },

	  render: function render(h) {
	    var gutter = (0, _scrollbarWidth2.default)();
	    var style = this.wrapStyle;

	    if (gutter) {
	      var gutterWith = '-' + gutter + 'px';
	      var gutterStyle = 'margin-bottom: ' + gutterWith + '; margin-right: ' + gutterWith + ';';

	      if (Array.isArray(this.wrapStyle)) {
	        style = (0, _util.toObject)(this.wrapStyle);
	        style.marginRight = style.marginBottom = gutterWith;
	      } else if (typeof this.wrapStyle === 'string') {
	        style += gutterStyle;
	      } else {
	        style = gutterStyle;
	      }
	    }
	    var view = h(this.tag, {
	      class: ['el-scrollbar__view', this.viewClass],
	      style: this.viewStyle,
	      ref: 'resize'
	    }, this.$slots.default);
	    var wrap = h(
	      'div',
	      {
	        ref: 'wrap',
	        style: style,
	        on: {
	          'scroll': this.handleScroll
	        },

	        'class': [this.wrapClass, 'el-scrollbar__wrap', gutter ? '' : 'el-scrollbar__wrap--hidden-default'] },
	      [[view]]
	    );
	    var nodes = void 0;

	    if (!this.native) {
	      nodes = [wrap, h(
	        _bar2.default,
	        {
	          attrs: {
	            move: this.moveX,
	            size: this.sizeWidth }
	        },
	        []
	      ), h(
	        _bar2.default,
	        {
	          attrs: {
	            vertical: true,
	            move: this.moveY,
	            size: this.sizeHeight }
	        },
	        []
	      )];
	    } else {
	      nodes = [h(
	        'div',
	        {
	          ref: 'wrap',
	          'class': [this.wrapClass, 'el-scrollbar__wrap'],
	          style: style },
	        [[view]]
	      )];
	    }
	    return h('div', { class: 'el-scrollbar' }, nodes);
	  },


	  methods: {
	    handleScroll: function handleScroll() {
	      var wrap = this.wrap;

	      this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
	      this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
	    },
	    update: function update() {
	      var heightPercentage = void 0,
	          widthPercentage = void 0;
	      var wrap = this.wrap;
	      if (!wrap) return;

	      heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
	      widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;

	      this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
	      this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
	    }
	  },

	  mounted: function mounted() {
	    if (this.native) return;
	    this.$nextTick(this.update);
	    !this.noresize && (0, _resizeEvent.addResizeListener)(this.$refs.resize, this.update);
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.native) return;
	    !this.noresize && (0, _resizeEvent.removeResizeListener)(this.$refs.resize, this.update);
	  }
	};

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/* Modified from https://github.com/sdecima/javascript-detect-element-resize
	 * version: 0.5.3
	 *
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2013 Sebastián Décima
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of
	 * this software and associated documentation files (the "Software"), to deal in
	 * the Software without restriction, including without limitation the rights to
	 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	 * the Software, and to permit persons to whom the Software is furnished to do so,
	 * subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
	 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
	 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
	 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 *
	 */
	var isServer = typeof window === 'undefined';

	/* istanbul ignore next */
	var requestFrame = function () {
	  if (isServer) return;
	  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
	    return window.setTimeout(fn, 20);
	  };
	  return function (fn) {
	    return raf(fn);
	  };
	}();

	/* istanbul ignore next */
	var cancelFrame = function () {
	  if (isServer) return;
	  var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
	  return function (id) {
	    return cancel(id);
	  };
	}();

	/* istanbul ignore next */
	var resetTrigger = function resetTrigger(element) {
	  var trigger = element.__resizeTrigger__;
	  var expand = trigger.firstElementChild;
	  var contract = trigger.lastElementChild;
	  var expandChild = expand.firstElementChild;

	  contract.scrollLeft = contract.scrollWidth;
	  contract.scrollTop = contract.scrollHeight;
	  expandChild.style.width = expand.offsetWidth + 1 + 'px';
	  expandChild.style.height = expand.offsetHeight + 1 + 'px';
	  expand.scrollLeft = expand.scrollWidth;
	  expand.scrollTop = expand.scrollHeight;
	};

	/* istanbul ignore next */
	var checkTriggers = function checkTriggers(element) {
	  return element.offsetWidth !== element.__resizeLast__.width || element.offsetHeight !== element.__resizeLast__.height;
	};

	/* istanbul ignore next */
	var scrollListener = function scrollListener(event) {
	  var _this = this;

	  resetTrigger(this);
	  if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
	  this.__resizeRAF__ = requestFrame(function () {
	    if (checkTriggers(_this)) {
	      _this.__resizeLast__.width = _this.offsetWidth;
	      _this.__resizeLast__.height = _this.offsetHeight;
	      _this.__resizeListeners__.forEach(function (fn) {
	        fn.call(_this, event);
	      });
	    }
	  });
	};

	/* Detect CSS Animations support to detect element display/re-attach */
	var attachEvent = isServer ? {} : document.attachEvent;
	var DOM_PREFIXES = 'Webkit Moz O ms'.split(' ');
	var START_EVENTS = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' ');
	var RESIZE_ANIMATION_NAME = 'resizeanim';
	var animation = false;
	var keyFramePrefix = '';
	var animationStartEvent = 'animationstart';

	/* istanbul ignore next */
	if (!attachEvent && !isServer) {
	  var testElement = document.createElement('fakeelement');
	  if (testElement.style.animationName !== undefined) {
	    animation = true;
	  }

	  if (animation === false) {
	    var prefix = '';
	    for (var i = 0; i < DOM_PREFIXES.length; i++) {
	      if (testElement.style[DOM_PREFIXES[i] + 'AnimationName'] !== undefined) {
	        prefix = DOM_PREFIXES[i];
	        keyFramePrefix = '-' + prefix.toLowerCase() + '-';
	        animationStartEvent = START_EVENTS[i];
	        animation = true;
	        break;
	      }
	    }
	  }
	}

	var stylesCreated = false;
	/* istanbul ignore next */
	var createStyles = function createStyles() {
	  if (!stylesCreated && !isServer) {
	    var animationKeyframes = '@' + keyFramePrefix + 'keyframes ' + RESIZE_ANIMATION_NAME + ' { from { opacity: 0; } to { opacity: 0; } } ';
	    var animationStyle = keyFramePrefix + 'animation: 1ms ' + RESIZE_ANIMATION_NAME + ';';

	    // opacity: 0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
	    var css = animationKeyframes + '\n      .resize-triggers { ' + animationStyle + ' visibility: hidden; opacity: 0; }\n      .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1 }\n      .resize-triggers > div { background: #eee; overflow: auto; }\n      .contract-trigger:before { width: 200%; height: 200%; }';

	    var head = document.head || document.getElementsByTagName('head')[0];
	    var style = document.createElement('style');

	    style.type = 'text/css';
	    if (style.styleSheet) {
	      style.styleSheet.cssText = css;
	    } else {
	      style.appendChild(document.createTextNode(css));
	    }

	    head.appendChild(style);
	    stylesCreated = true;
	  }
	};

	/* istanbul ignore next */
	var addResizeListener = exports.addResizeListener = function addResizeListener(element, fn) {
	  if (isServer) return;
	  if (attachEvent) {
	    element.attachEvent('onresize', fn);
	  } else {
	    if (!element.__resizeTrigger__) {
	      if (getComputedStyle(element).position === 'static') {
	        element.style.position = 'relative';
	      }
	      createStyles();
	      element.__resizeLast__ = {};
	      element.__resizeListeners__ = [];

	      var resizeTrigger = element.__resizeTrigger__ = document.createElement('div');
	      resizeTrigger.className = 'resize-triggers';
	      resizeTrigger.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';
	      element.appendChild(resizeTrigger);

	      resetTrigger(element);
	      element.addEventListener('scroll', scrollListener, true);

	      /* Listen for a css animation to detect element display/re-attach */
	      if (animationStartEvent) {
	        resizeTrigger.addEventListener(animationStartEvent, function (event) {
	          if (event.animationName === RESIZE_ANIMATION_NAME) {
	            resetTrigger(element);
	          }
	        });
	      }
	    }
	    element.__resizeListeners__.push(fn);
	  }
	};

	/* istanbul ignore next */
	var removeResizeListener = exports.removeResizeListener = function removeResizeListener(element, fn) {
	  if (attachEvent) {
	    element.detachEvent('onresize', fn);
	  } else {
	    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
	    if (!element.__resizeListeners__.length) {
	      element.removeEventListener('scroll', scrollListener);
	      element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
	    }
	  }
	};

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.hasOwn = hasOwn;
	exports.toObject = toObject;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	};

	function extend(to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to;
	};

	function toObject(arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res;
	};

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _dom = __webpack_require__(22);

	var _util = __webpack_require__(30);

	/* istanbul ignore next */
	exports.default = {
	  name: 'Bar',

	  props: {
	    vertical: Boolean,
	    size: String,
	    move: Number
	  },

	  computed: {
	    bar: function bar() {
	      return _util.BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
	    },
	    wrap: function wrap() {
	      return this.$parent.wrap;
	    }
	  },

	  render: function render(h) {
	    var size = this.size,
	        move = this.move,
	        bar = this.bar;


	    return h(
	      'div',
	      {
	        'class': ['el-scrollbar__bar', 'is-' + bar.key],
	        on: {
	          'mousedown': this.clickTrackHandler
	        }
	      },
	      [h(
	        'div',
	        {
	          ref: 'thumb',
	          'class': 'el-scrollbar__thumb',
	          on: {
	            'mousedown': this.clickThumbHandler
	          },

	          style: (0, _util.renderThumbStyle)({ size: size, move: move, bar: bar }) },
	        []
	      )]
	    );
	  },


	  methods: {
	    clickThumbHandler: function clickThumbHandler(e) {
	      this.startDrag(e);
	      this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
	    },
	    clickTrackHandler: function clickTrackHandler(e) {
	      var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
	      var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
	      var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];

	      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
	    },
	    startDrag: function startDrag(e) {
	      e.stopImmediatePropagation();
	      this.cursorDown = true;

	      (0, _dom.on)(document, 'mousemove', this.mouseMoveDocumentHandler);
	      (0, _dom.on)(document, 'mouseup', this.mouseUpDocumentHandler);
	      document.onselectstart = function () {
	        return false;
	      };
	    },
	    mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
	      if (this.cursorDown === false) return;
	      var prevPage = this[this.bar.axis];

	      if (!prevPage) return;

	      var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
	      var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
	      var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];

	      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
	    },
	    mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
	      this.cursorDown = false;
	      this[this.bar.axis] = 0;
	      (0, _dom.off)(document, 'mousemove', this.mouseMoveDocumentHandler);
	      document.onselectstart = null;
	    }
	  },

	  destroyed: function destroyed() {
	    (0, _dom.off)(document, 'mouseup', this.mouseUpDocumentHandler);
	  }
	};

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.renderThumbStyle = renderThumbStyle;
	var BAR_MAP = exports.BAR_MAP = {
	  vertical: {
	    offset: 'offsetHeight',
	    scroll: 'scrollTop',
	    scrollSize: 'scrollHeight',
	    size: 'height',
	    key: 'vertical',
	    axis: 'Y',
	    client: 'clientY',
	    direction: 'top'
	  },
	  horizontal: {
	    offset: 'offsetWidth',
	    scroll: 'scrollLeft',
	    scrollSize: 'scrollWidth',
	    size: 'width',
	    key: 'horizontal',
	    axis: 'X',
	    client: 'clientX',
	    direction: 'left'
	  }
	};

	function renderThumbStyle(_ref) {
	  var move = _ref.move,
	      size = _ref.size,
	      bar = _ref.bar;

	  var style = {};
	  var translate = 'translate' + bar.axis + '(' + move + '%)';

	  style[bar.size] = size;
	  style.transform = translate;
	  style.msTransform = translate;
	  style.webkitTransform = translate;

	  return style;
	};

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vue = __webpack_require__(19);

	var _vue2 = _interopRequireDefault(_vue);

	var _dom = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var nodeList = [];
	var ctx = '@@clickoutsideContext';

	var startClick = void 0;

	!_vue2.default.prototype.$isServer && (0, _dom.on)(document, 'mousedown', function (e) {
	  return startClick = e;
	});

	!_vue2.default.prototype.$isServer && (0, _dom.on)(document, 'mouseup', function (e) {
	  nodeList.forEach(function (node) {
	    return node[ctx].documentHandler(e, startClick);
	  });
	});
	/**
	 * v-clickoutside
	 * @desc 点击元素外面才会触发的事件
	 * @example
	 * ```vue
	 * <div v-element-clickoutside="handleClose">
	 * ```
	 */
	exports.default = {
	  bind: function bind(el, binding, vnode) {
	    var id = nodeList.push(el) - 1;
	    var documentHandler = function documentHandler() {
	      var mouseup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var mousedown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      if (!vnode.context || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || vnode.context.popperElm && (vnode.context.popperElm.contains(mouseup.target) || vnode.context.popperElm.contains(mousedown.target))) return;

	      if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) {
	        vnode.context[el[ctx].methodName]();
	      } else {
	        el[ctx].bindingFn && el[ctx].bindingFn();
	      }
	    };
	    el[ctx] = {
	      id: id,
	      documentHandler: documentHandler,
	      methodName: binding.expression,
	      bindingFn: binding.value
	    };
	  },
	  update: function update(el, binding) {
	    el[ctx].methodName = binding.expression;
	    el[ctx].bindingFn = binding.value;
	  },
	  unbind: function unbind(el) {
	    var len = nodeList.length;

	    for (var i = 0; i < len; i++) {
	      if (nodeList[i][ctx].id === el[ctx].id) {
	        nodeList.splice(i, 1);
	        break;
	      }
	    }
	  }
	};

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _locale = __webpack_require__(75);

	exports.default = {
	  methods: {
	    t: function t() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _locale.t.apply(this, args);
	    }
	  }
	};

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.i18n = exports.use = exports.t = undefined;

	var _zhCN = __webpack_require__(76);

	var _zhCN2 = _interopRequireDefault(_zhCN);

	var _vue = __webpack_require__(19);

	var _vue2 = _interopRequireDefault(_vue);

	var _deepmerge = __webpack_require__(77);

	var _deepmerge2 = _interopRequireDefault(_deepmerge);

	var _format = __webpack_require__(78);

	var _format2 = _interopRequireDefault(_format);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var format = (0, _format2.default)(_vue2.default);
	var lang = _zhCN2.default;
	var merged = false;
	var i18nHandler = function i18nHandler() {
	  var vuei18n = Object.getPrototypeOf(this || _vue2.default).$t;
	  if (typeof vuei18n === 'function' && !!_vue2.default.locale) {
	    if (!merged) {
	      merged = true;
	      _vue2.default.locale(_vue2.default.config.lang, (0, _deepmerge2.default)(lang, _vue2.default.locale(_vue2.default.config.lang) || {}, { clone: true }));
	    }
	    return vuei18n.apply(this, arguments);
	  }
	};

	var t = exports.t = function t(path, options) {
	  var value = i18nHandler.apply(this, arguments);
	  if (value !== null && value !== undefined) return value;

	  var array = path.split('.');
	  var current = lang;

	  for (var i = 0, j = array.length; i < j; i++) {
	    var property = array[i];
	    value = current[property];
	    if (i === j - 1) return format(value, options);
	    if (!value) return '';
	    current = value;
	  }
	  return '';
	};

	var use = exports.use = function use(l) {
	  lang = l || lang;
	};

	var i18n = exports.i18n = function i18n(fn) {
	  i18nHandler = fn || i18nHandler;
	};

	exports.default = { use: use, t: t, i18n: i18n };

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  el: {
	    colorpicker: {
	      confirm: '确定',
	      clear: '清空'
	    },
	    datepicker: {
	      now: '此刻',
	      today: '今天',
	      cancel: '取消',
	      clear: '清空',
	      confirm: '确定',
	      selectDate: '选择日期',
	      selectTime: '选择时间',
	      startDate: '开始日期',
	      startTime: '开始时间',
	      endDate: '结束日期',
	      endTime: '结束时间',
	      year: '年',
	      month1: '1 月',
	      month2: '2 月',
	      month3: '3 月',
	      month4: '4 月',
	      month5: '5 月',
	      month6: '6 月',
	      month7: '7 月',
	      month8: '8 月',
	      month9: '9 月',
	      month10: '10 月',
	      month11: '11 月',
	      month12: '12 月',
	      // week: '周次',
	      weeks: {
	        sun: '日',
	        mon: '一',
	        tue: '二',
	        wed: '三',
	        thu: '四',
	        fri: '五',
	        sat: '六'
	      },
	      months: {
	        jan: '一月',
	        feb: '二月',
	        mar: '三月',
	        apr: '四月',
	        may: '五月',
	        jun: '六月',
	        jul: '七月',
	        aug: '八月',
	        sep: '九月',
	        oct: '十月',
	        nov: '十一月',
	        dec: '十二月'
	      }
	    },
	    select: {
	      loading: '加载中',
	      noMatch: '无匹配数据',
	      noData: '无数据',
	      placeholder: '请选择'
	    },
	    cascader: {
	      noMatch: '无匹配数据',
	      loading: '加载中',
	      placeholder: '请选择'
	    },
	    pagination: {
	      goto: '前往',
	      pagesize: '条/页',
	      total: '共 {total} 条',
	      pageClassifier: '页'
	    },
	    messagebox: {
	      title: '提示',
	      confirm: '确定',
	      cancel: '取消',
	      error: '输入的数据不合法!'
	    },
	    upload: {
	      delete: '删除',
	      preview: '查看图片',
	      continue: '继续上传'
	    },
	    table: {
	      emptyText: '暂无数据',
	      confirmFilter: '筛选',
	      resetFilter: '重置',
	      clearFilter: '全部',
	      sumText: '合计'
	    },
	    tree: {
	      emptyText: '暂无数据'
	    },
	    transfer: {
	      noMatch: '无匹配数据',
	      noData: '无数据',
	      titles: ['列表 1', '列表 2'],
	      filterPlaceholder: '请输入搜索内容',
	      noCheckedFormat: '共 {total} 项',
	      hasCheckedFormat: '已选 {checked}/{total} 项'
	    }
	  }
	};

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

	module.exports = require("deepmerge");

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (Vue) {

	  /**
	   * template
	   *
	   * @param {String} string
	   * @param {Array} ...args
	   * @return {String}
	   */

	  function template(string) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    if (args.length === 1 && _typeof(args[0]) === 'object') {
	      args = args[0];
	    }

	    if (!args || !args.hasOwnProperty) {
	      args = {};
	    }

	    return string.replace(RE_NARGS, function (match, prefix, i, index) {
	      var result = void 0;

	      if (string[index - 1] === '{' && string[index + match.length] === '}') {
	        return i;
	      } else {
	        result = (0, _util.hasOwn)(args, i) ? args[i] : null;
	        if (result === null || result === undefined) {
	          return '';
	        }

	        return result;
	      }
	    });
	  }

	  return template;
	};

	var _util = __webpack_require__(28);

	var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
	/**
	 *  String format template
	 *  - Inspired:
	 *    https://github.com/Matt-Esch/string-template/index.js
	 */

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	module.exports = require("throttle-debounce/debounce");

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(233),
	  /* template */
	  __webpack_require__(234),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(12);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_emitter2.default],

	  name: 'ElOption',

	  componentName: 'ElOption',

	  props: {
	    value: {
	      required: true
	    },
	    label: [String, Number],
	    created: Boolean,
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },

	  data: function data() {
	    return {
	      index: -1,
	      groupDisabled: false,
	      visible: true,
	      hitState: false
	    };
	  },


	  computed: {
	    currentLabel: function currentLabel() {
	      return this.label || (typeof this.value === 'string' || typeof this.value === 'number' ? this.value : '');
	    },
	    currentValue: function currentValue() {
	      return this.value || this.label || '';
	    },
	    parent: function parent() {
	      var result = this.$parent;
	      while (!result.isSelect) {
	        result = result.$parent;
	      }
	      return result;
	    },
	    itemSelected: function itemSelected() {
	      if (!this.parent.multiple) {
	        return this.value === this.parent.value;
	      } else {
	        return this.parent.value.indexOf(this.value) > -1;
	      }
	    },
	    limitReached: function limitReached() {
	      if (this.parent.multiple) {
	        return !this.itemSelected && this.parent.value.length >= this.parent.multipleLimit && this.parent.multipleLimit > 0;
	      } else {
	        return false;
	      }
	    }
	  },

	  watch: {
	    currentLabel: function currentLabel() {
	      if (!this.created && !this.parent.remote) this.dispatch('ElSelect', 'setSelected');
	    },
	    value: function value() {
	      if (!this.created && !this.parent.remote) this.dispatch('ElSelect', 'setSelected');
	    }
	  },

	  methods: {
	    handleGroupDisabled: function handleGroupDisabled(val) {
	      this.groupDisabled = val;
	    },
	    hoverItem: function hoverItem() {
	      if (!this.disabled && !this.groupDisabled) {
	        this.parent.hoverIndex = this.parent.options.indexOf(this);
	      }
	    },
	    selectOptionClick: function selectOptionClick() {
	      if (this.disabled !== true && this.groupDisabled !== true) {
	        this.dispatch('ElSelect', 'handleOptionClick', this);
	      }
	    },
	    queryChange: function queryChange(query) {
	      // query 里如果有正则中的特殊字符，需要先将这些字符转义
	      var parsedQuery = String(query).replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
	      this.visible = new RegExp(parsedQuery, 'i').test(this.currentLabel) || this.created;
	      if (!this.visible) {
	        this.parent.filteredOptionsCount--;
	      }
	    },
	    resetIndex: function resetIndex() {
	      var _this = this;

	      this.$nextTick(function () {
	        _this.index = _this.parent.options.indexOf(_this);
	      });
	    }
	  },

	  created: function created() {
	    this.parent.options.push(this);
	    this.parent.cachedOptions.push(this);
	    this.parent.optionsCount++;
	    this.parent.filteredOptionsCount++;
	    this.index = this.parent.options.indexOf(this);

	    this.$on('queryChange', this.queryChange);
	    this.$on('handleGroupDisabled', this.handleGroupDisabled);
	    this.$on('resetIndex', this.resetIndex);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.dispatch('ElSelect', 'onOptionDestroy', this);
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

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    staticClass: "el-select-dropdown__item",
	    class: {
	      'selected': _vm.itemSelected,
	      'is-disabled': _vm.disabled || _vm.groupDisabled || _vm.limitReached,
	        'hover': _vm.parent.hoverIndex === _vm.index
	    },
	    on: {
	      "mouseenter": _vm.hoverItem,
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.selectOptionClick($event)
	      }
	    }
	  }, [_vm._t("default", [_c('span', [_vm._v(_vm._s(_vm.currentLabel))])])], 2)
	},staticRenderFns: []}

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _select = __webpack_require__(245);

	var _select2 = _interopRequireDefault(_select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_select2.default.install = function (Vue) {
	  Vue.component(_select2.default.name, _select2.default);
	};

	exports.default = _select2.default;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(246),
	  /* template */
	  __webpack_require__(254),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(12);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _locale = __webpack_require__(74);

	var _locale2 = _interopRequireDefault(_locale);

	var _input = __webpack_require__(9);

	var _input2 = _interopRequireDefault(_input);

	var _selectDropdown = __webpack_require__(247);

	var _selectDropdown2 = _interopRequireDefault(_selectDropdown);

	var _option = __webpack_require__(232);

	var _option2 = _interopRequireDefault(_option);

	var _tag = __webpack_require__(250);

	var _tag2 = _interopRequireDefault(_tag);

	var _scrollbar = __webpack_require__(25);

	var _scrollbar2 = _interopRequireDefault(_scrollbar);

	var _debounce = __webpack_require__(79);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _clickoutside = __webpack_require__(73);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _dom = __webpack_require__(22);

	var _resizeEvent = __webpack_require__(27);

	var _locale3 = __webpack_require__(75);

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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var sizeMap = {
	  'large': 42,
	  'small': 30,
	  'mini': 22
	};

	exports.default = {
	  mixins: [_emitter2.default, _locale2.default],

	  name: 'ElSelect',

	  componentName: 'ElSelect',

	  computed: {
	    iconClass: function iconClass() {
	      if (this.myIconClass) {
	        return this.myIconClass;
	      }
	      var criteria = this.clearable && !this.disabled && this.inputHovering && !this.multiple && this.value !== undefined && this.value !== '';
	      return criteria ? 'circle-close is-show-close' : this.remote && this.filterable ? '' : 'arrow-down';
	    },
	    debounce: function debounce() {
	      return this.remote ? 300 : 0;
	    },
	    emptyText: function emptyText() {
	      if (this.loading) {
	        return this.loadingText || this.t('el.select.loading');
	      } else {
	        if (this.remote && this.query === '' && this.options.length === 0) return false;
	        if (this.filterable && this.options.length > 0 && this.filteredOptionsCount === 0) {
	          return this.noMatchText || this.t('el.select.noMatch');
	        }
	        if (this.options.length === 0) {
	          return this.noDataText || this.t('el.select.noData');
	        }
	      }
	      return null;
	    },
	    showNewOption: function showNewOption() {
	      var _this = this;

	      var hasExistingOption = this.options.filter(function (option) {
	        return !option.created;
	      }).some(function (option) {
	        return option.currentLabel === _this.query;
	      });
	      return this.filterable && this.allowCreate && this.query !== '' && !hasExistingOption;
	    }
	  },

	  components: {
	    ElInput: _input2.default,
	    ElSelectMenu: _selectDropdown2.default,
	    ElOption: _option2.default,
	    ElTag: _tag2.default,
	    ElScrollbar: _scrollbar2.default
	  },

	  directives: { Clickoutside: _clickoutside2.default },

	  props: {
	    simpleText: String,
	    noresize: Boolean,
	    name: String,
	    value: {
	      required: true
	    },
	    size: String,
	    disabled: Boolean,
	    clearable: Boolean,
	    filterable: Boolean,
	    allowCreate: Boolean,
	    loading: Boolean,
	    popperClass: String,
	    remote: Boolean,
	    loadingText: String,
	    noMatchText: String,
	    noDataText: String,
	    remoteMethod: Function,
	    filterMethod: Function,
	    multiple: Boolean,
	    multipleLimit: {
	      type: Number,
	      default: 0
	    },
	    placeholder: {
	      type: String,
	      default: function _default() {
	        return (0, _locale3.t)('el.select.placeholder');
	      }
	    },
	    fixIcon: Boolean, // 图标不旋转
	    myIconClass: String, // 自定义icon
	    defaultFirstOption: Boolean
	  },

	  data: function data() {
	    return {
	      options: [],
	      cachedOptions: [],
	      createdLabel: null,
	      createdSelected: false,
	      selected: this.multiple ? [] : {},
	      isSelect: true,
	      inputLength: 20,
	      inputWidth: 0,
	      cachedPlaceHolder: '',
	      optionsCount: 0,
	      filteredOptionsCount: 0,
	      dropdownUl: null,
	      visible: false,
	      selectedLabel: '',
	      hoverIndex: -1,
	      query: '',
	      bottomOverflow: 0,
	      topOverflow: 0,
	      optionsAllDisabled: false,
	      inputHovering: false,
	      currentPlaceholder: ''
	    };
	  },


	  watch: {
	    placeholder: function placeholder(val) {
	      this.cachedPlaceHolder = this.currentPlaceholder = val;
	    },
	    value: function value(val) {
	      if (this.multiple) {
	        this.resetInputHeight();
	        if (val.length > 0 || this.$refs.input && this.query !== '') {
	          this.currentPlaceholder = '';
	        } else {
	          this.currentPlaceholder = this.cachedPlaceHolder;
	        }
	      }
	      this.setSelected();
	      if (this.filterable && !this.multiple) {
	        this.inputLength = 20;
	      }
	      this.$emit('change', val);
	      this.dispatch('ElFormItem', 'el.form.change', val);
	    },
	    query: function query(val) {
	      var _this2 = this;

	      this.$nextTick(function () {
	        if (_this2.visible) _this2.broadcast('ElSelectDropdown', 'updatePopper');
	      });
	      this.hoverIndex = -1;
	      if (this.multiple && this.filterable) {
	        this.inputLength = this.$refs.input.value.length * 15 + 20;
	        this.managePlaceholder();
	        this.resetInputHeight();
	      }
	      if (this.remote && typeof this.remoteMethod === 'function') {
	        this.hoverIndex = -1;
	        this.remoteMethod(val);
	        this.broadcast('ElOption', 'resetIndex');
	      } else if (typeof this.filterMethod === 'function') {
	        this.filterMethod(val);
	        this.broadcast('ElOptionGroup', 'queryChange');
	      } else {
	        this.filteredOptionsCount = this.optionsCount;
	        this.broadcast('ElOption', 'queryChange', val);
	        this.broadcast('ElOptionGroup', 'queryChange');
	      }
	      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
	        this.checkDefaultFirstOption();
	      }
	    },
	    visible: function visible(val) {
	      var _this3 = this;

	      if (!val && this.$refs.reference) {
	        this.$refs.reference.$el.querySelector('input').blur();
	        this.handleIconHide();
	        this.broadcast('ElSelectDropdown', 'destroyPopper');
	        if (this.$refs.input) {
	          this.$refs.input.blur();
	        }
	        this.query = '';
	        this.selectedLabel = '';
	        this.inputLength = 20;
	        this.resetHoverIndex();
	        this.$nextTick(function () {
	          if (_this3.$refs.input && _this3.$refs.input.value === '' && _this3.selected.length === 0) {
	            _this3.currentPlaceholder = _this3.cachedPlaceHolder;
	          }
	        });
	        if (!this.multiple) {
	          this.getOverflows();
	          if (this.selected) {
	            if (this.filterable && this.allowCreate && this.createdSelected && this.createdOption) {
	              this.selectedLabel = this.createdLabel;
	            } else {
	              this.selectedLabel = this.selected.currentLabel;
	            }
	            if (this.filterable) this.query = this.selectedLabel;
	          }
	        }
	      } else {
	        this.handleIconShow();
	        this.broadcast('ElSelectDropdown', 'updatePopper');
	        if (this.filterable) {
	          this.query = this.selectedLabel;
	          if (this.multiple) {
	            this.$refs.input.focus();
	          } else {
	            if (!this.remote) {
	              this.broadcast('ElOption', 'queryChange', '');
	              this.broadcast('ElOptionGroup', 'queryChange');
	            }
	            this.broadcast('ElInput', 'inputSelect');
	          }
	        }
	      }
	      this.$emit('visible-change', val);
	    },
	    options: function options(val) {
	      if (this.$isServer) return;
	      this.optionsAllDisabled = val.length === val.filter(function (item) {
	        return item.disabled === true;
	      }).length;
	      if (this.multiple) {
	        this.resetInputHeight();
	      }
	      var inputs = this.$el.querySelectorAll('input');
	      if ([].indexOf.call(inputs, document.activeElement) === -1) {
	        this.setSelected();
	      }
	      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
	        this.checkDefaultFirstOption();
	      }
	    }
	  },

	  methods: {
	    handleIconHide: function handleIconHide() {
	      var icon = this.$el.querySelector('.el-input__icon');
	      if (icon) {
	        (0, _dom.removeClass)(icon, 'is-reverse');
	      }
	    },
	    handleIconShow: function handleIconShow() {
	      var icon = this.$el.querySelector('.el-input__icon');
	      if (icon && !(0, _dom.hasClass)(icon, 'el-icon-circle-close') && !this.fixIcon) {
	        (0, _dom.addClass)(icon, 'is-reverse');
	      }
	    },
	    handleMenuEnter: function handleMenuEnter() {
	      if (!this.dropdownUl) {
	        this.dropdownUl = this.$refs.popper.$el.querySelector('.el-select-dropdown__wrap');
	        this.getOverflows();
	      }
	      if (!this.multiple && this.dropdownUl) {
	        this.resetMenuScroll();
	      }
	    },
	    getOverflows: function getOverflows() {
	      if (this.dropdownUl && this.selected && this.selected.$el) {
	        var selectedRect = this.selected.$el.getBoundingClientRect();
	        var popperRect = this.$refs.popper.$el.getBoundingClientRect();
	        this.bottomOverflow = selectedRect.bottom - popperRect.bottom;
	        this.topOverflow = selectedRect.top - popperRect.top;
	      }
	    },
	    resetMenuScroll: function resetMenuScroll() {
	      if (this.bottomOverflow > 0) {
	        this.dropdownUl.scrollTop += this.bottomOverflow;
	      } else if (this.topOverflow < 0) {
	        this.dropdownUl.scrollTop += this.topOverflow;
	      }
	    },
	    getOption: function getOption(value) {
	      var option = void 0;
	      for (var i = this.cachedOptions.length - 1; i >= 0; i--) {
	        var cachedOption = this.cachedOptions[i];
	        if (cachedOption.value === value) {
	          option = cachedOption;
	          break;
	        }
	      }
	      if (option) return option;
	      var label = typeof value === 'string' || typeof value === 'number' ? value : '';
	      var newOption = {
	        value: value,
	        currentLabel: label
	      };
	      if (this.multiple) {
	        newOption.hitState = false;
	      }
	      return newOption;
	    },
	    setSelected: function setSelected() {
	      var _this4 = this;

	      if (!this.multiple) {
	        var option = this.getOption(this.value);
	        if (option.created) {
	          this.createdLabel = option.currentLabel;
	          this.createdSelected = true;
	        } else {
	          this.createdSelected = false;
	        }
	        this.selectedLabel = option.currentLabel;
	        this.selected = option;
	        if (this.filterable) this.query = this.selectedLabel;
	        return;
	      }
	      var result = [];
	      if (Array.isArray(this.value)) {
	        this.value.forEach(function (value) {
	          result.push(_this4.getOption(value));
	        });
	      }
	      this.selected = result;
	      this.$nextTick(function () {
	        _this4.resetInputHeight();
	      });
	    },
	    handleFocus: function handleFocus() {
	      this.visible = true;
	    },
	    handleIconClick: function handleIconClick(event) {
	      if (this.iconClass.indexOf('circle-close') > -1) {
	        this.deleteSelected(event);
	      } else {
	        this.toggleMenu();
	      }
	    },
	    handleMouseDown: function handleMouseDown(event) {
	      if (event.target.tagName !== 'INPUT') return;
	      if (this.visible) {
	        this.handleClose();
	        event.preventDefault();
	      }
	    },
	    doDestroy: function doDestroy() {
	      this.$refs.popper && this.$refs.popper.doDestroy();
	    },
	    handleClose: function handleClose() {
	      this.visible = false;
	    },
	    toggleLastOptionHitState: function toggleLastOptionHitState(hit) {
	      if (!Array.isArray(this.selected)) return;
	      var option = this.selected[this.selected.length - 1];
	      if (!option) return;

	      if (hit === true || hit === false) {
	        option.hitState = hit;
	        return hit;
	      }

	      option.hitState = !option.hitState;
	      return option.hitState;
	    },
	    deletePrevTag: function deletePrevTag(e) {
	      if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
	        var value = this.value.slice();
	        value.pop();
	        this.$emit('input', value);
	      }
	    },
	    managePlaceholder: function managePlaceholder() {
	      if (this.currentPlaceholder !== '') {
	        this.currentPlaceholder = this.$refs.input.value ? '' : this.cachedPlaceHolder;
	      }
	    },
	    resetInputState: function resetInputState(e) {
	      if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
	      this.inputLength = this.$refs.input.value.length * 15 + 20;
	      this.resetInputHeight();
	    },
	    resetInputHeight: function resetInputHeight() {
	      var _this5 = this;

	      this.$nextTick(function () {
	        if (!_this5.$refs.reference) return;
	        var inputChildNodes = _this5.$refs.reference.$el.childNodes;
	        var input = [].filter.call(inputChildNodes, function (item) {
	          return item.tagName === 'INPUT';
	        })[0];
	        input.style.height = Math.max(_this5.$refs.tags.clientHeight + 6, sizeMap[_this5.size] || 36) + 'px';
	        if (_this5.visible && _this5.emptyText !== false) {
	          _this5.broadcast('ElSelectDropdown', 'updatePopper');
	        }
	      });
	    },
	    resetHoverIndex: function resetHoverIndex() {
	      var _this6 = this;

	      setTimeout(function () {
	        if (!_this6.multiple) {
	          _this6.hoverIndex = _this6.options.indexOf(_this6.selected);
	        } else {
	          if (_this6.selected.length > 0) {
	            _this6.hoverIndex = Math.min.apply(null, _this6.selected.map(function (item) {
	              return _this6.options.indexOf(item);
	            }));
	          } else {
	            _this6.hoverIndex = -1;
	          }
	        }
	      }, 300);
	    },
	    handleOptionSelect: function handleOptionSelect(option) {
	      if (this.multiple) {
	        var value = this.value.slice();
	        var optionIndex = value.indexOf(option.value);
	        if (optionIndex > -1) {
	          value.splice(optionIndex, 1);
	        } else if (this.multipleLimit <= 0 || value.length < this.multipleLimit) {
	          value.push(option.value);
	        }
	        this.$emit('input', value);
	        if (option.created) {
	          this.query = '';
	          this.inputLength = 20;
	        }
	        if (this.filterable) this.$refs.input.focus();
	      } else {
	        this.$emit('input', option.value);
	        this.visible = false;
	      }
	    },
	    toggleMenu: function toggleMenu() {
	      if (this.filterable && this.query === '' && this.visible) {
	        return;
	      }
	      if (!this.disabled) {
	        this.visible = !this.visible;
	      }
	    },
	    navigateOptions: function navigateOptions(direction) {
	      if (!this.visible) {
	        this.visible = true;
	        return;
	      }
	      if (this.options.length === 0 || this.filteredOptionsCount === 0) return;
	      this.optionsAllDisabled = this.options.length === this.options.filter(function (item) {
	        return item.disabled === true;
	      }).length;
	      if (!this.optionsAllDisabled) {
	        if (direction === 'next') {
	          this.hoverIndex++;
	          if (this.hoverIndex === this.options.length) {
	            this.hoverIndex = 0;
	          }
	          this.resetScrollTop();
	          if (this.options[this.hoverIndex].disabled === true || this.options[this.hoverIndex].groupDisabled === true || !this.options[this.hoverIndex].visible) {
	            this.navigateOptions('next');
	          }
	        }
	        if (direction === 'prev') {
	          this.hoverIndex--;
	          if (this.hoverIndex < 0) {
	            this.hoverIndex = this.options.length - 1;
	          }
	          this.resetScrollTop();
	          if (this.options[this.hoverIndex].disabled === true || this.options[this.hoverIndex].groupDisabled === true || !this.options[this.hoverIndex].visible) {
	            this.navigateOptions('prev');
	          }
	        }
	      }
	    },
	    resetScrollTop: function resetScrollTop() {
	      var bottomOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().bottom - this.$refs.popper.$el.getBoundingClientRect().bottom;
	      var topOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().top - this.$refs.popper.$el.getBoundingClientRect().top;
	      if (bottomOverflowDistance > 0) {
	        this.dropdownUl.scrollTop += bottomOverflowDistance;
	      }
	      if (topOverflowDistance < 0) {
	        this.dropdownUl.scrollTop += topOverflowDistance;
	      }
	    },
	    selectOption: function selectOption() {
	      if (this.options[this.hoverIndex]) {
	        this.handleOptionSelect(this.options[this.hoverIndex]);
	      }
	    },
	    deleteSelected: function deleteSelected(event) {
	      event.stopPropagation();
	      this.$emit('input', '');
	      this.visible = false;
	      this.$emit('clear');
	    },
	    deleteTag: function deleteTag(event, tag) {
	      var index = this.selected.indexOf(tag);
	      if (index > -1 && !this.disabled) {
	        var value = this.value.slice();
	        value.splice(index, 1);
	        this.$emit('input', value);
	        this.$emit('remove-tag', tag);
	      }
	      event.stopPropagation();
	    },
	    onInputChange: function onInputChange() {
	      if (this.filterable) {
	        this.query = this.selectedLabel;
	      }
	    },
	    onOptionDestroy: function onOptionDestroy(option) {
	      this.optionsCount--;
	      this.filteredOptionsCount--;
	      var index = this.options.indexOf(option);
	      if (index > -1) {
	        this.options.splice(index, 1);
	      }
	      this.broadcast('ElOption', 'resetIndex');
	    },
	    resetInputWidth: function resetInputWidth() {
	      if (this.$refs.reference) {
	        this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
	      }
	    },
	    handleResize: function handleResize() {
	      this.resetInputWidth();
	      if (this.multiple) this.resetInputHeight();
	    },
	    checkDefaultFirstOption: function checkDefaultFirstOption() {
	      this.hoverIndex = -1;
	      for (var i = 0; i !== this.options.length; ++i) {
	        var option = this.options[i];
	        if (this.query) {
	          // pick first options that passes the filter
	          if (!option.disabled && !option.groupDisabled && option.visible) {
	            this.hoverIndex = i;
	            break;
	          }
	        } else {
	          // pick currently selected option
	          if (option.itemSelected) {
	            this.hoverIndex = i;
	            break;
	          }
	        }
	      }
	    }
	  },

	  created: function created() {
	    var _this7 = this;

	    this.cachedPlaceHolder = this.currentPlaceholder = this.placeholder;
	    if (this.multiple && !Array.isArray(this.value)) {
	      this.$emit('input', []);
	    }
	    if (!this.multiple && Array.isArray(this.value)) {
	      this.$emit('input', '');
	    }
	    this.setSelected();

	    this.debouncedOnInputChange = (0, _debounce2.default)(this.debounce, function () {
	      _this7.onInputChange();
	    });

	    this.$on('handleOptionClick', this.handleOptionSelect);
	    this.$on('onOptionDestroy', this.onOptionDestroy);
	    this.$on('setSelected', this.setSelected);
	  },
	  mounted: function mounted() {
	    var _this8 = this;

	    if (this.multiple && Array.isArray(this.value) && this.value.length > 0) {
	      this.currentPlaceholder = '';
	    }
	    (0, _resizeEvent.addResizeListener)(this.$el, this.handleResize);
	    if (this.remote && this.multiple) {
	      this.resetInputHeight();
	    }
	    this.$nextTick(function () {
	      if (_this8.$refs.reference && _this8.$refs.reference.$el) {
	        _this8.inputWidth = _this8.$refs.reference.$el.getBoundingClientRect().width;
	      }
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.$el && this.handleResize) (0, _resizeEvent.removeResizeListener)(this.$el, this.handleResize);
	  }
	};

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(248),
	  /* template */
	  __webpack_require__(249),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vuePopper = __webpack_require__(18);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElSelectDropdown',

	  componentName: 'ElSelectDropdown',

	  mixins: [_vuePopper2.default],

	  props: {
	    placement: {
	      default: 'bottom-start'
	    },

	    boundariesPadding: {
	      default: 0
	    },

	    popperOptions: {
	      default: function _default() {
	        return {
	          forceAbsolute: true,
	          gpuAcceleration: false
	        };
	      }
	    }
	  },

	  data: function data() {
	    return {
	      minWidth: ''
	    };
	  },


	  computed: {
	    popperClass: function popperClass() {
	      return this.$parent.popperClass;
	    }
	  },

	  watch: {
	    '$parent.inputWidth': function $parentInputWidth() {
	      this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    if (this.$parent.$refs.reference) {
	      this.referenceElm = this.$parent.$refs.reference.$el;
	    }
	    this.$parent.popperElm = this.popperElm = this.$el;
	    this.$on('updatePopper', function () {
	      if (_this.$parent.visible) _this.updatePopper();
	    });
	    this.$on('destroyPopper', this.destroyPopper);
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

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-select-dropdown",
	    class: [{
	      'is-multiple': _vm.$parent.multiple
	    }, _vm.popperClass],
	    style: ({
	      minWidth: _vm.minWidth
	    })
	  }, [_vm._t("default")], 2)
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

/***/ 254:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "clickoutside",
	      rawName: "v-clickoutside",
	      value: (_vm.handleClose),
	      expression: "handleClose"
	    }],
	    staticClass: "el-select"
	  }, [(_vm.multiple) ? _c('div', {
	    ref: "tags",
	    staticClass: "el-select__tags",
	    style: ({
	      'max-width': _vm.inputWidth - 32 + 'px'
	    }),
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.toggleMenu($event)
	      }
	    }
	  }, [_c('transition-group', {
	    on: {
	      "after-leave": _vm.resetInputHeight
	    }
	  }, _vm._l((_vm.selected), function(item) {
	    return _c('el-tag', {
	      key: item.value,
	      attrs: {
	        "closable": "",
	        "hit": item.hitState,
	        "type": "primary",
	        "close-transition": ""
	      },
	      on: {
	        "close": function($event) {
	          _vm.deleteTag($event, item)
	        }
	      }
	    }, [_c('span', {
	      staticClass: "el-select__tags-text"
	    }, [_vm._v(_vm._s(item.currentLabel))])])
	  })), (_vm.filterable) ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.query),
	      expression: "query"
	    }],
	    ref: "input",
	    staticClass: "el-select__input",
	    class: ("is-" + _vm.size),
	    style: ({
	      width: _vm.inputLength + 'px',
	      'max-width': _vm.inputWidth - 42 + 'px'
	    }),
	    attrs: {
	      "type": "text",
	      "disabled": _vm.disabled,
	      "debounce": _vm.remote ? 300 : 0
	    },
	    domProps: {
	      "value": (_vm.query)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.visible = true
	      },
	      "keyup": _vm.managePlaceholder,
	      "keydown": [_vm.resetInputState, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
	        $event.preventDefault();
	        _vm.navigateOptions('next')
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
	        $event.preventDefault();
	        _vm.navigateOptions('prev')
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        $event.preventDefault();
	        _vm.selectOption($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.visible = false
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46])) { return null; }
	        _vm.deletePrevTag($event)
	      }],
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.query = $event.target.value
	      }
	    }
	  }) : _vm._e()], 1) : _vm._e(), (_vm.simpleText) ? _c('span', {
	    staticClass: "el-select__label",
	    class: _vm.size,
	    on: {
	      "click": _vm.handleIconClick,
	      "mouseover": _vm.handleIconClick
	    }
	  }, [_vm._v("\n    " + _vm._s(_vm.simpleText) + "\n  ")]) : _c('el-input', {
	    ref: "reference",
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.currentPlaceholder,
	      "name": _vm.name,
	      "size": _vm.size,
	      "disabled": _vm.disabled,
	      "readonly": !_vm.filterable || _vm.multiple,
	      "validate-event": false,
	      "icon": _vm.iconClass
	    },
	    on: {
	      "focus": _vm.handleFocus,
	      "click": _vm.handleIconClick
	    },
	    nativeOn: {
	      "mousedown": function($event) {
	        _vm.handleMouseDown($event)
	      },
	      "keyup": function($event) {
	        _vm.debouncedOnInputChange($event)
	      },
	      "keydown": [function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
	        $event.preventDefault();
	        _vm.navigateOptions('next')
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
	        $event.preventDefault();
	        _vm.navigateOptions('prev')
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        $event.preventDefault();
	        _vm.selectOption($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.visible = false
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9)) { return null; }
	        _vm.visible = false
	      }],
	      "paste": function($event) {
	        _vm.debouncedOnInputChange($event)
	      },
	      "mouseenter": function($event) {
	        _vm.inputHovering = true
	      },
	      "mouseleave": function($event) {
	        _vm.inputHovering = false
	      }
	    },
	    model: {
	      value: (_vm.selectedLabel),
	      callback: function($$v) {
	        _vm.selectedLabel = $$v
	      },
	      expression: "selectedLabel"
	    }
	  }), _c('transition', {
	    attrs: {
	      "name": "el-zoom-in-top"
	    },
	    on: {
	      "after-leave": _vm.doDestroy,
	      "after-enter": _vm.handleMenuEnter
	    }
	  }, [_c('el-select-menu', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible && _vm.emptyText !== false),
	      expression: "visible && emptyText !== false"
	    }],
	    ref: "popper"
	  }, [_c('el-scrollbar', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.options.length > 0 && !_vm.loading),
	      expression: "options.length > 0 && !loading"
	    }],
	    class: {
	      'is-empty': !_vm.allowCreate && _vm.filteredOptionsCount === 0
	    },
	    attrs: {
	      "noresize": _vm.noresize,
	      "tag": "ul",
	      "wrap-class": "el-select-dropdown__wrap",
	      "view-class": "el-select-dropdown__list"
	    }
	  }, [(_vm.showNewOption) ? _c('el-option', {
	    attrs: {
	      "value": _vm.query,
	      "created": ""
	    }
	  }) : _vm._e(), _vm._t("default")], 2), (_vm.emptyText && (_vm.allowCreate && _vm.options.length === 0 || !_vm.allowCreate)) ? _c('p', {
	    staticClass: "el-select-dropdown__empty"
	  }, [_vm._v(_vm._s(_vm.emptyText))]) : _vm._e()], 1)], 1)], 1)
	},staticRenderFns: []}

/***/ })

/******/ });