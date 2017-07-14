'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _title = require('../components/title');

var _title2 = _interopRequireDefault(_title);

var _back = require('../components/back');

var _back2 = _interopRequireDefault(_back);

var _page = require('../layouts/page');

var _page2 = _interopRequireDefault(_page);

var _posts = require('../data/posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ryanyogan/projects/ryanyogan/pages/posts.js?entry';
// Helpers


// Components


// Layouts


// Data (Will eventually use a simple little CMS)


var parseDate = function parseDate(date) {
  return (0, _moment2.default)(date, 'DD-MM-YYYY');
};

// Assign a URL to each post
// sort them by date (DESC)
var mutatedPosts = function mutatedPosts() {
  return _posts2.default.map(function (post) {
    return (0, _assign2.default)({
      url: '/' + parseDate(post.date).year() + '/' + post.id
    }, post);
  }).sort(function (a, b) {
    return parseDate(b.date).diff(parseDate(a.date));
  });
};

exports.default = function () {
  return _react2.default.createElement(_page2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement(_title2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), _react2.default.createElement('h1', {
    'data-jsx': 2079700982,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, 'Little Soap Box'), _react2.default.createElement(_back2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement('ul', {
    'data-jsx': 2079700982,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, mutatedPosts().map(function (post) {
    return _react2.default.createElement('li', { key: post.id, 'data-jsx': 2079700982,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, _react2.default.createElement(_link2.default, { href: post.url, prefetch: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }, _react2.default.createElement('a', {
      'data-jsx': 2079700982,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }, _react2.default.createElement('b', {
      'data-jsx': 2079700982,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    }, post.title), _react2.default.createElement('span', {
      'data-jsx': 2079700982,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }, parseDate(post.date).format('MMMM Do YYYY')))));
  })), _react2.default.createElement(_style2.default, {
    styleId: 2079700982,
    css: 'ul[data-jsx="2079700982"]{margin:0;padding:0 0 10px 0;list-style:none}li[data-jsx="2079700982"]{margin:25px 0;-webkit-text-decoration:none;text-decoration:none}li[data-jsx="2079700982"]:last-child{margin-bottom:0}a[data-jsx="2079700982"]{-webkit-text-decoration:none;text-decoration:none;display:block}b[data-jsx="2079700982"]{color:#000;font-size:17px;display:inline-block;font-weight:normal;line-height:21px}span[data-jsx="2079700982"]{display:block;color:#c1c1c1;font-size:13px;margin-top:4px}h1[data-jsx="2079700982"]{margin:5px 0 40px 0;font-size:35px;font-weight:300}@media (min-width:768px){a[data-jsx="2079700982"]{display:inline-block}span[data-jsx="2079700982"]{display:inline-block;margin-left:20px}b[data-jsx="2079700982"]{color:#5a5a5a;font-size:16px}ul[data-jsx="2079700982"]{padding-bottom:0}a[data-jsx="2079700982"]:hover b[data-jsx="2079700982"]{color:#000}h1[data-jsx="2079700982"]{font-size:40px;margin-top:0}}@media (min-width:992px){span[data-jsx="2079700982"]{opacity:0}li[data-jsx="2079700982"]{margin:22px 0}a[data-jsx="2079700982"]:hover span[data-jsx="2079700982"]{opacity:1}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3RzLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDSyxBQUdrQixBQUVLLEFBRUUsQUFFSyxBQUVWLEFBRUcsQUFFTSxBQUdHLEFBRUEsQUFFUCxBQUVHLEFBRU4sQUFFSSxBQUdMLEFBRUksQUFFSixVQWhDeUIsQ0E0QmhCLEFBSUEsQ0F4QmMsQUFlYixHQXJCc0IsQUFRUCxBQVNLLEFBV2pCLENBTGdCLENBckJsQixDQWlCSyxHQVRnQixDQUdaLEFBRW1CLE1BVGMsRUFSSCxBQVVELEFBZVgsQ0FOQyxNQVBrQixHQUtULE1BUHlCLENBVmhCLEdBUXdCLEVBRmpELEVBTWdDLFFBRmdCLEtBUnpDLEFBSUEsR0FFb0Usa0JBQU8iLCJmaWxlIjoicGFnZXMvcG9zdHMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3J5YW55b2dhbi9wcm9qZWN0cy9yeWFueW9nYW4iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWxwZXJzXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGUnXG5pbXBvcnQgQmFjayBmcm9tICcuLi9jb21wb25lbnRzL2JhY2snXG5cbi8vIExheW91dHNcbmltcG9ydCBQYWdlIGZyb20gJy4uL2xheW91dHMvcGFnZSdcblxuLy8gRGF0YSAoV2lsbCBldmVudHVhbGx5IHVzZSBhIHNpbXBsZSBsaXR0bGUgQ01TKVxuaW1wb3J0IHBvc3RzIGZyb20gJy4uL2RhdGEvcG9zdHMnXG5cbmNvbnN0IHBhcnNlRGF0ZSA9IGRhdGUgPT4gbW9tZW50KGRhdGUsICdERC1NTS1ZWVlZJylcblxuLy8gQXNzaWduIGEgVVJMIHRvIGVhY2ggcG9zdFxuLy8gc29ydCB0aGVtIGJ5IGRhdGUgKERFU0MpXG5jb25zdCBtdXRhdGVkUG9zdHMgPSAoKSA9PlxuICBwb3N0cy5tYXAocG9zdCA9PiBcbiAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgIHVybDogYC8ke3BhcnNlRGF0ZShwb3N0LmRhdGUpLnllYXIoKX0vJHtwb3N0LmlkfWBcbiAgICB9LCBwb3N0KVxuICApLnNvcnQoKGEsIGIpID0+IHBhcnNlRGF0ZShiLmRhdGUpLmRpZmYocGFyc2VEYXRlKGEuZGF0ZSkpKVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxQYWdlPlxuICAgIDxUaXRsZSAvPlxuXG4gICAgPGgxPntgTGl0dGxlIFNvYXAgQm94YH08L2gxPlxuICAgIDxCYWNrIC8+XG5cbiAgICA8dWw+XG4gICAgICB7bXV0YXRlZFBvc3RzKCkubWFwKHBvc3QgPT4gKFxuICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICA8TGluayBocmVmPXtwb3N0LnVybH0gcHJlZmV0Y2g+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGI+e3Bvc3QudGl0bGV9PC9iPlxuICAgICAgICAgICAgICA8c3Bhbj57cGFyc2VEYXRlKHBvc3QuZGF0ZSkuZm9ybWF0KCdNTU1NIERvIFlZWVknKX08L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cblxuICAgIDxzdHlsZSBqc3g+XG4gICAge2BcbiAgICAgIHVsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMjVweCAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGxpOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgYiB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICNjMWMxYzE7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIG1hcmdpbjogNXB4IDAgNDBweCAwO1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBiIHtcbiAgICAgICAgICBjb2xvcjogIzVhNWE1YTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIGIge1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIG1hcmdpbjogMjJweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciBzcGFuIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L1BhZ2U+XG4pIl19 */\n/*@ sourceURL=pages/posts.js?entry */'
  }));
};