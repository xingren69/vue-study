webpackJsonp([4],{NwSe:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={data:function(){return{imgs:[],infos:{},cid:this.$route.params.id}},created:function(){var t=this;this.$axios.get("photoinfo/"+this.cid).then(function(s){t.imgs=s.data.message,t.infos=s.data.content,t.imgs.forEach(function(t){t.w=200,t.h=150})})},methods:{handleClose:function(){console.log("close event")}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tmpl"},[e("nav-bar",{attrs:{title:"图文详情"}}),t._v(" "),e("div",{staticClass:"photo-title"},[e("span",[t._v("日期:"+t._s(t._f("convertDate")(t.infos.add_time)))]),t._v(" "),e("span",[t._v("浏览次数:"+t._s(t.infos.click))])]),t._v(" "),e("vue-preview",{staticClass:"aaa",attrs:{slides:t.imgs},on:{close:t.handleClose}}),t._v(" "),e("div",{staticClass:"photo-desc"},[e("p",[t._v(t._s(t.infos.info))])]),t._v(" "),e("common",{attrs:{cid:t.cid}})],1)},staticRenderFns:[]};var a=e("VU/8")(n,i,!1,function(t){e("ewRo"),e("Wk9c")},"data-v-1fcbba31",null);s.default=a.exports},Wk9c:function(t,s){},ewRo:function(t,s){}});
//# sourceMappingURL=4.9ddc8fbc143560095b1b.js.map