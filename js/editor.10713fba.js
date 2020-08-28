(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["editor"],{"2c64":function(t,e,n){},"2d38":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"story-board-editor-container"},[n("div",{staticClass:"story-board-editor-panels-count-container"},[n("p",{staticClass:"story-board-editor-panels-count-text"},[t._v("Panels")]),n("div",{staticClass:"story-board-editor-panels-count"},[n("v-radio-group",{attrs:{row:""},model:{value:t.content.panels,callback:function(e){t.$set(t.content,"panels",e)},expression:"content.panels"}},t._l(t.panelsMaximumCount,(function(t){return n("v-radio",{key:t,attrs:{label:""+t,value:t}})})),1)],1)]),n("Foreground",{attrs:{content:t.content},on:{setContent:t.setContent}}),n("Background",{attrs:{content:t.content}})],1)},i=[],a=(n("b64b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"story-board-editor-foreground-container"},[n("div",{staticClass:"story-board-editor-foreground"},[n("p",{staticClass:"story-board-editor-foreground-name"},[t._v("Foreground")]),n("div",{staticClass:"story-board-editor-foreground-checkbox-container"},[n("v-checkbox",{staticClass:"story-board-editor-foreground-checkbox",attrs:{disabled:"",label:"Enable Student Upload"},model:{value:t.content.foregroundEnableUpload,callback:function(e){t.$set(t.content,"foregroundEnableUpload",e)},expression:"content.foregroundEnableUpload"}})],1)]),t._l(t.categoriesAndimages,(function(e,o){return n("div",{key:o,staticClass:"story-board-editor-foreground-categories"},[n("div",{staticClass:"story-board-editor-foreground-categories-name-container"},[n("div",{staticClass:"story-board-editor-foreground-categories-name"},[n("v-checkbox",{staticClass:"story-board-editor-foreground-categories-name-checkbox",attrs:{disabled:"","input-value":t.isCategoryUse(o)}}),n("p",{staticClass:"story-board-editor-foreground-categories-name-text",on:{click:function(e){return t.openCategory(o)}}},[t._v(t._s(o))])],1),n("div",[t.activeCategories===o?n("v-btn",{staticClass:"story-board-editor-foreground-select-all-butoon",class:t.selectAllButoonStatus,attrs:{text:"",small:""},on:{click:function(e){return t.selectCategoryAllImages(o)}}},[t._v(" Select all ")]):t._e(),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.openCategory(o)}}},[n("v-icon",[t._v(t._s(t.activeCategories===o?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1)]),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.activeCategories===o,expression:"activeCategories === categoryName"}],staticClass:"story-board-editor-foreground-image-container"},t._l(e,(function(e){return n("div",{key:e,staticClass:"story-board-editor-foreground-image",style:{"background-image":"url("+t.getImageSrc(e,o)+")"}},[n("v-checkbox",{staticClass:"story-board-editor-foreground-checkbox",attrs:{"input-value":t.getSelectedImage(o,e)},on:{change:function(n){return t.selectImage(o,e)}}})],1)})),0)])],1)}))],2)}),s=[],r=(n("99af"),n("4160"),n("a434"),n("d3b7"),n("159b"),n("ddb0"),n("2909")),c=n("3835"),l=n("b85c"),u=n("a49b"),d={name:"Foreground",data:function(){return{categoriesAndimages:u["a"].foregroundCategoriesAndImages,foregroundCheckbox:!1,activeCategories:"",isActiveSelectAll:""}},props:{content:{type:Object,default:function(){return{}}}},methods:{getImageSrc:function(t,e){return n("2dfe")("./".concat(e,"/").concat(t))},openCategory:function(t){if(this.activeCategories===t)return this.activeCategories="";this.activeCategories=t},selectImage:function(t,e){if(t in this.content.foregrounds){var n,o=Object(l["a"])(this.content.foregrounds[t].entries());try{for(o.s();!(n=o.n()).done;){var i=Object(c["a"])(n.value,2),a=i[0],s=i[1];if(s===e)return this.content.foregrounds[t].splice(a,1),this.content.foregrounds[t].length||delete this.content.foregrounds[t],void this.$emit("setContent")}}catch(r){o.e(r)}finally{o.f()}this.content.foregrounds[t].push(e)}else this.content.foregrounds[t]=[e];this.$emit("setContent")},getSelectedImage:function(t,e){var n=!1;return this.content.foregrounds[t]&&this.content.foregrounds[t].forEach((function(t){t===e&&(n=!0)})),n},selectCategoryAllImages:function(t){this.isActiveSelectAll===t?this.isActiveSelectAll="":this.isActiveSelectAll=t;var e={};Object.assign(e,this.content.foregrounds),this.isActiveSelectAll?e[t]=Object(r["a"])(this.categoriesAndimages[t]):delete e[t],this.content.foregrounds=e},isCategoryUse:function(t){return t in this.content.foregrounds}},computed:{selectAllButoonStatus:function(){return this.isActiveSelectAll===this.activeCategories?"story-board-editor-foreground-select-all-butoon-active":""}}},h=d,p=(n("c335"),n("2877")),g=n("6544"),f=n.n(g),b=n("8336"),v=(n("25f0"),n("5530")),m=(n("6ca7"),n("ec29"),n("9d26")),C=n("c37a"),k=(n("4de4"),n("45fc"),n("5607")),y=n("2b0e"),S=y["a"].extend({name:"rippleable",directives:{ripple:k["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),I=n("80d2"),x=y["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:I["g"]}}}),A=n("58df"),O=Object(A["a"])(C["a"],S,x).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=C["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var o=n.length;n=n.filter((function(n){return!t.valueComparator(n,e)})),n.length===o&&n.push(e)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(n,e)?null:e:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),j=O.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({},C["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(m["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(v["a"])(Object(v["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),w=n("0789"),V=n("132d"),_=Object(p["a"])(h,a,s,!1,null,null,null),$=_.exports;f()(_,{VBtn:b["a"],VCheckbox:j,VExpandTransition:w["a"],VIcon:V["a"]});var E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"story-board-editor-background-container"},[n("div",{staticClass:"story-board-editor-background"},[n("p",{staticClass:"story-board-editor-background-name"},[t._v("Background")]),n("div",{staticClass:"story-board-editor-background-checkbox-container"},[n("v-checkbox",{staticClass:"story-board-editor-background-checkbox",attrs:{disabled:"",label:"Enable Student Upload"},model:{value:t.content.backgroundEnableUpload,callback:function(e){t.$set(t.content,"backgroundEnableUpload",e)},expression:"content.backgroundEnableUpload"}})],1)]),n("div",{staticClass:"story-board-editor-background-select-all-container"},[n("div",{staticClass:"story-board-editor-background-select-all"},[n("v-btn",{class:["story-board-editor-background-select-all-butoon",t.selectAllButoonClass],attrs:{text:"",small:""},on:{click:t.selectAllImages}},[t._v(" Select all ")])],1),n("div",{staticClass:"story-board-editor-background-image-container"},t._l(t.backgroundImages,(function(e){return n("div",{key:e,staticClass:"story-board-editor-background-image",style:{"background-image":"url("+t.getImageSrc(e)+")"}},[n("v-checkbox",{staticClass:"story-board-editor-background-checkbox",attrs:{"input-value":t.getSelectedImage(e)},on:{change:function(n){return t.selectImage(e)}}})],1)})),0)])])},B=[],D={name:"Background",data:function(){return{backgroundImages:u["a"].backgroundImages,isActiveSelectAll:!1}},props:{content:{type:Object,default:function(){return{}}}},methods:{getImageSrc:function(t){return n("97e6")("./".concat(t))},selectImage:function(t){if(this.content.backgrounds.length>0){var e,n=Object(l["a"])(this.content.backgrounds.entries());try{for(n.s();!(e=n.n()).done;){var o=Object(c["a"])(e.value,2),i=o[0],a=o[1];if(a===t)return void this.content.backgrounds.splice(i,1)}}catch(s){n.e(s)}finally{n.f()}}this.content.backgrounds.push(t)},getSelectedImage:function(t){var e=!1;return this.content.backgrounds.length>0&&this.content.backgrounds.forEach((function(n){n===t&&(e=!0)})),e},selectAllImages:function(){this.isActiveSelectAll=!this.isActiveSelectAll,this.isActiveSelectAll?this.content.backgrounds=Object(r["a"])(this.backgroundImages):this.content.backgrounds=[]}},computed:{selectAllButoonClass:function(){return this.isActiveSelectAll?"story-board-editor-foreground-select-all-butoon-active":""}}},F=D,G=(n("9a2c"),Object(p["a"])(F,E,B,!1,null,null,null)),U=G.exports;f()(G,{VBtn:b["a"],VCheckbox:j});var L={name:"editor",data:function(){return{content:{panels:null,foregroundEnableUpload:!1,backgroundEnableUpload:!1,foregrounds:{},backgrounds:[]},panelsMaximumCount:u["a"].panelsMaximumCount}},components:{Foreground:$,Background:U},watch:{content:{deep:!0,handler:function(t){this.setContent(t)}}},methods:{setContent:function(){window.parent.postMessage({application:"activity-manager",message:"set-content",data:{content:this.content}},"*")}},mounted:function(){var t=this;window.parent.postMessage({application:"activity-manager",message:"init"},"*"),window.addEventListener("message",(function(e){var n=t;if("activity-manager"===e.data.application)switch(e.data.message){case"init-response":0!==Object.keys(e.data.data.content).length?n.content=e.data.data.content:n.setContent(n.content);break}}))}},R=L,M=(n("45cc"),n("b0c0"),n("2c64"),n("ba87")),T=n("7e2b"),N=n("a9ad"),K=n("4e82"),z=n("7560"),J=Object(A["a"])(T["a"],N["a"],S,Object(K["a"])("radioGroup"),z["a"]),P=J.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return O.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return C["a"].options.computed.computedId.call(this)},hasLabel:C["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return O.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return O.options.methods.genInput.call(this,"radio",t)},genLabel:function(){var t=this;return this.hasLabel?this.$createElement(M["a"],{on:{click:function(e){e.preventDefault(),t.onChange()}},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(I["k"])(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(m["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(v["a"])({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes};return t("div",e,[this.genRadio(),this.genLabel()])}}),q=(n("a9e3"),n("3d86"),n("604c")),H=Object(A["a"])(x,q["a"],C["a"]),Q=H.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({},C["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},C["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=C["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=C["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:q["a"].options.methods.onClick}}),W=Object(p["a"])(R,o,i,!1,null,null,null);e["default"]=W.exports;f()(W,{VRadio:P,VRadioGroup:Q})},"3d86":function(t,e,n){},"45cc":function(t,e,n){"use strict";var o=n("56ce"),i=n.n(o);i.a},"56ce":function(t,e,n){},"6ca7":function(t,e,n){},"9a2c":function(t,e,n){"use strict";var o=n("e066"),i=n.n(o);i.a},c335:function(t,e,n){"use strict";var o=n("f200"),i=n.n(o);i.a},e066:function(t,e,n){},ec29:function(t,e,n){},f200:function(t,e,n){}}]);
//# sourceMappingURL=editor.10713fba.js.map