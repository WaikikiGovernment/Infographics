(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([["infogram-charts/dep-42"],{3900:(t,e,i)=>{i.r(e),i.d(e,{Controls:()=>s});var r=i(3897);var n=i(3898);var a=i(3901);var o={tab:r.TabSwitcher,player:n.Player,radio:a.RadioSwitcher};function s(t){var e=t.options.sheetSwitch;var i;o[null!==(i=null==e?void 0:e.type)&&void 0!==i?i:"radio"].apply(null,arguments)}},3901:(t,e,i)=>{i.r(e),i.d(e,{RadioSwitcher:()=>c});var r=i(498);var n=i.n(r);var a=i(1117);var o=i(3902);var s=i(3898);var l=i(3892);function c(t,e){var i=t.container,r=t.options,c=t.sheetIndex;var u=r.sheets;var h=t.interaction;if((0,s.removeSheetPlayer)(t),i.selectAll(".igc-sheets").remove(),!(0,l.sheetsEmpty)(t)){var f=n().get(r,"style.sheetSwitch.radio");var d;var v=(d=i.insert("span").attr("class","igc-sm-sheet-switch-radio").style("visibility","hidden").style("position","absolute").style("top","0px").style("left","0px").append("div").attr("class","igc-sheets").append("div").attr("class","igc-sheet").append("span").attr("class","igc-sheet-ico").node().offsetWidth,i.select(".igc-sm-sheet-switch-radio").remove(),d);var p=(0,o.TextItemMetrics)().width(e.width).texts(u.map(function(t){return t.categories.title})).style(f).parentContainer(i).reservedSize(v+20)();var m=i.insert("div",".igc-content").attr("class","igc-sheets").attr("role","radiogroup").attr("aria-label","select sheet").style("width","".concat(e.width,"px"));var g=m.selectAll(".igc-sheet").data(u.map(function(t,e){return{name:t.categories.title,sheetIndex:e}}));(g=g.merge(g.enter().append("div"))).attr("class","igc-sheet").attr("role","radio").attr("aria-checked",function(t){return t.sheetIndex===c?"true":"false"}).attr("aria-labelledby",function(t){return"igc-sheet-label".concat(t.sheetIndex)}).attr("class",function(t){return t.sheetIndex===c?"igc-sheet active":"igc-sheet"}).style("max-width","".concat(p.width,"px")),g.append("span").attr("class","igc-sheet-ico").attr("role","presentation").attr("id",function(t){return"igc-sheet-".concat(t.sheetIndex)}),g.append("span").attr("class","igc-sheet-label").html(function(t){return t.name}).attr("id",function(t){return"igc-sheet-label".concat(t.sheetIndex)}).styles(f).style("height","".concat(p.label.height,"px")).style("max-width","".concat(p.label.width,"px")),g.on("click",function(e,r){var n=(0,a.default)(this);h("sheetSwitch.item","click"),t.sheetIndex!==r.sheetIndex&&(i.selectAll(".igc-sheet.active").attr("class","igc-sheet").attr("aria-checked","false"),n.classed("active",!0).attr("aria-checked","true"),t.sheetIndex=r.sheetIndex,delete t.legendData,t.render())}),(0,l.subtractHeight)(t,m.node())}}},3911:(t,e,i)=>{i.r(e),i.d(e,{inanimated:()=>a,removeAnimation:()=>o,removeDelay:()=>s});var r=i(498);var n=i.n(r);function a(t){return 0===n().get(t,"animation.duration")}function o(t){t.forEach(function(t){if(n().has(t,"animationDuration")){t.animationDuration(0);return}n().has(t,"animate")&&t.animate(!1)})}function s(t,e){return n().get(t,"runtime.inanimate")?function(){return 0}:e}},3902:(t,e,i)=>{i.r(e),i.d(e,{TextItemMetrics:()=>s,createMeasurement:()=>o});var r=i(3851);var n=i(1114);function a(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return t.append("span").styles(e).style("white-space","nowrap").style("line-height",i).style("visibility","hidden").style("position","absolute").style("top","0px").style("left","0px")}function o(t){var e=t.style,i=t.container,r=t.lineHeight;return function(t){var o=a(i,e,r);var s=(0,n.measureTextHtml)(t,o.node());return o.remove(),s}}function s(){var t=function(){if(l){var t=a(l,o);var r=(0,n.measureTextHtmlHeight)(e,t.node());return t.remove(),{width:i,label:{width:i-s,height:r+r/4}}}};var e=[];var i=300;var o=(0,r.chartOptions)().style.legend;var s=0;var l;return Object.assign(t,{texts:function(i){return arguments.length?(e=i.slice(0),t):e},width:function(e){return arguments.length?(i=e,t):i},style:function(e){return arguments.length?(o=e,t):o},reservedSize:function(e){return arguments.length?(s=e,t):s},parentContainer:function(e){return arguments.length?(l=e,t):l}}),t}},1113:(t,e,i)=>{i.r(e),i.d(e,{createStyledTooltip:()=>c,getTooltip:()=>l,setTooltip:()=>s,tooltipDummy:()=>a});var r=i(1114);var n=i(844);var a={setText:function(){return this},setValue:function(){return this},setPosition:function(){return this},show:function(){return(0,n.logError)("Trying to show dummy tooltip"),this},interaction:function(){return this},hide:function(){return o!==a&&o.hide.apply(o,arguments),this},mute:function(){return this},unmute:function(){return this},isVisible:function(){return this},setKey:function(){return this},getKey:function(){return this}};var o=a;function s(t){o=t}function l(){return o}function c(t){var e,i,n,s,l,c,u,h;var f=t.createInteractionCaller();var d=null==t?void 0:null===(i=t.options)||void 0===i?void 0:null===(e=i.tooltip)||void 0===e?void 0:e.enabled;var v=null==t?void 0:null===(l=t.options)||void 0===l?void 0:null===(s=l.style)||void 0===s?void 0:null===(n=s.tooltip)||void 0===n?void 0:n.text;var p=null==t?void 0:null===(h=t.options)||void 0===h?void 0:null===(u=h.style)||void 0===u?void 0:null===(c=u.tooltip)||void 0===c?void 0:c.value;v=v&&(0,r.camelizeObject)(v),p=p&&(0,r.camelizeObject)(p);var m=(0,r.createGetScale)(t.root.node());var g,y;return g=v,y=p,d?function(){return{setText:function(t){return o.setText(t,g),this},setValue:function(t){return"string"!=typeof t||o.setValue(t,y),this},setPosition:function(t,e){return o.setPosition(t,{color:e,scale:m().x}),this},interaction:function(t){return f("tooltip",t),this},show:function(){return o.show.apply(o,arguments),this},hide:function(){return o.hide.apply(o,arguments),this},isVisible:function(){return o.isVisible()},mute:function(){return o.mute(),this},unmute:function(){return o.unmute(),this},setKey:function(){return o.setKey.apply(o,arguments),this},getKey:function(){return o.getKey()}}}:function(){return a}}},7750:(t,e,i)=>{i.r(e),i.d(e,{assignNumberFormatLabels:()=>c,assignNumberFormatValues:()=>l});var r=i(498);var n=i.n(r);var a=i(1991);var o={label:{libraryTargetPath:"labels.format",customAffixPath:"labels.graph.item.format.affix"},x:{libraryTargetPath:"tooltip.format.x",customAffixPath:"labels.tooltip.format.x.affix"},y:{libraryTargetPath:"tooltip.format.y",customAffixPath:"labels.tooltip.format.y.affix"},y2:{libraryTargetPath:"tooltip.format.y2",customAffixPath:"labels.tooltip.format.y2.affix"}};function s(t,e,i){var r=e.decimalSeparator,o=e.groupingSymbol;o&&n().set(t,"grouping","none"===o?"":o);var s=!1===r;n().set(t,"decimal",s?".,":r);var l=i?new a.default("firstNumber",i):new a.default(s?"legacy":"firstNumber",r);n().set(t,"numberParser",l)}function l(t){var e=t.sheetOptions,i=t.custom,r=t.axis,a=t.inputDecimalSeparator;var o={x:0,y:1,y2:2,x1:0,y1:1};r.forEach(function(t){var r=t.id,l=t.path;var c=l?n().get(i,l,{}):i;var h=e.axis[o[r]];n().has(h,"format")||n().set(h,"format",{});var f=h.format;if(u(f,c),!["x1","y1"].includes(r)){s(f,c,a);var d=["useSIPrefixes"];n().get(i,"axis.".concat(r,".affix"),!0)&&d.push("prefix","suffix"),d.forEach(function(t){var e=n().get(c,t);void 0!==e&&n().set(f,t,e)})}})}function c(t){var e=t.sheetOptions,i=t.custom,r=t.affixes,a=t.inputDecimalSeparator;(void 0===r?[]:r).forEach(function(t){var r=t.id,l=t.path,c=t.ignoreCheck,h=t.defaultValue;var f=o[r];var d=f.libraryTargetPath,v=f.customAffixPath;var p=l?n().get(i,l,{}):i;var m=n().pick(p,"prefix","suffix");u(m,p),s(m,p,a),c||n().get(i,v,h)||(n().unset(m,"prefix"),n().unset(m,"suffix")),n().set(e,d,m)})}function u(t,e){var i=e.decimalPlaces,r=e.decimalPlacesValue;i&&void 0!==r&&n().set(t,"decimalPlaces",r)}}}]);