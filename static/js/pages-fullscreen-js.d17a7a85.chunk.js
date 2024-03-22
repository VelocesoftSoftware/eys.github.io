(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[24],{115:function(e,n){L.Control.Fullscreen=L.Control.extend({options:{position:"topleft",title:{false:"View Fullscreen",true:"Exit Fullscreen"}},onAdd:function(e){var n=L.DomUtil.create("div","leaflet-control-fullscreen leaflet-bar leaflet-control");return this.link=L.DomUtil.create("a","leaflet-control-fullscreen-button leaflet-bar-part",n),this.link.href="#",this._map=e,this._map.on("fullscreenchange",this._toggleTitle,this),this._toggleTitle(),L.DomEvent.on(this.link,"click",this._click,this),n},_click:function(e){L.DomEvent.stopPropagation(e),L.DomEvent.preventDefault(e),this._map.toggleFullscreen(this.options)},_toggleTitle:function(){this.link.title=this.options.title[this._map.isFullscreen()]}}),L.Map.include({isFullscreen:function(){return this._isFullscreen||!1},toggleFullscreen:function(e){var n=this.getContainer();this.isFullscreen()?e&&e.pseudoFullscreen?this._disablePseudoFullscreen(n):document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():this._disablePseudoFullscreen(n):e&&e.pseudoFullscreen?this._enablePseudoFullscreen(n):n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):n.msRequestFullscreen?n.msRequestFullscreen():this._enablePseudoFullscreen(n)},_enablePseudoFullscreen:function(e){L.DomUtil.addClass(e,"leaflet-pseudo-fullscreen"),this._setFullscreen(!0),this.fire("fullscreenchange")},_disablePseudoFullscreen:function(e){L.DomUtil.removeClass(e,"leaflet-pseudo-fullscreen"),this._setFullscreen(!1),this.fire("fullscreenchange")},_setFullscreen:function(e){this._isFullscreen=e;var n=this.getContainer();e?L.DomUtil.addClass(n,"leaflet-fullscreen-on"):L.DomUtil.removeClass(n,"leaflet-fullscreen-on"),this.invalidateSize()},_onFullscreenChange:function(e){var n=document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;n!==this.getContainer()||this._isFullscreen?n!==this.getContainer()&&this._isFullscreen&&(this._setFullscreen(!1),this.fire("fullscreenchange")):(this._setFullscreen(!0),this.fire("fullscreenchange"))}}),L.Map.mergeOptions({fullscreenControl:!1}),L.Map.addInitHook((function(){var e;if(this.options.fullscreenControl&&(this.fullscreenControl=new L.Control.Fullscreen(this.options.fullscreenControl),this.addControl(this.fullscreenControl)),"onfullscreenchange"in document?e="fullscreenchange":"onmozfullscreenchange"in document?e="mozfullscreenchange":"onwebkitfullscreenchange"in document?e="webkitfullscreenchange":"onmsfullscreenchange"in document&&(e="MSFullscreenChange"),e){var n=L.bind(this._onFullscreenChange,this);this.whenReady((function(){L.DomEvent.on(document,e,n)})),this.on("unload",(function(){L.DomEvent.off(document,e,n)}))}})),L.control.fullscreen=function(e){return new L.Control.Fullscreen(e)}},116:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var c=t(127),r=t(92),u=(t(115),t(116),t(88)),l=t(1);const o=[52.22977,21.01178];n.default=()=>Object(l.jsx)(c.a,{fullscreenControl:!0,center:o,zoom:13,scrollWheelZoom:!1,children:Object(l.jsx)(r.a,{...u.a})})},77:function(e,n,t){"use strict";function c(e,n){var t;const c=null!==(t=e.pane)&&void 0!==t?t:n.pane;return c?{...e,pane:c}:e}t.d(n,"a",(function(){return c}))},78:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var c=t(0);function r(e,n){const t=Object(c.useRef)();Object(c.useEffect)((function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}}),[e,n])}},80:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s}));var c=t(0),r=t(81),u=t(76),l=t(78),o=t(77);function i(e,n){Object(c.useEffect)((function(){var t;return(null!==(t=n.layerContainer)&&void 0!==t?t:n.map).addLayer(e.instance),function(){var t;null==(t=n.layerContainer)||t.removeLayer(e.instance),n.map.removeLayer(e.instance)}}),[n,e])}function s(e){return function(n){const t=Object(u.d)(),c=e(Object(o.a)(n,t),t);return Object(r.a)(t.map,n.attribution),Object(l.a)(c.current,n.eventHandlers),i(c.current,t),c}}},81:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var c=t(0);function r(e,n){const t=Object(c.useRef)(n);Object(c.useEffect)((function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n}),[e,n])}},83:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return s}));var c=t(0),r=t.n(c),u=t(13),l=t(76);function o(e){function n(n,t){const{instance:u,context:o}=e(n).current;return Object(c.useImperativeHandle)(t,(()=>u)),null==n.children?null:r.a.createElement(l.c,{value:o},n.children)}return Object(c.forwardRef)(n)}function i(e){function n(n,t){const[r,l]=Object(c.useState)(!1),{instance:o}=e(n,l).current;Object(c.useImperativeHandle)(t,(()=>o)),Object(c.useEffect)((function(){r&&o.update()}),[o,r,n.children]);const i=o._contentNode;return i?Object(u.createPortal)(n.children,i):null}return Object(c.forwardRef)(n)}function s(e){function n(n,t){const{instance:r}=e(n).current;return Object(c.useImperativeHandle)(t,(()=>r)),null}return Object(c.forwardRef)(n)}},84:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s}));var c=t(0),r=t(76),u=t(78),l=t(80),o=t(77);function i(e,n){const t=Object(c.useRef)();Object(c.useEffect)((function(){if(n.pathOptions!==t.current){var c;const r=null!==(c=n.pathOptions)&&void 0!==c?c:{};e.instance.setStyle(r),t.current=r}}),[e,n])}function s(e){return function(n){const t=Object(r.d)(),c=e(Object(o.a)(n,t),t);return Object(u.a)(c.current,n.eventHandlers),Object(l.b)(c.current,t),i(c.current,n),c}}},85:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var c=t(0);function r(e,n){return null==n?function(n,t){return Object(c.useRef)(e(n,t))}:function(t,r){const u=Object(c.useRef)(e(t,r)),l=Object(c.useRef)(t),{instance:o}=u.current;return Object(c.useEffect)((function(){l.current!==t&&(n(o,t,l.current),l.current=t)}),[o,t,r]),u}}},86:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var c=t(0),r=t(76);function u(e){return function(n){const t=Object(r.d)(),u=e(n,t),{instance:l}=u.current,o=Object(c.useRef)(n.position),{position:i}=n;return Object(c.useEffect)((function(){return l.addTo(t.map),function(){l.remove()}}),[t.map,l]),Object(c.useEffect)((function(){null!=i&&i!==o.current&&(l.setPosition(i),o.current=i)}),[l,i]),u}}},87:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var c=t(81),r=t(76),u=t(78),l=t(77);function o(e,n){return function(t,o){const i=Object(r.d)(),s=e(Object(l.a)(t,i),i);return Object(c.a)(i.map,t.attribution),Object(u.a)(s.current,t.eventHandlers),n(s.current,i,t,o),s}}},88:function(e,n,t){"use strict";n.a={attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}},89:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return f})),t.d(n,"d",(function(){return d})),t.d(n,"e",(function(){return b}));var c=t(83),r=t(86),u=t(85),l=t(80),o=t(87),i=t(84);function s(e){const n=Object(u.a)((function(n,t){return{instance:e(n),context:t}})),t=Object(r.a)(n);return Object(c.c)(t)}function a(e,n){const t=Object(u.a)(e,n),r=Object(l.a)(t);return Object(c.a)(r)}function f(e,n){const t=Object(u.a)(e),r=Object(o.a)(t,n);return Object(c.b)(r)}function d(e,n){const t=Object(u.a)(e,n),r=Object(i.a)(t);return Object(c.a)(r)}function b(e,n){const t=Object(u.a)(e,n),r=Object(l.a)(t);return Object(c.c)(r)}},91:function(e,n,t){"use strict";function c(e,n,t){const{opacity:c,zIndex:r}=n;null!=c&&c!==t.opacity&&e.setOpacity(c),null!=r&&r!==t.zIndex&&e.setZIndex(r)}t.d(n,"a",(function(){return c}))},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var c=t(89),r=t(77),u=t(91),l=t(79);const o=Object(c.e)((function(e,n){let{url:t,...c}=e;return{instance:new l.TileLayer(t,Object(r.a)(c,n)),context:n}}),u.a)}}]);
//# sourceMappingURL=pages-fullscreen-js.d17a7a85.chunk.js.map