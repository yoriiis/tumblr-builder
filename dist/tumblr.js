(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tumblr"] = factory();
	else
		root["tumblr"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts sync recursive ^.*$":
/*!*******************************!*\
  !*** ./src/scripts sync ^.*$ ***!
  \*******************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": "./src/scripts/index.js",
	"./": "./src/scripts/index.js",
	"./index": "./src/scripts/index.js",
	"./index.js": "./src/scripts/index.js",
	"./styles": "./src/scripts/styles.js",
	"./styles.js": "./src/scripts/styles.js",
	"./templates/components/template-nav": "./src/scripts/templates/components/template-nav.js",
	"./templates/components/template-nav.js": "./src/scripts/templates/components/template-nav.js",
	"./templates/components/template-posts": "./src/scripts/templates/components/template-posts.js",
	"./templates/components/template-posts.js": "./src/scripts/templates/components/template-posts.js",
	"./templates/components/template-related-posts": "./src/scripts/templates/components/template-related-posts.js",
	"./templates/components/template-related-posts.js": "./src/scripts/templates/components/template-related-posts.js",
	"./templates/components/template-tags": "./src/scripts/templates/components/template-tags.js",
	"./templates/components/template-tags.js": "./src/scripts/templates/components/template-tags.js",
	"./templates/types/template-audio": "./src/scripts/templates/types/template-audio.js",
	"./templates/types/template-audio.js": "./src/scripts/templates/types/template-audio.js",
	"./templates/types/template-chat": "./src/scripts/templates/types/template-chat.js",
	"./templates/types/template-chat.js": "./src/scripts/templates/types/template-chat.js",
	"./templates/types/template-link": "./src/scripts/templates/types/template-link.js",
	"./templates/types/template-link.js": "./src/scripts/templates/types/template-link.js",
	"./templates/types/template-photo": "./src/scripts/templates/types/template-photo.js",
	"./templates/types/template-photo.js": "./src/scripts/templates/types/template-photo.js",
	"./templates/types/template-quote": "./src/scripts/templates/types/template-quote.js",
	"./templates/types/template-quote.js": "./src/scripts/templates/types/template-quote.js",
	"./templates/types/template-text": "./src/scripts/templates/types/template-text.js",
	"./templates/types/template-text.js": "./src/scripts/templates/types/template-text.js",
	"./templates/types/template-video": "./src/scripts/templates/types/template-video.js",
	"./templates/types/template-video.js": "./src/scripts/templates/types/template-video.js",
	"./tumblr": "./src/scripts/tumblr.js",
	"./tumblr.js": "./src/scripts/tumblr.js",
	"./utils": "./src/scripts/utils.js",
	"./utils.js": "./src/scripts/utils.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/scripts sync recursive ^.*$";

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tumblr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tumblr */ "./src/scripts/tumblr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tumblr", function() { return _tumblr__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/scripts/styles.js":
/*!*******************************!*\
  !*** ./src/scripts/styles.js ***!
  \*******************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/base.css */ "./src/styles/base.css");
/* harmony import */ var _styles_base_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_base_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_nav_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/nav.css */ "./src/styles/components/nav.css");
/* harmony import */ var _styles_components_nav_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_nav_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_tags_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/tags.css */ "./src/styles/components/tags.css");
/* harmony import */ var _styles_components_tags_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_tags_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_components_card_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/card.css */ "./src/styles/components/card.css");
/* harmony import */ var _styles_components_card_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_card_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_components_related_posts_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/components/related-posts.css */ "./src/styles/components/related-posts.css");
/* harmony import */ var _styles_components_related_posts_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_related_posts_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_types_chat_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/types/chat.css */ "./src/styles/types/chat.css");
/* harmony import */ var _styles_types_chat_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_types_chat_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_types_quote_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/types/quote.css */ "./src/styles/types/quote.css");
/* harmony import */ var _styles_types_quote_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_types_quote_css__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./src/scripts/templates/components/template-nav.js":
/*!**********************************************************!*\
  !*** ./src/scripts/templates/components/template-nav.js ***!
  \**********************************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateNav; });
/* prettier-ignore */
function TemplateNav() {
  return `
        <nav class="nav">
                <ul>
                    <li>
                        <a class="btn" href="#_" title="Home">Home</a>
                    </li>
                </ul>
            </ul>
        </nav>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/components/template-posts.js":
/*!************************************************************!*\
  !*** ./src/scripts/templates/components/template-posts.js ***!
  \************************************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplatePosts; });
/* prettier-ignore */
function TemplatePosts({
  posts = [],
  templates
}) {
  // console.log(getTemplateByType('text'))
  return posts.map(post => templates[post.type](post)).join('');
}

/***/ }),

/***/ "./src/scripts/templates/components/template-related-posts.js":
/*!********************************************************************!*\
  !*** ./src/scripts/templates/components/template-related-posts.js ***!
  \********************************************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateRelatedPosts; });
/* prettier-ignore */
function TemplateRelatedPosts({
  posts = [],
  templates
}) {
  return `
        <div class="relatedPosts">
            <h5 class="relatedPosts-title">Related posts</h5>
            ${posts.map(post => templates[post.type](post)).join('')}
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/components/template-tags.js":
/*!***********************************************************!*\
  !*** ./src/scripts/templates/components/template-tags.js ***!
  \***********************************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateTags; });
/* prettier-ignore */
function TemplateTags(datas) {
  return `
        <div class="tags card">
            <ul class="card-body">
                ${datas.map(tag => `
                    <li>
                        <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                    </li>
                `).join('')}
                <li></li>
            </ul>
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/types/template-audio.js":
/*!*******************************************************!*\
  !*** ./src/scripts/templates/types/template-audio.js ***!
  \*******************************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateAudio; });
/* prettier-ignore */
function TemplateAudio(datas) {
  return `
        <div class="card" data-type="audio" data-id="${datas.id_string}">
            <div class="card-iframe">
                ${datas.player}
            </div>
            <div class="card-body">
                <a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="${datas.blog.url}tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/types/template-chat.js":
/*!******************************************************!*\
  !*** ./src/scripts/templates/types/template-chat.js ***!
  \******************************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateChat; });
/* prettier-ignore */
function TemplateChat(datas) {
  return `
        <div class="card" data-type="chat" data-id="${datas.id_string}">
            <div class="card-body">
                <a href="#/post/${datas.id_string}" class="card-title">${datas.title}</a>
                <ul class="card-conversations">
                    ${datas.dialogue.map(line => `
                            <li>
                                <strong>${line.label}</strong>&nbsp;&nbsp;
                                ${line.phrase}
                            </li>
                    `).join('')}
                </ul>
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="${datas.blog.url}tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/types/template-link.js":
/*!******************************************************!*\
  !*** ./src/scripts/templates/types/template-link.js ***!
  \******************************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateLink; });
/* prettier-ignore */
function TemplateLink(datas) {
  return `
        <div class="card" data-type="link" data-id="${datas.id_string}">
            <div class="card-body">
                <a href="${datas.url}" class="card-link" title="${datas.title}">${datas.title}</a>
                ${datas.description}
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="${datas.blog.url}tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/types/template-photo.js":
/*!*******************************************************!*\
  !*** ./src/scripts/templates/types/template-photo.js ***!
  \*******************************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplatePhoto; });
/* prettier-ignore */
function TemplatePhoto(datas) {
  return `
        <div class="card" data-type="photo" data-id="${datas.id_string}" data-tags="${datas.tags.join(',').toLowerCase()}">
            <div class="card-body">
                <img class="card-picture" src="${datas.photos[0].original_size.url}" alt="${datas.summary}" />
                <a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="${datas.blog.url}tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/types/template-quote.js":
/*!*******************************************************!*\
  !*** ./src/scripts/templates/types/template-quote.js ***!
  \*******************************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateQuote; });
/* prettier-ignore */
function TemplateQuote(datas) {
  return `
        <div class="card" data-type="quote" data-id="${datas.id_string}">
            <div class="card-body">
                <blockquote class="card-blockquote">
                    <p>${datas.text}</p>
                    <footer class="blockquote-footer">${datas.source}</footer>
                </blockquote>
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="${datas.blog.url}tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/types/template-text.js":
/*!******************************************************!*\
  !*** ./src/scripts/templates/types/template-text.js ***!
  \******************************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateText; });
/* prettier-ignore */
function TemplateText(datas) {
  return `
        <div class="card" data-type="text" data-id="${datas.id_string}">
            <div class="card-body">
                <a href="#/post/${datas.id_string}" class="card-title">${datas.title}</a>
                ${datas.body}
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="${datas.blog.url}tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/types/template-video.js":
/*!*******************************************************!*\
  !*** ./src/scripts/templates/types/template-video.js ***!
  \*******************************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateVideo; });
/* prettier-ignore */
function TemplateVideo(datas) {
  return `
        <div class="card" data-type="video" data-id="${datas.id_string}" data-tags="${datas.tags.join(',').toLowerCase()}">
            <div class="card-iframe">
                ${datas.player[2].embed_code}
            </div>
            <div class="card-body">
                <a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="${datas.blog.url}tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/tumblr.js":
/*!*******************************!*\
  !*** ./src/scripts/tumblr.js ***!
  \*******************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tumblr; });
/* harmony import */ var _templates_components_template_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/components/template-nav */ "./src/scripts/templates/components/template-nav.js");
/* harmony import */ var _templates_components_template_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/components/template-tags */ "./src/scripts/templates/components/template-tags.js");
/* harmony import */ var _templates_components_template_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/components/template-posts */ "./src/scripts/templates/components/template-posts.js");
/* harmony import */ var _templates_components_template_related_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/components/template-related-posts */ "./src/scripts/templates/components/template-related-posts.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/scripts/styles.js");
function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Tumblr {
  constructor(options) {
    _defineProperty(this, "init", async () => {
      // Get JSON and push it in cache if option is active and if it's possible
      if (this.options.useAPI) {
        this.datas = await this.getAllDatas();
        this.jsonComplete = true;
        this.datas.tags = await this.getAllTags();
        this.totalPages = Math.ceil(this.datas.totalPosts / this.options.elementPerPage);
      }

      console.log(this.datas);
      this.addEvents();
      this.templates = await this.getTemplates(); // Get current route

      this.currentRoute = this.getRoute();
      this.onHashChanged(); // this.buildPage(this.getDatasForHomePage())
    });

    _defineProperty(this, "getTemplates", async () => {
      const templates = {};
      const typeAvailable = this.types.filter(type => this.hasProperty(this.options.templates, type));
      typeAvailable.forEach(type => {
        templates[type] = this.options.templates[type];
      });
      const typeUnavailable = this.types.filter(type => !this.hasProperty(this.options.templates, type));
      const requests = typeUnavailable.map(type => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__("./src/scripts sync recursive ^.*$")(`${'./templates/types/template-' + type}`))));
      const responses = await Promise.all(requests);
      responses.forEach((response, index) => {
        templates[typeUnavailable[index]] = response.default;
      });
      return templates;
    });

    _defineProperty(this, "getDatasForTaggedPage", async tag => {
      const datas = await this.requestAPI(this.getAPIUrl({
        tag: tag
      }));
      return datas && datas.response ? datas.response.posts : [];
    });

    _defineProperty(this, "getDatasForPostPage", async id => {
      const datas = await this.requestAPI(this.getAPIUrl({
        id: id
      }));
      return datas && datas.response ? datas.response.posts : [];
    });

    _defineProperty(this, "onHashChanged", async e => {
      const currentTag = this.getHashTag();
      const currentPostId = this.getHashPostId();
      const pageType = this.getPageType();
      let posts;

      if (pageType === 'tagged' && currentTag && this.hashIsValid(currentTag)) {
        posts = await this.getDatasForTaggedPage(currentTag);
        this.buildPage({
          posts
        });
      } else if (pageType === 'post' && currentPostId) {
        posts = await this.getDatasForPostPage(currentPostId);

        if (posts.length > 1) {
          this.setRoute('');
          return;
        }

        const relatedPosts = this.getRelatedPosts({
          postId: currentPostId,
          tags: posts[0].tags,
          limit: 3
        });
        this.buildPage({
          posts,
          relatedPosts
        });
      } else {
        posts = await this.getDatasForHomePage();
        this.buildPage({
          posts
        });
      } // Reset class properties on page changes


      this.endPage = false;
      this.currentPage = 1;
    });

    _defineProperty(this, "onScroll", async e => {
      if (!this.isLoading && this.infiniteScroll && !this.endPage && this.getPageType() === 'home') {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getScrollTop"])() >= document.body.clientHeight - window.innerHeight - this.options.nearBottom) {
          this.isLoading = true;

          if (this.currentPage >= this.totalPages) {
            this.endPage = true;
          } else {
            await this.loadNewPage();
            this.currentPage++;
          }

          this.isLoading = false;
        }
      }
    });

    _defineProperty(this, "loadNewPage", async datas => {
      this.options.element.querySelector('.posts').insertAdjacentHTML('beforeend', Object(_templates_components_template_posts__WEBPACK_IMPORTED_MODULE_2__["default"])({
        posts: await this.getPostsByPageNumber(this.currentPage + 1),
        templates: this.templates
      }));
    });

    _defineProperty(this, "getAllDatas", async e => {
      let datas; // If cache is true

      if (this.options.cache) {
        // Try to get JSON in cache
        var getDataFromCache = window[this.options.cacheMethod].getItem(this.browserStorageKey); // If doesn't exist, get the JSON with limit (this.options.limitData)

        if (getDataFromCache === null) {
          datas = await this.getDataFromAPI();
          window[this.options.cacheMethod].setItem(this.browserStorageKey, JSON.stringify(datas));
        } else {
          // If exist in web storage, get it
          datas = JSON.parse(window[this.options.cacheMethod].getItem(this.browserStorageKey));
        }
      } else {
        // If cache is false or browser doesn't support web storage
        datas = await this.getDataFromAPI(); // Remove data in web storage if already exist

        window[this.options.cacheMethod].removeItem(this.browserStorageKey);
      }

      return datas;
    });

    _defineProperty(this, "getDataFromAPI", async () => {
      const datasFirstRequest = await this.requestAPI(this.getAPIUrl());
      const totalPosts = datasFirstRequest.response.total_posts;
      const nbLoop = this.getNumberOfRequest(totalPosts);
      let posts = datasFirstRequest.response.posts;

      if (datasFirstRequest.response.posts.length && nbLoop) {
        const requests = []; // Else do multiple loop to get data in JSON (limit this.options.limitData)

        for (var i = 0; i < nbLoop; i++) {
          requests.push(this.requestAPI(this.getAPIUrl({
            offset: this.nbPostPerRequest + this.nbPostPerRequest * i
          })));
        }

        await Promise.all(requests).then(responses => {
          responses.forEach(response => {
            posts = posts.concat(response.response.posts);
          });
        });
      }

      return {
        totalPosts,
        posts
      };
    });

    _defineProperty(this, "getPostsByPageNumber", async pageNumber => {
      const range = this.getRange(pageNumber);
      const datas = this.extractDatasFromLocalDatas(range);

      if (datas.length) {
        return datas;
      } else {
        const datas = await this.requestAPI(this.getAPIUrl({
          offset: range.start,
          limit: this.options.elementPerPage
        }));
        return datas.response.posts;
      }
    });

    const userOptions = options || {};
    const defaultOptions = {
      host: '',
      useAPI: false,
      keyAPI: '',
      limitData: 250,
      cache: false,
      cacheMethod: 'sessionStorage',
      element: '',
      nearBottom: 350,
      elementPerPage: 20,
      templates: {}
    }; // Merge default options with user options

    this.options = Object.assign(defaultOptions, userOptions); // No configurables params

    this.browserStorageKey = `${this.options.host.split('.')[0]}TumblrJsonData`;
    this.infiniteScroll = true;
    this.endPage = false;
    this.isLoading = false;
    this.jsonComplete = false;
    this.currentPage = 1;
    this.nbPostPerRequest = 50;
    this.datas = {};
    this.types = ['audio', 'chat', 'link', 'photo', 'quote', 'text', 'video'];
    this.onScroll = this.onScroll.bind(this);
    this.onHashChanged = this.onHashChanged.bind(this);
  }

  hasProperty(element, attribute) {
    return Object.prototype.hasOwnProperty.call(element, attribute);
  }

  getDatasForHomePage() {
    const maxPosts = this.datas.totalPosts < this.options.elementPerPage ? this.datas.totalPosts : this.options.elementPerPage;
    return this.datas.posts.slice(0, maxPosts);
  }

  hashIsValid(tag) {
    return this.datas.tags.find(item => item === tag);
  }
  /**
   * Set the route
   *
   * @returns {String} route New value for the route
   */


  setRoute(route) {
    window.location.hash = route;
  }

  addEvents() {
    window.addEventListener('scroll', this.onScroll, false);
    window.addEventListener('hashchange', this.onHashChanged, false);
  }

  buildPage({
    posts,
    relatedPosts = []
  }) {
    const displayTags = this.getPageType() === 'home';
    /* prettier-ignore */

    this.options.element.innerHTML = `
			${Object(_templates_components_template_nav__WEBPACK_IMPORTED_MODULE_0__["default"])()}
			${displayTags ? Object(_templates_components_template_tags__WEBPACK_IMPORTED_MODULE_1__["default"])(this.datas.tags) : ''}
			<div class="posts">
				${Object(_templates_components_template_posts__WEBPACK_IMPORTED_MODULE_2__["default"])({
      posts: posts,
      templates: this.templates
    })}
			</div>
			${relatedPosts.length ? Object(_templates_components_template_related_posts__WEBPACK_IMPORTED_MODULE_3__["default"])({
      posts: relatedPosts,
      templates: this.templates
    }) : ''}
		`;
  }

  getAPIUrl({
    id = false,
    offset = 0,
    limit = this.options.limitData < this.nbPostPerRequest ? this.options.limitData : this.nbPostPerRequest,
    tag = false
  } = {}) {
    return `//api.tumblr.com/v2/blog/${this.options.host}/posts/?api_key=${this.options.keyAPI}&limit=${limit}&notes_info=false&offset=${offset}${tag ? `&tag=${tag}` : ''}${id ? `&id=${id}` : ''}`;
  }

  requestAPI(url) {
    return fetch(url).then(response => response.json());
  }

  getNumberOfRequest(totalPosts) {
    return totalPosts <= this.options.limitData ? Math.ceil((totalPosts - this.nbPostPerRequest) / this.nbPostPerRequest) : Math.ceil((this.options.limitData - this.nbPostPerRequest) / this.nbPostPerRequest);
  } // Get all the json with a limit


  extractDatasFromLocalDatas(range) {
    return this.datas.posts.slice(range.start, range.end + 1);
  }

  getRange(pageNumber) {
    const previousPage = pageNumber > 1 ? pageNumber - 1 : pageNumber;
    return {
      start: previousPage * this.options.elementPerPage,
      end: pageNumber * this.options.elementPerPage - 1
    };
  }

  getHashTag() {
    return this.getRoute().split('/tagged/')[1];
  }

  getHashPostId() {
    return this.getRoute().split('/post/')[1];
  }

  getRoute() {
    return window.location.hash.substr(1);
  } // Get a related posts


  getRelatedPosts({
    postId,
    limit = 3,
    tags = [],
    ignoreTags = []
  }) {
    // Get all tags from current post without ignore tags
    const tagsSource = tags.filter(tag => !ignoreTags.includes(tag)); // Get related posts

    const relatedPosts = this.datas.posts.filter(post => post.tags.some(tag => tagsSource.includes(tag) && post.id_string !== postId)); // Get random keys

    const randomKeys = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getRandoms"])(limit, 0, relatedPosts.length - 1) || [];

    if (relatedPosts.length < limit) {
      return relatedPosts;
    } else {
      // Extract random related posts
      return randomKeys.map(key => relatedPosts[key]);
    }
  } // Get a sort tab of all tags


  getAllTags(e) {
    return this.jsonComplete ? this.datas.posts.filter(post => post.tags.length).flatMap(post => post.tags).map(tag => tag.toLowerCase()).filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos;
    }).sort() : [];
  }

  getPageType() {
    const hash = this.getRoute();

    if (hash.indexOf('/tagged/') !== -1) {
      return 'tagged';
    } else if (hash.indexOf('/post/') !== -1) {
      return 'post';
    } else {
      return 'home';
    }
  }

}

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollTop", function() { return getScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandoms", function() { return getRandoms; });
function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
} // Get a unique random number between min/max

function getRandoms(numPicks, min, max) {
  var len = max - min + 1;
  var nums = new Array(len);
  var selections = [];
  var i = 0;
  var j = 0;

  if (min === 0) {
    if (numPicks > max + 1) numPicks = max;
  } else {
    if (numPicks > max - min + 1) numPicks = max;
  } // Initialize the array


  for (i = 0; i < len; i++) {
    nums[i] = i + min;
  } // Randomly pick one from the array


  for (j = 0; j < numPicks; j++) {
    var index = Math.floor(Math.random() * nums.length);
    selections.push(nums[index]);
    nums.splice(index, 1);
  }

  return selections;
}

/***/ }),

/***/ "./src/styles/base.css":
/*!*****************************!*\
  !*** ./src/styles/base.css ***!
  \*****************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/components/card.css":
/*!****************************************!*\
  !*** ./src/styles/components/card.css ***!
  \****************************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/components/nav.css":
/*!***************************************!*\
  !*** ./src/styles/components/nav.css ***!
  \***************************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/components/related-posts.css":
/*!*************************************************!*\
  !*** ./src/styles/components/related-posts.css ***!
  \*************************************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/components/tags.css":
/*!****************************************!*\
  !*** ./src/styles/components/tags.css ***!
  \****************************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/types/chat.css":
/*!***********************************!*\
  !*** ./src/styles/types/chat.css ***!
  \***********************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/types/quote.css":
/*!************************************!*\
  !*** ./src/styles/types/quote.css ***!
  \************************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});
//# sourceMappingURL=tumblr.js.map