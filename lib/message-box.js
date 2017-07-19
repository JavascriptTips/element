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

	module.exports = __webpack_require__(211);


/***/ },

/***/ 8:
/***/ function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/input");

/***/ },

/***/ 53:
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },

/***/ 59:
/***/ function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/mixins/locale");

/***/ },

/***/ 60:
/***/ function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/locale");

/***/ },

/***/ 121:
/***/ function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/utils/dom");

/***/ },

/***/ 144:
/***/ function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/button");

/***/ },

/***/ 171:
/***/ function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/utils/merge");

/***/ },

/***/ 202:
/***/ function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/utils/popup");

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _main = __webpack_require__(212);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _main2.default;

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.MessageBox = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _vue = __webpack_require__(53);

	var _vue2 = _interopRequireDefault(_vue);

	var _main = __webpack_require__(213);

	var _main2 = _interopRequireDefault(_main);

	var _merge = __webpack_require__(171);

	var _merge2 = _interopRequireDefault(_merge);

	var _vdom = __webpack_require__(217);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaults = {
	  title: undefined,
	  message: '',
	  type: '',
	  showInput: false,
	  showClose: true,
	  modalFade: true,
	  lockScroll: true,
	  closeOnClickModal: true,
	  closeOnPressEscape: true,
	  inputValue: null,
	  inputPlaceholder: '',
	  inputPattern: null,
	  inputValidator: null,
	  inputErrorMessage: '',
	  showConfirmButton: true,
	  showCancelButton: false,
	  confirmButtonPosition: 'right',
	  confirmButtonHighlight: false,
	  cancelButtonHighlight: false,
	  confirmButtonText: '',
	  cancelButtonText: '',
	  confirmButtonClass: '',
	  cancelButtonClass: '',
	  isDate: false,
	  maxDate: null,
	  minDate: null,
	  minDateTime: null,
	  maxDateTime: null,
	  customClass: '',
	  beforeClose: null
	};

	var MessageBoxConstructor = _vue2.default.extend(_main2.default);

	var currentMsg = void 0,
	    instance = void 0;
	var msgQueue = [];

	var defaultCallback = function defaultCallback(action) {
	  if (currentMsg) {
	    var callback = currentMsg.callback;
	    if (typeof callback === 'function') {
	      if (instance.showInput) {
	        callback(instance.inputValue, action);
	      } else {
	        callback(action);
	      }
	    }
	    if (currentMsg.resolve) {
	      var $type = currentMsg.options.$type;
	      if ($type === 'confirm' || $type === 'prompt') {
	        if (action === 'confirm') {
	          if (instance.showInput) {
	            currentMsg.resolve({ value: instance.inputValue, action: action });
	          } else {
	            currentMsg.resolve(action);
	          }
	        } else if (action === 'cancel' && currentMsg.reject) {
	          currentMsg.reject(action);
	        }
	      } else {
	        currentMsg.resolve(action);
	      }
	    }
	  }
	};

	var initInstance = function initInstance() {
	  instance = new MessageBoxConstructor({
	    el: document.createElement('div')
	  });

	  instance.callback = defaultCallback;
	};

	var showNextMsg = function showNextMsg() {
	  if (!instance) {
	    initInstance();
	  }
	  instance.action = '';

	  if (!instance.visible || instance.closeTimer) {
	    if (msgQueue.length > 0) {
	      (function () {
	        currentMsg = msgQueue.shift();

	        var options = currentMsg.options;
	        for (var prop in options) {
	          if (options.hasOwnProperty(prop)) {
	            instance[prop] = options[prop];
	          }
	        }
	        if (options.callback === undefined) {
	          instance.callback = defaultCallback;
	        }

	        var oldCb = instance.callback;
	        instance.callback = function (action, instance) {
	          oldCb(action, instance);
	          showNextMsg();
	        };
	        if ((0, _vdom.isVNode)(instance.message)) {
	          instance.$slots.default = [instance.message];
	          instance.message = null;
	        } else {
	          delete instance.$slots.default;
	        }
	        ['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape'].forEach(function (prop) {
	          if (instance[prop] === undefined) {
	            instance[prop] = true;
	          }
	        });
	        document.body.appendChild(instance.$el);

	        _vue2.default.nextTick(function () {
	          instance.visible = true;
	        });
	      })();
	    }
	  }
	};

	var MessageBox = function MessageBox(options, callback) {
	  if (_vue2.default.prototype.$isServer) return;
	  if (typeof options === 'string') {
	    options = {
	      message: options
	    };
	    if (arguments[1]) {
	      options.title = arguments[1];
	    }
	    if (arguments[2]) {
	      options.type = arguments[2];
	    }
	  } else if (options.callback && !callback) {
	    callback = options.callback;
	  }

	  if (typeof Promise !== 'undefined') {
	    return new Promise(function (resolve, reject) {
	      // eslint-disable-line
	      msgQueue.push({
	        options: (0, _merge2.default)({}, defaults, MessageBox.defaults, options),
	        callback: callback,
	        resolve: resolve,
	        reject: reject
	      });

	      showNextMsg();
	    });
	  } else {
	    msgQueue.push({
	      options: (0, _merge2.default)({}, defaults, MessageBox.defaults, options),
	      callback: callback
	    });

	    showNextMsg();
	  }
	};

	MessageBox.setDefaults = function (defaults) {
	  MessageBox.defaults = defaults;
	};

	MessageBox.alert = function (message, title, options) {
	  if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object') {
	    options = title;
	    title = '';
	  }
	  return MessageBox((0, _merge2.default)({
	    title: title,
	    message: message,
	    $type: 'alert',
	    closeOnPressEscape: false,
	    closeOnClickModal: false
	  }, options));
	};

	MessageBox.confirm = function (message, title, options) {
	  if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object') {
	    options = title;
	    title = '';
	  }
	  return MessageBox((0, _merge2.default)({
	    title: title,
	    message: message,
	    $type: 'confirm',
	    showCancelButton: true
	  }, options));
	};

	MessageBox.prompt = function (message, title, options) {
	  if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object') {
	    options = title;
	    title = '';
	  }
	  return MessageBox((0, _merge2.default)({
	    title: title,
	    message: message,
	    showCancelButton: true,
	    showInput: true,
	    $type: 'prompt'
	  }, options));
	};

	MessageBox.close = function () {
	  instance.visible = false;
	  msgQueue = [];
	  currentMsg = null;
	};

	exports.default = MessageBox;
	exports.MessageBox = MessageBox;

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(214)

	/* template */
	var __vue_template__ = __webpack_require__(216)
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

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _popup = __webpack_require__(202);

	var _popup2 = _interopRequireDefault(_popup);

	var _locale = __webpack_require__(59);

	var _locale2 = _interopRequireDefault(_locale);

	var _input = __webpack_require__(8);

	var _input2 = _interopRequireDefault(_input);

	var _button = __webpack_require__(144);

	var _button2 = _interopRequireDefault(_button);

	var _jdateTimePicker = __webpack_require__(215);

	var _jdateTimePicker2 = _interopRequireDefault(_jdateTimePicker);

	var _dom = __webpack_require__(121);

	var _locale3 = __webpack_require__(60);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var typeMap = {
	  success: 'circle-check',
	  info: 'information',
	  warning: 'warning',
	  error: 'circle-cross'
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

	exports.default = {
	  mixins: [_popup2.default, _locale2.default],

	  props: {
	    modal: {
	      default: true
	    },
	    lockScroll: {
	      default: true
	    },
	    showClose: {
	      type: Boolean,
	      default: true
	    },
	    closeOnClickModal: {
	      default: true
	    },
	    closeOnPressEscape: {
	      default: true
	    }
	  },

	  components: {
	    ElInput: _input2.default,
	    ElButton: _button2.default,
	    ElJdateTimePicker: _jdateTimePicker2.default
	  },

	  computed: {
	    typeClass: function typeClass() {
	      return this.type && typeMap[this.type] ? 'el-icon-' + typeMap[this.type] : '';
	    },
	    confirmButtonClasses: function confirmButtonClasses() {
	      return 'el-button--primary ' + this.confirmButtonClass;
	    },
	    cancelButtonClasses: function cancelButtonClasses() {
	      return '' + this.cancelButtonClass;
	    }
	  },

	  methods: {
	    getSafeClose: function getSafeClose() {
	      var _this = this;

	      var currentId = this.uid;
	      return function () {
	        _this.$nextTick(function () {
	          if (currentId === _this.uid) _this.doClose();
	        });
	      };
	    },
	    doClose: function doClose() {
	      var _this2 = this;

	      if (!this.visible) return;
	      this.visible = false;
	      this._closing = true;

	      this.onClose && this.onClose();

	      if (this.lockScroll) {
	        setTimeout(function () {
	          if (_this2.modal && _this2.bodyOverflow !== 'hidden') {
	            document.body.style.overflow = _this2.bodyOverflow;
	            document.body.style.paddingRight = _this2.bodyPaddingRight;
	          }
	          _this2.bodyOverflow = null;
	          _this2.bodyPaddingRight = null;
	        }, 200);
	      }
	      this.opened = false;

	      if (!this.transition) {
	        this.doAfterClose();
	      }
	      if (this.action) this.callback(this.action, this);
	    },
	    handleWrapperClick: function handleWrapperClick() {
	      if (this.closeOnClickModal) {
	        this.handleAction('cancel');
	      }
	    },
	    handleAction: function handleAction(action) {
	      if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
	        return;
	      }
	      this.action = action;
	      if (typeof this.beforeClose === 'function') {
	        this.close = this.getSafeClose();
	        this.beforeClose(action, this, this.close);
	      } else {
	        this.doClose();
	      }
	    },
	    validate: function validate() {
	      if (this.$type === 'prompt') {
	        var inputPattern = this.inputPattern;
	        if (inputPattern && !inputPattern.test(this.inputValue || '')) {
	          this.editorErrorMessage = this.inputErrorMessage || (0, _locale3.t)('el.messagebox.error');
	          (0, _dom.addClass)(this.$refs.input.$el.querySelector('input'), 'invalid');
	          return false;
	        }
	        var inputValidator = this.inputValidator;
	        if (typeof inputValidator === 'function') {
	          var validateResult = inputValidator(this.inputValue);
	          if (validateResult === false) {
	            this.editorErrorMessage = this.inputErrorMessage || (0, _locale3.t)('el.messagebox.error');
	            (0, _dom.addClass)(this.$refs.input.$el.querySelector('input'), 'invalid');
	            return false;
	          }
	          if (typeof validateResult === 'string') {
	            this.editorErrorMessage = validateResult;
	            return false;
	          }
	        }
	      }
	      this.editorErrorMessage = '';
	      (0, _dom.removeClass)(this.$refs.input.$el.querySelector('input'), 'invalid');
	      return true;
	    }
	  },

	  watch: {
	    inputValue: {
	      immediate: true,
	      handler: function handler(val) {
	        var _this3 = this;

	        this.$nextTick(function (_) {
	          if (_this3.$type === 'prompt' && val !== null) {
	            _this3.validate();
	          }
	        });
	      }
	    },

	    visible: function visible(val) {
	      var _this4 = this;

	      if (val) this.uid++;
	      if (this.$type === 'alert' || this.$type === 'confirm') {
	        this.$nextTick(function () {
	          _this4.$refs.confirm.$el.focus();
	        });
	      }
	      if (this.$type !== 'prompt') return;
	      if (val) {
	        setTimeout(function () {
	          if (_this4.$refs.input && _this4.$refs.input.$el) {
	            _this4.$refs.input.$el.querySelector('input').focus();
	          }
	        }, 500);
	      } else {
	        this.editorErrorMessage = '';
	        (0, _dom.removeClass)(this.$refs.input.$el.querySelector('input'), 'invalid');
	      }
	    }
	  },

	  data: function data() {
	    return {
	      uid: 1,
	      title: undefined,
	      message: '',
	      type: '',
	      customClass: '',
	      showInput: false,
	      inputValue: null,
	      inputPlaceholder: '',
	      inputPattern: null,
	      inputValidator: null,
	      inputErrorMessage: '',
	      showConfirmButton: true,
	      showCancelButton: false,
	      action: '',
	      confirmButtonText: '',
	      cancelButtonText: '',
	      confirmButtonLoading: false,
	      cancelButtonLoading: false,
	      confirmButtonClass: '',
	      confirmButtonDisabled: false,
	      cancelButtonClass: '',
	      editorErrorMessage: null,
	      callback: null,
	      isDate: false,
	      maxDate: null,
	      minDate: null,
	      minDateTime: null,
	      maxDateTime: null,
	      isTime: false
	    };
	  }
	};

/***/ },

/***/ 215:
/***/ function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/jdate-time-picker");

/***/ },

/***/ 216:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "msgbox-fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    staticClass: "el-message-box__wrapper",
	    attrs: {
	      "tabindex": "-1"
	    },
	    on: {
	      "click": function($event) {
	        if ($event.target !== $event.currentTarget) { return null; }
	        _vm.handleWrapperClick($event)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "el-message-box",
	    class: _vm.customClass
	  }, [(_vm.title !== undefined && !_vm.isDate) ? _c('div', {
	    staticClass: "el-message-box__header"
	  }, [_c('div', {
	    staticClass: "el-message-box__title"
	  }, [_c('div', {
	    staticClass: "el-message-box__status",
	    class: [_vm.typeClass]
	  }), _c('span', [_vm._v(_vm._s(_vm.title || _vm.t('el.messagebox.title')))])])]) : _vm._e(), (_vm.message !== '') ? _c('div', {
	    staticClass: "el-message-box__content"
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.isDate),
	      expression: "!isDate"
	    }],
	    staticClass: "el-message-box__message"
	  }, [_c('p', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.message)
	    }
	  })]), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showInput && !_vm.isDate),
	      expression: "showInput && !isDate"
	    }],
	    staticClass: "el-message-box__input"
	  }, [_c('el-input', {
	    ref: "input",
	    attrs: {
	      "placeholder": _vm.inputPlaceholder
	    },
	    nativeOn: {
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        _vm.handleAction('confirm')
	      }
	    },
	    model: {
	      value: (_vm.inputValue),
	      callback: function($$v) {
	        _vm.inputValue = $$v
	      },
	      expression: "inputValue"
	    }
	  }), _c('div', {
	    staticClass: "el-message-box__errormsg",
	    style: ({
	      visibility: !!_vm.editorErrorMessage ? 'visible' : 'hidden'
	    })
	  }, [_vm._v(_vm._s(_vm.editorErrorMessage))])], 1), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showInput && _vm.isDate),
	      expression: "showInput && isDate"
	    }],
	    staticClass: "el-message-box__input"
	  }, [_c('el-jdate-time-picker', {
	    ref: "input",
	    attrs: {
	      "max-date": _vm.maxDate,
	      "min-date-time": _vm.minDateTime,
	      "max-date-time": _vm.maxDateTime,
	      "time-picker": _vm.isTime,
	      "min-date": _vm.minDate,
	      "placeholder": _vm.inputPlaceholder
	    },
	    model: {
	      value: (_vm.inputValue),
	      callback: function($$v) {
	        _vm.inputValue = $$v
	      },
	      expression: "inputValue"
	    }
	  }, [_c('div', {
	    staticClass: "el-message-box__input-date"
	  }, [_c('span', [_vm._v(_vm._s(_vm.message))]), _c('div', {
	    staticClass: "el-message-box__el-input"
	  }, [_c('el-input', {
	    attrs: {
	      "icon": "date"
	    },
	    model: {
	      value: (_vm.inputValue),
	      callback: function($$v) {
	        _vm.inputValue = $$v
	      },
	      expression: "inputValue"
	    }
	  })], 1)])])], 1)]) : _vm._e(), _c('div', {
	    staticClass: "el-message-box__btns"
	  }, [_c('el-button', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showCancelButton),
	      expression: "showCancelButton"
	    }],
	    class: [_vm.cancelButtonClasses],
	    attrs: {
	      "loading": _vm.cancelButtonLoading
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.handleAction('cancel')
	      }
	    }
	  }, [_vm._v("\n          " + _vm._s(_vm.cancelButtonText || _vm.t('el.messagebox.cancel')) + "\n        ")]), _c('el-button', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showConfirmButton),
	      expression: "showConfirmButton"
	    }],
	    ref: "confirm",
	    class: [_vm.confirmButtonClasses],
	    attrs: {
	      "loading": _vm.confirmButtonLoading
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.handleAction('confirm')
	      }
	    }
	  }, [_vm._v("\n          " + _vm._s(_vm.confirmButtonText || _vm.t('el.messagebox.confirm')) + "\n        ")])], 1)])])])
	},staticRenderFns: []}

/***/ },

/***/ 217:
/***/ function(module, exports) {

	module.exports = require("@qp/qp-element-ui/lib/utils/vdom");

/***/ }

/******/ });