(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[58252],{898939:(e,t,n)=>{"use strict";n.d(t,{d2:()=>o,yX:()=>r,Uo:()=>l,n2:()=>i,SA:()=>c});var o="CHANGE_HELP_STATE",r="CHANGE_HELP_TEXT",l="CHANGE_HELPWIN_VIZ";function i(e){return{type:r,helpText:e}}function c(e){return{type:l,helpwinViz:e}}},383606:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var o=n(747037),r=n.n(o),l=n(675263),i=n.n(l),c=n(124852),p=n.n(c),a=n(757588),s=n(86638);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function m(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(c,e);var t,n,o,l,i=(o=c,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(o);if(l){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function c(){var e;f(this,c);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return h(g(e=i.call.apply(i,[this].concat(n))),"onMouseOver",(function(){var t=r()(e.props.helpText)?e.props.helpText:(0,s.S$)(e.context.messages,e.props.helpText.props.msgId);e.props.changeHelpText(t),e.props.changeHelpwinVisibility(!0)})),e}return t=c,(n=[{key:"render",value:function(){return p().createElement(a.Badge,{id:this.props.id,onMouseOver:this.onMouseOver,className:(this.props.isVisible?"":"hidden ")+(this.props.className?this.props.className:"")},"?")}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(p().Component);h(v,"propTypes",{id:i().string,helpText:i().oneOfType([i().string,i().element]),isVisible:i().bool,changeHelpText:i().func,changeHelpwinVisibility:i().func,className:i().string}),h(v,"contextTypes",{messages:i().object}),h(v,"defaultProps",{helpText:"",isVisible:!1});const O=v},658252:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var o=n(353131),r=n.n(o),l=n(737295),i=n.n(l),c=n(675263),p=n.n(c),a=n(124852),s=n.n(a),u=n(757588),f=n(171703),y=n(12838),b=n(782904),m=n(898939),g=n(383606),d=n(805346),h=n(950966),v=n(282467);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},j.apply(this,arguments)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function C(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=(0,f.connect)((function(e){return{isVisible:e.controls&&e.controls.help&&e.controls.help.enabled}}),{changeHelpText:m.n2,changeHelpwinVisibility:m.SA})(g.Z),H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(p,e);var t,n,o,l,c=(o=p,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(o);if(l){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function p(){var e;S(this,p);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return N(_(e=c.call.apply(c,[this].concat(n))),"getToolConfig",(function(t){return t.tool?{}:e.props.toolCfg})),N(_(e),"getTool",(function(t){if(t.tool)return!0===t.tool?t.plugin:t.tool;var n=function(){return{}},o={};return t.exclusive?(n=function(n){return{active:n.controls&&n.controls[e.props.stateSelector]&&n.controls[e.props.stateSelector].active===t.name}},o[e.props.eventSelector]=b.Xg.bind(null,e.props.stateSelector,"active",t.name,!0)):t.toggle?(n=function(n){return{bsStyle:n.controls[t.toggleControl||t.name]&&n.controls[t.toggleControl||t.name][t.toggleProperty||"enabled"]?e.props.activeStyle:e.props.toolStyle,active:n.controls[t.toggleControl||t.name]&&n.controls[t.toggleControl||t.name][t.toggleProperty||"enabled"]||!1}},o[e.props.eventSelector]=b.Xi.bind(null,t.toggleControl||t.name,t.toggleProperty||null)):t.action&&(o[e.props.eventSelector]=r()(t.action,e.context),n=t.selector||n),(0,f.connect)(n,o,(function(t,n,o){return e.mergeHandlers(P(P({},o),t),n)}))(e.props.tool)})),N(_(e),"renderTool",(function(t,n){if(t.element)return t.element;var o=t.help?s().createElement(k,{className:"mapstore-helpbadge",helpText:t.help}):s().createElement("span",null),r=t.tooltip?s().createElement(d.Z,{msgId:t.tooltip}):null,l=e.getTool(t),i=e.getToolConfig(t),c=t.childTools||[];return e.addTooltip(s().createElement(l,j({},i,{pluginCfg:t.cfg,tooltip:r,style:t.style,btnSize:e.props.toolSize,bsStyle:e.props.toolStyle,help:o,key:t.name||"tool"+n,mapType:e.props.mapType},t.cfg,{items:t.items||[]}),t.cfg&&t.cfg.glyph?s().createElement(u.Glyphicon,{glyph:t.cfg.glyph}):t.icon,o," ",t.text,c.length>0&&s().createElement(p,j({},t.innerProps,{mapType:e.props.mapType,tools:c,panels:t.childPanels}))),t)})),N(_(e),"renderTools",(function(){return e.props.tools.map(e.renderTool)})),N(_(e),"renderPanels",(function(){return e.props.panels.filter((function(e){return!e.panel.loadPlugin})).map((function(t){var n=t.panel,o=s().createElement(n,j({key:t.name,mapType:e.props.mapType},t.cfg,t.props||{},{items:t.items||[]})),r=t.title?s().createElement(d.Z,{msgId:t.title}):null;return t.wrap?s().createElement(u.Collapse,{key:"mapToolBar-item-collapse-"+t.name,in:e.props.activePanel===t.name},s().createElement(u.Panel,{header:r,style:e.props.panelStyle,className:e.props.panelClassName},o)):o}))})),N(_(e),"mergeHandlers",(function(e,t){return Object.keys(t).reduce((function(n,o){return i()(n,N({},o,e[o]?(0,y.qC)(e[o],t[o]):t[o]))}),e)})),N(_(e),"addTooltip",(function(t,n){if(n.tooltip){var o=s().createElement(u.Tooltip,{id:e.props.id+"-"+n.name+"-tooltip"},s().createElement(d.Z,{msgId:n.tooltip}));return s().createElement(h.Z,{key:e.props.id+"-"+n.name+"-overlay",rootClose:!0,placement:"left",overlay:o},t)}return t})),e}return t=p,(n=[{key:"render",value:function(){var e=this.props.container;return s().createElement("span",{id:this.props.id,style:this.props.containerWrapperStyle},s().createElement(e,{id:this.props.id+"-container",style:this.props.style,className:this.props.className},this.renderTools()),this.renderPanels())}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(s().Component);N(H,"propTypes",{id:p().string.isRequired,container:p().func,containerWrapperStyle:p().object,tool:p().oneOfType([p().object,p().func]),className:p().string,style:p().object,tools:p().array,panels:p().array,mapType:p().string,toolStyle:p().string,activeStyle:p().string,toolSize:p().string,stateSelector:p().string.isRequired,eventSelector:p().string,panelStyle:p().object,panelClassName:p().string,activePanel:p().string,toolCfg:p().object}),N(H,"contextTypes",{messages:p().object,router:p().object}),N(H,"defaultProps",{container:u.Panel,className:"tools-container",style:{},toolStyle:"default",activeStyle:"primary",tools:[],panels:[],tool:v.Z,mapType:"leaflet",eventSelector:"onClick",panelStyle:{},panelClassName:"tools-container-panel",toolSize:null,toolCfg:{}});const R=H},353131:(e,t,n)=>{var o=n(105976),r=n(497727),l=n(720893),i=n(846460),c=o((function(e,t){var n=i(t,l(c));return r(e,32,void 0,t,n)}));c.placeholder={},e.exports=c}}]);