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

	module.exports = __webpack_require__(153);


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

/***/ 19:
/***/ (function(module, exports) {

	module.exports = require("vue");

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

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _component = __webpack_require__(154);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_component2.default.install = function (Vue) {
	  Vue.component(_component2.default.name, _component2.default);
	};

	exports.default = _component2.default;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(155),
	  /* template */
	  __webpack_require__(158),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _popupOld = __webpack_require__(156);

	var _popupOld2 = _interopRequireDefault(_popupOld);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'el-dialog',

	  mixins: [_popupOld2.default],

	  props: {
	    title: {
	      type: String,
	      default: ''
	    },

	    subtitle: {
	      type: String,
	      default: ''
	    },

	    titleBottom: {
	      type: Boolean,
	      default: true
	    },

	    modal: {
	      type: Boolean,
	      default: true
	    },

	    lockScroll: {
	      type: Boolean,
	      default: true
	    },

	    closeOnClickModal: {
	      type: Boolean,
	      default: true
	    },

	    closeOnPressEscape: {
	      type: Boolean,
	      default: true
	    },

	    showClose: {
	      type: Boolean,
	      default: true
	    },

	    size: {
	      type: String,
	      default: 'small'
	    },

	    customClass: {
	      type: String,
	      default: ''
	    },

	    top: {
	      type: String,
	      default: '15%'
	    }
	  },
	  data: function data() {
	    return {
	      visible: false
	    };
	  },


	  watch: {
	    value: function value(val) {
	      this.visible = val;
	    },
	    visible: function visible(val) {
	      var _this = this;

	      this.$emit('input', val);
	      if (val) {
	        this.$emit('open');
	        this.$nextTick(function () {
	          var dialogWidth = parseInt(getComputedStyle(_this.$refs.dialog).width, 10);
	          _this.$refs.dialog.scrollTop = 0;
	          _this.$refs.dialog.style.marginLeft = '-' + dialogWidth / 2 + 'px';
	        });
	      } else {
	        this.$emit('close');
	      }
	    }
	  },

	  computed: {
	    sizeClass: function sizeClass() {
	      return 'el-dialog--' + this.size;
	    },
	    style: function style() {
	      return this.size === 'full' ? {} : { 'margin-bottom': '50px', 'top': this.top };
	    }
	  },

	  methods: {
	    handleWrapperClick: function handleWrapperClick() {
	      if (this.closeOnClickModal) {
	        this.close();
	      }
	    }
	  },

	  mounted: function mounted() {
	    if (this.value) {
	      this.rendered = true;
	      this.open();
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
	//
	//
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

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.PopupManager = undefined;

	var _vue = __webpack_require__(19);

	var _vue2 = _interopRequireDefault(_vue);

	var _merge = __webpack_require__(14);

	var _merge2 = _interopRequireDefault(_merge);

	var _popupManager = __webpack_require__(157);

	var _popupManager2 = _interopRequireDefault(_popupManager);

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
	var getScrollBarWidth = function getScrollBarWidth() {
	  if (_vue2.default.prototype.$isServer) return;
	  if (scrollBarWidth !== undefined) return scrollBarWidth;

	  var outer = document.createElement('div');
	  outer.style.visibility = 'hidden';
	  outer.style.width = '100px';
	  outer.style.position = 'absolute';
	  outer.style.top = '-9999px';
	  document.body.appendChild(outer);

	  var widthNoScroll = outer.offsetWidth;
	  outer.style.overflow = 'scroll';

	  var inner = document.createElement('div');
	  inner.style.width = '100%';
	  outer.appendChild(inner);

	  var widthWithScroll = inner.offsetWidth;
	  outer.parentNode.removeChild(outer);

	  return widthNoScroll - widthWithScroll;
	};

	var getDOM = function getDOM(dom) {
	  if (dom.nodeType === 3) {
	    dom = dom.nextElementSibling || dom.nextSibling;
	    getDOM(dom);
	  }
	  return dom;
	};

	exports.default = {
	  props: {
	    value: {
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
	    value: function value(val) {
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
	        this.$emit('input', true);
	      }

	      var props = (0, _merge2.default)({}, this, this.$props, options);

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

	      // 使用 vue-popup 的组件，如果需要和父组件通信显示的状态，应该使用 value，它是一个 prop，
	      // 这样在父组件中用 v-model 即可；否则可以使用 visible，它是一个 data
	      this.visible = true;
	      this.$emit('input', true);

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
	        _popupManager2.default.openModal(this._popupId, _popupManager2.default.nextZIndex(), dom, props.modalClass, props.modalFade);
	        if (props.lockScroll) {
	          if (!this.bodyOverflow) {
	            this.bodyPaddingRight = document.body.style.paddingRight;
	            this.bodyOverflow = document.body.style.overflow;
	          }
	          scrollBarWidth = getScrollBarWidth();
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

	      this.visible = false;
	      this.$emit('input', false);
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

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vue = __webpack_require__(19);

	var _vue2 = _interopRequireDefault(_vue);

	var _dom = __webpack_require__(22);

	var _popupManager = __webpack_require__(21);

	var _popupManager2 = _interopRequireDefault(_popupManager);

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
	    _popupManager2.default.nextZIndex();
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
	!_vue2.default.prototype.$isServer && window.addEventListener('keydown', function (event) {
	  if (event.keyCode === 27) {
	    // ESC
	    if (PopupManager.modalStack.length > 0) {
	      var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
	      if (!topItem) return;
	      var instance = PopupManager.getInstance(topItem.id);
	      if (instance.closeOnPressEscape) {
	        instance.close();
	      }
	    }
	  }
	});

	exports.default = PopupManager;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "dialog-fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    staticClass: "el-dialog__wrapper",
	    on: {
	      "click": function($event) {
	        if ($event.target !== $event.currentTarget) { return null; }
	        _vm.handleWrapperClick($event)
	      }
	    }
	  }, [_c('div', {
	    ref: "dialog",
	    staticClass: "el-dialog",
	    class: [_vm.sizeClass, _vm.customClass],
	    style: (_vm.style)
	  }, [_c('div', {
	    staticClass: "el-dialog__header",
	    class: {
	      'el-dialog__header--bottom': _vm.titleBottom
	    }
	  }, [_c('span', {
	    staticClass: "el-dialog__title"
	  }, [_vm._v(_vm._s(_vm.title))]), _c('span', {
	    staticClass: "el-dialog__title--small",
	    domProps: {
	      "innerHTML": _vm._s(_vm.subtitle)
	    }
	  }), _c('div', {
	    staticClass: "el-dialog__headerbtn"
	  }, [(_vm.showClose) ? _c('i', {
	    staticClass: "el-dialog__close el-icon el-icon-close",
	    on: {
	      "click": function($event) {
	        _vm.close()
	      }
	    }
	  }) : _vm._e()])]), (_vm.rendered) ? _c('div', {
	    staticClass: "el-dialog__body"
	  }, [_vm._t("default")], 2) : _vm._e(), (_vm.$slots.footer) ? _c('div', {
	    staticClass: "el-dialog__footer"
	  }, [_vm._t("footer")], 2) : _vm._e()])])])
	},staticRenderFns: []}

/***/ })

/******/ });