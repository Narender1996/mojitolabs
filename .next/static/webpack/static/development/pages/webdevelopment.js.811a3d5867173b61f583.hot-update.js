webpackHotUpdate("static\\development\\pages\\webdevelopment.js",{

/***/ "./components/information/webdev.js":
/*!******************************************!*\
  !*** ./components/information/webdev.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\components\\information\\webdev.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var webdev =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(webdev, _Component);

  function webdev() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, webdev);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(webdev)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openTabSection", function (evt, tabNmae) {
      var i, tabcontent, tablinks;
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

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(webdev, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "tab-section ptb-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("div", {
        className: "tab solutions-list-tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("ul", {
        className: "tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("li", {
        className: "current",
        onClick: function onClick(e) {
          return _this2.openTabSection(e, 'tab1');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "WEB Development")), __jsx("li", {
        onClick: function onClick(e) {
          return _this2.openTabSection(e, 'tab2');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "WEB Development")), __jsx("li", {
        onClick: function onClick(e) {
          return _this2.openTabSection(e, 'tab3');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "WEB Development")), __jsx("li", {
        onClick: function onClick(e) {
          return _this2.openTabSection(e, 'tab4');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "WEB Development"))), __jsx("div", {
        className: "tab_content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("div", {
        id: "tab1",
        className: "tabs_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("div", {
        className: "col-lg-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("div", {
        className: "tab-solution-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Shopify"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Shopify is a subscription to a software service that offers you to create a website and use their shopping cart solution to sell, ship, and manage your products. Using their service, you can get access to easy to use admin panel where you can add products, process orders and enter store data"), __jsx("ul", {
        className: "tab-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), "Innovation idea the latest business technology"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), "Safe secure services for your online email account"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), "Digital content marketing online")), __jsx("div", {
        className: "tab-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("a", {
        className: "default-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Read More ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })))))), __jsx("div", {
        className: "col-lg-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("div", {
        className: "tab-image-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/pics/Frontend-Backend.jpg */ "./images/pics/Frontend-Backend.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }))))), __jsx("div", {
        id: "tab2",
        className: "tabs_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("div", {
        className: "col-lg-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("div", {
        className: "tab-image-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/pics/frontend-web-development.jpg */ "./images/pics/frontend-web-development.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }))), __jsx("div", {
        className: "col-lg-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("div", {
        className: "tab-solution-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Web Development"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "We understand successful software solutions need bright ideas effectively implemented. Its not just about handling complex business logic\u2019s, we go extra mile to simplify the whole process so that anybody can easily use it. Here are some of the web developement services we provide to our customers:"), __jsx("ul", {
        className: "tab-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), "Product Engineering"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), "E-Commerce Store"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), "Enterprise Application Development")), __jsx("div", {
        className: "tab-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("a", {
        className: "default-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Read More ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      })))))))), __jsx("div", {
        id: "tab3",
        className: "tabs_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("div", {
        className: "col-lg-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("div", {
        className: "tab-solution-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Mobile App Development"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "From developing native apps for Android and iOS platform to utilising modern technologies like React Native, we have extensive experience in developing mobile applications for both the platforms."), __jsx("ul", {
        className: "tab-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), "Innovation idea the latest business technology"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), "Safe secure services for your online email account"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), "Digital content marketing online")), __jsx("div", {
        className: "tab-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, __jsx("a", {
        className: "default-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Read More ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      })))))), __jsx("div", {
        className: "col-lg-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, __jsx("div", {
        className: "tab-image-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/pics/best-backend-framework-2019.jpg */ "./images/pics/best-backend-framework-2019.jpg"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }))))), __jsx("div", {
        id: "tab4",
        className: "tabs_item",
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
        className: "col-lg-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, __jsx("div", {
        className: "tab-image-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/pics/gif-4mb.gif */ "./images/pics/gif-4mb.gif"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }))), __jsx("div", {
        className: "col-lg-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, __jsx("div", {
        className: "tab-solution-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "Wordpress"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "Mojitolabs has used WordPress extensively for creating all kinds of websites ranging from small blogging websites to large websites with hundreds of web pages. Our experienced WordPress website developers have created many add-ons by utilizing the extensible nature of WordPress. Our WordPress developers not only create a website but also optimize it for the search engines. We enjoy innovating new tools for developing best possible websites for our clients."), __jsx("ul", {
        className: "tab-list",
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
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), "WordPress powers more than 23.4% of websites today"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), "Nearly every web user has either heard, seen or used WordPress"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }), "Wordpress website development is the most sought after service today")), __jsx("div", {
        className: "tab-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, __jsx("a", {
        className: "default-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "Read More ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }))))))))))));
    }
  }]);

  return webdev;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (webdev);

/***/ }),

/***/ "./images/pics/Frontend-Backend.jpg":
/*!******************************************!*\
  !*** ./images/pics/Frontend-Backend.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Frontend-Backend-28b0bbe3c5d000dbcf878f7796d1cdd2.jpg";

/***/ }),

/***/ "./images/pics/Mobile-App.png":
false,

/***/ "./images/pics/best-backend-framework-2019.jpg":
/*!*****************************************************!*\
  !*** ./images/pics/best-backend-framework-2019.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/best-backend-framework-2019-82feaf83ef0f18a50efda9ba1a3325df.jpg";

/***/ }),

/***/ "./images/pics/frontend-web-development.jpg":
/*!**************************************************!*\
  !*** ./images/pics/frontend-web-development.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/frontend-web-development-bccfff334d8244712630c7938f844f42.jpg";

/***/ }),

/***/ "./images/pics/webdev.jpg":
false,

/***/ "./images/pics/wordpress.png":
false

})
//# sourceMappingURL=webdevelopment.js.811a3d5867173b61f583.hot-update.js.map