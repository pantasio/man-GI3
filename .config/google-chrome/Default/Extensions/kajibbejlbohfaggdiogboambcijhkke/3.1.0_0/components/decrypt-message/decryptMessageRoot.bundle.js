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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/*! exports used: default */
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
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ 6)();
}


/***/ }),
/* 2 */
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
/* 3 */
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

var	fixUrls = __webpack_require__(/*! ./urls */ 10);

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
/* 4 */
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 5 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 6 */
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



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 7);

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
/* 7 */
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
/* 8 */
/*!**********************************************************************!*\
  !*** ./src/components/decrypt-message/components/SignatureModal.css ***!
  \**********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./SignatureModal.css */ 9);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ 3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 9 */
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/decrypt-message/components/SignatureModal.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 2)(false);
// Module
exports.push([module.i, "\n.modal-header.bg-success,\n.modal-header.bg-danger,\n.modal-header.bg-warning {\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n", ""]);



/***/ }),
/* 10 */
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
/* 11 */
/*!*******************************************!*\
  !*** ./src/components/util/FilePanel.css ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./FilePanel.css */ 12);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ 3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 12 */
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/util/FilePanel.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 2)(false);
// Module
exports.push([module.i, "/**\n * Copyright (C) 2018 Mailvelope GmbH\n * Licensed under the GNU Affero General Public License version 3\n */\n\n.file-panel {\n  display: inline-block;\n}\n\n.ext-color-pdf  { background-color: #ad1e24 !important; }\n.ext-color-html { background-color: #ad1e24 !important; }\n.ext-color-htm  { background-color: #ad1e24 !important; }\n.ext-color-jpg  { background-color: #4ba5cb !important; }\n.ext-color-jpeg { background-color: #4ba5cb !important; }\n.ext-color-png  { background-color: #4ba5cb !important; }\n.ext-color-bmp  { background-color: #4ba5cb !important; }\n.ext-color-tif  { background-color: #4ba5cb !important; }\n.ext-color-tiff { background-color: #4ba5cb !important; }\n.ext-color-psd  { background-color: #4ba5cb !important; }\n.ext-color-txt  { background-color: #427bba !important; }\n.ext-color-doc  { background-color: #427bba !important; }\n.ext-color-docx { background-color: #427bba !important; }\n.ext-color-rtf  { background-color: #427bba !important; }\n.ext-color-mov  { background-color: #bc4fa9 !important; }\n.ext-color-avi  { background-color: #bc4fa9 !important; }\n.ext-color-wmv  { background-color: #bc4fa9 !important; }\n.ext-color-mpeg { background-color: #bc4fa9 !important; }\n.ext-color-flv  { background-color: #bc4fa9 !important; }\n.ext-color-xvid { background-color: #bc4fa9 !important; }\n.ext-color-mp3  { background-color: #563b8c !important; }\n.ext-color-wav  { background-color: #563b8c !important; }\n.ext-color-zip  { background-color: #e7ab30 !important; }\n.ext-color-rar  { background-color: #e7ab30 !important; }\n.ext-color-xml  { background-color: #d6732c !important; }\n.ext-color-ppt  { background-color: #d6732c !important; }\n.ext-color-pptx { background-color: #d6732c !important; }\n.ext-color-xls  { background-color: #6ea64e !important; }\n.ext-color-xlsx { background-color: #6ea64e !important; }\n.ext-color-exe  { background-color: #4b4a4a !important; }\n\n.file-element {\n  display: inline-flex;\n  align-items: center;\n  color: #5E5E5E;\n  font-weight: normal;\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 11px;\n  padding: 3px;\n  margin-bottom: 3px;\n  background: #efefef linear-gradient(to bottom,#ffffff,#ececec);\n  border: 1px solid #cbcbcb;\n  border-radius: 4px;\n  cursor: default;\n  margin-right: 5px;\n}\n\na.file-element {\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.file-extension {\n  display: inline-block;\n  font-weight: normal !important;\n  border-radius: 2px;\n  background-color: #8a8a8a;\n  color: #ffffff;\n  padding: 1px 3px;\n  text-transform: uppercase;\n  font-size: 10px;\n}\n\n.file-name {\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-decoration: none;\n  white-space: nowrap;\n  display: inline-block;\n  margin: 0 3px;\n}\n\n.remove-file {\n  display: inline-block;\n  border-radius: 2px;\n  color: white;\n  background-color: #a3a3a3;\n  cursor: pointer;\n  text-transform: uppercase;\n  padding: 2px;\n  position: inherit;\n  top: 0;\n  font-size: 12px;\n}\n", ""]);



/***/ }),
/* 13 */
/*!*****************************************!*\
  !*** ./src/components/util/Spinner.css ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Spinner.css */ 14);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ 3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 14 */
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/util/Spinner.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 2)(false);
// Module
exports.push([module.i, "/*\nThe MIT License (MIT)\nCopyright (c) 2014 Tobias Ahlin\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n/* Absolute Center Spinner */\n.m-spinner-fullscreen {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: visible;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n/* Transparent Overlay */\n.m-spinner-fullscreen:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.3);\n}\n\n.m-spinner-inline {\n  margin: 60px auto 60px;\n  width: 70px;\n  text-align: center;\n}\n\n.m-spinner-fullscreen .symbol, .m-spinner-inline .symbol {\n  width: 54px;\n}\n\n.m-spinner-fullscreen .symbol > div, .m-spinner-inline .symbol > div {\n  width: 18px;\n  height: 18px;\n  background-color: #333;\n\n  border-radius: 100%;\n  display: inline-block;\n  animation: bouncedelay 1.4s infinite ease-in-out;\n  /* Prevent first frame from flickering when animation starts */\n  animation-fill-mode: both;\n}\n\n.m-spinner-fullscreen .symbol .bounce1, .m-spinner-inline .symbol .bounce1 {\n  animation-delay: -0.32s;\n}\n\n.m-spinner-fullscreen .symbol .bounce2, .m-spinner-inline .symbol .bounce2 {\n  animation-delay: -0.16s;\n}\n\n@keyframes bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0.0);\n  } 40% {\n      transform: scale(1.0);\n    }\n}\n", ""]);



/***/ }),
/* 15 */
/*!***********************************************************!*\
  !*** ./src/components/decrypt-message/DecryptMessage.css ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./DecryptMessage.css */ 16);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ 3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 16 */
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/decrypt-message/DecryptMessage.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 2)(false);
// Module
exports.push([module.i, "/**\n * Mailvelope - secure email with OpenPGP encryption for Webmail\n * Copyright (C) 2012-2018 Mailvelope GmbH\n */\n\n.decrypt-msg-flex-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 3px;\n  left: 10px;\n  right: 10px;\n  bottom: 8px;\n  opacity: 0;\n  transition: opacity 0.6s ease-in;\n}\n\n.decrypt-msg-flex-container.fade-in {\n  opacity: 1;\n}\n\n.decrypt-msg-flex-container .decrypt-msg-header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between\n}\n\n.decrypt-msg-flex-container .decrypt-msg-header .download-panel {\n  flex: 100%;\n  order: 1;\n  max-height: 105px;\n  overflow-y: auto;\n}\n\n.decrypt-msg-flex-container .decrypt-msg-header .button-bar {\n  order: 2;\n}\n\n.decrypt-msg-flex-container .decrypt-msg-body {\n  width: 100%;\n  position: relative;\n  flex: 1 0 auto;\n  /* https://code.google.com/p/chromium/issues/detail?id=551336 */\n  min-width: 0;\n  min-height: 0;\n}\n\n.decrypt-msg-flex-container .decrypt-msg-body .plain-text {\n  margin: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0);\n}\n\n.decrypt-msg-flex-container .decrypt-msg-body .plain-text iframe {\n  width: 100%;\n  height: 100%;\n}\n\n.decrypt-msg-flex-container .decrypt-msg-footer {\n  width: 100%;\n  padding-top: 4px;\n}\n", ""]);



/***/ }),
/* 17 */
/*!***************************************************************!*\
  !*** ./src/components/decrypt-message/decryptMessageRoot.css ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./decryptMessageRoot.css */ 18);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ 3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 18 */
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/decrypt-message/decryptMessageRoot.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 2)(false);
// Module
exports.push([module.i, "\nhtml, body, body > div {\n  height: 100%;\n  background-color: rgba(0,0,0,0);\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  align-items: stretch;\n}\n", ""]);



/***/ }),
/* 19 */
/*!***************************************************************************!*\
  !*** ./src/components/decrypt-message/decryptMessageRoot.js + 12 modules ***!
  \***************************************************************************/
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
var external_ReactDOM_ = __webpack_require__(5);
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
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

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
// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__(4);
var external_jQuery_default = /*#__PURE__*/__webpack_require__.n(external_jQuery_);

// CONCATENATED MODULE: ./src/components/decrypt-message/components/ContentSandbox.js
/**
 * Copyright (C) 2018 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */



class ContentSandbox_ContentSandbox extends external_React_default.a.PureComponent {
  constructor(props) {
    super(props);
    this.sandbox = null;
  }

  componentDidUpdate(prevProps) {
    if (this.sandbox && prevProps.value !== this.props.value) {
      this.setContent(this.props.value);
    }
  }

  setContent(value) {
    external_jQuery_default()(this.sandbox).contents().find('#content').append(external_jQuery_default.a.parseHTML(value));
  }

  render() {
    const sandboxContent = `
      <!DOCTYPE html>
      <html style="height: 100%">
        <head>
          <meta charset="utf-8">
          <meta http-equiv="Content-Security-Policy" content="default-src 'self' blob:; style-src 'self' 'unsafe-inline'; img-src 'self' data:;">
          <link rel="stylesheet" href="../../dep/bootstrap/css/bootstrap.css">
        </head>
        <body style="overflow: hidden; margin: 0; height: 100%">
         <div id="content" style="height: 100%; padding: 6px 12px; overflow: auto;">
         </div>
        </body>
      </html>
    `;
    return external_React_default.a.createElement("iframe", {
      style: {
        border: '1px solid lightgray',
        backgroundColor: 'white',
        borderRadius: '2px'
      },
      srcDoc: sandboxContent,
      sandbox: "allow-same-origin allow-popups",
      frameBorder: "0",
      ref: node => this.sandbox = node,
      onLoad: () => this.setContent(this.props.value)
    });
  }

}
ContentSandbox_ContentSandbox.propTypes = {
  value: prop_types_default.a.string
};
// CONCATENATED MODULE: ./src/components/util/ModalDialog.js
/**
 * Copyright (C) 2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */



register(['form_ok', 'form_cancel']);

class ModalDialog_ModalDialog extends external_React_default.a.Component {
  componentDidMount() {
    this.$node.modal({
      backdrop: 'static',
      keyboard: this.props.keyboard
    });
    this.$node.modal('show');
    this.$node.on('hidden.bs.modal', this.props.onHide);
    this.$node.on('show.bs.modal', this.props.onShow);
  }

  componentWillUnmount() {
    this.$node.modal('hide');
  }

  render() {
    return external_React_default.a.createElement("div", {
      className: `modal fade ${this.props.className || ''}`,
      tabIndex: "-1",
      role: "dialog",
      ref: node => this.$node = $(node)
    }, external_React_default.a.createElement("div", {
      className: `modal-dialog ${this.props.size === 'small' ? 'modal-sm' : this.props.size === 'large' ? 'modal-lg' : ''}`,
      role: "document"
    }, external_React_default.a.createElement("div", {
      className: "modal-content"
    }, external_React_default.a.createElement("div", {
      className: `modal-header ${this.props.hideHeader ? 'hide' : ''} ${this.props.headerClass}`
    }, this.props.header || external_React_default.a.createElement("div", null, external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.props.onCancel,
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, external_React_default.a.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7")), external_React_default.a.createElement("h4", {
      className: "modal-title"
    }, this.props.title))), external_React_default.a.createElement("div", {
      className: "modal-body"
    }, this.props.children), external_React_default.a.createElement("div", {
      className: `modal-footer ${this.props.hideFooter ? 'hide' : ''}`
    }, this.props.footer || external_React_default.a.createElement("div", null, external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.props.onCancel,
      className: "btn btn-default",
      "data-dismiss": "modal"
    }, map.form_cancel), external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.props.onOk,
      className: "btn btn-primary",
      "data-dismiss": "modal"
    }, map.form_ok))))));
  }

}

ModalDialog_ModalDialog.propTypes = {
  className: prop_types_default.a.string,
  size: prop_types_default.a.oneOf(['small', 'medium', 'large']),
  title: prop_types_default.a.string,
  header: prop_types_default.a.element,
  headerClass: prop_types_default.a.string,
  footer: prop_types_default.a.element,
  children: prop_types_default.a.element,
  onHide: prop_types_default.a.func,
  onShow: prop_types_default.a.func,
  onOk: prop_types_default.a.func,
  onCancel: prop_types_default.a.func,
  hideHeader: prop_types_default.a.bool,
  hideFooter: prop_types_default.a.bool,
  keyboard: prop_types_default.a.bool
};
ModalDialog_ModalDialog.defaultProps = {
  size: 'medium',
  keyboard: true,
  headerClass: ''
};
/* harmony default export */ var util_ModalDialog = (ModalDialog_ModalDialog);
// EXTERNAL MODULE: ./src/components/decrypt-message/components/SignatureModal.css
var SignatureModal = __webpack_require__(8);

// CONCATENATED MODULE: ./src/components/decrypt-message/components/SignatureModal.js
/**
 * Copyright (C) 2018 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */






register(['digital_signature_status_true', 'digital_signature_status_false', 'digital_signature_status_null', 'digital_signature_status_null_description', 'dialog_popup_close', 'keygrid_key_fingerprint', 'keygrid_user_email', 'keygrid_user_name', 'keygrid_validity_status']);
function SignatureModal_SignatureModal({
  signer,
  onHide
}) {
  let status;
  let bgClass;

  if (signer.valid === true) {
    bgClass = 'bg-success';
    status = map.digital_signature_status_true;
  } else if (signer.valid === false) {
    bgClass = 'bg-danger';
    status = map.digital_signature_status_false;
  } else if (signer.valid === null) {
    bgClass = 'bg-warning';
    status = map.digital_signature_status_null;
  }

  return external_React_default.a.createElement(util_ModalDialog, {
    onHide: onHide,
    headerClass: bgClass,
    header: external_React_default.a.createElement("div", null, external_React_default.a.createElement("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, external_React_default.a.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7")), external_React_default.a.createElement("h4", {
      className: "modal-title"
    }, external_React_default.a.createElement("b", null, map.keygrid_validity_status, ":"), " ", status)),
    footer: external_React_default.a.createElement("button", {
      type: "button",
      className: "btn btn-default",
      "data-dismiss": "modal"
    }, map.dialog_popup_close)
  }, external_React_default.a.createElement("div", null, signer.valid !== null ? external_React_default.a.createElement("div", null, external_React_default.a.createElement("p", null, external_React_default.a.createElement("b", null, map.keygrid_user_name, ":"), " ", signer.keyDetails.name), external_React_default.a.createElement("p", null, external_React_default.a.createElement("b", null, map.keygrid_user_email, ":"), " ", signer.keyDetails.email), external_React_default.a.createElement("p", null, external_React_default.a.createElement("b", null, map.keygrid_key_fingerprint, ":"), " ", formatFpr(signer.keyDetails.fingerprint))) : external_React_default.a.createElement("div", null, signer.valid === null && external_React_default.a.createElement("p", null, map.digital_signature_status_null_description), external_React_default.a.createElement("p", null, external_React_default.a.createElement("b", null, map.keygrid_keyid, ":"), " ", signer.keyId.toUpperCase()))));
}
SignatureModal_SignatureModal.propTypes = {
  signer: prop_types_default.a.object,
  onHide: prop_types_default.a.func
};
// CONCATENATED MODULE: ./src/lib/file.js
/**
 * Copyright (C) 2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */



register(['editor_remove_upload', 'encrypt_download_file_button']);
/**
 * @param {File} file
 * @param {Number} file.size
 * @returns {boolean}
 */

function isOversize(file) {
  return file.size >= MAX_FILE_UPLOAD_SIZE;
}
/**
 * @returns {number}
 */

function getFileSize($fileList) {
  let currentAttachmentsSize = 0;
  $fileList.find('.attachmentButton').each(function () {
    currentAttachmentsSize += $(this).data('file').size;
  });
  return currentAttachmentsSize;
}
/**
 * @param {File} file
 * @param {Number} file.lastModified
 * @param {Date} file.lastModifiedDate
 * @param {String} file.name
 * @param {Number} file.size
 * @param {String} file.type
 * @param {String} file.webkitRelativePath
 * @param {Funtion} onLoadEnd
 * @returns {Promise<Object, Error>}
 */

function readUploadFile(file, onLoadEnd) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = function () {
      resolve({
        content: this.result,
        id: getHash(),
        name: file.name,
        size: file.size,
        type: file.type
      });
    };

    fileReader.onloadend = onLoadEnd;

    fileReader.onabort = function (evt) {
      reject(evt);
    };

    fileReader.readAsDataURL(file);
  });
}
function createFileElement(file, options) {
  options = options || {};
  const $button = $('<div/>', {
    'title': file.name,
    'class': 'attachmentButton'
  });
  $button.data('file', file);
  $button.append(getExtensionIcon(file));
  $button.append(getFileName(file));

  if (options.secureIcon) {
    $button.append(getSecureIcon());
  }

  if (options.removeButton) {
    $button.append(getRemoveButton(options.onRemove));
  }

  return $button;
}
function createFileDownloadElement(file, options) {
  options = options || {};
  const $button = $('<a/>', {
    'title': file.name,
    'download': file.name,
    'class': 'attachmentButton',
    'href': downloadAttachment(file)
  });
  $button.append(getExtensionIcon(file));
  $button.append(getFileName(file));

  if (options.secureIcon) {
    $button.append(getSecureIcon());
  }

  $button.append(getDownloadButton());
  return $button;
}
function extractFileNameWithoutExt(fileName) {
  const indexOfDot = fileName.lastIndexOf('.');

  if (indexOfDot > 0) {
    // case: regular
    return fileName.substring(0, indexOfDot);
  } else {
    return fileName;
  }
}
/**
 * @param {File} file
 * @param {String} file.name
 * @returns {*|jQuery}
 */

function getFileName(file) {
  const fileNameNoExt = extractFileNameWithoutExt(file.name);
  return $('<span/>', {
    'class': 'attachmentFilename'
  }).text(fileNameNoExt);
}
/**
 * @param {File} file
 * @param {String} file.id
 * @returns {*|jQuery}
 */


function getDownloadButton() {
  return $('<span/>', {
    'title': map.encrypt_download_file_button,
    'class': 'glyphicon glyphicon-save saveAttachment'
  });
}
/**
 * @param {Function} onRemove
 * @returns {*|jQuery}
 */


function getRemoveButton(onRemove) {
  return $('<span/>', {
    'title': map.editor_remove_upload,
    'class': 'glyphicon glyphicon-remove removeAttachment'
  }).on('click', function (e) {
    e.preventDefault();

    if (onRemove) {
      onRemove();
    }

    $(this).parent().remove();
  });
}

function extractFileExtension(fileName) {
  const lastindexDot = fileName.lastIndexOf('.');

  if (lastindexDot <= 0) {
    // no extension
    return '';
  } else {
    return fileName.substring(lastindexDot + 1, fileName.length).toLowerCase().trim();
  }
}
function getExtensionClass(fileExt) {
  let extClass = '';

  if (fileExt) {
    extClass = `ext-color-${fileExt}`;
  }

  return extClass;
}
/**
 * @param {File} file
 * @param {String} file.name
 * @param {String} file.id
 * @returns {*|jQuery}
 */

function getExtensionIcon(file) {
  const fileExt = extractFileExtension(file.name);

  if (!fileExt) {
    return '';
  }

  const extClass = getExtensionClass(fileExt);
  return $('<span/>', {
    'class': `attachmentExtension ${extClass}`
  }).text(fileExt);
}
/**
 * @returns {*|jQuery|HTMLElement}
 */


function getSecureIcon() {
  return $('<span/>', {
    'class': 'glyphicon glyphicon-lock secure-icon'
  });
}
/**
 * @param {File} file
 * @param {String} file.content
 * @param {String} file.type
 * @returns {string}
 */


function downloadAttachment({
  content,
  type,
  name
}) {
  const ab = str2ab(content);
  const file = new File([ab], name, {
    type
  });
  return window.URL.createObjectURL(file);
}
/**
 * @returns {Object}
 */


function getFiles($fileList) {
  const files = [];
  $fileList.find('.attachmentButton').each(function () {
    files.push($(this).data('file'));
  });
  return files;
}
class FileUpload {
  constructor() {
    // flag to monitor upload-in-progress status
    this.numUploadsInProgress = 0; // buffer for actions after upload finished

    this.actions = null;
  }

  readFile(file) {
    this.numUploadsInProgress++;
    return readUploadFile(file, this.onLoadEnd).catch(error => {
      this.onLoadEnd();
      throw error;
    });
  }

  inProgress() {
    return this.actions !== null;
  }

  registerAction(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Wrong parameter type, register only functions as actions');
    }

    this.action = fn;
  }

  onLoadEnd() {
    this.numUploadsInProgress--;

    if (this.numUploadsInProgress === 0 && this.actions) {
      this.action();
      this.action = null;
    }
  }

}
// EXTERNAL MODULE: ./src/components/util/FilePanel.css
var FilePanel = __webpack_require__(11);

// CONCATENATED MODULE: ./src/components/util/FilePanel.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */





register(['editor_remove_upload']);
class FilePanel_FileUploadPanel extends external_React_default.a.Component {
  componentDidUpdate(prevProps) {
    if (this.props.files !== prevProps.files) {
      this.panel.scrollIntoView(false);
    }
  }

  render() {
    return external_React_default.a.createElement("div", {
      className: "file-panel",
      ref: node => this.panel = node
    }, this.props.files.map(file => external_React_default.a.createElement(FileUploadElement, {
      key: file.id,
      file: file,
      onRemove: this.props.onRemoveFile
    })));
  }

}
FilePanel_FileUploadPanel.propTypes = {
  files: prop_types_default.a.array,
  onRemoveFile: prop_types_default.a.func
};

function FileUploadElement({
  file,
  secureIcon,
  onRemove
}) {
  const fileExt = extractFileExtension(file.name);
  return external_React_default.a.createElement("div", {
    className: "file-element",
    id: file.id,
    title: file.name
  }, fileExt && external_React_default.a.createElement("span", {
    className: `file-extension ${getExtensionClass(fileExt)}`
  }, fileExt), external_React_default.a.createElement("span", {
    className: "file-name"
  }, extractFileNameWithoutExt(file.name)), secureIcon && external_React_default.a.createElement("span", {
    className: "glyphicon glyphicon-lock secure-icon"
  }), onRemove && external_React_default.a.createElement("span", {
    title: map.editor_remove_upload,
    className: "glyphicon glyphicon-remove remove-file",
    onClick: () => onRemove(file.id)
  }));
}

FileUploadElement.propTypes = {
  file: prop_types_default.a.object,
  // {id, name}
  secureIcon: prop_types_default.a.bool,
  onRemove: prop_types_default.a.func
};
function FileDownloadPanel(props) {
  return external_React_default.a.createElement("div", {
    className: "file-panel"
  }, props.files.map(file => external_React_default.a.createElement(FileDownloadElement, {
    key: file.id,
    file: file,
    onClick: props.onClickFile
  })));
}
FileDownloadPanel.propTypes = {
  files: prop_types_default.a.array,
  // {id, name}
  onClickFile: prop_types_default.a.func
};

function FileDownloadElement({
  file,
  onClick
}) {
  const fileExt = extractFileExtension(file.name);
  return external_React_default.a.createElement("a", {
    className: "file-element",
    onClick: onClick,
    title: file.name,
    download: file.name,
    href: file.objectURL
  }, external_React_default.a.createElement("span", {
    className: `label file-extension ${getExtensionClass(fileExt)}`
  }, fileExt), external_React_default.a.createElement("span", {
    className: "file-name"
  }, extractFileNameWithoutExt(file.name)));
}

FileDownloadElement.propTypes = {
  file: prop_types_default.a.object,
  // {id, name, objectURL}
  onClick: prop_types_default.a.func
};
// CONCATENATED MODULE: ./src/components/util/Alert.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */


/**
 * Alert
 */

function Alert({
  header,
  children: message,
  type
}) {
  return external_React_default.a.createElement("div", {
    className: `alert fade in alert-${type}`
  }, header && external_React_default.a.createElement("strong", null, `${header} `), message);
}
Alert.propTypes = {
  header: prop_types_default.a.string,
  children: prop_types_default.a.node.isRequired,
  type: prop_types_default.a.oneOf(['success', 'info', 'warning', 'danger'])
};
// EXTERNAL MODULE: ./src/components/util/Spinner.css
var util_Spinner = __webpack_require__(13);

// CONCATENATED MODULE: ./src/components/util/Spinner.js



class Spinner_Spinner extends external_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: this.props.delay ? true : false
    };
    this.timer = 0;
  }

  componentDidMount() {
    if (this.props.delay) {
      // show spinner after delay
      this.timer = setTimeout(() => this.setState({
        hide: false
      }), this.props.delay);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return external_React_default.a.createElement("div", {
      className: `m-spinner-${this.props.fullscreen ? 'fullscreen' : 'inline'} ${this.state.hide ? 'hide' : ''}`,
      style: this.props.style
    }, external_React_default.a.createElement("div", {
      className: "symbol"
    }, external_React_default.a.createElement("div", {
      className: "bounce1"
    }), external_React_default.a.createElement("div", {
      className: "bounce2"
    }), external_React_default.a.createElement("div", {
      className: "bounce3"
    })));
  }

}
Spinner_Spinner.propTypes = {
  style: prop_types_default.a.object,
  delay: prop_types_default.a.number,
  fullscreen: prop_types_default.a.bool
};
Spinner_Spinner.defaultProps = {
  delay: 400,
  fullscreen: false
};
// EXTERNAL MODULE: ./src/components/decrypt-message/DecryptMessage.css
var decrypt_message_DecryptMessage = __webpack_require__(15);

// CONCATENATED MODULE: ./src/components/decrypt-message/DecryptMessage.js
/**
 * Copyright (C) 2012-2018 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */











 // register language strings

register(['alert_header_error', 'decrypt_digital_signature', 'decrypt_digital_signature_failure', 'decrypt_digital_signature_null', 'security_background_button_title']);
class DecryptMessage_DecryptMessage extends external_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      signer: null,
      showSig: false,
      waiting: true,
      files: [],
      error: null
    };
    this.port = EventHandler_EventHandler.connect(`dDialog-${this.props.id}`, this);
    this.registerEventListeners(); // emit event to backend that editor has initialized

    this.port.emit('decrypt-message-init');
  }

  componentDidMount() {
    if (this.props.secureBackground) {
      showSecurityBackground(this.port, true);
    }
  }

  registerEventListeners() {
    this.port.on('decrypted-message', this.onDecryptedMessage);
    this.port.on('add-decrypted-attachment', this.onDecryptedAttachment);
    this.port.on('signature-verification', this.onSignatureVerification);
    this.port.on('error-message', this.showErrorMsg);
    this.port.on('terminate', () => terminate(this.port));
  }

  onDecryptedMessage({
    message
  }) {
    this.setState({
      message,
      waiting: false
    });
  }

  onDecryptedAttachment({
    attachment
  }) {
    const file = {
      id: getHash(),
      name: attachment.filename
    };
    const content = str2ab(attachment.content); // set MIME type fix to application/octet-stream as other types can be exploited in Chrome

    attachment.mimeType = 'application/octet-stream';
    const blob = new Blob([content], {
      type: attachment.mimeType
    });
    file.objectURL = window.URL.createObjectURL(blob);
    this.setState(prevState => ({
      files: [...prevState.files, file],
      waiting: false
    }));
  }

  onSignatureVerification({
    signers
  }) {
    let signer = null;

    if (!signers.length) {
      return this.setState({
        signer
      });
    }

    const validSig = signers.filter(signer => signer.valid === true);
    const invalidSig = signers.filter(signer => signer.valid === false);

    if (validSig.length) {
      signer = validSig[0];
    } else if (invalidSig.length) {
      signer = invalidSig[0];
    }

    this.setState({
      signer
    });
  }

  onClickSignature() {
    this.logUserInput('security_log_signature_modal_open');
    this.setState({
      showSig: true
    });
  }

  handleClickFile() {
    this.logUserInput('security_log_attachment_download');
  }

  showErrorMsg({
    error
  }) {
    this.setState({
      error: {
        header: map.alert_header_error,
        message: error,
        type: 'danger'
      },
      waiting: false
    });
  }

  logUserInput(type) {
    this.port.emit('decrypt-inline-user-input', {
      source: 'security_log_email_viewer',
      type
    });
  }

  handleCancel() {
    this.port.emit('decrypt-dialog-cancel');
  }

  handleSignatureModalHide() {
    this.setState({
      showSig: false
    });
    this.logUserInput('security_log_signature_modal_close');
  }

  signatureButton() {
    let caption;

    if (!this.state.signer) {
      return null;
    }

    if (this.state.signer.valid) {
      caption = map.decrypt_digital_signature;
    } else if (this.state.signer.valid === false) {
      caption = map.decrypt_digital_signature_failure;
    } else if (this.state.signer.valid === null) {
      caption = map.decrypt_digital_signature_null;
    }

    return external_React_default.a.createElement("button", {
      type: "button",
      className: "btn btn-digital-signature pull-right",
      onClick: () => this.onClickSignature()
    }, caption);
  }

  errorModal() {
    if (!this.state.error) {
      return null;
    }

    return external_React_default.a.createElement(util_ModalDialog, {
      title: this.state.error.header,
      onCancel: () => this.handleCancel(),
      hideFooter: true
    }, external_React_default.a.createElement(Alert, {
      type: this.state.error.type
    }, this.state.error.message));
  }

  render() {
    return external_React_default.a.createElement("div", {
      className: this.props.secureBackground && !this.state.waiting ? 'secureBackground' : '',
      style: {
        height: '100%',
        position: 'relative'
      }
    }, this.state.waiting && external_React_default.a.createElement(Spinner_Spinner, {
      style: {
        margin: '160px auto 0'
      }
    }), external_React_default.a.createElement("div", {
      className: `decrypt-msg-flex-container ${this.state.waiting ? '' : 'fade-in'}`
    }, external_React_default.a.createElement("div", {
      className: "decrypt-msg-header"
    }, this.props.secureBackground && external_React_default.a.createElement("div", {
      className: "button-bar"
    }, external_React_default.a.createElement("button", {
      type: "button",
      className: "btn btn-link secureBgndSettingsBtn",
      title: map.security_background_button_title,
      onClick: () => this.port.emit('open-security-settings')
    }, external_React_default.a.createElement("span", {
      className: "glyphicon lockBtnIcon"
    }))), external_React_default.a.createElement("div", {
      className: `download-panel ${!this.props.secureBackground && !this.state.files.length ? 'hide' : ''}`
    }, !this.props.isContainer && this.signatureButton(), external_React_default.a.createElement(FileDownloadPanel, {
      files: this.state.files,
      onClickFile: () => this.handleClickFile()
    }))), external_React_default.a.createElement("div", {
      className: "decrypt-msg-body"
    }, external_React_default.a.createElement("div", {
      className: "plain-text"
    }, external_React_default.a.createElement(ContentSandbox_ContentSandbox, {
      value: this.state.message
    }))), external_React_default.a.createElement("div", {
      className: "decrypt-msg-footer"
    }, this.props.isContainer && this.signatureButton())), this.errorModal(), this.state.showSig && external_React_default.a.createElement(SignatureModal_SignatureModal, {
      signer: this.state.signer,
      onHide: () => this.handleSignatureModalHide()
    }));
  }

}
DecryptMessage_DecryptMessage.propTypes = {
  id: prop_types_default.a.string,
  secureBackground: prop_types_default.a.bool,
  isContainer: prop_types_default.a.bool
};
DecryptMessage_DecryptMessage.defaultProps = {
  secureBackground: true
};
// EXTERNAL MODULE: ./src/components/decrypt-message/decryptMessageRoot.css
var decryptMessageRoot = __webpack_require__(17);

// CONCATENATED MODULE: ./src/components/decrypt-message/decryptMessageRoot.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */





document.addEventListener('DOMContentLoaded', init);
mapToLocal();

function init() {
  if (document.body.dataset.mvelo) {
    return;
  }

  document.body.dataset.mvelo = true;
  const query = new URLSearchParams(document.location.search); // component id

  const id = query.get('id' || false); // component used as a container (client API)

  const isContainer = Boolean(query.get('isContainer') || '');
  const root = document.createElement('div');
  external_ReactDOM_default.a.render(external_React_default.a.createElement(DecryptMessage_DecryptMessage, {
    id: id,
    isContainer: isContainer
  }), document.body.appendChild(root));
}

/***/ })
/******/ ]);