parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
"use strict";function e(e,o){return c(e)||r(e,o)||n(e,o)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(c.push(o.value),!t||c.length!==t);a=!0);}catch(l){i=!0,r=l}finally{try{a||null==n.return||n.return()}finally{if(i)throw r}}return c}}function c(e){if(Array.isArray(e))return e}var a=document.querySelector("nav"),i=document.querySelector("nav"),l=function(){var e=document.querySelector(".burguer"),t=document.querySelector(".nav-links"),n=document.querySelectorAll("nav li");e.addEventListener("click",function(){t.classList.toggle("nav-active"),n.forEach(function(e,t){e.style.animation?e.style.animation="":e.style.animation="navLinkFade 0.5s ease forwards ".concat(t/5+.5,"s")}),e.classList.toggle("toggle")})};l();var s=document.createElement("div");s.classList.add("cookie-message"),s.innerHTML='We use cookies for analytics and perfomance of our website. <button class="cookie-close">Close</button>',i.before(s),document.querySelector(".cookie-close").addEventListener("click",function(){s.classList.add("removed"),document.querySelector(".cookie-close").addEventListener("transitionend",function(){return s.remove()})});var u=document.querySelectorAll(".show-modal"),d=document.querySelector(".modal"),v=document.querySelector(".overlay"),f=document.querySelector(".close-modal"),m=function(e){e.preventDefault(),d.classList.remove("hidden"),v.classList.remove("hidden")},y=function(){d.classList.add("hidden"),v.classList.add("hidden")};u.forEach(function(e){return e.addEventListener("click",m)}),f.addEventListener("click",y),v.addEventListener("click",y),document.addEventListener("keydown",function(e){"Escape"!==e.key||d.classList.contains("hidden")||y()});var b=document.querySelector(".btn-scrollTo"),L=document.querySelector("#appointment");b.addEventListener("click",function(e){L.getBoundingClientRect();L.scrollIntoView({behavior:"smooth"})}),document.querySelector(".nav-links").addEventListener("click",function(e){if(e.preventDefault(),e.target.classList.contains("nav-link")){var t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}});var h=document.querySelectorAll("section"),g=function(t,n){var o=e(t,1)[0];o.isIntersecting&&(o.target.classList.remove("section-hidden"),n.unobserve(o.target))},S=new IntersectionObserver(g,{root:null,threshold:.35});h.forEach(function(e){S.observe(e),e.classList.add("section-hidden")});var q=document.querySelectorAll(".about-tab"),k=document.querySelector(".about-content-container"),E=document.querySelectorAll(".about-content");k.addEventListener("click",function(e){var t=e.target.closest(".about-tab");console.log(t),t&&(q.forEach(function(e){return e.classList.remove("about-tab-active")}),E.forEach(function(e){return e.classList.remove("about-content-active")}),t.classList.add("about-tab-active"),document.querySelector(".about-content-".concat(t.dataset.tab)).classList.add("about-content-active"))});var p=function(e,t){if(e.target.classList.contains("nav-link")){var n=e.target,o=n.closest("nav").querySelectorAll(".nav-link"),r=n.closest("nav").querySelector(".logo");o.forEach(function(e){e!==n&&(e.style.opacity=t)}),r.style.opacity=t}};i.addEventListener("mouseover",function(e){p(e,.5)}),i.addEventListener("mouseout",function(e){p(e,1)});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/src.a922b3da.js.map