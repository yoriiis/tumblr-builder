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
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/demo.js");
/******/ })
/************************************************************************/
/******/ ({

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

/* harmony import */ var _templates_template_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/template-audio */ "./src/scripts/templates/template-audio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateAudio", function() { return _templates_template_audio__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _templates_template_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/template-chat */ "./src/scripts/templates/template-chat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateChat", function() { return _templates_template_chat__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _templates_template_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/template-link */ "./src/scripts/templates/template-link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateLink", function() { return _templates_template_link__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _templates_template_photo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/template-photo */ "./src/scripts/templates/template-photo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplatePhoto", function() { return _templates_template_photo__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _templates_template_quote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/template-quote */ "./src/scripts/templates/template-quote.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateQuote", function() { return _templates_template_quote__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _templates_template_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/template-text */ "./src/scripts/templates/template-text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateText", function() { return _templates_template_text__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _templates_template_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/template-video */ "./src/scripts/templates/template-video.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateVideo", function() { return _templates_template_video__WEBPACK_IMPORTED_MODULE_7__["default"]; });










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
/* harmony import */ var _styles_default_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/default-style.css */ "./src/styles/default-style.css");
/* harmony import */ var _styles_default_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_default_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_card_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/card.css */ "./src/styles/card.css");
/* harmony import */ var _styles_card_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_card_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_chat_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/chat.css */ "./src/styles/chat.css");
/* harmony import */ var _styles_chat_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_chat_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_quote_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/quote.css */ "./src/styles/quote.css");
/* harmony import */ var _styles_quote_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_quote_css__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./src/scripts/templates/template-audio.js":
/*!*************************************************!*\
  !*** ./src/scripts/templates/template-audio.js ***!
  \*************************************************/
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
                <h5 class="card-title">${datas.summary}</h5>
                <a class="btn" href="#/post/${datas.id_string}" title="See more">See more</a>
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

/***/ "./src/scripts/templates/template-chat.js":
/*!************************************************!*\
  !*** ./src/scripts/templates/template-chat.js ***!
  \************************************************/
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
                <h5 class="card-title">${datas.title}</h5>
                <ul class="card-conversations">
                    ${datas.dialogue.map(line => `
                            <li>
                                <strong>${line.label}</strong>&nbsp;&nbsp;
                                ${line.phrase}
                            </li>
                    `).join('')}
                </ul>
                <a class="btn" href="#/post/${datas.id_string}" title="See more">See more</a>
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

/***/ "./src/scripts/templates/template-link.js":
/*!************************************************!*\
  !*** ./src/scripts/templates/template-link.js ***!
  \************************************************/
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
                <a class="btn" href="#/post/${datas.id_string}" title="See more">See more</a>
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

/***/ "./src/scripts/templates/template-photo.js":
/*!*************************************************!*\
  !*** ./src/scripts/templates/template-photo.js ***!
  \*************************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplatePhoto; });
/* prettier-ignore */
function TemplatePhoto(datas) {
  return `
        <div class="card" data-type="photo" data-id="${datas.id_string}">
            <div class="card-body">
                <img class="card-picture" src="${datas.photos[0].original_size.url}" alt="${datas.summary}" />
                <h5 class="card-title">${datas.summary}</h5>
                <a class="btn" href="#/post/${datas.id_string}" title="See more">See more</a>
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

/***/ "./src/scripts/templates/template-quote.js":
/*!*************************************************!*\
  !*** ./src/scripts/templates/template-quote.js ***!
  \*************************************************/
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
                <a class="btn" href="#/post/${datas.id_string}" title="See more">See more</a>
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

/***/ "./src/scripts/templates/template-text.js":
/*!************************************************!*\
  !*** ./src/scripts/templates/template-text.js ***!
  \************************************************/
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
                <h5 class="card-title">${datas.title}</h5>
                ${datas.body}
                <a class="btn" href="#/post/${datas.id_string}" title="See more">See more</a>
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

/***/ "./src/scripts/templates/template-video.js":
/*!*************************************************!*\
  !*** ./src/scripts/templates/template-video.js ***!
  \*************************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateVideo; });
/* prettier-ignore */
function TemplateVideo(datas) {
  return `
        <div class="card" data-type="video" data-id="${datas.id_string}">
            <div class="card-iframe">
                ${datas.player[2].embed_code}
            </div>
            <div class="card-body">
                <h5 class="card-title">${datas.summary}</h5>
                <a class="btn" href="#/post/${datas.id_string}" title="See more">See more</a>
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
/* harmony import */ var _templates_template_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/template-text */ "./src/scripts/templates/template-text.js");
/* harmony import */ var _templates_template_photo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/template-photo */ "./src/scripts/templates/template-photo.js");
/* harmony import */ var _templates_template_quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/template-quote */ "./src/scripts/templates/template-quote.js");
/* harmony import */ var _templates_template_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/template-video */ "./src/scripts/templates/template-video.js");
/* harmony import */ var _templates_template_audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/template-audio */ "./src/scripts/templates/template-audio.js");
/* harmony import */ var _templates_template_chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/template-chat */ "./src/scripts/templates/template-chat.js");
/* harmony import */ var _templates_template_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/template-link */ "./src/scripts/templates/template-link.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./src/scripts/styles.js");
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
      this.addEvents(); // Get current route

      this.currentRoute = this.getRoute(); // Init the router with the default route

      if (this.currentRoute !== '') {
        this.onHashChanged();
      } else {
        this.setRoute('');
      }

      this.buildPage(this.getDatasForHomePage());
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
      let datas;

      if (pageType === 'tagged' && currentTag && this.hashIsValid(currentTag)) {
        console.log('goto tag => ', currentTag);
        datas = await this.getDatasForTaggedPage(currentTag);
      } else if (pageType === 'post' && currentPostId) {
        console.log('goto post => ', currentPostId);
        datas = await this.getDatasForPostPage(currentPostId);

        if (datas.length > 1) {
          console.log('goto redirect home');
          this.setRoute('');
          return;
        }
      } else {
        console.log('goto home');
        datas = await this.getDatasForHomePage();
      } // Reset class properties on page changes


      this.endPage = false;
      this.currentPage = 1;
      this.buildPage(datas);
    });

    _defineProperty(this, "onScroll", async e => {
      if (!this.isLoading && this.infiniteScroll && !this.endPage && this.getPageType() === 'home') {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getScrollTop"])() >= document.body.clientHeight - window.innerHeight - this.options.nearBottom) {
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
      this.options.element.querySelector('.posts').insertAdjacentHTML('beforeend', this.getHTMLNewPosts((await this.getPostsByPageNumber(this.currentPage + 1))));
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
      elementPerPage: 20
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
    this.onScroll = this.onScroll.bind(this);
    this.onHashChanged = this.onHashChanged.bind(this);
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

  buildPage(datas) {
    /* prettier-ignore */
    this.options.element.innerHTML = `
			<a class="btn" href="#_" title="Home">Home</a>
			<div class="tags">
				<ul>
					${this.datas.tags.map(tag => `
						<li>
							<a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
						</li>
					`).join('')}
					<li></li>
				</ul>
			</div>
			<div class="posts">${this.getHTMLNewPosts(datas)}</div>
		`; // ${window.location.protocol}//${this.options.host}/tagged/${tag}
  }

  getHTMLNewPosts(datas) {
    let html = '';
    datas.forEach(post => {
      html += this.getTemplateByType(post.type)(post);
    });
    return html;
  }

  getTemplateByType(type) {
    if (type === 'text') {
      return _templates_template_text__WEBPACK_IMPORTED_MODULE_0__["default"].bind(this);
    } else if (type === 'photo') {
      return _templates_template_photo__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    } else if (type === 'quote') {
      return _templates_template_quote__WEBPACK_IMPORTED_MODULE_2__["default"].bind(this);
    } else if (type === 'video') {
      return _templates_template_video__WEBPACK_IMPORTED_MODULE_3__["default"].bind(this);
    } else if (type === 'audio') {
      return _templates_template_audio__WEBPACK_IMPORTED_MODULE_4__["default"].bind(this);
    } else if (type === 'chat') {
      return _templates_template_chat__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this);
    } else if (type === 'link') {
      return _templates_template_link__WEBPACK_IMPORTED_MODULE_6__["default"].bind(this);
    }
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


  getRelatedPosts(options) {
    var listPosts = [];
    var listID = [];
    var randomTagsArray = [];
    var randomArray = [];
    var currentID = 0;
    var tags = [];
    var posts = null;
    var params = Object.assign({
      limit: 3,
      ignoreTag: null
    }, options);

    if (!this.options.useAPI) {
      console.log('Related post use API, please active useAPI in params.');
      return;
    } // If current page is different of page post or json not complete, stop


    if (this.checkPage() !== 'post' || !this.jsonComplete) {
      console.log('Related post can only be add on post page when _Tumblr.events.JSON_COMPLETE is published');
      return;
    } // Get tags of current post


    tags = this.getTagsPost(); // If return null, idPost is unknown in the cache

    if (tags === null) {
      console.log('The current post (' + this.getIdPostPage() + ') has no tag');
      return;
    } // If tag must be ignore


    if (params.ignoreTag != null && tags.length > 1) {
      for (let l = 0, lengthTagIgnore = tags.length; l < lengthTagIgnore; l++) {
        if (params.ignoreTag === tags[l]) {
          tags.splice(l, 1);
        }
      }
    } // Get current ID post page


    currentID = this.getIdPostPage(); // Loop in all posts

    for (var i = 0, lengthPosts = this.data.posts.length; i < lengthPosts; i++) {
      posts = this.data.posts[i]; // If post has tags

      if (typeof posts.tags !== 'undefined') {
        // Loop in tags of every post
        for (var j = 0, lengthTag = posts.tags.length; j < lengthTag; j++) {
          // Loop in tags of current post
          for (var k = 0, lengthCurrentTag = tags.length; k < lengthCurrentTag; k++) {
            if (posts.tags[j].toLowerCase() === tags[k].toLowerCase() && posts.id !== currentID && !listID.includes(posts.id)) {
              listPosts.push(posts);
              listID.push(posts.id);
            }
          }
        }
      }
    } // Zero tag return


    if (listPosts.length) {
      // Get an array of random unique number
      randomArray = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getRandoms"])(params.limit, 0, parseInt(listPosts.length) - 1); // Return all tag

      if (listPosts.length < params.limit) {
        randomTagsArray.posts = listPosts;
      } else {
        // Return random
        randomTagsArray.posts = [];

        for (let l = 0, lengthRandom = randomArray.length; l < lengthRandom; l++) {
          randomTagsArray.posts.push(listPosts[randomArray[l]]);
        }
      }

      return randomTagsArray;
    }
  } // Get a sort tab of all tags


  getAllTags(e) {
    return this.jsonComplete ? this.datas.posts.filter(post => post.tags.length).flatMap(post => post.tags).map(tag => tag.toLowerCase()).filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos;
    }).sort() : [];
  } // Get a list of tags


  getTagsPost(idPost) {
    if (!this.options.useAPI) {
      console.log('List of tags of posts use API, please active useAPI in params.');
      return;
    }

    var listTags = [];
    if (typeof idPost === 'undefined') idPost = this.getIdPostPage();

    for (var i = 0, lengthPost = this.data.posts.length; i < lengthPost; i++) {
      if (this.data.posts[i].id === idPost) {
        if (typeof this.data.posts[i].tags === 'undefined') return;

        for (var j = 0, l = this.data.posts[i].tags.length; j < l; j++) {
          listTags.push(this.data.posts[i].tags[j].toLowerCase());
        }

        return listTags;
      } else {
        if (i === lengthPost - 1) {
          console.log('Unknown idPost');
          return null;
        }
      }
    }
  } // Get tag of tagged page


  getTagPage(e) {
    if (this.checkPage() === 'tagged') {
      var urlToCheck = '';

      if (window.location.hash === '') {
        urlToCheck = window.location.pathname;
      } else {
        urlToCheck = window.location.hash;
      }

      var pathName = urlToCheck.split('/');
      var tagComponent = pathName[pathName.length - 1];
      return decodeURIComponent(tagComponent.replace(/-/g, ' '));
    }
  } // Get id of post in post page


  getIdPostPage(e) {
    var currentPostUrl = window.location.href;
    var currentIdPost = null;

    if (this.checkPage() === 'post') {
      currentPostUrl.replace(/\/post\/([0-9]+)/g, (match, $1) => {
        currentIdPost = $1;
      });
      return currentIdPost;
    }
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
  } // Check page


  checkPage(e) {
    var urlToCheck = '';

    if (window.location.hash === '') {
      urlToCheck = window.location.pathname;
    } else {
      urlToCheck = window.location.hash;
    }

    if (urlToCheck.indexOf('tagged/') !== -1) {
      return 'tagged';
    } else if (urlToCheck.indexOf('post/') !== -1) {
      return 'post';
    } else if (urlToCheck === '/') {
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
    if (numPicks > max + 1) return;
  } else {
    if (numPicks > max - min + 1) return;
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

/***/ "./src/styles/card.css":
/*!*****************************!*\
  !*** ./src/styles/card.css ***!
  \*****************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/chat.css":
/*!*****************************!*\
  !*** ./src/styles/chat.css ***!
  \*****************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/default-style.css":
/*!**************************************!*\
  !*** ./src/styles/default-style.css ***!
  \**************************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/quote.css":
/*!******************************!*\
  !*** ./src/styles/quote.css ***!
  \******************************/
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

/***/ })

/******/ });
});
//# sourceMappingURL=tumblr.js.map

/***/ }),

/***/ "./example/demo.js":
/*!*************************!*\
  !*** ./example/demo.js ***!
  \*************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_tumblr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/tumblr */ "./dist/tumblr.js");
/* harmony import */ var _dist_tumblr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_tumblr__WEBPACK_IMPORTED_MODULE_0__);


const tumblr = new _dist_tumblr__WEBPACK_IMPORTED_MODULE_0__["Tumblr"]({
	host: 'yoriiis.tumblr.com',
	element: document.querySelector('#tumblr-app'),
	useAPI: true,
	keyAPI: 'wjDj3SRz6JjM0fHgntNdwxOPYkhc2Qz4UgQJIRRpvjDUXBo49T',
	limitData: 250,
	cache: true,
	cacheMethod: 'sessionStorage',
	nearBottom: 350,
	elementPerPage: 2
})

// Initialize the Tumblr from the instance
tumblr.init()


/***/ })

/******/ });
//# sourceMappingURL=demo.js.map