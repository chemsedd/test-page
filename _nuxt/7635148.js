(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{219:function(t,e,r){"use strict";r.r(e);var o={name:"Title"},c=r(10),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"text-5xl font-bold gradient-green bg-clip-text text-transparent"},[t._t("default")],2),t._v(" "),r("div",{staticClass:"w-20 h-2 bg-green-500"})])}),[],!1,null,null,null);e.default=component.exports},220:function(t,e,r){t.exports=r.p+"img/user.64cf6ea.jpg"},221:function(t,e,r){t.exports=r.p+"img/bio-intim.869f7eb.jpg"},222:function(t,e,r){t.exports=r.p+"img/map.d2be363.jpg"},224:function(t,e,r){var map={"./bg-home.jpg":225,"./bio-intim.jpg":221,"./company.jpg":226,"./map.jpg":222,"./serum.jpg":227,"./sro-orange.jpg":228,"./sro-rouge.jpg":229,"./user.jpg":220,"./vit-c-orange.jpg":230,"./vit-c-vert.jpg":231};function o(t){var e=c(t);return r(e)}function c(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=c,t.exports=o,o.id=224},225:function(t,e,r){t.exports=r.p+"img/bg-home.60055ee.jpg"},226:function(t,e,r){t.exports=r.p+"img/company.798af91.jpg"},227:function(t,e,r){t.exports=r.p+"img/serum.6a03f92.jpg"},228:function(t,e,r){t.exports=r.p+"img/sro-orange.3a58682.jpg"},229:function(t,e,r){t.exports=r.p+"img/sro-rouge.d9a8b7e.jpg"},230:function(t,e,r){t.exports=r.p+"img/vit-c-orange.c431764.jpg"},231:function(t,e,r){t.exports=r.p+"img/vit-c-vert.c7117a2.jpg"},242:function(t,e,r){var content=r(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("5c8be168",content,!0,{sourceMap:!1})},250:function(t,e,r){"use strict";r(242)},251:function(t,e,r){var o=r(22)(!1);o.push([t.i,'.header-1{font-size:1.875rem;font-weight:900;letter-spacing:.025em;--text-opacity:1;color:#48bb78;color:rgba(72,187,120,var(--text-opacity))}.header-2{font-size:1.5rem;color:#68d391;color:rgba(104,211,145,var(--text-opacity))}.header-2,.header-3{font-weight:700;--text-opacity:1}.header-3{font-size:1.125rem}.header-3,.header-3-icon{color:#38b2ac;color:rgba(56,178,172,var(--text-opacity))}.header-3-icon{height:1rem;width:auto;--text-opacity:1}.paragraph{font-size:1rem;--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity))}.list-label{font-weight:500;--text-opacity:1;color:#4fd1c5;color:rgba(79,209,197,var(--text-opacity))}.list-label:before{content:"-  "}.list-value{font-weight:500;display:flex;align-items:center;justify-content:center;height:1.5rem;width:5rem;text-align:right;font-weight:700;--text-opacity:1;color:#319795;color:rgba(49,151,149,var(--text-opacity));--border-opacity:1;border-color:#319795;border-color:rgba(49,151,149,var(--border-opacity));border-radius:9999px;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);padding-left:.5rem;padding-right:.5rem;margin-top:.25rem;margin-bottom:.25rem}',""]),t.exports=o},259:function(t,e,r){"use strict";r.r(e);var o={name:"Product",components:{Title:r(219).default},data:function(){return{products:this.$store.state.products}},computed:{getProduct:function(){var t=this.$route.params.product;return this.$store.state.products[t]},getPicture:function(){return r(224)("./".concat(this.getProduct.picture,".jpg"))}},head:function(){return{title:this.getProduct.title}}},c=(r(250),r(10)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-6"},[r("div",{staticClass:"col-start-1 col-span-10 md:col-span-2 flex items-center justify-start md:justify-center pl-10"},[r("nuxt-link",{staticClass:"mt-2 text-base text-green-400 hover:text-green-600",attrs:{to:"/products"}},[r("v-icon",{staticClass:"w-10 h-auto",attrs:{name:"arrow-alt-circle-left"}})],1)],1),t._v(" "),r("div",{staticClass:"col-start-2 col-span-10 grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-12 items-center justify-center"},[r("div",{staticClass:"lg:col-span-5 flex flex-col gap-y-8 items-center justify-center"},[r("img",{attrs:{src:t.getPicture,alt:t.getProduct.title}}),t._v(" "),r("div",{staticClass:"pill border-teal-500 text-teal-500"},[r("v-icon",{staticClass:"w-5 h-auto",attrs:{name:"box"}}),t._v("\n        "+t._s(t.getProduct.quantity)+"\n      ")],1)]),t._v(" "),r("div",{staticClass:"lg:col-span-7 flex flex-col gap-y-4"},[r("Title",[t._v(t._s(t.getProduct.title))]),t._v(" "),r("div",{staticClass:"header-2"},[t._v(t._s(t.getProduct.type))]),t._v(" "),r("div",{staticClass:"flex flex-col gap-y-2"},[r("div",{staticClass:"inline-flex gap-x-2 items-center"},[r("v-icon",{staticClass:"header-3-icon",attrs:{name:"file-medical"}}),t._v(" "),r("h2",{staticClass:"header-3"},[t._v("Description")])],1),t._v(" "),r("div",{staticClass:"paragraph"},[t._v("\n          "+t._s(t.getProduct.description)+"\n        ")])]),t._v(" "),r("div",{staticClass:"flex flex-col gap-y-2"},[r("div",{staticClass:"inline-flex gap-x-2 items-center"},[r("v-icon",{staticClass:"header-3-icon",attrs:{name:"clinic-medical"}}),t._v(" "),r("h2",{staticClass:"header-3"},[t._v("Indication")])],1),t._v(" "),r("div",{staticClass:"paragraph"},[t._v("\n          "+t._s(t.getProduct.indication)+"\n        ")])]),t._v(" "),r("div",{staticClass:"flex flex-col gap-y-2"},[r("div",{staticClass:"inline-flex gap-x-2 items-center"},[r("v-icon",{staticClass:"header-3-icon",attrs:{name:"mortar-pestle"}}),t._v(" "),r("h2",{staticClass:"header-3"},[t._v("Composition")])],1),t._v(" "),r("div",{staticClass:"paragraph"},[r("dl",{staticClass:"grid grid-cols-2 ml-8"},[t._l(t.getProduct.composition,(function(e,o){return[r("dt",{key:o,staticClass:"list-label"},[t._v(t._s(o))]),t._v(" "),e?r("dd",{key:o+e,staticClass:"list-value justify-self-end"},[t._v("\n                "+t._s(e)+"\n              ")]):t._e()]}))],2)])]),t._v(" "),r("hr"),t._v(" "),r("nuxt-link",{staticClass:"mt-2 text-base text-green-400 hover:text-green-600",attrs:{to:"/products"}},[r("v-icon",{staticClass:"w-4 h-auto",attrs:{name:"arrow-alt-circle-left"}}),t._v("\n        Voir tous les produits\n      ")],1)],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:r(219).default})}}]);