(window["webpackJsonp_custom_gutenberg_blocks"] = window["webpackJsonp_custom_gutenberg_blocks"] || []).push([["style-index"],{

/***/ "./src/blocks/card-product/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/card-product/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

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

/***/ "./src/blocks/products/style.scss":
/*!****************************************!*\
  !*** ./src/blocks/products/style.scss ***!
  \****************************************/
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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ "./src/blocks/card-product/index.js":
/*!******************************************!*\
  !*** ./src/blocks/card-product/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _wp$element = wp.element,
  useState = _wp$element.useState,
  useEffect = _wp$element.useEffect;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
  RichText = _wp$blockEditor.RichText,
  InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
  Panel = _wp$components.Panel,
  PanelBody = _wp$components.PanelBody,
  PanelRow = _wp$components.PanelRow,
  SearchControl = _wp$components.SearchControl,
  TextControl = _wp$components.TextControl;
var __ = wp.i18n.__;
var apiFetch = wp.apiFetch;
var addQueryArgs = wp.url.addQueryArgs;
var products = function products(queryArgs) {
  return apiFetch({
    path: addQueryArgs("wc/store/products", _objectSpread({
      per_page: 0,
      search: queryArgs
    }, queryArgs))
  });
};
registerBlockType('custom-blocks/card-product', {
  title: 'Card Product',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff",
    viewBox: "0 0 185 180"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("path", {
    stroke: "#4D4D4D",
    d: "M168.333 48.276 16.365 46.503 7.917 68.305v43.3l8.448 20.915 151.968-.887 8.75-19.725V67.785l-8.75-19.509Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("path", {
    fill: "url(#a)",
    stroke: "#4D4D4D",
    d: "M37.083 39.582h110.833L92.305 11.898 37.083 39.582Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("path", {
    fill: "url(#b)",
    stroke: "#4D4D4D",
    d: "M147.917 141.418H37.084l55.611 25.706 55.222-25.706Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("path", {
    stroke: "#4D4D4D",
    fill: "#fff",
    d: "m180 64.462-11.293-25.927L92.451 3 15.459 38.535 5 64.462v51.493l10.459 25.927L92.792 178l75.915-36.118L180 116.315V64.462Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("path", {
    fill: "#164690",
    d: "M60.66 100.129a9380.739 9380.739 0 0 0 17.086-40.773h20.453l-12.887 62.288H71.344l7.192-34.85-14.758 34.85H48.646l-.416-34.638-7.15 34.638H27.36l12.887-62.288H60.66v40.773Zm53.474 3.664H90.273l2.41-11.504h23.863l-2.412 11.504Zm26.195-44.437c6.679 0 11.294 1.548 13.844 4.644 1.662 2.045 2.494 4.786 2.494 8.222 0 1.818-.222 3.82-.665 6.008-1.525 7.385-5.114 12.767-10.767 16.147l5.986 27.267h-15.34l-4.448-23.518h-.748l-4.864 23.518h-14.508L124.2 59.356h16.129Zm-6.194 27.267c1.913 0 3.437-.668 4.573-2.002 1.164-1.335 2.037-3.366 2.619-6.093.25-1.25.374-2.372.374-3.366 0-2.84-1.455-4.26-4.365-4.26h-.997l-3.285 15.72h1.081Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("linearGradient", {
    id: "a",
    x1: "92.5",
    x2: "92.5",
    y1: "11.898",
    y2: "39.582",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("stop", {
    stopColor: "#E52727",
    stopOpacity: "0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("stop", {
    offset: "1",
    stopColor: "#E52727"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("linearGradient", {
    id: "b",
    x1: "92.5",
    x2: "92.5",
    y1: "167.124",
    y2: "141.418",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("stop", {
    stopColor: "#D9D9D9",
    stopOpacity: "0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("stop", {
    offset: "1",
    stopColor: "#164690"
  })))),
  category: 'common',
  description: 'Block that displays card-product title.',
  keywords: ['card', 'product'],
  attributes: {
    title: {
      type: 'string'
    },
    products: {
      type: 'array'
    }
  },
  edit: function edit(props) {
    var title = props.attributes.title,
      setAttributes = props.setAttributes,
      className = props.className;
    var _useState = useState(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      searchInput = _useState2[0],
      setSearchInput = _useState2[1];
    var _useState3 = useState([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      searchResults = _useState4[0],
      setSearchResults = _useState4[1];
    var onTitleChange = function onTitleChange(newContent) {
      setAttributes({
        title: newContent
      });
    };
    var onSearchInputChange = function onSearchInputChange(searchQuery) {
      setSearchInput(searchQuery);
    };
    var onSelectProduct = function onSelectProduct(product) {
      setAttributes({
        productId: product.id,
        productName: product.name
      });
    };
    useEffect(function () {
      products().then(function (fetchedProducts) {
        console.log('effect run ', fetchedProducts);
        setSearchResults({
          products: fetchedProducts
        });
      });
    }, [searchInput]);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Panel, {
      header: "Block Settings"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: "Product",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SearchControl, {
      __nextHasNoMarginBottom: true,
      label: __('Search posts'),
      value: searchInput,
      onChange: onSearchInputChange
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "product-component-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "product-component"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
      className: "product-component__img",
      href: "#"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
      src: "",
      alt: "asdas"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
      className: "product-component__img-sale onsale"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText, {
      tagName: "span",
      className: "product-component__img-sale-text",
      onChange: onTitleChange,
      value: title,
      placeholder: __('Write your custom product message', 'custom-gutenberg-blocks')
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "product-component__info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
      className: "product-component__sku"
    }, "sku"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
      className: "product-component__name",
      title: "Proizvod: <?php echo '$productName'; ?>"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
      href: "<?php echo '$productLink'; ?>"
    }, "product name")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "product-component__price-holder"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
      className: "product-component__price"
    }, "price")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "product-component__buttons"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
      href: "<?php echo '$productLink'; ?>",
      className: "button button--inverse"
    }, "Vi\u0161e"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
      className: "product-component__buttons-btn button ajax_add_to_cart add_to_cart_button",
      href: "#",
      value: "####",
      "data-quantity": "1",
      "data-product_id": "<?php echo '$productId'; ?>",
      "data-product_sku": "<?php echo '$productSku'; ?>",
      "aria-label": "Dodaj \u201C<?php echo '$productName'; ?>\u201D u Va\u0161u korpu."
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
      className: "product-component__buttons-btn-text"
    }, "Dodaj u korpu"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "product-component__buttons-btn-loader"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
      className: "loader"
    }))))))));
  },
  save: function save() {
    return null;
  }
});

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
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff",
    viewBox: "0 0 185 180"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("path", {
    stroke: "#4D4D4D",
    d: "M168.333 48.276 16.365 46.503 7.917 68.305v43.3l8.448 20.915 151.968-.887 8.75-19.725V67.785l-8.75-19.509Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("path", {
    fill: "url(#a)",
    stroke: "#4D4D4D",
    d: "M37.083 39.582h110.833L92.305 11.898 37.083 39.582Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("path", {
    fill: "url(#b)",
    stroke: "#4D4D4D",
    d: "M147.917 141.418H37.084l55.611 25.706 55.222-25.706Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("path", {
    stroke: "#4D4D4D",
    fill: "#fff",
    d: "m180 64.462-11.293-25.927L92.451 3 15.459 38.535 5 64.462v51.493l10.459 25.927L92.792 178l75.915-36.118L180 116.315V64.462Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("path", {
    fill: "#164690",
    d: "M60.66 100.129a9380.739 9380.739 0 0 0 17.086-40.773h20.453l-12.887 62.288H71.344l7.192-34.85-14.758 34.85H48.646l-.416-34.638-7.15 34.638H27.36l12.887-62.288H60.66v40.773Zm53.474 3.664H90.273l2.41-11.504h23.863l-2.412 11.504Zm26.195-44.437c6.679 0 11.294 1.548 13.844 4.644 1.662 2.045 2.494 4.786 2.494 8.222 0 1.818-.222 3.82-.665 6.008-1.525 7.385-5.114 12.767-10.767 16.147l5.986 27.267h-15.34l-4.448-23.518h-.748l-4.864 23.518h-14.508L124.2 59.356h16.129Zm-6.194 27.267c1.913 0 3.437-.668 4.573-2.002 1.164-1.335 2.037-3.366 2.619-6.093.25-1.25.374-2.372.374-3.366 0-2.84-1.455-4.26-4.365-4.26h-.997l-3.285 15.72h1.081Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("linearGradient", {
    id: "a",
    x1: "92.5",
    x2: "92.5",
    y1: "11.898",
    y2: "39.582",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("stop", {
    stopColor: "#E52727",
    stopOpacity: "0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("stop", {
    offset: "1",
    stopColor: "#E52727"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("linearGradient", {
    id: "b",
    x1: "92.5",
    x2: "92.5",
    y1: "167.124",
    y2: "141.418",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("stop", {
    stopColor: "#D9D9D9",
    stopOpacity: "0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("stop", {
    offset: "1",
    stopColor: "#164690"
  })))),
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
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff",
    viewBox: "0 0 185 180"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    stroke: "#4D4D4D",
    d: "M168.333 48.276 16.365 46.503 7.917 68.305v43.3l8.448 20.915 151.968-.887 8.75-19.725V67.785l-8.75-19.509Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#a)",
    stroke: "#4D4D4D",
    d: "M37.083 39.582h110.833L92.305 11.898 37.083 39.582Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#b)",
    stroke: "#4D4D4D",
    d: "M147.917 141.418H37.084l55.611 25.706 55.222-25.706Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    stroke: "#4D4D4D",
    fill: "#fff",
    d: "m180 64.462-11.293-25.927L92.451 3 15.459 38.535 5 64.462v51.493l10.459 25.927L92.792 178l75.915-36.118L180 116.315V64.462Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#164690",
    d: "M60.66 100.129a9380.739 9380.739 0 0 0 17.086-40.773h20.453l-12.887 62.288H71.344l7.192-34.85-14.758 34.85H48.646l-.416-34.638-7.15 34.638H27.36l12.887-62.288H60.66v40.773Zm53.474 3.664H90.273l2.41-11.504h23.863l-2.412 11.504Zm26.195-44.437c6.679 0 11.294 1.548 13.844 4.644 1.662 2.045 2.494 4.786 2.494 8.222 0 1.818-.222 3.82-.665 6.008-1.525 7.385-5.114 12.767-10.767 16.147l5.986 27.267h-15.34l-4.448-23.518h-.748l-4.864 23.518h-14.508L124.2 59.356h16.129Zm-6.194 27.267c1.913 0 3.437-.668 4.573-2.002 1.164-1.335 2.037-3.366 2.619-6.093.25-1.25.374-2.372.374-3.366 0-2.84-1.455-4.26-4.365-4.26h-.997l-3.285 15.72h1.081Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "a",
    x1: "92.5",
    x2: "92.5",
    y1: "11.898",
    y2: "39.582",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#E52727",
    stopOpacity: "0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#E52727"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "b",
    x1: "92.5",
    x2: "92.5",
    y1: "167.124",
    y2: "141.418",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#D9D9D9",
    stopOpacity: "0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#164690"
  })))),
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

/***/ "./src/blocks/products/index.js":
/*!**************************************!*\
  !*** ./src/blocks/products/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
  InnerBlocks = _wp$blockEditor.InnerBlocks,
  RichText = _wp$blockEditor.RichText;
var _wp$components = wp.components,
  TextControl = _wp$components.TextControl,
  SearchControl = _wp$components.SearchControl;
var __ = wp.i18n.__;
registerBlockType('custom-blocks/products', {
  title: 'Products',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff",
    viewBox: "0 0 185 180"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    stroke: "#4D4D4D",
    d: "M168.333 48.276 16.365 46.503 7.917 68.305v43.3l8.448 20.915 151.968-.887 8.75-19.725V67.785l-8.75-19.509Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#a)",
    stroke: "#4D4D4D",
    d: "M37.083 39.582h110.833L92.305 11.898 37.083 39.582Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#b)",
    stroke: "#4D4D4D",
    d: "M147.917 141.418H37.084l55.611 25.706 55.222-25.706Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    stroke: "#4D4D4D",
    fill: "#fff",
    d: "m180 64.462-11.293-25.927L92.451 3 15.459 38.535 5 64.462v51.493l10.459 25.927L92.792 178l75.915-36.118L180 116.315V64.462Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#164690",
    d: "M60.66 100.129a9380.739 9380.739 0 0 0 17.086-40.773h20.453l-12.887 62.288H71.344l7.192-34.85-14.758 34.85H48.646l-.416-34.638-7.15 34.638H27.36l12.887-62.288H60.66v40.773Zm53.474 3.664H90.273l2.41-11.504h23.863l-2.412 11.504Zm26.195-44.437c6.679 0 11.294 1.548 13.844 4.644 1.662 2.045 2.494 4.786 2.494 8.222 0 1.818-.222 3.82-.665 6.008-1.525 7.385-5.114 12.767-10.767 16.147l5.986 27.267h-15.34l-4.448-23.518h-.748l-4.864 23.518h-14.508L124.2 59.356h16.129Zm-6.194 27.267c1.913 0 3.437-.668 4.573-2.002 1.164-1.335 2.037-3.366 2.619-6.093.25-1.25.374-2.372.374-3.366 0-2.84-1.455-4.26-4.365-4.26h-.997l-3.285 15.72h1.081Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "a",
    x1: "92.5",
    x2: "92.5",
    y1: "11.898",
    y2: "39.582",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#E52727",
    stopOpacity: "0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#E52727"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "b",
    x1: "92.5",
    x2: "92.5",
    y1: "167.124",
    y2: "141.418",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#D9D9D9",
    stopOpacity: "0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#164690"
  })))),
  category: 'common',
  description: 'Block that displays products title.',
  keywords: ['products'],
  attributes: {
    title: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var title = props.attributes.title,
      setAttributes = props.setAttributes,
      className = props.className;
    var ALLOWED_BLOCKS = ['custom-blocks/card-product'];
    var onTitleChange = function onTitleChange(newContent) {
      setAttributes({
        title: newContent
      });
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "block-products"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "h1",
      className: className + ' block-products__title section-title',
      onChange: onTitleChange,
      value: title,
      placeholder: __('Write your custom message', 'custom-gutenberg-blocks')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "block-products-slider"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "block-products-wrapper products-tabs-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: function renderAppender() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
      }
    }))))));
  },
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
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
  apiVersion: 2,
  title: 'Slide',
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff",
    viewBox: "0 0 185 180"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    stroke: "#4D4D4D",
    d: "M168.333 48.276 16.365 46.503 7.917 68.305v43.3l8.448 20.915 151.968-.887 8.75-19.725V67.785l-8.75-19.509Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#a)",
    stroke: "#4D4D4D",
    d: "M37.083 39.582h110.833L92.305 11.898 37.083 39.582Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "url(#b)",
    stroke: "#4D4D4D",
    d: "M147.917 141.418H37.084l55.611 25.706 55.222-25.706Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    stroke: "#4D4D4D",
    fill: "#fff",
    d: "m180 64.462-11.293-25.927L92.451 3 15.459 38.535 5 64.462v51.493l10.459 25.927L92.792 178l75.915-36.118L180 116.315V64.462Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#164690",
    d: "M60.66 100.129a9380.739 9380.739 0 0 0 17.086-40.773h20.453l-12.887 62.288H71.344l7.192-34.85-14.758 34.85H48.646l-.416-34.638-7.15 34.638H27.36l12.887-62.288H60.66v40.773Zm53.474 3.664H90.273l2.41-11.504h23.863l-2.412 11.504Zm26.195-44.437c6.679 0 11.294 1.548 13.844 4.644 1.662 2.045 2.494 4.786 2.494 8.222 0 1.818-.222 3.82-.665 6.008-1.525 7.385-5.114 12.767-10.767 16.147l5.986 27.267h-15.34l-4.448-23.518h-.748l-4.864 23.518h-14.508L124.2 59.356h16.129Zm-6.194 27.267c1.913 0 3.437-.668 4.573-2.002 1.164-1.335 2.037-3.366 2.619-6.093.25-1.25.374-2.372.374-3.366 0-2.84-1.455-4.26-4.365-4.26h-.997l-3.285 15.72h1.081Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "a",
    x1: "92.5",
    x2: "92.5",
    y1: "11.898",
    y2: "39.582",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#E52727",
    stopOpacity: "0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#E52727"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "b",
    x1: "92.5",
    x2: "92.5",
    y1: "167.124",
    y2: "141.418",
    gradientUnits: "userSpaceOnUse"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    stopColor: "#D9D9D9",
    stopOpacity: "0"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#164690"
  })))),
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
    var blockProps = useBlockProps();
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
    })))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
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
/* harmony import */ var _blocks_products_style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/products/style.scss */ "./src/blocks/products/style.scss");
/* harmony import */ var _blocks_products_style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blocks_products_style_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _blocks_products___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/products/ */ "./src/blocks/products/index.js");
/* harmony import */ var _blocks_card_product_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/card-product/style.scss */ "./src/blocks/card-product/style.scss");
/* harmony import */ var _blocks_card_product_style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_blocks_card_product_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _blocks_card_product___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/card-product/ */ "./src/blocks/card-product/index.js");












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