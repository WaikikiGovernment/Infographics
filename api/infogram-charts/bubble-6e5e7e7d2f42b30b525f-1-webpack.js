(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[36],{7839:(t,e,a)=>{a.r(e),a.d(e,{Bubble:()=>m});var n=a(498);var i=a.n(n);var r=a(7840);var o=a(3876);var s=a(1114);var u=a(7833);var l=a(7705);var c=a(1113);var f=a(7704);function h(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function v(t,e,a){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,a){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(a||t):i.value}})(t,e,a||t)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){"use strict";var e;!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(n,t);var a=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t=d(n),a;if(e){var i=d(this).constructor;a=Reflect.construct(t,arguments,i)}else a=t.apply(this,arguments);var r;return(r=a)&&("object"==(r&&"undefined"!=typeof Symbol&&r.constructor===Symbol?"symbol":typeof r)||"function"==typeof r)?r:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function n(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,n),a.apply(this,arguments)}var u,m;return m=[{key:"getClassName",value:function(){return"Bubble"}}],u=[{key:"emptySheetData",value:function(){return i().merge({},v(d(n.prototype),"emptySheetData",this).call(this),{graphOptions:{dataPointRadius:0}})}},{key:"defaults",value:function(){return i().merge({},v(d(n.prototype),"defaults",this).call(this),{series:{dataPoints:!0}})}},{key:"graphInstanceSetup",value:function(t,e,a,n){var i=this.getRadiusFn();var r=this.runtime,o=r.formatter,s=r.xAxisTimeBased;t.scaleX(n.x).scaleY(n.y).data(e.data).colors(e.colors).radius(i).legend(n.legend).colorAlpha(this.options.opacity).filterFn(function(t){return null!==t.y&&null!==t.x}).transitionDuration(this.options.animation.duration).tooltip((0,c.createStyledTooltip)(this)).tooltipText(function(t){return t.groupSubLabel?"".concat(t.groupLabel,"\n").concat(t.groupSubLabel," (").concat(t.valueLabel,": ").concat(o.tooltip.y.format(t.value),")"):t.groupLabel}).tooltipValue(function(t){var e=s?t.xLabel:o.tooltip.x.format(t.x);return"".concat(t.xValueLabel?t.xValueLabel+": ":"").concat(e,"\n").concat(t.yValueLabel?t.yValueLabel+": ":"").concat(o.tooltip.y.format(t.y))}),t.dispatch().on("animationEnd",n.animationEnd)}},{key:"getRadiusFn",value:function(){var t=this.runtime.sizeScale;return function(e){return null===e.value?0:t(e.value)}}},{key:"createSizeScale",value:function(t){var e=[1,Math.min(this.options.width,this.options.height)/Math.PI*.35];var a=(0,r.sqrt)();var n=[];var o=[0,0];t.forEach(function(t){t.sizeRange&&(e=t.sizeRange),n=i().union(n,t.data.map(function(t){return t.value}).filter(function(t){return(0,s.isNumber)(t)}))}),0===n.length?e=[0,0]:n.forEach(function(t){o[0]=Math.min(o[0],t),o[1]=Math.max(o[1],t)}),e[1]=Math.ceil(e[1]),a.domain(o).range(e),this.runtime.sizeScale=a}},{key:"numericCategoriesScale",value:function(){var t=this.runtime;var e=t.xAxisOptions;var a=[0,t.graphWidth];var n=this.getDomain(t.graphs,"x");var i=(0,o.default)().domain(n).range(a);return this.expandScaleDomainToBubbleSizes(i,"x"),n=i.domain(),n=(0,f.adjustScaleDomainByTickLimits)(n,0,a),(0,l.limit)(e,n),i.domain(n),i}},{key:"expandScaleDomainToBubbleSizes",value:function(t,e){var a=function(a){return t(a[e])+i(a.value||0)};var n=function(a){return t(a[e])-i(a.value||0)};var i=this.runtime.sizeScale;var r=this.runtime.graphs;var o=[];if(r.forEach(function(t){t.data.forEach(function(t){o[0]||(o[0]=t),o[1]||(o[1]=t);var e=o[0];var i=o[1];n(t)<n(e)&&(o[0]=t),a(t)>a(i)&&(o[1]=t)})}),0!==o.length){var s=[];do s[0]=Math.ceil(t.invert(n(o[0]))),s[1]=Math.ceil(t.invert(a(o[1]))),t.domain(s);while(Math.ceil(t.invert(n(o[0])))<s[0]||Math.ceil(t.invert(a(o[1])))>s[1])}}},{key:"adjustYDomain",value:function(t,e){var a=this.runtime;var n=a.yAxisOptions;var i=[0,e];a.sizeScale||this.createSizeScale(a.graphs);var r=(0,o.default)().domain(t).range(i);return this.expandScaleDomainToBubbleSizes(r,"y"),t=r.domain(),t=(0,f.adjustScaleDomainByTickLimits)(t,0,i),(0,l.limit)(n,t),t}}],h(n.prototype,u),m&&h(n,m),n}(u.Scatter)},3900:(t,e,a)=>{a.r(e),a.d(e,{Controls:()=>s});var n=a(3897);var i=a(3898);var r=a(3901);var o={tab:n.TabSwitcher,player:i.Player,radio:r.RadioSwitcher};function s(t){var e=t.options.sheetSwitch;var a;o[null!==(a=null==e?void 0:e.type)&&void 0!==a?a:"radio"].apply(null,arguments)}},3901:(t,e,a)=>{a.r(e),a.d(e,{RadioSwitcher:()=>l});var n=a(498);var i=a.n(n);var r=a(1117);var o=a(3902);var s=a(3898);var u=a(3892);function l(t,e){var a=t.container,n=t.options,l=t.sheetIndex;var c=n.sheets;var f=t.interaction;if((0,s.removeSheetPlayer)(t),a.selectAll(".igc-sheets").remove(),!(0,u.sheetsEmpty)(t)){var h=i().get(n,"style.sheetSwitch.radio");var v;var d=(v=a.insert("span").attr("class","igc-sm-sheet-switch-radio").style("visibility","hidden").style("position","absolute").style("top","0px").style("left","0px").append("div").attr("class","igc-sheets").append("div").attr("class","igc-sheet").append("span").attr("class","igc-sheet-ico").node().offsetWidth,a.select(".igc-sm-sheet-switch-radio").remove(),v);var p=(0,o.TextItemMetrics)().width(e.width).texts(c.map(function(t){return t.categories.title})).style(h).parentContainer(a).reservedSize(d+20)();var m=a.insert("div",".igc-content").attr("class","igc-sheets").attr("role","radiogroup").attr("aria-label","select sheet").style("width","".concat(e.width,"px"));var y=m.selectAll(".igc-sheet").data(c.map(function(t,e){return{name:t.categories.title,sheetIndex:e}}));(y=y.merge(y.enter().append("div"))).attr("class","igc-sheet").attr("role","radio").attr("aria-checked",function(t){return t.sheetIndex===l?"true":"false"}).attr("aria-labelledby",function(t){return"igc-sheet-label".concat(t.sheetIndex)}).attr("class",function(t){return t.sheetIndex===l?"igc-sheet active":"igc-sheet"}).style("max-width","".concat(p.width,"px")),y.append("span").attr("class","igc-sheet-ico").attr("role","presentation").attr("id",function(t){return"igc-sheet-".concat(t.sheetIndex)}),y.append("span").attr("class","igc-sheet-label").html(function(t){return t.name}).attr("id",function(t){return"igc-sheet-label".concat(t.sheetIndex)}).styles(h).style("height","".concat(p.label.height,"px")).style("max-width","".concat(p.label.width,"px")),y.on("click",function(e,n){var i=(0,r.default)(this);f("sheetSwitch.item","click"),t.sheetIndex!==n.sheetIndex&&(a.selectAll(".igc-sheet.active").attr("class","igc-sheet").attr("aria-checked","false"),i.classed("active",!0).attr("aria-checked","true"),t.sheetIndex=n.sheetIndex,delete t.legendData,t.render())}),(0,u.subtractHeight)(t,m.node())}}},3911:(t,e,a)=>{a.r(e),a.d(e,{inanimated:()=>r,removeAnimation:()=>o,removeDelay:()=>s});var n=a(498);var i=a.n(n);function r(t){return 0===i().get(t,"animation.duration")}function o(t){t.forEach(function(t){if(i().has(t,"animationDuration")){t.animationDuration(0);return}i().has(t,"animate")&&t.animate(!1)})}function s(t,e){return i().get(t,"runtime.inanimate")?function(){return 0}:e}},3902:(t,e,a)=>{a.r(e),a.d(e,{TextItemMetrics:()=>s,createMeasurement:()=>o});var n=a(3851);var i=a(1114);function r(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return t.append("span").styles(e).style("white-space","nowrap").style("line-height",a).style("visibility","hidden").style("position","absolute").style("top","0px").style("left","0px")}function o(t){var e=t.style,a=t.container,n=t.lineHeight;return function(t){var o=r(a,e,n);var s=(0,i.measureTextHtml)(t,o.node());return o.remove(),s}}function s(){var t=function(){if(u){var t=r(u,o);var n=(0,i.measureTextHtmlHeight)(e,t.node());return t.remove(),{width:a,label:{width:a-s,height:n+n/4}}}};var e=[];var a=300;var o=(0,n.chartOptions)().style.legend;var s=0;var u;return Object.assign(t,{texts:function(a){return arguments.length?(e=a.slice(0),t):e},width:function(e){return arguments.length?(a=e,t):a},style:function(e){return arguments.length?(o=e,t):o},reservedSize:function(e){return arguments.length?(s=e,t):s},parentContainer:function(e){return arguments.length?(u=e,t):u}}),t}},1113:(t,e,a)=>{a.r(e),a.d(e,{createStyledTooltip:()=>l,getTooltip:()=>u,setTooltip:()=>s,tooltipDummy:()=>r});var n=a(1114);var i=a(844);var r={setText:function(){return this},setValue:function(){return this},setPosition:function(){return this},show:function(){return(0,i.logError)("Trying to show dummy tooltip"),this},interaction:function(){return this},hide:function(){return o!==r&&o.hide.apply(o,arguments),this},mute:function(){return this},unmute:function(){return this},isVisible:function(){return this},setKey:function(){return this},getKey:function(){return this}};var o=r;function s(t){o=t}function u(){return o}function l(t){var e,a,i,s,u,l,c,f;var h=t.createInteractionCaller();var v=null==t?void 0:null===(a=t.options)||void 0===a?void 0:null===(e=a.tooltip)||void 0===e?void 0:e.enabled;var d=null==t?void 0:null===(u=t.options)||void 0===u?void 0:null===(s=u.style)||void 0===s?void 0:null===(i=s.tooltip)||void 0===i?void 0:i.text;var p=null==t?void 0:null===(f=t.options)||void 0===f?void 0:null===(c=f.style)||void 0===c?void 0:null===(l=c.tooltip)||void 0===l?void 0:l.value;d=d&&(0,n.camelizeObject)(d),p=p&&(0,n.camelizeObject)(p);var m=(0,n.createGetScale)(t.root.node());var y,g;return y=d,g=p,v?function(){return{setText:function(t){return o.setText(t,y),this},setValue:function(t){return"string"!=typeof t||o.setValue(t,g),this},setPosition:function(t,e){return o.setPosition(t,{color:e,scale:m().x}),this},interaction:function(t){return h("tooltip",t),this},show:function(){return o.show.apply(o,arguments),this},hide:function(){return o.hide.apply(o,arguments),this},isVisible:function(){return o.isVisible()},mute:function(){return o.mute(),this},unmute:function(){return o.unmute(),this},setKey:function(){return o.setKey.apply(o,arguments),this},getKey:function(){return o.getKey()}}}:function(){return r}}},7838:(t,e,a)=>{a.r(e),a.d(e,{assignDataPointRadiusRange:()=>f,default:()=>c});var n=a(498);var i=a.n(n);var r=a(7839);var o=a(7741);var s=a(7748);var u=a(7750);var l=Object.assign({},o.default);l.instanceClass=r.Bubble,l.setupChartSheetOptionsItem=function(t){var e=this.sheetOptionsItemDefaults(t);var a=e.axis[0];var n=e.axis[1];a.title=t.xlabel?t.xlabel:"",n.title=t.ylabel?t.ylabel:"","number"==typeof t.xmin&&(a.minLimit=t.xmin),"number"==typeof t.xmax&&(a.maxLimit=t.xmax),"number"==typeof t.ymin&&(n.minLimit=t.ymin),"number"==typeof t.ymax&&(n.maxLimit=t.ymax),f(e,t),(0,s.assignAxisTickInterval)(e,t),(0,s.assignAxisTicks)(e,t),(0,u.assignNumberFormatValues)({sheetOptions:e,custom:t,axis:[{id:"x",path:""},{id:"x1",path:"axis.x"},{id:"y",path:""},{id:"y1",path:"axis.y"}],inputDecimalSeparator:this.inputDecimalSeparator}),(0,u.assignNumberFormatLabels)({sheetOptions:e,custom:t,affixes:[{id:"x",path:""},{id:"y",path:""}],inputDecimalSeparator:this.inputDecimalSeparator});var r=i().get(t,"dataInputFormat.type","number");if(e.categories.xAxisTimeBased="date"===r,e.categories.xAxisTimeBased){var o=i().get(t,"dataInputFormat.date");var l=i().get(t,"labels.axis.x.tick.timeFormat",o);i().set(e,"series[0].parseFormat.x",o),i().set(a,"timeFormat",l)}return(0,s.assignCategoryLabelLayout)(e,t),e};let c=Object.freeze(l);function f(t,e){if(e.dataPointRadiusRangemin&&e.dataPointRadiusRangemax){var a=Math.round(e.dataPointRadiusRangemin);var n=Math.round(e.dataPointRadiusRangemax);a>=0&&n>=0&&i().set(t,"graphOptions.sizeRange",[a,n])}}},7748:(t,e,a)=>{a.r(e),a.d(e,{assignAxisInverse:()=>f,assignAxisLimits:()=>u,assignAxisTickInterval:()=>c,assignAxisTicks:()=>l,assignAxisTitles:()=>s,assignCategoryLabelLayout:()=>h});var n=a(498);var i=a.n(n);var r=["x","y","y2"];var o=["min","max"];function s(t,e,a){var n=!0,i=!1,o=void 0;try{for(var s=a[Symbol.iterator](),u;!(n=(u=s.next()).done);n=!0){var l=u.value;t.axis[r.indexOf(l)].title=e["".concat(l,"label")]||""}}catch(t){i=!0,o=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}}function u(t,e,a){var n=!0,i=!1,s=void 0;try{for(var u=a[Symbol.iterator](),l;!(n=(l=u.next()).done);n=!0){var c=l.value;var f=!0,h=!1,v=void 0;try{for(var d=o[Symbol.iterator](),p;!(f=(p=d.next()).done);f=!0){var m=p.value;var y=e["".concat(c).concat(m)];"number"==typeof y&&(t.axis[r.indexOf(c)]["".concat(m,"Limit")]=y)}}catch(t){h=!0,v=t}finally{try{f||null==d.return||d.return()}finally{if(h)throw v}}}}catch(t){i=!0,s=t}finally{try{n||null==u.return||u.return()}finally{if(i)throw s}}}function l(t,e){t.axis.forEach(function(t,a){t.ticks=i().get(e,"labels.axis.".concat(r[a],".tick.enabled"),!0)})}function c(t,e){t.axis.forEach(function(t,a){var n=i().get(e,"axis.".concat(r[a],".ticks"));void 0!==n&&(t.tickInterval=n)})}function f(t,e,a){var n=r.indexOf(a);i().set(t,"axis[".concat(n,"].invert"),i().get(e,"axis.".concat(a,".invert"),!1))}function h(t,e){"tilted"===e.categoryLayout&&i().set(t,"categories.layout","tilted")}},7750:(t,e,a)=>{a.r(e),a.d(e,{assignNumberFormatLabels:()=>l,assignNumberFormatValues:()=>u});var n=a(498);var i=a.n(n);var r=a(1991);var o={label:{libraryTargetPath:"labels.format",customAffixPath:"labels.graph.item.format.affix"},x:{libraryTargetPath:"tooltip.format.x",customAffixPath:"labels.tooltip.format.x.affix"},y:{libraryTargetPath:"tooltip.format.y",customAffixPath:"labels.tooltip.format.y.affix"},y2:{libraryTargetPath:"tooltip.format.y2",customAffixPath:"labels.tooltip.format.y2.affix"}};function s(t,e,a){var n=e.decimalSeparator,o=e.groupingSymbol;o&&i().set(t,"grouping","none"===o?"":o);var s=!1===n;i().set(t,"decimal",s?".,":n);var u=a?new r.default("firstNumber",a):new r.default(s?"legacy":"firstNumber",n);i().set(t,"numberParser",u)}function u(t){var e=t.sheetOptions,a=t.custom,n=t.axis,r=t.inputDecimalSeparator;var o={x:0,y:1,y2:2,x1:0,y1:1};n.forEach(function(t){var n=t.id,u=t.path;var l=u?i().get(a,u,{}):a;var f=e.axis[o[n]];i().has(f,"format")||i().set(f,"format",{});var h=f.format;if(c(h,l),!["x1","y1"].includes(n)){s(h,l,r);var v=["useSIPrefixes"];i().get(a,"axis.".concat(n,".affix"),!0)&&v.push("prefix","suffix"),v.forEach(function(t){var e=i().get(l,t);void 0!==e&&i().set(h,t,e)})}})}function l(t){var e=t.sheetOptions,a=t.custom,n=t.affixes,r=t.inputDecimalSeparator;(void 0===n?[]:n).forEach(function(t){var n=t.id,u=t.path,l=t.ignoreCheck,f=t.defaultValue;var h=o[n];var v=h.libraryTargetPath,d=h.customAffixPath;var p=u?i().get(a,u,{}):a;var m=i().pick(p,"prefix","suffix");c(m,p),s(m,p,r),l||i().get(a,d,f)||(i().unset(m,"prefix"),i().unset(m,"suffix")),i().set(e,v,m)})}function c(t,e){var a=e.decimalPlaces,n=e.decimalPlacesValue;a&&void 0!==n&&i().set(t,"decimalPlaces",n)}},7840:(t,e,a)=>{a.r(e),a.d(e,{default:()=>c,powish:()=>l,sqrt:()=>f});var n=a(3876);var i=a(3882);var r=a(3890);function o(t){return function(e){return e<0?-Math.pow(-e,t):Math.pow(e,t)}}function s(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function u(t){return t<0?-t*t:t*t}function l(t){var e=t(i.identity,i.identity),a=1;return e.exponent=function(e){return arguments.length?1==(a=+e)?t(i.identity,i.identity):.5===a?t(s,u):t(o(a),o(1/a)):a},(0,n.linearish)(e)}function c(){var t=l((0,i.transformer)());return t.copy=function(){return(0,i.copy)(t,c()).exponent(t.exponent())},r.initRange.apply(t,arguments),t}function f(){return c.apply(null,arguments).exponent(.5)}}}]);