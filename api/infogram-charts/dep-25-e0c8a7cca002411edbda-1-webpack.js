(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([["infogram-charts/dep-25"],{7715:(t,r,n)=>{n.r(r),n.d(r,{Axis:()=>s});var e=n(498);var a=n.n(e);var i=n(3876);var o=n(1117);var c=n(3851);var l=n(1115);function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=Array(r);n<r;n++)e[n]=t[n];return e}function s(){var t=function(t){t.each(function(){var t=(0,o.default)(this);var a=this.__chart__||r;var i=this.__chart__=r.copy();var c=s.ticks(i,e,u);var g=t.selectAll(".tick").data(c,i).order();var m=g.enter().insert("g").attr("class","tick").style("opacity",l.eps);var k=g.select("text");var x=g.exit().transition().duration(p).style("opacity",l.eps).remove();g=g.merge(m),k=k.merge(m.append("text"));var b=g.transition().duration(p).style("opacity",1);null==f&&(f=s.tickFormat(i,e));var O=-1!==["top","left"].indexOf(n)?-1:1;var _;if(k.text(function(t){return"function"==typeof f?f(t,i):f}),"bottom"===n||"top"===n?(_=s.axisX,k.attr("dx",v).attr("text-anchor","end")):(_=s.axisY,k.attr("dy",v).attr("text-anchor",O<0?"start":"end")),k.styles(h).attr("fill",h.color),i.bandwidth){var T=i;var A=Math.floor(T.bandwidth()/2);a=i=function(t){return T(t)+A}}else a.bandwidth?a=i:x.call(_,i,a,y);m.call(_,a,i,y),b.call(_,i,i,y),b.call(function(t){t.each(function(t,r){var n=1;-1!==d.indexOf(r)&&(n=l.eps),(0,o.default)(this).select("text").style("opacity",n)})})})};var r=(0,i.default)();var n=s.DEFAULT_ORIENT;var e=[10];var u=null;var f;var v=0;var h=(0,c.defaultTextStyle)();var d=[];var p=700;var y={left:0,top:0};return Object.assign(t,{scale:function(n){return arguments.length?(r=n,t):r},orient:function(r){return arguments.length?(n=r in s.ORIENTS?""+r:s.DEFAULT_ORIENT,t):n},ticks:function(){return arguments.length?(e=arguments,t):e},tickValues:function(r){return arguments.length?(u=r,t):u},tickFormat:function(r){return arguments.length?(f=r,t):f},textOffset:function(r){return arguments.length?(v=+r,t):v},style:function(r){return arguments.length?(h=r,t):h},offset:function(r){return arguments.length?(a().merge(y,r),t):y},hideTicksByIndex:function(r){return arguments.length?(d=r.slice(0),t):d},getBorderingTick:function(){var t=r.copy();var n=s.ticks(t,e,u).slice(0);var a=(n=(n=n.filter(function(t,r){return -1===d.indexOf(r)})).sort(function(r,n){return t(n)-t(r)})).length;return t(n[a-1])},animationDuration:function(r){return arguments.length?(p=r,t):p}}),t}s.DEFAULT_ORIENT="bottom",s.ORIENTS={top:1,right:1,bottom:1,left:1},s.axisX=function(t,r,n,e){t.attr("transform",function(t){var a=r(t);var i=Math.round(e.left+(isFinite(a)?a:n(t)));return"translate(".concat(i,", ").concat(e.top,")")})},s.axisY=function(t,r,n,e){t.attr("transform",function(t){var a=r(t);var i=Math.round(e.top+(isFinite(a)?a:n(t)));return"translate(".concat(e.left,", ").concat(i,")")})},s.tickFormat=function(t,r){return t.tickFormat?t.tickFormat.apply(t,r):function(t){return t}},s.ticks=function(t,r,n){return null===n?t.ticks?t.ticks.apply(t,function(t){if(Array.isArray(t))return u(t)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,r){if(t){if("string"==typeof t)return u(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,r)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()):t.domain():n}},7717:(t,r,n)=>{n.r(r),n.d(r,{GridLines:()=>f});var e=n(498);var a=n.n(e);var i=n(3876);var o=n(1117);var c=n(3851);var l=n(1115);var u=n(7715);var s=n(1998);function f(){var t=function(t){t.each(function(){var t=(0,o.default)(this);var a=(0,s.rgb)(g.color);a.opacity=g.opacity;var i=a.toString();var c=this.__chart__||r;var k=this.__chart__=r.copy();var x=u.Axis.ticks(k,v,h);var b=t.selectAll(".tick").data(x,k).order();var O=b.enter().insert("g").attr("class","tick").style("opacity",l.eps);var _=b.select("rect");var T=b.exit().transition().duration(p).style("opacity",l.eps).remove();var A=(b=b.merge(O)).transition().duration(p).style("opacity",1);_=_.merge(O.append("rect"));var I=f.ORIENTS.horizontal===n?-1:1;var S,E,w;if(n===f.ORIENTS.vertical?(w=u.Axis.axisX,S="width",E="height"):(w=u.Axis.axisY,S="height",E="width"),_.attr("x",0).attr("y",0).attr(S,1).attr(E,I*e),k.bandwidth){var F=k;var N=Math.floor(F.bandwidth()/2);c=k=function(t){return F(t)+N}}else c.bandwidth?c=k:T.call(w,k,c,m);O.call(w,c,k,m),A.call(w,k,k,m),A.call(function(t){var r=1/0;t.each(function(t,e){var a={fill:i,stroke:"none","stroke-width":0,opacity:null};if(0===t&&d&&(a.opacity=null),-1!==y.indexOf(e)&&(a.opacity=l.eps),n===f.ORIENTS.vertical){var c=Math.round(k(t));r===c&&void 0===a.opacity&&(a.opacity=l.eps),r=c}(0,o.default)(this).select("rect").styles(a)})})})};var r=(0,i.default)();var n=f.ORIENTS.vertical;var e=6;var v=[10];var h=null;var d=!1;var p=700;var y=[];var g=(0,c.chartOptions)().style.grid;var m={left:0,top:0};return Object.assign(t,{scale:function(n){return arguments.length?(r=n,t):r},orient:function(r){return arguments.length?(n=r,t):n},ticks:function(){return arguments.length?(v=arguments,t):v},tickValues:function(r){return arguments.length?(h=r,t):h},tickSize:function(r){return arguments.length?(e=+r,t):e},style:function(r){return arguments.length?(g=r,t):g},offset:function(r){return arguments.length?(a().merge(m,r),t):m},highlightZero:function(r){return arguments.length?(d=!!r,t):d},hideLinesByIndex:function(r){return arguments.length?(y=r.slice(0),t):y},animationDuration:function(r){return arguments.length?(p=r,t):p}}),t}f.ORIENTS={vertical:0,horizontal:1}}}]);