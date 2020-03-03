module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\index.js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Common/BlogPost.js":
/*!***************************************!*\
  !*** ./components/Common/BlogPost.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\components\\Common\\BlogPost.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class BlogPost extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "blog-section pt-100 pb-70",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Blog"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Our Recent Post")), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-4 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "blog-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog/blog3.png */ "./images/blog/blog3.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }))), __jsx("div", {
      className: "blog-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("ul", {
      className: "meta-tags",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("i", {
      className: "fa fa-user-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), "Admin"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-calendar-week",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), "7 Dec 2020"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("i", {
      className: "far fa-comments",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), "3 Comments")), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Startup marketing solution for business owner"))), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("a", {
      className: "read-more",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Read More", __jsx("i", {
      className: "fa fa-chevron-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })))))), __jsx("div", {
      className: "col-lg-4 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      className: "blog-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog/blog4.png */ "./images/blog/blog4.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }))), __jsx("div", {
      className: "blog-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("ul", {
      className: "meta-tags",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("i", {
      className: "fa fa-user-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }), "Admin"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-calendar-week",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), "7 Dec 2020"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("i", {
      className: "far fa-comments",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), "3 Comments")), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "Web developement best work in future world"))), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("a", {
      className: "read-more",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "Read More", __jsx("i", {
      className: "fa fa-chevron-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    })))))), __jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("div", {
      className: "blog-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog/blog5.png */ "./images/blog/blog5.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }))), __jsx("div", {
      className: "blog-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx("ul", {
      className: "meta-tags",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, __jsx("i", {
      className: "fa fa-user-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }), "Admin"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-calendar-week",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }), "7 Dec 2020"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, __jsx("i", {
      className: "far fa-comments",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }), "3 Comments")), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, "Creative solutions to improve your business!"))), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx("a", {
      className: "read-more",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "Read More", __jsx("i", {
      className: "fa fa-chevron-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    })))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

/***/ }),

/***/ "./components/Common/Customers.js":
/*!****************************************!*\
  !*** ./components/Common/Customers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\components\\Common\\Customers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Customers extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "partner-section pt-100 pb-70",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "partner-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Customer"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Discover Customer Successful Stories")), __jsx("div", {
      className: "partner-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "partner-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/partner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner/partner1.jpg */ "./images/partner/partner1.jpg"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })))), __jsx("div", {
      className: "partner-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/partner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner/partner2.png */ "./images/partner/partner2.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })))), __jsx("div", {
      className: "partner-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/partner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner/partner3.jpg */ "./images/partner/partner3.jpg"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })))), __jsx("div", {
      className: "partner-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/partner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner/partner4.jpg */ "./images/partner/partner4.jpg"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })))), __jsx("div", {
      className: "partner-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/partner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner/partner5.jpg */ "./images/partner/partner5.jpg"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })))))), __jsx("div", {
      className: "partner-shape",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/shape/partnar-shape-1.png */ "./images/shape/partnar-shape-1.png"),
      alt: "main-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })), __jsx("div", {
      className: "partner-shape-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/shape/partnar-shape-2.png */ "./images/shape/partnar-shape-2.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Customers);

/***/ }),

/***/ "./components/Common/FunFacts.js":
/*!***************************************!*\
  !*** ./components/Common/FunFacts.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\components\\Common\\FunFacts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class FunFacts extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "fun-facts-area ptb-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-3 col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_1___default.a, {
      animation: "fadeInUp",
      delay: ".2s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "single-fun-fact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "820", __jsx("span", {
      className: "sign-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "+")), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Data Analytics")))), __jsx("div", {
      className: "col-lg-3 col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_1___default.a, {
      animation: "fadeInUp",
      delay: ".3s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("div", {
      className: "single-fun-fact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "150", __jsx("span", {
      className: "sign-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "+")), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Data Management")))), __jsx("div", {
      className: "col-lg-3 col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_1___default.a, {
      animation: "fadeInUp",
      delay: ".4s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("div", {
      className: "single-fun-fact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "20", __jsx("span", {
      className: "sign-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "+")), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Managed  Analytics")))), __jsx("div", {
      className: "col-lg-3 col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_1___default.a, {
      animation: "fadeInUp",
      delay: ".5s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      className: "single-fun-fact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "120", __jsx("span", {
      className: "sign-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "+")), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Big Data")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FunFacts);

/***/ }),

/***/ "./components/Common/SolutionsTab.js":
/*!*******************************************!*\
  !*** ./components/Common/SolutionsTab.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\components\\Common\\SolutionsTab.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class SolutionsTab extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "openTabSection", (evt, tabNmae) => {
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabs_item");

      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByTagName("li");

      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("current", "");
      }

      document.getElementById(tabNmae).style.display = "block";
      evt.currentTarget.className += "current";
    });
  }

  render() {
    return __jsx("div", {
      className: "tab-section ptb-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      className: "tab solutions-list-tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("ul", {
      className: "tabs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("li", {
      className: "current",
      onClick: e => this.openTabSection(e, 'tab1'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Shopify")), __jsx("li", {
      onClick: e => this.openTabSection(e, 'tab2'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Web Development")), __jsx("li", {
      onClick: e => this.openTabSection(e, 'tab3'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Mobile App Development")), __jsx("li", {
      onClick: e => this.openTabSection(e, 'tab4'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Wordpress"))), __jsx("div", {
      className: "tab_content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("div", {
      id: "tab1",
      className: "tabs_item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: "row align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("div", {
      className: "tab-solution-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Shopify"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Shopify is a subscription to a software service that offers you to create a website and use their shopping cart solution to sell, ship, and manage your products. Using their service, you can get access to easy to use admin panel where you can add products, process orders and enter store data"), __jsx("ul", {
      className: "tab-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-tick-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), "Innovation idea the latest business technology"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-tick-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), "Safe secure services for your online email account"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-tick-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), "Digital content marketing online")), __jsx("div", {
      className: "tab-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("a", {
      className: "default-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Read More ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })))))), __jsx("div", {
      className: "col-lg-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("div", {
      className: "tab-image-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/pics/shopify.png */ "./images/pics/shopify.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }))))), __jsx("div", {
      id: "tab2",
      className: "tabs_item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("div", {
      className: "row align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("div", {
      className: "tab-image-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/pics/wd.jpg */ "./images/pics/wd.jpg"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }))), __jsx("div", {
      className: "col-lg-7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("div", {
      className: "tab-solution-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "Web Development"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "We understand successful software solutions need bright ideas effectively implemented. Its not just about handling complex business logic\u2019s, we go extra mile to simplify the whole process so that anybody can easily use it. Here are some of the web developement services we provide to our customers:"), __jsx("ul", {
      className: "tab-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-tick-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }), "Product Engineering"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-tick-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }), "E-Commerce Store"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-tick-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }), "Enterprise Application Development")), __jsx("div", {
      className: "tab-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("a", {
      className: "default-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "Read More ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    })))))))), __jsx("div", {
      id: "tab3",
      className: "tabs_item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, __jsx("div", {
      className: "row align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx("div", {
      className: "tab-solution-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "Mobile App Development"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "From developing native apps for Android and iOS platform to utilising modern technologies like React Native, we have extensive experience in developing mobile applications for both the platforms."), __jsx("ul", {
      className: "tab-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-tick-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }), "Innovation idea the latest business technology"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-tick-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }), "Safe secure services for your online email account"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-tick-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }), "Digital content marketing online")), __jsx("div", {
      className: "tab-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("a", {
      className: "default-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "Read More ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    })))))), __jsx("div", {
      className: "col-lg-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, __jsx("div", {
      className: "tab-image-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/pics/Mobile-App.png */ "./images/pics/Mobile-App.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }))))), __jsx("div", {
      id: "tab4",
      className: "tabs_item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("div", {
      className: "row align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx("div", {
      className: "tab-image-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/pics/wordpress.png */ "./images/pics/wordpress.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }))), __jsx("div", {
      className: "col-lg-7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, __jsx("div", {
      className: "tab-solution-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, "Wordpress"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, "Mojitolabs has used WordPress extensively for creating all kinds of websites ranging from small blogging websites to large websites with hundreds of web pages. Our experienced WordPress website developers have created many add-ons by utilizing the extensible nature of WordPress. Our WordPress developers not only create a website but also optimize it for the search engines. We enjoy innovating new tools for developing best possible websites for our clients."), __jsx("ul", {
      className: "tab-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-tick-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }), "WordPress powers more than 23.4% of websites today"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-tick-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }), "Nearly every web user has either heard, seen or used WordPress"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-tick-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }), "Wordpress website development is the most sought after service today")), __jsx("div", {
      className: "tab-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, __jsx("a", {
      className: "default-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, "Read More ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }))))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SolutionsTab);

/***/ }),

/***/ "./components/Common/Subscribe.js":
/*!****************************************!*\
  !*** ./components/Common/Subscribe.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\components\\Common\\Subscribe.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Subscribe extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "subscribe-area",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("div", {
      className: "row align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-6 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "subscribe-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Sign Up For Newsletter"), __jsx("span", {
      className: "sub-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }))), __jsx("div", {
      className: "col-lg-6 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("form", {
      className: "newsletter-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("input", {
      type: "email",
      className: "input-newsletter",
      name: "email",
      placeholder: "Enter your email",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Subscribe Now"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

/***/ }),

/***/ "./components/Common/Testimonial.js":
/*!******************************************!*\
  !*** ./components/Common/Testimonial.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\components\\Common\\Testimonial.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: true,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  smartSpeed: 1000,
  margin: 20,
  navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 1
    }
  }
};

class Testimonial extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      display: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return __jsx("section", {
      className: "testimonial-section ptb-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Testimonial"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "What Our Client Say")), this.state.display ? __jsx(OwlCarousel, _extends({
      className: "testimonial-slider owl-carousel owl-theme"
    }, options, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), __jsx("div", {
      className: "testimonial-single-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("div", {
      className: "testimonial-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/clients/client1.jpg */ "./images/clients/client1.jpg"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })), __jsx("div", {
      className: "testimonial-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Richard Denial"), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "IT Executive")), __jsx("div", {
      className: "testimonial-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-quote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."))), __jsx("div", {
      className: "testimonial-single-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("div", {
      className: "testimonial-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/clients/client2.jpg */ "./images/clients/client2.jpg"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })), __jsx("div", {
      className: "testimonial-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Sarah Taylor"), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Lead Architecure")), __jsx("div", {
      className: "testimonial-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-quote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    })), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."))), __jsx("div", {
      className: "testimonial-single-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("div", {
      className: "testimonial-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/clients/client3.jpg */ "./images/clients/client3.jpg"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    })), __jsx("div", {
      className: "testimonial-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Alastair Cook"), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Marketing Manager")), __jsx("div", {
      className: "testimonial-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-quote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    })), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.")))) : ''), __jsx("div", {
      className: "testimonial-shape",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/shape/testimonial-shape-1.png */ "./images/shape/testimonial-shape-1.png"),
      alt: "main-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    })), __jsx("div", {
      className: "testimonial-shape-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/shape/testimonial-shape-2.png */ "./images/shape/testimonial-shape-2.png"),
      alt: "main-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    })), __jsx("div", {
      className: "testimonial-shape-img2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/shape/testimonial-shape-3.png */ "./images/shape/testimonial-shape-3.png"),
      alt: "main-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

/***/ }),

/***/ "./components/HomeOne/AboutUs.js":
/*!***************************************!*\
  !*** ./components/HomeOne/AboutUs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\components\\HomeOne\\AboutUs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class AboutUs extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "about-section pb-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "row align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "about-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/pics/about.jpg */ "./images/pics/about.jpg"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }))), __jsx("div", {
      className: "col-lg-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: "about-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "About Us"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Focused On Actionable Insights"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "We are a digital technology company providing end-to-end product development services. We leverage the power of experience design, cutting-edge engineering, and cloud to build disruptive web and mobile apps enabling digital transformation for businesses.We are a digital technology company providing end-to-end product development services. We leverage the power of experience design, cutting-edge engineering, and cloud to build disruptive web and mobile apps enabling digital transformation for businesses."), __jsx("ul", {
      className: "about-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-tick",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), "Professional  Service"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-tick",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), "Shopify Expert"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-tick",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), "Advanced Advisory Team")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about-us",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("a", {
      className: "default-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Read More ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AboutUs);

/***/ }),

/***/ "./components/HomeTwo/MainBanner.js":
/*!******************************************!*\
  !*** ./components/HomeTwo/MainBanner.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\components\\HomeTwo\\MainBanner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class MainBanner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "main-banner-area",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "d-table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "d-table-cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "container-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "row align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-6 col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      className: "main-banner-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, " Perfection and simplicity"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Mojitolabs is a client focused Software development company in India. Whether you need custom web development or an appealing website design, Mojitolabs has the required expertise and experience to do it all."), __jsx("div", {
      className: "banner-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about-us",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("a", {
      className: "default-btn-one",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "About Us", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("a", {
      className: "default-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Contact Us", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })))))), __jsx("div", {
      className: "col-lg-6 col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("div", {
      className: "banner-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      animation: "zoomIn",
      delay: "1s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/home-two/image.png */ "./images/home-two/image.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      animation: "fadeInUp",
      delay: "1s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/home-two/image.png */ "./images/home-two/image.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      animation: "zoomIn",
      delay: "1s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/home-two/image.png */ "./images/home-two/image.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      animation: "rotateIn",
      delay: "1s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/home-two/image.png */ "./images/home-two/image.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      animation: "zoomIn",
      delay: "1s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/home-one/main-image1.png */ "./images/home-one/main-image1.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })))))))), __jsx("div", {
      className: "creative-shape",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/main-banner-shape/main-banner-shape1.png */ "./images/main-banner-shape/main-banner-shape1.png"),
      alt: "main-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })), __jsx("div", {
      className: "shape-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/main-banner-shape/main-banner-shape2.png */ "./images/main-banner-shape/main-banner-shape2.png"),
      alt: "main-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })), __jsx("div", {
      className: "shape-img2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/main-banner-shape/main-banner-shape3.png */ "./images/main-banner-shape/main-banner-shape3.png"),
      alt: "main-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), __jsx("div", {
      className: "lines",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("div", {
      className: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), __jsx("div", {
      className: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }), __jsx("div", {
      className: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainBanner);

/***/ }),

/***/ "./components/HomeTwo/OurServices.js":
/*!*******************************************!*\
  !*** ./components/HomeTwo/OurServices.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\components\\HomeTwo\\OurServices.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class OurServices extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "data-service-section pb-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, " Our  Services")), __jsx("div", {
      className: "row align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-4 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "data-services-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: "single-data-service-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-big-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/shopify",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Shopify", __jsx("i", {
      className: "flaticon-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }))))), __jsx("div", {
      className: "single-data-service-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-science",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/appdev",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Mobile App Development", __jsx("i", {
      className: "flaticon-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }))))), __jsx("div", {
      className: "single-data-service-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-document",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/php",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "PHP", __jsx("i", {
      className: "flaticon-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }))))))), __jsx("div", {
      className: "col-lg-4 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("div", {
      className: "data-service-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/data-service.png */ "./images/data-service.png"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }))), __jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      className: "data-services-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("div", {
      className: "single-data-service-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-data-analytics",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/webdevelopment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Web Development", __jsx("i", {
      className: "flaticon-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }))))), __jsx("div", {
      className: "single-data-service-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/magento",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Magento", __jsx("i", {
      className: "flaticon-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }))))), __jsx("div", {
      className: "single-data-service-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("div", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    })), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/wordpress",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "Wordpress", __jsx("i", {
      className: "flaticon-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (OurServices);

/***/ }),

/***/ "./components/HomeTwo/WorkingProcess.js":
/*!**********************************************!*\
  !*** ./components/HomeTwo/WorkingProcess.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\components\\HomeTwo\\WorkingProcess.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class WorkingProcess extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "work-section pb-70",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("div", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Our Working Process"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "How Does mojitolabs Works")), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-4 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "work-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "work-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/work/work1.jpg */ "./images/work/work1.jpg"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), __jsx("div", {
      className: "work-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Planning"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })))), __jsx("div", {
      className: "col-lg-4 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      className: "work-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("div", {
      className: "work-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/work/work2.jpg */ "./images/work/work2.jpg"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), __jsx("div", {
      className: "work-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Design & Execution"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })))), __jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: "work-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: "work-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/pics/work3.jpg */ "./images/pics/work3.jpg"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })), __jsx("div", {
      className: "work-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Analytics Project"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WorkingProcess);

/***/ }),

/***/ "./components/Layouts/Footer.js":
/*!**************************************!*\
  !*** ./components/Layouts/Footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\components\\Layouts\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let currentYear = new Date().getFullYear();
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("footer", {
      className: "footer-section ptb-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "single-footer-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: "footer-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "About Us")), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "We are a digital technology company providing end-to-end product development services. We leverage the power of experience design, cutting-edge engineering, and cloud to build disruptive web and mobile apps enabling digital transformation for businesses."), __jsx("ul", {
      className: "footer-social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("i", {
      className: "fab fa-facebook-f",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("i", {
      className: "fab fa-twitter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("i", {
      className: "fab fa-pinterest",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("i", {
      className: "fab fa-linkedin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }))))))), __jsx("div", {
      className: "col-lg-2 col-md-6 col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("div", {
      className: "single-footer-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("div", {
      className: "footer-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Important Links")), __jsx("ul", {
      className: "footer-quick-links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about-us",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "About Us"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/projects",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Projects"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "services",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Services"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/team",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Team"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Contact")))))), __jsx("div", {
      className: "col-lg-2 col-md-6 col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("div", {
      className: "single-footer-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("div", {
      className: "footer-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "Featured Service")), __jsx("ul", {
      className: "footer-quick-links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/shopify",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "Shopify"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/webdevelopment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "Web development"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/appdev",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Mobile App Development"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/php",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "PHP"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/wordpress",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "Wordpress")))))), __jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("div", {
      className: "single-footer-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, __jsx("div", {
      className: "footer-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "Contact Info")), __jsx("div", {
      className: "footer-info-contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-call-answer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "Phone"), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "+91 7827537259")), __jsx("div", {
      className: "footer-info-contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-envelope",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "Email"), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, "contact@mojitolals.com")), __jsx("div", {
      className: "footer-info-contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx("i", {
      className: "flaticon-maps-and-flags",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, "Address"), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, " N-3/28A, DLF Phase-2 Near Cyber-City Gurgaon Haryana - 122002 India")))))), __jsx("div", {
      className: "lines",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx("div", {
      className: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }), __jsx("div", {
      className: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }), __jsx("div", {
      className: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    })), __jsx("div", {
      className: "partner-shape-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/pics/footer.jpg */ "./images/pics/footer.jpg"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }))), __jsx("div", {
      className: "copyright-area",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx("div", {
      className: "row align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-6 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, "\xA9 ", currentYear, " Mojitolab All Rights Reserved by", __jsx("a", {
      href: "https://mojitolabs.com/",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "Mojitolab"))), __jsx("div", {
      className: "col-lg-6 col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/terms-condition",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "Terms & Conditions"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/privacy-policy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, "Privacy Policy")))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layouts/Navbar.js":
/*!**************************************!*\
  !*** ./components/Layouts/Navbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ActiveLink */ "./utils/ActiveLink.js");
/* harmony import */ var _technologies_shopify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../technologies/shopify */ "./components/technologies/shopify.js");
var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\components\\Layouts\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false,
      collapsed: true
    });

    _defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      id: "navbar",
      className: "navbar-area",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("div", {
      className: "main-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("nav", {
      className: "navbar navbar-expand-md navbar-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("a", {
      className: "navbar-brand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("h2", {
      className: "logoname",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Mojitolabs"))), __jsx("button", {
      onClick: this.toggleNavbar,
      className: classTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("span", {
      className: "navbar-toggler-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), __jsx("div", {
      className: classOne,
      id: "navbarSupportedContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("ul", {
      className: "navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/index",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Home"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/about-us",
      activeClassName: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "About us"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/services",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Services ", __jsx("i", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    })))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "Technologies ", __jsx("i", {
      className: "fas fa-chevron-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }))), __jsx("ul", {
      className: "dropdown-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/shopify",
      activeClassName: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, "Shopify"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/webdevelopment",
      activeClassName: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "Web development"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/appdev",
      activeClassName: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "Mobile App development"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/php",
      activeClassName: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, "PHP"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/magento",
      activeClassName: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, "Magento"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/wordpress",
      activeClassName: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, "Wordpress"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/webdesigin",
      activeClassName: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, "Web desigin"))))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/contact",
      activeClassName: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, "Contact Us")))), __jsx("div", {
      className: "others-options",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/pricing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, __jsx("a", {
      className: "default-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, "contact", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/technologies/shopify.js":
/*!********************************************!*\
  !*** ./components/technologies/shopify.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\components\\technologies\\shopify.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class shopify extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "services-details-area ptb-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "services-details-overview",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "row align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-6 col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "services-details-desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Shopify services"), __jsx("div", {
      className: "features-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Beautiful themes that are responsive and customizable"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "No design skills needed. You have complete control over the look and feel of your website, from its layout, to content and colors.")), __jsx("div", {
      className: "features-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Trusted by over 1,000,000 businesses worldwide"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Shopify handles everything from marketing and payments, to secure checkout and shipping")))), __jsx("div", {
      className: "col-lg-6 col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      className: "services-details-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/pics/shopify2.jpg */ "./images/pics/shopify2.jpg"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }))))), __jsx("div", {
      className: "services-details-overview",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("div", {
      className: "row align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-6 col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: "services-details-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/pics/shopify-picture-example3.gif */ "./images/pics/shopify-picture-example3.gif"),
      alt: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }))), __jsx("div", {
      className: "col-lg-6 col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("div", {
      className: "services-details-desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "why choose shopify"), __jsx("div", {
      className: "features-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Pricing as low as $29/month"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Whether you sell online, on social media, in store, or out of the trunk of your car, Shopify has you covered. Start selling anywhere for just $29/month.")), __jsx("div", {
      className: "features-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Business Intelligence"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (shopify);

/***/ }),

/***/ "./images/blog/blog3.png":
/*!*******************************!*\
  !*** ./images/blog/blog3.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBkAH+AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooACcDJ6VB9stf8An5h/7+ClvH2WU7eiH+VYVlpBvLYTedsySMbM/wBaANz7Za/8/MP/AH8FTg5GR0rE/wCEe/6ev/If/wBetjiKLJPCLyfpQA8kAEnoKit7mK6jLwvuUHBOCOfxrJvdajeBordWywwWYYwKn0H/AI8X/wCup/kKANSmSyxwoXkdUX1Jp9c9KJNX1No1bESZAPYD1/GgDYi1C0mfYk6lj0ByM/nVmsK80RYbdpIJGYqMlW7j2q9pN0bqzG85eM7SfX0NAF+iiigAooooAKKKKACmu6xozucKoySadWNrNyzn7JFyQN8mPQc4/rQBqW9zFdRl4X3KDgnBHP41LWXoP/Hi/wD11P8AIVbv7n7LZvKPvdF+tACz31tbttlmVW9Op/Snw3ENwpaKRXA647ViWOlfbIjcTyMAx4x1PvTJoZNHvY5UYtGf1HcGgDo6jmuIbdd0sioPfvTt6+X5mflxuz7Vz0MEmsXkkrsVjX9B2AoA24b62uG2xTKzenQ/rViufvtK+xxC4gkYhTznqPetewuftdmkp+90b60AWaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAKeqtt0yb3AH6is631aKzsooVQyOBlucAZOa07+1a8tvKVwpLAkmorXSreCICRFlc9WYZ/IUAJZ6vDdSCNlMbnoCcg/jV9lDKVIyCMEViavp8cMYuIF2YOGA6fWtWymNxZxSnqy8/WgCtdadaJaTOsChljYg88HFR6D/wAeL/8AXU/yFXb3/jxuP+uTfyqloP8Ax4v/ANdT/IUAaE7+XbyP/dUn9Ky9AQCCaTuWC/kP/r1pXfNlOP8Apm38qoaCf9CkH/TQ/wAhQBq9axNG/dX11AOg/ocf1rbrE0znWrsjp8//AKEKANuoLy2F3avEep5U+h7VPRQBh6LctFM9nLwckqD2PcUmrTNd3cdlDzg8/wC9/wDWo1mDyLiO7iO1iefqO9SaJb7vMu3O52JA/qaANS3gW2gSJOijH1qWiigCve3S2ls0pxnoo9TWda2rLp11dTcyzRscnsMH+dRXE0d/qgjlkVLeEnO5sZ9a0bq6tjZTqtxCSY2AAcelAEGg/wDHi/8A11P8hUevviCFPVifyH/16NEuIYrN1kmjRjIThmAPQU3xB0tz/vf0oA1oEEcEaDoqgVS1tA2nlu6MD/T+taAOQD61S1g/8SyX/gP8xQBB5x/4R3fn/lnt/XFSaIgXTg3d2J/p/Sq2D/wjH4f+z1c0c50yL23fzNAFqdBLbyRnoykVl6A5MEyejA/n/wDqrXJwCaxvD/S4P+7/AFoA2qKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAKWo3zWKRsIw4YkHJxirUMomhSVejKDUV5areWzRMcHqp9DWGsWqWRMcaybc/wDcKANLW5VSwMZI3OQAPpzU+mIY9NgU9dufzOay4NNu7y4Et4WCDruPJ9gO1b4AAAAwBQBBe/8eNx/1yb+VUtB/wCPF/8Arqf5Cr9yjSWkyKMsyMAPfFVdItpbW0ZJk2sXJAyDxgelAF51DoynoRisXQ5PKnntnOGzkfUcGtusbUtOmNx9qtc7urBTg59RQBrTSrDC8jn5VGTWRoSFmnnb+I4/HqaqtFql8RFKJNuf4xtH/wBet61tltLdYl5x1PqfWgCaiiq1/wCe1qyW6bpG46gYH40AZE7HVtVESH90nGR6dzS6bK1hqD2kxwrHH49j+NX9JsWtIWaVcSueRnOBUerafJclJYFzIOCMgZFAGpRUNqZjbJ567ZQMNyDn34qagDHl0HzJXf7TjcxONnT9ahm0LyYJJftOdilsbOuB9a3qiuUaS0mRRlmRgB74oA5/T9L+2wmXztm19uNuew9/etHXYi9mrj+Bufof8ipdItpbW0ZJk2sXJAyDxgelXJY1miaNxlWGDQBDYTi4sonByduG+oqlr04W2SEH5nbJHsKpG11HT5GEG9kPdBkH8Kms9Oubi6Fxe7sA5w3Vv8BQBofZj/Y/2f8Ai8r9ev8AOq2gzhrZ4SfmRsgexrWrCvNOube6NxZ7sE5wvVf/AK1AGpfzi3spXJwduF+pqpoURSzZz/G3H0H+TVAWuo6hIon3qg7uMAfhXQRRLDEsaDCqMCgB9FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRVd7oI8gMUhWM4ZxjA4B9c9/SgCxRTPNj8zy967/7uefypwZT0YHnHB70ALRTGljVN7SKFzjJPGaGljRQzOqqehJwDQA+imedFlR5iZflfmHzfSo7m4WCGQ70EgQsqseuB6UAT0VHcSGK2lkXBKIWGfYUqzRMGKyIQv3iGHH1oAfRSbl+X5h83TnrTTIBKsfOWUsPwx/jQA+ionm2yMixu7KASFx0OfUj0qP7aBbfaDDKEwpXpls9MYPvQBZoqGW5ji8rOW81gF2+/f6cinpIHaRRnKNtP5A/1oAfRTJJFiTc2TzgADJJpEl3Bi8bx7eTvx/Q0ASUVAl0rMoMciq3Csw4P+H40sdzHIJSMr5TENu9u/04NAE1FRwTLcQiRQwBJGG68HFSUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFVfsrSSz73cRu4OwYww2geme1WqKAKfkybvL8r/lt5nm5HTOfrntTZIJvPd0HyofMjGcZY4yP0P/fVXqKAKUltIqW5QsTGpDBNuSTjn5uPX86ctufLtlKkhJCzBiCRw3px1I6VbooAoz20jTS48wrLj7hQY4xzkZ9+KLqGVluUWDzPNHytkDHGMc/n+NXqKAIrlGktJkUZZkYAe+KjiRzMHaERKsezGQc8j07DH61ZpGUMpVgCCMEHvQBUs0JZmJzHGSkX0z/kfhUk0Hm3MbHcEVGBKuV5JXHQ+xqdVCqFUAAdAB0paAK8MHlXMjDcUZFALOW5BbPU+4pohkFhBFt+dPL3DPTBGf5VaooApmzKDKtuw6bBjGxQ4JH+fQU9Wkimn/0eRw7hgVK/3QO5HpVmigCCVZHIZUGYn3KCfvjGD9Op/KlIe4hljeNogylRkgnke1TUUAVT582yN4dgVgzNuBBwc8d+1NFmXGWbbl33jGd6lyQP8+pq5RQBFboyRkMMHe5/AsSKloooA//Z"

/***/ }),

/***/ "./images/blog/blog4.png":
/*!*******************************!*\
  !*** ./images/blog/blog4.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBkAH+AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooACcDJ6VB9stf8An5h/7+ClvH2WU7eiH+VYVlpBvLYTedsySMbM/wBaANz7Za/8/MP/AH8FTg5GR0rE/wCEe/6ev/If/wBetjiKLJPCLyfpQA8kAEnoKit7mK6jLwvuUHBOCOfxrJvdajeBordWywwWYYwKn0H/AI8X/wCup/kKANSmSyxwoXkdUX1Jp9c9KJNX1No1bESZAPYD1/GgDYi1C0mfYk6lj0ByM/nVmsK80RYbdpIJGYqMlW7j2q9pN0bqzG85eM7SfX0NAF+iiigAooooAKKKKACmu6xozucKoySadWNrNyzn7JFyQN8mPQc4/rQBqW9zFdRl4X3KDgnBHP41LWXoP/Hi/wD11P8AIVbv7n7LZvKPvdF+tACz31tbttlmVW9Op/Snw3ENwpaKRXA647ViWOlfbIjcTyMAx4x1PvTJoZNHvY5UYtGf1HcGgDo6jmuIbdd0sioPfvTt6+X5mflxuz7Vz0MEmsXkkrsVjX9B2AoA24b62uG2xTKzenQ/rViufvtK+xxC4gkYhTznqPetewuftdmkp+90b60AWaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAKeqtt0yb3AH6is631aKzsooVQyOBlucAZOa07+1a8tvKVwpLAkmorXSreCICRFlc9WYZ/IUAJZ6vDdSCNlMbnoCcg/jV9lDKVIyCMEViavp8cMYuIF2YOGA6fWtWymNxZxSnqy8/WgCtdadaJaTOsChljYg88HFR6D/wAeL/8AXU/yFXb3/jxuP+uTfyqloP8Ax4v/ANdT/IUAaE7+XbyP/dUn9Ky9AQCCaTuWC/kP/r1pXfNlOP8Apm38qoaCf9CkH/TQ/wAhQBq9axNG/dX11AOg/ocf1rbrE0znWrsjp8//AKEKANuoLy2F3avEep5U+h7VPRQBh6LctFM9nLwckqD2PcUmrTNd3cdlDzg8/wC9/wDWo1mDyLiO7iO1iefqO9SaJb7vMu3O52JA/qaANS3gW2gSJOijH1qWiigCve3S2ls0pxnoo9TWda2rLp11dTcyzRscnsMH+dRXE0d/qgjlkVLeEnO5sZ9a0bq6tjZTqtxCSY2AAcelAEGg/wDHi/8A11P8hUevviCFPVifyH/16NEuIYrN1kmjRjIThmAPQU3xB0tz/vf0oA1oEEcEaDoqgVS1tA2nlu6MD/T+taAOQD61S1g/8SyX/gP8xQBB5x/4R3fn/lnt/XFSaIgXTg3d2J/p/Sq2D/wjH4f+z1c0c50yL23fzNAFqdBLbyRnoykVl6A5MEyejA/n/wDqrXJwCaxvD/S4P+7/AFoA2qKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAKWo3zWKRsIw4YkHJxirUMomhSVejKDUV5areWzRMcHqp9DWGsWqWRMcaybc/wDcKANLW5VSwMZI3OQAPpzU+mIY9NgU9dufzOay4NNu7y4Et4WCDruPJ9gO1b4AAAAwBQBBe/8eNx/1yb+VUtB/wCPF/8Arqf5Cr9yjSWkyKMsyMAPfFVdItpbW0ZJk2sXJAyDxgelAF51DoynoRisXQ5PKnntnOGzkfUcGtusbUtOmNx9qtc7urBTg59RQBrTSrDC8jn5VGTWRoSFmnnb+I4/HqaqtFql8RFKJNuf4xtH/wBet61tltLdYl5x1PqfWgCaiiq1/wCe1qyW6bpG46gYH40AZE7HVtVESH90nGR6dzS6bK1hqD2kxwrHH49j+NX9JsWtIWaVcSueRnOBUerafJclJYFzIOCMgZFAGpRUNqZjbJ567ZQMNyDn34qagDHl0HzJXf7TjcxONnT9ahm0LyYJJftOdilsbOuB9a3qiuUaS0mRRlmRgB74oA5/T9L+2wmXztm19uNuew9/etHXYi9mrj+Bufof8ipdItpbW0ZJk2sXJAyDxgelXJY1miaNxlWGDQBDYTi4sonByduG+oqlr04W2SEH5nbJHsKpG11HT5GEG9kPdBkH8Kms9Oubi6Fxe7sA5w3Vv8BQBofZj/Y/2f8Ai8r9ev8AOq2gzhrZ4SfmRsgexrWrCvNOube6NxZ7sE5wvVf/AK1AGpfzi3spXJwduF+pqpoURSzZz/G3H0H+TVAWuo6hIon3qg7uMAfhXQRRLDEsaDCqMCgB9FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRVd7oI8gMUhWM4ZxjA4B9c9/SgCxRTPNj8zy967/7uefypwZT0YHnHB70ALRTGljVN7SKFzjJPGaGljRQzOqqehJwDQA+imedFlR5iZflfmHzfSo7m4WCGQ70EgQsqseuB6UAT0VHcSGK2lkXBKIWGfYUqzRMGKyIQv3iGHH1oAfRSbl+X5h83TnrTTIBKsfOWUsPwx/jQA+ionm2yMixu7KASFx0OfUj0qP7aBbfaDDKEwpXpls9MYPvQBZoqGW5ji8rOW81gF2+/f6cinpIHaRRnKNtP5A/1oAfRTJJFiTc2TzgADJJpEl3Bi8bx7eTvx/Q0ASUVAl0rMoMciq3Csw4P+H40sdzHIJSMr5TENu9u/04NAE1FRwTLcQiRQwBJGG68HFSUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFVfsrSSz73cRu4OwYww2geme1WqKAKfkybvL8r/lt5nm5HTOfrntTZIJvPd0HyofMjGcZY4yP0P/fVXqKAKUltIqW5QsTGpDBNuSTjn5uPX86ctufLtlKkhJCzBiCRw3px1I6VbooAoz20jTS48wrLj7hQY4xzkZ9+KLqGVluUWDzPNHytkDHGMc/n+NXqKAIrlGktJkUZZkYAe+KjiRzMHaERKsezGQc8j07DH61ZpGUMpVgCCMEHvQBUs0JZmJzHGSkX0z/kfhUk0Hm3MbHcEVGBKuV5JXHQ+xqdVCqFUAAdAB0paAK8MHlXMjDcUZFALOW5BbPU+4pohkFhBFt+dPL3DPTBGf5VaooApmzKDKtuw6bBjGxQ4JH+fQU9Wkimn/0eRw7hgVK/3QO5HpVmigCCVZHIZUGYn3KCfvjGD9Op/KlIe4hljeNogylRkgnke1TUUAVT582yN4dgVgzNuBBwc8d+1NFmXGWbbl33jGd6lyQP8+pq5RQBFboyRkMMHe5/AsSKloooA//Z"

/***/ }),

/***/ "./images/blog/blog5.png":
/*!*******************************!*\
  !*** ./images/blog/blog5.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBkAH+AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooACcDJ6VB9stf8An5h/7+ClvH2WU7eiH+VYVlpBvLYTedsySMbM/wBaANz7Za/8/MP/AH8FTg5GR0rE/wCEe/6ev/If/wBetjiKLJPCLyfpQA8kAEnoKit7mK6jLwvuUHBOCOfxrJvdajeBordWywwWYYwKn0H/AI8X/wCup/kKANSmSyxwoXkdUX1Jp9c9KJNX1No1bESZAPYD1/GgDYi1C0mfYk6lj0ByM/nVmsK80RYbdpIJGYqMlW7j2q9pN0bqzG85eM7SfX0NAF+iiigAooooAKKKKACmu6xozucKoySadWNrNyzn7JFyQN8mPQc4/rQBqW9zFdRl4X3KDgnBHP41LWXoP/Hi/wD11P8AIVbv7n7LZvKPvdF+tACz31tbttlmVW9Op/Snw3ENwpaKRXA647ViWOlfbIjcTyMAx4x1PvTJoZNHvY5UYtGf1HcGgDo6jmuIbdd0sioPfvTt6+X5mflxuz7Vz0MEmsXkkrsVjX9B2AoA24b62uG2xTKzenQ/rViufvtK+xxC4gkYhTznqPetewuftdmkp+90b60AWaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAKeqtt0yb3AH6is631aKzsooVQyOBlucAZOa07+1a8tvKVwpLAkmorXSreCICRFlc9WYZ/IUAJZ6vDdSCNlMbnoCcg/jV9lDKVIyCMEViavp8cMYuIF2YOGA6fWtWymNxZxSnqy8/WgCtdadaJaTOsChljYg88HFR6D/wAeL/8AXU/yFXb3/jxuP+uTfyqloP8Ax4v/ANdT/IUAaE7+XbyP/dUn9Ky9AQCCaTuWC/kP/r1pXfNlOP8Apm38qoaCf9CkH/TQ/wAhQBq9axNG/dX11AOg/ocf1rbrE0znWrsjp8//AKEKANuoLy2F3avEep5U+h7VPRQBh6LctFM9nLwckqD2PcUmrTNd3cdlDzg8/wC9/wDWo1mDyLiO7iO1iefqO9SaJb7vMu3O52JA/qaANS3gW2gSJOijH1qWiigCve3S2ls0pxnoo9TWda2rLp11dTcyzRscnsMH+dRXE0d/qgjlkVLeEnO5sZ9a0bq6tjZTqtxCSY2AAcelAEGg/wDHi/8A11P8hUevviCFPVifyH/16NEuIYrN1kmjRjIThmAPQU3xB0tz/vf0oA1oEEcEaDoqgVS1tA2nlu6MD/T+taAOQD61S1g/8SyX/gP8xQBB5x/4R3fn/lnt/XFSaIgXTg3d2J/p/Sq2D/wjH4f+z1c0c50yL23fzNAFqdBLbyRnoykVl6A5MEyejA/n/wDqrXJwCaxvD/S4P+7/AFoA2qKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAKWo3zWKRsIw4YkHJxirUMomhSVejKDUV5areWzRMcHqp9DWGsWqWRMcaybc/wDcKANLW5VSwMZI3OQAPpzU+mIY9NgU9dufzOay4NNu7y4Et4WCDruPJ9gO1b4AAAAwBQBBe/8eNx/1yb+VUtB/wCPF/8Arqf5Cr9yjSWkyKMsyMAPfFVdItpbW0ZJk2sXJAyDxgelAF51DoynoRisXQ5PKnntnOGzkfUcGtusbUtOmNx9qtc7urBTg59RQBrTSrDC8jn5VGTWRoSFmnnb+I4/HqaqtFql8RFKJNuf4xtH/wBet61tltLdYl5x1PqfWgCaiiq1/wCe1qyW6bpG46gYH40AZE7HVtVESH90nGR6dzS6bK1hqD2kxwrHH49j+NX9JsWtIWaVcSueRnOBUerafJclJYFzIOCMgZFAGpRUNqZjbJ567ZQMNyDn34qagDHl0HzJXf7TjcxONnT9ahm0LyYJJftOdilsbOuB9a3qiuUaS0mRRlmRgB74oA5/T9L+2wmXztm19uNuew9/etHXYi9mrj+Bufof8ipdItpbW0ZJk2sXJAyDxgelXJY1miaNxlWGDQBDYTi4sonByduG+oqlr04W2SEH5nbJHsKpG11HT5GEG9kPdBkH8Kms9Oubi6Fxe7sA5w3Vv8BQBofZj/Y/2f8Ai8r9ev8AOq2gzhrZ4SfmRsgexrWrCvNOube6NxZ7sE5wvVf/AK1AGpfzi3spXJwduF+pqpoURSzZz/G3H0H+TVAWuo6hIon3qg7uMAfhXQRRLDEsaDCqMCgB9FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRVd7oI8gMUhWM4ZxjA4B9c9/SgCxRTPNj8zy967/7uefypwZT0YHnHB70ALRTGljVN7SKFzjJPGaGljRQzOqqehJwDQA+imedFlR5iZflfmHzfSo7m4WCGQ70EgQsqseuB6UAT0VHcSGK2lkXBKIWGfYUqzRMGKyIQv3iGHH1oAfRSbl+X5h83TnrTTIBKsfOWUsPwx/jQA+ionm2yMixu7KASFx0OfUj0qP7aBbfaDDKEwpXpls9MYPvQBZoqGW5ji8rOW81gF2+/f6cinpIHaRRnKNtP5A/1oAfRTJJFiTc2TzgADJJpEl3Bi8bx7eTvx/Q0ASUVAl0rMoMciq3Csw4P+H40sdzHIJSMr5TENu9u/04NAE1FRwTLcQiRQwBJGG68HFSUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFVfsrSSz73cRu4OwYww2geme1WqKAKfkybvL8r/lt5nm5HTOfrntTZIJvPd0HyofMjGcZY4yP0P/fVXqKAKUltIqW5QsTGpDBNuSTjn5uPX86ctufLtlKkhJCzBiCRw3px1I6VbooAoz20jTS48wrLj7hQY4xzkZ9+KLqGVluUWDzPNHytkDHGMc/n+NXqKAIrlGktJkUZZkYAe+KjiRzMHaERKsezGQc8j07DH61ZpGUMpVgCCMEHvQBUs0JZmJzHGSkX0z/kfhUk0Hm3MbHcEVGBKuV5JXHQ+xqdVCqFUAAdAB0paAK8MHlXMjDcUZFALOW5BbPU+4pohkFhBFt+dPL3DPTBGf5VaooApmzKDKtuw6bBjGxQ4JH+fQU9Wkimn/0eRw7hgVK/3QO5HpVmigCCVZHIZUGYn3KCfvjGD9Op/KlIe4hljeNogylRkgnke1TUUAVT582yN4dgVgzNuBBwc8d+1NFmXGWbbl33jGd6lyQP8+pq5RQBFboyRkMMHe5/AsSKloooA//Z"

/***/ }),

/***/ "./images/clients/client1.jpg":
/*!************************************!*\
  !*** ./images/clients/client1.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAlgCWAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApGYKpZiAAMkntS1V1GMSWM2S3yoSMHGeO/rQBNJPDEQJJUQnpuYClaWNApaRVDdMnGaq3EbtcvIhgOyMZVxk9Sfw+tN/d3EjvIg2m2UqCOgOc/0oAv0VTcsdLWQyFHEavuz3AzzT7F2lgMrsSzsSVz93tigCxuG4LkZIyBTPtEPmeX50e/ONu4Z/KofLCamrgsS0TZyc916elQqHhfzf3EiPMQNoywycDmgC8siM5RXUsvUA8inVnW6qq2DKAHYHcQOT8uTn8cVo0AFFFFABRRRQAUUUUAFFFFABRRRQAU10WSNkcZVhgj2p1FAEMtrDOwaRMkDHUjI9D60sttDNt8yMHaMDtx6fSpaKAGPEkihXXKgggfTpQkaRs5UYLnc3PU0+igBpRTIJMfMAVB9jj/AAFRi1gE3miP585zk4z646ZqaigCKO2hikMiIAx7/wCelS0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/9k="

/***/ }),

/***/ "./images/clients/client2.jpg":
/*!************************************!*\
  !*** ./images/clients/client2.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAlgCWAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApGYKpZiAAMkntS1V1GMSWM2S3yoSMHGeO/rQBNJPDEQJJUQnpuYClaWNApaRVDdMnGaq3EbtcvIhgOyMZVxk9Sfw+tN/d3EjvIg2m2UqCOgOc/0oAv0VTcsdLWQyFHEavuz3AzzT7F2lgMrsSzsSVz93tigCxuG4LkZIyBTPtEPmeX50e/ONu4Z/KofLCamrgsS0TZyc916elQqHhfzf3EiPMQNoywycDmgC8siM5RXUsvUA8inVnW6qq2DKAHYHcQOT8uTn8cVo0AFFFFABRRRQAUUUUAFFFFABRRRQAU10WSNkcZVhgj2p1FAEMtrDOwaRMkDHUjI9D60sttDNt8yMHaMDtx6fSpaKAGPEkihXXKgggfTpQkaRs5UYLnc3PU0+igBpRTIJMfMAVB9jj/AAFRi1gE3miP585zk4z646ZqaigCKO2hikMiIAx7/wCelS0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/9k="

/***/ }),

/***/ "./images/clients/client3.jpg":
/*!************************************!*\
  !*** ./images/clients/client3.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAlgCWAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApGYKpZiAAMkntS1V1GMSWM2S3yoSMHGeO/rQBNJPDEQJJUQnpuYClaWNApaRVDdMnGaq3EbtcvIhgOyMZVxk9Sfw+tN/d3EjvIg2m2UqCOgOc/0oAv0VTcsdLWQyFHEavuz3AzzT7F2lgMrsSzsSVz93tigCxuG4LkZIyBTPtEPmeX50e/ONu4Z/KofLCamrgsS0TZyc916elQqHhfzf3EiPMQNoywycDmgC8siM5RXUsvUA8inVnW6qq2DKAHYHcQOT8uTn8cVo0AFFFFABRRRQAUUUUAFFFFABRRRQAU10WSNkcZVhgj2p1FAEMtrDOwaRMkDHUjI9D60sttDNt8yMHaMDtx6fSpaKAGPEkihXXKgggfTpQkaRs5UYLnc3PU0+igBpRTIJMfMAVB9jj/AAFRi1gE3miP585zk4z646ZqaigCKO2hikMiIAx7/wCelS0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/9k="

/***/ }),

/***/ "./images/data-service.png":
/*!*********************************!*\
  !*** ./images/data-service.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/data-service-86c45eb076a2279cd248162afaa8a503.png";

/***/ }),

/***/ "./images/home-one/main-image1.png":
/*!*****************************************!*\
  !*** ./images/home-one/main-image1.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/main-image1-13d79b0ad400a9e7cc317d4625fcde95.png";

/***/ }),

/***/ "./images/home-two/image.png":
/*!***********************************!*\
  !*** ./images/home-two/image.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/image-1f4226217f425e61c68bacfef9a856aa.png";

/***/ }),

/***/ "./images/main-banner-shape/main-banner-shape1.png":
/*!*********************************************************!*\
  !*** ./images/main-banner-shape/main-banner-shape1.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/main-banner-shape1-ad05ea2d27195e83b3bc12ef8b8cd7d1.png";

/***/ }),

/***/ "./images/main-banner-shape/main-banner-shape2.png":
/*!*********************************************************!*\
  !*** ./images/main-banner-shape/main-banner-shape2.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/main-banner-shape2-7b211f20e80274054e4b55049f4c08c6.png";

/***/ }),

/***/ "./images/main-banner-shape/main-banner-shape3.png":
/*!*********************************************************!*\
  !*** ./images/main-banner-shape/main-banner-shape3.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABsCAYAAAD5XOVGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM1MkU3NjIzNTBDMTFFQUIzMjZFNUI2Q0JGMDkyNTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM1MkU3NjEzNTBDMTFFQUIzMjZFNUI2Q0JGMDkyNTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGE3ODQzZTctMTcyZS0xMTRhLThlMjgtMzY3YTE0NTRhYTUyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqTt8UAAABZ5SURBVHja7F1rrG1XVR5jcVpoEBCuaEyg0oL/mpRCBTVBpC0oImCCUkJpIbShtNLaGlqMUZFHCNiGllohVGmgtGAVEh5pVOwLTDQ8LDTBPzwKaU2MwRtBEyitncOx1pqP7xtz7dtz7tnnnHvarnvX2WvvvfZ6jD3meHzjG3PrY6+/T/Zw+UMxEzV5l06PviYZn8O2/8nbQ7Jpmx59Hcq+Kc2fTTavNj/ifpKfD77/fNw0PS/7Sj5PPUf+jD5QzjO+7vv4dc3nmM+3sYdCPODrn6roUX5lP+fbb5TpEvfnMrg8ZW9WOcfFdlSW3Rv8tVv88Rn7WJAme7A+xh/On67A6lB+gf+9w185Y58Kck+Wl/l6rIplhcwCNnucb1zv65/tP0HugUK6AC9Rmw27FrNoZdtcnnaJb/yjr8c9opGrFrVf978na3lePLT5K77qtE4e9TTfuN23TtkfgtxlH+P/L7ESepSXrQm1vJ63j/W/oxP6o0ecDa/PdK07ZcjqWIfy9JgmzQSJTvHbKFjffIe/8BlX1p95JPyRaeheqGYtWqzy1flR52FePTnYTn/9pf74z/7KqQ93G3mca9cZLECZbaKA0KpDao/a9j/e13/wrQsetl7bhXGBC+Xooo1aw55Uhu+kjeO/GhZNmmpNK9P03qP8hav8nQ/7HsccMYLcpUH9k37zr5+1cZbsLKw5Vx09XrWPVRvHfVLx4FWRm9baa337X3zruQ+noX2W3/QTWgTUhvUssyJE8NhluJfPpBImWdN0sRN9ny/4O2fvuSBNdvzf0S6o32vxolUN06JnZjC8235WwqGsipM1NWFsw9xcJPkr3/tDMpqOPVo2ilbs3GKv9j/Hz563aZpKG7JqYDPL9RSBYpwJcWfT6vqljKbj6TMAIt94aGnkdLd6UfW64J1RiOXN2YMHJK28nxoWWDS4fTEFu7Tn+xtf9PUVDy0bafKrLoETKXBM4M1Rzxi8qMNbyQzI7OXpy7DwZYyOTT7h62UPJa/9Fgx3ZgWdPXYJZ4pm1aFOwbi2zxZnZNnDF3VM4OnzPsN8njf7frf51s/vd418lt/gi8iWBU1swXZqwTmhRNLCnzKUTTqnxLhmjgImxVUfEfL53ciGdlCQdokWjbemLQrKZGLVoYhQWJP3S1lYUiG3Fltm4SkINLHzmms49rN+3pt9tz/Zj4I81i/8tzi9kTl8kegsFDy0kRbmsH1+TYvgy3C3YCsxkMehXrff5utfy1wr2jeCPN9v4DFKaWJzInP1DgQIghQrKJDlIW/wWYVjCDgkqUiR1tjTMAsqVcLT/Qhf8/VU2weCfLxf6DmEMQbPOusI2DcKdTjWLDaPYsnwXAQzIgjwFy2OPcU1+3O+dfF6vXYINba7TkUtswMI0g4oTNw/3/eQmn0cNRVTSAy+h1y3tjKEUylXwJAGWG6+Hqh1t2O57U7v9fev82dPOBLxyA2/ynMxbCxIjkqfPxd7aRRUIl6ZBa7tOBhVImYpGfjQEqAHWC5EreXbONP/jCHSCWvIbNaKlp3uB3wapoKWehC33LBVj60hnLGqQeicipYNeWhb9dbgfFKzw4NYb4cNM6RJ0Cf51ldsJihsJyCHAHmbq1/ZhSZW7d/42iAM0s74o2b4LGgepo0G9i9JLfiMwrFUx2fWSnBkGEZl0Lg5u4VUdX58tCT9gD9+0J89+jA1cj1i9OU3XDDPofAEh6gYITlWMpJk5PEa0tM8csmlJa9DPn4pojVvrbONrefnnBy9etXUrMHDnCK9wc/1T4cz1Nfmtf1y3oSIjS1pQslWpGlOQ32kA3cxGypghoVjsd0N4LAYPBoTZsRouwXy9gv+/DbffMUWh/Za3MyJbrdejMQJhZundDAh/IX2cMQftYU2ICyrOXQI2uvnwSsL2NMklBlNji2xFxd6v17bT+kMfLx7t8uxF4lhmtdKA+VmDPav4U1qcaXC8JfqoQt9j7FHi/m7sAZ3hTQATgayjfl8SagANx8jjdfzFt+8ecRTdyP8Od4v8Hdqfoy2LcFNJq4IorcWKDWAVrgGao6vAXssGYw2LiV+XiGDatyiRCQE1HrN+XqF79A5zkpw6oxxym/utEa+0R8e25wEotjzDTftseZ4DpHNDHUf3L/d6CBQrqiBvbX6OJiVIb+O569VSTGA56Ijyrn9RFBVH+r2WZuAD92RcuwBP+Fr0chXrRLQMkE0vO1XbV44LtrZQbradtMWOJZGoNfCEBYe4oxhsj1VpM4IgSJv8yc3+uaT1u21z/L1p5UgMiU7OdmfJF2VUIOAK1U50J/xi1EQomSgopkSq2HSUId6ajk9pKVTfFuguaydzVqDtqdoZ6c/r/R9vuyPv7IuQY7B/Js6hFqMvmmODwWGFXnJiohrvCjMTIpQFM+h5Fw0ABukhWCHLTxXCs8kJAgWtHVifNzqzy4tJ9yOIF8zHRCvioYXxHBmgWUmFBBTcFg8fCq2TKmyiODHAGVbrFJy+QIcYIr7NKJ/LQGnwtHkgYVambX2Uf7wHl9HYuyBbZDx7XcJOEjS0Ot60/H53A1QtWhB86qWaMMYUSuqF49DMWgYhWJWolEFpocQGCyg4c1pWjNVmDTkLzif+wz/e8LGYVa1X+QnfM50Ii31kYJec86sFi64oN9mNdXDekt9HoBaLqKBQ0kcMsXaDsebAcJLfflXYTSVckcpFbPHJ+GeuHGYHRkX1o8lgXiNLwiBWMmCK3WWviQb00bpTAFHAxKCcYbgaiqKZiR4YqLEgA2Mo6gIzzo6YrPJG6viokMsz/aTvoTDA6F4rPJ6LNpHy0JcAg/KZ1ITZtb0QVCbpGl+YWZYWgi2rZ5PY76P2l+yqgUUHr9YK8dKIZifj/29w7GR52Ea1hSJ6SW2Kl4z7mRYLBkU5BwqB1iWGG2xGaLisdTLFUmhvJ9RqMI3qPYzhfJuGCX1OskByke3Ksin+cnOmo+tBXrq7Q2yxsrwhzy5lVelcyTNBml2OEwMQNqKJq7X9CFPGK7guc2gBJIAASqpJ8at6P0T15x864eurVdubM1E2nm+HiUavyG2Ry3FCvuBVg1iPW4ZCKZWUW5I/zrcEjxtDK0os7HquLsSrrYQSELRrhC7FI0vZ3Af9z/3bMXZHPBjnN2VRJO28kAo9g/55myJQUZgA4YVnDYqojFE8+N0E20xkbYo40oh3oQiWrg+TZHkBSOiee3Rol2pWwzIXz3m1ohGd150IRjGsMQWvCUVyDh7yKmbdY7EsmEbjAEHKslKfA7aG4fsErisumx32TeMrStfn7325hRy5Gpf2JgRRrlyo5goB81YZ+7IUCF+RIMPpkJT+3KsokOj7ZwD+2FJEEga6AAPqKcnGPEBaLEyorD0K4F3JJ7ZtPBnU8vL/QDPiIiOYnYnC8WlqnFsDrgAlfqbtJA7qyzCXJyRcDglpZMsmwQjREcpalAstHXIUUSN6s5fkhn0zYLcRBjpu1zaa1UOUWKBSXv0RoGrQyxc9MZkE41YvWrS2dTZZqXuZpkDxKlk8+CpCUY5UzKxgJYbkBVIwy/DwbyZoT32Ap5Uacm2CtlhD1qGh9pCUYoA1pDZFLLVeLMpaLswiqDGKRLbyeB9gwYjfkkoUMA4tZ6Waqbf8bc+IyTIB9fG32fSEoAGC11cmgKxnmJLyDiKPSyUkpWe3LphT7UaGBGdWVgRb0rAR2tJhPiWtgDzVR15v2/dtxVBnuQffEkZSrkcNRn4RrqTrqivkGs3+8gxJmlDQrvaNMPATi4VtFRShzVy+gcdEbiPNm2zom1qNbfSwvotiQEPmoMyd1DQsqGHGtumFy9nK1a5LohuS6xFk5bFbxqEK4jOaChEgbZhfSXaMLCH1c4lvgby1hhySYuH1SAtjfWc+SI/4O/8dyfIlXJUeYof6LdFFgx5pdstZy4qgNeJgVYFQiga8EW2GiM92nlp4cpl0bFueEdwhZ/jtVUABNJTgEjv9f2usQUPvXEI6sS5/ucYQqVTT8/rLtgi6Uk7eyMWyrDVOWnGKIWZubEckLjmU51gMo4jc0A/kD20FlnQKDHgCzGPCEK5v/Wn9yxlgxuqi/HPE/3A583FJeUSqgUPR6hKn50IlGQpXkSCVNXsBJlHql/CoEYokIYsBG2ulcojNdG3aR8MzBLadrNWNNNMFi7aamX+H5MrVsGOG7Yg3Smn9tzaRIOhbkPDYjBbvsnAfaScN/IjsQYiHKvFAFlDaVdCrFdjU0DsWyiGwbV2NSala+i4QOV0N/n61VXYxJKNPNomDvisjc3Ig8qXXC2BocchLdwWR07H2uxNJOhEhSUQchZZMm6fEx7utWmeqNEYCwIuuYRjFjBGJOCX9Ut476HCmyWE/GV+guME+18k5MwKsZiC7RTrU6lFgCDwdUpGZBLQdQleP8SV6DBS6ssAtgrkbbwjDeUJwkRbAuKaOJZfDyHIKHl/9mYeKtmIQ9CK08zUdDDN3+oQyPCx+ZK7ZMOFp+Ye0ckMJgsOS1YWupghYQuOMNICW8FNQziWP/+g7XgRRjvNP/TcSPxUQGgtsmDR36gBcrKQHi6ELx3chdQ/4JjXeLWzscKTiiyYGJGel7QUwJssFLdMv+Vbn3owQW7gvfmQvbRuowbmzGbIqLUVyF5adlEZDKIV/a4wmPQlU6xJN5pLBiIg+xlsgUQ/MXP72k/tro3T3nRwGvAsU/7ibbZRhmDwvH2VP/zoQQUJ3/AJfpTTItRlAbavQ0eVSe2h9MqAqnVdBRGaGiL83yHZAWwAAhY7jkCZofKvdWXa7nxM7fN0UD62GZxxA/Kqi9So6zzzE1sJVbAUSvbHpJshIPIhY1cBhUQBwYlxKJUMssYu1FkiqKHIdks9HiodeR9ix1ljr/XNg1vhkD81lxICOMD4n4R6SofgInlUqLufA3ph6vESCUAXUBdZ5FUaRxQhBi2ghChHoETcIluuJfW9X2eURzankU0bjyl1XoKgst2iQBxZuFHjwFHUbKFS8DD31UBbsQXQVzr2BR5z1mwNZVcLw9zI6/cgslQ0KPSLX+e3/t3NC9LkJ/wAZ8Y4ygKsxUhx4gwgkJf0UDQ+sa59g4lUES1S4pZTLTyHuowh2jKdMHjwOLQ7EHpCeTa/jOXY8/2CnlwFpZGM1JdMCUEuc9DiDS8AotSpZX3ooaFGokHoNE9QRWSM0KhCQREsJUBBDcGXIVYaS/w6j7IxHfzXrZB5xvaQM6Nxb4iKURsG55mhYC9hWoVYpo21bczd5zkjOTXDa0rB21tPbo3FqhZ2pS5V1BWxbOMfyVVbZt26wM72T97JHjN36meEbwC+9hDz6oW+GEG7mGdHLjaSIbRCKNVAdebewxYPKgEijS6t1G9I2Qrl9cawnISce/IAaaQ1f26rfPphKivaNOfDDTiDSYOfrJHjA2LCJQYL1UUJnfyI8QVGLRFHtdWTMdVL8NmE4JEFm7piNKDPRvw3dYD11RSDbXId8hEO+vZrdOREJ3uAuu+15deYummkmRDnupkFy2T8cvGxTIAF+CFrsZXZBZD0GenHHUEqhk4hUE/RLLSuWqD13eUXev3h9BvFXPsyf/kUP8VdsaTZ2ZW0YAuX6sYSJzuS0OAJ+hBZtonz5CFkITiBkiy0dGixj+F9Gv6CUYpdrdmAbHVd4v58wS/wZD/Z3xCBXcNsARrIltIb91Iko6YlsJeYsdCMA8BU09RQIS0zUpFmSiXjD/F4hW5YoxGlPsWB5hiy7/nWdYfd4rHi9bFKdrof/K00lIQn8UCwYoCWucX0i2xWRpBSotp2JfDTNLEQAxY7ie3FAnFqWqqNL0Fq2jIGqdf/YX96sPN3m1yH1bWv6fLfLmMPnn9bda4JgOxjJkKeXxpuSfaUUGrt2y5SkwNHEaCNUbgUxoT0UphAUCIS7JbwJz/0Px/cTsf6Zmh9N/kN/+I4CVH0hphK2kI7XCu/Qk9hDUeEX0N+5QSTxeqerJhbMtTHiVURSVL5HUovJwUZq4Pf3k434Wb5ke7N5IVjg05DVNiADxAfkhdNTBGRyo4I/J/UE+FVQ5oqoZ24m/9HO8SJOytCd1g+uSvBFXK4Yxo7Nraw/MFEGjD5rxbXce7aTV+ThT6kQCItTT+hrNr6a6wF8jHzMuRjChfgJOwXCAOU38/o+9/7O3eqbO/fllvo/NyfnKcztC9zDTt1QfAy3Q5jvL5jFeE3i2BD12CJBbFchbO+XKs99kYB+DqmIt16L+J8df/mG8/z67qGhlGSrj6jmPumZi+tY2Qk6kyl2fdqv421maFLH6EVmrKRo9MV3WDKrcqe1dlN65hFYTtNnT/29dy58d1+XBvWa57OTT8YGCMRFEsKZkyhrnUhNcIx64wqohSSWdeRAGQomhykVtiukjUta5hlxTxs0JP92u6gIUrTJKQ2vHJaNlRERkOPDfCDtOXZrdiGziwBT0c6XiN672YTS8yq3/U3b1zXJFzrmq7m635Dp/jVfVQCU6H8KkidNUA5Xq+ZULSZ6KlVGLitRTWFWVukzlBVunIj/QTN5DBOlmT6f1Kvb3vrOmfr+4FOMwrYyPBN0k8+l+0dFP3Jhhq0e4D2QNHeLNjcMG+kUfXR+qkVGovjoO/9/nVOZrb2aQ/9sFfI1IYs/878HQtkqNChEGFj45lZ1MIE712fdphcLvbFcBwwMm7/Z533vQPzR07O4BZfn+kacWOJEwecmLjS9nhSjxYjptpPY1QvSqH8GuNKhOaU2LnNa6d7/fEv1jWkd2Jox2WsB7/K17dy7Ja4+C8AHK/sxekpghJ7Y2rtPRBbcSL5+bVP+Z+71/2rHjv/Ww1mbx8ZHL7+h8QWuRQKYaIhg2lzB2lMDwUZwcgEblSa2Fo8DgN3XJdNqeea19360YuxZ+/5Lo/bLc5EhdPGFkCYhm3PriXoTqyjoNCPDbHxHaeEvWMnbnA3fxjom76+wIVxucYfuoAKHk2EhLBYsmpKh9q0EUu/1jUeMdQn79kmNrF1PHKnlvHH0/ymRuDj+6FesjiXBJEKKg0lTHHTkbOsR95tqpTevlP3tQc/5zf9/eTIw/THz9N0MNoYHDwzlbXfvJEGmUmSvuNL+uapvFy5kz+nsFe/1Dku35jiTbFrGS3iXwWBiRlgxr5Il+k12YSaQr+zWXre/tFIXu7zOz7bb/QcF+B9GPPNRS1dpLaUZgWFSd81ziJQJTttvU9C7+BDTZBFhT7k9/w8v+U7JWQvClOCGbFzeT61LjcqYIfYD/zZR3b6Do4QQU7L2Ej+S66VH4mBuXXAcOgplJ4BDFONXev7f3/dE9fH9UgS5Lj8yKXwOhfEBS6fB4jvDbPmW4gtNeTaQAO839c/340LP9IEWXCzq10Wv+YCuYs6vsK0XIhxzhVEJdq1D/sbZG5S3/GffjwyBTkL6RYXyi/7VX52SAqzCZSenASThqxEmN63Wz/nesQKMovsP2X6UXP7Y/7pvw6kXWgy1Vt936/JTqUy2yzH7tXyznH2ZdfEu3FYUwteN2eQXL6bF7hfBDkut05lYJOb+7k0rE0UMb/+Fd/+u938oeb9JMhxGTOUFw5jbyBOaoRFrzn2vHyXf3993wmyLJfqOMevyP/2UyfK3f7Sp3f7gvarIMflBtfCk1yIt/HkSFNbx727+0P2+1uQ46D6tow/hGZyTR7f9/s4+0vZ7XHt6/8LMADKdF5XzCTEmQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner/partner1.jpg":
/*!*************************************!*\
  !*** ./images/partner/partner1.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/partner1-07068ad5cdb41da3d6a72dbf23db7645.jpg";

/***/ }),

/***/ "./images/partner/partner2.png":
/*!*************************************!*\
  !*** ./images/partner/partner2.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/partner2-04c71912766dc485d65b6f7c3513c90f.png";

/***/ }),

/***/ "./images/partner/partner3.jpg":
/*!*************************************!*\
  !*** ./images/partner/partner3.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/partner3-b86d33b0c33fd7263e9b714495dc88d6.jpg";

/***/ }),

/***/ "./images/partner/partner4.jpg":
/*!*************************************!*\
  !*** ./images/partner/partner4.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/partner4-b46ce00eee961fb7eedcf8408aef9e31.jpg";

/***/ }),

/***/ "./images/partner/partner5.jpg":
/*!*************************************!*\
  !*** ./images/partner/partner5.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/partner5-cce205b020441113db5031ffc76d3fb0.jpg";

/***/ }),

/***/ "./images/pics/Mobile-App.png":
/*!************************************!*\
  !*** ./images/pics/Mobile-App.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Mobile-App-8ca3c8db19b3c47c9bde2d525123ff96.png";

/***/ }),

/***/ "./images/pics/about.jpg":
/*!*******************************!*\
  !*** ./images/pics/about.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/about-b0fcb30fda70c5d2a184edb11f6a05bf.jpg";

/***/ }),

/***/ "./images/pics/footer.jpg":
/*!********************************!*\
  !*** ./images/pics/footer.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footer-a5dea82b3244e3d0125df25f38c03f68.jpg";

/***/ }),

/***/ "./images/pics/shopify-picture-example3.gif":
/*!**************************************************!*\
  !*** ./images/pics/shopify-picture-example3.gif ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shopify-picture-example3-d89dc6ef817e96463434c4619230266d.gif";

/***/ }),

/***/ "./images/pics/shopify.png":
/*!*********************************!*\
  !*** ./images/pics/shopify.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shopify-8bd7c45d96d9b52e352ada53a36c790d.png";

/***/ }),

/***/ "./images/pics/shopify2.jpg":
/*!**********************************!*\
  !*** ./images/pics/shopify2.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shopify2-171562dd04b214b00de7950cd7c7901b.jpg";

/***/ }),

/***/ "./images/pics/wd.jpg":
/*!****************************!*\
  !*** ./images/pics/wd.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/wd-5ede5a662296516fd424fc7d5238162d.jpg";

/***/ }),

/***/ "./images/pics/wordpress.png":
/*!***********************************!*\
  !*** ./images/pics/wordpress.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/wordpress-ca4526b15ddff3a60b58fbe3891139a2.png";

/***/ }),

/***/ "./images/pics/work3.jpg":
/*!*******************************!*\
  !*** ./images/pics/work3.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/work3-ff6cbb8cf8ab2cdb4f1ddb96ce582985.jpg";

/***/ }),

/***/ "./images/shape/partnar-shape-1.png":
/*!******************************************!*\
  !*** ./images/shape/partnar-shape-1.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/partnar-shape-1-9d40be90c4be04bd191e912efc0ac00a.png";

/***/ }),

/***/ "./images/shape/partnar-shape-2.png":
/*!******************************************!*\
  !*** ./images/shape/partnar-shape-2.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/partnar-shape-2-ddb3dee7f954b18fa26e70b38da7844a.png";

/***/ }),

/***/ "./images/shape/testimonial-shape-1.png":
/*!**********************************************!*\
  !*** ./images/shape/testimonial-shape-1.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/testimonial-shape-1-387d5fdb4c5b3807e4d44233882b8097.png";

/***/ }),

/***/ "./images/shape/testimonial-shape-2.png":
/*!**********************************************!*\
  !*** ./images/shape/testimonial-shape-2.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/testimonial-shape-2-5b8d12321a20ea350a534a3c337025bf.png";

/***/ }),

/***/ "./images/shape/testimonial-shape-3.png":
/*!**********************************************!*\
  !*** ./images/shape/testimonial-shape-3.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjRGQzZBNUMzODQ5MTFFQTlFRkNDM0JENjJDRDg5MkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjRGQzZBNUIzODQ5MTFFQTlFRkNDM0JENjJDRDg5MkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REFCNjBGOEIzNTM3MTFFQTk3NUNGMjhFRUUyOTM5QUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REFCNjBGOEMzNTM3MTFFQTk3NUNGMjhFRUUyOTM5QUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4dhElcAAAA2ElEQVR42pySMQrCQBBF589GY0gsLQWx8hiCWFh4B++j4BEEL6GdV7CzFUuxEZOYkJhxoxgkWiT7qmGZN7vLHywWc/ogLa+LODiSCFMJAQeQzPs+K5rEahwQ+ad/Yo4W3bztRxbbWSFNBlSNYgCL444R32dUAwHi981RuKGaQKSpXztlXSgyIU2WTKZkj565rHVzWVl7zsM3kq3mkMlt9wmQWlGxuiAKQoZ/PYvjjarnBEH26BQbhvC20wMmFZZDvte3KHD3t6/8lTqXv5FL0rDXKO39U4ABAHYQUTXsCb/jAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./images/work/work1.jpg":
/*!*******************************!*\
  !*** ./images/work/work1.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/work1-e581b183b2f74f2da6425f1989d27f1f.jpg";

/***/ }),

/***/ "./images/work/work2.jpg":
/*!*******************************!*\
  !*** ./images/work/work2.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/work2-be6a8e4c823aef17c002ed4dd788eaea.jpg";

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layouts/Navbar */ "./components/Layouts/Navbar.js");
/* harmony import */ var _components_HomeTwo_MainBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HomeTwo/MainBanner */ "./components/HomeTwo/MainBanner.js");
/* harmony import */ var _components_HomeOne_AboutUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HomeOne/AboutUs */ "./components/HomeOne/AboutUs.js");
/* harmony import */ var _components_HomeTwo_OurServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomeTwo/OurServices */ "./components/HomeTwo/OurServices.js");
/* harmony import */ var _components_Common_FunFacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/FunFacts */ "./components/Common/FunFacts.js");
/* harmony import */ var _components_Common_SolutionsTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Common/SolutionsTab */ "./components/Common/SolutionsTab.js");
/* harmony import */ var _components_HomeTwo_WorkingProcess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HomeTwo/WorkingProcess */ "./components/HomeTwo/WorkingProcess.js");
/* harmony import */ var _components_Common_Testimonial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Common/Testimonial */ "./components/Common/Testimonial.js");
/* harmony import */ var _components_Common_BlogPost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Common/BlogPost */ "./components/Common/BlogPost.js");
/* harmony import */ var _components_Common_Customers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Common/Customers */ "./components/Common/Customers.js");
/* harmony import */ var _components_Common_Subscribe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Common/Subscribe */ "./components/Common/Subscribe.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layouts/Footer */ "./components/Layouts/Footer.js");
var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














class Index2 extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx(_components_HomeTwo_MainBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx(_components_HomeOne_AboutUs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx(_components_HomeTwo_OurServices__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx(_components_Common_FunFacts__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx(_components_Common_SolutionsTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx(_components_HomeTwo_WorkingProcess__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), __jsx(_components_Common_Customers__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx(_components_Common_Subscribe__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index2);

/***/ }),

/***/ "./utils/ActiveLink.js":
/*!*****************************!*\
  !*** ./utils/ActiveLink.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\utils\\ActiveLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\mojito website\final theme\raxr-react-next-data-science-analytics-template\raxr-react\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-owl-carousel3":
/*!**************************************!*\
  !*** external "react-owl-carousel3" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "react-wow":
/*!****************************!*\
  !*** external "react-wow" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map