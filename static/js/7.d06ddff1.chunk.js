(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[7],{255:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n(330),a=n(276),i=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var t=Object(r.a)(Number(e),new Date,{locale:a.a});return i(t)}return""},c=function(e){return e?"".concat(e,"kg"):""}},302:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((r=n(303))&&r.__esModule?r:{default:r}).default;t.default=a},303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var r,a=(r=n(304))&&r.__esModule?r:{default:r}},304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(0)),a=s(n(9)),i=s(n(307)),o=s(n(273)),c=s(n(274)),l=s(n(305));function s(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var a=O(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(o,e);var t,n,a,i=y(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),k(j(t=i.call(this,e)),"handleLoadImage",(function(e){t.setState({imageLoaded:!0,imageError:!1}),t.props.onLoad&&t.props.onLoad(e)})),k(j(t),"handleImageError",(function(e){t.props.src&&(t.setState({imageError:!0}),t.props.onError&&t.props.onError(e))})),t.state={imageError:!1,imageLoaded:!1,src:t.props.src},t.image=r.default.createRef(),t}return t=o,a=[{key:"getDerivedStateFromProps",value:function(e,t){return t.src!==e.src?{imageError:!1,imageLoaded:!1,src:e.src}:null}}],(n=[{key:"componentDidMount",value:function(){var e=this.image.current;e&&e.complete&&(0===e.naturalWidth?this.handleImageError():this.handleLoadImage())}},{key:"getStyles",value:function(){var e=this.props,t=e.animationDuration,n=e.aspectRatio,r=e.cover,a=e.color,i=e.imageStyle,o=e.disableTransition,c=e.iconContainerStyle,l=e.style,s=!o&&{opacity:this.state.imageLoaded?1:0,filterBrightness:this.state.imageLoaded?100:0,filterSaturate:this.state.imageLoaded?100:20,transition:"\n        filterBrightness ".concat(.75*t,"ms cubic-bezier(0.4, 0.0, 0.2, 1),\n        filterSaturate ").concat(t,"ms cubic-bezier(0.4, 0.0, 0.2, 1),\n        opacity ").concat(t/2,"ms cubic-bezier(0.4, 0.0, 0.2, 1)")};return{root:b({backgroundColor:a,paddingTop:"calc(1 / ".concat(n," * 100%)"),position:"relative"},l),image:b(b({width:"100%",height:"100%",position:"absolute",objectFit:r?"cover":"inherit",top:0,left:0},s),i),iconContainer:b({width:"100%",height:"100%",position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c)}}},{key:"render",value:function(){var e=this.getStyles(),t=this.props,n=(t.animationDuration,t.aspectRatio,t.color,t.disableError),a=t.disableSpinner,i=(t.disableTransition,t.errorIcon),o=(t.iconContainerStyle,t.imageStyle,t.loading),c=t.onClick,l=(t.style,m(t,["animationDuration","aspectRatio","color","disableError","disableSpinner","disableTransition","errorIcon","iconContainerStyle","imageStyle","loading","onClick","style"]));return r.default.createElement("div",{style:e.root,onClick:c},l.src&&r.default.createElement("img",f({},l,{ref:this.image,style:e.image,onLoad:this.handleLoadImage,onError:this.handleImageError})),r.default.createElement("div",{style:e.iconContainer},!a&&!this.state.imageLoaded&&!this.state.imageError&&o,!n&&this.state.imageError&&i))}}])&&v(t.prototype,n),a&&v(t,a),o}(r.Component);t.default=x,x.defaultProps={animationDuration:3e3,aspectRatio:1,color:o.default.white,disableError:!1,disableSpinner:!1,disableTransition:!1,errorIcon:r.default.createElement(l.default,{style:{width:48,height:48,color:c.default[300]}}),loading:r.default.createElement(i.default,{size:48})},x.propTypes={animationDuration:a.default.number,aspectRatio:a.default.number,cover:a.default.bool,color:a.default.string,disableError:a.default.bool,disableSpinner:a.default.bool,disableTransition:a.default.bool,errorIcon:a.default.node,iconContainerStyle:a.default.object,imageStyle:a.default.object,loading:a.default.node,onClick:a.default.func,onError:a.default.func,onLoad:a.default.func,src:a.default.string.isRequired,style:a.default.object}},305:function(e,t,n){"use strict";var r=n(62),a=n(65);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),o=(0,r(n(66)).default)(i.createElement("path",{d:"M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z"}),"BrokenImage");t.default=o},306:function(e,t,n){"use strict";var r=n(62),a=n(65);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),o=(0,r(n(66)).default)(i.createElement("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"}),"Today");t.default=o},307:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=n(0),o=(n(9),n(7)),c=n(8),l=n(11),s=44,d=i.forwardRef((function(e,t){var n=e.classes,c=e.className,d=e.color,u=void 0===d?"primary":d,f=e.disableShrink,m=void 0!==f&&f,p=e.size,b=void 0===p?40:p,v=e.style,h=e.thickness,y=void 0===h?3.6:h,g=e.value,j=void 0===g?0:g,O=e.variant,k=void 0===O?"indeterminate":O,x=Object(a.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),S={},N={},w={};if("determinate"===k||"static"===k){var D=2*Math.PI*((s-y)/2);S.strokeDasharray=D.toFixed(3),w["aria-valuenow"]=Math.round(j),S.strokeDashoffset="".concat(((100-j)/100*D).toFixed(3),"px"),N.transform="rotate(-90deg)"}return i.createElement("div",Object(r.a)({className:Object(o.a)(n.root,c,"inherit"!==u&&n["color".concat(Object(l.a)(u))],{determinate:n.determinate,indeterminate:n.indeterminate,static:n.static}[k]),style:Object(r.a)({width:b,height:b},N,v),ref:t,role:"progressbar"},w,x),i.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(s," ").concat(s)},i.createElement("circle",{className:Object(o.a)(n.circle,m&&n.circleDisableShrink,{determinate:n.circleDeterminate,indeterminate:n.circleIndeterminate,static:n.circleStatic}[k]),style:S,cx:s,cy:s,r:(s-y)/2,fill:"none",strokeWidth:y})))})),u=Object(c.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)},332:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(302),i=n.n(a),o=n(0),c=n.n(o),l=n(18),s=n(68),d=n(308),u=n(73),f=n(219),m=n(221),p=n(239),b=n(20),v=n(226),h=n(225),y=n(181),g=n(320),j=n(335),O=n(228),k=n(306),x=n.n(k),S=Object(f.a)((function(e){return Object(m.a)({root:{width:"100%"},item:{backgroundColor:Object(b.b)(e.palette.background.paper,.4)},avatar:{color:e.palette.secondary.contrastText,background:e.palette.secondary.light},inline:{display:"inline"}})}));var N=function(){var e=S();return Object(r.jsx)(v.a,{className:e.root,children:[0,1,2,3].map((function(t,n){return Object(r.jsxs)("div",{children:[0!==n?Object(r.jsx)(h.a,{component:"li"}):null,Object(r.jsxs)(y.a,{className:e.item,alignItems:"flex-start",children:[Object(r.jsx)(g.a,{children:Object(r.jsx)(j.a,{className:e.avatar,children:Object(r.jsx)(x.a,{})})}),Object(r.jsx)(O.a,{primary:"Type / Name-".concat(t),secondary:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:"2021-01-02 by AuthorName"}),Object(r.jsx)(u.a,{component:"span",variant:"body2",className:e.inline,color:"textSecondary",children:" \u2014 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\u2026"})]})})]})]},"event-list".concat(t))}))})},w=n(280),D=Object(f.a)((function(){return Object(m.a)({root:{flexGrow:1}})}));var E=function(e){var t=e.children,n=D(),a=c.a.Children.count(t),i=!!Math.floor(12/a);if(!a||a>4)return null;var o=[];return c.a.Children.forEach(t,(function(e,t){o.push(Object(r.jsx)(w.a,{item:!0,xs:12,sm:i,children:e},"grid-col-".concat(t)))})),Object(r.jsx)("div",{className:n.root,children:Object(r.jsx)(w.a,{container:!0,spacing:3,children:o})})},P=n(255),_={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAnimal"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"animal"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"details"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"birthDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"allergy"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"food"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"breed"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:413,source:{body:"query GetAnimal($id: Int!) {\n    animal(id: $id) {\n        id\n        name\n        details {\n            gender {\n                value\n            }\n            color {\n                id\n                value\n            }\n            birthDate\n            weight\n            allergy\n            food\n            breed {\n                id\n                value\n            }\n        }\n        imageUrl\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},F=Object(f.a)((function(e){return Object(m.a)({root:{flexGrow:1},animalName:{color:e.palette.primary.dark},animalMeta:{color:e.palette.grey[600]}})}));t.default=function(){var e,t=Object(l.i)().id,n=F(),a=Object(s.useQuery)(_,{variables:{id:Number(t)}}),o=a.loading,c=a.error,f=a.data;if(o)return Object(r.jsx)(p.a,{animation:"wave",height:"70vh"});if(c)return Object(r.jsx)("p",{children:"Error!"});if(!(null===f||void 0===f?void 0:f.animal))return Object(r.jsx)("p",{children:"No data!"});var m=f.animal,b=(null===(e=m.details)||void 0===e?void 0:e.birthDate)?Object(P.a)(m.details.birthDate):"";return Object(r.jsxs)("div",{className:n.root,children:[Object(r.jsxs)(E,{children:[Object(r.jsx)(i.a,{src:m.imageUrl,aspectRatio:16/9}),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.a,{mt:1,children:Object(r.jsx)(u.a,{className:n.animalName,variant:"h3",component:"h1",children:m.name})}),m.details&&Object(r.jsx)(d.a,{mt:1,children:Object(r.jsx)(u.a,{className:n.animalMeta,variant:"body1",children:"".concat(m.details.breed,", ").concat(m.details.gender,", ").concat(Object(P.b)(m.details.weight),", ").concat(m.details.color,", ").concat(b)})}),Object(r.jsx)(d.a,{mt:1,children:Object(r.jsxs)(u.a,{variant:"body1",children:["Referencing Animal ID:",t]})})]})]}),Object(r.jsx)(d.a,{mt:2,mb:2,children:Object(r.jsx)(u.a,{variant:"h5",component:"h3",children:"Events"})}),Object(r.jsx)(N,{})]})}}}]);
//# sourceMappingURL=7.d06ddff1.chunk.js.map