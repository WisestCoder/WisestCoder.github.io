(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[313],{

/***/ 52633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SchemaGenerator)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 70 modules
var Layout = __webpack_require__(68765);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(52263);
// EXTERNAL MODULE: ./node_modules/@coolvision/schema-generator/dist/index.esm.js + 454 modules
var index_esm = __webpack_require__(47134);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(72389);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/BrowserOnly.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Similar comp to the one described here:
// https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
function BrowserOnly(_ref){let{children,fallback}=_ref;const isBrowser=(0,useIsBrowser/* default */.Z)();if(isBrowser){if(typeof children!=='function'&&"production"==='development'){}return/*#__PURE__*/react.createElement(react.Fragment,null,children==null?void 0:children());}return fallback??null;}
;// CONCATENATED MODULE: ./src/pages/schema-generator.js
const defaultValue={"type":"object","properties":{"object_HHLdi8":{"title":"基础技能","type":"object","properties":{"play_game":{"key":"play_game","type":"string","name":"play_game","title":"打游戏","x-component":"Input","x-component-props":{"placeholder":"请输入"},"required":true}}}}};const advancedElements=[{text:'工作经历',name:'work_experience',schema:{"title":"工作经历","type":"array","items":{"type":"object","properties":{"company_GYjdmL":{"title":"工作单位","type":"string","x-component":"Input","x-component-props":{"placeholder":"请输入工作单位"},"required":true},"position_MYOc0t":{"title":"职位","type":"string","x-component":"Input","x-component-props":{"placeholder":"请输入职位"},"required":true},"dateRange_YUb4kj":{"title":"开始结束时间","type":"range","format":"dateTime","x-component":"RangePicker","x-component-props":{"placeholder":["开始时间","结束时间"],"picker":"date"},"required":true},"input_JDWEkz":{"title":"证明人","type":"string","x-component":"Input","x-component-props":{"placeholder":"请输入"}},"telephone_Ln_F2i":{"title":"证明人手机号","type":"string","x-component":"Input","x-component-props":{"placeholder":"请输入手机号"},"x-rules":[{"validator":"(value: string) => {\n            return !(/^[1]([3-9])[0-9]{9}$/.test(value));\n          }","message":"手机号格式不正确"}],"required":false},"textarea_6RDJDA":{"title":"离职原因","type":"string","x-component":"TextArea","x-component-props":{"placeholder":"请输入离职原因"}}}},"required":true}},{text:'教育经历',name:'educate_experience',schema:{"title":"教育经历","type":"array","items":{"type":"object","properties":{"school__ZvyAv":{"title":"学校","type":"string","x-component":"Input","x-component-props":{"placeholder":"请输入学校"},"required":true},"major_zkzF80":{"title":"专业","type":"string","x-component":"Input","x-component-props":{"placeholder":"请输入专业"},"required":true},"dateRange_OfS_p8":{"title":"开始结束时间","type":"range","format":"dateTime","x-component":"RangePicker","x-component-props":{"placeholder":["开始时间","结束时间"],"picker":"date"},"required":true}}}}},{text:'家庭成员',name:'family_member',schema:{"title":"家庭成员","type":"array","items":{"type":"object","properties":{"input_2CSFYn":{"title":"姓名","type":"string","x-component":"Input","x-component-props":{"placeholder":"请输入姓名"},"required":true},"input_7WLMnR":{"title":"关系","type":"string","x-component":"Input","x-component-props":{"placeholder":"请输入关系"},"required":true},"input_mkFCKW":{"title":"工作或学习单位","type":"string","x-component":"Input","x-component-props":{"placeholder":"请输入工作或学习单位"},"required":true},"input_psn_Dw":{"title":"职务","type":"string","x-component":"Input","x-component-props":{"placeholder":"请输入职务"},"required":true}}},"required":true}},{text:'专业证书',name:'professional_certificate',schema:{"title":"专业证书","type":"array","items":{"type":"object","properties":{"certificate_type_C2F0Cy":{"title":"证书类型","type":"string","x-component":"Input","x-component-props":{"placeholder":"请输入证书类型"},"required":true},"certificate_name_6odVio":{"title":"证书名称","type":"string","x-component":"Input","x-component-props":{"placeholder":"请输入证书名称"},"required":true},"input_u4EP8Z":{"title":"发证机构","type":"string","x-component":"Input","x-component-props":{"placeholder":"请输入发证机构"}},"date_OGHtXa":{"title":"取得日期","type":"string","x-component":"DatePicker","x-component-props":{"placeholder":"请输入"}}}}}}];const customElements=[{text:'手机号',name:'telephone',schema:{title:'手机号',type:'string',"x-component":'Input',"x-component-props":{"placeholder":"请输入手机号"},"x-rules":[{validator:`(value: string) => {
            return !(/^[1]([3-9])[0-9]{9}$/.test(value));
          }`,message:"手机号格式不正确"}],required:true}},{text:'邮箱',name:'email',schema:{title:'邮箱',type:'string',"x-component":'Input',"x-component-props":{"placeholder":"请输入邮箱"},"x-rules":[{validator:`(value: string) => {
            return !(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value));
          }`,message:"邮箱格式不正确"}],required:true}},{text:'应聘职位',name:'position',schema:{title:'应聘职位',type:'string',"x-component":'Input',"x-component-props":{"placeholder":"请输入应聘职位"},required:true}},{text:'期望月薪',name:'expected_salary',schema:{title:'期望月薪',type:'string',"x-component":'Select',"x-component-props":{placeholder:'请选择期望月薪'},enum:[{label:'5000元以下',value:'a'},{label:'5000元 - 10000元',value:'b'},{label:'10000元 - 15000元',value:'c'},{label:'15000元 - 20000元',value:'d'},{label:'20000元 - 30000元',value:'e'},{label:'30000元以上',value:'f'}],required:true}},{text:'当前月薪',name:'current_salary',schema:{title:'当前月薪',type:'string',"x-component":'Select',"x-component-props":{placeholder:'请选择当前月薪'},enum:[{label:'5000元以下',value:'a'},{label:'5000元 - 10000元',value:'b'},{label:'10000元 - 15000元',value:'c'},{label:'15000元 - 20000元',value:'d'},{label:'20000元 - 30000元',value:'e'},{label:'30000元以上',value:'f'}],required:true}},{text:'婚姻状况',name:'maritlal_status',widget:'Radio',schema:{title:'婚姻状况',type:'string','x-component':'Radio',enum:[{label:'已婚',value:'a'},{label:'未婚',value:'b'},{label:'其他',value:'c'}],required:true}},{text:'性别',name:'gender',widget:'Radio',schema:{title:'点击单选',type:'string','x-component':'Radio',enum:[{label:'男',value:'a'},{label:'女',value:'b'},{label:'其他',value:'c'}],required:true}},{text:'政治面貌',name:'politics',schema:{title:'政治面貌',type:'string',"x-component":'Input',"x-component-props":{"placeholder":"请输入政治面貌"},required:true}},{text:'籍贯',name:'native_place',schema:{title:'籍贯',type:'string',"x-component":'Input',"x-component-props":{"placeholder":"请输入籍贯"},required:true}},{text:'民族',name:'nation',schema:{title:'民族',type:'string',"x-component":'Input',"x-component-props":{"placeholder":"请输入民族"},required:true}},{text:'工作单位',name:'company',schema:{title:'工作单位',type:'string',"x-component":'Input',"x-component-props":{"placeholder":"请输入工作单位"},required:true}},{text:'学校',name:'school',schema:{title:'学校',type:'string',"x-component":'Input',"x-component-props":{"placeholder":"请输入学校"},required:true}},{text:'专业',name:'major',schema:{title:'专业',type:'string',"x-component":'Input',"x-component-props":{"placeholder":"请输入专业"},required:true}},{text:'学历',name:'education',schema:{title:'学历',type:'string',"x-component":'Select',"x-component-props":{"placeholder":"请选择"},enum:[{label:'小学',value:'a'},{label:'初中',value:'b'},{label:'高中',value:'c'},{label:'中专',value:'d'},{label:'大专',value:'e'},{label:'本科',value:'f'},{label:'硕士',value:'g'},{label:'博士',value:'h'}],required:true}},{text:'证书类型',name:'certificate_type',schema:{title:'证书类型',type:'string',"x-component":'Input',"x-component-props":{"placeholder":"请输入证书类型"},required:true}},{text:'证书名称',name:'certificate_name',schema:{title:'证书名称',type:'string',"x-component":'Input',"x-component-props":{"placeholder":"请输入证书名称"},required:true}}];function SchemaGenerator(){const{siteConfig}=(0,useDocusaurusContext/* default */.Z)();const[value,setValue]=(0,react.useState)(defaultValue);return/*#__PURE__*/react.createElement(Layout/* default */.Z,{title:`Hello from ${siteConfig.title}`,description:"Description will go into a meta tag in <head />"},/*#__PURE__*/react.createElement(BrowserOnly,{fallback:/*#__PURE__*/react.createElement("div",null,"Loading...")},()=>/*#__PURE__*/react.createElement(index_esm["default"],{value:value,onChange:newValue=>{setValue(newValue);},customElements:customElements,advancedElements:advancedElements// Widgets={{
//   ABCD
// }}
,actions:[{label:'切换模板',onClick:()=>{}}],onSave:schema=>{console.log(JSON.stringify(schema,null,2));},beforeDragComplete:current=>{console.log('current',current);return true;}})));}

/***/ }),

/***/ 46700:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 42786,
	"./af.js": 42786,
	"./ar": 30867,
	"./ar-dz": 14130,
	"./ar-dz.js": 14130,
	"./ar-kw": 96135,
	"./ar-kw.js": 96135,
	"./ar-ly": 56440,
	"./ar-ly.js": 56440,
	"./ar-ma": 47702,
	"./ar-ma.js": 47702,
	"./ar-sa": 16040,
	"./ar-sa.js": 16040,
	"./ar-tn": 37100,
	"./ar-tn.js": 37100,
	"./ar.js": 30867,
	"./az": 31083,
	"./az.js": 31083,
	"./be": 9808,
	"./be.js": 9808,
	"./bg": 68338,
	"./bg.js": 68338,
	"./bm": 67438,
	"./bm.js": 67438,
	"./bn": 8905,
	"./bn-bd": 76225,
	"./bn-bd.js": 76225,
	"./bn.js": 8905,
	"./bo": 11560,
	"./bo.js": 11560,
	"./br": 1278,
	"./br.js": 1278,
	"./bs": 80622,
	"./bs.js": 80622,
	"./ca": 2468,
	"./ca.js": 2468,
	"./cs": 5822,
	"./cs.js": 5822,
	"./cv": 50877,
	"./cv.js": 50877,
	"./cy": 47373,
	"./cy.js": 47373,
	"./da": 24780,
	"./da.js": 24780,
	"./de": 59740,
	"./de-at": 60217,
	"./de-at.js": 60217,
	"./de-ch": 60894,
	"./de-ch.js": 60894,
	"./de.js": 59740,
	"./dv": 5300,
	"./dv.js": 5300,
	"./el": 50837,
	"./el.js": 50837,
	"./en-au": 78348,
	"./en-au.js": 78348,
	"./en-ca": 77925,
	"./en-ca.js": 77925,
	"./en-gb": 22243,
	"./en-gb.js": 22243,
	"./en-ie": 46436,
	"./en-ie.js": 46436,
	"./en-il": 47207,
	"./en-il.js": 47207,
	"./en-in": 44175,
	"./en-in.js": 44175,
	"./en-nz": 76319,
	"./en-nz.js": 76319,
	"./en-sg": 31662,
	"./en-sg.js": 31662,
	"./eo": 92915,
	"./eo.js": 92915,
	"./es": 55655,
	"./es-do": 55251,
	"./es-do.js": 55251,
	"./es-mx": 96112,
	"./es-mx.js": 96112,
	"./es-us": 71146,
	"./es-us.js": 71146,
	"./es.js": 55655,
	"./et": 5603,
	"./et.js": 5603,
	"./eu": 77763,
	"./eu.js": 77763,
	"./fa": 76959,
	"./fa.js": 76959,
	"./fi": 11897,
	"./fi.js": 11897,
	"./fil": 42549,
	"./fil.js": 42549,
	"./fo": 94694,
	"./fo.js": 94694,
	"./fr": 94470,
	"./fr-ca": 63049,
	"./fr-ca.js": 63049,
	"./fr-ch": 52330,
	"./fr-ch.js": 52330,
	"./fr.js": 94470,
	"./fy": 5044,
	"./fy.js": 5044,
	"./ga": 29295,
	"./ga.js": 29295,
	"./gd": 2101,
	"./gd.js": 2101,
	"./gl": 38794,
	"./gl.js": 38794,
	"./gom-deva": 27884,
	"./gom-deva.js": 27884,
	"./gom-latn": 23168,
	"./gom-latn.js": 23168,
	"./gu": 95349,
	"./gu.js": 95349,
	"./he": 24206,
	"./he.js": 24206,
	"./hi": 30094,
	"./hi.js": 30094,
	"./hr": 30316,
	"./hr.js": 30316,
	"./hu": 22138,
	"./hu.js": 22138,
	"./hy-am": 11423,
	"./hy-am.js": 11423,
	"./id": 29218,
	"./id.js": 29218,
	"./is": 90135,
	"./is.js": 90135,
	"./it": 90626,
	"./it-ch": 10150,
	"./it-ch.js": 10150,
	"./it.js": 90626,
	"./ja": 39183,
	"./ja.js": 39183,
	"./jv": 24286,
	"./jv.js": 24286,
	"./ka": 12105,
	"./ka.js": 12105,
	"./kk": 47772,
	"./kk.js": 47772,
	"./km": 18758,
	"./km.js": 18758,
	"./kn": 79282,
	"./kn.js": 79282,
	"./ko": 33730,
	"./ko.js": 33730,
	"./ku": 1408,
	"./ku.js": 1408,
	"./ky": 33291,
	"./ky.js": 33291,
	"./lb": 36841,
	"./lb.js": 36841,
	"./lo": 55466,
	"./lo.js": 55466,
	"./lt": 57010,
	"./lt.js": 57010,
	"./lv": 37595,
	"./lv.js": 37595,
	"./me": 39861,
	"./me.js": 39861,
	"./mi": 35493,
	"./mi.js": 35493,
	"./mk": 95966,
	"./mk.js": 95966,
	"./ml": 87341,
	"./ml.js": 87341,
	"./mn": 5115,
	"./mn.js": 5115,
	"./mr": 10370,
	"./mr.js": 10370,
	"./ms": 9847,
	"./ms-my": 41237,
	"./ms-my.js": 41237,
	"./ms.js": 9847,
	"./mt": 72126,
	"./mt.js": 72126,
	"./my": 56165,
	"./my.js": 56165,
	"./nb": 64924,
	"./nb.js": 64924,
	"./ne": 16744,
	"./ne.js": 16744,
	"./nl": 93901,
	"./nl-be": 59814,
	"./nl-be.js": 59814,
	"./nl.js": 93901,
	"./nn": 83877,
	"./nn.js": 83877,
	"./oc-lnc": 92135,
	"./oc-lnc.js": 92135,
	"./pa-in": 15858,
	"./pa-in.js": 15858,
	"./pl": 64495,
	"./pl.js": 64495,
	"./pt": 89520,
	"./pt-br": 57971,
	"./pt-br.js": 57971,
	"./pt.js": 89520,
	"./ro": 96459,
	"./ro.js": 96459,
	"./ru": 21793,
	"./ru.js": 21793,
	"./sd": 40950,
	"./sd.js": 40950,
	"./se": 10490,
	"./se.js": 10490,
	"./si": 90124,
	"./si.js": 90124,
	"./sk": 64249,
	"./sk.js": 64249,
	"./sl": 14985,
	"./sl.js": 14985,
	"./sq": 51104,
	"./sq.js": 51104,
	"./sr": 49131,
	"./sr-cyrl": 79915,
	"./sr-cyrl.js": 79915,
	"./sr.js": 49131,
	"./ss": 85893,
	"./ss.js": 85893,
	"./sv": 98760,
	"./sv.js": 98760,
	"./sw": 91172,
	"./sw.js": 91172,
	"./ta": 27333,
	"./ta.js": 27333,
	"./te": 23110,
	"./te.js": 23110,
	"./tet": 52095,
	"./tet.js": 52095,
	"./tg": 27321,
	"./tg.js": 27321,
	"./th": 9041,
	"./th.js": 9041,
	"./tk": 19005,
	"./tk.js": 19005,
	"./tl-ph": 75768,
	"./tl-ph.js": 75768,
	"./tlh": 89444,
	"./tlh.js": 89444,
	"./tr": 72397,
	"./tr.js": 72397,
	"./tzl": 28254,
	"./tzl.js": 28254,
	"./tzm": 51106,
	"./tzm-latn": 30699,
	"./tzm-latn.js": 30699,
	"./tzm.js": 51106,
	"./ug-cn": 9288,
	"./ug-cn.js": 9288,
	"./uk": 67691,
	"./uk.js": 67691,
	"./ur": 13795,
	"./ur.js": 13795,
	"./uz": 6791,
	"./uz-latn": 60588,
	"./uz-latn.js": 60588,
	"./uz.js": 6791,
	"./vi": 65666,
	"./vi.js": 65666,
	"./x-pseudo": 14378,
	"./x-pseudo.js": 14378,
	"./yo": 75805,
	"./yo.js": 75805,
	"./zh-cn": 83839,
	"./zh-cn.js": 83839,
	"./zh-hk": 55726,
	"./zh-hk.js": 55726,
	"./zh-mo": 99807,
	"./zh-mo.js": 99807,
	"./zh-tw": 74152,
	"./zh-tw.js": 74152
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

}]);