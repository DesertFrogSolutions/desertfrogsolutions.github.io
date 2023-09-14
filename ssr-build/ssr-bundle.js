module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "QRet":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return l; });
/* unused harmony export useReducer */
/* unused harmony export useEffect */
/* unused harmony export useLayoutEffect */
/* unused harmony export useRef */
/* unused harmony export useImperativeHandle */
/* unused harmony export useMemo */
/* unused harmony export useCallback */
/* unused harmony export useContext */
/* unused harmony export useDebugValue */
/* unused harmony export useErrorBoundary */
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var t,
  u,
  r,
  o = 0,
  i = [],
  c = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,
  f = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,
  e = preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,
  a = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,
  v = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;
function m(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(u, t, o || r), o = 0;
  var i = u.__H || (u.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({}), i.__[t];
}
function l(n) {
  return o = 1, p(w, n);
}
function p(n, r, o) {
  var i = m(t++, 2);
  return i.t = n, i.__c || (i.__ = [o ? o(r) : w(void 0, r), function (n) {
    var t = i.t(i.__[0], n);
    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }], i.__c = u), i.__;
}
function y(r, o) {
  var i = m(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i));
}
function h(r, o) {
  var i = m(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i));
}
function s(n) {
  return o = 5, d(function () {
    return {
      current: n
    };
  }, []);
}
function _(n, t, u) {
  o = 6, h(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}
function d(n, u) {
  var r = m(t++, 7);
  return k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}
function A(n, t) {
  return o = 8, d(function () {
    return n;
  }, t);
}
function F(n) {
  var r = u.context[n.__c],
    o = m(t++, 9);
  return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
}
function T(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(u ? u(t) : t);
}
function q(n) {
  var r = m(t++, 10),
    o = l();
  return r.__ = n, u.componentDidCatch || (u.componentDidCatch = function (n) {
    r.__ && r.__(n), o[1](n);
  }), [o[0], function () {
    o[1](void 0);
  }];
}
function x() {
  for (var t; t = i.shift();) if (t.__P) try {
    t.__H.__h.forEach(g), t.__H.__h.forEach(j), t.__H.__h = [];
  } catch (u) {
    t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u, t.__v);
  }
}
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b = function (n) {
  u = null, c && c(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  f && f(n), t = 0;
  var r = (u = n.__c).__H;
  r && (r.__h.forEach(g), r.__h.forEach(j), r.__h = []);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed = function (t) {
  e && e(t);
  var o = t.__c;
  o && o.__H && o.__H.__h.length && (1 !== i.push(o) && r === preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame || ((r = preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame) || function (n) {
    var t,
      u = function u() {
        clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
      },
      r = setTimeout(u, 100);
    b && (t = requestAnimationFrame(u));
  })(x)), u = null;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
        return !n.__ || j(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, t.__v);
    }
  }), a && a(t, u);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (t) {
  v && v(t);
  var u,
    r = t.__c;
  r && r.__H && (r.__H.__.forEach(function (n) {
    try {
      g(n);
    } catch (n) {
      u = n;
    }
  }), u && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u, r.__v));
};
var b = "function" == typeof requestAnimationFrame;
function g(n) {
  var t = u,
    r = n.__c;
  "function" == typeof r && (n.__c = void 0, r()), u = t;
}
function j(n) {
  var t = u;
  n.__c = n.__(), u = t;
}
function k(n, t) {
  return !n || n.length !== t.length || t.some(function (t, u) {
    return t !== n[u];
  });
}
function w(n, t) {
  return "function" == typeof t ? t(n) : t;
}


/***/ }),

/***/ "QfWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./style/index.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./components/app.js
var app = __webpack_require__("ugae");

// CONCATENATED MODULE: ./index.js


/* harmony default export */ var index = __webpack_exports__["default"] = (app["a" /* default */]);

/***/ }),

/***/ "ugae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import { Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
// import Home from '../routes/home';
// import Profile from '../routes/profile';

function FailureMessage(props) {
  return h("div", {
    class: "error-message w-form-fail container w-container"
  }, h("p", null, "Sorry", props.name ? " ".concat(props.name) : "", ", something went wrong while submitting the form.", h("br", null), "Try again"));
}
function summonCalendly(name, email) {
  Calendly.initPopupWidget({
    url: 'https://calendly.com/jgoldfar/intro',
    prefill: {
      name: name,
      email: email
    }
  });
  return false;
}
function SuccessMessage(props) {
  // <div class="w-widget-twitter-count-shim w--vertical" aria-hidden="true">
  // <div class="w-widget-twitter-count-inner">...</div>
  // </div>
  // <div class="w-widget-twitter-count-clear"></div><iframe title="Twitter Tweet Button" allowtransparency="true" frameborder="0" scrolling="no" src="https://platform.twitter.com/widgets/tweet_button.html" style="border: none; height: 20px; overflow: hidden; width: 73px;"></iframe>
  // </div>
  // <div class="share-button facebook w-widget w-widget-facebook"><iframe title="Facebook Like Button" src="https://www.facebook.com/plugins/like.php" scrolling="no" frameborder="0" allowtransparency="true" style="border: none; overflow: hidden; width: 55px; height: 65px;"></iframe></div>
  // <p class="referal-text">Help spread the word:</p>
  var nameparts = props.name ? props.name.split(' ') : ["", ""];
  var thisname = nameparts.length == 2 && nameparts[0] ? nameparts[0] : props.name;
  return h(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, h("div", {
    class: "success-message w-form-done container w-container"
  }, h("p", null, "Awesome, ", thisname ? " ".concat(thisname) : "", "! Thank you for your inquiry. We will get back to you as soon as possible!"), h("p", null, "Schedule a call with us at your convenience ", h("a", {
    href: "#",
    onclick: function onclick() {
      summonCalendly(props.name, props.email);
    }
  }, "with Calendly"))));
}
function Header() {
  // <li>Have you struggled to achieve your commitments?</li>
  return h(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, h("h1", {
    class: "heading"
  }, "Desert Frog Solutions"), h("p", {
    class: "subtitle"
  }, "Partnering with visionaries, creators, and organizations making an impact.", h("br", null), "Delivering IT and data solutions that empower success.", h("br", null)), h("p", {
    class: "subtitle questiontext"
  }, "Our mission is to help professionals discover opportunities, stay competitive, and achieve through innovative, robust, and scalable solutions that fit their challenges."), h("p", {
    class: "subtitle questiontext"
  }, h("ul", null, h("li", null, "Do you need state-of-the-art, reliable, and cost-effective results?"), h("li", null, "Do you want to understand and upgrade your systems?"), h("li", null, "Do you need resources and expertise to advance your vision?"))), h("p", {
    class: "subtitle"
  }, "You need to stand out.", h("br", null), "We want to make it happen.", h("br", null)));
}
// globals/functions used in app interactivity
var timeToShowFailure = 3000;
function App() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "a"])(""),
    _useState2 = _slicedToArray(_useState, 2),
    userName = _useState2[0],
    setUserName = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "a"])(""),
    _useState4 = _slicedToArray(_useState3, 2),
    userEmail = _useState4[0],
    setUserEmail = _useState4[1];
  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "a"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    success = _useState6[0],
    setSuccess = _useState6[1];
  var _useState7 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "a"])(false),
    _useState8 = _slicedToArray(_useState7, 2),
    failure = _useState8[0],
    setFailure = _useState8[1];
  var setName = function setName(event) {
    setUserName(event.target.value);
    console.log(userName); /* console.log(event); */
  };
  var setEmail = function setEmail(event) {
    setUserEmail(event.target.value);
    console.log(userEmail);
  };
  var submitForm = function submitForm(event) {
    // console.log(event);
    event.preventDefault();
    // const form = document.getElementById("email-form");
    var formData = new FormData(event.target);
    return fetch("https://usebasin.com/f/c5e3a00dbed9", {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    })
    // return new Promise((resolve, reject) => {
    // //    // resolve({status: 400});
    //    resolve({status: 200});
    // //    // reject('an error occurred');
    // })
    .then(function (response) {
      if (response.status === 200) {
        setSuccess(true);
      } else {
        setFailure(true);
        setTimeout(function () {
          setFailure(false);
        }, timeToShowFailure);
      }
    }).catch(function (error) {
      setFailure(true);
      console.log(error);
      setTimeout(function () {
        setFailure(false);
      }, timeToShowFailure);
    });
  };
  // ID for element being hydrated must be "preact_root"
  // https://github.com/preactjs/preact-cli/issues/1330
  return h("div", {
    id: "preact_root"
  }, h("div", {
    class: "header-section wf-section"
  }, h("div", {
    class: "container w-container"
  }, h(Header, null), success ? h(SuccessMessage, {
    name: userName,
    email: userEmail
  }) : "", h("div", {
    class: "sign-up-form w-form",
    style: success ? 'display: none;' : ''
  }, h("form", {
    name: "wf-form-signup-form",
    "data-name": "Signup Form",
    id: "email-form",
    action: "",
    method: "post",
    enctype: "multipart/form-data",
    class: "w-clearfix",
    onSubmit: submitForm
  }, h("input", {
    type: "text",
    class: "field fieldfullwidth w-input",
    maxlength: "256",
    name: "Name",
    "data-name": "Name",
    placeholder: "Enter your name (*)",
    id: "Name",
    required: "true",
    onChange: setName
  }), h("textarea", {
    placeholder: "Share your project, product, or challenge. Or just say Hi!",
    maxlength: "5000",
    id: "Challenge",
    name: "Challenge",
    required: "",
    "data-name": "field",
    class: "field fieldfullwidth fieldenterchallenge w-input"
  }), h("input", {
    type: "email",
    class: "field w-input",
    maxlength: "256",
    name: "email",
    "data-name": "Email",
    placeholder: "Enter your email address (*)",
    id: "field",
    onChange: setEmail,
    required: "true"
  }), h("input", {
    type: "submit",
    value: "Contact Us",
    "data-wait": "Please wait...",
    class: "button w-button"
  }))), failure ? h(FailureMessage, {
    name: userName
  }) : "")));
}
// original demo app:
// const App = () => (
// 	<div id="app">
// 		<Header />
// 		<Router>
// 			<Home path="/" />
// 			<Profile path="/profile/" user="me" />
// 			<Profile path="/profile/:user" />
// 		</Router>
// 	</div>
// )

/* harmony default export */ __webpack_exports__["a"] = (App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map