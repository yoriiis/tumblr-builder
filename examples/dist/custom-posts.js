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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/custom-posts/custom-posts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/tumblr.css":
/*!*************************!*\
  !*** ./dist/tumblr.css ***!
  \*************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./dist/tumblr.js":
/*!************************!*\
  !*** ./dist/tumblr.js ***!
  \************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
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
	"./templates/pages/home": "./src/scripts/templates/pages/home.js",
	"./templates/pages/home.js": "./src/scripts/templates/pages/home.js",
	"./templates/pages/post": "./src/scripts/templates/pages/post.js",
	"./templates/pages/post.js": "./src/scripts/templates/pages/post.js",
	"./templates/pages/tagged": "./src/scripts/templates/pages/tagged.js",
	"./templates/pages/tagged.js": "./src/scripts/templates/pages/tagged.js",
	"./templates/posts/audio": "./src/scripts/templates/posts/audio.js",
	"./templates/posts/audio.js": "./src/scripts/templates/posts/audio.js",
	"./templates/posts/chat": "./src/scripts/templates/posts/chat.js",
	"./templates/posts/chat.js": "./src/scripts/templates/posts/chat.js",
	"./templates/posts/link": "./src/scripts/templates/posts/link.js",
	"./templates/posts/link.js": "./src/scripts/templates/posts/link.js",
	"./templates/posts/photo": "./src/scripts/templates/posts/photo.js",
	"./templates/posts/photo.js": "./src/scripts/templates/posts/photo.js",
	"./templates/posts/quote": "./src/scripts/templates/posts/quote.js",
	"./templates/posts/quote.js": "./src/scripts/templates/posts/quote.js",
	"./templates/posts/text": "./src/scripts/templates/posts/text.js",
	"./templates/posts/text.js": "./src/scripts/templates/posts/text.js",
	"./templates/posts/video": "./src/scripts/templates/posts/video.js",
	"./templates/posts/video.js": "./src/scripts/templates/posts/video.js",
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _tumblr__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
/* harmony import */ var _styles_components_tags_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/tags.css */ "./src/styles/components/tags.css");
/* harmony import */ var _styles_components_tags_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_tags_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_card_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/card.css */ "./src/styles/components/card.css");
/* harmony import */ var _styles_components_card_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_card_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_types_photo_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/types/photo.css */ "./src/styles/types/photo.css");
/* harmony import */ var _styles_types_photo_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_types_photo_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_types_quote_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/types/quote.css */ "./src/styles/types/quote.css");
/* harmony import */ var _styles_types_quote_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_types_quote_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_types_chat_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/types/chat.css */ "./src/styles/types/chat.css");
/* harmony import */ var _styles_types_chat_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_types_chat_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_types_link_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/types/link.css */ "./src/styles/types/link.css");
/* harmony import */ var _styles_types_link_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_types_link_css__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./src/scripts/templates/pages/home.js":
/*!*********************************************!*\
  !*** ./src/scripts/templates/pages/home.js ***!
  \*********************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateHome; });
/**
 * Template for audio Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

/* prettier-ignore */
function TemplateHome({
  templates,
  tags,
  posts
}) {
  return `
        <nav class="nav">
                <ul>
                    <li>
                        <a class="btn" href="#_" title="Home">Home</a>
                    </li>
                </ul>
            </ul>
        </nav>
        <div class="tags card">
            <ul class="card-body">
                ${tags.map(tag => `
                    <li>
                        <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                    </li>
                `).join('')}
                <li></li>
            </ul>
        </div>
        <div class="posts" data-infinite-scroll>
            ${posts.map(post => templates[post.type](post)).join('')}
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/pages/post.js":
/*!*********************************************!*\
  !*** ./src/scripts/templates/pages/post.js ***!
  \*********************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplatePost; });
/**
 * Template for audio Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

/* prettier-ignore */
function TemplatePost({
  templates,
  posts,
  relatedPosts
}) {
  return `
        <nav class="nav">
                <ul>
                    <li>
                        <a class="btn" href="#_" title="Home">Home</a>
                    </li>
                </ul>
            </ul>
        </nav>
        <div class="posts">
            ${posts.map(post => templates[post.type](post)).join('')}
        </div>
        ${relatedPosts.length ? `
            <div class="relatedPosts">
                <h5 class="relatedPosts-title">Related posts</h5>
                ${relatedPosts.map(post => templates[post.type](post)).join('')}
            </div>
        ` : ''}
    `;
}

/***/ }),

/***/ "./src/scripts/templates/pages/tagged.js":
/*!***********************************************!*\
  !*** ./src/scripts/templates/pages/tagged.js ***!
  \***********************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateTagged; });
/**
 * Template for audio Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

/* prettier-ignore */
function TemplateTagged({
  templates,
  tags,
  posts
}) {
  return `
        <nav class="nav">
                <ul>
                    <li>
                        <a class="btn" href="#_" title="Home">Home</a>
                    </li>
                </ul>
            </ul>
        </nav>
        <div class="posts">
            ${posts.map(post => templates[post.type](post)).join('')}
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/posts/audio.js":
/*!**********************************************!*\
  !*** ./src/scripts/templates/posts/audio.js ***!
  \**********************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateAudio; });
/**
 * Template for audio Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

/* prettier-ignore */
function TemplateAudio(datas) {
  return `
        <div class="card card-audio" data-id="${datas.id_string}">
            <div class="card-iframe">
                ${datas.player}
            </div>
            <div class="card-body">
                <a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/posts/chat.js":
/*!*********************************************!*\
  !*** ./src/scripts/templates/posts/chat.js ***!
  \*********************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateChat; });
/**
 * Template for chat Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

/* prettier-ignore */
function TemplateChat(datas) {
  return `
        <div class="card card-chat" data-id="${datas.id_string}">
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
                                <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/posts/link.js":
/*!*********************************************!*\
  !*** ./src/scripts/templates/posts/link.js ***!
  \*********************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateLink; });
/**
 * Template for link Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

/* prettier-ignore */
function TemplateLink(datas) {
  return `
        <div class="card card-link" data-id="${datas.id_string}">
            <div class="card-body">
                <a href="${datas.url}" class="card-linkItem" title="${datas.title}">${datas.title}</a>
                ${datas.description}
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/posts/photo.js":
/*!**********************************************!*\
  !*** ./src/scripts/templates/posts/photo.js ***!
  \**********************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplatePhoto; });
/**
 * Template for photo/photoset Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

/* prettier-ignore */
function TemplatePhoto(datas) {
  const isPhotoset = datas.photos.length > 1;
  return `
        <div class="card card-photo${isPhotoset ? ` photoset photos-${datas.photos.length}` : ''}" data-id="${datas.id_string}" data-tags="${datas.tags.join(',').toLowerCase()}">
            <div class="card-body">
                <ul class="card-photos">
                ${datas.photos.map(photo => `
                        <li>
                            <img class="card-picture" src="${photo.original_size.url}" alt="${datas.summary}" />
                        </li>
                `).join('')}
                </ul>
                ${datas.summary ? `<a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>` : ''}
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/posts/quote.js":
/*!**********************************************!*\
  !*** ./src/scripts/templates/posts/quote.js ***!
  \**********************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateQuote; });
/**
 * Template for quote Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

/* prettier-ignore */
function TemplateQuote(datas) {
  return `
        <div class="card card-quote" data-id="${datas.id_string}">
            <div class="card-body">
                <blockquote class="card-blockquote">
                    <p>${datas.text}</p>
                    <footer class="blockquote-footer">${datas.source}</footer>
                </blockquote>
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/posts/text.js":
/*!*********************************************!*\
  !*** ./src/scripts/templates/posts/text.js ***!
  \*********************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateText; });
/**
 * Template for text Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

/* prettier-ignore */
function TemplateText(datas) {
  return `
        <div class="card card-text" data-id="${datas.id_string}">
            <div class="card-body">
                <a href="#/post/${datas.id_string}" class="card-title">${datas.title}</a>
                ${datas.body}
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/***/ }),

/***/ "./src/scripts/templates/posts/video.js":
/*!**********************************************!*\
  !*** ./src/scripts/templates/posts/video.js ***!
  \**********************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateVideo; });
/**
 * Template for video Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

/* prettier-ignore */
function TemplateVideo(datas) {
  return `
        <div class="card card-video" data-id="${datas.id_string}" data-tags="${datas.tags.join(',').toLowerCase()}">
            <div class="card-iframe">
                ${datas.player[2].embed_code}
            </div>
            <div class="card-body">
                <a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/scripts/styles.js");
function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import TemplateNav from './templates/components/template-nav'
// import TemplateTags from './templates/components/template-tags'
// import TemplatePageHome from './templates/pages/home'
// import TemplateRelatedPosts from './templates/components/template-related-posts'


/**
 * @license MIT
 * @name Tumblrjs
 * @version 2.0.0
 * @author: Yoriiis aka Joris DANIEL <joris.daniel@gmail.com>
 * @description:
 * {@link https://github.com/yoriiis/tumblr}
 * @copyright 2020 Joris DANIEL
 **/

class Tumblr {
  /**
   * @param {options}
   */
  constructor(options) {
    _defineProperty(this, "init", async () => {
      // Get JSON and push it in cache if option is active and if it's possible
      this.datas = await this.getAllDatas();

      if (this.datas.posts.length === 0) {
        return false;
      }

      this.jsonComplete = true;
      this.datas.tags = await this.getAllTags();
      this.totalPages = Math.ceil(this.datas.totalPosts / this.options.elementsPerPage);
      this.addEvents();
      this.templates = await this.getTemplates(); // Get current route

      this.currentRoute = this.getRoute();
      this.hashChanged();
      return this.datas;
    });

    _defineProperty(this, "hashChanged", async e => {
      const currentTag = this.getHashTag();
      const currentPostId = this.getHashPostId();
      const pageType = this.getPageType();
      let posts;

      if (pageType === 'tagged' && currentTag) {
        posts = await this.getDatasForTaggedPage(currentTag);
        this.buildPage(this.templates.pages.tagged({
          templates: this.templates.posts,
          posts
        }));
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
        this.buildPage(this.templates.pages.post({
          templates: this.templates.posts,
          posts,
          relatedPosts
        }));
      } else {
        posts = await this.getDatasForHomePage();
        this.buildPage(this.templates.pages.home({
          templates: this.templates.posts,
          tags: this.datas.tags,
          posts
        }));
      } // Reset class properties on page changes


      this.endPage = false;
      this.currentPage = 1;
    });

    _defineProperty(this, "onScroll", async e => {
      if (!this.isLoading && !this.endPage && this.getPageType() === 'home') {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getScrollTop"])() >= document.body.clientHeight - window.innerHeight - this.options.nearBottom) {
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

    _defineProperty(this, "loadNewPage", async () => {
      const posts = await this.getPostsByPageNumber(this.currentPage + 1);
      this.options.element.querySelector('[data-infinite-scroll]').insertAdjacentHTML('beforeend', `${posts.map(post => this.templates.posts[post.type](post)).join('')}`);
    });

    _defineProperty(this, "getTemplates", async () => {
      return {
        pages: await this.getTemplatesByType({
          keys: this.keysTemplatesPage,
          path: './templates/pages/',
          custom: this.options.templatesPages
        }),
        posts: await this.getTemplatesByType({
          keys: this.keysTemplatePosts,
          path: './templates/posts/',
          custom: this.options.templatesPosts
        })
      };
    });

    _defineProperty(this, "getTemplatesByType", async ({
      keys,
      path,
      custom
    }) => {
      const templates = {};
      const customTemplates = keys.filter(name => this.hasProperty(custom, name));
      customTemplates.forEach(name => {
        templates[name] = custom[name];
      });
      const defaultTemplates = keys.filter(name => !this.hasProperty(custom, name));
      const requestsDefaultTemplates = defaultTemplates.map(name => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__("./src/scripts sync recursive ^.*$")(`${path + name}`))));
      const responses = await Promise.all(requestsDefaultTemplates);
      responses.forEach((response, index) => {
        templates[defaultTemplates[index]] = response.default;
      });
      return templates;
    });

    _defineProperty(this, "getAllDatas", async e => {
      let datas;

      if (this.options.cache) {
        var getDataFromCache = window[this.options.cacheMethod].getItem(this.browserStorageKey);

        if (getDataFromCache === null) {
          datas = await this.getDataFromAPI();
          window[this.options.cacheMethod].setItem(this.browserStorageKey, JSON.stringify(datas));
        } else {
          datas = JSON.parse(window[this.options.cacheMethod].getItem(this.browserStorageKey));
        }
      } else {
        datas = await this.getDataFromAPI();
        window[this.options.cacheMethod].removeItem(this.browserStorageKey);
      }

      return datas;
    });

    _defineProperty(this, "getDataFromAPI", async () => {
      // Trigger the first request to get infos about totalPosts and calculate next requests
      const datasFirstRequest = await this.requestAPI(this.getAPIUrl());

      if (this.isValidResponse(datasFirstRequest)) {
        const totalPosts = datasFirstRequest.response.total_posts;
        const nbLoop = this.getNumberOfRequest(totalPosts);
        let posts = datasFirstRequest.response.posts;

        if (datasFirstRequest.response.posts.length && nbLoop) {
          const requests = []; // Do multiple loop according to nbLoop and options.limitData

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
      } else {
        // If the request failed, return empty results to prevent break the application
        return {
          totalPosts: 0,
          posts: []
        };
      }
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

    _defineProperty(this, "getPostsByPageNumber", async pageNumber => {
      const range = this.getRange(pageNumber);
      const datas = this.extractDatasFromLocalDatas(range);

      if (datas.length) {
        return datas;
      } else {
        const datas = await this.requestAPI(this.getAPIUrl({
          offset: range.start,
          limit: this.options.elementsPerPage
        }));
        return datas.response.posts;
      }
    });

    const userOptions = options || {};
    const defaultOptions = {
      element: null,
      host: '',
      apiKey: '',
      limitData: 250,
      cache: false,
      cacheMethod: 'sessionStorage',
      nearBottom: 350,
      elementsPerPage: 20,
      templatesPages: {},
      templatesPosts: {}
    }; // Merge default options with user options

    this.options = Object.assign(defaultOptions, userOptions); // No configurables params

    this.browserStorageKey = 'TumblrJsonData';
    this.endPage = false;
    this.isLoading = false;
    this.jsonComplete = false;
    this.currentPage = 1;
    this.nbPostPerRequest = 50;
    this.datas = {};
    this.keysTemplatesPage = ['home', 'post', 'tagged'];
    this.keysTemplatePosts = ['audio', 'chat', 'link', 'photo', 'quote', 'text', 'video'];
    this.onScroll = this.onScroll.bind(this);
    this.hashChanged = this.hashChanged.bind(this);
  }
  /**
   * Function to initialize the app
   */


  /**
   * Create event listeners
   */
  addEvents() {
    window.addEventListener('scroll', this.onScroll, false);
    window.addEventListener('hashchange', this.hashChanged, false);
  }
  /**
   * On hash changed event listener
   *
   * @param {Object} e Event listener datas
   */


  /**
   * Build the page
   *
   * @param {Array} posts List of posts for the current page
   * @param {Array} relatedPosts List of related posts if available
   */
  buildPage(html) {
    this.options.element.innerHTML = html;
  }
  /**
   * Load new page on infinite scroll
   * Get next posts from the API
   * Inject new content after current posts
   */


  /**
   * Set the route
   *
   * @param {String} route New value for the route
   */
  setRoute(route) {
    window.location.hash = route;
  }
  /**
   * Request datas from the API
   *
   * @param {String} url API url
   *
   * @returns {Promise<Object>} Promise results from the API
   */


  requestAPI(url) {
    return fetch(url).then(response => response.json());
  }
  /**
   * Check if the Response from the API is valid
   *
   * @param {Object} datas Response datas
   *
   * @returns {Boolean} Is a valid Response
   */


  isValidResponse(datas) {
    return datas.meta.status === 200;
  }
  /**
   * Extract a range of posts from browser storage if available
   *
   * @param {Object} range Start and end index for the range
   *
   * @returns {Array} List of corresponding posts
   */


  extractDatasFromLocalDatas(range) {
    return this.datas.posts.slice(range.start, range.end + 1);
  }
  /**
   * Get templates from constructor options if available (options.templates[type])
   * Else, dynamic import default template
   *
   * @returns {Object} List of template functions by type
   */


  /**
   * Build the Tumblr API url
   *
   * @param {String||Boolean} id Post id
   * @param {Integer} offset Offset for the query
   * @param {Integer} limit Limit of results for the query
   * @param {String} tag Filter by a unique post tag
   *
   * @returns {String} API url for the request
   */
  getAPIUrl({
    id = false,
    offset = 0,
    limit = this.options.limitData < this.nbPostPerRequest ? this.options.limitData : this.nbPostPerRequest,
    tag = false
  } = {}) {
    return `//api.tumblr.com/v2/blog/${this.options.host}/posts/?api_key=${this.options.apiKey}&limit=${limit}&notes_info=false&offset=${offset}${tag ? `&tag=${tag}` : ''}${id ? `&id=${id}` : ''}`;
  }
  /**
   * Get all datas from the API
   * Store datas in browser storage is option is enabled
   *
   * @returns {Object} Datas from the API
   */


  /**
   * Get number of requests necessary to reach options.limitDatas
   * without the first request datas
   *
   * @param {*} totalPosts Total of posts from the API
   *
   * @returns {Integer} Number of request to reach options.limitDatas
   */
  getNumberOfRequest(totalPosts) {
    return totalPosts <= this.options.limitData ? Math.ceil((totalPosts - this.nbPostPerRequest) / this.nbPostPerRequest) : Math.ceil((this.options.limitData - this.nbPostPerRequest) / this.nbPostPerRequest);
  }
  /**
   * Get datas for the homepage (first page only)
   * Datas are available in the class property
   *
   * @returns {Object} Posts datas for the homepage
   */


  getDatasForHomePage() {
    const maxPosts = this.datas.totalPosts < this.options.elementsPerPage ? this.datas.totalPosts : this.options.elementsPerPage;
    return this.datas.posts.slice(0, maxPosts);
  }
  /**
   * Get datas for the tagged page
   * Request the API to get posts
   *
   * @param {String} tag Tag to filter posts
   *
   * @returns {Object} Posts datas for the tagged page filter by tag
   */


  /**
   * Get the type of the current page according to the hash
   *
   * @returns {String} Page type (tagged, post, home)
   */
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
  /**
   * Get range index (start, end) to extract posts from local datas
   * according to the current page position and elements per page
   *
   * @param {Integer} pageNumber Pagz number
   *
   * @returns {Object} Start and end index for the range
   */


  getRange(pageNumber) {
    const previousPage = pageNumber > 1 ? pageNumber - 1 : pageNumber;
    return {
      start: previousPage * this.options.elementsPerPage,
      end: pageNumber * this.options.elementsPerPage - 1
    };
  }
  /**
   * Get tag from the hash
   *
   * @returns {String} Current tag
   */


  getHashTag() {
    return this.getRoute().split('/tagged/')[1];
  }
  /**
   * Get post id from the hash
   *
   * @returns {String} Current post id
   */


  getHashPostId() {
    return this.getRoute().split('/post/')[1];
  }
  /**
   * Get the current route (hash)
   *
   * @returns {String} Current hash
   */


  getRoute() {
    return window.location.hash.substr(1);
  } // Get a related posts

  /**
   * Get related posts
   *
   * @param {String} postId Pot id
   * @param {Integer} limit Limit of related posts results
   * @param {Array} tags Tags list of the current post
   * @param {Array} ignoreTags Ignore specific list of tags
   *
   * @returns {Array} List of related posts associated to the current post
   */


  getRelatedPosts({
    postId,
    limit = 3,
    tags = [],
    ignoreTags = []
  }) {
    // Get all tags from current post without ignore tags
    const tagsSource = tags.filter(tag => !ignoreTags.includes(tag)); // Get related posts

    const relatedPosts = this.datas.posts.filter(post => post.tags.some(tag => tagsSource.includes(tag) && post.id_string !== postId)); // Get random keys

    const randomKeys = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandoms"])(limit, 0, relatedPosts.length - 1) || [];

    if (relatedPosts.length < limit) {
      return relatedPosts;
    } else {
      // Extract random related posts
      return randomKeys.map(key => relatedPosts[key]);
    }
  }
  /**
   * Get all tags from local datas
   * Tags are sorted alphabetical
   * Tags are search only from local datas according to options.limitData posts
   *
   * @returns {Array} List of tags
   */


  getAllTags() {
    return this.jsonComplete ? this.datas.posts.filter(post => post.tags.length).flatMap(post => post.tags).map(tag => tag.toLowerCase()).filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos;
    }).sort() : [];
  }
  /**
   * Custom hasOwnProperty to prevent security issue (ESLint no-prototype-builtins)
   *
   * @param {Object} objectSource Object source to search the key
   * @param {String} key The key to search inside the object
   *
   * @returns {Boolean} Is the key present inside the object
   */


  hasProperty(objectSource, key) {
    return Object.prototype.hasOwnProperty.call(objectSource, key);
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
/**
 * Get current scroll position
 *
 * @returns {Integer} Scroll position
 */
function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
/**
 * Get a unique random number between min/max
 *
 * @param {*} numPicks Number of items to returns
 * @param {*} min Minimal value to start the random
 * @param {*} max Maximal value to end the random
 *
 * @returns {Array} Array of random numbers
 */

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

/***/ "./src/styles/types/link.css":
/*!***********************************!*\
  !*** ./src/styles/types/link.css ***!
  \***********************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/types/photo.css":
/*!************************************!*\
  !*** ./src/styles/types/photo.css ***!
  \************************************/
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

/***/ }),

/***/ "./examples/custom-posts/custom-posts.js":
/*!***********************************************!*\
  !*** ./examples/custom-posts/custom-posts.js ***!
  \***********************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_tumblr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/tumblr */ "./dist/tumblr.js");
/* harmony import */ var _dist_tumblr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_tumblr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dist_tumblr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dist/tumblr.css */ "./dist/tumblr.css");
/* harmony import */ var _dist_tumblr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dist_tumblr_css__WEBPACK_IMPORTED_MODULE_1__);


const tumblr = new _dist_tumblr__WEBPACK_IMPORTED_MODULE_0___default.a({
  element: document.querySelector('#tumblr-app'),
  host: 'yoriiis',
  apiKey: 'wjDj3SRz6JjM0fHgntNdwxOPYkhc2Qz4UgQJIRRpvjDUXBo49T',
  limitData: 250,
  cache: true,
  cacheMethod: 'sessionStorage',
  nearBottom: 350,
  elementsPerPage: 2,
  templatesPosts: {
    audio: datas => {
      /* prettier-ignore */
      return `
				<div class="customCard card card-audio override" data-id="${datas.id_string}">
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
    },
    chat: datas => {
      /* prettier-ignore */
      return `
				<div class="customCard card card-chat" data-id="${datas.id_string}">
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
										<a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
									</li>
							`).join('')}
						</ul>
					</div>
				</div>
			`;
    },
    link: datas => {
      /* prettier-ignore */
      return `
				<div class="customCard card card-link" data-id="${datas.id_string}">
					<div class="card-body">
						<a href="${datas.url}" class="card-link" title="${datas.title}">${datas.title}</a>
						${datas.description}
						<ul class="card-tags">
							${datas.tags.map(tag => `
									<li>
										<a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
									</li>
							`).join('')}
						</ul>
					</div>
				</div>
			`;
    },
    photo: datas => {
      const isPhotoset = datas.photos.length > 1;
      /* prettier-ignore */

      return `
				<div class="customCard card card-photo${isPhotoset ? ` photoset photos-${datas.photos.length}` : ''}" data-id="${datas.id_string}" data-tags="${datas.tags.join(',').toLowerCase()}">
					<div class="card-body">
						<ul class="card-photos">
						${datas.photos.map(photo => `
								<li>
									<img class="card-picture" src="${photo.original_size.url}" alt="${datas.summary}" />
								</li>
						`).join('')}
						</ul>
						${datas.summary ? `<a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>` : ''}
						<ul class="card-tags">
							${datas.tags.map(tag => `
									<li>
										<a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
									</li>
							`).join('')}
						</ul>
					</div>
				</div>
			`;
    },
    quote: datas => {
      /* prettier-ignore */
      return `
				<div class="customCard card card-quote" data-id="${datas.id_string}">
					<div class="card-body">
						<blockquote class="card-blockquote">
							<p>${datas.text}</p>
							<footer class="blockquote-footer">${datas.source}</footer>
						</blockquote>
						<ul class="card-tags">
							${datas.tags.map(tag => `
									<li>
										<a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
									</li>
							`).join('')}
						</ul>
					</div>
				</div>
			`;
    },
    text: datas => {
      /* prettier-ignore */
      return `
				<div class="customCard card card-text" data-id="${datas.id_string}">
					<div class="card-body">
						<a href="#/post/${datas.id_string}" class="card-title">${datas.title}</a>
						${datas.body}
						<ul class="card-tags">
							${datas.tags.map(tag => `
									<li>
										<a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
									</li>
							`).join('')}
						</ul>
					</div>
				</div>
			`;
    },
    video: datas => {
      /* prettier-ignore */
      return `
				<div class="customCard card card-video" data-id="${datas.id_string}" data-tags="${datas.tags.join(',').toLowerCase()}">
					<div class="card-iframe">
						${datas.player[2].embed_code}
					</div>
					<div class="card-body">
						<a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>
						<ul class="card-tags">
							${datas.tags.map(tag => `
									<li>
										<a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
									</li>
							`).join('')}
						</ul>
					</div>
				</div>
			`;
    }
  }
}); // Initialize the Tumblr from the instance

tumblr.init().then(response => {
  console.log(response); // No result, redirect to a fresh home with default host

  if (response === false) {
    window.sessionStorage.removeItem('tumblr');
  }
});

/***/ })

/******/ });
//# sourceMappingURL=custom-posts.js.map