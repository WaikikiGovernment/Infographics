(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([["infogram-charts/dep-1"],{1116:(t,e,n)=>{function r(t){try{var e=new URL(t);return["http:","https:","mailto:"].includes(e.protocol)}catch(t){return!1}}n.r(e),n.d(e,{isLink:()=>r})},7434:(t,e,n)=>{n.r(e),n.d(e,{addRenderQueue:()=>u,render:()=>c});var r=n(844);var i=n(1114);var o=!1;var a=[];function u(t){a.push(t),o||c()}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;o=!0,requestAnimationFrame(function(){var e;var n=0;for(;n<t&&(e=a[n]);n++)if((0,i.isElementAttached)(e.container.node()))try{delete e.legendData,e.render()}catch(t){(0,r.logError)("Chart with entity id: ".concat(e.options.projectEntityId," error"),t)}a.splice(0,n),a.length?c(t):o=!1})}},1115:(t,e,n)=>{n.r(e),n.d(e,{PI:()=>i,PI2:()=>o,PIhalf:()=>a,eps:()=>r,math:()=>h,rad:()=>c,vect45:()=>u});var r=1e-6;var i=Math.PI;var o=2*i;var a=i/2;var u=Math.cos(45*i/180);var c=180/i;var h={median:function(t){var e=t.slice(0).sort(function(t,e){return t-e});var n=0;var r=e.length;return 0===r?0:1===r?e[0]:r%2?e[n=r/2-.5+1]:(e[(n=r/2)-1]+e[n])/2},average:function(t){var e=t.length;var n=0;if(0===e)return 0;for(var r=0;r<e;r++)n+=t[r];return n/e},closest:function(t,e){var n=e[0];var r=Math.abs(t-n);var i=e.length;for(var o=1;o<i;o++){var a=Math.abs(t-e[o]);a<r&&(r=a,n=e[o])}return n},isPointInsideBBox:function(t,e,n){return e>=t.x&&e<=t.x2&&n>=t.y&&n<=t.y2},isBBoxIntersect:function(t,e){var n=h.isPointInsideBBox;return n(e,t.x,t.y)||n(e,t.x2,t.y)||n(e,t.x,t.y2)||n(e,t.x2,t.y2)||n(t,e.x,e.y)||n(t,e.x2,e.y)||n(t,e.x,e.y2)||n(t,e.x2,e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y)},fitToSize:function(t,e,n,r){var i=t/e;return(t>n||e<r)&&(e=(t=n)/i),(e>r||t<n)&&(t=(e=r)*i),{width:t,height:e}},preciseNumber:function(t){return Math[t<0?"ceil":"floor"](1e6*t)/1e6},round:function(t,e){return e?Math.round(t*(e=Math.pow(10,e)))/e:Math.round(t)}}},1114:(t,e,n)=>{n.r(e),n.d(e,{absoluteUrl:()=>X,camelizeObject:()=>A,compare:()=>T,createAnimationTargets:()=>Q,createCachedResults:()=>B,createGetScale:()=>V,createMetricTextNode:()=>f,createMousePositionOnSvg:()=>W,createSvg:()=>v,ensureElement:()=>Y,extendBBox:()=>P,firstNonEmpty:()=>F,genId:()=>k,getAllTextDimensions:()=>m,getCategoryStyle:()=>b,getColor:()=>x,getMousePosition:()=>E,getSvgTextNodeMetrics:()=>l,getTextDimensions:()=>g,hasRepeatingValues:()=>O,identity:()=>d,isBlank:()=>L,isElementAttached:()=>R,isNumber:()=>N,kebabizeObject:()=>C,measurePath:()=>w,measureTextHtml:()=>p,measureTextHtmlHeight:()=>y,noop:()=>s,openUrl:()=>I,pairData:()=>U,removeComma:()=>j,removeContents:()=>G,replaceBlank:()=>M,requestAnimationFrame:()=>S,schemeCategory10:()=>_,setupBBox:()=>z,thickenTextNode:()=>h});var r=n(498);var i=n.n(r);var o=n(1117);var a=n(1115);var u=n(1116);function c(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}function h(t,e){t.attr("stroke-width","".concat(e,"px")).attr("stroke-linejoin","round")}function f(){return v().append("text").attr("x",0).attr("y",0).style("visibility","hidden")}function s(){}function d(t){return t}function l(t){var e=z()(t);var n=Math.ceil;return{width:n(e.width),height:n(e.height),baseLineOffset:n(-e.y)}}function v(){var t="charts-text-measurement";var e=(0,o.default)(".".concat(t));return e.empty()?(0,o.default)(document.body).append("svg").attr("width",0).attr("height",0).attr("class",t).style("position","absolute"):e}function g(t,e){var n={width:0,height:0,baseLineOffset:0};var r=Math.ceil;var i=f();var o=z();return"object"==typeof e&&i.styles(e),t.constructor!==Array&&(t=[t]),t.forEach(function(t){i.text(t);var e=i.node();var a=o(e);var u=-a.y;var c=e.getComputedTextLength();c>n.width&&(n.width=r(c)),a.height>n.height&&(n.height=r(a.height)),u>n.baseLineOffset&&(n.baseLineOffset=r(u))}),i.remove(),n}function m(t,e){var n={width:0,height:0,baseLineOffset:0,collection:[]};var r=Math.ceil;var i=f();var o=z();t.constructor!==Array&&(t=[t]);var a=void 0===e?"undefined":c(e);return"object"===a?i.styles(e):"function"===a&&e(i),t.forEach(function(t){i.text(t);var e=i.node();var a=o(e);var u={width:r(e.getComputedTextLength()),height:r(a.height),baseLineOffset:r(-a.y)};u.width>n.width&&(n.width=u.width),u.height>n.height&&(n.height=u.height),u.baseLineOffset>n.baseLineOffset&&(n.baseLineOffset=u.baseLineOffset),n.collection.push(u)}),i.remove(),n}function y(t,e){var n=0;return t.constructor!==Array&&(t=[t]),t.some(function(t){return e.textContent=t,(n=e.offsetHeight)>0}),n}function p(t,e){var n=[];return t.constructor!==Array&&(t=[t]),t.forEach(function(t){e.textContent=t;var r={width:e.offsetWidth,height:e.offsetHeight};n.push(r)}),n}function w(t,e){var n=v();var r=z();var i;var o=n.append("path").attr("d",t).style("visibility","hidden");return P(i="number"==typeof e?{x:(i=r(o.node())).x*e,y:i.y*e,width:i.width*e,height:i.height*e}:r(o.node())),o.remove(),i}function x(t,e){return e&&e.length||(e=_),e[t%e.length]}function b(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e&&e.length?i().merge(n,e[t]||{}):n}function O(t){var e={};for(var n=0,r=t.length;n<r;n++){if(t[n]in e)return!0;e[t[n]]=t[n]}return!1}function k(t,e){return e=e||"id",function(){return t++,"".concat(e,"-").concat(t)}}function C(t){var e={};for(var n in t)e[i().kebabCase(n)]=t[n];return e}function A(t){var e={};for(var n in t)e[i().camelCase(n)]=t[n];return e}function B(){var t=new Map;return function(e,n){var r=t.get(e);return!r&&n&&(r=n(),t.set(e,r)),r}}function L(t){return"number"==typeof t&&isNaN(t)||null==t||""===t}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return L(t)?e:t}function N(t){return!L(t)&&!isNaN(Number(t))}function E(t){var e=document.body;return{x:t.clientX+e.scrollLeft||0,y:t.clientY+e.scrollTop||0}}function P(t){return{x:t.x,y:t.y,x2:t.x+t.width,y2:t.y+t.height,width:t.width,height:t.height}}function T(t,e,n){var r;var i=t.length;var o=i===e.length;if(o){for(r=0;r<i;r++)if(!n(t[r],e[r])){o=!1;break}}return o}var S=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}).bind(window);function j(t){return Number(t.replace(/(,)/gi,""))}function F(t){for(var e=0,n=t.length;e<n;e++){var r=t[e];var i=void 0===r?"undefined":c(r);if("string"===i&&""!==r.trim()||"number"===i&&!isNaN(r))return r}return""}function I(t,e){((null==t?void 0:t.startsWith("#"))||(null==t?void 0:t.startsWith("?"))||(0,u.isLink)(t))&&e&&e("link","click",{action:"openUrl",value:t})}function R(t){if(document.contains)return document.contains(t);var e=document.documentElement;for(;t;){if(t===e)return!0;t=t.parentNode}return!1}function q(t){return t.getBBox()}function D(t){return R(t)?t.getBBox():{x:0,y:0,width:0,height:0}}var H=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;function z(){return H?D:q}function U(t,e,n){var r=e.length;var i=t.length;if(i>=r){t.forEach(function(t,n){t.next=e[n]});var o=i-r;o&&t.splice(r,o)}else e.forEach(function(e,r){if(t[r])t[r].next=e;else{var i=t[r]=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};var r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){var r;r=n[e],e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r})}return t}({next:e},e);n&&n(i)}})}function W(t,e){var n=getComputedStyle(t);var r={width:parseFloat(n.width),height:parseFloat(n.height)};return function(n){var i=t.getBoundingClientRect();var o={x:i.left,y:i.top,sx:a.math.round(i.width/r.width,6),sy:a.math.round(i.height/r.height,6)};return[(n.clientX-o.x-e.left*o.sx)/o.sx,(n.clientY-o.y-e.top*o.sy)/o.sy]}}var _=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"];function X(t){var e=window.location.href.replace(window.location.hash,"");return"".concat(e,"#").concat(t)}function Y(t,e,n){return t.selectAll(".".concat(e)).data([0]).enter().append(n).attr("class",e)}function G(t){t.selectAll("*").remove()}function Q(t,e){return t.map(function(t){var n=t.__data__;var r=e(void 0===t.current?n:t.current,n);return t.current=n,{node:t,interpolate:r,fake:0}})}function V(t){var e=getComputedStyle(t);var n={width:parseFloat(e.width),height:parseFloat(e.height)};var r=a.math.round(n.width/n.height,6);return function(){var e=t.getBoundingClientRect();var i=a.math.round(e.width/e.height,6);var o=e.width;var u=e.height;var c=a.math.round(e.height/e.width,6);return i!==r&&c===r&&(o=u,u=e.width),{x:a.math.round(o/n.width,6),y:a.math.round(u/n.height,6)}}}},844:(t,e,n)=>{n.r(e),n.d(e,{logError:()=>o,logInfo:()=>a,logWarning:()=>u,setLogger:()=>i});var r=console;function i(t){r=t}function o(t,e){r.error(t,e)}function a(t,e){r.info(t,e)}function u(t,e){r.warn(t,e)}}}]);