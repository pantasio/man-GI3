/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/*! exports used: Component, default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ 4)();
}


/***/ }),
/* 2 */
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 3 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 5);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 5 */
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 6 */
/*!****************************************************!*\
  !*** ./src/components/action-menu/ActionMenu.less ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./ActionMenu.less */ 7);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ 11)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 7 */
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/action-menu/ActionMenu.less ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 8)(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ 9);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../res/fonts/Courgette-Regular.woff2 */ 10));

// Module
exports.push([module.i, "@font-face {\n  font-family: 'Courgette';\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format('woff2');\n}\n.settings-logo {\n  font-family: 'Courgette', cursive;\n}\nbody {\n  padding: 0px !important;\n  margin: 0px !important;\n  width: 100%;\n}\ndiv.action-menu.action-menu-setup {\n  height: auto;\n}\ndiv.action-menu {\n  height: 300px;\n  overflow: hidden;\n  width: 230px;\n  padding: 0;\n}\ndiv.action-menu .action-menu-header {\n  padding: 3px 0;\n  height: 37px;\n}\ndiv.action-menu .action-menu-header .mailvelope-logo {\n  color: #777;\n  background-color: transparent;\n  font-size: 18px;\n  line-height: 20px;\n  float: left;\n  padding: 7px 0 6px 0.6em;\n}\ndiv.action-menu .action-menu-header .nav-right {\n  float: right;\n  padding: 7px 0.6em 6px 0;\n  font-size: 12.6px;\n}\ndiv.action-menu .action-menu-header .nav-right a {\n  color: #555555;\n  outline: none;\n  text-decoration: none;\n}\ndiv.action-menu .action-menu-header .nav-right a:hover {\n  text-decoration: underline;\n}\ndiv.action-menu .action-menu-container-slide-container {\n  position: relative;\n  overflow: hidden;\n  width: 230px;\n}\ndiv.action-menu .action-menu-container-slide-container .action-menu-container-slide {\n  width: 460px;\n}\ndiv.action-menu .action-menu-container-slide-container .action-menu-container-slide .primary {\n  float: left;\n  display: inline-block;\n  width: 230px;\n}\ndiv.action-menu .action-menu-container-slide-container .action-menu-container-slide .advanced {\n  display: inline-block;\n  width: 230px;\n}\ndiv.action-menu ul.action-menu {\n  padding: 0;\n  margin: 0;\n}\ndiv.action-menu ul.action-menu li {\n  list-style-type: none;\n  margin: 0;\n  font-size: 1em;\n  /** Version of the advanced menu with icon **/\n}\ndiv.action-menu ul.action-menu li.item-big {\n  height: 76px;\n}\ndiv.action-menu ul.action-menu li.item-big a {\n  height: 76px;\n  display: flex;\n  align-items: center;\n  padding: 0 0.6em;\n}\ndiv.action-menu ul.action-menu li.item-big a p {\n  float: left;\n  padding: 0.23em 1em 0.23em 1%;\n  width: 85%;\n}\ndiv.action-menu ul.action-menu li.item-big a i.fa {\n  text-align: center;\n  float: right;\n  width: 10%;\n  font-size: 2em;\n  color: #888;\n  margin-top: 0.125em;\n}\ndiv.action-menu ul.action-menu li.with-icon a {\n  padding: 7px 0.6em;\n  display: flex;\n  align-items: center;\n}\ndiv.action-menu ul.action-menu li.with-icon a p {\n  float: left;\n  padding: 0.23em 0.5em 0.23em 1%;\n  width: 90%;\n}\ndiv.action-menu ul.action-menu li.with-icon a i.fa {\n  text-align: center;\n  float: right;\n  width: 10%;\n  font-size: 1.3em;\n  color: #888;\n  margin-top: 0.125em;\n}\ndiv.action-menu ul.action-menu li a {\n  padding: 0.72em 0.6em;\n  border-top: 1px solid #e7e7e7;\n  display: block;\n  color: #555555;\n  transition: background-color 0.2s ease;\n}\ndiv.action-menu ul.action-menu li a p {\n  padding: 0 1em 0 0;\n  margin: 0;\n  font-size: 13px;\n}\ndiv.action-menu ul.action-menu li a:hover {\n  color: #333333;\n  background-color: #f8f8f8;\n  text-decoration: none;\n}\ndiv.action-menu ul.action-menu li a:hover i.fa {\n  color: #333333;\n}\ndiv.action-menu .footer a,\ndiv.action-menu .header a {\n  height: 33px;\n  border-top: 1px solid #e7e7e7;\n  background-color: #f8f8f8;\n  display: block;\n  padding: 7px 0.6em;\n  text-align: center;\n  font-size: 12.6px;\n  color: black;\n  transition: background-color 0.2s ease;\n}\ndiv.action-menu .footer a:hover,\ndiv.action-menu .header a:hover {\n  background-color: #e7e7e7;\n  text-decoration: none;\n}\n", ""]);



/***/ }),
/* 8 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 9 */
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 10 */
/*!***********************************************!*\
  !*** ./src/res/fonts/Courgette-Regular.woff2 ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "00744c5a3539f19e7c7c9d1fb40a58fa.woff2";

/***/ }),
/* 11 */
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ 12);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 13 */
/*!***************************************************************!*\
  !*** ./src/components/action-menu/actionMenu.js + 10 modules ***!
  \***************************************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "React" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "ReactDOM" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "jQuery" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(3);
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_);

// CONCATENATED MODULE: ./src/lib/l10n.js
let map = {};
function register(ids) {
  for (const id of ids) {
    map[id] = true;
  }
}
function mapToLocal() {
  map = getMessages(Object.keys(map));
}
const get = chrome.i18n.getMessage;

function getMessages(ids) {
  const result = {};

  for (const id of ids) {
    result[id] = chrome.i18n.getMessage(id);
  }

  return result;
}

function set(ids) {
  register(ids);
  mapToLocal();
}
function localizeHTML(l10n, idSelector) {
  const selector = idSelector ? `${idSelector} [data-l10n-id]` : '[data-l10n-id]';
  $(selector).each(function () {
    const jqElement = $(this);
    const id = jqElement.data('l10n-id');
    const text = l10n ? l10n[id] : chrome.i18n.getMessage(id) || id;
    jqElement.text(text);
  });
  $('[data-l10n-title-id]').each(function () {
    const jqElement = $(this);
    const id = jqElement.data('l10n-title-id');
    const text = l10n ? l10n[id] : chrome.i18n.getMessage(id) || id;
    jqElement.attr('title', text);
  });
}
// CONCATENATED MODULE: ./src/lib/constants.js
/* constants */
// min height for large frame
const LARGE_FRAME = 600; // frame constants

const FRAME_STATUS = 'stat'; // frame status

const FRAME_ATTACHED = 'att';
const FRAME_DETACHED = 'det'; // key for reference to frame object

const FRAME_OBJ = 'fra'; // marker for dynamically created iframes

const DYN_IFRAME = 'dyn';
const IFRAME_OBJ = 'obj'; // armor header type

const PGP_MESSAGE = 'msg';
const PGP_SIGNATURE = 'sig';
const PGP_PUBLIC_KEY = 'pub';
const PGP_PRIVATE_KEY = 'priv'; // key status

const PGP_KEYSTATUS_VALID = 3; // display decrypted message

const DISPLAY_INLINE = 'inline';
const DISPLAY_POPUP = 'popup'; // editor type

const PLAIN_TEXT = 'plain'; // keyring

const KEYRING_DELIMITER = '|#|';
const MAIN_KEYRING_ID = `localhost${KEYRING_DELIMITER}mailvelope`;
const GNUPG_KEYRING_ID = `localhost${KEYRING_DELIMITER}gnupg`; // colors for secure background

const SECURE_COLORS = ['#e9e9e9', '#c0c0c0', '#808080', '#ffce1e', '#ff0000', '#85154a', '#6f2b8b', '#b3d1e3', '#315bab', '#1c449b', '#4c759c', '#1e8e9f', '#93b536']; // 50 MB file size limit

const MAX_FILE_UPLOAD_SIZE = 50 * 1024 * 1024; // stable id if app runs in top frame

const APP_TOP_FRAME_ID = 'apptopframeid';
// CONCATENATED MODULE: ./src/lib/util.js
/**
 * Copyright (C) 2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */

class MvError extends Error {
  constructor(msg, code = 'INTERNAL_ERROR') {
    super(msg);
    this.code = code;
  }

}
function sortAndDeDup(unordered, compFn) {
  const result = [];
  const sorted = unordered.sort(compFn); // remove duplicates

  for (let i = 0; i < sorted.length; i++) {
    if (i === 0 || compFn && compFn(sorted[i - 1], sorted[i]) !== 0 || !compFn && sorted[i - 1] !== sorted[i]) {
      result.push(sorted[i]);
    }
  }

  return result;
}
/**
 * Remove duplicates from list, by default compares items as strings
 * @param  {Array} list - the list of items with duplicates
 * @param {Function} [compFn] compare function that gets element that should be added to result list plus the current result list
 *                            must return true if element should be added to the result list
 * @return {Array} - the list of items without duplicates
 */

function deDup(list = [], compFn = (element, array) => array.indexOf(element) === -1) {
  const result = [];

  for (const item of list) {
    if (compFn(item, result)) {
      result.push(item);
    }
  }

  return result;
}
async function filterAsync(array, asyncFilterFn) {
  const promises = array.map(async item => (await asyncFilterFn(item)) && item);
  const result = await Promise.all(promises);
  return result.filter(item => item);
}
async function someAsync(array, asyncSomeFn) {
  const promises = array.map(asyncSomeFn);
  const result = await Promise.all(promises);
  return result.some(item => item);
}
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} // random hash generator

function getHash() {
  let result = '';
  const buf = new Uint16Array(6);
  window.crypto.getRandomValues(buf);

  for (let i = 0; i < buf.length; i++) {
    result += buf[i].toString(16);
  }

  return result;
}
function encodeHTML(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/\//g, '&#x2F;');
}

function decodeHTML(html) {
  return String(html).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "\'").replace(/&#x2F;/g, '\/');
}

function decodeQuotedPrint(armored) {
  return armored.replace(/=3D=3D\s*$/m, '==').replace(/=3D\s*$/m, '=').replace(/=3D(\S{4})\s*$/m, '=$1');
}
/**
 * Normalize PGP armored message
 * @param  {String} msg
 * @param  {Regex} typeRegex - filter message with this Regex
 * @return {String}
 */


function normalizeArmored(msg, typeRegex) {
  // filtering to get well defined PGP message format
  msg = msg.replace(/\r\n/g, '\n'); // unify new line characters

  msg = msg.replace(/\n\s+/g, '\n'); // compress sequence of whitespace and new line characters to one new line

  msg = msg.replace(/[^\S\r\n]/g, ' '); // unify white space characters (all \s without \r and \n)

  if (typeRegex) {
    msg = msg.match(typeRegex);

    if (msg) {
      msg = msg[0];
    } else {
      throw new MvError('Could not extract valid PGP message', 'INVALID_ARMORED_BLOCK');
    }
  }

  msg = msg.replace(/^(\s?>)+/gm, ''); // remove quotation

  msg = msg.replace(/^\s+/gm, ''); // remove leading whitespace

  msg = msg.replace(/:.*\n(?!.*:)/, '$&\n'); // insert new line after last armor header

  msg = msg.replace(/-----\n(?!.*:)/, '$&\n'); // insert new line if no header

  msg = decodeQuotedPrint(msg);
  return msg;
}
function html2text(html) {
  html = html.replace(/\n/g, ' '); // replace new line with space

  html = html.replace(/(<br>)/g, '\n'); // replace <br> with new line

  html = html.replace(/<\/(blockquote|div|dl|dt|dd|form|h1|h2|h3|h4|h5|h6|hr|ol|p|pre|table|tr|td|ul|li|section|header|footer)>/g, '\n'); // replace block closing tags </..> with new line

  html = html.replace(/<(.+?)>/g, ''); // remove tags

  html = html.replace(/&nbsp;/g, ' '); // replace non-breaking space with whitespace

  html = html.replace(/\n{3,}/g, '\n\n'); // compress new line

  return decodeHTML(html);
}
/**
 * This function will return the byte size of any UTF-8 string you pass to it.
 * @param {string} str
 * @returns {number}
 */

function byteCount(str) {
  return encodeURI(str).split(/%..|./).length - 1;
}
function ab2str(buf) {
  const ab = new Uint8Array(buf);
  return Uint8Array2str(ab);
}
function Uint8Array2str(ab) {
  let str = '';
  const CHUNK_SIZE = Math.pow(2, 16);
  let offset;
  let len;
  let subab;

  for (offset = 0; offset < ab.length; offset += CHUNK_SIZE) {
    len = Math.min(CHUNK_SIZE, ab.length - offset);
    subab = ab.subarray(offset, offset + len);
    str += String.fromCharCode.apply(null, subab);
  }

  return str;
}
function str2ab(str) {
  const bufView = str2Uint8Array(str);
  return bufView.buffer;
}
function str2Uint8Array(str) {
  const bufView = new Uint8Array(str.length);

  for (let i = 0; i < str.length; i++) {
    bufView[i] = str.charCodeAt(i);
  }

  return bufView;
}
function dataURL2str(dataURL) {
  const base64 = dataURL2base64(dataURL);
  return window.atob(base64);
}
function dataURL2base64(dataURL) {
  return dataURL.split(';base64,')[1];
}
function addLoadingAnimation($parent) {
  $parent = $parent || $('body')[0];
  const spinner = $('<div class="m-spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
  spinner.appendTo($parent);
}
function generateSecurityBackground({
  width,
  height,
  scaling = 1,
  angle = 0,
  colorId = 0
}) {
  const iconWidth = width * scaling;
  const iconHeight = height * scaling;
  const iconColor = SECURE_COLORS[colorId];
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" id="secBgnd" version="1.1" width="${iconWidth}px" height="${iconHeight}px" viewBox="0 0 27 27"><path transform="rotate(${angle} 14 14)" style="fill: ${iconColor};" d="m 13.963649,25.901754 c -4.6900005,0 -8.5000005,-3.78 -8.5000005,-8.44 0,-1.64 0.47,-3.17 1.29,-4.47 V 9.0417546 c 0,-3.9399992 3.23,-7.1499992 7.2000005,-7.1499992 3.97,0 7.2,3.21 7.2,7.1499992 v 3.9499994 c 0.82,1.3 1.3,2.83 1.3,4.48 0,4.65 -3.8,8.43 -8.49,8.43 z m -1.35,-7.99 v 3.33 h 0 c 0,0.02 0,0.03 0,0.05 0,0.74 0.61,1.34 1.35,1.34 0.75,0 1.35,-0.6 1.35,-1.34 0,-0.02 0,-0.03 0,-0.05 h 0 v -3.33 c 0.63,-0.43 1.04,-1.15 1.04,-1.97 0,-1.32 -1.07,-2.38 -2.4,-2.38 -1.32,0 -2.4,1.07 -2.4,2.38 0.01,0.82 0.43,1.54 1.06,1.97 z m 6.29,-8.8699994 c 0,-2.7099992 -2.22,-4.9099992 -4.95,-4.9099992 -2.73,0 -4.9500005,2.2 -4.9500005,4.9099992 V 10.611754 C 10.393649,9.6217544 12.103649,9.0317546 13.953649,9.0317546 c 1.85,0 3.55,0.5899998 4.94,1.5799994 l 0.01,-1.5699994 z" /></svg>`;
}
async function showSecurityBackground(port, isEmbedded) {
  if (isEmbedded) {
    $('.secureBgndSettingsBtn').on('mouseenter', () => {
      $('.secureBgndSettingsBtn').removeClass('btn-link').addClass('btn-default');
    });
    $('.secureBgndSettingsBtn').on('mouseleave', () => {
      $('.secureBgndSettingsBtn').removeClass('btn-default').addClass('btn-link');
    });
  }

  const background = await port.send('get-security-background');
  const secBgndIcon = generateSecurityBackground(background);
  const secureStyle = `\n.secureBackground {
    background-color: ${background.color};
    background-position: -20px -20px;
    background-image: url(data:image/svg+xml;base64,${btoa(secBgndIcon)});
  }`;
  const lockIcon = generateSecurityBackground({
    width: 28,
    height: 28,
    colorId: 2
  });
  const lockButton = `\n.lockBtnIcon, .lockBtnIcon:active {
    margin: 0;
    width: 28px; height: 28px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;base64,'}${btoa(lockIcon)});
  }`;
  removeSecurityBackground();
  $('head').append($('<style>').attr('id', 'secBgndCss').text(secureStyle + lockButton));
}

function removeSecurityBackground() {
  return new Promise(resolve => {
    const secBgndStyle = document.getElementById('secBgndCss');

    if (secBgndStyle) {
      secBgndStyle.parentNode.removeChild(secBgndStyle);
    }

    setTimeout(resolve, 0);
  });
}

function matchPattern2RegEx(matchPattern) {
  return new RegExp(`^${matchPattern2RegExString(matchPattern)}$`);
}
function matchPattern2RegExString(matchPattern) {
  return matchPattern.replace(/\./g, '\\.').replace(/\*\\\./, '(\\w+(-\\w+)*\\.)*');
}
function mapError(error = {}) {
  return {
    message: error.message || 'Unexpected error.',
    code: error.code || 'INTERNAL_ERROR'
  };
}
class PromiseQueue {
  constructor() {
    this.queue = [];
  }

  push(thisArg, method, args) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        resolve,
        reject,
        thisArg,
        method,
        args
      });

      if (this.queue.length === 1) {
        this._next();
      }
    });
  }

  _next() {
    if (this.queue.length === 0) {
      return;
    }

    const nextEntry = this.queue[0];
    setTimeout(() => {
      nextEntry.thisArg[nextEntry.method].apply(nextEntry.thisArg, nextEntry.args).then(result => {
        nextEntry.resolve(result);
      }).catch(error => {
        nextEntry.reject(error);
      }).then(() => {
        this.queue.shift();

        this._next();
      });
    }, 0);
  }

}
/**
 * Waterfall of async processes
 * @param  {Function} process - has to return Promise, result as array
 * @param  {Array} list - each item is processed
 * @return {Promise} - resolved when all processes finished with end result as array
 */

/* eslint-disable arrow-body-style */

function sequential(process, list) {
  return list.reduce((acc, item) => {
    return acc.then(result => {
      return process(item).then(processResult => {
        result.push(...processResult);
        return result;
      });
    });
  }, Promise.resolve([]));
}
/* eslint-enable arrow-body-style */

/**
 * Validate an email address.
 * @param  {String} address   The email address to validate
 * @return {Boolean}          True if valid, false if not
 */

function checkEmail(address) {
  const pattern = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
  return pattern.test(address);
}
/**
 * Normalize parameter to Array. falsy -> []
 * @param  {Any}  param
 * @return {Array}
 */

function toArray(param) {
  if (!param) {
    return [];
  }

  if (!Array.isArray(param)) {
    return [param];
  }

  return param;
}
/**
 * Validate an url
 * @param  {String} url       The URL to validate
 * @return {Boolean}          True if valid, false if not
 */

function checkUrl(url) {
  const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi;
  return pattern.test(url);
}
function terminate(port) {
  removeSecurityBackground().then(() => {
    $('body').empty();
    setTimeout(() => {
      $('body').removeClass().addClass('glyphicon glyphicon-flash termination');
    }, 0);
  });
  port.disconnect();
}
function addDocumentTitle(text) {
  const title = document.createElement('title');
  title.appendChild(document.createTextNode(text));
  document.head.appendChild(title);
}
function formatFpr(fpr) {
  return fpr.toUpperCase().match(/.{1,4}/g).join(' ');
}
function appendTpl($element, path) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', path);
    req.responseType = 'text';

    req.onload = function () {
      if (req.status == 200) {
        $element.append($.parseHTML(req.response));
        setTimeout(() => resolve($element), 1);
      } else {
        reject(new Error(req.statusText));
      }
    };

    req.onerror = function () {
      reject(new Error('Network Error'));
    };

    req.send();
  });
}
function isWebEx() {
  return typeof browser !== 'undefined';
}
function isCRX() {
  return typeof browser === 'undefined' && typeof chrome !== 'undefined';
}
// CONCATENATED MODULE: ./src/lib/EventHandler.js
/**
 * Copyright (C) 2016-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */

/**
 * Event handler is an abstraction on top of Port to support methods 'on', 'emit' and 'send'.
 * @param {Port} port - port object received from runtime.connect()
 * @param {Map} handlers - handler map of parent event handler
 */

class EventHandler_EventHandler {
  constructor(port, handlers) {
    if (port) {
      this.initPort(port);
    }

    this._handlers = handlers || new Map();
    this._reply = null;
    this._replyCount = 0;
    this._handlerObject = null;
  }
  /**
   * Open port to background script
   * @param  {String} sender identifier of sender (type + id)
   * @return {EventHandler}        initialized EventHandler
   */


  static connect(sender, handlerObject) {
    const eventHandler = new EventHandler_EventHandler(chrome.runtime.connect({
      name: sender
    }));
    eventHandler._handlerObject = handlerObject;
    return eventHandler;
  }

  initPort(port) {
    this._port = port;

    this._port.onMessage.addListener(this.handlePortMessage.bind(this));
  }
  /**
   * Disconnect port
   */


  disconnect() {
    if (this._port) {
      this._port.disconnect();
    }
  }

  get onDisconnect() {
    const obj = {};

    obj.addListener = listener => this._port.onDisconnect.addListener(listener);

    return obj;
  }
  /**
   * Generic port message handler that can be attached via port.onMessage.addListener().
   * Once set up, events can be handled with on('event', function(options) {})
   * @param  {String} options.event   The event descriptor
   * @param  {Object} options         Contains message attributes and data
   */


  handlePortMessage(options = {}) {
    if (this._handlers.has(options.event)) {
      const handler = this._handlers.get(options.event);

      if (options._reply) {
        // sender expects reply
        Promise.resolve().then(() => handler.call(this, options)).then(result => this.emit('_reply', {
          result,
          _reply: options._reply
        })).catch(error => this.emit('_reply', {
          error: mapError(error),
          _reply: options._reply
        }));
      } else {
        // normal one way communication
        handler.call(this, options);
      }
    } else if (options.event === '_reply') {
      // we have received a reply
      const replyHandler = this._reply.get(options._reply);

      this._reply.delete(options._reply);

      if (options.error) {
        replyHandler.reject(options.error);
      } else {
        replyHandler.resolve(options.result);
      }
    } else {
      console.log('Unknown event', options);
    }
  }
  /**
   * The new event handling style to asign a function to an event.
   * @param  {String} event       The event descriptor
   * @param  {Function} handler   The event handler
   */


  on(event, handler) {
    if (!event || typeof event !== 'string' || event === '_reply' || typeof handler !== 'function') {
      throw new Error('Invalid event handler!');
    }

    this._handlers.set(event, handler.bind(this._handlerObject || this));
  }
  /**
   * Helper to emit events via postMessage using a port.
   * @param  {String} event     The event descriptor
   * @param  {Object} options   (optional) Data to be sent in the event
   */


  emit(event, options = {}) {
    if (!event || typeof event !== 'string') {
      throw new Error('Invalid event!');
    }

    options.event = event;

    this._port.postMessage(options);
  }
  /**
   * Like emit but receiver can send response
   * @param  {String} event     The event descriptor
   * @param  {Object} options   (optional) Data to be sent in the event
   * @param  {Object} port      (optional) The port to be used. If
   *                            not specified, the main port is used.
   * @return {Promise}
   */


  send(event, options = {}) {
    return new Promise((resolve, reject) => {
      if (!event || typeof event !== 'string') {
        return reject(new Error('Invalid event!'));
      }

      if (!this._reply) {
        this._reply = new Map();
      }

      options.event = event;
      options._reply = ++this._replyCount;

      this._reply.set(options._reply, {
        resolve,
        reject
      });

      this._port.postMessage(options);
    });
  }

}
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/components/util/Trans.js


function Trans(props) {
  return external_React_default.a.createElement("span", null, props.id.split(/(<\d>.*?<\/\d>)/).map(value => {
    const tags = value.match(/(<(\d)>(.*?)<\/\d>)/);

    if (tags) {
      const comp = props.components[tags[2]];
      return external_React_default.a.cloneElement(comp, null, comp.props.children || tags[3]);
    } else {
      return value;
    }
  }));
}
Trans.propTypes = {
  id: prop_types_default.a.string,
  components: prop_types_default.a.array
};
// CONCATENATED MODULE: ./src/components/action-menu/components/ActionMenuBase.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




register(['action_menu_dashboard', 'action_menu_keyring', 'action_menu_file_encryption', 'action_menu_advanced_options', 'action_menu_primary_menu_aria_label']);

function ActionMenuBase(props) {
  const strong = [external_React_default.a.createElement("strong", {
    key: "0"
  })];
  return external_React_default.a.createElement("div", {
    className: "primary"
  }, external_React_default.a.createElement("ul", {
    className: "action-menu",
    role: "menu",
    "aria-label": map.action_menu_primary_menu_aria_label
  }, external_React_default.a.createElement("li", {
    className: "item-big",
    role: "menuitem"
  }, external_React_default.a.createElement("a", {
    className: "clearfix",
    id: "options",
    onClick: props.onMenuItemClickHandler,
    role: "button"
  }, external_React_default.a.createElement("p", null, external_React_default.a.createElement(Trans, {
    id: map.action_menu_dashboard,
    components: strong
  })), external_React_default.a.createElement("i", {
    className: "fa fa-tachometer",
    role: "presentation"
  }))), external_React_default.a.createElement("li", {
    className: "item-big",
    role: "menuitem"
  }, external_React_default.a.createElement("a", {
    className: "clearfix",
    id: "manage-keys",
    onClick: props.onMenuItemClickHandler,
    role: "button"
  }, external_React_default.a.createElement("p", null, external_React_default.a.createElement(Trans, {
    id: map.action_menu_keyring,
    components: strong
  })), external_React_default.a.createElement("i", {
    className: "fa fa-key",
    role: "presentation"
  }))), external_React_default.a.createElement("li", {
    className: "item-big",
    role: "menuitem"
  }, external_React_default.a.createElement("a", {
    className: "clearfix",
    id: "encrypt-file",
    onClick: props.onMenuItemClickHandler,
    role: "button"
  }, external_React_default.a.createElement("p", null, external_React_default.a.createElement(Trans, {
    id: map.action_menu_file_encryption,
    components: strong
  })), external_React_default.a.createElement("i", {
    className: "fa fa-files-o",
    role: "presentation"
  })))), external_React_default.a.createElement("div", {
    className: "footer"
  }, external_React_default.a.createElement("a", {
    onClick: props.onShowAdvancedOptionsHandler,
    role: "button"
  }, map.action_menu_advanced_options, external_React_default.a.createElement("i", {
    className: "glyphicon glyphicon-chevron-right",
    role: "presentation"
  }))));
}

ActionMenuBase.propTypes = {
  onShowAdvancedOptionsHandler: prop_types_default.a.func,
  onMenuItemClickHandler: prop_types_default.a.func
};
/* harmony default export */ var components_ActionMenuBase = (ActionMenuBase);
// CONCATENATED MODULE: ./src/components/action-menu/components/ActionMenuAdvanced.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */



register(['action_menu_back', 'action_menu_all_options', 'action_menu_review_security_logs', 'action_menu_manage_domains', 'action_menu_edit_security_settings', 'action_menu_reload_extension_scripts', 'action_menu_activate_current_tab', 'action_menu_advanced_menu_aria_label']);

function ActionMenuAdvanced(props) {
  return external_React_default.a.createElement("div", {
    className: "advanced"
  }, external_React_default.a.createElement("div", {
    className: "header"
  }, external_React_default.a.createElement("a", {
    onClick: props.onShowBaseOptionsHandler,
    role: "button"
  }, external_React_default.a.createElement("i", {
    className: "glyphicon glyphicon-chevron-left",
    role: "presentation"
  }), map.action_menu_back)), external_React_default.a.createElement("ul", {
    className: "action-menu",
    role: "menu",
    "aria-label": map.action_menu_advanced_menu_aria_label
  }, external_React_default.a.createElement("li", {
    className: "with-icon",
    role: "menuitem"
  }, external_React_default.a.createElement("a", {
    className: "clearfix",
    id: "security-logs",
    onClick: props.onMenuItemClickHandler,
    role: "button"
  }, external_React_default.a.createElement("p", null, map.action_menu_review_security_logs), external_React_default.a.createElement("i", {
    className: "fa fa-eye",
    role: "presentation"
  }))), external_React_default.a.createElement("li", {
    className: "with-icon",
    role: "menuitem"
  }, external_React_default.a.createElement("a", {
    className: "clearfix",
    id: "email-providers",
    onClick: props.onMenuItemClickHandler,
    role: "button"
  }, external_React_default.a.createElement("p", null, map.action_menu_manage_domains), external_React_default.a.createElement("i", {
    className: "fa fa-server",
    role: "presentation"
  }))), external_React_default.a.createElement("li", {
    className: "with-icon",
    role: "menuitem"
  }, external_React_default.a.createElement("a", {
    className: "clearfix",
    id: "security-settings",
    onClick: props.onMenuItemClickHandler,
    role: "button"
  }, external_React_default.a.createElement("p", null, map.action_menu_edit_security_settings), external_React_default.a.createElement("i", {
    className: "fa fa-lock",
    role: "presentation"
  }))), external_React_default.a.createElement("li", {
    className: "with-icon",
    role: "menuitem"
  }, external_React_default.a.createElement("a", {
    className: "clearfix",
    id: "reload-extension",
    onClick: props.onMenuItemClickHandler,
    role: "button"
  }, external_React_default.a.createElement("p", null, map.action_menu_reload_extension_scripts), external_React_default.a.createElement("i", {
    className: "fa fa-refresh",
    role: "presentation"
  }))), external_React_default.a.createElement("li", {
    className: "with-icon",
    role: "menuitem"
  }, external_React_default.a.createElement("a", {
    className: "clearfix",
    id: "activate-tab",
    onClick: props.onMenuItemClickHandler,
    role: "button"
  }, external_React_default.a.createElement("p", null, map.action_menu_activate_current_tab), external_React_default.a.createElement("i", {
    className: "fa fa-plus",
    role: "presentation"
  })))), external_React_default.a.createElement("div", {
    className: "footer"
  }, external_React_default.a.createElement("a", {
    id: "options",
    onClick: props.onMenuItemClickHandler,
    role: "button"
  }, map.action_menu_all_options)));
}

ActionMenuAdvanced.propTypes = {
  onShowBaseOptionsHandler: prop_types_default.a.func,
  onMenuItemClickHandler: prop_types_default.a.func
};
/* harmony default export */ var components_ActionMenuAdvanced = (ActionMenuAdvanced);
// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__(2);
var external_jQuery_default = /*#__PURE__*/__webpack_require__.n(external_jQuery_);

// CONCATENATED MODULE: ./src/components/action-menu/components/ActionMenuAnimated.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */






class ActionMenuAnimated_ActionMenuAnimated extends external_React_["Component"] {
  showBaseOptions() {
    external_jQuery_default()('.action-menu-container-slide').animate({
      marginLeft: '0px'
    }, 200);
    external_jQuery_default()('div.action-menu').css('height', 300);
  }

  showAdvancedOptions() {
    external_jQuery_default()('.action-menu-container-slide').animate({
      marginLeft: '-230px'
    }, 200);
    const realHeight = external_jQuery_default()('div.action-menu')[0].scrollHeight;
    external_jQuery_default()('div.action-menu').css('height', realHeight);
  }

  render() {
    return external_React_default.a.createElement("div", {
      className: "action-menu-container-slide-container"
    }, external_React_default.a.createElement("div", {
      className: "action-menu-container-slide"
    }, external_React_default.a.createElement(components_ActionMenuBase, {
      onMenuItemClickHandler: this.props.onMenuItemClickHandler,
      onShowAdvancedOptionsHandler: this.showAdvancedOptions
    }), external_React_default.a.createElement(components_ActionMenuAdvanced, {
      onMenuItemClickHandler: this.props.onMenuItemClickHandler,
      onShowBaseOptionsHandler: this.showBaseOptions
    })));
  }

}

ActionMenuAnimated_ActionMenuAnimated.propTypes = {
  onMenuItemClickHandler: prop_types_default.a.func
};
/* harmony default export */ var components_ActionMenuAnimated = (ActionMenuAnimated_ActionMenuAnimated);
// CONCATENATED MODULE: ./src/components/action-menu/components/ActionMenuSetup.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




register(['action_menu_configure_mailvelope', 'action_menu_more_options', 'action_menu_setup_menu_aria_label']);

function ActionMenuSetup(props) {
  return external_React_default.a.createElement("div", {
    className: "primary"
  }, external_React_default.a.createElement("ul", {
    className: "action-menu",
    role: "menu",
    "aria-label": map.action_menu_setup_menu_aria_label
  }, external_React_default.a.createElement("li", {
    className: "item-big",
    role: "menuitem"
  }, external_React_default.a.createElement("a", {
    className: "clearfix",
    id: "setup-keys",
    onClick: props.onMenuItemClickHandler,
    role: "button"
  }, external_React_default.a.createElement("p", null, external_React_default.a.createElement(Trans, {
    id: map.action_menu_configure_mailvelope,
    components: [external_React_default.a.createElement("strong", {
      key: "0"
    })]
  })), external_React_default.a.createElement("i", {
    className: "fa fa-gear",
    role: "presentation"
  })))), external_React_default.a.createElement("div", {
    className: "footer"
  }, external_React_default.a.createElement("a", {
    id: "options",
    onClick: props.onMenuItemClickHandler,
    role: "button"
  }, map.action_menu_more_options)));
}

ActionMenuSetup.propTypes = {
  onMenuItemClickHandler: prop_types_default.a.func
};
/* harmony default export */ var components_ActionMenuSetup = (ActionMenuSetup);
// EXTERNAL MODULE: ./src/components/action-menu/ActionMenu.less
var ActionMenu = __webpack_require__(6);

// CONCATENATED MODULE: ./src/components/action-menu/components/ActionMenuWrapper.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */






register(['action_menu_help']);
mapToLocal();

class ActionMenuWrapper_ActionMenuWrapper extends external_React_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isSetupDone: true
    };
    this.port = EventHandler_EventHandler.connect('menu-59edbbeb9affc4004a916276');
  }

  async componentDidMount() {
    const {
      isSetupDone
    } = await this.port.send('get-is-setup-done');
    this.setState({
      isSetupDone
    });
  }

  onMenuItemClick(e) {
    const itemClicked = e.currentTarget;

    if (itemClicked === '' || itemClicked.id === '') {
      return false;
    }

    this.port.emit('browser-action', {
      action: itemClicked.id
    });
    this.hide();
  }

  hide() {
    $(document.body).fadeOut(() => window.close());
  }

  render() {
    let actionMenuContent = null;

    if (this.state.isSetupDone) {
      actionMenuContent = external_React_default.a.createElement(components_ActionMenuAnimated, {
        onMenuItemClickHandler: e => this.onMenuItemClick(e)
      });
    } else {
      actionMenuContent = external_React_default.a.createElement(components_ActionMenuSetup, {
        onMenuItemClickHandler: e => this.onMenuItemClick(e)
      });
    }

    return external_React_default.a.createElement("div", {
      className: `action-menu ${this.state.isSetupDone ? '' : 'action-menu-setup'}`
    }, external_React_default.a.createElement("div", {
      className: "action-menu-wrapper"
    }, external_React_default.a.createElement("div", {
      className: "action-menu-header clearfix"
    }, external_React_default.a.createElement("div", {
      className: "mailvelope-logo settings-logo"
    }, "Mailvelope"), external_React_default.a.createElement("div", {
      className: "nav-right"
    }, external_React_default.a.createElement("a", {
      href: "https://www.mailvelope.com/help",
      target: "_blank",
      rel: "noopener noreferrer"
    }, map.action_menu_help))), actionMenuContent));
  }

}

/* harmony default export */ var components_ActionMenuWrapper = (ActionMenuWrapper_ActionMenuWrapper);
// CONCATENATED MODULE: ./src/components/action-menu/actionMenu.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */



document.addEventListener('DOMContentLoaded', init);

function init() {
  const root = document.createElement('div');
  external_ReactDOM_default.a.render(external_React_default.a.createElement(components_ActionMenuWrapper, null), document.body.appendChild(root));
}

/***/ })
/******/ ]);