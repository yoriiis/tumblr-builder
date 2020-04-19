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

/***/ "./examples/custom-posts/custom-posts.js":
/*!***********************************************!*\
  !*** ./examples/custom-posts/custom-posts.js ***!
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
  templatesPosts: {
    audio: datas => {
      /* prettier-ignore */
      return `
				<div class="customCard card card-audio" data-id="${datas.id_string}">
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