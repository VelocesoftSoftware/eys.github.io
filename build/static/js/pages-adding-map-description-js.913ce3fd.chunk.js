(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[6],{34:function(t,n,e){"use strict";e.r(n);var r=e(0),c=e(127),u=e(92),o=e(79),i=e.n(o),a=e(88),s=e(1);const f=[52.22977,21.01178],l=t=>{let{map:n}=t;return Object(r.useEffect)((()=>{if(!n)return;const t=i.a.control({position:"bottomleft"});t.onAdd=()=>{const t=i.a.DomUtil.create("div","description");i.a.DomEvent.disableClickPropagation(t);return t.innerHTML="<b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...",t},t.addTo(n)}),[n]),null};n.default=()=>{const[t,n]=Object(r.useState)(null);return Object(s.jsxs)(c.a,{whenCreated:n,center:f,zoom:18,scrollWheelZoom:!1,children:[Object(s.jsx)(u.a,{...a.a}),Object(s.jsx)(l,{map:t})]})}},77:function(t,n,e){"use strict";function r(t,n){var e;const r=null!==(e=t.pane)&&void 0!==e?e:n.pane;return r?{...t,pane:r}:t}e.d(n,"a",(function(){return r}))},78:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){const e=Object(r.useRef)();Object(r.useEffect)((function(){return null!=n&&t.instance.on(n),e.current=n,function(){null!=e.current&&t.instance.off(e.current),e.current=null}}),[t,n])}},80:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return s}));var r=e(0),c=e(81),u=e(76),o=e(78),i=e(77);function a(t,n){Object(r.useEffect)((function(){var e;return(null!==(e=n.layerContainer)&&void 0!==e?e:n.map).addLayer(t.instance),function(){var e;null==(e=n.layerContainer)||e.removeLayer(t.instance),n.map.removeLayer(t.instance)}}),[n,t])}function s(t){return function(n){const e=Object(u.d)(),r=t(Object(i.a)(n,e),e);return Object(c.a)(e.map,n.attribution),Object(o.a)(r.current,n.eventHandlers),a(r.current,e),r}}},81:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){const e=Object(r.useRef)(n);Object(r.useEffect)((function(){n!==e.current&&null!=t.attributionControl&&(null!=e.current&&t.attributionControl.removeAttribution(e.current),null!=n&&t.attributionControl.addAttribution(n)),e.current=n}),[t,n])}},83:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s}));var r=e(0),c=e.n(r),u=e(13),o=e(76);function i(t){function n(n,e){const{instance:u,context:i}=t(n).current;return Object(r.useImperativeHandle)(e,(()=>u)),null==n.children?null:c.a.createElement(o.c,{value:i},n.children)}return Object(r.forwardRef)(n)}function a(t){function n(n,e){const[c,o]=Object(r.useState)(!1),{instance:i}=t(n,o).current;Object(r.useImperativeHandle)(e,(()=>i)),Object(r.useEffect)((function(){c&&i.update()}),[i,c,n.children]);const a=i._contentNode;return a?Object(u.createPortal)(n.children,a):null}return Object(r.forwardRef)(n)}function s(t){function n(n,e){const{instance:c}=t(n).current;return Object(r.useImperativeHandle)(e,(()=>c)),null}return Object(r.forwardRef)(n)}},84:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return s}));var r=e(0),c=e(76),u=e(78),o=e(80),i=e(77);function a(t,n){const e=Object(r.useRef)();Object(r.useEffect)((function(){if(n.pathOptions!==e.current){var r;const c=null!==(r=n.pathOptions)&&void 0!==r?r:{};t.instance.setStyle(c),e.current=c}}),[t,n])}function s(t){return function(n){const e=Object(c.d)(),r=t(Object(i.a)(n,e),e);return Object(u.a)(r.current,n.eventHandlers),Object(o.b)(r.current,e),a(r.current,n),r}}},85:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){return null==n?function(n,e){return Object(r.useRef)(t(n,e))}:function(e,c){const u=Object(r.useRef)(t(e,c)),o=Object(r.useRef)(e),{instance:i}=u.current;return Object(r.useEffect)((function(){o.current!==e&&(n(i,e,o.current),o.current=e)}),[i,e,c]),u}}},86:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(0),c=e(76);function u(t){return function(n){const e=Object(c.d)(),u=t(n,e),{instance:o}=u.current,i=Object(r.useRef)(n.position),{position:a}=n;return Object(r.useEffect)((function(){return o.addTo(e.map),function(){o.remove()}}),[e.map,o]),Object(r.useEffect)((function(){null!=a&&a!==i.current&&(o.setPosition(a),i.current=a)}),[o,a]),u}}},87:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(81),c=e(76),u=e(78),o=e(77);function i(t,n){return function(e,i){const a=Object(c.d)(),s=t(Object(o.a)(e,a),a);return Object(r.a)(a.map,e.attribution),Object(u.a)(s.current,e.eventHandlers),n(s.current,a,e,i),s}}},88:function(t,n,e){"use strict";n.a={attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}},89:function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return f})),e.d(n,"c",(function(){return l})),e.d(n,"d",(function(){return b})),e.d(n,"e",(function(){return d}));var r=e(83),c=e(86),u=e(85),o=e(80),i=e(87),a=e(84);function s(t){const n=Object(u.a)((function(n,e){return{instance:t(n),context:e}})),e=Object(c.a)(n);return Object(r.c)(e)}function f(t,n){const e=Object(u.a)(t,n),c=Object(o.a)(e);return Object(r.a)(c)}function l(t,n){const e=Object(u.a)(t),c=Object(i.a)(e,n);return Object(r.b)(c)}function b(t,n){const e=Object(u.a)(t,n),c=Object(a.a)(e);return Object(r.a)(c)}function d(t,n){const e=Object(u.a)(t,n),c=Object(o.a)(e);return Object(r.c)(c)}},91:function(t,n,e){"use strict";function r(t,n,e){const{opacity:r,zIndex:c}=n;null!=r&&r!==e.opacity&&t.setOpacity(r),null!=c&&c!==e.zIndex&&t.setZIndex(c)}e.d(n,"a",(function(){return r}))},92:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(89),c=e(77),u=e(91),o=e(79);const i=Object(r.e)((function(t,n){let{url:e,...r}=t;return{instance:new o.TileLayer(e,Object(c.a)(r,n)),context:n}}),u.a)}}]);
//# sourceMappingURL=pages-adding-map-description-js.913ce3fd.chunk.js.map