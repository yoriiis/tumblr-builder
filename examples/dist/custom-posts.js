!function(t){var n={};function a(s){if(n[s])return n[s].exports;var e=n[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=n,a.d=function(t,n,s){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)a.d(s,e,function(n){return t[n]}.bind(null,e));return s},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="",a(a.s="./examples/custom-posts/custom-posts.js")}({"./examples/custom-posts/custom-posts.js":function(t,n){new window.TumblrBuilder({element:document.querySelector("#tumblr-app"),host:"yoriiis",apiKey:"wjDj3SRz6JjM0fHgntNdwxOPYkhc2Qz4UgQJIRRpvjDUXBo49T",limitData:250,cache:!0,cacheMethod:"sessionStorage",nearBottom:350,elementsPerPage:2,templatesPosts:{audio:t=>`\n\t\t\t\t<div class="customCard card card-audio override" data-id="${t.id_string}">\n\t\t\t\t\t<div class="card-iframe">\n\t\t\t\t\t\t${t.player}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card-body">\n\t\t\t\t\t\t<a href="#/post/${t.id_string}" class="card-title">${t.summary}</a>\n\t\t\t\t\t\t<ul class="card-tags">\n\t\t\t\t\t\t\t${t.tags.map(n=>`\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href="${t.blog.url}tagged/${n}" title="#${n}">#${n}</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t`).join("")}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t`,chat:t=>`\n\t\t\t\t<div class="customCard card card-chat" data-id="${t.id_string}">\n\t\t\t\t\t<div class="card-body">\n\t\t\t\t\t\t<a href="#/post/${t.id_string}" class="card-title">${t.title}</a>\n\t\t\t\t\t\t<ul class="card-conversations">\n\t\t\t\t\t\t\t${t.dialogue.map(t=>`\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<strong>${t.label}</strong>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t${t.phrase}\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t`).join("")}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<ul class="card-tags">\n\t\t\t\t\t\t\t${t.tags.map(t=>`\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href="#/tagged/${t}" title="#${t}">#${t}</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t`).join("")}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t`,link:t=>`\n\t\t\t\t<div class="customCard card card-link" data-id="${t.id_string}">\n\t\t\t\t\t<div class="card-body">\n\t\t\t\t\t\t<a href="${t.url}" class="card-link" title="${t.title}">${t.title}</a>\n\t\t\t\t\t\t${t.description}\n\t\t\t\t\t\t<ul class="card-tags">\n\t\t\t\t\t\t\t${t.tags.map(t=>`\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href="#/tagged/${t}" title="#${t}">#${t}</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t`).join("")}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t`,photo:t=>`\n\t\t\t\t<div class="customCard card card-photo${t.photos.length>1?` photoset photos-${t.photos.length}`:""}" data-id="${t.id_string}" data-tags="${t.tags.join(",").toLowerCase()}">\n\t\t\t\t\t<div class="card-body">\n\t\t\t\t\t\t<ul class="card-photos">\n\t\t\t\t\t\t${t.photos.map(n=>`\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<img class="card-picture" src="${n.original_size.url}" alt="${t.summary}" />\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t`).join("")}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t${t.summary?`<a href="#/post/${t.id_string}" class="card-title">${t.summary}</a>`:""}\n\t\t\t\t\t\t<ul class="card-tags">\n\t\t\t\t\t\t\t${t.tags.map(t=>`\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href="#/tagged/${t}" title="#${t}">#${t}</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t`).join("")}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t`,quote:t=>`\n\t\t\t\t<div class="customCard card card-quote" data-id="${t.id_string}">\n\t\t\t\t\t<div class="card-body">\n\t\t\t\t\t\t<blockquote class="card-blockquote">\n\t\t\t\t\t\t\t<p>${t.text}</p>\n\t\t\t\t\t\t\t<footer class="blockquote-footer">${t.source}</footer>\n\t\t\t\t\t\t</blockquote>\n\t\t\t\t\t\t<ul class="card-tags">\n\t\t\t\t\t\t\t${t.tags.map(t=>`\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href="#/tagged/${t}" title="#${t}">#${t}</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t`).join("")}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t`,text:t=>`\n\t\t\t\t<div class="customCard card card-text" data-id="${t.id_string}">\n\t\t\t\t\t<div class="card-body">\n\t\t\t\t\t\t<a href="#/post/${t.id_string}" class="card-title">${t.title}</a>\n\t\t\t\t\t\t${t.body}\n\t\t\t\t\t\t<ul class="card-tags">\n\t\t\t\t\t\t\t${t.tags.map(t=>`\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href="#/tagged/${t}" title="#${t}">#${t}</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t`).join("")}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t`,video:t=>`\n\t\t\t\t<div class="customCard card card-video" data-id="${t.id_string}" data-tags="${t.tags.join(",").toLowerCase()}">\n\t\t\t\t\t<div class="card-iframe">\n\t\t\t\t\t\t${t.player[2].embed_code}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card-body">\n\t\t\t\t\t\t<a href="#/post/${t.id_string}" class="card-title">${t.summary}</a>\n\t\t\t\t\t\t<ul class="card-tags">\n\t\t\t\t\t\t\t${t.tags.map(t=>`\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href="#/tagged/${t}" title="#${t}">#${t}</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t`).join("")}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t`}}).init().then(t=>{console.log(t),!1===t&&window.sessionStorage.removeItem("tumblr")})}});