(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([["infogram-charts/dep-19"],{2451:(t,e,a)=>{function r(t,e,a){t.sheetIndex!==e&&(t.previousIndex=t.sheetIndex,t.sheetIndex=e,delete t.sort,delete t.searchText,delete t.legendData,t.events.call("tabChanged",void 0,{sheetIndex:e,name:a}),t.render(),t.previousIndex=e)}a.r(e),a.d(e,{switchChartTab:()=>r})},3909:(t,e,a)=>{a.r(e),a.d(e,{DownloadButton:()=>n});var r=a(3893);function n(t,e){var a=t.container,n=t.options,o=t.runtime;if(a.selectAll(".igc-data-download").remove(),n.downloadText){var i="".concat(1.2*parseInt(e["font-size"],10),"px");var s=a.insert("a").attr("class","igc-data-download").attr("href","#");s.insert("svg").attr("viewBox","-512 -512 512 512").attr("version","1.1").attr("width",i).attr("height",i).attr("xmlns","http://w3.org/2000/svg").insert("path").attr("fill",e.color.label.active).attr("transform","rotate(180)").attr("d","M288 320l0 192-64 0 0-192-65 0 97-129 96 129z m160 192l-64 0 0-64 32 0c17 0 32-15\n                               32-32l0-320c0-17-15-32-32-32l-320 0c-17 0-32 15-32 32l0 320c0 17 15 32 32 32l32 0\n                               0 64-64 0c-35 0-64-29-64-64l0-384c0-35 29-64 64-64l384 0c35 0 64 29 64 64l0 384c0 35-29 64-64 64z"),s.insert("span").attr("class","igc-data-download-text").style("color",e.color.label.active).style("font-family",e["font-family"]).style("font-weight",e["font-weight"]).style("font-size",e["font-size"]).text(n.downloadText),s.on("click",function(e){e.preventDefault(),t.events.call("downloadData")}),o.height-=(0,r.outerHeight)(s.node())}}},3874:(t,e,a)=>{function r(t,e,a){if(!e.has(t))throw TypeError("attempted to "+a+" private field on non-instance");return e.get(t)}function n(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}a.r(e),a.d(e,{PlayButton:()=>i});var o=new WeakMap;var i=function(){"use strict";function t(e){var a=e.parent,n=e.color,i=e.colorHover,s=e.iconColor,c=e.iconHover,l=e.onClick;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}(this,o),o.set(this,{writable:!0,value:void 0});var d=a.append("div").attr("class","sheet-player-button-container").append("div").attr("class","sheet-player-circle").attr("data-lookup","play-button").style("color",n).style("background",n);var h=d.append("div").attr("class","sheet-player-circle-icon");s&&h.style("border-left-color",s).attr("data-lookup","play-button-icon"),function(t,e,a){if(e.set)e.set.call(t,a);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=a}}(this,r(this,o,"set"),d),this.toggle(!1),d.on("click",l),d.on("mouseover",function(){d.style("background",i),h.style("border-left-color",c)}),d.on("mouseout",function(){d.style("background",n),h.style("border-left-color",s)})}var e,a;return e=[{key:"toggle",value:function(t){var e;var a=(e=r(this,o,"get")).get?e.get.call(this):e.value;a.classed("play",!t),a.classed("pause",t)}}],n(t.prototype,e),a&&n(t,a),t}()},3875:(t,e,a)=>{a.r(e),a.d(e,{Range:()=>w});var r=a(3876);var n=a(1114);var o=a(1115);function i(t,e,a){if(!e.has(t))throw TypeError("attempted to "+a+" private field on non-instance");return e.get(t)}function s(t,e){var a=i(t,e,"get");return a.get?a.get.call(t):a.value}function c(t,e,a){!function(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,a)}function l(t,e,a){var r=i(t,e,"set");return!function(t,e,a){if(e.set)e.set.call(t,a);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=a}}(t,r,a),a}function d(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){t.style("width","".concat(e,"px"))}function u(t,e){t.style("transform","translate(".concat(e,"px)"))}function v(t,e,a){return function(r){var n=r/t;return a(e*(isFinite(n)?n:0))}}function p(t,e){return t?e:"".concat(e," series-player")}var g=new WeakMap,f=new WeakMap,b=new WeakMap,y=new WeakMap;var w=function(){"use strict";function t(e){var a=e.parent,i=e.width,s=e.progressColor,d=e.progressHover,w=e.handleColor,m=e.handleHover,x=e.railColor,k=e.step,C=void 0===k?.01:k,I=e.min,E=e.max,S=e.animate,T=void 0===S||S,A=e.onDragStart,P=void 0===A?n.noop:A,H=e.onDrag,B=void 0===H?n.noop:H,L=e.onClick,R=void 0===L?n.noop:L,M=e.onInput,D=void 0===M?n.noop:M;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,t);var z=function(t){var e=G.node().getBoundingClientRect();var a=o.math.round(V.node().getBoundingClientRect().width,2);var r=o.math.round((G.node().getBoundingClientRect().width-V.node().getBoundingClientRect().width)/2,2);return Math.round(O*(Math.max(Math.min(t-e.left-r,a),0)/a)/C)*C};var W=function(t){function e(t){var e=z(t.touches?t.touches[0].pageX:t.pageX);h(U,F(e)),u(q,N(e)),U.style("background",d),q.style("background-color",m),B(e),D(e)}function a(){document.removeEventListener("mousemove",e),document.removeEventListener("touchmove",e),document.removeEventListener("mouseup",a),document.removeEventListener("touchend",a),U.style("background",s),q.style("background-color",w)}t.preventDefault(),P(),document.addEventListener("mouseup",a),document.addEventListener("touchend",a),document.addEventListener("mousemove",e),document.addEventListener("touchmove",e)};c(this,g,{writable:!0,value:void 0}),c(this,f,{writable:!0,value:void 0}),c(this,b,{writable:!0,value:void 0}),c(this,y,{writable:!0,value:void 0});var _=i-10;var O=(void 0===E?1:E)-(void 0===I?0:I);var j=(0,r.default)().domain([0,_]).range([10,i]);var F=l(this,g,v(O,_,j));var N=l(this,f,v(O,_,function(t){return t}));var X=a.append("div").attr("class","sheet-player-slider-container").attr("data-lookup","slider-container");var G=X.append("div").attr("class","sheet-player-slider-rail").style("background-color",x);var U=l(this,b,G.append("div").attr("class",p(T,"sheet-player-slider-progress")).attr("data-lookup","slider-progress").style("background",s));var V=G.append("div").attr("class",p(T,"sheet-player-slider-location"));V.style("width","".concat(_,"px"));var q=l(this,y,V.append("div").attr("class","sheet-player-slider-handle").attr("data-lookup","slider-handle").style("background-color",w));var J=q.node();J.addEventListener("touchstart",W),J.addEventListener("mousedown",W),G.node().addEventListener("click",function(t){var e=z(t.pageX);h(U,F(e)),u(q,N(e)),U.style("background",d),q.style("background-color",m),R(e),D(e)}),X.on("mouseover",function(){U.style("background",d),q.style("background-color",m)}),X.on("mouseout",function(){U.style("background",s),q.style("background-color",w)})}var e,a;return e=[{key:"setValue",value:function(t){h(s(this,b),s(this,g).call(this,t)),u(s(this,y),s(this,f).call(this,t))}}],d(t.prototype,e),a&&d(t,a),t}()},3899:(t,e,a)=>{a.r(e),a.d(e,{PAUSE_BETWEEN_SHEET_SWITCH:()=>p,SheetPlayer:()=>m,loops:()=>v});var r=a(498);var n=a.n(r);var o=a(3892);var i=a(3874);var s=a(3875);function c(t,e,a){if(!e.has(t))throw TypeError("attempted to "+a+" private field on non-instance");return e.get(t)}function l(t,e){var a=c(t,e,"get");return a.get?a.get.call(t):a.value}function d(t,e,a){!function(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,a)}function h(t,e,a){var r=c(t,e,"set");return!function(t,e,a){if(e.set)e.set.call(t,a);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=a}}(t,r,a),a}function u(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=new Map;var p=1500;var g=new WeakMap,f=new WeakMap,b=new WeakMap,y=new WeakMap,w=new WeakMap;var m=function(){"use strict";function t(e){var a=this;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,t);var r=function(t){return n().get(e,"options.sheets[".concat(t||0,"].categories.title"),"")};d(this,g,{writable:!0,value:void 0}),d(this,f,{writable:!0,value:void 0}),d(this,b,{writable:!0,value:void 0}),d(this,y,{writable:!0,value:void 0}),d(this,w,{writable:!0,value:void 0}),h(this,b,e),h(this,f,!1);var c=e.container,u=e.options,m=e.sheetIndex;var x=n().get(u,"style.sheetSwitch.play.colors");var k=h(this,y,c.append("div").attr("class","igc-sheet-player")).append("div").attr("class","sheet-player");var C=k.append("div").attr("class","sheet-player-inner");var I=k.append("div").attr("class","sheet-player-sheetName").style("color",n().get(u,"style.sheetSwitch.tab.color"));I.text(r(m));var E=n().get(e,"options.sheets.length");var S=u.width-50;var T=new s.Range({width:S,parent:C,progressColor:x.progressBar,progressHover:x.progressBarHover,handleColor:x.handle,handleHover:x.handleHover,railColor:x.rail,min:0,max:Math.max(0,E-1),step:1,onDragStart:function(){a.stop()},onDrag:function(t){I.text(r(t)),a.update(t)},onClick:function(t){var n=v.get(e.chartId);n&&n.stop(),a.stop(),I.text(r(t)),a.update(t)}});h(this,w,function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=a.repeat;var n={chartId:t,repeat:void 0===r||r};return n.start=function(){v.set(n.chartId,n),e.call(n)},n.stop=function(){v.delete(n.chartId),clearTimeout(n.timeoutRef)},n}(e.chartId,function t(){var a=this;if(v.get(this.chartId)){var n=e.sheetIndex+1;if(n===E){if(!this.repeat)return;n=0}I.text(r(n)),T.setValue(n),e.sheetIndex=n,e.render(),e.events.on("endAnimation.sheetPlayer",function(){v.get(a.chartId)&&(a.timeoutRef=setTimeout(t.bind(a),p))})}})),h(this,g,new i.PlayButton({parent:C,color:x.background,colorHover:x.backgroundHover,iconColor:x.icon,iconHover:x.iconHover,onClick:function(){a.setPlayPause(!l(a,f)),l(a,f)?l(a,w).start():l(a,w).stop()}})),(0,o.subtractHeight)(e,k.node())}var e,a;return e=[{key:"setPlayPause",value:function(t){h(this,f,t),l(this,g).toggle(t)}},{key:"isPlaying",value:function(){return l(this,f)}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.repeat;l(this,w).repeat=void 0===e||e,this.setPlayPause(!l(this,f)),l(this,f)?l(this,w).start():l(this,w).stop()}},{key:"stop",value:function(){this.isPlaying()&&this.setPlayPause(!1),this.stopLoop()}},{key:"stopLoop",value:function(){var t=v.get(l(this,b).chartId);t&&t.stop()}},{key:"update",value:function(t){var e=l(this,b);e.sheetIndex!==t&&(e.sheetIndex=t,this.inAction=!0,e.render())}},{key:"remove",value:function(){var t=l(this,b);this.stopLoop(),l(this,y).remove(),delete t.sheetPlayer}}],u(t.prototype,e),a&&u(t,a),t}()},3897:(t,e,a)=>{a.r(e),a.d(e,{TabSwitcher:()=>u,setupStyle:()=>h});var r=a(498);var n=a.n(r);var o=a(1117);var i=a(3898);var s=a(3892);var c=a(3895);var l=a(3896);var d=a(2451);function h(t){var e=n().pick(t,["font-size","font-family","font-style","font-weight","color"]);var a=n().get(t,"color");var r=n().get(t,"activeTabColor",a);return{fontStyle:e,tabColor:a,tabColorActive:r,colors:n().get(t,"colors")}}function u(t,e){var a=function(){var a=document.createElement("textarea");a.innerText=x[v];var o=a.value;var i=(0,l.Dropdown)({container:u,width:e.width,data:x,currentIndex:v,title:o,showArrows:!!n().get(g,"tabOptions.navigationArrows"),style:m,controlsColorsEnabled:n().get(r,"style.sheetSwitch.controlsColorsEnabled"),onRightArrowClick:function(){var e=t.sheetIndex+1;b("sheetSwitcher.arrow-right","click"),e>y-1&&(e=0),(0,d.switchChartTab)(t,e,x[e])},onLeftArrowClick:function(){var e=t.sheetIndex-1;b("sheetSwitcher.arrow-left","click"),e<0&&(e=y-1),(0,d.switchChartTab)(t,e,x[e])},onChange:function(){var e=this.options[this.selectedIndex];b("sheetSwitcher.select","change"),document.activeElement&&document.activeElement.blur&&document.activeElement.blur();var a=parseInt(e.value,10);(0,d.switchChartTab)(t,a,x[a])}});(0,s.subtractFromRuntimeHeight)(t,i)};var r=t.options,u=t.container,v=t.sheetIndex,p=t.previousIndex;var g=r.sheetSwitch;var f=r.sheets;if((0,i.removeSheetPlayer)(t),u.selectAll(".igc-tabs, .igc-tab-container").remove(),!(!n().get(g,"tabOptions.enabled")||(0,s.sheetsEmpty)(t))){var b=t.createInteractionCaller();var y=f.length;var w=(e.width-c.TABS_SPACING*(y-1)-2*c.TABS_BORDER)/y;var m=h(n().get(r,"style.sheetSwitch.tab"));var x=f.map(function(t){return t.categories.title});if(w>100){var k=(0,c.Tabs)({container:u,width:e.width,data:x,currentIndex:v,previousIndex:p||0,style:m,controlsColorsEnabled:n().get(r,"style.sheetSwitch.controlsColorsEnabled"),onSwitch:function(e,a){var r=a.sheetIndex,n=a.name;("keypress"!==e.type||13===e.keyCode)&&(b("sheetSwitcher.item","click",{sheetIndex:r}),t.sheetIndex!==r&&(u.selectAll(".igc-tab.active").attr("class","igc-tab").attr("aria-selected","false"),(0,o.default)(this).classed("active",!0).attr("aria-selected","true"),(0,d.switchChartTab)(t,r,n)))}});k.fits?(0,s.subtractFromRuntimeHeight)(t,k.height):(u.selectAll(".igc-tabs, .igc-tab-container").remove(),a())}else a();u.selectAll(".igc-tabs").on("keydown",function(e){var a=!0;var r;var n=t.options.sheets.length-1;var o=t.sheetIndex;switch(e.code){case"ArrowLeft":case"ArrowUp":r=o>0?o-1:n;break;case"ArrowRight":case"ArrowDown":r=o>=n?0:o+1;break;default:a=!1}a&&((0,d.switchChartTab)(t,r,x[o]),u.select(".igc-tab").node().focus(),e.preventDefault(),e.stopPropagation())})}}},3896:(t,e,a)=>{a.r(e),a.d(e,{Dropdown:()=>o});var r=a(3893);var n=".igc-content";function o(t){var e=t.container,a=t.width,o=t.data,i=t.currentIndex,s=t.title,c=t.showArrows,l=t.style,d=t.onLeftArrowClick,h=t.onRightArrowClick,u=t.onChange,v=t.controlsColorsEnabled;var p=l.colors,g=l.fontStyle;var f=e.insert("div",n).attr("role","tablist").attr("class","igc-tab-container").attr("aria-label","select sheet");var b=a;var y;var w;b>200?b-=82:c=!1;var m=g["font-size"]?parseInt(g["font-size"],10)+2:16;c&&(w=(y=f.insert("div",n).attr("class","igc-tab-switcher igc-tab-switcher__left").style("background-color",p.dropdown.leftSwitcher).attr("aria-label","select previous sheet").on("click",d)).append("div").attr("class","igc-tab-switcher-ico-container").append("div").attr("class","igc-tab-switcher-ico").style("left","".concat((31-m)/2,"px"))).append("svg").attr("viewBox","0 0 512 512").attr("height",m).attr("width",m).append("path").attr("fill",p.dropdown.leftSwitcherIcon).attr("d","m198 217l20-19 0 0 96-96 38 39-77 77 0 0-38 38 19 19 0 0 96 96-38 39-77-77 0 0-39-39-38-38z");var x=f.insert("div",n).attr("class","igc-tabs igc-tabs-dropdown").style("background-color",p.dropdown.select).attr("aria-label","select sheet");var k=x.append("div").attr("class","igc-tab").attr("aria-selected","true").attr("role","tab").attr("tabindex",0).attr("aria-controls","igc-tab-content0").style("width","".concat(b,"px"));var C=k.append("div").attr("class","igc-tab-ico");C.append("svg").attr("viewBox","0 0 512 512").attr("height",m).attr("width",m).append("path").attr("fill",p.dropdown.selectIcon).attr("d","m217 314l-19-20 0 0-96-96 39-38 77 77 0 0 38 38 19-19 0 0 96-96 39 38-77 77 0 0-39 39-38 38z");var I=k.append("select").attr("class","igc-tab-content igc-tab-select").attr("aria-label","Tab selector");var E=k.append("div").attr("class","igc-tab-name").styles(g).text(s).style("width","".concat(b,"px"));var S=E.node().offsetHeight+20;I.style("height","".concat(S,"px")),I.style("width","".concat(b,"px")),f.select(".igc-tabs-dropdown").style("height","".concat(S,"px")),c||(f.select(".igc-tabs-dropdown").style("width","".concat(a,"px")),k.style("width","".concat(a,"px")),I.style("width","".concat(a,"px"))),C.style("top","".concat((S-m)/2,"px"));var T=C.node().offsetWidth+8;E.style("max-width","".concat((c?b:a)-T,"px"));var A=parseInt(E.style("width"),10);c?E.style("left","".concat((b-A)/2,"px")):E.style("left","0px");var P=o.reduce(function(t,e,a){var r=document.createElement("option");return r.setAttribute("value",a),r.textContent=e,a===i&&r.setAttribute("selected",""),t.appendChild(r),t},window.document.createDocumentFragment());if(I.node().appendChild(P),I.node().onchange=u,c){var H=f.insert("div",n).attr("class","igc-tab-switcher igc-tab-switcher__right").style("background-color",p.dropdown.rightSwitcher).attr("aria-label","select next sheet").on("click",h);var B=H.append("div").attr("class","igc-tab-switcher-ico-container").append("div").attr("class","igc-tab-switcher-ico").style("left","".concat((31-m)/2,"px"));B.append("svg").attr("viewBox","0 0 512 512").attr("height",m).attr("width",m).append("path").attr("fill",p.dropdown.rightSwitcherIcon).attr("d","m314 295l-20 19 0 0-96 96-38-39 77-77 0 0 38-38-19-19 0 0-96-96 38-39 77 77 0 0 39 39 38 38z"),H.style("height","".concat(S,"px")),y.style("height","".concat(S,"px")),w.style("top","".concat((S-m)/2,"px")),B.style("top","".concat((S-m)/2,"px")),v&&(H.on("mouseover",function(){H.style("background",p.dropdown.rightSwitcherHover)}),y.on("mouseover",function(){y.style("background",p.dropdown.leftSwitcherHover)}),H.on("mouseout",function(){H.style("background",p.dropdown.rightSwitcher)}),y.on("mouseout",function(){y.style("background",p.dropdown.leftSwitcher)}))}return v&&(x.on("mouseover",function(){k.style("background",p.dropdown.selectHover)}),x.on("mouseout",function(){k.style("background","")})),(0,r.outerHeight)(f.node())}},3895:(t,e,a)=>{a.r(e),a.d(e,{TABS_BORDER:()=>o,TABS_SPACING:()=>i,Tabs:()=>l});var r=a(3893);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var o=3;var i=5;function s(t,e,a){var r;var o=(n(r={position:"absolute",top:0,width:"6px",height:"6px","box-shadow":"0 0 0 3px ".concat(a)},e,0),n(r,"border-top-".concat(e,"-radius"),"60%"),r);return t.append("div").attr("class","igc-tab-spacer-".concat(e)).append("div").styles(o)}function c(t){var e=t.parent,a=t.side,r=t.color,n=t.width;return e.append("div").attr("class","igc-tab-background-".concat(a)).attr("data-lookup","igc-tab-background-".concat(a)).style("background-color",r).style("width","".concat(n,"px"))}function l(t){var e=t.container,a=t.width,n=t.data,l=t.currentIndex,d=t.previousIndex,h=t.style,u=t.onSwitch,v=t.controlsColorsEnabled;var p=h.colors,g=h.fontStyle,f=h.tabColor,b=h.tabColorActive;var y=e.insert("div",".igc-content").attr("class","igc-tabs").attr("aria-label","select sheet").attr("role","tablist").style("width","".concat(a,"px"));var w=n.length;var m=(a-i*(w-1)-2*o)/w;var x=m+i;var k=y.append("div").attr("class","igc-tab-background-layer").style("margin-left","-".concat((w-d-1)*x,"px"));k.transition().style("margin-left","-".concat((w-l-1)*x,"px"));var C=c({parent:k,side:"left",color:p.tab.background,width:a-m-o});var I=k.append("div").attr("class","igc-tab-spacer").style("border-top-color",p.tab.top).style("width","".concat(m,"px"));s(I,"left",p.tab.topLeftCorner),s(I,"right",p.tab.topRightCorner);var E=c({parent:k,side:"right",color:p.tab.background,width:a-m-o});var S=y.append("div").attr("class","igc-tab-texts").attr("aria-label","select sheet").selectAll(".igc-tab").data(n.map(function(t,e){return{name:t,sheetIndex:e}}));(S=S.merge(S.enter().append("div").attr("class","igc-tab"))).attr("aria-selected",function(t){return t.sheetIndex===l?"true":"false"}).attr("role","tab").attr("tabindex",0).attr("class",function(t){return t.sheetIndex===l?"igc-tab active":"igc-tab"}).style("margin-left",function(t){return 0===t.sheetIndex?"".concat(o,"px"):"".concat(i,"px")}).style("width","".concat(m,"px"));var T=S.append("div").attr("class","igc-tab-content").attr("id",function(t){return"igc-tab-content".concat(t.sheetIndex)}).attr("data-lookup",function(t){return t.sheetIndex===l?"tab-active":null}).styles(g).style("color",function(t){return t.sheetIndex===l?b:f}).text(function(t){return t.name});var A=T._parents[0].offsetHeight+2;y.style("height","".concat(A,"px")),C.style("height","".concat(A,"px")),E.style("height","".concat(A,"px"));var P=!1;T.nodes().forEach(function(t){P=P||Math.round(m)<t.scrollWidth});var H={fits:!P};return H.fits&&(H.height=(0,r.outerHeight)(y.node()),S.on("click keypress",u)),v&&S.nodes().forEach(function(t){t.classList.contains("active")||(t.onmouseover=function(){t.style.background=p.tab.backgroundHover},t.onmouseout=function(){t.style.background=""})}),H}},3898:(t,e,a)=>{a.r(e),a.d(e,{Player:()=>c,removeSheetPlayer:()=>s});var r=a(498);var n=a.n(r);var o=a(3892);var i=a(3899);function s(t){t.sheetPlayer&&t.sheetPlayer.remove()}function c(t){var e=t.container;var a=n().get(t,"sheetPlayer.inAction",!1);if(i.loops.get(t.chartId)||a){a&&(t.sheetPlayer.inAction=!1);var r=e.select(".sheet-player");(0,o.subtractHeight)(t,r.node());return}(0,o.sheetsEmpty)(t)||(e.selectAll(".igc-sheets, .igc-tabs, .igc-tab-container, .igc-sheet-player").remove(),t.sheetPlayer=new i.SheetPlayer(t))}},3892:(t,e,a)=>{a.r(e),a.d(e,{sheetsEmpty:()=>i,subtractFromRuntimeHeight:()=>n,subtractHeight:()=>o});var r=a(3893);function n(t,e){var a=t.runtime;t.options.fixedHeight&&a&&a.height&&(a.height-=e)}function o(t,e){n(t,(0,r.outerHeight)(e))}function i(t){var e=t.options;var a=e.sheets,r=e.sheetSwitch;return!a||!a.length||1===a.length||!1===r.enabled}}}]);