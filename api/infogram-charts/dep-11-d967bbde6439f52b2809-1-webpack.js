(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([["infogram-charts/dep-11"],{7714:(t,n,e)=>{function i(t,n){var e=0;if(void 0===n){var i=!0,o=!1,u=void 0;try{for(var r=t[Symbol.iterator](),l;!(i=(l=r.next()).done);i=!0){var f=l.value;(f=+f)&&(e+=f)}}catch(t){o=!0,u=t}finally{try{i||null==r.return||r.return()}finally{if(o)throw u}}}else{var a=-1;var c=!0,h=!1,s=void 0;try{for(var _=t[Symbol.iterator](),d;!(c=(d=_.next()).done);c=!0){var y=d.value;(y=+n(y,++a,t))&&(e+=y)}}catch(t){h=!0,s=t}finally{try{c||null==_.return||_.return()}finally{if(h)throw s}}}return e}e.r(n),e.d(n,{default:()=>i})},7737:(t,n,e)=>{e.r(n),e.d(n,{default:()=>a});var i=e(7730);var o=e(7729);var u=e(7731);var r=e(7732);var l=e(7728);var f=e(7733);function a(t,n,e){var a=function(u){var r,l,f,a=(u=(0,o.default)(u)).length,c,p=!1,v,x=Array(a),b=Array(a);for(null==_&&(y=d(v=(0,i.path)())),r=0;r<=a;++r){if(!(r<a&&s(c=u[r],r,u))===p){if(p=!p)l=r,y.areaStart(),y.lineStart();else{for(y.lineEnd(),y.lineStart(),f=r-1;f>=l;--f)y.point(x[f],b[f]);y.lineEnd(),y.areaEnd()}}p&&(x[r]=+t(c,r,u),b[r]=+n(c,r,u),y.point(h?+h(c,r,u):x[r],e?+e(c,r,u):b[r]))}if(v)return y=null,v+""||null};var c=function(){return(0,l.default)().defined(s).curve(d).context(_)};var h=null,s=(0,u.default)(!0),_=null,d=r.default,y=null;return t="function"==typeof t?t:void 0===t?f.x:(0,u.default)(+t),n="function"==typeof n?n:void 0===n?(0,u.default)(0):(0,u.default)(+n),e="function"==typeof e?e:void 0===e?f.y:(0,u.default)(+e),a.x=function(n){return arguments.length?(t="function"==typeof n?n:(0,u.default)(+n),h=null,a):t},a.x0=function(n){return arguments.length?(t="function"==typeof n?n:(0,u.default)(+n),a):t},a.x1=function(t){return arguments.length?(h=null==t?null:"function"==typeof t?t:(0,u.default)(+t),a):h},a.y=function(t){return arguments.length?(n="function"==typeof t?t:(0,u.default)(+t),e=null,a):n},a.y0=function(t){return arguments.length?(n="function"==typeof t?t:(0,u.default)(+t),a):n},a.y1=function(t){return arguments.length?(e=null==t?null:"function"==typeof t?t:(0,u.default)(+t),a):e},a.lineX0=a.lineY0=function(){return c().x(t).y(n)},a.lineY1=function(){return c().x(t).y(e)},a.lineX1=function(){return c().x(h).y(n)},a.defined=function(t){return arguments.length?(s="function"==typeof t?t:(0,u.default)(!!t),a):s},a.curve=function(t){return arguments.length?(d=t,null!=_&&(y=d(_)),a):d},a.context=function(t){return arguments.length?(null==t?_=y=null:y=d(_=t),a):_},a}},7732:(t,n,e)=>{function i(t){this._context=t}function o(t){return new i(t)}e.r(n),e.d(n,{default:()=>o}),i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}}},7734:(t,n,e)=>{function i(t,n,e){var i=t._x1-t._x0,o=n-t._x1,u=(t._y1-t._y0)/(i||o<0&&-0),r=(e-t._y1)/(o||i<0&&-0);return((u<0?-1:1)+(r<0?-1:1))*Math.min(Math.abs(u),Math.abs(r),.5*Math.abs((u*o+r*i)/(i+o)))||0}function o(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function u(t,n,e){var i=t._x0,o=t._y0,u=t._x1,r=t._y1,l=(u-i)/3;t._context.bezierCurveTo(i+l,o+l*n,u-l,r-l*e,u,r)}function r(t){this._context=t}function l(t){this._context=new f(t)}function f(t){this._context=t}function a(t){return new r(t)}function c(t){return new l(t)}e.r(n),e.d(n,{monotoneX:()=>a,monotoneY:()=>c}),r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:u(this,this._t0,o(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,u(this,o(this,e=i(this,t,n)),e);break;default:u(this,this._t0,e=i(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(l.prototype=Object.create(r.prototype)).point=function(t,n){r.prototype.point.call(this,n,t)},f.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,i,o,u){this._context.bezierCurveTo(n,t,i,e,u,o)}}},7728:(t,n,e)=>{e.r(n),e.d(n,{default:()=>f});var i=e(7730);var o=e(7729);var u=e(7731);var r=e(7732);var l=e(7733);function f(t,n){var e=function(e){var u,r=(e=(0,o.default)(e)).length,l,s=!1,_;for(null==a&&(h=c(_=(0,i.path)())),u=0;u<=r;++u)!(u<r&&f(l=e[u],u,e))===s&&((s=!s)?h.lineStart():h.lineEnd()),s&&h.point(+t(l,u,e),+n(l,u,e));if(_)return h=null,_+""||null};var f=(0,u.default)(!0),a=null,c=r.default,h=null;return t="function"==typeof t?t:void 0===t?l.x:(0,u.default)(t),n="function"==typeof n?n:void 0===n?l.y:(0,u.default)(n),e.x=function(n){return arguments.length?(t="function"==typeof n?n:(0,u.default)(+n),e):t},e.y=function(t){return arguments.length?(n="function"==typeof t?t:(0,u.default)(+t),e):n},e.defined=function(t){return arguments.length?(f="function"==typeof t?t:(0,u.default)(!!t),e):f},e.curve=function(t){return arguments.length?(c=t,null!=a&&(h=c(a)),e):c},e.context=function(t){return arguments.length?(null==t?a=h=null:h=c(a=t),e):a},e}},7733:(t,n,e)=>{function i(t){return t[0]}function o(t){return t[1]}e.r(n),e.d(n,{x:()=>i,y:()=>o})}}]);