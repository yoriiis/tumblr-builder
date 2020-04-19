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
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/custom-pages/custom-pages.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/custom-pages/custom-pages.js":
/*!***********************************************!*\
  !*** ./examples/custom-pages/custom-pages.js ***!
  \***********************************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

const tumblr = new window.TumblrBuilder({
  element: document.querySelector('#tumblr-app'),
  host: 'yoriiis',
  apiKey: 'wjDj3SRz6JjM0fHgntNdwxOPYkhc2Qz4UgQJIRRpvjDUXBo49T',
  limitData: 250,
  cache: true,
  cacheMethod: 'sessionStorage',
  nearBottom: 350,
  elementsPerPage: 2,
  templatesPages: {
    home: ({
      templates,
      tags,
      posts
    }) => {
      /* prettier-ignore */
      return `
				Custom home page
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
    },
    tagged: ({
      templates,
      tags,
      posts
    }) => {
      /* prettier-ignore */
      return `
				Custom tagged page
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
    },
    post: ({
      templates,
      posts,
      relatedPosts
    }) => {
      /* prettier-ignore */
      return `
				Custom post pages
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
						<h5 class="relatedPosts-title">My related posts</h5>
						${relatedPosts.map(post => templates[post.type](post)).join('')}
					</div>
				` : ''}
    		`;
    }
  }
}); // Initialize the Tumblr from the instance

tumblr.init().then(response => {
  console.log(response);
});

/***/ })

/******/ });
//# sourceMappingURL=custom-pages.js.map