(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([["infogram-charts/dep-22"],{7720:(t,r,e)=>{e.r(r),e.d(r,{falp:()=>l});var a=e(7721);var n=e.n(a);function o(t){return(t-t%4)/4}function i(t){var r=4*t;return Array.from({length:4},function(t,e){return r+e})}function l(t){var r=t.data,e=t.style,a=t.metrics,l=t.dataPointRadius,u=t.valueProperty,v=void 0===u?"yLabel":u,c=t.hideOverlapping,s=void 0===c||c,d=t.width,f=t.height;var h=[];var x=[];var y=[];if(d<1||f<1)return[];var g=new(n())({width:d,height:f});var p;r.forEach(function(t,r){if(null===t.y||null===t.x){x.push(r);return}var e=a.collection[r];for(var n=0;n<4;n++){var o={x:t.x,y:t.y,width:e.width,height:e.height,index:r,labelIndex:4*r+n,text:t.yLabel};!function(t,r,e,a){switch(t){case 0:r.x-=e.width/2,r.y-=Math.max(e.height/2,a)+e.height;return;case 1:r.x-=e.width/2,r.y+=Math.max(e.height/2,a);return;case 2:r.x-=e.width+a,r.y-=e.height/2;return;case 3:r.x+=a,r.y-=e.height/2}}(n,o,e,l),y[o.labelIndex]=o,g.push(o)}});var b=(p=Array(4*r.length).fill(0)).map(function(t,r){return p.map(function(t,e){return r===e?0:o(r)===o(e)?1:0})});g.each(function(t){var r=g.colliding(t);var e=!0,a=!1,n=void 0;try{for(var o=r[Symbol.iterator](),i;!(e=(i=o.next()).done);e=!0){var l=i.value;b[t.labelIndex][l.labelIndex]=1}}catch(t){a=!0,n=t}finally{try{e||null==o.return||o.return()}finally{if(a)throw n}}});var m=function(t){var r=function(t){var r=Number.MAX_SAFE_INTEGER;var e=[];for(var a=0,n=t.length;a<n;a++){var o=t[a].conflicts.length;o<=r&&(o===r?e.push(a):(e=[a],r=o))}return e};var e=function(t,r){var e=Number.MAX_SAFE_INTEGER;var a=-1;var n=Number.MAX_SAFE_INTEGER;var o=!0,i=!1,l=void 0;try{for(var u=t[Symbol.iterator](),v;!(o=(v=u.next()).done);o=!0)!function(){var t=v.value;var o=r[t];var i=r.filter(function(t){return t.point===o.point}).length;(i<e||e===i&&n>=o.point)&&(n=o.point,e=i,a=t)}()}catch(t){i=!0,l=t}finally{try{o||null==u.return||u.return()}finally{if(i)throw l}}return a};var a=[];for(var n=t.length,l=0;l<n;l++){var u=o(l);var v={id:l,conflicts:[],point:u};for(var c=0;c<n;c++)l!==c&&1===t[l][c]&&v.conflicts.push(c);a.push(v)}var s=[];for(;a.length>0;)!function(){var t=r(a);var n=t[0];void 0!==t[1]&&(n=e(t,a));var o=[];var i=a[n];s.push(i.id),o.push(i.id),a.splice(n,1);for(var l=0,u=i.conflicts.length;l<u;l++)!function(t,r){var e=i.conflicts[t];var n=a.findIndex(function(t){return t.id===e});-1!==n&&(o.push(a[n].id),a.splice(n,1))}(l,0);var v=!0,c=!1,d=void 0;try{for(var f=a[Symbol.iterator](),h;!(v=(h=f.next()).done);v=!0){var x=h.value;x.conflicts=x.conflicts.filter(function(t){return!o.includes(t)})}}catch(t){c=!0,d=t}finally{try{v||null==f.return||f.return()}finally{if(c)throw d}}}();var d=t.length/4;if(s.length!==d){var f=s.map(function(t){return o(t)});for(var h=0;h<d;h++)!function(r){if(!f.includes(r)){var e=Number.MAX_SAFE_INTEGER;var a=-1;var n=i(r);var o=!0,l=!1,u=void 0;try{for(var v=n[Symbol.iterator](),c;!(o=(c=v.next()).done);o=!0)!function(){var r=c.value;var n=s.filter(function(e){return 1===t[r][e]}).length;e>n&&(e=n,a=r)}()}catch(t){l=!0,u=t}finally{try{o||null==v.return||v.return()}finally{if(l)throw u}}s.push(a)}}(h)}s.sort(function(t,r){return t-r});for(var x=0;x<5;x++){var y=function(r){var e=i(r);var a=Number.MAX_SAFE_INTEGER;var n=-1;var o=!0,l=!1,u=void 0;try{for(var v=e[Symbol.iterator](),c;!(o=(c=v.next()).done);o=!0){var d=function(){var e=c.value;var o=s.filter(function(a,n){return n!==r&&1===t[e][a]}).length;if(a>o&&(a=o,n=e),0===a)return"break"}();if("break"===d)break}}catch(t){l=!0,u=t}finally{try{o||null==v.return||v.return()}finally{if(l)throw u}}-1===n||s.includes(n)||(s[r]=n)};for(var g=0;g<d;g++)y(g)}return s}(b);if(s){g=new(n())({width:d,height:f});var L=!0,w=!1,I=void 0;try{for(var k=m[Symbol.iterator](),A;!(L=(A=k.next()).done);L=!0){var P=y[A.value];P&&g.push(P)}}catch(t){w=!0,I=t}finally{try{L||null==k.return||k.return()}finally{if(w)throw I}}}return r.forEach(function(t,r){var n;if(!x.includes(r)){var o=y[m[r]];if(s&&g.colliding(o).length>0){g.remove(o);return}var i=a.collection[r];var l={fillColor:e.color,textX:o.x,textY:o.y+i.baseLineOffset,textAnchor:"start",text:t[v],yPct:t.yPct,index:r,seriesIdx:t.seriesIdx,yLabel:t.yLabel,xLabel:t.xLabel,groupLabel:t.groupLabel,categoryLabel:t.categoryLabel,color:(null==t?void 0:null===(n=t.colors)||void 0===n?void 0:n[0])||(null==t?void 0:t.color),textWidth:i.width,textHeight:i.height,yAxisIndex:t.yAxisIndex};h.push(l)}}),h}},7722:(t,r,e)=>{e.r(r),e.d(r,{HideMostColliding:()=>o});var a=e(7721);var n=e.n(a);function o(t){var r=t.data,e=t.metrics,a=t.style,o=t.dataPointRadius,i=t.valueProperty,l=void 0===i?"yLabel":i,u=t.hideOverlapping,v=t.width,c=t.height;var s=[];var d=[];var f=[];if(v<1||c<1)return[];if(void 0===u||u){var h=new(n())({width:v,height:c});r.forEach(function(t,r){if(null===t.y||null===t.x){d.push(r);return}var a=e.collection[r];var n={x:t.x-a.width/2,y:t.y-o-a.baseLineOffset,width:a.width,height:a.height,index:r};h.push(n)}),h.each(function(t){var r=h.colliding(t).length;r&&f.push({collisions:r,item:t})}),f.sort(function(t,r){return r.collisions-t.collisions}),f.forEach(function(t){var r=t.item;h.colliding(r).length&&(h.remove(r),d.push(r.index))})}else r.forEach(function(t,r){(null===t.y||null===t.x)&&d.push(r)});return r.forEach(function(t,r){var n;if(!d.includes(r)){var i={fillColor:a.color,textX:t.x,textY:t.y-o,textAnchor:"middle",text:t[l],yPct:t.yPct,index:r,seriesIdx:t.seriesIdx,yLabel:t.yLabel,xLabel:t.xLabel,groupLabel:t.groupLabel,categoryLabel:t.categoryLabel,color:(null==t?void 0:null===(n=t.colors)||void 0===n?void 0:n[0])||(null==t?void 0:t.color),textWidth:e.collection[r].width,textHeight:e.collection[r].height-e.collection[r].baseLineOffset,yAxisIndex:t.yAxisIndex};s.push(i)}}),s}},7719:(t,r,e)=>{e.r(r),e.d(r,{addOutline:()=>b,addOutlineAlways:()=>m,createAddMouseEvents:()=>w,createColumnLabelData:()=>I,createLabel:()=>g,createLineLabelData:()=>P,getColumnLayout:()=>L,labelInfo:()=>p,renderColumnLabels:()=>k,renderLineLabels:()=>E,setupFillColor:()=>y});var a=e(498);var n=e.n(a);var o=e(1997);var i=e(1115);var l=e(1114);var u=e(3905);var v=e(1998);var c=e(7720);var s=e(7722);function d(t,r,e,a,n,o,i){try{var l=t[o](i);var u=l.value}catch(t){e(t);return}l.done?r(u):Promise.resolve(u).then(a,n)}function f(t){return function(){var r=this,e=arguments;return new Promise(function(a,n){var o=t.apply(r,e);function i(t){d(o,a,n,i,l,"next",t)}function l(t){d(o,a,n,i,l,"throw",t)}i(void 0)})}}function h(t,r){var e,a,n,o,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(e)throw TypeError("Generator is already executing.");for(;i;)try{if(e=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=r.call(t,i)}catch(t){o=[6,t],a=0}finally{e=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}var x={falp:c.falp,"hide-most-colliding":s.HideMostColliding};function y(t){var r=n().get(t,"color.method","manual");var e=n().get(t,"color.".concat(r));var a;switch(r){case"manualWithControls":a=n().get(e,"fill.enabled",!1)?n().get(e,"fill.value","#000000"):function(t){return t.color};break;case"manual":a=n().get(e,"fill","#000000");break;default:var i,l,u;i=n().get(e,"dark","#000000"),l=n().get(e,"light","#ffffff"),u=n().get(e,"background","#ffffff"),a=function(t){return o.Colors.getContrastYIQ(t.inside?(0,v.rgb)(t.color).hex():(0,v.rgb)(u).hex(),(0,v.rgb)(i).hex(),(0,v.rgb)(l).hex())}}return a}function g(t,r,e){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(t,r){return r};var o=y(e);var l=t.selectAll("text").data(r,a);return l.transition().duration(0),l.exit().remove(),(l=l.merge(l.enter().append("text").style("opacity",i.eps))).attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).attr("text-anchor",function(t){return t.textAnchor}).attr("fill",o).style("cursor","default").styles(n().omit(e,["color"])),l}function p(t){var r=n().get(t,"color.method","contrast");var e=n().get(t,"color.manual.stroke");var a=n().get(t,"color.manual.fill","#000000");if("manualWithControls"===r){var o,i,l,u,v,c,s,d,f,h;return{manual:null==t?void 0:null===(l=t.color)||void 0===l?void 0:null===(i=l.manualWithControls)||void 0===i?void 0:null===(o=i.stroke)||void 0===o?void 0:o.enabled,stroke:null==t?void 0:null===(c=t.color)||void 0===c?void 0:null===(v=c.manualWithControls)||void 0===v?void 0:null===(u=v.stroke)||void 0===u?void 0:u.value,fill:null===(h=n().style)||void 0===h?void 0:null===(f=h.color)||void 0===f?void 0:null===(d=f.manualWithControls)||void 0===d?void 0:null===(s=d.fill)||void 0===s?void 0:s.value}}return{manual:"manual"===r&&e&&e!==a,stroke:e,fill:a}}function b(t,r,e){var a=p(r);if(t.selectAll("tspan").remove(),a.manual){var n=a.stroke,o=a.fill;t.append("tspan").attr("class","text-outline").attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).attr("stroke",n).attr("fill",n).attr("stroke-width","3px").attr("stroke-linejoin","round").text(e),t.append("tspan").attr("class","text-outline-fill").attr("fill",o).attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).text(e)}else t.text(e)}function m(t,r){var e,a,n;var i;t.selectAll("tspan").remove();var l=null!==(i=null==r?void 0:null===(e=r.color)||void 0===e?void 0:e.method)&&void 0!==i?i:"manual";var u;var c=null!==(u=null==r?void 0:null===(a=r.color)||void 0===a?void 0:a.contrast)&&void 0!==u?u:{};var s;var d=null!==(s=null==r?void 0:null===(n=r.color)||void 0===n?void 0:n.manual)&&void 0!==s?s:{};var f;var h=null!==(f=null==c?void 0:c.dark)&&void 0!==f?f:"#000000";var x;var y=null!==(x=null==c?void 0:c.light)&&void 0!==x?x:"#ffffff";var g;var p="contrast"===l?function(t){return t.color}:null!==(g=d.stroke)&&void 0!==g?g:"#000000";var b;var m="contrast"===l?function(t){return o.Colors.getContrastYIQ((0,v.rgb)(t.color).hex(),(0,v.rgb)(h).hex(),(0,v.rgb)(y).hex())}:null!==(b=d.fill)&&void 0!==b?b:"#ffffff";"contrast"===l||"manual"===l&&p!==m?(t.append("tspan").attr("class","text-outline").attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).attr("stroke",p).attr("fill",p).attr("stroke-width","3px").attr("stroke-linejoin","round").text(function(t){return t.text}),t.append("tspan").attr("class","text-outline-fill").attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).attr("fill",m).text(function(t){return t.text})):t.text(function(t){return t.text})}function L(t){var r=t.metrics,e=t.data,a=t.isStacked,o=t.padding;var i=n().get(e,"[0].width",0);var l=i>=r.height;var u=i>=r.width;if(!a)return{vertical:l,horizontal:u};var v={horizontal:0,vertical:0};var c=r.height;var s=c-r.baseLineOffset;null!=o||(o=.25*c);var d=o-s;r.collection.reduce(function(t,r,a){var n=e[a];var i=Math.abs(n.width);var l=Math.abs(n.height);var u=r.height+d;var v=r.width+o;return t.horizontal+=+(r.width<=i&&u<=l),t.vertical+=+(v<=l&&r.height<=i),t},v);var f=0===v.horizontal&&v.horizontal===v.vertical;return u=v.horizontal>=v.vertical,{horizontal:u=!f&&u,vertical:!f&&!u}}function w(t){var r=t.dispatch,e=t.legend,a=t.opacity,n=void 0===a?null:a,o=t.tooltip,i=t.chartId,v=t.tooltipText,c=t.tooltipValue,s=t.colors;return function(t){(0,u.addMouseEvents)(t,r,o,v,c),t.on("mousemove",function(t,r){var a=(0,l.getMousePosition)(t);var u=r.color||(0,l.getColor)(r.seriesIdx,s);var d=v(r);var f=c(r);o().setText(d).setValue(f).setPosition(a,u),null!==n&&e&&e.sendListeners(r.seriesIdx,i,"highlightStart")}).on("mouseout.labels",function(t,r){null!==n&&e&&e.sendListeners(r.seriesIdx,i,"highlightEnd")})}}function I(t){var r=t.data,e=t.style,a=t.showValues,n=t.maxY,o=t.isWaterfall,i=t.isStacked,u=t.textFormat,v=t.valuesOutside,c=t.hideOverlapping,s=void 0===c||c;if(a){var d=r.map(function(t){return u({text:t.yLabel})});var f=(0,l.getAllTextDimensions)(d,e);var h=L({metrics:f,data:r,isStacked:i});var x=h.horizontal||h.vertical||!s;var y=[];if(x){var g={data:r,metrics:f,style:e,maxY:n,hideOverlapping:s};if(o)y=function(t){var r=t.data,e=t.metrics,a=t.style;var n=[];var o=[];var i=function(t,r){var a=e.collection[r];var n=(0,l.extendBBox)({x:t.xPos,y:t.yPos-t.height/2+.25*a.height-a.baseLineOffset,width:a.width,height:a.height});return n.xLabel=t.xLabel,n};var u=r.length;for(var v=0;v<u;v++){var c=r[v];if(null===c.x&&o.push(v),!o.includes(v)){var s=i(c,v);for(var d=0;d<u;d++){var f=r[d];if(!o.includes(d)){var h=i(f,d);v===d||s.x>h.x2||s.x2<h.x||s.y>h.y2||s.y2<h.y||o.push(d)}}}}return r.forEach(function(t,r){if(!o.includes(r)){var i={};var l=e.collection[r].height;i.inside=!0,i.fillColor=a.color,i.textX=t.xPos+t.width/2,i.textY=Math.round(t.yPos-t.height/2+.25*l),i.transform=null,i.textAnchor="middle",i.text=t.yLabel,i.index=r,i.seriesIdx=t.seriesIdx,i.yLabel=t.yLabel,i.xLabel=t.xLabel,i.groupLabel=t.groupLabel,i.categoryLabel=t.categoryLabel,i.color=t.color,n.push(i)}}),n}(g);else if(i){var p,b,m,w,I,k;var A;var P;var E;var C;g.horizontal=h.horizontal,p=g.data,b=g.metrics,m=g.style,w=g.horizontal,k=void 0===(I=g.hideOverlapping)||I,A=[],E=(P=b.height)-b.baseLineOffset,C=.25*P,p.forEach(function(t,r){if(null!==t.x){var e={};var a=b.collection[r];var n=Math.abs(t.width);var o=Math.abs(t.height);var i=a[w?"width":"height"];var l=a[w?"height":"width"]+(w?C-E:C);var u=t.y<0;var v=u?-1:1;var c=t.xPos+t.width/2+C;var s=t.yPos-v*C;(i<=n&&l<=o||!k)&&(e.y=t.y,e.inside=!0,e.fillColor=m.color,e.textX=c,e.textY=s,e.textAnchor=u?"end":"start",e.transform="rotate(-90,".concat(c,",").concat(s,")"),w&&(e.textAnchor="middle",e.transform=null,e.textX=t.xPos+t.width/2,e.textY=t.yPos-v*(u?b.baseLineOffset+1:C)),e.yLabel=t.yLabel,e.xLabel=t.xLabel,e.groupLabel=t.groupLabel,e.categoryLabel=t.categoryLabel,e.text=t.yLabel,e.seriesIdx=t.seriesIdx,e.color=t.color,A.push(e))}}),y=A}else if(h.horizontal){var M,O,S,Y,X;var T;g.valuesOutside=v,M=g.data,O=g.style,S=g.maxY,Y=g.metrics,X=g.valuesOutside,T=[],M.forEach(function(t,r){var e=t.y,a=t.xPos,n=t.yPos,o=t.width,i=t.height,l=t.seriesIdx,u=t.xLabel,v=t.yLabel,c=t.groupLabel,s=t.categoryLabel,d=t.color;var f=n;var h=n;var x=S-n;var y=1;var g=!0;var p=Y.collection[r];var b=.25*p.height;var m=p.height;var L=m+b;var w=Math.abs(i);var I=!X&&w>L;e<0&&(h=x,x=n,y=-1),I?f-=y*(e<0?m-1:b):h>=w+L?f-=y*(w+(e<0?m-1:b)):x>=L?f+=y*(e<0?b+1:m):g=!1,g&&T.push({inside:I,fillColor:O.color,textX:a+o/2,textY:f,transform:null,textAnchor:"middle",text:v,index:r,seriesIdx:l,yLabel:v,xLabel:u,groupLabel:c,categoryLabel:s,color:d})}),y=T}else{var z,F,N,R,_;var W;var D;g.valuesOutside=v,z=g.data,F=g.metrics,N=g.style,R=g.maxY,_=g.valuesOutside,W=[],D=.25*F.height,z.forEach(function(t,r){if(null!==t.x){var e={};var a=t.yPos;var n;var o=a;var i="start";var l=a;var u=R-a;var v=1;var c=!0;var s=F.collection[r].width+D;var d=Math.abs(t.height);var f=!_&&d>s;t.y<0&&(i="end",l=u,u=a,v=-1),f?o-=v*D:l>=d+s?o-=v*(d+D):u>=s?(o+=v*D,i="end"===i?"start":"end"):c=!1,c&&(e.inside=f,e.fillColor=N.color,e.textX=n=t.xPos+t.width/2+D,e.textY=o,e.transform="rotate(-90,".concat(n,",").concat(o,")"),e.textAnchor=i,e.text=t.yLabel,e.index=r,e.seriesIdx=t.seriesIdx,e.yLabel=t.yLabel,e.xLabel=t.xLabel,e.groupLabel=t.groupLabel,e.categoryLabel=t.categoryLabel,e.color=t.color,W.push(e))}}),y=W}}return y}}function k(t){return A.apply(this,arguments)}function A(){return(A=f(function(t){var r,e,a,n,o,i,l,u,v,c;return h(this,function(s){return(r=t.selection,e=t.data,a=t.style,n=t.showValues,o=t.textFormat,i=t.transitionDuration,l=t.addMouseEvents,u=t.listenToLegendText,v=t.opacity,r.selectAll("text").transition().duration(0).remove(),n)?((c=g(r,e,a)).attr("transform",function(t){return t.transform}),b(c,a,o),0===c.size())?[2]:[2,new Promise(function(t){var r=0;c.transition().duration(i).style("opacity",v||1).on("start",function(){return r++}).on("end",function(){--r||(l(c.filter(function(t){return t.inside})),u(c),t())})})]:[2]})})).apply(this,arguments)}function P(t){var r=t.data,e=t.strategy,a=t.style,n=t.showDataPoints,o=t.dataPointRadius,i=t.hideOverlapping,u=t.valueProperty,v=t.textFormat,c=t.width,d=t.height;var f=r.map(function(t){return v({text:t[u]})});var h=(0,l.getAllTextDimensions)(f,a);return(x[e]||s.HideMostColliding)({data:r,metrics:h,style:a,dataPointRadius:n?o:0,valueProperty:u,hideOverlapping:i,width:c,height:d})}function E(t){return C.apply(this,arguments)}function C(){return(C=f(function(t){var r,e,a,n,o,i,l,u;return h(this,function(v){return(r=t.selection,e=t.data,a=t.style,n=t.textFormat,o=t.transitionDuration,i=t.listenToLegendText,l=t.addMouseEvents,e.length)?(b(u=g(r,e,a),a,n),[2,new Promise(function(t){var r=0;u.transition().duration(o).style("opacity",1).on("start",function(){return r++}).on("end",function(){--r||(i(u),l(u),t())})})]):[2]})})).apply(this,arguments)}},7707:(t,r,e)=>{function a(t){return"number"==typeof t[1]&&"number"==typeof t[0]?Math.abs(t[1]-t[0]):1/0}function n(t,r){var e=t[0];var a=t[1];var n=0;if(void 0===e||void 0===a)return n;var o=Math.abs(a-e);return o>=r?n:(n=r/o,0==r%o?n-1:Math.floor(n))}function o(t,r,e){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;var n=t.length;var o=[];var i=[];var l=[];if(!n)return{range:o,domain:i,domainIndex:l};var u=e+1;var v=Math.ceil(n/u);var c=-1===a?n-1-(v-1)*u:0;for(var s=0,d=c;s<v;s++,d+=u)o.push(t[d]),i.push(r[d]),l.push(d);return{range:o,domain:i,domainIndex:l}}function i(t,r,e){var a=t.bandwidth()/2;var i=t.domain().map(function(r){return t(r)});var l=i.length-1;var u=0;for(var v=0,c=i.length;v<c;v++){var s;if(i[s=v]+a-e.collection[s].height/2>=0){u=v;break}}var d=n(i=i.slice(u),r.height);return o(i,i,d).domainIndex.map(function(t){return u+t}).filter(function(t){return t<=l})}e.r(r),e.d(r,{filterOverlappingCategories:()=>i,filterToFit:()=>o,getRangeStep:()=>a,stepFromPositionsByWidth:()=>n})}}]);