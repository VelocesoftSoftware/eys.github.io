(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[44],{123:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(97),u=n(127),r=n(92),c=n(94),l=n(93),o=n(88),d=(n(123),n(1));const{BaseLayer:s,Overlay:m}=i.a,j=[{name:"Adana",latitude:37.0004,longitude:35.3213},{name:"Ad\u0131yaman",latitude:37.7648,longitude:38.2763},{name:"Afyonkarahisar",latitude:38.7507,longitude:30.5567},{name:"A\u011fr\u0131",latitude:39.7217,longitude:43.0567},{name:"Amasya",latitude:40.6499,longitude:35.8353},{name:"Ankara",latitude:39.9334,longitude:32.8597},{name:"Antalya",latitude:36.8969,longitude:30.7133},{name:"Artvin",latitude:41.1828,longitude:41.8183},{name:"Ayd\u0131n",latitude:37.856,longitude:27.8416},{name:"Bal\u0131kesir",latitude:39.6484,longitude:27.8826},{name:"Bilecik",latitude:40.15,longitude:29.9833},{name:"Bing\xf6l",latitude:38.8854,longitude:40.498},{name:"Bitlis",latitude:38.3938,longitude:42.1231},{name:"Bolu",latitude:40.7369,longitude:31.6061},{name:"Burdur",latitude:37.7264,longitude:30.2889},{name:"Bursa",latitude:40.182,longitude:29.0678},{name:"\xc7anakkale",latitude:40.1553,longitude:26.4142},{name:"\xc7ank\u0131r\u0131",latitude:40.6013,longitude:33.6134},{name:"\xc7orum",latitude:40.5506,longitude:34.9556},{name:"Denizli",latitude:37.7742,longitude:29.0872},{name:"Diyarbak\u0131r",latitude:37.9204,longitude:40.2306},{name:"Edirne",latitude:41.6758,longitude:26.5587},{name:"Elaz\u0131\u011f",latitude:38.681,longitude:39.2264},{name:"Erzincan",latitude:39.75,longitude:39.5},{name:"Erzurum",latitude:39.9208,longitude:41.2745},{name:"Eski\u015fehir",latitude:39.7667,longitude:30.5256},{name:"Gaziantep",latitude:37.0662,longitude:37.3833},{name:"Giresun",latitude:40.9128,longitude:38.3895},{name:"G\xfcm\xfc\u015fhane",latitude:40.4608,longitude:39.481},{name:"Hakkari",latitude:37.5833,longitude:43.7333},{name:"Hatay",latitude:36.2,longitude:36.15},{name:"Isparta",latitude:37.7667,longitude:30.55},{name:"Mersin",latitude:36.8,longitude:34.6333},{name:"\u0130stanbul",latitude:41.0082,longitude:28.9784},{name:"\u0130zmir",latitude:38.4192,longitude:27.1287},{name:"Kars",latitude:40.6,longitude:43.1},{name:"Kastamonu",latitude:41.3887,longitude:33.7827},{name:"Kayseri",latitude:38.7369,longitude:35.4824},{name:"K\u0131rklareli",latitude:41.7333,longitude:27.2167},{name:"K\u0131r\u015fehir",latitude:39.1425,longitude:34.1709},{name:"Kocaeli",latitude:40.8533,longitude:29.8815},{name:"Konya",latitude:37.8713,longitude:32.4846},{name:"K\xfctahya",latitude:39.4167,longitude:29.9833},{name:"Malatya",latitude:38.3552,longitude:38.3095},{name:"Manisa",latitude:38.6191,longitude:27.4289},{name:"Kahramanmara\u015f",latitude:37.5858,longitude:36.937},{name:"Mardin",latitude:37.3212,longitude:40.7245},{name:"Mu\u011fla",latitude:37.2153,longitude:28.3636},{name:"Mu\u015f",latitude:38.7333,longitude:41.4833},{name:"Nev\u015fehir",latitude:38.625,longitude:34.7122},{name:"Ni\u011fde",latitude:37.9667,longitude:34.6833},{name:"Ordu",latitude:40.9839,longitude:37.8764},{name:"Rize",latitude:41.0201,longitude:40.5234},{name:"Sakarya",latitude:40.773,longitude:30.4027},{name:"Samsun",latitude:41.2867,longitude:36.33},{name:"Siirt",latitude:37.9333,longitude:41.95},{name:"Sinop",latitude:42.0231,longitude:35.1531},{name:"Sivas",latitude:39.7477,longitude:37.0179},{name:"Tekirda\u011f",latitude:40.9839,longitude:27.5169}];t.default=()=>{const[e,t]=Object(a.useState)([]),[n,f]=Object(a.useState)(null),[b,p]=Object(a.useState)({city:"",name:"",type:"",GGKP:"","ayl\u0131kKira":"",toplamKira:"","i\u015fletmeci":"",tarifeDurumu:""});return Object(d.jsxs)("div",{children:[Object(d.jsxs)("form",{onSubmit:n=>{n.preventDefault();const a=j.find((e=>e.name===b.city));if(a){const n={city:a.name,name:b.name,type:b.type,latitude:a.latitude,longitude:a.longitude,GGKP:b.GGKP,"ayl\u0131kKira":b.ayl\u0131kKira,toplamKira:b.toplamKira,"i\u015fletmeci":b.i\u015fletmeci,tarifeDurumu:b.tarifeDurumu};t([...e,n])}else console.error("Se\xe7ilen \u015fehir bulunamad\u0131.")},className:"form",children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsxs)("label",{children:["\u015eehir:",Object(d.jsxs)("select",{name:"city",value:b.city,onChange:e=>p({...b,city:e.target.value}),children:[Object(d.jsx)("option",{value:"",children:"\u015eehir Se\xe7in"}),j.map(((e,t)=>Object(d.jsx)("option",{value:e.name,children:e.name},t)))]})]})}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"type",children:"\u0130\u015fletmeci:"}),Object(d.jsxs)("select",{id:"type",name:"type",value:b.type,onChange:e=>p({...b,type:e.target.value}),children:[Object(d.jsx)("option",{value:"",children:"\u0130\u015fletmeci Se\xe7in"}),Object(d.jsx)("option",{value:"DHMI",children:"DHMI"}),Object(d.jsx)("option",{value:"IGA",children:"IGA"}),Object(d.jsx)("option",{value:"FRAPORT TAV",children:"FRAPORT TAV"}),Object(d.jsx)("option",{value:"ISG SABIHA GOK\xc7EN",children:"ISG SABIHA GOK\xc7EN"})]})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Mahal Kodu:"}),Object(d.jsx)("input",{type:"text",id:"name",name:"name",value:b.name,onChange:e=>p({...b,name:e.target.value})})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"GGKP",children:"GGKP:"}),Object(d.jsx)("input",{type:"text",id:"GGKP",name:"GGKP",value:b.GGKP,onChange:e=>p({...b,GGKP:e.target.value})})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"ayl\u0131kKira",children:"Ayl\u0131k Kira:"}),Object(d.jsx)("input",{type:"text",id:"ayl\u0131kKira",name:"ayl\u0131kKira",value:b.ayl\u0131kKira,onChange:e=>p({...b,"ayl\u0131kKira":e.target.value})})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"toplamKira",children:"Toplam Kira:"}),Object(d.jsx)("input",{type:"text",id:"toplamKira",name:"toplamKira",value:b.toplamKira,onChange:e=>p({...b,toplamKira:e.target.value})})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"i\u015fletmeci",children:"M\xfcd\xfcrl\xfck:"}),Object(d.jsx)("input",{type:"text",id:"i\u015fletmeci",name:"i\u015fletmeci",value:b.i\u015fletmeci,onChange:e=>p({...b,"i\u015fletmeci":e.target.value})})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"tarifeDurumu",children:"Tarife Durumu:"}),Object(d.jsx)("input",{type:"text",id:"tarifeDurumu",name:"tarifeDurumu",value:b.tarifeDurumu,onChange:e=>p({...b,tarifeDurumu:e.target.value})})]}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("button",{type:"submit",children:"Ekle"})})]}),Object(d.jsx)(u.a,{center:[39.9334,32.8597],zoom:6,scrollWheelZoom:!0,children:Object(d.jsxs)(i.a,{position:"topright",children:[Object(d.jsx)(s,{checked:!0,name:"OpenStreetMap",children:Object(d.jsx)(r.a,{...o.a})}),Object(d.jsx)(m,{checked:!0,name:"Mahaller",children:e.map(((e,t)=>Object(d.jsx)(c.a,{position:[e.latitude,e.longitude],children:Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"\u0130\u015fletmeci:"})," ",e.type]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"GGKP:"})," ",e.GGKP]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Ayl\u0131k Kira:"})," ",e.ayl\u0131kKira]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Toplam Kira:"})," ",e.toplamKira]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"M\xfcd\xfcrl\xfck:"})," ",e.i\u015fletmeci]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Tarife Durumu:"})," ",e.tarifeDurumu]})]})})},t)))})]})})]})}},77:function(e,t,n){"use strict";function a(e,t){var n;const a=null!==(n=e.pane)&&void 0!==n?n:t.pane;return a?{...e,pane:a}:e}n.d(t,"a",(function(){return a}))},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0);function i(e,t){const n=Object(a.useRef)();Object(a.useEffect)((function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}}),[e,t])}},80:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return o}));var a=n(0),i=n(81),u=n(76),r=n(78),c=n(77);function l(e,t){Object(a.useEffect)((function(){var n;return(null!==(n=t.layerContainer)&&void 0!==n?n:t.map).addLayer(e.instance),function(){var n;null==(n=t.layerContainer)||n.removeLayer(e.instance),t.map.removeLayer(e.instance)}}),[t,e])}function o(e){return function(t){const n=Object(u.d)(),a=e(Object(c.a)(t,n),n);return Object(i.a)(n.map,t.attribution),Object(r.a)(a.current,t.eventHandlers),l(a.current,n),a}}},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0);function i(e,t){const n=Object(a.useRef)(t);Object(a.useEffect)((function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t}),[e,t])}},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o}));var a=n(0),i=n.n(a),u=n(13),r=n(76);function c(e){function t(t,n){const{instance:u,context:c}=e(t).current;return Object(a.useImperativeHandle)(n,(()=>u)),null==t.children?null:i.a.createElement(r.c,{value:c},t.children)}return Object(a.forwardRef)(t)}function l(e){function t(t,n){const[i,r]=Object(a.useState)(!1),{instance:c}=e(t,r).current;Object(a.useImperativeHandle)(n,(()=>c)),Object(a.useEffect)((function(){i&&c.update()}),[c,i,t.children]);const l=c._contentNode;return l?Object(u.createPortal)(t.children,l):null}return Object(a.forwardRef)(t)}function o(e){function t(t,n){const{instance:i}=e(t).current;return Object(a.useImperativeHandle)(n,(()=>i)),null}return Object(a.forwardRef)(t)}},84:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return o}));var a=n(0),i=n(76),u=n(78),r=n(80),c=n(77);function l(e,t){const n=Object(a.useRef)();Object(a.useEffect)((function(){if(t.pathOptions!==n.current){var a;const i=null!==(a=t.pathOptions)&&void 0!==a?a:{};e.instance.setStyle(i),n.current=i}}),[e,t])}function o(e){return function(t){const n=Object(i.d)(),a=e(Object(c.a)(t,n),n);return Object(u.a)(a.current,t.eventHandlers),Object(r.b)(a.current,n),l(a.current,t),a}}},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0);function i(e,t){return null==t?function(t,n){return Object(a.useRef)(e(t,n))}:function(n,i){const u=Object(a.useRef)(e(n,i)),r=Object(a.useRef)(n),{instance:c}=u.current;return Object(a.useEffect)((function(){r.current!==n&&(t(c,n,r.current),r.current=n)}),[c,n,i]),u}}},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),i=n(76);function u(e){return function(t){const n=Object(i.d)(),u=e(t,n),{instance:r}=u.current,c=Object(a.useRef)(t.position),{position:l}=t;return Object(a.useEffect)((function(){return r.addTo(n.map),function(){r.remove()}}),[n.map,r]),Object(a.useEffect)((function(){null!=l&&l!==c.current&&(r.setPosition(l),c.current=l)}),[r,l]),u}}},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(81),i=n(76),u=n(78),r=n(77);function c(e,t){return function(n,c){const l=Object(i.d)(),o=e(Object(r.a)(n,l),l);return Object(a.a)(l.map,n.attribution),Object(u.a)(o.current,n.eventHandlers),t(o.current,l,n,c),o}}},88:function(e,t,n){"use strict";t.a={attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return j}));var a=n(83),i=n(86),u=n(85),r=n(80),c=n(87),l=n(84);function o(e){const t=Object(u.a)((function(t,n){return{instance:e(t),context:n}})),n=Object(i.a)(t);return Object(a.c)(n)}function d(e,t){const n=Object(u.a)(e,t),i=Object(r.a)(n);return Object(a.a)(i)}function s(e,t){const n=Object(u.a)(e),i=Object(c.a)(n,t);return Object(a.b)(i)}function m(e,t){const n=Object(u.a)(e,t),i=Object(l.a)(n);return Object(a.a)(i)}function j(e,t){const n=Object(u.a)(e,t),i=Object(r.a)(n);return Object(a.c)(i)}},91:function(e,t,n){"use strict";function a(e,t,n){const{opacity:a,zIndex:i}=t;null!=a&&a!==n.opacity&&e.setOpacity(a),null!=i&&i!==n.zIndex&&e.setZIndex(i)}n.d(t,"a",(function(){return a}))},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(89),i=n(77),u=n(91),r=n(79);const c=Object(a.e)((function(e,t){let{url:n,...a}=e;return{instance:new r.TileLayer(n,Object(i.a)(a,t)),context:t}}),u.a)},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(89),i=n(79),u=n(0);const r=Object(a.c)((function(e,t){return{instance:new i.Popup(e,t.overlayContainer),context:t}}),(function(e,t,n,a){const{onClose:i,onOpen:r,position:c}=n;Object(u.useEffect)((function(){const{instance:n}=e;function u(e){e.popup===n&&(n.update(),a(!0),null==r||r())}function l(e){e.popup===n&&(a(!1),null==i||i())}return t.map.on({popupopen:u,popupclose:l}),null==t.overlayContainer?(null!=c&&n.setLatLng(c),n.openOn(t.map)):t.overlayContainer.bindPopup(n),function(){var e;t.map.off({popupopen:u,popupclose:l}),null==(e=t.overlayContainer)||e.unbindPopup(),t.map.removeLayer(n)}}),[e,t,a,i,r,c])}))},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(89),i=n(79);const u=Object(a.b)((function(e,t){let{position:n,...a}=e;const u=new i.Marker(n,a);return{instance:u,context:{...t,overlayContainer:u}}}),(function(e,t,n){t.position!==n.position&&e.setLatLng(t.position),null!=t.icon&&t.icon!==n.icon&&e.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==n.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),null!=e.dragging&&t.draggable!==n.draggable&&(!0===t.draggable?e.dragging.enable():e.dragging.disable())}))},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(85),i=n(86),u=n(83),r=n(76),c=n(79),l=n(0),o=n.n(l);const d=Object(a.a)((function(e,t){let{children:n,...a}=e;const i=new c.Control.Layers(void 0,void 0,a);return{instance:i,context:{...t,layersControl:i}}}),(function(e,t,n){t.collapsed!==n.collapsed&&(!0===t.collapsed?e.collapse():e.expand())})),s=Object(i.a)(d),m=Object(u.a)(s);function j(e){return function(t){const n=Object(r.d)(),a=Object(l.useRef)(t),[i,u]=Object(l.useState)(null),{layersControl:c,map:d}=n,s=Object(l.useCallback)((t=>{null!=c&&(a.current.checked&&d.addLayer(t),e(c,t,a.current.name),u(t))}),[c,d]),m=Object(l.useCallback)((e=>{null==c||c.removeLayer(e),u(null)}),[c]),j=Object(l.useMemo)((()=>({...n,layerContainer:{addLayer:s,removeLayer:m}})),[n,s,m]);return Object(l.useEffect)((()=>{null!==i&&a.current!==t&&(!0!==t.checked||null!=a.current.checked&&!1!==a.current.checked?!0!==a.current.checked||null!=t.checked&&!1!==t.checked||d.removeLayer(i):d.addLayer(i),a.current=t)})),t.children?o.a.createElement(r.c,{value:j},t.children):null}}m.BaseLayer=j((function(e,t,n){e.addBaseLayer(t,n)})),m.Overlay=j((function(e,t,n){e.addOverlay(t,n)}))}}]);
//# sourceMappingURL=pages-svg-markers-width-legends-js.a497df4a.chunk.js.map