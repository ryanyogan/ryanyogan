'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _package = require('../package');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ryanyogan/projects/ryanyogan/layouts/page.js';
// Helpers


// Components


// Versioning


var progress = void 0;

var stopProgress = function stopProgress() {
  clearTimeout(progress);
  _nprogress2.default.done();
};

// Only show progress if page
// transition takes longer than 100ms
_index2.default.onRouteChangeStart = function () {
  progress = setTimeout(_nprogress2.default.start, 100);
};

_index2.default.onRouteChangeComplete = stopProgress;
_index2.default.onRouteChangeError = stopProgress;

// Let the people know!
if (global.document) {
  var info = ['Version: ' + _package.version, 'Want to work with the best? Keep playing in the console ;)', 'Bumble Bee Tuna'];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(info), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var mesage = _step.value;

      console.log(message);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

var viewSource = function viewSource(event) {
  var allowed = ['P', 'H1', 'SPAN'];

  if (allowed.includes(event.target.tagName)) {
    return;
  }

  document.location = 'https://github.com/ryanyogan';
  event.preventDefault();
};

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('main', { onDoubleClick: viewSource, 'data-jsx': 3836526487,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no', 'data-jsx': 3836526487,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), _react2.default.createElement('meta', { name: 'description', content: 'Just adding to the interwebs as if it were lacking content', 'data-jsx': 3836526487,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), _react2.default.createElement('meta', { name: 'twitter:site', content: '@ryanyogan', 'data-jsx': 3836526487,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  })), children, _react2.default.createElement(_style2.default, {
    styleId: 3836526487,
    css: 'body{font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;margin:0;-webkit-font-smoothing:antialiased}html,body{height:100%}body>div:first-child,body>div:first-child>div:first-child,body>div:first-child>div:first-child>div{height:inherit}main{padding:30px;box-sizing:border-box;position:relative;min-height:100%}#nprogress{pointer-events:none}#nprogress .bar{background:#4492ff;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #4492ff, 0 0 5px #4492ff;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px, -4px);-ms-transform:rotate(3deg) translate(0px, -4px);transform:rotate(3deg) translate(0px, -4px)}@media (min-width:768px){main{padding:45px}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RE8sQUFLMEQsQUFFckMsQUFJRyxBQUVGLEFBRU8sQUFFRCxBQUVMLEFBR0MsYUFmSSxDQU15QixBQVNwQixDQUhpQixDQVJuQixJQU1xQixDQUZoQixhQUlpQyxFQUZLLENBSk0sUUFNVSxLQUZELE1BSmdCLENBSUEsQ0FFTSxPQUZjLE1BRXdDLEVBTnJELElBSWlDLFlBQU8sNEJBRWtDLGFBQXFELDJCQWRuSyxVQUE0QyxvQ0FBTywwRUFjdUgiLCJmaWxlIjoibGF5b3V0cy9wYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yeWFueW9nYW4vcHJvamVjdHMvcnlhbnlvZ2FuIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyc1xuaW1wb3J0IFByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuLy8gVmVyc2lvbmluZ1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UnXG5cbmxldCBwcm9ncmVzc1xuXG5jb25zdCBzdG9wUHJvZ3Jlc3MgPSAoKSA9PiB7XG4gIGNsZWFyVGltZW91dChwcm9ncmVzcylcbiAgUHJvZ3Jlc3MuZG9uZSgpXG59XG5cbi8vIE9ubHkgc2hvdyBwcm9ncmVzcyBpZiBwYWdlXG4vLyB0cmFuc2l0aW9uIHRha2VzIGxvbmdlciB0aGFuIDEwMG1zXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4ge1xuICBwcm9ncmVzcyA9IHNldFRpbWVvdXQoUHJvZ3Jlc3Muc3RhcnQsIDEwMClcbn1cblxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9IHN0b3BQcm9ncmVzc1xuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9IHN0b3BQcm9ncmVzc1xuXG4vLyBMZXQgdGhlIHBlb3BsZSBrbm93IVxuaWYgKGdsb2JhbC5kb2N1bWVudCkge1xuICBjb25zdCBpbmZvID0gW1xuICAgIGBWZXJzaW9uOiAke3ZlcnNpb259YCxcbiAgICBgV2FudCB0byB3b3JrIHdpdGggdGhlIGJlc3Q/IEtlZXAgcGxheWluZyBpbiB0aGUgY29uc29sZSA7KWAsXG4gICAgYEJ1bWJsZSBCZWUgVHVuYWBcbiAgXVxuXG4gIGZvciAoY29uc3QgbWVzYWdlIG9mIGluZm8pIHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICB9XG59XG5cbmNvbnN0IHZpZXdTb3VyY2UgPSBldmVudCA9PiB7XG4gIGNvbnN0IGFsbG93ZWQgPSBbJ1AnLCAnSDEnLCAnU1BBTiddXG5cbiAgaWYgKGFsbG93ZWQuaW5jbHVkZXMoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBkb2N1bWVudC5sb2NhdGlvbiA9ICdodHRwczovL2dpdGh1Yi5jb20vcnlhbnlvZ2FuJ1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPG1haW4gb25Eb3VibGVDbGljaz17dmlld1NvdXJjZX0+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHVzZXItc2NhbGFibGU9bm9cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkp1c3QgYWRkaW5nIHRvIHRoZSBpbnRlcndlYnMgYXMgaWYgaXQgd2VyZSBsYWNraW5nIGNvbnRlbnRcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAcnlhbnlvZ2FuXCIgLz5cbiAgICA8L0hlYWQ+XG5cbiAgICB7Y2hpbGRyZW59XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICBib2R5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICAgICAgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCxcbiAgICAgICAgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgIH1cblxuICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgYm9keSA+IGRpdjpmaXJzdC1jaGlsZCxcbiAgICAgIGJvZHkgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXY6Zmlyc3QtY2hpbGQsXG4gICAgICBib2R5ID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2IHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICBtYWluIHtcbiAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAjbnByb2dyZXNzIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0NDkyZmY7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjNDQ5MmZmLCAwIDAgNXB4ICM0NDkyZmY7XG4gICAgICAgIG9wYWNpdHk6IDEuMDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiA0NXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvbWFpbj5cbikiXX0= */\n/*@ sourceURL=layouts/page.js */'
  }));
};