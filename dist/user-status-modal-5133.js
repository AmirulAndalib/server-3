"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[5133],{29957:(t,e,s)=>{s.d(e,{A:()=>l});var a=s(71354),n=s.n(a),r=s(76314),i=s.n(r)()(n());i.push([t.id,".clear-at-select[data-v-72be27d6]{display:flex;margin-bottom:10px;align-items:center}.clear-at-select__label[data-v-72be27d6]{margin-right:12px}.clear-at-select__select[data-v-72be27d6]{flex-grow:1;min-width:215px}","",{version:3,sources:["webpack://./apps/user_status/src/components/ClearAtSelect.vue"],names:[],mappings:"AACA,kCACC,YAAA,CACA,kBAAA,CACA,kBAAA,CAEA,yCACC,iBAAA,CAGD,0CACC,WAAA,CACA,eAAA",sourcesContent:["\n.clear-at-select {\n\tdisplay: flex;\n\tmargin-bottom: 10px;\n\talign-items: center;\n\n\t&__label {\n\t\tmargin-right: 12px;\n\t}\n\n\t&__select {\n\t\tflex-grow: 1;\n\t\tmin-width: 215px;\n\t}\n}\n"],sourceRoot:""}]);const l=i},29478:(t,e,s)=>{s.d(e,{A:()=>l});var a=s(71354),n=s.n(a),r=s(76314),i=s.n(r)()(n());i.push([t.id,".custom-input[data-v-3f943eb8]{display:flex;align-items:flex-end;gap:var(--default-grid-baseline);width:100%}.custom-input__container[data-v-3f943eb8]{width:100%}","",{version:3,sources:["webpack://./apps/user_status/src/components/CustomMessageInput.vue"],names:[],mappings:"AACA,+BACC,YAAA,CACA,oBAAA,CACA,gCAAA,CACA,UAAA,CAEA,0CACC,UAAA",sourcesContent:["\n.custom-input {\n\tdisplay: flex;\n\talign-items: flex-end;\n\tgap: var(--default-grid-baseline);\n\twidth: 100%;\n\n\t&__container {\n\t\twidth: 100%;\n\t}\n}\n"],sourceRoot:""}]);const l=i},74430:(t,e,s)=>{s.d(e,{A:()=>l});var a=s(71354),n=s.n(a),r=s(76314),i=s.n(r)()(n());i.push([t.id,".user-status-online-select__label[data-v-a73330f8]{position:relative;display:block;margin:8px;padding:8px;padding-left:40px;border:2px solid var(--color-main-background);border-radius:var(--border-radius-large);background-color:var(--color-background-hover);background-position:8px center;background-size:24px}.user-status-online-select__label span[data-v-a73330f8],.user-status-online-select__label[data-v-a73330f8]{cursor:pointer}.user-status-online-select__label span[data-v-a73330f8]{position:absolute;top:calc(50% - 10px);left:10px;display:block;width:24px;height:24px}.user-status-online-select__input:checked+.user-status-online-select__label[data-v-a73330f8]{outline:2px solid var(--color-main-text);box-shadow:0 0 0 4px var(--color-main-background)}.user-status-online-select__input:focus-visible+.user-status-online-select__label[data-v-a73330f8]{outline:2px solid var(--color-primary-element) !important}.user-status-online-select__subline[data-v-a73330f8]{display:block;color:var(--color-text-lighter)}","",{version:3,sources:["webpack://./apps/user_status/src/components/OnlineStatusSelect.vue"],names:[],mappings:"AAMC,mDACC,iBAAA,CACA,aAAA,CACA,UANc,CAOd,WAPc,CAQd,iBAAA,CACA,6CAAA,CACA,wCAAA,CACA,8CAAA,CACA,8BAAA,CACA,oBAdU,CAgBV,2GAEC,cAAA,CAGD,wDACC,iBAAA,CACA,oBAAA,CACA,SAAA,CACA,aAAA,CACA,UA1BS,CA2BT,WA3BS,CA+BX,6FACC,wCAAA,CACA,iDAAA,CAGD,mGACC,yDAAA,CAGD,qDACC,aAAA,CACA,+BAAA",sourcesContent:["\n@use 'sass:math';\n$icon-size: 24px;\n$label-padding: 8px;\n\n.user-status-online-select {\n\t&__label {\n\t\tposition: relative;\n\t\tdisplay: block;\n\t\tmargin: $label-padding;\n\t\tpadding: $label-padding;\n\t\tpadding-left: $icon-size + $label-padding * 2;\n\t\tborder: 2px solid var(--color-main-background);\n\t\tborder-radius: var(--border-radius-large);\n\t\tbackground-color: var(--color-background-hover);\n\t\tbackground-position: $label-padding center;\n\t\tbackground-size: $icon-size;\n\n\t\tspan,\n\t\t& {\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\tspan {\n\t\t\tposition: absolute;\n\t\t\ttop: calc(50% - 10px);\n\t\t\tleft: 10px;\n\t\t\tdisplay: block;\n\t\t\twidth: $icon-size;\n\t\t\theight: $icon-size;\n\t\t}\n\t}\n\n\t&__input:checked + &__label {\n\t\toutline: 2px solid var(--color-main-text);\n\t\tbox-shadow: 0 0 0 4px var(--color-main-background);\n\t}\n\n\t&__input:focus-visible + &__label {\n\t\toutline: 2px solid var(--color-primary-element) !important;\n\t}\n\n\t&__subline {\n\t\tdisplay: block;\n\t\tcolor: var(--color-text-lighter);\n\t}\n}\n"],sourceRoot:""}]);const l=i},69236:(t,e,s)=>{s.d(e,{A:()=>l});var a=s(71354),n=s.n(a),r=s(76314),i=s.n(r)()(n());i.push([t.id,'.predefined-status__label[data-v-0c9447c8]{display:flex;flex-wrap:nowrap;justify-content:flex-start;flex-basis:100%;border-radius:var(--border-radius);align-items:center;min-height:44px}.predefined-status__label--icon[data-v-0c9447c8]{flex-basis:40px;text-align:center}.predefined-status__label--message[data-v-0c9447c8]{font-weight:bold;padding:0 6px}.predefined-status__label--clear-at[data-v-0c9447c8]{color:var(--color-text-maxcontrast)}.predefined-status__label--clear-at[data-v-0c9447c8]::before{content:" – "}.predefined-status__input:checked+.predefined-status__label[data-v-0c9447c8],.predefined-status__label[data-v-0c9447c8]:active{outline:2px solid var(--color-main-text);box-shadow:0 0 0 4px var(--color-main-background);border-radius:var(--border-radius-large)}.predefined-status__input:focus-visible+.predefined-status__label[data-v-0c9447c8]{outline:2px solid var(--color-primary-element) !important;border-radius:var(--border-radius-large)}',"",{version:3,sources:["webpack://./PredefinedStatus.vue","webpack://./apps/user_status/src/components/PredefinedStatus.vue"],names:[],mappings:"AAAA,2CCEC,YACC,CAAA,gBACA,CAAA,0BACA,CAAA,eACA,CAAA,kCACA,CAAA,kBACA,CAAA,eACA,CAAA,iDAEA,eACC,CAAA,iBACA,CAAA,oDAGD,gBACC,CAAA,aACA,CAAA,qDAGD,mCACC,CAAA,6DAEA,aACC,CAAA,+HAKH,wCAEC,CAAA,iDACA,CAAA,wCACA,CAAA,mFAGD,yDACC,CAAA,wCACA",sourcesContent:['.predefined-status__label{display:flex;flex-wrap:nowrap;justify-content:flex-start;flex-basis:100%;border-radius:var(--border-radius);align-items:center;min-height:44px}.predefined-status__label--icon{flex-basis:40px;text-align:center}.predefined-status__label--message{font-weight:bold;padding:0 6px}.predefined-status__label--clear-at{color:var(--color-text-maxcontrast)}.predefined-status__label--clear-at::before{content:" – "}.predefined-status__input:checked+.predefined-status__label,.predefined-status__label:active{outline:2px solid var(--color-main-text);box-shadow:0 0 0 4px var(--color-main-background);border-radius:var(--border-radius-large)}.predefined-status__input:focus-visible+.predefined-status__label{outline:2px solid var(--color-primary-element) !important;border-radius:var(--border-radius-large)}',"\n.predefined-status {\n\t&__label {\n\t\tdisplay: flex;\n\t\tflex-wrap: nowrap;\n\t\tjustify-content: flex-start;\n\t\tflex-basis: 100%;\n\t\tborder-radius: var(--border-radius);\n\t\talign-items: center;\n\t\tmin-height: 44px;\n\n\t\t&--icon {\n\t\t\tflex-basis: 40px;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t&--message {\n\t\t\tfont-weight: bold;\n\t\t\tpadding: 0 6px;\n\t\t}\n\n\t\t&--clear-at {\n\t\t\tcolor: var(--color-text-maxcontrast);\n\n\t\t\t&::before {\n\t\t\t\tcontent: ' – ';\n\t\t\t}\n\t\t}\n\t}\n\n\t&__input:checked + &__label,\n\t&__label:active {\n\t\toutline: 2px solid var(--color-main-text);\n\t\tbox-shadow: 0 0 0 4px var(--color-main-background);\n\t\tborder-radius: var(--border-radius-large);\n\t}\n\n\t&__input:focus-visible + &__label {\n\t\toutline: 2px solid var(--color-primary-element) !important;\n\t\tborder-radius: var(--border-radius-large);\n\t}\n}\n"],sourceRoot:""}]);const l=i},48067:(t,e,s)=>{s.d(e,{A:()=>l});var a=s(71354),n=s.n(a),r=s(76314),i=s.n(r)()(n());i.push([t.id,".predefined-statuses-list[data-v-d615b492]{display:flex;flex-direction:column;margin-bottom:10px}","",{version:3,sources:["webpack://./apps/user_status/src/components/PredefinedStatusesList.vue"],names:[],mappings:"AACA,2CACC,YAAA,CACA,qBAAA,CACA,kBAAA",sourcesContent:["\n.predefined-statuses-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-bottom: 10px;\n}\n"],sourceRoot:""}]);const l=i},5916:(t,e,s)=>{s.d(e,{A:()=>l});var a=s(71354),n=s.n(a),r=s(76314),i=s.n(r)()(n());i.push([t.id,'.predefined-status[data-v-bb58290e]{display:flex;flex-wrap:nowrap;justify-content:flex-start;flex-basis:100%;border-radius:var(--border-radius);align-items:center;min-height:44px}.predefined-status[data-v-bb58290e]:hover,.predefined-status[data-v-bb58290e]:focus{background-color:var(--color-background-hover)}.predefined-status[data-v-bb58290e]:active{background-color:var(--color-background-dark)}.predefined-status__icon[data-v-bb58290e]{flex-basis:40px;text-align:center}.predefined-status__message[data-v-bb58290e]{font-weight:bold;padding:0 6px}.predefined-status__clear-at[data-v-bb58290e]{color:var(--color-text-maxcontrast)}.predefined-status__clear-at[data-v-bb58290e]::before{content:" – "}.backup-status__reset-button[data-v-bb58290e]{justify-content:flex-end;display:flex;flex-grow:1}',"",{version:3,sources:["webpack://./PreviousStatus.vue","webpack://./apps/user_status/src/components/PreviousStatus.vue"],names:[],mappings:"AAAA,oCCCA,YACC,CAAA,gBACA,CAAA,0BACA,CAAA,eACA,CAAA,kCACA,CAAA,kBACA,CAAA,eACA,CAAA,oFAEA,8CAEC,CAAA,2CAGD,6CACC,CAAA,0CAGD,eACC,CAAA,iBACA,CAAA,6CAGD,gBACC,CAAA,aACA,CAAA,8CAGD,mCACC,CAAA,sDAEA,aACC,CAAA,8CAKF,wBACC,CAAA,YACA,CAAA,WACA",sourcesContent:['.predefined-status{display:flex;flex-wrap:nowrap;justify-content:flex-start;flex-basis:100%;border-radius:var(--border-radius);align-items:center;min-height:44px}.predefined-status:hover,.predefined-status:focus{background-color:var(--color-background-hover)}.predefined-status:active{background-color:var(--color-background-dark)}.predefined-status__icon{flex-basis:40px;text-align:center}.predefined-status__message{font-weight:bold;padding:0 6px}.predefined-status__clear-at{color:var(--color-text-maxcontrast)}.predefined-status__clear-at::before{content:" – "}.backup-status__reset-button{justify-content:flex-end;display:flex;flex-grow:1}',"\n.predefined-status {\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n\tjustify-content: flex-start;\n\tflex-basis: 100%;\n\tborder-radius: var(--border-radius);\n\talign-items: center;\n\tmin-height: 44px;\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: var(--color-background-hover);\n\t}\n\n\t&:active{\n\t\tbackground-color: var(--color-background-dark);\n\t}\n\n\t&__icon {\n\t\tflex-basis: 40px;\n\t\ttext-align: center;\n\t}\n\n\t&__message {\n\t\tfont-weight: bold;\n\t\tpadding: 0 6px;\n\t}\n\n\t&__clear-at {\n\t\tcolor: var(--color-text-maxcontrast);\n\n\t\t&::before {\n\t\t\tcontent: ' – ';\n\t\t}\n\t}\n}\n.backup-status {\n\t&__reset-button {\n\t\tjustify-content: flex-end;\n\t\tdisplay: flex;\n\t\tflex-grow: 1;\n\t}\n}\n"],sourceRoot:""}]);const l=i},55604:(t,e,s)=>{s.d(e,{A:()=>l});var a=s(71354),n=s.n(a),r=s(76314),i=s.n(r)()(n());i.push([t.id,".set-status-modal[data-v-c7245fce]{padding:8px 20px 20px 20px}.set-status-modal__header[data-v-c7245fce]{text-align:center;font-weight:bold;margin:15px 0}.set-status-modal__online-status[data-v-c7245fce]{display:grid;grid-template-columns:1fr 1fr}.set-status-modal__custom-input[data-v-c7245fce]{display:flex;width:100%;margin-bottom:10px}.set-status-modal__automation-hint[data-v-c7245fce]{display:flex;width:100%;margin-bottom:10px;color:var(--color-text-maxcontrast)}.set-status-modal .status-buttons[data-v-c7245fce]{display:flex;padding:3px;padding-left:0;gap:3px}@media only screen and (max-width: 500px){.set-status-modal__online-status[data-v-c7245fce]{grid-template-columns:none !important}}","",{version:3,sources:["webpack://./apps/user_status/src/components/SetStatusModal.vue"],names:[],mappings:"AAEA,mCACC,0BAAA,CAEA,2CACC,iBAAA,CACA,gBAAA,CACA,aAAA,CAGD,kDACC,YAAA,CACA,6BAAA,CAGD,iDACC,YAAA,CACA,UAAA,CACA,kBAAA,CAGD,oDACC,YAAA,CACA,UAAA,CACA,kBAAA,CACA,mCAAA,CAGD,mDACC,YAAA,CACA,WAAA,CACA,cAAA,CACA,OAAA,CAIF,0CACC,kDACC,qCAAA,CAAA",sourcesContent:["\n\n.set-status-modal {\n\tpadding: 8px 20px 20px 20px;\n\n\t&__header {\n\t\ttext-align: center;\n\t\tfont-weight: bold;\n\t\tmargin: 15px 0;\n\t}\n\n\t&__online-status {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n\n\t&__custom-input {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tmargin-bottom: 10px;\n\t}\n\n\t&__automation-hint {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tmargin-bottom: 10px;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t.status-buttons {\n\t\tdisplay: flex;\n\t\tpadding: 3px;\n\t\tpadding-left:0;\n\t\tgap: 3px;\n\t}\n}\n\n@media only screen and (max-width: 500px) {\n\t.set-status-modal__online-status {\n\t\tgrid-template-columns: none !important;\n\t}\n}\n\n"],sourceRoot:""}]);const l=i},70233:(t,e,s)=>{s.r(e),s.d(e,{default:()=>tt});var a=s(85168),n=s(34499),r=s(54332),i=s(53334),l=s(33114),o=s(51651),u=s(61913);const c=t=>{if(null===t)return(0,i.Tl)("user_status","Don't clear");if("end-of"===t.type)switch(t.time){case"day":return(0,i.Tl)("user_status","Today");case"week":return(0,i.Tl)("user_status","This week");default:return null}if("period"===t.type)return o.A.duration(1e3*t.time).humanize();if("_time"===t.type){const e=(0,o.A)((0,u.R)()),s=(0,o.A)(t.time,"X");return o.A.duration(e.diff(s)).humanize()}return null},d={name:"PredefinedStatus",filters:{clearAtFilter:c},props:{messageId:{type:String,required:!0},icon:{type:String,required:!0},message:{type:String,required:!0},clearAt:{type:Object,required:!1,default:null},selected:{type:Boolean,required:!1,default:!1}},computed:{id(){return"user-status-predefined-status-".concat(this.messageId)}},methods:{select(){this.$emit("select")}}};var A=s(85072),p=s.n(A),m=s(97825),C=s.n(m),_=s(77659),b=s.n(_),f=s(55056),g=s.n(f),v=s(10540),h=s.n(v),x=s(41113),y=s.n(x),S=s(69236),k={};k.styleTagTransform=y(),k.setAttributes=g(),k.insert=b().bind(null,"head"),k.domAPI=C(),k.insertStyleElement=h(),p()(S.A,k),S.A&&S.A.locals&&S.A.locals;var w=s(14486);const B=(0,w.A)(d,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"predefined-status"},[e("input",{staticClass:"hidden-visually predefined-status__input",attrs:{id:t.id,type:"radio",name:"predefined-status"},domProps:{checked:t.selected},on:{change:t.select}}),t._v(" "),e("label",{staticClass:"predefined-status__label",attrs:{for:t.id}},[e("span",{staticClass:"predefined-status__label--icon",attrs:{"aria-hidden":"true"}},[t._v("\n\t\t\t"+t._s(t.icon)+"\n\t\t")]),t._v(" "),e("span",{staticClass:"predefined-status__label--message"},[t._v("\n\t\t\t"+t._s(t.message)+"\n\t\t")]),t._v(" "),e("span",{staticClass:"predefined-status__label--clear-at"},[t._v("\n\t\t\t"+t._s(t._f("clearAtFilter")(t.clearAt))+"\n\t\t")])])])}),[],!1,null,"0c9447c8",null).exports;var $=s(95353);const I={name:"PredefinedStatusesList",components:{PredefinedStatus:B},data:()=>({lastSelected:null}),computed:{...(0,$.aH)({predefinedStatuses:t=>t.predefinedStatuses.predefinedStatuses,messageId:t=>t.userStatus.messageId}),...(0,$.L8)(["statusesHaveLoaded"])},watch:{messageId:{immediate:!0,handler(){this.lastSelected=this.messageId}}},created(){this.$store.dispatch("loadAllPredefinedStatuses")},methods:{selectStatus(t){this.lastSelected=t.id,this.$emit("select-status",t)}}};var T=s(48067),D={};D.styleTagTransform=y(),D.setAttributes=g(),D.insert=b().bind(null,"head"),D.domAPI=C(),D.insertStyleElement=h(),p()(T.A,D),T.A&&T.A.locals&&T.A.locals;const M=(0,w.A)(I,(function(){var t=this,e=t._self._c;return t.statusesHaveLoaded?e("ul",{staticClass:"predefined-statuses-list",attrs:{"aria-label":t.t("user_status","Predefined statuses")}},t._l(t.predefinedStatuses,(function(s){return e("PredefinedStatus",{key:s.id,attrs:{"message-id":s.id,icon:s.icon,message:s.message,"clear-at":s.clearAt,selected:t.lastSelected===s.id},on:{select:function(e){return t.selectStatus(s)}}})})),1):e("div",{staticClass:"predefined-statuses-list"},[e("div",{staticClass:"icon icon-loading-small"})])}),[],!1,null,"d615b492",null).exports,P={name:"PreviousStatus",components:{NcButton:r.A},props:{icon:{type:[String,null],required:!0},message:{type:String,required:!0}},methods:{select(){this.$emit("select")}}};var E=s(5916),N={};N.styleTagTransform=y(),N.setAttributes=g(),N.insert=b().bind(null,"head"),N.domAPI=C(),N.insertStyleElement=h(),p()(E.A,N),E.A&&E.A.locals&&E.A.locals;const G=(0,w.A)(P,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"predefined-status backup-status",attrs:{tabindex:"0"},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.select.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:t.select.apply(null,arguments)}],click:t.select}},[e("span",{staticClass:"predefined-status__icon"},[t._v("\n\t\t"+t._s(t.icon)+"\n\t")]),t._v(" "),e("span",{staticClass:"predefined-status__message"},[t._v("\n\t\t"+t._s(t.message)+"\n\t")]),t._v(" "),e("span",{staticClass:"predefined-status__clear-at"},[t._v("\n\t\t"+t._s(t.$t("user_status","Previously set"))+"\n\t")]),t._v(" "),e("div",{staticClass:"backup-status__reset-button"},[e("NcButton",{on:{click:t.select}},[t._v("\n\t\t\t"+t._s(t.$t("user_status","Reset status"))+"\n\t\t")])],1)])}),[],!1,null,"bb58290e",null).exports;var q=s(39930);const F={name:"CustomMessageInput",components:{NcTextField:s(82182).A,NcButton:r.A,NcEmojiPicker:q.N},props:{icon:{type:String,default:"😀"},message:{type:String,required:!0,default:()=>""},disabled:{type:Boolean,default:!1}},emits:["change","select-icon"],computed:{visibleIcon(){return this.icon||"😀"}},methods:{focus(){this.$refs.input.focus()},onChange(t){this.$emit("change",t.target.value)},setIcon(t){this.$emit("select-icon",t)}}};var R=s(29478),j={};j.styleTagTransform=y(),j.setAttributes=g(),j.insert=b().bind(null,"head"),j.domAPI=C(),j.insertStyleElement=h(),p()(R.A,j),R.A&&R.A.locals&&R.A.locals;const O=(0,w.A)(F,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-input",attrs:{role:"group"}},[e("NcEmojiPicker",{attrs:{container:".custom-input"},on:{select:t.setIcon}},[e("NcButton",{attrs:{type:"tertiary","aria-label":t.t("user_status","Emoji for your status message")},scopedSlots:t._u([{key:"icon",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.visibleIcon)+"\n\t\t\t")]},proxy:!0}])})],1),t._v(" "),e("div",{staticClass:"custom-input__container"},[e("NcTextField",{ref:"input",attrs:{maxlength:"80",disabled:t.disabled,placeholder:t.t("user_status","What is your status?"),value:t.message,type:"text",label:t.t("user_status","What is your status?")},on:{input:t.onChange}})],1)],1)}),[],!1,null,"3f943eb8",null).exports;const Y={name:"ClearAtSelect",components:{NcSelect:s(67607).A},props:{clearAt:{type:Object,default:null}},data:()=>({options:[{label:(0,i.Tl)("user_status","Don't clear"),clearAt:null},{label:(0,i.Tl)("user_status","30 minutes"),clearAt:{type:"period",time:1800}},{label:(0,i.Tl)("user_status","1 hour"),clearAt:{type:"period",time:3600}},{label:(0,i.Tl)("user_status","4 hours"),clearAt:{type:"period",time:14400}},{label:(0,i.Tl)("user_status","Today"),clearAt:{type:"end-of",time:"day"}},{label:(0,i.Tl)("user_status","This week"),clearAt:{type:"end-of",time:"week"}}]}),computed:{option(){return{clearAt:this.clearAt,label:c(this.clearAt)}}},methods:{select(t){t&&this.$emit("select-clear-at",t.clearAt)}}};var z=s(29957),U={};U.styleTagTransform=y(),U.setAttributes=g(),U.insert=b().bind(null,"head"),U.domAPI=C(),U.insertStyleElement=h(),p()(z.A,U),z.A&&z.A.locals&&z.A.locals;const L=(0,w.A)(Y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"clear-at-select"},[e("label",{staticClass:"clear-at-select__label",attrs:{for:"clearStatus"}},[t._v("\n\t\t"+t._s(t.$t("user_status","Clear status after"))+"\n\t")]),t._v(" "),e("NcSelect",{staticClass:"clear-at-select__select",attrs:{"input-id":"clearStatus",options:t.options,value:t.option,clearable:!1,placement:"top"},on:{"option:selected":t.select}})],1)}),[],!1,null,"72be27d6",null).exports,W={name:"OnlineStatusSelect",components:{NcUserStatusIcon:s(53611).A},props:{checked:{type:Boolean,default:!1},type:{type:String,required:!0},label:{type:String,required:!0},subline:{type:String,default:null}},computed:{id(){return"user-status-online-status-".concat(this.type)}},methods:{onChange(){this.$emit("select",this.type)}}};var H=s(74430),Q={};Q.styleTagTransform=y(),Q.setAttributes=g(),Q.insert=b().bind(null,"head"),Q.domAPI=C(),Q.insertStyleElement=h(),p()(H.A,Q),H.A&&H.A.locals&&H.A.locals;const K=(0,w.A)(W,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-status-online-select"},[e("input",{staticClass:"hidden-visually user-status-online-select__input",attrs:{id:t.id,type:"radio",name:"user-status-online"},domProps:{checked:t.checked},on:{change:t.onChange}}),t._v(" "),e("label",{staticClass:"user-status-online-select__label",attrs:{for:t.id}},[t._v("\n\t\t"+t._s(t.label)+"\n\t\t"),e("NcUserStatusIcon",{attrs:{status:t.type,"aria-hidden":"true"}}),t._v(" "),e("em",{staticClass:"user-status-online-select__subline"},[t._v(t._s(t.subline))])],1)])}),[],!1,null,"a73330f8",null).exports;var X=s(96763);const V={name:"SetStatusModal",components:{ClearAtSelect:L,CustomMessageInput:O,NcModal:n.A,OnlineStatusSelect:K,PredefinedStatusesList:M,PreviousStatus:G,NcButton:r.A},mixins:[l.A],props:{inline:{type:Boolean,default:!1}},data:()=>({clearAt:null,editedMessage:"",isSavingStatus:!1,statuses:[{type:"online",label:(0,i.Tl)("user_status","Online")},{type:"away",label:(0,i.Tl)("user_status","Away")},{type:"dnd",label:(0,i.Tl)("user_status","Do not disturb"),subline:(0,i.Tl)("user_status","Mute all notifications")},{type:"invisible",label:(0,i.Tl)("user_status","Invisible"),subline:(0,i.Tl)("user_status","Appear offline")}]}),computed:{messageId(){return this.$store.state.userStatus.messageId},icon(){return this.$store.state.userStatus.icon},message(){return this.$store.state.userStatus.message||""},hasBackupStatus(){return this.messageId&&(this.backupIcon||this.backupMessage)},backupIcon(){return this.$store.state.userBackupStatus.icon||""},backupMessage(){return this.$store.state.userBackupStatus.message||""},resetButtonText(){return this.backupIcon&&this.backupMessage?this.$t("user_status",'Reset status to "{icon} {message}"',{icon:this.backupIcon,message:this.backupMessage}):this.backupMessage?this.$t("user_status",'Reset status to "{message}"',{message:this.backupMessage}):this.backupIcon?this.$t("user_status",'Reset status to "{icon}"',{icon:this.backupIcon}):this.$t("user_status","Reset status")},setReturnFocus(){var t;if(!this.inline)return null!==(t=document.querySelector('[aria-controls="header-menu-user-menu"]'))&&void 0!==t?t:void 0}},watch:{message:{immediate:!0,handler(t){this.editedMessage=t}}},mounted(){this.$store.dispatch("fetchBackupFromServer"),null!==this.$store.state.userStatus.clearAt&&(this.clearAt={type:"_time",time:this.$store.state.userStatus.clearAt})},methods:{closeModal(){this.$emit("close")},setIcon(t){this.$store.dispatch("setCustomMessage",{message:this.message,icon:t,clearAt:this.clearAt}),this.$nextTick((()=>{this.$refs.customMessageInput.focus()}))},setMessage(t){this.editedMessage=t},setClearAt(t){this.clearAt=t},selectPredefinedMessage(t){this.clearAt=t.clearAt,this.$store.dispatch("setPredefinedMessage",{messageId:t.id,clearAt:t.clearAt})},async saveStatus(){if(!this.isSavingStatus){try{this.isSavingStatus=!0,await this.$store.dispatch("setCustomMessage",{message:this.editedMessage,icon:this.icon,clearAt:this.clearAt})}catch(t){return(0,a.Qg)(this.$t("user_status","There was an error saving the status")),X.debug(t),void(this.isSavingStatus=!1)}this.isSavingStatus=!1,this.closeModal()}},async clearStatus(){try{this.isSavingStatus=!0,await this.$store.dispatch("clearMessage")}catch(t){return(0,a.Qg)(this.$t("user_status","There was an error clearing the status")),X.debug(t),void(this.isSavingStatus=!1)}this.isSavingStatus=!1,this.closeModal()},async revertBackupFromServer(){try{this.isSavingStatus=!0,await this.$store.dispatch("revertBackupFromServer",{messageId:this.messageId})}catch(t){return(0,a.Qg)(this.$t("user_status","There was an error reverting the status")),X.debug(t),void(this.isSavingStatus=!1)}this.isSavingStatus=!1}}};var J=s(55604),Z={};Z.styleTagTransform=y(),Z.setAttributes=g(),Z.insert=b().bind(null,"head"),Z.domAPI=C(),Z.insertStyleElement=h(),p()(J.A,Z),J.A&&J.A.locals&&J.A.locals;const tt=(0,w.A)(V,(function(){var t=this,e=t._self._c;return e("NcModal",{attrs:{size:"normal",name:t.$t("user_status","Set status"),"set-return-focus":t.setReturnFocus},on:{close:t.closeModal}},[e("div",{staticClass:"set-status-modal"},[e("div",{staticClass:"set-status-modal__header"},[e("h2",[t._v(t._s(t.$t("user_status","Online status")))])]),t._v(" "),e("div",{staticClass:"set-status-modal__online-status",attrs:{role:"radiogroup","aria-label":t.$t("user_status","Online status")}},t._l(t.statuses,(function(s){return e("OnlineStatusSelect",t._b({key:s.type,attrs:{checked:s.type===t.statusType},on:{select:t.changeStatus}},"OnlineStatusSelect",s,!1))})),1),t._v(" "),e("form",{on:{submit:function(e){return e.preventDefault(),t.saveStatus.apply(null,arguments)},reset:t.clearStatus}},[e("div",{staticClass:"set-status-modal__header"},[e("h2",[t._v(t._s(t.$t("user_status","Status message")))])]),t._v(" "),e("div",{staticClass:"set-status-modal__custom-input"},[e("CustomMessageInput",{ref:"customMessageInput",attrs:{icon:t.icon,message:t.editedMessage},on:{change:t.setMessage,"select-icon":t.setIcon}})],1),t._v(" "),t.hasBackupStatus?e("div",{staticClass:"set-status-modal__automation-hint"},[t._v("\n\t\t\t\t"+t._s(t.$t("user_status","Your status was set automatically"))+"\n\t\t\t")]):t._e(),t._v(" "),t.hasBackupStatus?e("PreviousStatus",{attrs:{icon:t.backupIcon,message:t.backupMessage},on:{select:t.revertBackupFromServer}}):t._e(),t._v(" "),e("PredefinedStatusesList",{on:{"select-status":t.selectPredefinedMessage}}),t._v(" "),e("ClearAtSelect",{attrs:{"clear-at":t.clearAt},on:{"select-clear-at":t.setClearAt}}),t._v(" "),e("div",{staticClass:"status-buttons"},[e("NcButton",{attrs:{wide:!0,type:"tertiary","native-type":"reset","aria-label":t.$t("user_status","Clear status message"),disabled:t.isSavingStatus}},[t._v("\n\t\t\t\t\t"+t._s(t.$t("user_status","Clear status message"))+"\n\t\t\t\t")]),t._v(" "),e("NcButton",{attrs:{wide:!0,type:"primary","native-type":"submit","aria-label":t.$t("user_status","Set status message"),disabled:t.isSavingStatus}},[t._v("\n\t\t\t\t\t"+t._s(t.$t("user_status","Set status message"))+"\n\t\t\t\t")])],1)],1)])])}),[],!1,null,"c7245fce",null).exports}}]);
//# sourceMappingURL=user-status-modal-5133.js.map?v=d2e292b7b29a6efa8265