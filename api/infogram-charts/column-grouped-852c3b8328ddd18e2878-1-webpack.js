(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[40],{7803:(t,e,a)=>{a.r(e),a.d(e,{ColumnGrouped:()=>H});var r=a(498);var i=a.n(r);var n=a(7713);var o=a(3876);var s=a(1117);var l=a(3862);var c=a(3863);var u=a(420);var d=a(3807);var h=a(7723);var v=a(7796);var g=a(3911);var f=a(7755);var p=a(3912);var m=a(7709);var y=a(7715);var b=a(7717);var x=a(7764);var O=a(7704);var S=a(1114);var C=a(7797);var k=a(7705);var w=a(7724);var D=a(3903);var T=a(3900);var L=a(1115);var E=a(1113);var A=a(3909);var G=a(7719);function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=Array(e);a<e;a++)r[a]=t[a];return r}function B(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t,e,a){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,a){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=z(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(a||t):i.value}})(t,e,a||t)}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(0,a(3861).putGraph)("column-grouped",C.ColumnGrouped);var H=function(t){"use strict";var e;!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(r,t);var a=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t=z(r),a;if(e){var i=z(this).constructor;a=Reflect.construct(t,arguments,i)}else a=t.apply(this,arguments);var n;return(n=a)&&("object"==(n&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n)||"function"==typeof n)?n:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function r(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,r),a.apply(this,arguments)}var v,H;return H=[{key:"getClassName",value:function(){return"ColumnGrouped"}}],v=[{key:"render",value:function(){var t=this;this.detectDimensions();var e=this.options,a=this.root;var r=new w.Renderer({instance:this});var c=this.getSheetData();var u=(0,p.formatHelper)(c);var v=this.runtime={width:e.width,height:e.height,components:{},layout:{},inanimate:(0,g.inanimated)(e),sheet:c,formatter:u};var C="absolute"===e.series.data;var G=C?(0,h.getAllGraphs)(this):[this.prepareSheetData(c,this.sheetIndex)];var B=C?G[this.sheetIndex]:G[0];this.createTickIntervals(),(0,T.Controls)(this,{width:e.width}),(0,A.DownloadButton)(this,e.style.legend);var j=(0,D.legendHelper)({instance:this});if(!(d.Chart.prototype.sheetsNotFound.call(this)||this.sheetsNotFound(B)||this.failSafeByHeight(40))){var z=v.margin=v.layout.margin={top:0,right:2,bottom:0,left:0};var P=v.layout.marginTitle={left:0,right:0,top:0,bottom:0};var H=v.layout.marginAxis={left:0,right:0};var V=v.limits={maxCategoryWidth:0,maxCategoryHeight:10};var N=v.bottomLabelPadding={top:6,right:2,bottom:4,left:2};var R=e.style.axis,M=R.x,W=R.y;var _;var Z=function(t){if(Array.isArray(t))return t}(_=c.axis)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var r=[];var i=!0;var n=!1;var o,s;try{for(a=a.call(t);!(i=(o=a.next()).done)&&(r.push(o.value),!e||r.length!==e);i=!0);}catch(t){n=!0,s=t}finally{try{i||null==a.return||a.return()}finally{if(n)throw s}}return r}}(_,2)||function(t,e){if(t){if("string"==typeof t)return I(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if("Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(t,e)}}(_,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),F=Z[0],U=Z[1];v.xAxisOptions=F,v.yAxisOptions=U;var q=v.categoryData=this.getCategoryData(B);var X=(0,D.legendFiltered)(this);var $=(0,h.createGetDomain)("y");var J=v.yDomain=X?$(B):(0,h.createGetDomainAbsolute)($)(G);var K=(0,k.limit)(U,J);var Q=J[0]<0;var Y=v.yScale=(0,o.default)().domain(J).clamp(K);var tt=c.categories.categoryWidth;var te=tt&&"string"==typeof tt&&"%"===tt[tt.length-1];tt=tt?Math.round(parseFloat(c.categories.categoryWidth)):null,v.categoryLayout=c.categories.layout;var ta=this.createAnimationCounter(3);var tr=v.spacing={maxBeforeXAxisTick:50,beforeCategoryBorder:Q?N.top:0,beforeBottomCategories:5};var ti=v.components.yAxisLeftText=(0,y.Axis)().scale(Y).orient("left").style(W.tick);var tn=i().get(F,"title");this.titleLayout(["x","y"]);var to=v.width-z.left-P.left-z.right-P.right;var ts={width:0,height:0};if(U.ticks){var tl=(0,O.ensureMinTicks)(Y,this.runtime.yTickInterval);ts=this.yTicksMetrics(tl),H.left=ts.width,z.top=ts.height}var tc=v.height-z.top-P.top-z.bottom-P.bottom;V.maxCategoryHeight+=Math.floor(.27*tc),v.graphWidth=to-H.left-H.right;var tu=(0,n.default)(0,q.length);var td=1===tu.length;var th=td?1:void 0;var tv=v.xScale=(0,x.Ordinal)().domain(tu).rangeBandsPct([0,v.graphWidth],te?.01*tt:th);var tg=!te&&tt;tg&&(tv=v.xScale=(0,x.Ordinal)().domain(tu).rangeBandsFixed([0,v.graphWidth],tt)),v.xScaleResize=tg?function(t,e){t.rangeBandsFixed(e,tt)}:function(t,e){t.rangeBandsPct(e,te?.01*tt:th)},v.igcLeftOffset=z.left+P.left+H.left,V.maxCategoryWidth=tv.rangeBand()+tv.padding()-N.left-N.right,td&&(V.maxCategoryWidth=v.graphWidth-N.left-N.right);var tf=this.createCategoryLabels();V.maxCategoryHeight=tf.height+N.top+N.bottom;var tp=q.length!==tf.renderData.length||!F.ticks;tp&&(tf.renderData=[],V.maxCategoryHeight=tn?N.top:1);var tm=(0,m.Bottom)().style(M.tick).data(F.ticks?tf.renderData:[]).textAlign(tf.renderData.textAlign).bounds({height:V.maxCategoryHeight,y:tc-V.maxCategoryHeight+tr.beforeBottomCategories});var ty=v.graphHeight=tc-V.maxCategoryHeight-tr.beforeCategoryBorder;Y.range([ty,0]);var tb=i().get(c,"graphOptions.column",{}),tx=tb.showValues,tO=tb.valuesOutside;tx&&tO&&(0,f.adjustScaleToOutsideValues)({scale:Y,graphs:X?B:i().flatten(G),axisOptions:U,getText:function(e){return t.runtime.formatter.labels.format(e.yLabel)},getTextMetrics:function(e){return(0,S.getAllTextDimensions)(e,t.options.style.graph.item.value)},getValue:function(t){return t.y},getTextSize:function(t){return t.height},adjust:function(t,e){return t+e},barSize:function(t,e){return t<0?e(t)-e(0):e(0)-e(t)}});var tS=v.components.yGridLines=(0,b.GridLines)().scale(Y).orient(b.GridLines.ORIENTS.horizontal).tickSize(-to).highlightZero(c.grid.horizontalZeroHighlight).style(e.style.grid).offset({left:-H.left});var tC=(0,b.GridLines)().scale(tv).orient(b.GridLines.ORIENTS.vertical).tickSize(ty).highlightZero(c.grid.verticalZeroHighlight).style(e.style.grid);c.grid.vertical||tC.tickValues([]),ti.textOffset(-(.25*ts.height)).offset({left:-H.left}),this.yTicksSetup(),this.gridSetupHorizontal();var tk=0;U.ticks&&(tk=ti.getBorderingTick()-ts.height)>0&&(tk=0),v.layout.firstTickOffset=tk,this.titleComponents(["x","y"]);var tw=v.components,tD=tw.bottomTitle,tT=tw.leftTitle;tD.dispatch().on("animationEnd",ta);var tL={igc:{x:v.igcLeftOffset,y:z.top+P.top}};v.inanimate&&(0,g.removeAnimation)([tT,tD,tC,tS,ti,tm]),this.containerSetup();var tE=a.select(".igc");var tA=l[e.animation.ease];var tG=e.animation.duration;a.attr("width",v.width).attr("height",v.height),r.add(function(){a.transition().ease(tA).duration(tG).on("start",function(){t.events.call("startAnimation")}).on("end",function(){ta()}),tE.attr("transform","translate(".concat(tL.igc.x,", ").concat(tL.igc.y,")"))}),r.addGrid(ti,"igc-y-axis-text"),r.addGrid(tS,"igc-ygrid"),r.addGrid(tC,"igc-xgrid"),r.addGrid(tm,"igc-x-axis-text"),r.addGraph([{graphs:B,x:tv,y:Y,textStyle:e.style.graph.item.value,legend:j,tooltip:(0,E.createStyledTooltip)(this),transitionDuration:tG,animationEnd:ta,groupOpts:{scaleType:tg?"fixed":"pct",only:td}}]),c.grid.horizontal&&F.ticks&&!tp?r.addGrid(function(t){t.each(function(){var t=(0,s.default)(this).selectAll(".igc-x-axis-border-line").data([0]);var a=tG;0===t.size()&&(a=0),(t=t.merge(t.enter().append("rect"))).attr("class","igc-x-axis-border-line").transition().ease(tA).duration(a).attr("x",-H.left).attr("width",v.graphWidth+z.right+H.left).attr("y",ty+tr.beforeCategoryBorder).attr("height",2).styles({fill:e.style.grid.color,stroke:"none","stroke-width":0})})},"igc-x-axis-border"):r.add(function(){a.select(".igc .igc-grid .igc-x-axis-border").remove()}),c.grid.horizontal&&c.grid.showSeparators?r.addGrid(function(t){t.each(function(){if(tp){(0,s.default)(this).selectAll(".igc-x-axis-separator").remove();return}var t=v.xScale;var a=(0,O.getScalePositions)(t);var r=a.slice(0);var i=a[a.length-1];var n=t.padding()/2;var o=0;var l=tG;1===a.length?r.push(i+t.bandwidth()+2*n):(o=a[1]-(a[0]+t.bandwidth()),r.push(i+t.bandwidth()+o));var c=(o=t.padding())/2;var u=(0,s.default)(this).selectAll(".igc-x-axis-separator").data(r);0===u.size()&&(l=0);var d="tilted"===tf.layout?2*tr.beforeBottomCategories:V.maxCategoryHeight;u.exit().remove(),(u=u.enter().append("rect").attr("class","igc-x-axis-separator").merge(u)).attr("y",ty+tr.beforeCategoryBorder).attr("x",function(e){return Math.round(e-c-t.bandwidth()/2)}).attr("height",d).attr("width",1).style("opacity",L.eps).transition().ease(tA).duration(l).style("opacity",1).styles({fill:e.style.grid.color,stroke:"none","stroke-width":0})})},"igc-x-axis-separators"):r.add(function(){a.select(".igc .igc-grid .igc-x-axis-separators").remove()}),r.addTitle(tT,"igc-title-left"),r.addTitle(tD,"igc-title-bottom"),r.start()}}},{key:"graphInstanceSetup",value:function(t,e,a,r){var i=e.data.length;var n=this.legendData,o=this.chartId;var s=this.runtime.formatter;var l=e.colors;var d=r.legend,h=r.tooltip,v=r.groupOpts;var f=Object.values(n).some(function(t){return!1===t.active});var p=this.graphData({data:e.data,behaviour:C.ColumnGrouped.BEHAVIOURS.COLUMN_GROUPED,colors:l,filter:f?n:void 0,groupOpts:v});var m=(0,u.default)("highlightStart","highlightEnd","animationStart","animationUpdateStart","animationEnterStart","animationEnd","animationUpdateEnd","animationEnterEnd","animationTextEnd","openUrl");var y=(0,D.createListenToLegend)({easing:c.linear,ns:"shape",opacity:null,dispatch:m,alpha:this.options.opacity});var b=(0,G.createAddMouseEvents)({dispatch:m,legend:d,opacity:null,tooltip:h,chartId:o,tooltipText:function(t){return"".concat(t.xLabel,": ").concat(s.tooltip.y.format(t.yLabel))},tooltipValue:function(t){return"".concat(t.groupLabel)},colors:l});d&&d.data().forEach(function(t){d.addListener({id:"".concat(o,"_").concat(t.groupId),dispatch:m})});var x=(0,g.removeDelay)(this,function(t,e){return e/i*(r.transitionDuration-200)});t.data(p).alpha(this.options.opacity).listenToLegend(y).addMouseEvents(b).dispatch(m).transitionDelay(x).transitionDuration(r.transitionDuration)}},{key:"emptySheetData",value:function(){return i().merge({},j(z(r.prototype),"emptySheetData",this).call(this),{categories:{padding:20},graphOptions:{column:{valuesOutside:!1}},series:[{type:"column-grouped"}]})}},{key:"prepareSheetData",value:function(t,e){var a=t.categories.colors;var r=i().get(t,"graphOptions.column",{}),n=r.showValues,o=r.valuesOutside;t.categories.data||(t.categories.data=[]);var s=t.categories.data.length;var l=t.categories.data.map(function(t,e){return{colors:a,data:[],categoryIdx:e,showValues:!0===n,valuesOutside:!!o,type:"column-grouped"}});t.series.forEach(function(e,a){var r=i().get(e,"index",a);for(var n=0;n<s;n++){var o=t.categories.data[n];if(void 0!==o){var c=e.data[n];l[n].data.push({x:n,y:(0,S.replaceBlank)(c,null),xLabel:(0,S.replaceBlank)(e.title),yLabel:(0,S.replaceBlank)(e.rawData[n]),groupLabel:(0,S.replaceBlank)(o),seriesIdx:r,link:i().get(e,"links[".concat(n,"]"),null)})}}});var c=l.length;if(l.forEach(function(t){var e=t.data.length;var a=0;0!==e&&(t.data.forEach(function(t){null===t.y&&a++}),a===e&&(t.data=[]))}),(l=l.filter(function(t){return t.data&&t.data.length>0})).length!==c&&l.forEach(function(t,e){t.data.forEach(function(t){t.x=e})}),e===this.sheetIndex){var u=(0,D.createLegendData)(this);l.forEach(function(t){t.data=t.data.filter(function(e){return u({color:(0,S.getColor)(e.seriesIdx,t.colors),title:e.xLabel,groupId:e.seriesIdx}).active})})}return l}}],B(r.prototype,v),H&&B(r,H),r}(v.ColumnClass)},7723:(t,e,a)=>{a.r(e),a.d(e,{createGetDomain:()=>d,createGetDomainAbsolute:()=>u,getAllGraphs:()=>c,getGraphsDomainByProperty:()=>h});var r=a(498);var i=a.n(r);var n=a(3915);var o=a(3906);var s=a(3876);var l=a(7705);function c(t){var e=t.options.sheets;var a=e.length;var r=[];for(var n=0;n<a;n++){var o=e[n];var s=i().merge({},t.emptySheetData(),o);r.push(t.prepareSheetData(s,n))}return r}function u(t){return function(e){var a;return e.forEach(function(e,r){var i=t(e);0===r?a=i.slice(0):(a[0]=Math.min(i[0],a[0]),a[1]=Math.max(i[1],a[1]))}),a}}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x";var e=function(e){return e[t]};return function(t){var a=[(0,n.default)(t,function(t){return(0,n.default)(t.data,e)}),(0,o.default)(t,function(t){return(0,o.default)(t.data,e)})];return(0,l.ensureZeroEqual)(a),(0,l.ensureZero)(a),(0,s.default)().domain(a).nice(10).domain()}}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y";var a=[].concat(e);var r=[(0,n.default)(t,function(t){return(0,n.default)(t.data,function(t){return(0,n.default)(a.map(function(e){return t[e]}))})}),(0,o.default)(t,function(t){return(0,o.default)(t.data,function(t){return(0,o.default)(a.map(function(e){return t[e]}))})})];return(0,l.ensureZeroEqual)(r),r}},7755:(t,e,a)=>{a.r(e),a.d(e,{adjustScaleToOutsideValues:()=>s});var r=a(498);var i=a.n(r);var n=a(1114);function o(){return{text:0,bar:0,value:0,combined:0}}function s(t){var e=t.scale,a=t.graphs,r=t.axisOptions,s=t.getText,l=t.getTextMetrics,c=t.getValue,u=t.getTextSize,d=t.adjust,h=t.barSize,v=t.textPadding,g=void 0===v?3:v;var f=(0,n.isNumber)(r.maxLimit);var p=(0,n.isNumber)(r.minLimit);if(!f||!p){var m=e.domain();var y=e.copy();y.clamp(!1);var b=l(i().flatten(a.map(function(t){return t.data.map(s)})));var x=i().flatten(a.map(function(t){return t.data}));var O=x.length;var S={neg:o(),pos:o(),bar:{neg:o(),pos:o()}};for(;O--;){var C=c(x[O]);var k=h(C,y);var w=u(b.collection[O])+g;var D=k+w;var T={bar:k,value:C,text:w,combined:D};C>=0?(S.pos.combined<D&&(S.pos=T),S.bar.pos.bar<k&&(S.bar.pos=T)):(S.neg.combined<D&&(S.neg=T),S.bar.neg.bar<k&&(S.bar.neg=T))}var L=Math.max(y(m[0]),y(m[1]));if(S.neg.bar+S.pos.bar===0)return;if(f&&!p){var E=L-S.neg.text;var A=(m[1]-S.neg.value)/(E/L);e.domain([m[1]-A,m[1]])}else if(!f&&p){var G=L-S.pos.text;var I=(S.pos.value-m[0])/(G/L);e.domain([m[0],m[0]+I])}else{var B=S.bar.neg.bar;var j=S.neg.text+S.pos.text;var z=S.neg.bar+S.pos.bar;var P=(m[1]-m[0])/((L-j)/z);var H=[m[0],m[0]+P];y.domain(H);var V=y.invert(0)-y.invert(B-S.neg.combined);e.domain(H.map(function(t){return d(t,V)}))}e.nice(10)}}},7724:(t,e,a)=>{function r(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}a.r(e),a.d(e,{Renderer:()=>i});var i=function(){"use strict";function t(e){if(!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,t),!e.instance)throw Error("No instance provided");this.renderables=[],this.instance=e.instance}var e,a;return e=[{key:"start",value:function(){var t=this.instance;var e=t.root;var a=e.select(".igc");var r={igc:a,grid:a.select(".igc-grid"),title:e.select(".igc-titles")};this.renderables.forEach(function(e){if("function"==typeof e){e();return}if("object"==typeof e){if(-1!==["grid","title"].indexOf(e.parent)){t.renderPart(r[e.parent],e.callable,e.className);return}if("igc"===e.parent){t.renderGraphs(r.igc,e.callable);return}t.renderPart(e.parent,e.callable,e.className)}})}},{key:"add",value:function(t){return this.renderables.push(t),t}},{key:"addGrid",value:function(t,e){var a={callable:t,className:e,parent:"grid"};return this.add(a),a}},{key:"addTitle",value:function(t,e){var a={callable:t,className:e,parent:"title"};return this.add(a),a}},{key:"addParent",value:function(t,e,a){var r={callable:e,className:a,parent:t};return this.add(r),r}},{key:"addGraph",value:function(t){var e={callable:t,parent:"igc"};return this.add(e),e}}],r(t.prototype,e),a&&r(t,a),t}()},7802:(t,e,a)=>{a.r(e),a.d(e,{default:()=>c});var r=a(498);var i=a.n(r);var n=a(7741);var o=a(7799);var s=a(7803);var l=Object.assign({},n.default);l.instanceClass=s.ColumnGrouped,l.setupChartOptions=function(){n.default.setupChartOptions.call(this);var t=this.custom;this.chartOptions.series.data=!0===t.absoluteDistribution?"absolute":"separate"},l.setupChartSheetOptionsItem=function(t){var e,a;var r=o.default.setupChartSheetOptionsItem.call(this,t);var n;return void 0!==t.showInLineValuesOutside&&i().set(r,"graphOptions.column.valuesOutside",t.showInLineValuesOutside),i().set(r,"grid.showSeparators",null===(n=null==t?void 0:null===(a=t.axis)||void 0===a?void 0:null===(e=a.x)||void 0===e?void 0:e.showSeparators)||void 0===n||n),r};let c=Object.freeze(l)},7799:(t,e,a)=>{a.r(e),a.d(e,{default:()=>v});var r=a(498);var i=a.n(r);var n=a(7800);var o=a(7741);var s=a(7742);var l=a(7744);var c=a(7745);var u=a(7748);var d=a(7750);var h=Object.assign({},o.default);h.instanceClass=n.ColumnStacked,h.setupChartOptions=function(){var t,e,a,r;o.default.setupChartOptions.call(this);var i=this.custom,n=this.chartOptions;var s;var l;n.series.data=!0===i.absoluteDistribution?"absolute":"separate",n.style.graph.item.value.hideOverlapping=null===(s=null==i?void 0:i.hideOverlapValues)||void 0===s||s,n.style.graph.item.value.align=null!==(l=null==i?void 0:null===(r=i.labels)||void 0===r?void 0:null===(a=r.graph)||void 0===a?void 0:null===(e=a.item)||void 0===e?void 0:null===(t=e.value)||void 0===t?void 0:t.alignVertical)&&void 0!==l?l:"bottom"},h.setupChartSheetOptionsItem=function(t){var e={categories:{colors:i().merge([],this.themeColors,t.colors||this.colors)},grid:{vertical:!1,horizontal:!0},graphOptions:{column:{showValues:!!t.showInLineValues}},axis:[{},{}]};(0,s.default)(e,t,this.charts),t.categoryWidthAuto||(e.categories.categoryWidth=t.categoryWidth||this.defaultCategoryWidth);var a=e.axis[1];return a.title=t.ylabel||"",e.axis[0].title=t.xlabel||"","number"==typeof t.ymin&&(a.minLimit=t.ymin),"number"==typeof t.ymax&&(a.maxLimit=t.ymax),e.grid.horizontal=(0,l.getGridSettingsHorizontal)(t),e.grid.horizontalZero=(0,c.getZeroBaselineHorizontal)(t),(0,u.assignAxisTickInterval)(e,t),(0,u.assignAxisTicks)(e,t),(0,d.assignNumberFormatValues)({sheetOptions:e,custom:t,axis:[{id:"y",path:""},{id:"y1",path:"axis.y"}],inputDecimalSeparator:this.inputDecimalSeparator}),(0,d.assignNumberFormatLabels)({sheetOptions:e,custom:t,affixes:[{id:"y",path:""},{id:"label",path:""}],inputDecimalSeparator:this.inputDecimalSeparator}),(0,u.assignCategoryLabelLayout)(e,t),e};let v=Object.freeze(h)}}]);