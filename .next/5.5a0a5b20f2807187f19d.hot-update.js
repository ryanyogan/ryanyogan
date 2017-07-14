webpackHotUpdate(5,{

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(540);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(545);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ryanyogan/projects/ryanyogan/components/back.js';
// This is a small helper that will float on the
// top right of the window to navigate back quickly

// Components

exports.default = function (_ref) {
  var to = _ref.to,
      outsideCover = _ref.outsideCover,
      insideCover = _ref.insideCover;

  var classes = [];

  if (outsideCover) {
    classes.push('outside');
  }

  if (insideCover) {
    classes.push('inside');
  }

  return _react2.default.createElement('div', { className: classes.join(' '), 'data-jsx': 651436113,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_link2.default, { href: to || '/', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 651436113,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, '\u21A9\uFE0E')), _react2.default.createElement(_style2.default, {
    styleId: 651436113,
    css: 'div[data-jsx="651436113"]{position:absolute;right:30px;top:40px;height:37px;width:37px}a[data-jsx="651436113"]{font-size:19px;-webkit-text-align:center;text-align:center;background:#efefef;font-weight:bold;box-sizing:border-box;color:#000;height:inherit;display:block;width:inherit;line-height:44px;border-radius:100%;font-family:\'Courier New\', serif;-webkit-text-decoration:none;text-decoration:none}.outside[data-jsx="651436113"]{display:none}.inside[data-jsx="651436113"]{right:15px;top:15px}@media (min-width:835px){div[data-jsx="651436113"]{width:55px;height:55px}a[data-jsx="651436113"]{-webkit-transition:all .2s;transition:all .2s;font-size:22px;line-height:66px}a[data-jsx="651436113"]:hover{background:#e3e3e3;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}.outside[data-jsx="651436113"]{display:block}.inside[data-jsx="651436113"]{display:none}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Qk8sQUFHNkIsQUFFSCxBQUVGLEFBRUYsQUFHRSxBQUVRLEFBRUEsQUFFTCxBQUVELFlBWGdCLEFBR08sRUFMaEIsQUFhSSxDQUZDLENBYmlCLEdBRkosQ0FhZSxFQVBmLEdBR1MsTUFUVyxVQUF1QixPQVdsQyxNQVh3RCxRQUUvQixFQVNLLEVBWG1DLGdCQUVaLEFBU1osZ0JBRXhCLEVBWHFFLHVCQUFzQixZQUEwQixnQkFBeUIsZUFBeUIsZUFBNEIsa0JBQThCLG9CQUE0QyxrQ0FBZ0Msb0RBQVMiLCJmaWxlIjoiY29tcG9uZW50cy9iYWNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yeWFueW9nYW4vcHJvamVjdHMvcnlhbnlvZ2FuIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyBhIHNtYWxsIGhlbHBlciB0aGF0IHdpbGwgZmxvYXQgb24gdGhlXG4vLyB0b3AgcmlnaHQgb2YgdGhlIHdpbmRvdyB0byBuYXZpZ2F0ZSBiYWNrIHF1aWNrbHlcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyB0bywgb3V0c2lkZUNvdmVyLCBpbnNpZGVDb3ZlciB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSBbXVxuXG4gIGlmIChvdXRzaWRlQ292ZXIpIHtcbiAgICBjbGFzc2VzLnB1c2goJ291dHNpZGUnKVxuICB9XG5cbiAgaWYgKGluc2lkZUNvdmVyKSB7XG4gICAgY2xhc3Nlcy5wdXNoKCdpbnNpZGUnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2luKCcgJyl9PlxuICAgICAgPExpbmsgaHJlZj17dG8gfHwgJy8nfSBwcmVmZXRjaD5cbiAgICAgICAgPGE+4oap77iOPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgdG9wOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICB3aWR0aDogMzdweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBzZXJpZjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAub3V0c2lkZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnNpZGUge1xuICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MzVweCkge1xuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNjZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm91dHNpZGUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmluc2lkZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn0iXX0= */\n/*@ sourceURL=components/back.js */'
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/ryanyogan/projects/ryanyogan/components/back.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/ryanyogan/projects/ryanyogan/components/back.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41YTBhNWIyMGYyODA3MTg3ZjE5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9iYWNrLmpzP2IzMDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyBhIHNtYWxsIGhlbHBlciB0aGF0IHdpbGwgZmxvYXQgb24gdGhlXG4vLyB0b3AgcmlnaHQgb2YgdGhlIHdpbmRvdyB0byBuYXZpZ2F0ZSBiYWNrIHF1aWNrbHlcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyB0bywgb3V0c2lkZUNvdmVyLCBpbnNpZGVDb3ZlciB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSBbXVxuXG4gIGlmIChvdXRzaWRlQ292ZXIpIHtcbiAgICBjbGFzc2VzLnB1c2goJ291dHNpZGUnKVxuICB9XG5cbiAgaWYgKGluc2lkZUNvdmVyKSB7XG4gICAgY2xhc3Nlcy5wdXNoKCdpbnNpZGUnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2luKCcgJyl9PlxuICAgICAgPExpbmsgaHJlZj17dG8gfHwgJy8nfSBwcmVmZXRjaD5cbiAgICAgICAgPGE+4oap77iOPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgdG9wOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICB3aWR0aDogMzdweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBzZXJpZjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAub3V0c2lkZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnNpZGUge1xuICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MzVweCkge1xuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNjZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm91dHNpZGUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmluc2lkZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2JhY2suanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTs7Ozs7O0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBcUVBO0FBckVBO0FBWkE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==