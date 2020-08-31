(function(t){function e(e){for(var o,s,c=e[0],i=e[1],l=e[2],u=0,g=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&g.push(a[s][0]),a[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);d&&d(e);while(g.length)g.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={editor:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Story_Board_Host/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=i;r.push([1,"chunk-vendors","chunk-common"]),n()})({1:function(t,e,n){t.exports=n("124b")},"124b":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{ref:"storyBoardEditor",staticClass:"story-board-editor-container"},[n("div",{staticClass:"story-board-editor-panels-count-container"},[n("p",{staticClass:"story-board-editor-panels-count-text"},[t._v("Panels")]),n("div",{staticClass:"story-board-editor-panels-count"},[n("v-radio-group",{attrs:{row:""},model:{value:t.content.panels,callback:function(e){t.$set(t.content,"panels",e)},expression:"content.panels"}},t._l(t.panelsMaximumCount,(function(t){return n("v-radio",{key:t,attrs:{label:""+t,value:t}})})),1)],1)]),n("Foreground",{attrs:{content:t.content},on:{setContent:t.setContent}}),n("Background",{attrs:{content:t.content}})],1)])},r=[],s=(n("b64b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"story-board-editor-foreground-container"},[n("div",{staticClass:"story-board-editor-foreground"},[n("p",{staticClass:"story-board-editor-foreground-name"},[t._v("Foreground")]),n("div",{staticClass:"story-board-editor-foreground-checkbox-container"},[n("v-checkbox",{staticClass:"story-board-editor-foreground-checkbox",attrs:{disabled:"",label:"Enable Student Upload"},model:{value:t.content.foregroundEnableUpload,callback:function(e){t.$set(t.content,"foregroundEnableUpload",e)},expression:"content.foregroundEnableUpload"}})],1)]),t._l(t.categoriesAndimages,(function(e,o){return n("div",{key:o,staticClass:"story-board-editor-foreground-categories"},[n("div",{staticClass:"story-board-editor-foreground-categories-name-container"},[n("div",{staticClass:"story-board-editor-foreground-categories-name"},[n("v-checkbox",{staticClass:"story-board-editor-foreground-categories-name-checkbox",attrs:{disabled:"","input-value":t.isCategoryUse(o)}}),n("p",{staticClass:"story-board-editor-foreground-categories-name-text",on:{click:function(e){return t.openCategory(o)}}},[t._v(t._s(o))])],1),n("div",[t.activeCategories===o?n("v-btn",{staticClass:"story-board-editor-foreground-select-all-butoon",class:t.selectAllButoonStatus,attrs:{text:"",small:""},on:{click:function(e){return t.selectCategoryAllImages(o)}}},[t._v(" Select all ")]):t._e(),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.openCategory(o)}}},[n("v-icon",[t._v(t._s(t.activeCategories===o?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1)]),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.activeCategories===o,expression:"activeCategories === categoryName"}],staticClass:"story-board-editor-foreground-image-container"},t._l(e,(function(e){return n("div",{key:e,staticClass:"story-board-editor-foreground-image",style:{"background-image":"url("+t.getImageSrc(e,o)+")"}},[n("v-checkbox",{staticClass:"story-board-editor-foreground-checkbox",attrs:{"input-value":t.getSelectedImage(o,e)},on:{change:function(n){return t.selectImage(o,e)}}})],1)})),0)])],1)}))],2)}),c=[],i=(n("99af"),n("4160"),n("a434"),n("d3b7"),n("159b"),n("ddb0"),n("2909")),l=n("3835"),d=n("b85c"),u=n("a49b"),g={name:"Foreground",data:function(){return{categoriesAndimages:u["a"].foregroundCategoriesAndImages,foregroundCheckbox:!1,activeCategories:"",isActiveSelectAll:""}},props:{content:{type:Object,default:function(){return{}}}},methods:{getImageSrc:function(t,e){return n("2dfe")("./".concat(e,"/").concat(t))},openCategory:function(t){if(this.activeCategories===t)return this.activeCategories="";this.activeCategories=t},selectImage:function(t,e){if(t in this.content.foregrounds){var n,o=Object(d["a"])(this.content.foregrounds[t].entries());try{for(o.s();!(n=o.n()).done;){var a=Object(l["a"])(n.value,2),r=a[0],s=a[1];if(s===e)return this.content.foregrounds[t].splice(r,1),this.content.foregrounds[t].length||delete this.content.foregrounds[t],void this.$emit("setContent")}}catch(c){o.e(c)}finally{o.f()}this.content.foregrounds[t].push(e)}else this.content.foregrounds[t]=[e];this.$emit("setContent")},getSelectedImage:function(t,e){var n=!1;return this.content.foregrounds[t]&&this.content.foregrounds[t].forEach((function(t){t===e&&(n=!0)})),n},selectCategoryAllImages:function(t){this.isActiveSelectAll===t?this.isActiveSelectAll="":this.isActiveSelectAll=t;var e={};Object.assign(e,this.content.foregrounds),this.isActiveSelectAll?e[t]=Object(i["a"])(this.categoriesAndimages[t]):delete e[t],this.content.foregrounds=e},isCategoryUse:function(t){return t in this.content.foregrounds}},computed:{selectAllButoonStatus:function(){return this.isActiveSelectAll===this.activeCategories?"story-board-editor-foreground-select-all-butoon-active":""}}},b=g,f=(n("c335"),n("2877")),v=n("6544"),p=n.n(v),h=n("8336"),m=n("ac7c"),y=n("0789"),k=n("132d"),C=Object(f["a"])(b,s,c,!1,null,null,null),x=C.exports;p()(C,{VBtn:h["a"],VCheckbox:m["a"],VExpandTransition:y["a"],VIcon:k["a"]});var A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"story-board-editor-background-container"},[n("div",{staticClass:"story-board-editor-background"},[n("p",{staticClass:"story-board-editor-background-name"},[t._v("Background")]),n("div",{staticClass:"story-board-editor-background-checkbox-container"},[n("v-checkbox",{staticClass:"story-board-editor-background-checkbox",attrs:{disabled:"",label:"Enable Student Upload"},model:{value:t.content.backgroundEnableUpload,callback:function(e){t.$set(t.content,"backgroundEnableUpload",e)},expression:"content.backgroundEnableUpload"}})],1)]),n("div",{staticClass:"story-board-editor-background-select-all-container"},[n("div",{staticClass:"story-board-editor-background-select-all"},[n("v-btn",{class:["story-board-editor-background-select-all-butoon",t.selectAllButoonClass],attrs:{text:"",small:""},on:{click:t.selectAllImages}},[t._v(" Select all ")])],1),n("div",{staticClass:"story-board-editor-background-image-container"},t._l(t.backgroundImages,(function(e){return n("div",{key:e,staticClass:"story-board-editor-background-image",style:{"background-image":"url("+t.getImageSrc(e)+")"}},[n("v-checkbox",{staticClass:"story-board-editor-background-checkbox",attrs:{"input-value":t.getSelectedImage(e)},on:{change:function(n){return t.selectImage(e)}}})],1)})),0)])])},S=[],_={name:"Background",data:function(){return{backgroundImages:u["a"].backgroundImages,isActiveSelectAll:!1}},props:{content:{type:Object,default:function(){return{}}}},methods:{getImageSrc:function(t){return n("97e6")("./".concat(t))},selectImage:function(t){if(this.content.backgrounds.length>0){var e,n=Object(d["a"])(this.content.backgrounds.entries());try{for(n.s();!(e=n.n()).done;){var o=Object(l["a"])(e.value,2),a=o[0],r=o[1];if(r===t)return void this.content.backgrounds.splice(a,1)}}catch(s){n.e(s)}finally{n.f()}}this.content.backgrounds.push(t)},getSelectedImage:function(t){var e=!1;return this.content.backgrounds.length>0&&this.content.backgrounds.forEach((function(n){n===t&&(e=!0)})),e},selectAllImages:function(){this.isActiveSelectAll=!this.isActiveSelectAll,this.isActiveSelectAll?this.content.backgrounds=Object(i["a"])(this.backgroundImages):this.content.backgrounds=[]}},computed:{selectAllButoonClass:function(){return this.isActiveSelectAll?"story-board-editor-foreground-select-all-butoon-active":""}}},w=_,O=(n("9a2c"),Object(f["a"])(w,A,S,!1,null,null,null)),j=O.exports;p()(O,{VBtn:h["a"],VCheckbox:m["a"]});var I={name:"editor",data:function(){return{content:{panels:null,foregroundEnableUpload:!1,backgroundEnableUpload:!1,foregrounds:{},backgrounds:[]},panelsMaximumCount:u["a"].panelsMaximumCount}},components:{Foreground:x,Background:j},watch:{content:{deep:!0,handler:function(t){this.setContent(t)}}},methods:{setContent:function(){window.parent.postMessage({application:"activity-manager",message:"set-content",data:{content:this.content}},"*")}},mounted:function(){var t=this;window.parent.postMessage({application:"activity-manager",message:"init"},"*"),window.parent.postMessage({application:"activity-manager",message:"set-iframe-height",data:{iframeHeight:this.$refs.storyBoardEditor.scrollHeight}},"*"),window.addEventListener("message",(function(e){var n=t;if("activity-manager"===e.data.application)switch(e.data.message){case"init-response":0!==Object.keys(e.data.data.content).length?n.content=e.data.data.content:n.setContent(n.content);break}}))}},E=I,B=(n("45cc"),n("7496")),U=n("67b6"),M=n("43a6"),$=Object(f["a"])(E,a,r,!1,null,null,null),V=$.exports;p()($,{VApp:B["a"],VRadio:U["a"],VRadioGroup:M["a"]});var P=n("8331"),F=n("168c");o["a"].config.productionTip=!1,new o["a"]({vuetify:P["a"],i18n:F["a"],render:function(t){return t(V)}}).$mount("#app")},"45cc":function(t,e,n){"use strict";var o=n("56ce"),a=n.n(o);a.a},"56ce":function(t,e,n){},"9a2c":function(t,e,n){"use strict";var o=n("e066"),a=n.n(o);a.a},c335:function(t,e,n){"use strict";var o=n("f200"),a=n.n(o);a.a},e066:function(t,e,n){},f200:function(t,e,n){}});
//# sourceMappingURL=editor.e4a64148.js.map