!function(t,s){"object"==typeof exports&&"object"==typeof module?module.exports=s():"function"==typeof define&&define.amd?define([],s):"object"==typeof exports?exports.TumblrBuilder=s():t.TumblrBuilder=s()}(window,(function(){return function(t){var s={};function e(a){if(s[a])return s[a].exports;var n=s[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=s,e.d=function(t,s,a){e.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,s){if(1&s&&(t=e(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var n in t)e.d(a,n,function(s){return t[s]}.bind(null,n));return a},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},e.p="/dist/",e(e.s="./src/scripts/tumblr-builder.js")}({"./src/scripts sync recursive ^.*$":function(t,s,e){var a={"./styles":"./src/scripts/styles.js","./styles.js":"./src/scripts/styles.js","./templates/pages/home":"./src/scripts/templates/pages/home.js","./templates/pages/home.js":"./src/scripts/templates/pages/home.js","./templates/pages/post":"./src/scripts/templates/pages/post.js","./templates/pages/post.js":"./src/scripts/templates/pages/post.js","./templates/pages/tagged":"./src/scripts/templates/pages/tagged.js","./templates/pages/tagged.js":"./src/scripts/templates/pages/tagged.js","./templates/posts/audio":"./src/scripts/templates/posts/audio.js","./templates/posts/audio.js":"./src/scripts/templates/posts/audio.js","./templates/posts/chat":"./src/scripts/templates/posts/chat.js","./templates/posts/chat.js":"./src/scripts/templates/posts/chat.js","./templates/posts/link":"./src/scripts/templates/posts/link.js","./templates/posts/link.js":"./src/scripts/templates/posts/link.js","./templates/posts/photo":"./src/scripts/templates/posts/photo.js","./templates/posts/photo.js":"./src/scripts/templates/posts/photo.js","./templates/posts/quote":"./src/scripts/templates/posts/quote.js","./templates/posts/quote.js":"./src/scripts/templates/posts/quote.js","./templates/posts/text":"./src/scripts/templates/posts/text.js","./templates/posts/text.js":"./src/scripts/templates/posts/text.js","./templates/posts/video":"./src/scripts/templates/posts/video.js","./templates/posts/video.js":"./src/scripts/templates/posts/video.js","./tumblr-builder":"./src/scripts/tumblr-builder.js","./tumblr-builder.js":"./src/scripts/tumblr-builder.js","./utils":"./src/scripts/utils.js","./utils.js":"./src/scripts/utils.js"};function n(t){var s=i(t);return e(s)}function i(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="./src/scripts sync recursive ^.*$"},"./src/scripts/styles.js":function(t,s,e){"use strict";e.r(s);e("./src/styles/reset.css"),e("./src/styles/base.css"),e("./src/styles/components/tags.css"),e("./src/styles/components/card.css"),e("./src/styles/types/photo.css"),e("./src/styles/types/quote.css"),e("./src/styles/types/chat.css"),e("./src/styles/types/link.css")},"./src/scripts/templates/pages/home.js":function(t,s,e){"use strict";function a({templates:t,tags:s,posts:e}){return`\n        <nav class="nav">\n                <ul>\n                    <li>\n                        <a class="btn" href="#_" title="Home">Home</a>\n                    </li>\n                </ul>\n            </ul>\n        </nav>\n        <div class="tags card">\n            <ul class="card-body">\n                ${s.map(t=>`\n                    <li>\n                        <a href="#/tagged/${t}" title="#${t}">#${t}</a>\n                    </li>\n                `).join("")}\n                <li></li>\n            </ul>\n        </div>\n        <div class="posts" data-infinite-scroll>\n            ${e.map(s=>t[s.type](s)).join("")}\n        </div>\n    `}e.r(s),e.d(s,"default",(function(){return a}))},"./src/scripts/templates/pages/post.js":function(t,s,e){"use strict";function a({templates:t,posts:s,relatedPosts:e}){return`\n        <nav class="nav">\n                <ul>\n                    <li>\n                        <a class="btn" href="#_" title="Home">Home</a>\n                    </li>\n                </ul>\n            </ul>\n        </nav>\n        <div class="posts">\n            ${s.map(s=>t[s.type](s)).join("")}\n        </div>\n        ${e.length?`\n            <div class="relatedPosts">\n                <h5 class="relatedPosts-title">Related posts</h5>\n                ${e.map(s=>t[s.type](s)).join("")}\n            </div>\n        `:""}\n    `}e.r(s),e.d(s,"default",(function(){return a}))},"./src/scripts/templates/pages/tagged.js":function(t,s,e){"use strict";function a({templates:t,tag:s,posts:e}){return`\n        <nav class="nav">\n                <ul>\n                    <li>\n                        <a class="btn" href="#_" title="Home">Back to home</a>\n                    </li>\n                </ul>\n            </ul>\n        </nav>\n        <h3 class="subnav">Tagged: ${s}</h3>\n        <div class="posts" data-infinite-scroll>\n            ${e.map(s=>t[s.type](s)).join("")}\n        </div>\n    `}e.r(s),e.d(s,"default",(function(){return a}))},"./src/scripts/templates/posts/audio.js":function(t,s,e){"use strict";function a(t){return`\n        <div class="card card-audio" data-id="${t.id_string}">\n            <div class="card-iframe">\n                ${t.player}\n            </div>\n            <div class="card-body">\n                <a href="#/post/${t.id_string}" class="card-title">${t.summary}</a>\n                <ul class="card-tags">\n                    ${t.tags.map(t=>`\n                            <li>\n                                <a href="#/tagged/${t}" title="#${t}">#${t}</a>\n                            </li>\n                    `).join("")}\n                </ul>\n            </div>\n        </div>\n    `}e.r(s),e.d(s,"default",(function(){return a}))},"./src/scripts/templates/posts/chat.js":function(t,s,e){"use strict";function a(t){return`\n        <div class="card card-chat" data-id="${t.id_string}">\n            <div class="card-body">\n                <a href="#/post/${t.id_string}" class="card-title">${t.title}</a>\n                <ul class="card-conversations">\n                    ${t.dialogue.map(t=>`\n                            <li>\n                                <strong>${t.label}</strong>&nbsp;&nbsp;\n                                ${t.phrase}\n                            </li>\n                    `).join("")}\n                </ul>\n                <ul class="card-tags">\n                    ${t.tags.map(t=>`\n                            <li>\n                                <a href="#/tagged/${t}" title="#${t}">#${t}</a>\n                            </li>\n                    `).join("")}\n                </ul>\n            </div>\n        </div>\n    `}e.r(s),e.d(s,"default",(function(){return a}))},"./src/scripts/templates/posts/link.js":function(t,s,e){"use strict";function a(t){return`\n        <div class="card card-link" data-id="${t.id_string}">\n            <div class="card-body">\n                <a href="${t.url}" class="card-linkItem" title="${t.title}">${t.title}</a>\n                ${t.description}\n                <ul class="card-tags">\n                    ${t.tags.map(t=>`\n                            <li>\n                                <a href="#/tagged/${t}" title="#${t}">#${t}</a>\n                            </li>\n                    `).join("")}\n                </ul>\n            </div>\n        </div>\n    `}e.r(s),e.d(s,"default",(function(){return a}))},"./src/scripts/templates/posts/photo.js":function(t,s,e){"use strict";function a(t){return`\n        <div class="card card-photo${t.photos.length>1?` photoset photos-${t.photos.length}`:""}" data-id="${t.id_string}" data-tags="${t.tags.join(",").toLowerCase()}">\n            <div class="card-body">\n                <ul class="card-photos">\n                ${t.photos.map(s=>`\n                        <li>\n                            <img class="card-picture" src="${s.original_size.url}" alt="${t.summary}" />\n                        </li>\n                `).join("")}\n                </ul>\n                ${t.summary?`<a href="#/post/${t.id_string}" class="card-title">${t.summary}</a>`:""}\n                <ul class="card-tags">\n                    ${t.tags.map(t=>`\n                            <li>\n                                <a href="#/tagged/${t}" title="#${t}">#${t}</a>\n                            </li>\n                    `).join("")}\n                </ul>\n            </div>\n        </div>\n    `}e.r(s),e.d(s,"default",(function(){return a}))},"./src/scripts/templates/posts/quote.js":function(t,s,e){"use strict";function a(t){return`\n        <div class="card card-quote" data-id="${t.id_string}">\n            <div class="card-body">\n                <blockquote class="card-blockquote">\n                    <p>${t.text}</p>\n                    <footer class="blockquote-footer">${t.source}</footer>\n                </blockquote>\n                <ul class="card-tags">\n                    ${t.tags.map(t=>`\n                            <li>\n                                <a href="#/tagged/${t}" title="#${t}">#${t}</a>\n                            </li>\n                    `).join("")}\n                </ul>\n            </div>\n        </div>\n    `}e.r(s),e.d(s,"default",(function(){return a}))},"./src/scripts/templates/posts/text.js":function(t,s,e){"use strict";function a(t){return`\n        <div class="card card-text" data-id="${t.id_string}">\n            <div class="card-body">\n                <a href="#/post/${t.id_string}" class="card-title">${t.title}</a>\n                ${t.body}\n                <ul class="card-tags">\n                    ${t.tags.map(t=>`\n                            <li>\n                                <a href="#/tagged/${t}" title="#${t}">#${t}</a>\n                            </li>\n                    `).join("")}\n                </ul>\n            </div>\n        </div>\n    `}e.r(s),e.d(s,"default",(function(){return a}))},"./src/scripts/templates/posts/video.js":function(t,s,e){"use strict";function a(t){return`\n        <div class="card card-video" data-id="${t.id_string}" data-tags="${t.tags.join(",").toLowerCase()}">\n            <div class="card-iframe">\n                ${t.player[2].embed_code}\n            </div>\n            <div class="card-body">\n                <a href="#/post/${t.id_string}" class="card-title">${t.summary}</a>\n                <ul class="card-tags">\n                    ${t.tags.map(t=>`\n                            <li>\n                                <a href="#/tagged/${t}" title="#${t}">#${t}</a>\n                            </li>\n                    `).join("")}\n                </ul>\n            </div>\n        </div>\n    `}e.r(s),e.d(s,"default",(function(){return a}))},"./src/scripts/tumblr-builder.js":function(t,s,e){"use strict";e.r(s),e.d(s,"default",(function(){return r}));var a=e("./src/scripts/utils.js");e("./src/scripts/styles.js");function n(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return n=function(){return t},t}function i(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}
/*!
 * TumblrBuilder v2.0.0
 * (c) 2013-2020 Yoriiis
 * Released under the MIT License.
 */class r{constructor(t){i(this,"init",async()=>(this.datas=await this.getAllDatas(),0===this.datas.posts.length?(window[this.options.cacheMethod].removeItem("TumblrBuilderJsonData"),!1):(this.jsonComplete=!0,this.datas.tags=await this.getAllTags(),this.totalPages=Math.ceil(this.datas.totalPosts/this.options.elementsPerPage),this.addEvents(),this.templates=await this.getTemplates(),this.currentRoute=this.getRoute(),this.hashChanged(),this.datas))),i(this,"hashChanged",async t=>{const s=this.getHashTagFromRoute(),e=this.getPostIdFromRoute(),a=this.getPageType();let n;if("tagged"===a&&s)n=await this.getDatasForTaggedPage(s),this.buildPage(this.templates.pages.tagged({templates:this.templates.posts,tag:s,posts:n}));else if("post"===a&&e){if(n=await this.getDatasForPostPage(e),n.length>1)return void this.setRoute("");const t=this.getRelatedPosts({postId:e,tags:n[0].tags,limit:3});this.buildPage(this.templates.pages.post({templates:this.templates.posts,posts:n,relatedPosts:t}))}else"home"===a&&(n=await this.getDatasForHomePage(),this.buildPage(this.templates.pages.home({templates:this.templates.posts,tags:this.datas.tags,posts:n})));this.endPage=!1,this.currentPage=1,window.scrollTo(0,0)}),i(this,"onScroll",async t=>{const s=this.getPageType();this.isLoading||this.endPage||"home"!==s&&"tagged"!==s||Object(a.getScrollTop)()>=document.body.clientHeight-window.innerHeight-this.options.nearBottom&&(this.isLoading=!0,this.currentPage>=this.totalPages?this.endPage=!0:(await this.loadNewPage(),this.currentPage++),this.isLoading=!1)}),i(this,"loadNewPage",async()=>{const t=await this.getPostsByPageNumber(this.currentPage+1),s=this.options.element.querySelector("[data-infinite-scroll]");null!==s&&s.insertAdjacentHTML("beforeend",`${t.map(t=>this.templates.posts[t.type](t)).join("")}`)}),i(this,"getTemplates",async()=>({pages:await this.getTemplatesByType({keys:this.keysTemplatesPage,path:"./templates/pages/",custom:this.options.templatesPages}),posts:await this.getTemplatesByType({keys:this.keysTemplatePosts,path:"./templates/posts/",custom:this.options.templatesPosts})})),i(this,"getTemplatesByType",async({keys:t,path:s,custom:a})=>{const i={};t.filter(t=>this.hasProperty(a,t)).forEach(t=>{i[t]=a[t]});const r=t.filter(t=>!this.hasProperty(a,t)),o=r.map(t=>Promise.resolve().then(()=>function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var s=n();if(s&&s.has(t))return s.get(t);var e={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var r=a?Object.getOwnPropertyDescriptor(t,i):null;r&&(r.get||r.set)?Object.defineProperty(e,i,r):e[i]=t[i]}return e.default=t,s&&s.set(t,e),e}(e("./src/scripts sync recursive ^.*$")(`${s+t}`))));return(await Promise.all(o)).forEach((t,s)=>{i[r[s]]=t.default}),i}),i(this,"getAllDatas",async t=>{let s;this.options.cache?null===window[this.options.cacheMethod].getItem(this.browserStorageKey)?(s=await this.getDataFromAPI(),window[this.options.cacheMethod].setItem(this.browserStorageKey,JSON.stringify(s))):s=JSON.parse(window[this.options.cacheMethod].getItem(this.browserStorageKey)):(s=await this.getDataFromAPI(),window[this.options.cacheMethod].removeItem(this.browserStorageKey));return s}),i(this,"getDataFromAPI",async()=>{const t=await this.requestAPI(this.getAPIUrl());if(this.isValidResponse(t)){const e=t.response.total_posts,a=this.getNumberOfRequiredRequests(e);let n=t.response.posts;if(t.response.posts.length&&a){const t=[];for(var s=0;s<a;s++)t.push(this.requestAPI(this.getAPIUrl({offset:this.nbPostPerRequest+this.nbPostPerRequest*s})));await Promise.all(t).then(t=>{t.forEach(t=>{n=n.concat(t.response.posts)})})}return{totalPosts:e,posts:n}}return{totalPosts:0,posts:[]}}),i(this,"getDatasForTaggedPage",async t=>{const s=await this.requestAPI(this.getAPIUrl({tag:t,limit:this.options.elementsPerPage}));return s&&s.response?s.response.posts:[]}),i(this,"getDatasForPostPage",async t=>{const s=await this.requestAPI(this.getAPIUrl({id:t}));return s&&s.response?s.response.posts:[]}),i(this,"getPostsByPageNumber",async t=>{const s=this.getRange(t),e=this.extractDatasFromLocalDatas(s);if(e.length&&"home"===this.getPageType())return e;return(await this.requestAPI(this.getAPIUrl({offset:s.start,limit:this.options.elementsPerPage,tag:"tagged"===this.getPageType()&&this.getHashTagFromRoute()}))).response.posts});const s=t||{};this.options=Object.assign({element:null,host:"",apiKey:"",limitData:250,cache:!1,cacheMethod:"sessionStorage",nearBottom:350,elementsPerPage:20,templatesPages:{},templatesPosts:{}},s),this.browserStorageKey="TumblrBuilderJsonData",this.endPage=!1,this.isLoading=!1,this.jsonComplete=!1,this.currentPage=1,this.nbPostPerRequest=50,this.datas={},this.keysTemplatesPage=["home","post","tagged"],this.keysTemplatePosts=["audio","chat","link","photo","quote","text","video"],this.onScroll=this.onScroll.bind(this),this.hashChanged=this.hashChanged.bind(this)}addEvents(){window.addEventListener("scroll",this.onScroll,!1),window.addEventListener("hashchange",this.hashChanged,!1)}buildPage(t){this.options.element.innerHTML=t}setRoute(t){window.location.hash=t}requestAPI(t){return fetch(t).then(t=>t.json())}isValidResponse(t){return 200===t.meta.status}extractDatasFromLocalDatas(t){return this.datas.posts.slice(t.start,t.end+1)}getAPIUrl({id:t=!1,offset:s=0,limit:e=(this.options.limitData<this.nbPostPerRequest?this.options.limitData:this.nbPostPerRequest),tag:a=!1}={}){return`//api.tumblr.com/v2/blog/${this.options.host}/posts/?api_key=${this.options.apiKey}&limit=${e}&notes_info=false&offset=${s}${a?`&tag=${a}`:""}${t?`&id=${t}`:""}`}getNumberOfRequiredRequests(t){return t<=this.options.limitData?Math.ceil((t-this.nbPostPerRequest)/this.nbPostPerRequest):Math.ceil((this.options.limitData-this.nbPostPerRequest)/this.nbPostPerRequest)}getDatasForHomePage(){const t=this.datas.totalPosts<this.options.elementsPerPage?this.datas.totalPosts:this.options.elementsPerPage;return this.datas.posts.slice(0,t)}getPageType(){const t=this.getRoute();return-1!==t.indexOf("/tagged/")?"tagged":-1!==t.indexOf("/post/")?"post":["","#","#_"].includes(t)?"home":null}getRange(t){return{start:(t>1?t-1:t)*this.options.elementsPerPage,end:t*this.options.elementsPerPage-1}}getHashTagFromRoute(){return this.getRoute().split("/tagged/")[1]}getPostIdFromRoute(){return this.getRoute().split("/post/")[1]}getRoute(){return window.location.hash.substr(1)}getRelatedPosts({postId:t,limit:s=3,tags:e=[],ignoreTags:n=[]}){const i=e.filter(t=>!n.includes(t)),r=this.datas.posts.filter(s=>s.tags.some(e=>i.includes(e)&&s.id_string!==t)),o=Object(a.getRandoms)(s,0,r.length-1)||[];return r.length<s?r:o.map(t=>r[t])}getAllTags(){return this.jsonComplete?this.datas.posts.filter(t=>t.tags.length).flatMap(t=>t.tags).map(t=>t.toLowerCase()).filter((t,s,e)=>e.indexOf(t)===s).sort():[]}hasProperty(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}},"./src/scripts/utils.js":function(t,s,e){"use strict";function a(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function n(t,s,e){var a=e-s+1,n=new Array(a),i=[],r=0,o=0;for(0===s?t>e+1&&(t=e):t>e-s+1&&(t=e),r=0;r<a;r++)n[r]=r+s;for(o=0;o<t;o++){var l=Math.floor(Math.random()*n.length);i.push(n[l]),n.splice(l,1)}return i}e.r(s),e.d(s,"getScrollTop",(function(){return a})),e.d(s,"getRandoms",(function(){return n}))},"./src/styles/base.css":function(t,s,e){},"./src/styles/components/card.css":function(t,s,e){},"./src/styles/components/tags.css":function(t,s,e){},"./src/styles/reset.css":function(t,s,e){},"./src/styles/types/chat.css":function(t,s,e){},"./src/styles/types/link.css":function(t,s,e){},"./src/styles/types/photo.css":function(t,s,e){},"./src/styles/types/quote.css":function(t,s,e){}}).default}));