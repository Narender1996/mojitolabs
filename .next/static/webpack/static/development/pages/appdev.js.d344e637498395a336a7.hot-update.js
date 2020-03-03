webpackHotUpdate("static\\development\\pages\\appdev.js",{

/***/ "./components/information/appdev.js":
/*!******************************************!*\
  !*** ./components/information/appdev.js ***!
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







var _jsxFileName = "D:\\mojito website\\final theme\\raxr-react-next-data-science-analytics-template\\raxr-react\\components\\information\\appdev.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var appdev =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(appdev, _Component);

  function appdev() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, appdev);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(appdev)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(appdev, [{
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
      }, "IOS")), __jsx("li", {
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
      }, "Android")), __jsx("li", {
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
      }, "DATABASE")), __jsx("li", {
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
      }, "FRAMEWORK"))), __jsx("div", {
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
      }, "All the services you need in iOS"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "The iOS platform is loved by all Apple users, designing apps for the iPhone seems a natural thing to do.! Among the many iPhone apps development companies, we stand on our own. Our creativity and understanding of the iOS platform goes a long way to create apps designed for this niche \u2013 so that your user base gets apps that are friendly and easy to use. We are always up to date with technology, so you need not worry about iPhone Application Development at all."), __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Our IOS development services:"), __jsx("ul", {
        className: "tab-list",
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
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), "iPhone and iPad Application Development"), __jsx("li", {
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
      }), "mCommerce Applications"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), "Travel, Navigation, Social Networking and Mobile Security Apps"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), "Mobile Websites, Widget and Theme Development"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), "Maintenance, Support, Migration and Testing of existing apps")), __jsx("div", {
        className: "tab-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("a", {
        className: "default-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Read More ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })))))), __jsx("div", {
        className: "col-lg-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("div", {
        className: "tab-image-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/pics/ios7-animation.gif */ "./images/pics/ios7-animation.gif"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }))))), __jsx("div", {
        id: "tab2",
        className: "tabs_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx("div", {
        className: "col-lg-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, __jsx("div", {
        className: "tab-image-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/pics/unnamed.gif */ "./images/pics/unnamed.gif"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }))), __jsx("div", {
        className: "col-lg-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("div", {
        className: "tab-solution-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Android"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "We understand successful software solutions need bright ideas effectively implemented. Its not just about handling complex business logic\u2019s, we go extra mile to simplify the whole process so that anybody can easily use it. Here are some of the web developement services we provide to our customers:"), __jsx("ul", {
        className: "tab-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), "Product Engineering"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), "E-Commerce Store"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), "Enterprise Application Development")), __jsx("div", {
        className: "tab-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx("a", {
        className: "default-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Read More ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      })))))))), __jsx("div", {
        id: "tab3",
        className: "tabs_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("div", {
        className: "col-lg-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx("div", {
        className: "tab-solution-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "DATABASE"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "From developing native apps for Android and iOS platform to utilising modern technologies like React Native, we have extensive experience in developing mobile applications for both the platforms."), __jsx("ul", {
        className: "tab-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }), "Innovation idea the latest business technology"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), "Safe secure services for your online email account"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), "Digital content marketing online")), __jsx("div", {
        className: "tab-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, __jsx("a", {
        className: "default-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Read More ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      })))))), __jsx("div", {
        className: "col-lg-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, __jsx("div", {
        className: "tab-image-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/pics/Mobile-App.png */ "./images/pics/Mobile-App.png"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }))))), __jsx("div", {
        id: "tab4",
        className: "tabs_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, __jsx("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, __jsx("div", {
        className: "col-lg-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, __jsx("div", {
        className: "tab-image-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/pics/wordpress.png */ "./images/pics/wordpress.png"),
        alt: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }))), __jsx("div", {
        className: "col-lg-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, __jsx("div", {
        className: "tab-solution-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "FRAMEWORK"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Mojitolabs has used WordPress extensively for creating all kinds of websites ranging from small blogging websites to large websites with hundreds of web pages. Our experienced WordPress website developers have created many add-ons by utilizing the extensible nature of WordPress. Our WordPress developers not only create a website but also optimize it for the search engines. We enjoy innovating new tools for developing best possible websites for our clients."), __jsx("ul", {
        className: "tab-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), "WordPress powers more than 23.4% of websites today"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }), "Nearly every web user has either heard, seen or used WordPress"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, __jsx("i", {
        className: "flaticon-tick-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }), "Wordpress website development is the most sought after service today")), __jsx("div", {
        className: "tab-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, __jsx("a", {
        className: "default-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "Read More ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }))))))))))));
    }
  }]);

  return appdev;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (appdev);

/***/ })

})
//# sourceMappingURL=appdev.js.d344e637498395a336a7.hot-update.js.map