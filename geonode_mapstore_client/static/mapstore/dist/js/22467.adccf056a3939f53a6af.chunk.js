(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[22467],{389912:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o,r=n(124852),i=n(843033);const p=function(e){var t=e.map,n=e.onBoxEnd,p=e.status;return(0,r.useEffect)((function(){"start"===p?(o=new i.Z({condition:function(e){return e.originalEvent.altKey}}),t.addInteraction(o)):"end"===p&&t.removeInteraction(o)}),[p]),(0,r.useEffect)((function(){o&&o.on("boxend",(function(e){n({boxExtent:o.getGeometry().getExtent(),modifiers:{ctrl:e.mapBrowserEvent.pointerEvent.ctrlKey,metaKey:e.mapBrowserEvent.pointerEvent.metaKey}})}))}),[p]),null}},126105:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var o=n(124852),r=n.n(o),i=n(180307),p=n.n(i),a=n(675263),c=n.n(a),u=n(193409),s=n(747037),l=n.n(s),f=n(925064),d=n(821751);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function P(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=new MutationObserver((function(){e.getMap().getSize()&&(e.setPosition(void 0),e.setPosition(n.coordinates))}));return o.observe(t,{attributes:!0,childList:!0,subtree:!0}),o},_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(c,e);var t,n,o,i,a=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(o);if(i){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function c(){var e;b(this,c);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return w(g(e=a.call.apply(a,[this].concat(n))),"onPopupClose",(function(t){e.props.onPopupClose(t)})),w(g(e),"renderPopups",(function(){return e.preparePopups().map((function(t){var n,o=t.popup,i=t.id,a=t.component,c=t.content,u=t.props,s=t.containerStyle,m=o.getElement(),v=l()(a)&&d.default[a]||a;return v?n=r().isValidElement(v)&&v||r().createElement(v,u):c&&(n=f.FP(c)?r().createElement("div",{dangerouslySetInnerHTML:{__html:c}}):c),m&&p().createPortal(r().createElement("div",{className:"map-popup-ol",key:i,onMouseUp:e.convertToClick},r().createElement("div",{className:"ol-popup-content-wrapper"},r().createElement("div",{className:"ol-popup-content",style:s},n)),r().createElement("div",{className:"ol-popup-closer",onClick:function(){return e.onPopupClose(i)}},"x")),m)}))})),w(g(e),"update",(function(){(e._popups||[]).map((function(e){var t=e.popup;t.setElement(t.getElement())}))})),w(g(e),"convertToClick",(function(e){var t=new MouseEvent("click",{bubbles:!0});t.stopPropagation=function(){},e.target.dispatchEvent(t)})),w(g(e),"preparePopups",(function(){var t=e.props,n=t.popups,o=void 0===n?[]:n,r=t.map,i=r.getSize();return(e._popups||[]).forEach((function(e){var t=e.popup,n=e.observer;n&&n.disconnect(),t&&r.removeOverlay(t)})),e._popups=o.map((function(e){var t=Math.round(.9*i[0])-40,n=Math.round(.9*i[1])-40,o=e.id,p=e.position.coordinates,a=e.className,c=e.maxWidth,s=void 0===c?t:c,l=e.maxHeight,d=void 0===l?n:l,m=e.autoPan,v=void 0!==m&&m,b=e.autoPanMargin,h=void 0===b?20:b,O=e.offset,P=void 0===O?[0,0]:O,g=e.autoPanAnimation,E=void 0===g?{duration:200}:g,w=s>t?t:s,_=d>n?n:d,S=f.fH(o,a),x=new u.Z({id:o,element:S,autoPan:v,offset:P,autoPanMargin:h,autoPanAnimation:E,positioning:"bottom-center",className:"ol-overlay-container ol-unselectable",position:p});return r.addOverlay(x),y({popup:x,observer:j(x,S,{coordinates:p}),containerStyle:{maxWidth:w,maxHeight:_}},e)})),e._popups})),w(g(e),"stopPropagationOnPointerMove",(function(e){e.stopPropagation()})),e}return t=c,(n=[{key:"UNSAFE_componentWillMount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().addEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"shouldComponentUpdate",value:function(e){return e.popups!==this.props.popups}},{key:"componentWillUnmount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().removeEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"render",value:function(){return r().createElement("div",null,this.renderPopups())}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(r().Component);w(_,"propTypes",{map:c().object,popups:c().arrayOf(c().object),onPopupClose:c().func}),w(_,"defaultProps",{popups:[],onPopupClose:function(){}})},821751:(e,t,n)=>{"use strict";n.r(t),n.d(t,{IDENTIFY_POPUP:()=>E,default:()=>w});var o=n(124852),r=n.n(o),i=n(173014),p=n(11196),a=n(867076),c=n(171703),u=n(22222),s=n(307877),l=n(921914),f=n(542872),d=n(701469),m=n.n(d),v=n(352353),y=n.n(v),b=n(979870),h=n(800827),O=(0,a.compose)((0,c.connect)((0,u.P1)(s.Qf,(function(e){return{index:e}})),{setIndex:l.oO}),(0,a.defaultProps)({index:0,responses:[]})),P=(0,u.P1)([s.q7,s.o9,s.OK,s.us,s.x0,h.hp,s.vR],(function(e,t,n,o,r,i,p){return{responses:e,validResponses:t,requests:n,format:o,showEmptyMessageGFI:r,missingResponses:(n||[]).length-(e||[]).length,renderValidOnly:i,loaded:p}}));const g=(0,a.compose)((0,c.connect)(P),(0,a.defaultProps)({responses:[],container:function(e){var t=e.index,n=e.children;return r().createElement(r().Fragment,null,m()(n)&&n[t]||n)},header:b.Z}),O,p.Yy,p.mI,(0,i.Z)((function(e){var t=e.loaded;return y()(t)})))(f.Z);var E="identify";const w={identify:g}},532425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(675263),r=n.n(o),i=n(124852),p=n.n(i);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return e>100?"full":e>40?"medium":"small"},l=function(e){var t=e.size,n=e.style,o=void 0===n?{}:n,r=e.className,i=e.hidden;return p().createElement("div",{className:r,style:c({width:t,height:t,overflow:"hidden"},o)},!i&&p().createElement("div",{className:"mapstore-".concat(s(t),"-size-loader")}))};l.propTypes={size:r().number,className:r().string,style:r().object};const f=l},925064:(e,t,n)=>{"use strict";n.d(t,{fH:()=>i,FP:()=>p,R3:()=>a});var o=n(122138),r=n.n(o),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r()(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup",n=document.createElement("div");return n.setAttribute("id",e+"-map-popup"),n.setAttribute("class",t),n},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("<")},a=function(e,t){if(!t)return e;if(t instanceof Node){var n=document.createDocumentFragment();n.appendChild(t),e.appendChild(n)}else p(t)?e.innerHTML=t:e.append(document.createTextNode(String(t)));return e}}}]);