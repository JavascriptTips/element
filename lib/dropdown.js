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

	module.exports = __webpack_require__(155);


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

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _button = __webpack_require__(45);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_button2.default.install = function (Vue) {
	  Vue.component(_button2.default.name, _button2.default);
	};

	exports.default = _button2.default;

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(46)

	/* template */
	var __vue_template__ = __webpack_require__(47)
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

/***/ 46:
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
	//
	//

	exports.default = {
	  name: 'ElButton',

	  props: {
	    active: Boolean,
	    type: {
	      type: String,
	      default: 'default'
	    },
	    size: String,
	    icon: {
	      type: String,
	      default: ''
	    },
	    nativeType: {
	      type: String,
	      default: 'button'
	    },
	    loading: Boolean,
	    disabled: Boolean,
	    plain: Boolean,
	    plainLight: Boolean,
	    autofocus: Boolean
	  },

	  methods: {
	    handleClick: function handleClick(evt) {
	      this.$emit('click', evt);
	    }
	  }
	};

/***/ },

/***/ 47:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', {
	    staticClass: "el-button",
	    class: [
	      _vm.type ? 'el-button--' + _vm.type : '',
	      _vm.size ? 'el-button--' + _vm.size : '',
	      _vm.active ? 'is-active' : '',
	      {
	        'is-disabled': _vm.disabled,
	        'is-loading': _vm.loading,
	        'is-plain': _vm.plain,
	        'is-plain-light': _vm.plainLight
	      }
	    ],
	    attrs: {
	      "disabled": _vm.disabled,
	      "autofocus": _vm.autofocus,
	      "type": _vm.nativeType
	    },
	    on: {
	      "click": _vm.handleClick
	    }
	  }, [(_vm.loading) ? _c('i', {
	    staticClass: "el-icon-loading"
	  }) : _vm._e(), (_vm.icon && !_vm.loading) ? _c('i', {
	    class: 'el-icon-' + _vm.icon
	  }) : _vm._e(), (_vm.$slots.default) ? _c('span', [_vm._t("default")], 2) : _vm._e()])
	},staticRenderFns: []}

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _buttonGroup = __webpack_require__(49);

	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_buttonGroup2.default.install = function (Vue) {
	  Vue.component(_buttonGroup2.default.name, _buttonGroup2.default);
	};

	exports.default = _buttonGroup2.default;

/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(50)

	/* template */
	var __vue_template__ = __webpack_require__(51)
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

/***/ 50:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	//
	//
	//
	//
	//

	/**
	 * button
	 * @module components/basic/menu
	 * @desc 用于按钮组
	 * @param {string} label - 名称
	 */
	exports.default = {
	  name: 'ElButtonGroup'
	};

/***/ },

/***/ 51:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-button-group"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vue = __webpack_require__(18);

	var _vue2 = _interopRequireDefault(_vue);

	var _dom = __webpack_require__(21);

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

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _dropdown = __webpack_require__(156);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_dropdown2.default.install = function (Vue) {
	  Vue.component(_dropdown2.default.name, _dropdown2.default);
	};

	exports.default = _dropdown2.default;

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(157)
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


	module.exports = __vue_exports__


/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _clickoutside = __webpack_require__(72);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _button = __webpack_require__(44);

	var _button2 = _interopRequireDefault(_button);

	var _buttonGroup = __webpack_require__(48);

	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElDropdown',

	  componentName: 'ElDropdown',

	  mixins: [_emitter2.default],

	  directives: { Clickoutside: _clickoutside2.default },

	  components: {
	    ElButton: _button2.default,
	    ElButtonGroup: _buttonGroup2.default
	  },

	  props: {
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    menuAlign: {
	      type: String,
	      default: 'end'
	    },
	    type: String,
	    size: String,
	    splitButton: Boolean,
	    hideOnClick: {
	      type: Boolean,
	      default: true
	    }
	  },

	  data: function data() {
	    return {
	      timeout: null,
	      visible: false
	    };
	  },
	  mounted: function mounted() {
	    this.$on('menu-item-click', this.handleMenuItemClick);
	    this.initEvent();
	  },


	  watch: {
	    visible: function visible(val) {
	      this.broadcast('ElDropdownMenu', 'visible', val);
	      this.$emit('visible-change', val);
	    }
	  },

	  methods: {
	    show: function show() {
	      var _this = this;

	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        _this.visible = true;
	      }, 250);
	    },
	    hide: function hide() {
	      var _this2 = this;

	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        _this2.visible = false;
	      }, 150);
	    },
	    handleClick: function handleClick() {
	      this.visible = !this.visible;
	    },
	    initEvent: function initEvent() {
	      var trigger = this.trigger;
	      var show = this.show;
	      var hide = this.hide;
	      var handleClick = this.handleClick;
	      var splitButton = this.splitButton;

	      var triggerElm = splitButton ? this.$refs.trigger.$el : this.$slots.default[0].elm;

	      if (trigger === 'hover') {
	        triggerElm.addEventListener('mouseenter', show);
	        triggerElm.addEventListener('mouseleave', hide);

	        var dropdownElm = this.$slots.dropdown[0].elm;

	        dropdownElm.addEventListener('mouseenter', show);
	        dropdownElm.addEventListener('mouseleave', hide);
	      } else if (trigger === 'click') {
	        triggerElm.addEventListener('click', handleClick);
	      }
	    },
	    handleMenuItemClick: function handleMenuItemClick(command, instance) {
	      if (this.hideOnClick) {
	        this.visible = false;
	      }
	      this.$emit('command', command, instance);
	    }
	  },

	  render: function render(h) {
	    var _this3 = this;

	    var hide = this.hide;
	    var splitButton = this.splitButton;
	    var type = this.type;
	    var size = this.size;


	    var handleClick = function handleClick(_) {
	      _this3.$emit('click');
	    };

	    var triggerElm = !splitButton ? this.$slots.default : h(
	      'el-button-group',
	      null,
	      [h(
	        'el-button',
	        {
	          attrs: { type: type, size: size },
	          nativeOn: {
	            'click': handleClick
	          }
	        },
	        [this.$slots.default]
	      ), h(
	        'el-button',
	        { ref: 'trigger', attrs: { type: type, size: size },
	          'class': 'el-dropdown__caret-button' },
	        [h(
	          'i',
	          { 'class': 'el-dropdown__icon el-icon-caret-bottom' },
	          []
	        )]
	      )]
	    );

	    return h(
	      'div',
	      { 'class': 'el-dropdown', directives: [{
	          name: 'clickoutside',
	          value: hide
	        }]
	      },
	      [triggerElm, this.$slots.dropdown]
	    );
	  }
	};

/***/ }

/******/ });