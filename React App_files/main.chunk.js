(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/main/main.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/main/main.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n   color: blue;\n}\n\n/* use for comic nav\n\nbackground-color: blue;\nposition: relative;\nleft: 40%;\ndisplay:flex;\njustify-content: space-between;\nfont-size: 50px; */\n\n\n.section1 {\n   background-image: url(\"https://i1.wp.com/pandeia.eu/wp-content/uploads/2014/06/3681290610_31a3e92165_b_d.jpg\");\n   background-size: cover; \n}\n\n.splashPageImage {\n   position: relative; \n   left: 50%;\n   -webkit-transform: translateX(-50%);\n           transform: translateX(-50%);\n   padding-bottom: 25px;\n}\n\n.main_page_nav {\n   display: -webkit-flex;\n   display: flex;\n   width: 700px;\n   font-size: 50px;\n   background-color: blue;\n   -webkit-align-items: center;\n           align-items: center;\n  text-align: center;\n   -webkit-justify-content: space-between;\n           justify-content: space-between;\n   position: relative;\n   left: 30%;\n\n}\n\n.boy_tiger_github {\n   color: black;\n   font-size: 50px;\n   position: relative;\n   left: 50%;\n}\n\n.main_page_calendar {\n   width: 150px;\n   height: 100px;\n   background-color: green;\n}\n\n.main_page_scroll_down {\n\n   position: absolute;\n   text-align: center;\n   bottom: 0%;\n   height: 4%;\n   width: 100%;\n   background-color: purple;\n\n   \n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n   outline: inherit;\n   \n}\n\n\n\n.section2 {\n   background-image: url(\"https://cdn.suwalls.com/wallpapers/comics/calvin-and-hobbes-14301-1920x1200.jpg\");\n   background-size: cover; \n}\n\n.about_us {\n   position: absolute;\n   top: 3%;\n   left: 45%;\n}\n\n.people_div {\n   background-color: orange;\n   width: 80%;\n   height: 75%;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n   margin: auto;\n   -webkit-justify-content: space-evenly;\n           justify-content: space-evenly;\n\n}\n\n.personal_sites_wrapper {\n   font-size: 50px;\n   display: -webkit-flex;\n   display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n\n.fa-github {\n   color: black;\n}\n\n.fa-linkedin {\n   color: #0076b5;\n}\n\n.fa-user-circle {\n   color: lightgray;\n}\n\n.person1 {\n   width: 25%;\n   height: 100%;\n   background-color: gray;\n}\n.person2 {\n   width: 25%;\n   height: 100%;\n   background-color: green;\n}\n.person3 {\n   width: 25%;\n   height: 100%;\n   background-color: blue;\n}\n.person4 {\n   width: 25%;\n   height: 100%;\n   background-color: red;\n}\n\n.section3 {\n      background-image: url(\"https://timedotcom.files.wordpress.com/2014/06/ap050826020930.jpg\");\n   background-size: cover; \n   \n}\n\n.about_bill {\n   position: absolute;\n   top: 3%;\n   left: 45%;\n   color: white;\n   font-size: 50px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/nav/navbar.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/nav/navbar.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/actions/session_actions.js":
/*!****************************************!*\
  !*** ./src/actions/session_actions.js ***!
  \****************************************/
/*! exports provided: RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, RECEIVE_USER_LOGOUT, RECEIVE_USER_SIGN_IN, receiveCurrentUser, receiveUserSignIn, receiveErrors, logoutUser, signup, login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_CURRENT_USER", function() { return RECEIVE_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_SESSION_ERRORS", function() { return RECEIVE_SESSION_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_USER_LOGOUT", function() { return RECEIVE_USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_USER_SIGN_IN", function() { return RECEIVE_USER_SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveCurrentUser", function() { return receiveCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveUserSignIn", function() { return receiveUserSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveErrors", function() { return receiveErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/session_api_util */ "./src/util/session_api_util.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);


var RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
var RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
var RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
var RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
var receiveCurrentUser = function receiveCurrentUser(currentUser) {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  };
};
var receiveUserSignIn = function receiveUserSignIn() {
  return {
    type: RECEIVE_USER_SIGN_IN
  };
};
var receiveErrors = function receiveErrors(errors) {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  };
};
var logoutUser = function logoutUser() {
  return {
    type: RECEIVE_USER_LOGOUT
  };
};
var signup = function signup(user) {
  return function (dispatch) {
    return _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["signup"](user).then(function () {
      return dispatch(receiveUserSignIn());
    }, function (err) {
      return dispatch(receiveErrors(err.response.data));
    });
  };
};
var login = function login(user) {
  return function (dispatch) {
    return _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["login"](user).then(function (res) {
      var token = res.data.token;
      localStorage.setItem('jwtToken', token);
      _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["setAuthToken"](token);
      var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);
      dispatch(receiveCurrentUser(decoded));
    }).catch(function (err) {
      dispatch(receiveErrors(err.response.data));
    });
  };
};
var logout = function logout() {
  return function (dispatch) {
    localStorage.removeItem('jwtToken');
    _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__["setAuthToken"](false);
    dispatch(logoutUser());
  };
};

/***/ }),

/***/ "./src/actions/tweet_actions.js":
/*!**************************************!*\
  !*** ./src/actions/tweet_actions.js ***!
  \**************************************/
/*! exports provided: RECEIVE_TWEETS, RECEIVE_USER_TWEETS, RECEIVE_NEW_TWEET, receiveTweets, receiveUserTweets, receiveNewTweet, fetchTweets, fetchUserTweets, composeTweet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_TWEETS", function() { return RECEIVE_TWEETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_USER_TWEETS", function() { return RECEIVE_USER_TWEETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_NEW_TWEET", function() { return RECEIVE_NEW_TWEET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveTweets", function() { return receiveTweets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveUserTweets", function() { return receiveUserTweets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveNewTweet", function() { return receiveNewTweet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTweets", function() { return fetchTweets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserTweets", function() { return fetchUserTweets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeTweet", function() { return composeTweet; });
/* harmony import */ var _util_tweet_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/tweet_api_util */ "./src/util/tweet_api_util.js");

var RECEIVE_TWEETS = "RECEIVE_TWEETS";
var RECEIVE_USER_TWEETS = "RECEIVE_USER_TWEETS";
var RECEIVE_NEW_TWEET = "RECEIVE_NEW_TWEET";
var receiveTweets = function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets: tweets
  };
};
var receiveUserTweets = function receiveUserTweets(tweets) {
  return {
    type: RECEIVE_USER_TWEETS,
    tweets: tweets
  };
};
var receiveNewTweet = function receiveNewTweet(tweet) {
  return {
    type: RECEIVE_NEW_TWEET,
    tweet: tweet
  };
};
var fetchTweets = function fetchTweets() {
  return function (dispatch) {
    return Object(_util_tweet_api_util__WEBPACK_IMPORTED_MODULE_0__["getTweets"])().then(function (tweets) {
      return dispatch(receiveTweets(tweets));
    }).catch(function (err) {
      return console.log(err);
    });
  };
};
var fetchUserTweets = function fetchUserTweets(id) {
  return function (dispatch) {
    return Object(_util_tweet_api_util__WEBPACK_IMPORTED_MODULE_0__["getUserTweets"])(id).then(function (tweets) {
      return dispatch(receiveUserTweets(tweets));
    }).catch(function (err) {
      return console.log(err);
    });
  };
};
var composeTweet = function composeTweet(data) {
  return function (dispatch) {
    return Object(_util_tweet_api_util__WEBPACK_IMPORTED_MODULE_0__["writeTweet"])(data).then(function (tweet) {
      return dispatch(receiveNewTweet(tweet));
    }).catch(function (err) {
      return console.log(err);
    });
  };
};

/***/ }),

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/route_util */ "./src/util/route_util.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _nav_navbar_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/navbar_container */ "./src/components/nav/navbar_container.js");
/* harmony import */ var _tweets_tweets_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tweets/tweets_container */ "./src/components/tweets/tweets_container.js");
/* harmony import */ var _main_main_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main_page */ "./src/components/main/main_page.js");
/* harmony import */ var _session_login_form_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session/login_form_container */ "./src/components/session/login_form_container.js");
/* harmony import */ var _session_signup_form_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./session/signup_form_container */ "./src/components/session/signup_form_container.js");
/* harmony import */ var _profile_profile_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile_container */ "./src/components/profile/profile_container.js");
/* harmony import */ var _tweets_tweet_compose_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tweets/tweet_compose_container */ "./src/components/tweets/tweet_compose_container.js");
var _jsxFileName = "/Users/d/Desktop/appacademy/BoyAndTiger/frontend/src/components/app.js";











var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_navbar_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__["AuthRoute"], {
    exact: true,
    path: "/",
    component: _main_main_page__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__["AuthRoute"], {
    exact: true,
    path: "/login",
    component: _session_login_form_container__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__["AuthRoute"], {
    exact: true,
    path: "/signup",
    component: _session_signup_form_container__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__["ProtectedRoute"], {
    exact: true,
    path: "/tweets",
    component: _tweets_tweets_container__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__["ProtectedRoute"], {
    exact: true,
    path: "/profile",
    component: _profile_profile_container__WEBPACK_IMPORTED_MODULE_8__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__["ProtectedRoute"], {
    exact: true,
    path: "/new_tweet",
    component: _tweets_tweet_compose_container__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/main/main.css":
/*!**************************************!*\
  !*** ./src/components/main/main.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/main/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/main/main.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/main/main.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/main/main_page.js":
/*!******************************************!*\
  !*** ./src/components/main/main_page.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.css */ "./src/components/main/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/Menu/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/Fade/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/colors/lightGreen */ "./node_modules/@material-ui/core/colors/lightGreen.js");
/* harmony import */ var _material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_lightGreen__WEBPACK_IMPORTED_MODULE_14__);





var _jsxFileName = "/Users/d/Desktop/appacademy/BoyAndTiger/frontend/src/components/main/main_page.js";









 // class MySection extends React.Component {
//    render() {
//       return (
//          <div className="section">
//             <h3>banana</h3>
//          </div>
//       );
//    }
// }

var MainPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MainPage, _React$Component);

  function MainPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      anchorEl: null
    };

    _this.handleClick = function (event) {
      _this.setState({
        anchorEl: event.currentTarget
      });
    };

    _this.handleClose = function () {
      _this.setState({
        anchorEl: null
      });
    };

    return _this;
  }

  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var anchorEl = this.state.anchorEl;
      var open = Boolean(anchorEl);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7___default.a, {
        navigation: true,
        controlArrows: "true",
        sectionsColor: ["#00cf35", "#7c5cff", "#001935", "#001935"],
        navigationPosition: "left",
        slidesNavigation: "true",
        render: function render(_ref) {
          var fullpageApi = _ref.fullpageApi;
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            id: "fullpage-wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "section section1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            className: "splashPageImage",
            alt: "todays comic",
            src: "https://i.imgur.com/6KVgfoT.gif",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "main_page_nav",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
            className: "fas fa-random",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "main_page_calendar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
            "aria-owns": open ? "fade-menu" : undefined,
            "aria-haspopup": "true",
            onClick: _this2.handleClick,
            style: {
              backgroundColor: "white"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          }, "Select Character"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
            id: "fade-menu",
            anchorEl: anchorEl,
            open: open,
            onClose: _this2.handleClose,
            TransitionComponent: _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_11___default.a,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
            onClick: _this2.handleClose,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }, "Spaceman Spiff"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
            onClick: _this2.handleClose,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, "Stupendous Man"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
            onClick: _this2.handleClose,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }, "Tracer Bullet")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: "https://github.com/maggiecs/BoyAndTiger",
            className: "boy_tiger_github",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
            className: "fab fa-github",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "next_section_button",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
            className: "main_page_scroll_down",
            onClick: function onClick() {
              return fullpageApi.moveSectionDown();
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: this
          }, "Move down"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "section section2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
            className: "about_us",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            },
            __self: this
          }, " About Us"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "people_div",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "person1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            },
            __self: this
          }, "blurb"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "personal_sites_wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: "https://maggiechen.me/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 127
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
            class: "fas fa-user-circle",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: "https://github.com/maggiecs",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
            class: "fab fa-github",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: "https://www.linkedin.com/in/maggie-chen1/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
            class: "fab fa-linkedin",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            __self: this
          })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "person2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 139
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 140
            },
            __self: this
          }, "blurb"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "personal_sites_wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: "https://www.cameroncouch.me/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
            class: "fas fa-user-circle",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: "https://github.com/CameronHCouch",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
            class: "fab fa-github",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: "https://www.linkedin.com/in/cameroncouch/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
            class: "fab fa-linkedin",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            },
            __self: this
          })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "person3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            },
            __self: this
          }, "blurb"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "personal_sites_wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: "https://derekdai.com/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
            class: "fas fa-user-circle",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: "https://github.com/drkdi/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
            class: "fab fa-github",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: "https://linkedin.com/in/daiderek/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
            class: "fab fa-linkedin",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "person4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            },
            __self: this
          }, "blurb"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "personal_sites_wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: "https://www.garykangaroo.com/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
            class: "fas fa-user-circle",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: "https://github.com/kangaree/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
            class: "fab fa-github",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: "https://www.linkedin.com/in/gary-kang-877b9b22/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 178
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
            class: "fab fa-linkedin",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179
            },
            __self: this
          })))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "section section3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
            className: "about_bill",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 188
            },
            __self: this
          }, "Bill?")));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }));
    }
  }]);

  return MainPage;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MainPage);

/***/ }),

/***/ "./src/components/nav/navbar.css":
/*!***************************************!*\
  !*** ./src/components/nav/navbar.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./navbar.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/nav/navbar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./navbar.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/nav/navbar.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./navbar.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/nav/navbar.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/nav/navbar.js":
/*!**************************************!*\
  !*** ./src/components/nav/navbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar.css */ "./src/components/nav/navbar.css");
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_navbar_css__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/d/Desktop/appacademy/BoyAndTiger/frontend/src/components/nav/navbar.js";




var NavBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NavBar, _React$Component);

  function NavBar(props) {
    var _this;

    Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    _this = Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavBar).call(this, props));
    _this.logoutUser = _this.logoutUser.bind(Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.getLinks = _this.getLinks.bind(Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
    key: "logoutUser",
    value: function logoutUser(e) {
      e.preventDefault();
      this.props.logout();
    }
  }, {
    key: "getLinks",
    value: function getLinks() {
      if (this.props.loggedIn) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          to: '/tweets',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, "All Tweets"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          to: '/profile',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, "Profile"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          to: '/new_tweet',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, "Write a Tweet"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          onClick: this.logoutUser,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, "Logout"));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          to: '/signup',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, "Signup"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          to: '/login',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, "Login"));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      });
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/nav/navbar_container.js":
/*!************************************************!*\
  !*** ./src/components/nav/navbar_container.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./src/actions/session_actions.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./src/components/nav/navbar.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.session.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, {
  logout: _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["logout"]
})(_navbar__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/profile/profile.js":
/*!*******************************************!*\
  !*** ./src/components/profile/profile.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tweets_tweet_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tweets/tweet_box */ "./src/components/tweets/tweet_box.js");





var _jsxFileName = "/Users/d/Desktop/appacademy/BoyAndTiger/frontend/src/components/profile/profile.js";



var Profile =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Profile, _React$Component);

  function Profile(props) {
    var _this;

    Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Profile);

    _this = Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Profile).call(this, props));
    _this.state = {
      tweets: []
    };
    return _this;
  }

  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Profile, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log(this.props.currentUser.id);
      this.props.fetchUserTweets(this.props.currentUser.id);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newState) {
      this.setState({
        tweets: newState.tweets
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.tweets.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, "This user has no Tweets");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "All of This User's Tweets"), this.state.tweets.map(function (tweet) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tweets_tweet_box__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: tweet._id,
            text: tweet.text,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          });
        }));
      }
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/components/profile/profile_container.js":
/*!*****************************************************!*\
  !*** ./src/components/profile/profile_container.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_tweet_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/tweet_actions */ "./src/actions/tweet_actions.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile */ "./src/components/profile/profile.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    tweets: Object.values(state.tweets.user),
    currentUser: state.session.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUserTweets: function fetchUserTweets(id) {
      return dispatch(Object(_actions_tweet_actions__WEBPACK_IMPORTED_MODULE_1__["fetchUserTweets"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_profile__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/root.js":
/*!********************************!*\
  !*** ./src/components/root.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./src/components/app.js");
var _jsxFileName = "/Users/d/Desktop/appacademy/BoyAndTiger/frontend/src/components/root.js";





var Root = function Root(_ref) {
  var store = _ref.store;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./src/components/session/login_form.js":
/*!**********************************************!*\
  !*** ./src/components/session/login_form.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");







var _jsxFileName = "/Users/d/Desktop/appacademy/BoyAndTiger/frontend/src/components/session/login_form.js";



var LoginForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LoginForm, _React$Component);

  function LoginForm(props) {
    var _this;

    Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoginForm);

    _this = Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(LoginForm).call(this, props));
    _this.state = {
      email: '',
      password: '',
      errors: {}
    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    _this.renderErrors = _this.renderErrors.bind(Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    return _this;
  }

  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LoginForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.currentUser === true) {
        this.props.history.push('/tweets');
      }

      this.setState({
        errors: nextProps.errors
      });
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, e.currentTarget.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var user = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.login(user);
    }
  }, {
    key: "renderErrors",
    value: function renderErrors() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, Object.keys(this.state.errors).map(function (error, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: "error-".concat(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, _this3.state.errors[error]);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        value: this.state.email,
        onChange: this.update('email'),
        placeholder: "Email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "password",
        value: this.state.password,
        onChange: this.update('password'),
        placeholder: "Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), this.renderErrors())));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(LoginForm));

/***/ }),

/***/ "./src/components/session/login_form_container.js":
/*!********************************************************!*\
  !*** ./src/components/session/login_form_container.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./src/actions/session_actions.js");
/* harmony import */ var _login_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login_form */ "./src/components/session/login_form.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    errors: state.errors.session
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["login"])(user));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_login_form__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/session/signup_form.js":
/*!***********************************************!*\
  !*** ./src/components/session/signup_form.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");







var _jsxFileName = "/Users/d/Desktop/appacademy/BoyAndTiger/frontend/src/components/session/signup_form.js";



var SignupForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SignupForm, _React$Component);

  function SignupForm(props) {
    var _this;

    Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SignupForm);

    _this = Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SignupForm).call(this, props));
    _this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)));
    _this.clearedErrors = false;
    return _this;
  }

  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SignupForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.signedIn === true) {
        this.props.history.push('/login');
      }

      this.setState({
        errors: nextProps.errors
      });
    }
  }, {
    key: "update",
    value: function update(field) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, e.currentTarget.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var user = {
        email: this.state.email,
        handle: this.state.handle,
        password: this.state.password,
        password2: this.state.password2
      };
      this.props.signup(user, this.props.history);
    }
  }, {
    key: "renderErrors",
    value: function renderErrors() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, Object.keys(this.state.errors).map(function (error, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: "error-".concat(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, _this3.state.errors[error]);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "login-form-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "login-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        value: this.state.email,
        onChange: this.update('email'),
        placeholder: "Email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        value: this.state.handle,
        onChange: this.update('handle'),
        placeholder: "Handle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "password",
        value: this.state.password,
        onChange: this.update('password'),
        placeholder: "Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "password",
        value: this.state.password2,
        onChange: this.update('password2'),
        placeholder: "Confirm Passsword",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), this.renderErrors())));
    }
  }]);

  return SignupForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(SignupForm));

/***/ }),

/***/ "./src/components/session/signup_form_container.js":
/*!*********************************************************!*\
  !*** ./src/components/session/signup_form_container.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./src/actions/session_actions.js");
/* harmony import */ var _signup_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup_form */ "./src/components/session/signup_form.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signup: function signup(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["signup"])(user));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_signup_form__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/tweets/tweet_box.js":
/*!********************************************!*\
  !*** ./src/components/tweets/tweet_box.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/d/Desktop/appacademy/BoyAndTiger/frontend/src/components/tweets/tweet_box.js";


var TweetBox =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TweetBox, _React$Component);

  function TweetBox() {
    Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TweetBox);

    return Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TweetBox).apply(this, arguments));
  }

  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TweetBox, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, this.props.text));
    }
  }]);

  return TweetBox;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TweetBox);

/***/ }),

/***/ "./src/components/tweets/tweet_compose.js":
/*!************************************************!*\
  !*** ./src/components/tweets/tweet_compose.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tweet_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tweet_box */ "./src/components/tweets/tweet_box.js");






var _jsxFileName = "/Users/d/Desktop/appacademy/BoyAndTiger/frontend/src/components/tweets/tweet_compose.js";



var TweetCompose =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TweetCompose, _React$Component);

  function TweetCompose(props) {
    var _this;

    Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TweetCompose);

    _this = Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TweetCompose).call(this, props));
    _this.state = {
      text: "",
      newTweet: ""
    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TweetCompose, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        newTweet: nextProps.newTweet.text
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var tweet = {
        text: this.state.text
      };
      this.props.composeTweet(tweet);
      this.setState({
        text: ''
      });
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      return function (e) {
        return _this2.setState({
          text: e.currentTarget.value
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "textarea",
        value: this.state.text,
        onChange: this.update(),
        placeholder: "Write your tweet..",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tweet_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: this.state.newTweet,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }));
    }
  }]);

  return TweetCompose;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TweetCompose);

/***/ }),

/***/ "./src/components/tweets/tweet_compose_container.js":
/*!**********************************************************!*\
  !*** ./src/components/tweets/tweet_compose_container.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_tweet_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/tweet_actions */ "./src/actions/tweet_actions.js");
/* harmony import */ var _tweet_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tweet_compose */ "./src/components/tweets/tweet_compose.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.session.user,
    newTweet: state.tweets.new
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    composeTweet: function composeTweet(data) {
      return dispatch(Object(_actions_tweet_actions__WEBPACK_IMPORTED_MODULE_1__["composeTweet"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_tweet_compose__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/tweets/tweets.js":
/*!*****************************************!*\
  !*** ./src/components/tweets/tweets.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _tweet_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tweet_box */ "./src/components/tweets/tweet_box.js");





var _jsxFileName = "/Users/d/Desktop/appacademy/BoyAndTiger/frontend/src/components/tweets/tweets.js";




var Tweet =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Tweet, _React$Component);

  function Tweet(props) {
    var _this;

    Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tweet);

    _this = Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Tweet).call(this, props));
    _this.state = {
      tweets: []
    };
    return _this;
  }

  Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tweet, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.fetchTweets();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newState) {
      this.setState({
        tweets: newState.tweets
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.tweets.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, "There are no Tweets");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "All Tweets"), this.state.tweets.map(function (tweet) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tweet_box__WEBPACK_IMPORTED_MODULE_7__["default"], {
            key: tweet._id,
            text: tweet.text,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          });
        }));
      }

      ;
    }
  }]);

  return Tweet;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Tweet));

/***/ }),

/***/ "./src/components/tweets/tweets_container.js":
/*!***************************************************!*\
  !*** ./src/components/tweets/tweets_container.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_tweet_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/tweet_actions */ "./src/actions/tweet_actions.js");
/* harmony import */ var _tweets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tweets */ "./src/components/tweets/tweets.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    tweets: Object.values(state.tweets.all)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchTweets: function fetchTweets() {
      return dispatch(Object(_actions_tweet_actions__WEBPACK_IMPORTED_MODULE_1__["fetchTweets"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_tweets__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/root */ "./src/components/root.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ "./src/store/store.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_session_api_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/session_api_util */ "./src/util/session_api_util.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions/session_actions */ "./src/actions/session_actions.js");
var _jsxFileName = "/Users/d/Desktop/appacademy/BoyAndTiger/frontend/src/index.js";







document.addEventListener('DOMContentLoaded', function () {
  var store;

  if (localStorage.jwtToken) {
    Object(_util_session_api_util__WEBPACK_IMPORTED_MODULE_5__["setAuthToken"])(localStorage.jwtToken);
    var decodedUser = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(localStorage.jwtToken);
    var preloadedState = {
      session: {
        isAuthenticated: true,
        user: decodedUser
      }
    };
    store = Object(_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])(preloadedState);
    var currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_6__["logout"])());
      window.location.href = '/login';
    }
  } else {
    store = Object(_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])({});
  }

  var root = document.getElementById('root');
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_root__WEBPACK_IMPORTED_MODULE_2__["default"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), root);
});

/***/ }),

/***/ "./src/reducers/errors_reducer.js":
/*!****************************************!*\
  !*** ./src/reducers/errors_reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _session_errors_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_errors_reducer */ "./src/reducers/session_errors_reducer.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  session: _session_errors_reducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/root_reducer.js":
/*!**************************************!*\
  !*** ./src/reducers/root_reducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _session_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_reducer */ "./src/reducers/session_reducer.js");
/* harmony import */ var _errors_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors_reducer */ "./src/reducers/errors_reducer.js");
/* harmony import */ var _tweets_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tweets_reducer */ "./src/reducers/tweets_reducer.js");




var RootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  session: _session_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  tweets: _tweets_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  errors: _errors_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (RootReducer);

/***/ }),

/***/ "./src/reducers/session_errors_reducer.js":
/*!************************************************!*\
  !*** ./src/reducers/session_errors_reducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/session_actions */ "./src/actions/session_actions.js");

var _nullErrors = [];

var SessionErrorsReducer = function SessionErrorsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _nullErrors;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_SESSION_ERRORS"]:
      return action.errors;

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_CURRENT_USER"]:
      return _nullErrors;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SessionErrorsReducer);

/***/ }),

/***/ "./src/reducers/session_reducer.js":
/*!*****************************************!*\
  !*** ./src/reducers/session_reducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/session_actions */ "./src/actions/session_actions.js");


var initialState = {
  isAuthenticated: false,
  user: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["RECEIVE_CURRENT_USER"]:
      return Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      });

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["RECEIVE_USER_LOGOUT"]:
      return {
        isAuthenticated: false,
        user: undefined
      };

    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__["RECEIVE_USER_SIGN_IN"]:
      return Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isSignedIn: true
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/tweets_reducer.js":
/*!****************************************!*\
  !*** ./src/reducers/tweets_reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_tweet_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/tweet_actions */ "./src/actions/tweet_actions.js");


var TweetsReducer = function TweetsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    all: {},
    user: {},
    new: undefined
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var newState = Object.assign({}, state);

  switch (action.type) {
    case _actions_tweet_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_TWEETS"]:
      newState.all = action.tweets.data;
      return newState;

    case _actions_tweet_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_USER_TWEETS"]:
      newState.user = action.tweets.data;
      return newState;

    case _actions_tweet_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_NEW_TWEET"]:
      newState.new = action.tweet.data;
      return newState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (TweetsReducer);

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/root_reducer */ "./src/reducers/root_reducer.js");





var configureStore = function configureStore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a));
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./src/util/route_util.js":
/*!********************************!*\
  !*** ./src/util/route_util.js ***!
  \********************************/
/*! exports provided: AuthRoute, ProtectedRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoute", function() { return AuthRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectedRoute", function() { return ProtectedRoute; });
/* harmony import */ var _Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/d/Desktop/appacademy/BoyAndTiger/frontend/src/util/route_util.js";




var Auth = function Auth(_ref) {
  var Component = _ref.component,
      path = _ref.path,
      loggedIn = _ref.loggedIn,
      exact = _ref.exact;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: path,
    exact: exact,
    render: function render(props) {
      return !loggedIn ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        to: "/tweets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

var Protected = function Protected(_ref2) {
  var Component = _ref2.component,
      loggedIn = _ref2.loggedIn,
      rest = Object(_Users_d_Desktop_appacademy_BoyAndTiger_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["component", "loggedIn"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], Object.assign({}, rest, {
    render: function render(props) {
      return loggedIn ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        to: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.session.isAuthenticated
  };
};

var AuthRoute = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Auth));
var ProtectedRoute = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Protected));

/***/ }),

/***/ "./src/util/session_api_util.js":
/*!**************************************!*\
  !*** ./src/util/session_api_util.js ***!
  \**************************************/
/*! exports provided: setAuthToken, signup, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthToken", function() { return setAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var setAuthToken = function setAuthToken(token) {
  if (token) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'];
  }
};
var signup = function signup(userData) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users/register', userData);
};
var login = function login(userData) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users/login', userData);
};

/***/ }),

/***/ "./src/util/tweet_api_util.js":
/*!************************************!*\
  !*** ./src/util/tweet_api_util.js ***!
  \************************************/
/*! exports provided: getTweets, getUserTweets, writeTweet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTweets", function() { return getTweets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserTweets", function() { return getUserTweets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeTweet", function() { return writeTweet; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var getTweets = function getTweets() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/tweets');
};
var getUserTweets = function getUserTweets(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/tweets/user/".concat(id));
};
var writeTweet = function writeTweet(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/tweets', data);
};

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/d/Desktop/appacademy/BoyAndTiger/frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/d/Desktop/appacademy/BoyAndTiger/frontend/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map