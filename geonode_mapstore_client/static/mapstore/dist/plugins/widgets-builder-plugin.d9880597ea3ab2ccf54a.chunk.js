(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[9389],{4206:(e,t,r)=>{"use strict";r.d(t,{hZ:()=>n,pb:()=>o,kD:()=>i,DI:()=>u,IC:()=>c,iU:()=>a,W7:()=>l,Vw:()=>f,KD:()=>s,uj:()=>d,lo:()=>p,Yf:()=>b,fo:()=>y,PY:()=>g,bp:()=>v});var n="CHANGE_DRAWING_STATUS",o="DRAW:END_DRAWING",i="DRAW:SET_CURRENT_STYLE",u="DRAW:GEOMETRY_CHANGED",c="DRAW:DRAW_SUPPORT_STOPPED",a="DRAW:FEATURES_SELECTED",l="DRAW:DRAWING_FEATURES";function f(e,t,r,n,o){return{type:u,features:e,owner:t,enableEdit:r,textChanged:n,circleChanged:o}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:a,features:e}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:l,features:e}}function p(){return{type:c}}function b(e,t,r,o,i,u){return{type:n,status:e,method:t,owner:r,features:o,options:i,style:u}}function y(e,t){return{type:o,geometry:e,owner:t}}function g(e){return{type:i,currentStyle:e}}var v=function(e){return b("clean","",e,[],{})}},64224:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>J});var n=r(24852),o=r.n(n),i=r(45697),u=r.n(i),c=r(49977),a=r.n(c),l=r(57579),f=r(33528),s=r(4206),d=r(7878),p=r(82904),b=r(80416),y=r(75982),g=r(95797),v=r(25958),O=r(24260),m=r(7147);function h(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=function(e){var t=(0,v.GW)(e);return[t.search&&t.search.url,t.name]};const E={openWidgetEditor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(l.AE,l.dm,l.IT).filter((function(){return(0,m.PJ)(n())})).switchMap((function(){return a().Observable.of((0,p.Xg)("widgetBuilder","enabled",!0),(0,p.Xg)("metadataexplorer","enabled",!1))}))},closeWidgetEditorOnFinish:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(l.Jm,b.oE).filter((function(){return(0,m.PJ)(n())})).switchMap((function(){return a().Observable.of((0,p.Xg)("widgetBuilder","enabled",!1))}))},initEditorOnNew:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(l.AE).filter((function(){return(0,m.PJ)(n())})).switchMap((function(e){return a().Observable.of((0,l.bS)(P(P({legend:!1,mapSync:!0,cartesian:!0,yAxis:!0},e),{},{type:void 0}),{step:0}))}))},initEditorOnNewChart:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(l.IT).filter((function(){return(0,m.PJ)(n())})).switchMap((function(e){return a().Observable.of((0,f.YV)(),(0,l.bS)(P(P({legend:!1,mapSync:!0,cartesian:!0,yAxis:!0,widgetType:"chart",filter:(0,O.X1)(n())},e),{},{type:void 0}),{step:0}),(0,l.Rz)("returnToFeatureGrid",!0))}))},handleWidgetsFilterPanel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,n=void 0===r?function(){}:r;return e.ofType(l.lG).filter((function(){return(0,m.PJ)(n())})).switchMap((function(){return a().Observable.of(g.gT.apply(void 0,h(S(n()))),(0,d.F)((0,v.um)(n())),(0,p.Xg)("widgetBuilder","enabled",!1),(0,p.Xg)("queryPanel","enabled",!0)).concat(a().Observable.race(e.ofType(d.Wm).take(1),e.ofType(p.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"queryPanel"===t&&(!r||"enabled"===r)})).take(1)).switchMap((function(e){return(e.filterObj?a().Observable.of((0,l.Rz)("filter",e.filterObj)):a().Observable.empty()).merge(a().Observable.of((0,p.Xg)("widgetBuilder","enabled",!0)))}))).takeUntil(e.ofType(y.nk,l.dm).merge(e.ofType(p.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"widgetBuilder"===t&&0==!r})))).concat(a().Observable.of((0,s.bp)(),(0,p.Xg)("queryPanel","enabled",!1)))}))}};var D=r(22843),k=r(16919),q=r(71703),W=r(22222),A=r(67076),R=r(55105);const F=(0,A.compose)((0,q.connect)((function(e){return{returnToFeatureGrid:(0,v.Wo)(e)}}),{backToWidgetList:function(){return(0,l.Rz)("widgetType",void 0)},closeWidgetBuilder:function(){return(0,p.Xg)("widgetBuilder","enabled",!1,!1)},openFeatureGridTable:function(){return(0,f.t9)()}}),(0,A.withHandlers)({backFromWizard:function(e){var t=e.backToWidgetList,r=void 0===t?function(){}:t,n=e.closeWidgetBuilder,o=void 0===n?function(){}:n,i=e.openFeatureGridTable,u=void 0===i?function(){}:i,c=e.returnToFeatureGrid;return function(){c?(o(),u()):r()}}}),(0,A.withProps)((function(e){var t=e.returnToFeatureGrid,r=e.backFromWizard;return{exitButton:{onClick:void 0===r?function(){}:r,glyph:"arrow-left",tooltipId:t?"widgets.builder.wizard.backToFeatureGrid":"widgets.builder.wizard.backToWidgetTypeSelection"}}})));var _=r(12736);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var N=(0,A.compose)((0,q.connect)((0,W.P1)(v.h9,v.zA,(function(e,t){return U({dependencies:e},t)})),{toggleConnection:l.w2}),F)(_.Z),H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(c,e);var t,r,n,i,u=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(n);if(i){var r=G(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return I(this,e)});function c(){return B(this,c),u.apply(this,arguments)}return t=c,(r=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){return o().createElement(k.Z,{open:this.props.enabled,size:this.props.dockSize,zIndex:this.props.zIndex,position:this.props.position,bsStyle:"primary",hideHeader:!0,style:U(U({},this.props.layout),{},{background:"white"})},o().createElement(N,{enabled:this.props.enabled,onClose:this.props.onClose,typeFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type;return"map"!==t&&"legend"!==t}}))}}])&&M(t.prototype,r),c}(o().Component);X(H,"propTypes",{id:u().string,enabled:u().bool,limitDockHeight:u().bool,fluid:u().bool,zIndex:u().number,dockSize:u().number,position:u().string,onMount:u().func,onUnmount:u().func,onClose:u().func,dimMode:u().string,src:u().string,style:u().object,layout:u().object}),X(H,"defaultProps",{id:"widgets-builder-plugin",enabled:!1,dockSize:500,limitDockHeight:!0,zIndex:1e4,fluid:!1,dimMode:"none",position:"left",onMount:function(){},onUnmount:function(){},onClose:function(){},layout:{}});var L=(0,q.connect)((0,W.P1)(m.dH,(function(e){return(0,R.ic)(e,{height:!0})}),(function(e,t){return{enabled:e,layout:t}})),{onMount:function(){return(0,p.Xg)("widgetBuilder","available",!0)},onUnmount:function(){return(0,p.Xg)("widgetBuilder","available",!1)},onClose:p.Xg.bind(null,"widgetBuilder","enabled",!1,!1)})(H);const J=(0,D.rx)("WidgetsBuilder",{component:L,epics:E,containers:{TOC:{doNotHide:!0,name:"WidgetBuilder"}}})},7147:(e,t,r)=>{"use strict";r.d(t,{Yq:()=>i,Iz:()=>u,QF:()=>c,_d:()=>a,pn:()=>l,lI:()=>f,PJ:()=>s,dH:()=>d,Gd:()=>p,tL:()=>b,R4:()=>y,BP:()=>g});var n=r(27361),o=r.n(n),i=function(e){return function(e,t){return function(t){return o()(t,"controls[".concat(e,"][").concat("enabled","]"))}}(e)},u=function(e){return o()(e,"controls.measure.showCoordinateEditor")},c=function(e){return o()(e,"controls.measure.enabled")},a=function(e){return o()(e,"controls.queryPanel.enabled")},l=function(e){return!!o()(e,"controls.layerdownload.available")},f=function(e){return!!o()(e,"controls.layerdownload.enabled")},s=function(e){return o()(e,"controls.widgetBuilder.available",!1)},d=function(e){return o()(e,"controls.widgetBuilder.enabled")},p=function(e){return o()(e,"controls.layersettings.initialSettings")||{}},b=function(e){return o()(e,"controls.layersettings.originalSettings")||{}},y=function(e){return o()(e,"controls.layersettings.activeTab")||"general"},g=function(e){return o()(e,"controls.drawer.enabled",!1)}},24260:(e,t,r)=>{"use strict";r.d(t,{qj:()=>O,Bu:()=>m,UM:()=>h,X1:()=>w,L:()=>j,HY:()=>P,Mz:()=>T,F0:()=>S,dc:()=>E,b0:()=>D,hk:()=>k,Qs:()=>q,gy:()=>W,M7:()=>A,VD:()=>R});var n=r(14293),o=r.n(n),i=r(27361),u=r.n(i),c=r(91175),a=r.n(c),l=r(1469),f=r.n(l),s=r(30998),d=r.n(s);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){return u()(e,"query.filterObj.featureTypeName")},v=function(e){return function(t){return u()(t,'query.featureTypes["'.concat(e,'"]'))}},O=function(e,t){return u()(v(t)(e),"original")},m=function(e){return e&&e.query&&e.query.searchUrl},h=function(e){return e&&e.query&&e.query.url},w=function(e){return e&&e.query&&e.query.filterObj},j=function(e){return u()(v(g(e))(e),"attributes")},P=function(e){return u()(e,"query.typeName")},T=function(e){return u()(e,"query.result.features")},S=function(e){var t=u()(e,"query.result");return b(b({},t),{},{features:(t&&t.features||[]).filter((function(e){return!o()(e.geometry)}))})},E=function(e,t){var r=e&&e.query&&e.query.result&&e.query.result.features;return a()(r.filter((function(e){return e.id===t})))},D={startIndex:function(e){return u()(e,"query.filterObj.pagination.startIndex")},maxFeatures:function(e){return u()(e,"query.filterObj.pagination.maxFeatures")},resultSize:function(e){return u()(e,"query.result.features.length")},totalFeatures:function(e){return u()(e,"query.result.totalFeatures")}},k=function(e,t){var r=v(t)(e);return!!(r&&r.attributes&&r.geometry&&r.original)},q=function(e){return O(e,g(e))},W=function(e){return u()(e,"query.featureLoading")},A=function(e){return u()(e,"query.syncWmsFilter",!1)},R=function(e){var t=u()(e,"query.filterObj.crossLayerFilter"),r=u()(e,"query.filterObj.spatialField"),n=u()(e,"query.filterObj.filterFields");return!!(n&&a()(n)||r&&(r.method&&r.operation&&r.geometry||f()(r)&&d()(r,(function(e){return e.method&&e.operation&&e.geometry}))>-1)||t&&t.collectGeometries&&t.operation)}}}]);