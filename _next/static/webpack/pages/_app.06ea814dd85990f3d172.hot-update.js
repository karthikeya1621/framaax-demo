webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Karthikeya_Documents_Freelance_Framaax_framaax_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_variables_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/variables.scss */ "./styles/variables.scss");
/* harmony import */ var _styles_variables_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.scss */ "./styles/globals.scss");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Layout.scss */ "./styles/Layout.scss");
/* harmony import */ var _styles_Layout_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Header.scss */ "./styles/Header.scss");
/* harmony import */ var _styles_Header_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Footer_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Footer.scss */ "./styles/Footer.scss");
/* harmony import */ var _styles_Footer_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Home_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.scss */ "./styles/Home.scss");
/* harmony import */ var _styles_Home_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_Testimonials_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Testimonials.scss */ "./styles/Testimonials.scss");
/* harmony import */ var _styles_Testimonials_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Testimonials_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _components_Layout_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout.jsx */ "./components/Layout.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);



var _jsxFileName = "C:\\Users\\Karthikeya\\Documents\\Freelance\\Framaax\\framaax-web\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Karthikeya_Documents_Freelance_Framaax_framaax_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var wrapperFadeOut = null;
  Object(react__WEBPACK_IMPORTED_MODULE_12__["useEffect"])(function () {
    var fadeWrapper = document.querySelector('.fadewrapper');

    if (fadeWrapper !== null) {
      wrapperFadeOut = Object(animejs__WEBPACK_IMPORTED_MODULE_10__["default"])({
        targets: '.fadewrapper',
        opacity: [1, 0],
        duration: 300,
        easing: 'linear',
        complete: function complete(anim) {
          fadeWrapper.remove();
        }
      });
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "fadewrapper"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(MyApp, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndyYXBwZXJGYWRlT3V0IiwidXNlRWZmZWN0IiwiZmFkZVdyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhbmltZSIsInRhcmdldHMiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJlYXNpbmciLCJjb21wbGV0ZSIsImFuaW0iLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUV2QyxNQUFJQyxjQUFjLEdBQUcsSUFBckI7QUFFQUMsMERBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBcEI7O0FBQ0EsUUFBSUYsV0FBVyxLQUFLLElBQXBCLEVBQTBCO0FBQ3hCRixvQkFBYyxHQUFHSyx3REFBSyxDQUFDO0FBQ3JCQyxlQUFPLEVBQUUsY0FEWTtBQUVyQkMsZUFBTyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGWTtBQUdyQkMsZ0JBQVEsRUFBRSxHQUhXO0FBSXJCQyxjQUFNLEVBQUUsUUFKYTtBQUtyQkMsZ0JBQVEsRUFBRSxrQkFBQ0MsSUFBRCxFQUFVO0FBQ2xCVCxxQkFBVyxDQUFDVSxNQUFaO0FBQ0Q7QUFQb0IsT0FBRCxDQUF0QjtBQVNEO0FBQ0YsR0FiUSxDQUFUO0FBZUEsc0JBQ0UscUVBQUMsK0RBQUQ7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLFNBQUQsb0JBQWViLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0dBekJRRixLOztLQUFBQSxLO0FBMkJNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA2ZWE4MTRkZDg1OTkwZjNkMTcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2ludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5cbmltcG9ydCAnLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5zY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvTGF5b3V0LnNjc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9IZWFkZXIuc2NzcydcbmltcG9ydCAnLi4vc3R5bGVzL0Zvb3Rlci5zY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvSG9tZS5zY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvVGVzdGltb25pYWxzLnNjc3MnXG5cbmltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzJ1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzeCdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICBsZXQgd3JhcHBlckZhZGVPdXQgPSBudWxsO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmFkZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFkZXdyYXBwZXInKTtcbiAgICBpZiAoZmFkZVdyYXBwZXIgIT09IG51bGwpIHtcbiAgICAgIHdyYXBwZXJGYWRlT3V0ID0gYW5pbWUoe1xuICAgICAgICB0YXJnZXRzOiAnLmZhZGV3cmFwcGVyJyxcbiAgICAgICAgb3BhY2l0eTogWzEsIDBdLFxuICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICBjb21wbGV0ZTogKGFuaW0pID0+IHtcbiAgICAgICAgICBmYWRlV3JhcHBlci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWRld3JhcHBlclwiPjwvZGl2PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9