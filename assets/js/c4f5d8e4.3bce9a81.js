"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[195],{

/***/ 69045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 70 modules
var Layout = __webpack_require__(68765);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(52263);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39960);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js + 2 modules
var row = __webpack_require__(96317);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js + 1 modules
var col = __webpack_require__(6226);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 19 modules
var typography = __webpack_require__(56075);
;// CONCATENATED MODULE: ./src/chapter/Home/BlockContent/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"blockContent":"blockContent_eNo_","blockContentExtra":"blockContentExtra_tBhP"});
;// CONCATENATED MODULE: ./src/chapter/Home/BlockContent/index.tsx
const BlockContent=_ref=>{let{title,children,extra}=_ref;return/*#__PURE__*/react.createElement("div",{className:index_module.blockContent},/*#__PURE__*/react.createElement(typography/* default.Title */.Z.Title,{level:2,style:{fontWeight:'lighter',color:'#314659'}},title,extra&&/*#__PURE__*/react.createElement("div",{className:index_module.blockContentExtra},extra)),children);};/* harmony default export */ const Home_BlockContent = (BlockContent);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 15 modules
var card = __webpack_require__(81474);
;// CONCATENATED MODULE: ./src/chapter/Home/MiniPanel/index.tsx
const MiniPanel=_ref=>{let{title,img,description,href,link}=_ref;let content=/*#__PURE__*/react.createElement(card/* default */.Z,{hoverable:true,className:"design-mini-panel",cover:/*#__PURE__*/react.createElement("img",{alt:typeof title==='string'?title:'Hitu',src:img})},/*#__PURE__*/react.createElement(card/* default.Meta */.Z.Meta,{title:title,description:description}));if(href){content=/*#__PURE__*/react.createElement("a",{href:href,target:"_blank",rel:"noopener noreferrer"},content);}else if(link){content=/*#__PURE__*/react.createElement(Link/* default */.Z,{to:link},content);}return/*#__PURE__*/react.createElement(col/* default */.Z,{xs:24,sm:8},content);};/* harmony default export */ const Home_MiniPanel = (MiniPanel);
;// CONCATENATED MODULE: ./src/utils/constant.ts
const MINI_LIST=[{img:'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*ZhzDQLMyYlYAAAAAAAAAAABkARQnAQ',title:'Dyn From',description:'开箱即用的动态表单编排方案',link:'/docs/component/schema-generator/introduction'},{img:'https://gw.alipayobjects.com/zos/antfincdn/888xda6kBc/Ant%252520Design%252520shouyepeitu.svg',title:'Graph Editor',description:'全新一代流程节点编辑器',link:'/docs/component/graph-editor/introduction'},{img:'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*mb-WQILTlSEAAAAAAAAAAABkARQnAQ',title:'OLS',description:'一款强大且支持自定义的前端工程脚手架',link:'/docs/tools/ols/index'},{img:'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*PrLWSpmWZmIAAAAAAAAAAABkARQnAQ',title:'Proxy packet',description:'Chrome 插件，支持各种代理',link:'/docs/tools/proxy-packet/index'},{img:'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*MaL2SYtHPuMAAAAAAAAAAABkARQnAQ',title:'桌面版代理工具',description:'一款强大的桌面版代理工具（持续开发中）',link:'/docs/tools/dyn-proxy/'},{img:'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*T_HeSIJ30IIAAAAAAAAAAABkARQnAQ',title:'待定',description:'广告位，待定'}];
;// CONCATENATED MODULE: ./src/chapter/Home/GreatContent/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const GreatContent_index_module = ({"card":"card_LKO7"});
;// CONCATENATED MODULE: ./src/chapter/Home/GreatContent/index.tsx
function GreatContent(){return/*#__PURE__*/react.createElement(Home_BlockContent,{title:"\u6D77\u91CF\u5185\u5BB9"},/*#__PURE__*/react.createElement(row/* default */.Z,{gutter:[40,0]},/*#__PURE__*/react.createElement(col/* default */.Z,{span:12},/*#__PURE__*/react.createElement("div",{className:GreatContent_index_module.card,style:{backgroundColor:'#E6F1FF',backgroundImage:'url(https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*0oaHSYRcnT4AAAAAAAAAAABkARQnAQ)'}},/*#__PURE__*/react.createElement("h3",null,"\u7EC4\u4EF6"),/*#__PURE__*/react.createElement("ul",null,/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(Link/* default */.Z,{to:"/docs/component/graph-editor/introduction"},"\u56FE\u5F62\u7F16\u8F91\u5668")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(Link/* default */.Z,{to:"/docs/component/schema-generator/introduction"},"\u8868\u5355\u8BBE\u8BA1\u5668"))))),/*#__PURE__*/react.createElement(col/* default */.Z,{span:12},/*#__PURE__*/react.createElement("div",{className:GreatContent_index_module.card,style:{backgroundColor:'#DEF6FF',backgroundImage:'url(https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*TLJTT78n7rMAAAAAAAAAAABkARQnAQ)'}},/*#__PURE__*/react.createElement("h3",null,"\u811A\u624B\u67B6"),/*#__PURE__*/react.createElement("ul",null,/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(Link/* default */.Z,{to:"/docs/tools/ols/index"},"OLS")))))),/*#__PURE__*/react.createElement(row/* default */.Z,{style:{marginTop:40},gutter:[{xs:32,sm:40},{xs:32,sm:40}]},MINI_LIST.map((panel,index)=>/*#__PURE__*/react.createElement(Home_MiniPanel,(0,esm_extends/* default */.Z)({key:`${panel.title}_${index}`},panel)))));}
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(17772);
;// CONCATENATED MODULE: ./src/chapter/Home/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Home_index_module = ({"bannerContainer":"bannerContainer_R1Jp","bannerTitle":"bannerTitle_RqIg","bannerDescription":"bannerDescription_hnaK","bannerButtons":"bannerButtons_lL2t"});
;// CONCATENATED MODULE: ./src/chapter/Home/index.tsx
// 引入样式相当于全局引入，会污染
function Banner(){return/*#__PURE__*/react.createElement("div",{className:Home_index_module.bannerContainer},/*#__PURE__*/react.createElement("h2",{className:Home_index_module.bannerTitle},"\u964C\u5C18\u7684\u5C0F\u79C1\u6A71"),/*#__PURE__*/react.createElement("p",{className:Home_index_module.bannerDescription},"\u521B\u9020\u9AD8\u6548\u6109\u60A6\u7684\u5DE5\u4F5C\u4F53\u9A8C"),/*#__PURE__*/react.createElement("div",{className:Home_index_module.bannerButtons},/*#__PURE__*/react.createElement(Link/* default */.Z,{to:"/docs/component/graph-editor/introduction"},/*#__PURE__*/react.createElement(es_button/* default */.Z,{type:"primary",size:"large",shape:"round"},"\u5F00\u59CB\u4F7F\u7528"))));}function Home(){const{siteConfig}=(0,useDocusaurusContext/* default */.Z)();return/*#__PURE__*/react.createElement(Layout/* default */.Z,{title:`Hello from ${siteConfig.title}`,description:"Description will go into a meta tag in <head />"},/*#__PURE__*/react.createElement(Banner,null),/*#__PURE__*/react.createElement("div",{style:{maxWidth:'1356px',margin:'0px auto'}},/*#__PURE__*/react.createElement(GreatContent,null)));}
;// CONCATENATED MODULE: ./src/pages/index.js
/* harmony default export */ const pages = (Home);

/***/ })

}]);