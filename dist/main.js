!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=16)}([,,,,,,,,,,function(e,t,n){"use strict";function r(){if(!window.RelativeTimeElement)return!1;var e=window.RelativeTimeElement.prototype.getFormattedDate,t=window.TimeAgoElement.prototype.getFormattedDate,n=function(e,t){if(/^on ([\w ]+)$/.test(e))return"于 "+t.title.replace(/ .+$/,"");var n=window._GITHUB_LANGS_[window._GITHUB_LANG_].github.public.regexp[1];return e.replace(n[0],n[1])};window.RelativeTimeElement.prototype.getFormattedDate=function(){var t=e.call(this);return n(t,this)},window.TimeAgoElement.prototype.getFormattedDate=function(){var e=t.call(this);return n(e,this)},window.LocalTimeElement.prototype.getFormattedDate=function(){return this.title.replace(/ .+$/,"")};var r=document.querySelectorAll("time, relative-time, time-ago, local-time");return Array.prototype.forEach.call(r,function(e){e.getFormattedDate&&(e.textContent=e.getFormattedDate())}),!0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e,t,n){var r=0;setTimeout(function o(){if(!window.define)return!(++r>=20)&&setTimeout(o,99);var a=n?n:"github/hans-hook-"+Date.now().toString(16);window.define(a,e,t),window.ghImport(a).catch(function(e){return setTimeout(function(){throw e})})},99)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){for(var t=e.childNodes,n=0,o=t.length;n<o;n++){var u=t[n];u.nodeType===Node.ELEMENT_NODE?("INPUT"===u.tagName||"TEXTAREA"===u.tagName?"button"===u.type||"submit"===u.type?(0,a.default)(u,"value"):(0,a.default)(u,"placeholder"):u.hasAttribute("aria-label")?((0,a.default)(u,"aria-label",!0),u.hasAttribute("data-copied-hint")&&(0,a.default)(u.dataset,"copiedHint")):"OPTGROUP"===u.tagName&&(0,a.default)(u,"label"),u.hasAttribute("data-disable-with")&&(0,a.default)(u.dataset,"disableWith"),"readme"===u.id||i.test(u.className)||r(u)):u.nodeType===Node.TEXT_NODE&&(0,a.default)(u,"data")}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(17),a=function(e){return e&&e.__esModule?e:{default:e}}(o),i=window._GITHUB_LANGS_.config.reIgnore;t.default=r},,,function(e,t,n){"use strict";function r(){var e=location.host.replace(/\.?github\.com$/,"")||"github",t=location.pathname,n="true"===localStorage["logged-in"],r=(document.getElementsByName("analytics-location")[0]||0).content||"",o="/<user-name>"===r,a="/<org-login>"===r,i=r.indexOf("/<user-name>/<repo-name>")>-1,u=t;return"/"===t&&(u=n?"dashboard":t),o&&(u="profile"),a&&(u="organizations"),i&&(u=r.replace("/<user-name>/<repo-name>","repository")),console.log({site:e,page:u,pathname:t,isLogin:n,isProfile:o,isOrganization:a,isRepository:i}),{site:e,page:u}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){(0,d.default)(),(0,l.default)(document.body)}var a=n(11),i=r(a),u=n(12),l=r(u),c=n(10),d=r(c);o(),(0,i.default)(["../jquery"],function(e){e.ajaxSetup({global:!0}),e(document).ajaxComplete(o)})},function(e,t,n){"use strict";function r(e,t,n){var r=!1;return(r=void 0===n?(0,a.default)(e[t]):(0,a.default)(e.getAttribute(t)))!==!1&&(void 0===n?e[t]=r:e.setAttribute(t,r),!0)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(18),a=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=r},function(e,t,n){"use strict";function r(e,t){if(t=t||u.page,!c||!c[t]||!c[t].static)return!1;var n=c[t].static[e];if(n)return n;var r=c[t].regexp;if(r)for(var o=0,a=r.length;o<a;o++)if((n=e.replace(r[o][0],r[o][1]))!==e)return n;return!1}function o(e){var t=e.trim(),n=t.replace(/\xa0/g," ").replace(/\s{2,}/g," ");if(""===n)return!1;var o=r(n,"public");return o!==!1&&o!==n?(o=r(o,"public")||o,e.replace(t,o)):(o=r(n))!==!1&&""!==o&&(o=r(o,"public")||o,e.replace(t,o))}Object.defineProperty(t,"__esModule",{value:!0});var a=n(15),i=function(e){return e&&e.__esModule?e:{default:e}}(a);localStorage._GITHUB_LANG_?window._GITHUB_LANG_=localStorage._GITHUB_LANG_:window._GITHUB_LANG_="zh_CN";var u=(0,i.default)();console.log("pageInfo:",u);var l=window._GITHUB_LANGS_[window._GITHUB_LANG_],c=l[u.site];t.default=o}]);