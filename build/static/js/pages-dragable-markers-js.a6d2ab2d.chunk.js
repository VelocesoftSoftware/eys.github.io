(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[21],{47:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e(127),u=e(92),o=e(94),i=e(93),a=e(79),s=e.n(a),f=e(88),l=e(1);const b=[52.22977,21.01178],p=[{lat:52.230020586193795,lng:21.01083755493164,title:"point 1"},{lat:52.22924516170657,lng:21.011320352554325,title:"point 2"},{lat:52.229511304688444,lng:21.01270973682404,title:"point 3"},{lat:52.23040500771883,lng:21.012146472930908,title:"point 4"}];n.default=()=>{const[t,n]=Object(c.useState)(null),[e,a]=Object(c.useState)(null);Object(c.useEffect)((()=>{if(!t)return;const n=s.a.control({position:"bottomleft"});n.onAdd=()=>{const t=s.a.DomUtil.create("div","legend");return t.innerHTML="click marker, move",a(t),t},n.addTo(t)}),[t]);const d=Object(c.useMemo)((()=>({dragend(t){e.innerHTML=t.target.getLatLng()}})),[e]);return Object(l.jsxs)(r.a,{whenCreated:n,center:b,zoom:18,scrollWheelZoom:!1,children:[Object(l.jsx)(u.a,{...f.a}),p.map(((t,n)=>{let{lat:e,lng:c,title:r}=t;return Object(l.jsx)(o.a,{eventHandlers:d,draggable:!0,autoPan:!0,position:[e,c],children:Object(l.jsx)(i.a,{children:r})},n)}))]})}},77:function(t,n,e){"use strict";function c(t,n){var e;const c=null!==(e=t.pane)&&void 0!==e?e:n.pane;return c?{...t,pane:c}:t}e.d(n,"a",(function(){return c}))},78:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var c=e(0);function r(t,n){const e=Object(c.useRef)();Object(c.useEffect)((function(){return null!=n&&t.instance.on(n),e.current=n,function(){null!=e.current&&t.instance.off(e.current),e.current=null}}),[t,n])}},80:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return s}));var c=e(0),r=e(81),u=e(76),o=e(78),i=e(77);function a(t,n){Object(c.useEffect)((function(){var e;return(null!==(e=n.layerContainer)&&void 0!==e?e:n.map).addLayer(t.instance),function(){var e;null==(e=n.layerContainer)||e.removeLayer(t.instance),n.map.removeLayer(t.instance)}}),[n,t])}function s(t){return function(n){const e=Object(u.d)(),c=t(Object(i.a)(n,e),e);return Object(r.a)(e.map,n.attribution),Object(o.a)(c.current,n.eventHandlers),a(c.current,e),c}}},81:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var c=e(0);function r(t,n){const e=Object(c.useRef)(n);Object(c.useEffect)((function(){n!==e.current&&null!=t.attributionControl&&(null!=e.current&&t.attributionControl.removeAttribution(e.current),null!=n&&t.attributionControl.addAttribution(n)),e.current=n}),[t,n])}},83:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s}));var c=e(0),r=e.n(c),u=e(13),o=e(76);function i(t){function n(n,e){const{instance:u,context:i}=t(n).current;return Object(c.useImperativeHandle)(e,(()=>u)),null==n.children?null:r.a.createElement(o.c,{value:i},n.children)}return Object(c.forwardRef)(n)}function a(t){function n(n,e){const[r,o]=Object(c.useState)(!1),{instance:i}=t(n,o).current;Object(c.useImperativeHandle)(e,(()=>i)),Object(c.useEffect)((function(){r&&i.update()}),[i,r,n.children]);const a=i._contentNode;return a?Object(u.createPortal)(n.children,a):null}return Object(c.forwardRef)(n)}function s(t){function n(n,e){const{instance:r}=t(n).current;return Object(c.useImperativeHandle)(e,(()=>r)),null}return Object(c.forwardRef)(n)}},84:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return s}));var c=e(0),r=e(76),u=e(78),o=e(80),i=e(77);function a(t,n){const e=Object(c.useRef)();Object(c.useEffect)((function(){if(n.pathOptions!==e.current){var c;const r=null!==(c=n.pathOptions)&&void 0!==c?c:{};t.instance.setStyle(r),e.current=r}}),[t,n])}function s(t){return function(n){const e=Object(r.d)(),c=t(Object(i.a)(n,e),e);return Object(u.a)(c.current,n.eventHandlers),Object(o.b)(c.current,e),a(c.current,n),c}}},85:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var c=e(0);function r(t,n){return null==n?function(n,e){return Object(c.useRef)(t(n,e))}:function(e,r){const u=Object(c.useRef)(t(e,r)),o=Object(c.useRef)(e),{instance:i}=u.current;return Object(c.useEffect)((function(){o.current!==e&&(n(i,e,o.current),o.current=e)}),[i,e,r]),u}}},86:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var c=e(0),r=e(76);function u(t){return function(n){const e=Object(r.d)(),u=t(n,e),{instance:o}=u.current,i=Object(c.useRef)(n.position),{position:a}=n;return Object(c.useEffect)((function(){return o.addTo(e.map),function(){o.remove()}}),[e.map,o]),Object(c.useEffect)((function(){null!=a&&a!==i.current&&(o.setPosition(a),i.current=a)}),[o,a]),u}}},87:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var c=e(81),r=e(76),u=e(78),o=e(77);function i(t,n){return function(e,i){const a=Object(r.d)(),s=t(Object(o.a)(e,a),a);return Object(c.a)(a.map,e.attribution),Object(u.a)(s.current,e.eventHandlers),n(s.current,a,e,i),s}}},88:function(t,n,e){"use strict";n.a={attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}},89:function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return f})),e.d(n,"c",(function(){return l})),e.d(n,"d",(function(){return b})),e.d(n,"e",(function(){return p}));var c=e(83),r=e(86),u=e(85),o=e(80),i=e(87),a=e(84);function s(t){const n=Object(u.a)((function(n,e){return{instance:t(n),context:e}})),e=Object(r.a)(n);return Object(c.c)(e)}function f(t,n){const e=Object(u.a)(t,n),r=Object(o.a)(e);return Object(c.a)(r)}function l(t,n){const e=Object(u.a)(t),r=Object(i.a)(e,n);return Object(c.b)(r)}function b(t,n){const e=Object(u.a)(t,n),r=Object(a.a)(e);return Object(c.a)(r)}function p(t,n){const e=Object(u.a)(t,n),r=Object(o.a)(e);return Object(c.c)(r)}},91:function(t,n,e){"use strict";function c(t,n,e){const{opacity:c,zIndex:r}=n;null!=c&&c!==e.opacity&&t.setOpacity(c),null!=r&&r!==e.zIndex&&t.setZIndex(r)}e.d(n,"a",(function(){return c}))},92:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var c=e(89),r=e(77),u=e(91),o=e(79);const i=Object(c.e)((function(t,n){let{url:e,...c}=t;return{instance:new o.TileLayer(e,Object(r.a)(c,n)),context:n}}),u.a)},93:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var c=e(89),r=e(79),u=e(0);const o=Object(c.c)((function(t,n){return{instance:new r.Popup(t,n.overlayContainer),context:n}}),(function(t,n,e,c){const{onClose:r,onOpen:o,position:i}=e;Object(u.useEffect)((function(){const{instance:e}=t;function u(t){t.popup===e&&(e.update(),c(!0),null==o||o())}function a(t){t.popup===e&&(c(!1),null==r||r())}return n.map.on({popupopen:u,popupclose:a}),null==n.overlayContainer?(null!=i&&e.setLatLng(i),e.openOn(n.map)):n.overlayContainer.bindPopup(e),function(){var t;n.map.off({popupopen:u,popupclose:a}),null==(t=n.overlayContainer)||t.unbindPopup(),n.map.removeLayer(e)}}),[t,n,c,r,o,i])}))},94:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var c=e(89),r=e(79);const u=Object(c.b)((function(t,n){let{position:e,...c}=t;const u=new r.Marker(e,c);return{instance:u,context:{...n,overlayContainer:u}}}),(function(t,n,e){n.position!==e.position&&t.setLatLng(n.position),null!=n.icon&&n.icon!==e.icon&&t.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==e.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==e.opacity&&t.setOpacity(n.opacity),null!=t.dragging&&n.draggable!==e.draggable&&(!0===n.draggable?t.dragging.enable():t.dragging.disable())}))}}]);
//# sourceMappingURL=pages-dragable-markers-js.a6d2ab2d.chunk.js.map