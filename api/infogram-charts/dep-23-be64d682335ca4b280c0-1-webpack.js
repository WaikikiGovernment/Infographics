(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([["infogram-charts/dep-23"],{7695:(t,n,r)=>{r.r(n),r.d(n,{countDecimals:()=>m,createTimeFormat:()=>f,displayValue:()=>c,enUSFormatLocale:()=>l});var a=r(863);var e=r(1977);var i=r(7696);var o=r(1115);var u=r(3851);function c(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return r(0===n||1===n?t(n):o.math.round(t(n),a))}function m(t){return Math.floor(t)===t?0:t.toString().split(".")[1].length||0}var l=(0,a.default)((0,u.enUSLocaleConfig)());function f(t){return t&&"auto"!==t?(t=t.replace(/^norepeat:/,""),(0,e.timeFormat)(t)):(0,i.default)().tickFormat()}},7705:(t,n,r)=>{r.r(n),r.d(n,{adjustSymmetricalDomain:()=>m,containsZero:()=>h,domainInvalid:()=>b,ensureZero:()=>l,ensureZeroEqual:()=>f,forceTicksToDomain:()=>g,getTimeDomain:()=>c,hasLimits:()=>v,limit:()=>s,orderLimits:()=>d});var a=r(3886);var e=r(705);var i=r.n(e);var o=r(1114);var u=r(1115);function c(t){var n=t.filter(function(t){return null!==t});return n.length?n.reduce(function(t,n){return n>t[1]&&(t[1]=n),n<t[0]&&(t[0]=n),t},[n[0],n[n.length-1]]):[i()().toDate(),i()().add(1,"year").toDate()]}function m(t){var n=t[1]-t[0];return(t[0]=-n,t[1]=n,Math.abs(t[0])>Math.abs(t[1]))?[t[0],-t[0]]:[-t[1],t[1]]}function l(t){var n=t[0]<0&&t[1]<0;var r=t[0]>0&&t[1]>0;n&&!r&&(t[1]=0),r&&!n&&(t[0]=0)}function f(t){t[0]===t[1]&&(t[0]>0?t[0]=0:t[0]<0?t[1]=0:(t[0]=-1,t[1]=1))}function s(t,n){if(!t)return!1;var r=t.minLimit,e=t.maxLimit;var i=(0,o.isNumber)(r);var u=(0,o.isNumber)(e);return n[0]=i?Number(r):n[0],n[1]=u?Number(e):n[1],n.sort(a.default),u||i}function v(t){return t&&((0,o.isNumber)(t.minLimit)||(0,o.isNumber)(t.maxLimit))}function d(t){if(t&&(0,o.isNumber)(t.minLimit)&&(0,o.isNumber)(t.maxLimit)&&t.minLimit>t.maxLimit){var n=t.maxLimit;t.maxLimit=t.minLimit,t.minLimit=n}}function h(t){return t[0]<=0&&t[1]>=0}function g(t,n){var r=Math.max(n.length-1,1);var a=t[0];var e=t[1];var i=(e-a)/r;var o=[a];for(var c=1;c<r;c++)o[c]=u.math.preciseNumber(a+c*i);return o[r]=e,o}function b(t){return t[0]===t[1]}},7704:(t,n,r)=>{r.r(n),r.d(n,{ScaleHelper:()=>c,adjustScaleDomainByTickLimits:()=>m,ensureMinTicks:()=>l,getScalePositions:()=>f});var a=r(3876);var e=r(3915);var i=r(3906);var o=r(1114);var u=r(7705);function c(){var t=function(){return r[n]()};var n="ordinal";var r={numeric:function(){var t=f.map(function(t){return(0,o.replaceBlank)(Number(t),0)}).sort(function(t,n){return t-n});var n=[(0,e.default)(t),(0,i.default)(t)];return n=m(n,s,l),(0,u.limit)({minLimit:c[0],maxLimit:c[1]},n),n[0]===n[1]&&0===n[0]&&(n[0]=-1,n[1]=1),(0,a.default)().domain(n).rangeRound(l)}};var c=[];var l=[0,1];var f=[];var s=0;return Object.assign(t,{type:function(a){return arguments.length&&a in r&&(n=a),t},domainLimit:function(n){return arguments.length&&(c=n.slice(0)),t},range:function(n){return arguments.length&&(l=n.slice(0)),t},data:function(n){return arguments.length?(f=n.slice(0),t):f},rangePointRadius:function(n){return arguments.length?(s=n,t):s}}),t}function m(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;var e=function(t,n,r){r(i.invert(t),n)};var i=(0,a.default)().domain(t).rangeRound(r).nice(10);return 0===n||(e(i(t[0])-n,i.domain()[0],function(t,n){if(t<n){var r=i.ticks(10);var a=r.length-1;i.domain([t,r[a]]).nice(10)}}),e(i(t[1])+n,i.domain()[1],function(t,n){t>n&&i.domain([i.ticks(10)[0],t]).nice(10)})),i.domain()}function l(t,n){if(t.ticks){var r=t.ticks(n);var a=r.length;return(1===n&&1===a&&(a=(r=t.ticks(2)).length),1===n&&a>2)?[r[0],r[a-1]]:r}return t.domain()}function f(t){return t.bandwidth?t.domain().map(function(n){return t(n)+.5*t.bandwidth()}):t.ticks().map(function(n){return t(n)})}},7694:(t,n,r)=>{r.r(n),r.d(n,{Label:()=>c});var a=r(420);var e=r(1117);var i=r(3851);var o=r(1115);var u=r(1114);var c=function(){var t=function(t){t.each(function(){var t=(0,e.default)(this).selectAll("text").data([0]);t.exit().remove(),t=t.enter().insert("text").merge(t);var a=m.x1;var i=m.y1+(m.y2-m.y1)/2;("top"===r||"bottom"===r)&&(a=m.x1+(m.x2-m.x1)/2),"top"===r&&(i=m.y1),"right"===r&&(a=m.x1+(m.x2-m.x1)),"bottom"===r&&(i=m.y1+(m.y2-m.y1)),t.text(n),c.adjust(t,a,i,r,(0,u.getTextDimensions)(n,l)),t.styles(l).attr("x",a).attr("y",i).style("opacity",s?o.eps:null).attr("fill",l.color).attr("text-anchor","middle"),s?t.transition().style("opacity",1).on("end",function(){f.call("animationEnd")}):f.call("animationEnd")})};var n="";var r=c.DEFAULT_ORIENT;var m={x1:0,y1:0,x2:100,y2:100};var l=(0,i.defaultTitleTextStyle)();var f=(0,a.default)("animationEnd");var s=!0;return Object.assign(t,{text:function(r){return arguments.length?(n=r,t):n},orientBounds:function(n){return arguments.length?(m=n,t):m},orient:function(n){return arguments.length?(c.ORIENTS.includes(n)&&(r=n),t):r},style:function(n){return arguments.length?(l=n,t):l},dispatch:function(){return f},animate:function(n){return arguments.length&&(s=n),t}}),t};c.DEFAULT_ORIENT="left",c.ORIENTS=["top","right","bottom","left"],c.adjust=function(t,n,r,a,e){"left"===a&&(t.attr("dy",e.baseLineOffset),t.attr("transform","rotate(270,".concat(n,",").concat(r,")"))),"right"===a&&(t.attr("dy",e.baseLineOffset-e.height),t.attr("transform","rotate(270,".concat(n,",").concat(r,")"))),"top"===a&&t.attr("dy",e.baseLineOffset),"bottom"===a&&t.attr("dy",e.baseLineOffset-e.height)}}}]);