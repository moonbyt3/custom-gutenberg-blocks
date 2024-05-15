(window["webpackJsonp_custom_gutenberg_blocks"] = window["webpackJsonp_custom_gutenberg_blocks"] || []).push([["style-index"],{

/***/ "./src/blocks/categories-slider/style.scss":
/*!*************************************************!*\
  !*** ./src/blocks/categories-slider/style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/example/style.scss":
/*!***************************************!*\
  !*** ./src/blocks/example/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/slide/style.scss":
/*!*************************************!*\
  !*** ./src/blocks/slide/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_custom_gutenberg_blocks"] = window["webpackJsonp_custom_gutenberg_blocks"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./src/blocks/categories-slider/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/categories-slider/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);




function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _wp$element = wp.element,
  useState = _wp$element.useState,
  useEffect = _wp$element.useEffect;
var useSelect = wp.data.useSelect;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
  InspectorControls = _wp$blockEditor.InspectorControls,
  InnerBlocks = _wp$blockEditor.InnerBlocks,
  useBlockProps = _wp$blockEditor.useBlockProps,
  useInnerBlocksProps = _wp$blockEditor.useInnerBlocksProps;
var _wp$components = wp.components,
  PanelBody = _wp$components.PanelBody,
  TextControl = _wp$components.TextControl,
  CheckboxControl = _wp$components.CheckboxControl,
  FormTokenField = _wp$components.FormTokenField;
var apiFetch = wp.apiFetch;
var addQueryArgs = wp.url.addQueryArgs;
var __ = wp.i18n.__;
var productCategories = function productCategories(queryArgs) {
  return apiFetch({
    path: addQueryArgs("wc/store/products/categories", _objectSpread({
      per_page: 0
    }, queryArgs))
  });
};
registerBlockType('custom-blocks/categories-slider', {
  apiVersion: 2,
  title: 'Categories Slider',
  icon: 'layout',
  category: 'common',
  description: 'Block that displays categories-slider title.',
  keywords: ['categories', 'slider'],
  attributes: {
    title: {
      type: 'string'
    },
    categories: {
      type: 'array'
    },
    pickedCategories: {
      type: 'array'
    }
  },
  edit: function edit(props) {
    var ALLOWED_BLOCKS = ['custom-blocks/slide'];
    var _props$attributes = props.attributes,
      categories = _props$attributes.categories,
      pickedCategories = _props$attributes.pickedCategories,
      clientId = props.clientId,
      setAttributes = props.setAttributes,
      className = props.className;
    var innerBlocksProps = useInnerBlocksProps();
    useEffect(function () {
      productCategories().then(function (fetchedCategories) {
        setAttributes({
          categories: fetchedCategories
        });
      });
    }, []);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", useBlockProps(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(PanelBody, {
      title: "My Block Settings"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(FormTokenField, {
      label: "Choose product categories",
      __experimentalExpandOnFocus: true,
      value: pickedCategories && pickedCategories.map(function (item) {
        return item.name;
      }),
      suggestions: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()((categories || []).map(function (category) {
        return category.name;
      })),
      maxSuggestions: 20,
      onChange: function onChange(tokens) {
        var filteredTerms = categories.filter(function (item) {
          return tokens.some(function (category) {
            return category === item.name;
          });
        });
        return setAttributes({
          pickedCategories: filteredTerms
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "block-categories-slider"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "block-categories-slider-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "block-categories-slider__menu"
    }, pickedCategories && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "block-categories-slider__menu-item-wrapper"
    }, pickedCategories.map(function (_ref) {
      var name = _ref.name,
        image = _ref.image,
        id = _ref.id;
      console.log(image);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
        className: "categories-slider__menu-item",
        key: "cat-".concat(id)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
        className: "categories-slider__menu-item-img"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
        src: image ? image.src : '/wp-content/uploads/woocommerce-placeholder-324x324.png',
        alt: "Category: ".concat(name, " image")
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
        className: "categories-slider__menu-item-text"
      }, name));
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      style: {
        'display': 'block',
        'width': '80%'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(InnerBlocks, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, innerBlocksProps, {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: function renderAppender() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    })))))));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/blocks/example/index.js":
/*!*************************************!*\
  !*** ./src/blocks/example/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.blockEditor.RichText;
var TextControl = wp.components.TextControl;
var __ = wp.i18n.__;
registerBlockType('custom-blocks/example', {
  title: 'Example',
  icon: 'layout',
  category: 'common',
  description: 'Block that displays example title.',
  keywords: ['example'],
  attributes: {
    title: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var title = props.attributes.title,
      setAttributes = props.setAttributes,
      className = props.className;
    var onTitleChange = function onTitleChange(newContent) {
      setAttributes({
        title: newContent
      });
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "block-example"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "h2",
      className: className + ' block-example__text',
      onChange: onTitleChange,
      value: title,
      placeholder: __('Write your custom message', 'custom-gutenberg-blocks')
    })));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/slide/index.js":
/*!***********************************!*\
  !*** ./src/blocks/slide/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
  useBlockProps = _wp$blockEditor.useBlockProps,
  InspectorControls = _wp$blockEditor.InspectorControls,
  MediaUpload = _wp$blockEditor.MediaUpload,
  RichText = _wp$blockEditor.RichText,
  URLInputButton = _wp$blockEditor.URLInputButton;
var _wp$components = wp.components,
  Panel = _wp$components.Panel,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  TextControl = _wp$components.TextControl,
  Button = _wp$components.Button;
var __ = wp.i18n.__;
registerBlockType('custom-blocks/slide', {
  title: 'Slide',
  icon: 'layout',
  category: 'common',
  description: 'GUTENBERG Block that displays SLIDE for slider title.',
  keywords: ['slide'],
  parent: ['custom-blocks/categories-slider'],
  attributes: {
    slideImageBackground: {
      type: 'string'
    },
    slideImageBackgroundTablet: {
      type: 'string'
    },
    slideImageBackgroundMobile: {
      type: 'string'
    },
    slideSubtitle: {
      type: 'string'
    },
    slideTitle: {
      type: 'string'
    },
    slideText: {
      type: 'string'
    },
    slideButtonUrl: {
      type: 'string'
    },
    slideButtonText: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
      slideImageBackground = _props$attributes.slideImageBackground,
      slideImageBackgroundTablet = _props$attributes.slideImageBackgroundTablet,
      slideImageBackgroundMobile = _props$attributes.slideImageBackgroundMobile,
      slideSubtitle = _props$attributes.slideSubtitle,
      slideTitle = _props$attributes.slideTitle,
      slideText = _props$attributes.slideText,
      slideButtonUrl = _props$attributes.slideButtonUrl,
      slideButtonText = _props$attributes.slideButtonText,
      setAttributes = props.setAttributes,
      className = props.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, {
      header: "My Panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Settings",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      style: {
        'display': 'block'
      },
      src: slideImageBackgroundTablet !== null && slideImageBackgroundTablet !== void 0 ? slideImageBackgroundTablet : '/wp-content/uploads/woocommerce-placeholder-324x324.png'
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: function onSelect(media) {
        return setAttributes({
          slideImageBackgroundTablet: media.url
        });
      },
      type: "image",
      value: slideImageBackgroundTablet,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          isPrimary: true,
          onClick: open
        }, !slideImageBackgroundTablet ? 'Upload Tablet Image' : 'Edit Tablet Background');
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      style: {
        'display': 'block'
      },
      src: slideImageBackgroundMobile !== null && slideImageBackgroundMobile !== void 0 ? slideImageBackgroundMobile : '/wp-content/uploads/woocommerce-placeholder-324x324.png'
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: function onSelect(media) {
        return setAttributes({
          slideImageBackgroundMobile: media.url
        });
      },
      type: "image",
      value: slideImageBackgroundMobile,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          isPrimary: true,
          onClick: open
        }, !slideImageBackgroundMobile ? 'Upload Mobile Image' : 'Edit Mobile Background');
      }
    })))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", useBlockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "categories-slider__items-slide flexible-bg-image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("picture", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "has-cover",
      src: slideImageBackground,
      alt: ""
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "categories-slider__items-slide-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "categories-slider__items-slide-content-label onsale"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "h3",
      className: "categories-slider__items-slide-content-label-text",
      value: slideSubtitle,
      onChange: function onChange(value) {
        return setAttributes({
          slideSubtitle: value
        });
      },
      placeholder: "Enter subtitle"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: "categories-slider__items-slide-content-title bg-blur",
      tagName: "h2",
      value: slideTitle,
      onChange: function onChange(value) {
        return setAttributes({
          slideTitle: value
        });
      },
      placeholder: "Enter title"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "categories-slider__items-slide-content-text bg-blur"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "p",
      value: slideText,
      onChange: function onChange(value) {
        return setAttributes({
          slideText: value
        });
      },
      placeholder: "Enter text"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      href: "<?php echo esc_url($link_url); ?>",
      target: "<?php echo esc_attr($link_target); ?>",
      className: "button"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "p",
      value: slideButtonText,
      onChange: function onChange(value) {
        return setAttributes({
          slideButtonText: value
        });
      },
      placeholder: "Enter text"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      url: slideButtonUrl,
      onChange: function onChange(url) {
        return setAttributes({
          slideButtonUrl: url
        });
      },
      expanded: true
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: function onSelect(media) {
        return setAttributes({
          slideImageBackground: media.url
        });
      },
      type: "image",
      value: slideImageBackground,
      render: function render(_ref3) {
        var open = _ref3.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          isPrimary: true,
          onClick: open
        }, !slideImageBackground ? 'Upload Image' : 'Edit Background');
      }
    }))));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_example_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/example/style.scss */ "./src/blocks/example/style.scss");
/* harmony import */ var _blocks_example_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_example_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_example___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/example/ */ "./src/blocks/example/index.js");
/* harmony import */ var _blocks_categories_slider_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/categories-slider/style.scss */ "./src/blocks/categories-slider/style.scss");
/* harmony import */ var _blocks_categories_slider_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_categories_slider_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blocks_categories_slider___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/categories-slider/ */ "./src/blocks/categories-slider/index.js");
/* harmony import */ var _blocks_slide_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/slide/style.scss */ "./src/blocks/slide/style.scss");
/* harmony import */ var _blocks_slide_style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_slide_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blocks_slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/slide */ "./src/blocks/slide/index.js");








/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map