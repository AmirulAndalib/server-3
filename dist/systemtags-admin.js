/*! For license information please see systemtags-admin.js.LICENSE.txt */
(()=>{"use strict";var t,e,s,a={27498:(t,e,s)=>{var a=s(20144),r=s(77958),i=s(87604),n=s(90580),o=s(31352),l=s(64024),d=s(54572),c=s(77723),g=s(35380),u=s(49368),m=s(36906);const p={userVisible:!0,userAssignable:!0,canAssign:!0};s(93664);var h=s(79753),y=s(14596);const b=(0,h.generateRemoteUrl)("dav"),v=(0,y.eI)(b,{headers:{requesttoken:(0,r.IH)()??""}}),f=(0,s(17499).IY)().setApp("systemtags").detectUser().build();var A;!function(t){t.Public="Public",t.Restricted="Restricted",t.Invisible="Invisible"}(A||(A={}));const _=[{id:A.Public,label:(0,o.Iu)("systemtags","Public")},{id:A.Restricted,label:(0,o.Iu)("systemtags","Restricted")},{id:A.Invisible,label:(0,o.Iu)("systemtags","Invisible")}],C=(t,e)=>({[[!0,!0].join(",")]:A.Public,[[!0,!1].join(",")]:A.Restricted,[[!1,!1].join(",")]:A.Invisible}[[t,e].join(",")]),x=a.default.extend({name:"SystemTagForm",components:{NcButton:d.Z,NcLoadingIcon:i.Z,NcSelect:c.Z,NcSelectTags:g.Z,NcTextField:u.Z},props:{tags:{type:Array,required:!0}},data:()=>({loading:!1,tagLevelOptions:_,selectedTag:null,errorMessage:"",tagName:"",tagLevel:A.Public}),watch:{selectedTag(t){this.tagName=t?t.displayName:"",this.tagLevel=t?C(t.userVisible,t.userAssignable):A.Public}},computed:{isCreating(){return null===this.selectedTag},isCreateDisabled(){return""===this.tagName},isUpdateDisabled(){return""===this.tagName||this.selectedTag?.displayName===this.tagName&&C(this.selectedTag?.userVisible,this.selectedTag?.userAssignable)===this.tagLevel},isResetDisabled(){return this.isCreating?""===this.tagName&&this.tagLevel===A.Public:null===this.selectedTag},userVisible(){return{[A.Public]:!0,[A.Restricted]:!0,[A.Invisible]:!1}[this.tagLevel]},userAssignable(){return{[A.Public]:!0,[A.Restricted]:!1,[A.Invisible]:!1}[this.tagLevel]},tagProperties(){return{displayName:this.tagName,userVisible:this.userVisible,userAssignable:this.userAssignable}}},methods:{t:o.Iu,async handleSubmit(){this.isCreating?await this.create():await this.update()},async create(){const t={...p,...this.tagProperties};this.loading=!0;try{const e=await(async t=>{const e=(t=>{const e={...t};return e.name&&!e.displayName||(e.name=e.displayName,delete e.displayName),e})(t);try{const{headers:t}=await v.customRequest("/systemtags",{method:"POST",data:e}),s=t.get("content-location");if(s)return(t=>{const e=t.indexOf("?");e>0&&(t=t.substring(0,e));const s=t.split("/");let a;do{a=s[s.length-1],s.pop()}while(!a&&s.length>0);return Number(a)})(s);throw f.error((0,o.Iu)("systemtags",'Missing "Content-Location" header')),new Error((0,o.Iu)("systemtags",'Missing "Content-Location" header'))}catch(t){throw f.error((0,o.Iu)("systemtags","Failed to create tag"),{error:t}),new Error((0,o.Iu)("systemtags","Failed to create tag"))}})(t),s={...t,id:e};this.$emit("tag:created",s),(0,l.s$)((0,o.Iu)("systemtags","Created tag")),this.reset()}catch(t){this.errorMessage=(0,o.Iu)("systemtags","Failed to create tag")}this.loading=!1},async update(){if(null===this.selectedTag)return;const t={...this.selectedTag,...this.tagProperties};this.loading=!0;try{await(async t=>{const e="/systemtags/"+t.id,s=`<?xml version="1.0"?>\n\t<d:propertyupdate  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t\t<d:set>\n\t\t\t<d:prop>\n\t\t\t\t<oc:display-name>${t.displayName}</oc:display-name>\n\t\t\t\t<oc:user-visible>${t.userVisible}</oc:user-visible>\n\t\t\t\t<oc:user-assignable>${t.userAssignable}</oc:user-assignable>\n\t\t\t</d:prop>\n\t\t</d:set>\n\t</d:propertyupdate>`;try{await v.customRequest(e,{method:"PROPPATCH",data:s})}catch(t){throw f.error((0,o.Iu)("systemtags","Failed to update tag"),{error:t}),new Error((0,o.Iu)("systemtags","Failed to update tag"))}})(t),this.selectedTag=t,this.$emit("tag:updated",t),(0,l.s$)((0,o.Iu)("systemtags","Updated tag")),this.$refs.tagNameInput?.focus()}catch(t){this.errorMessage=(0,o.Iu)("systemtags","Failed to update tag")}this.loading=!1},async handleDelete(){if(null!==this.selectedTag){this.loading=!0;try{await(async t=>{const e="/systemtags/"+this.selectedTag.id;try{await v.deleteFile(e)}catch(t){throw f.error((0,o.Iu)("systemtags","Failed to delete tag"),{error:t}),new Error((0,o.Iu)("systemtags","Failed to delete tag"))}})(),this.$emit("tag:deleted",this.selectedTag),(0,l.s$)((0,o.Iu)("systemtags","Deleted tag")),this.reset()}catch(t){this.errorMessage=(0,o.Iu)("systemtags","Failed to delete tag")}this.loading=!1}},reset(){this.selectedTag=null,this.errorMessage="",this.tagName="",this.tagLevel=A.Public,this.$refs.tagNameInput?.focus()}}});var w=s(93379),I=s.n(w),N=s(7795),T=s.n(N),S=s(90569),P=s.n(S),L=s(3565),O=s.n(L),F=s(19216),k=s.n(F),j=s(44589),D=s.n(j),R=s(80162),E={};E.styleTagTransform=D(),E.setAttributes=O(),E.insert=P().bind(null,"head"),E.domAPI=T(),E.insertStyleElement=k(),I()(R.Z,E),R.Z&&R.Z.locals&&R.Z.locals;var Z=s(51900);const $=(0,Z.Z)(x,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("form",{staticClass:"system-tag-form",attrs:{disabled:t.loading,"aria-labelledby":"system-tag-form-heading"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)},reset:t.reset}},[e("h3",{attrs:{id:"system-tag-form-heading"}},[t._v("\n\t\t"+t._s(t.t("systemtags","Create or edit tags"))+"\n\t")]),t._v(" "),e("div",{staticClass:"system-tag-form__group"},[e("label",{attrs:{for:"system-tags-input"}},[t._v(t._s(t.t("systemtags","Search for a tag to edit")))]),t._v(" "),e("NcSelectTags",{attrs:{"input-id":"system-tags-input",placeholder:t.t("systemtags","Collaborative tags …"),"fetch-tags":!1,options:t.tags,multiple:!1,passthru:""},scopedSlots:t._u([{key:"no-options",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","No tags to select"))+"\n\t\t\t")]},proxy:!0}]),model:{value:t.selectedTag,callback:function(e){t.selectedTag=e},expression:"selectedTag"}})],1),t._v(" "),e("div",{staticClass:"system-tag-form__group"},[e("label",{attrs:{for:"system-tag-name"}},[t._v(t._s(t.t("systemtags","Tag name")))]),t._v(" "),e("NcTextField",{ref:"tagNameInput",attrs:{id:"system-tag-name",value:t.tagName,error:Boolean(t.errorMessage),"helper-text":t.errorMessage,"label-outside":""},on:{"update:value":function(e){t.tagName=e}}})],1),t._v(" "),e("div",{staticClass:"system-tag-form__group"},[e("label",{attrs:{for:"system-tag-level"}},[t._v(t._s(t.t("systemtags","Tag level")))]),t._v(" "),e("NcSelect",{attrs:{"input-id":"system-tag-level",options:t.tagLevelOptions,reduce:t=>t.id,clearable:!1,disabled:t.loading},model:{value:t.tagLevel,callback:function(e){t.tagLevel=e},expression:"tagLevel"}})],1),t._v(" "),e("div",{staticClass:"system-tag-form__row"},[t.isCreating?e("NcButton",{attrs:{"native-type":"submit",disabled:t.isCreateDisabled||t.loading}},[t._v("\n\t\t\t"+t._s(t.t("systemtags","Create"))+"\n\t\t")]):[e("NcButton",{attrs:{"native-type":"submit",disabled:t.isUpdateDisabled||t.loading}},[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","Update"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{attrs:{disabled:t.loading},on:{click:t.handleDelete}},[t._v("\n\t\t\t\t"+t._s(t.t("systemtags","Delete"))+"\n\t\t\t")])],t._v(" "),e("NcButton",{attrs:{"native-type":"reset",disabled:t.isResetDisabled||t.loading}},[t._v("\n\t\t\t"+t._s(t.t("systemtags","Reset"))+"\n\t\t")]),t._v(" "),t.loading?e("NcLoadingIcon",{attrs:{name:t.t("systemtags","Loading …"),size:32}}):t._e()],2)])}),[],!1,null,"76c7369e",null).exports,M=a.default.extend({name:"SystemTagsSection",components:{NcLoadingIcon:i.Z,NcSettingsSection:n.Z,SystemTagForm:$},data:()=>({loadingTags:!1,tags:[]}),async created(){this.loadingTags=!0;try{this.tags=await(async()=>{try{const{data:t}=await v.getDirectoryContents("/systemtags",{data:'<?xml version="1.0"?>\n<d:propfind  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">\n\t<d:prop>\n\t\t<oc:id />\n\t\t<oc:display-name />\n\t\t<oc:user-visible />\n\t\t<oc:user-assignable />\n\t\t<oc:can-assign />\n\t</d:prop>\n</d:propfind>',details:!0,glob:"/systemtags/*"});return(t=>t.map((t=>{let{props:e}=t;return Object.fromEntries(Object.entries(e).map((t=>{let[e,s]=t;return[(0,m.Z)(e),"displayName"===(0,m.Z)(e)?String(s):s]})))})))(t)}catch(t){throw f.error((0,o.Iu)("systemtags","Failed to load tags"),{error:t}),new Error((0,o.Iu)("systemtags","Failed to load tags"))}})()}catch(t){(0,l.x2)((0,o.Iu)("systemtags","Failed to load tags"))}this.loadingTags=!1},methods:{t:o.Iu,handleCreate(t){this.tags.unshift(t)},handleUpdate(t){const e=this.tags.findIndex((e=>e.id===t.id));this.tags.splice(e,1),this.tags.unshift(t)},handleDelete(t){const e=this.tags.findIndex((e=>e.id===t.id));this.tags.splice(e,1)}}}),B=(0,Z.Z)(M,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("NcSettingsSection",{attrs:{name:t.t("systemtags","Collaborative tags"),description:t.t("systemtags","Collaborative tags are available for all users. Restricted tags are visible to users but cannot be assigned by them. Invisible tags are for internal use, since users cannot see or assign them.")}},[t.loadingTags?e("NcLoadingIcon",{attrs:{name:t.t("systemtags","Loading collaborative tags …"),size:32}}):e("SystemTagForm",{attrs:{tags:t.tags},on:{"tag:created":t.handleCreate,"tag:updated":t.handleUpdate,"tag:deleted":t.handleDelete}})],1)}),[],!1,null,null,null).exports;s.nc=btoa((0,r.IH)()),(new(a.default.extend(B))).$mount("#vue-admin-systemtags")},80162:(t,e,s)=>{s.d(e,{Z:()=>o});var a=s(87537),r=s.n(a),i=s(23645),n=s.n(i)()(r());n.push([t.id,".system-tag-form[data-v-76c7369e]{display:flex;flex-direction:column;max-width:400px;gap:8px 0}.system-tag-form__group[data-v-76c7369e]{display:flex;flex-direction:column}.system-tag-form__row[data-v-76c7369e]{margin-top:8px;display:flex;gap:0 4px}","",{version:3,sources:["webpack://./apps/systemtags/src/components/SystemTagForm.vue"],names:[],mappings:"AACA,kCACC,YAAA,CACA,qBAAA,CACA,eAAA,CACA,SAAA,CAEA,yCACC,YAAA,CACA,qBAAA,CAGD,uCACC,cAAA,CACA,YAAA,CACA,SAAA",sourcesContent:["\n.system-tag-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 400px;\n\tgap: 8px 0;\n\n\t&__group {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t&__row {\n\t\tmargin-top: 8px;\n\t\tdisplay: flex;\n\t\tgap: 0 4px;\n\t}\n}\n"],sourceRoot:""}]);const o=n}},r={};function i(t){var e=r[t];if(void 0!==e)return e.exports;var s=r[t]={id:t,loaded:!1,exports:{}};return a[t].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.m=a,t=[],i.O=(e,s,a,r)=>{if(!s){var n=1/0;for(c=0;c<t.length;c++){s=t[c][0],a=t[c][1],r=t[c][2];for(var o=!0,l=0;l<s.length;l++)(!1&r||n>=r)&&Object.keys(i.O).every((t=>i.O[t](s[l])))?s.splice(l--,1):(o=!1,r<n&&(n=r));if(o){t.splice(c--,1);var d=a();void 0!==d&&(e=d)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[s,a,r]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.f={},i.e=t=>Promise.all(Object.keys(i.f).reduce(((e,s)=>(i.f[s](t,e),e)),[])),i.u=t=>t+"-"+t+".js?v="+{4720:"bf813bc45f5afa044293",6512:"a386aad6f01ecddf416d"}[t],i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},s="nextcloud:",i.l=(t,a,r,n)=>{if(e[t])e[t].push(a);else{var o,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var g=d[c];if(g.getAttribute("src")==t||g.getAttribute("data-webpack")==s+r){o=g;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack",s+r),o.src=t),e[t]=[a];var u=(s,a)=>{o.onerror=o.onload=null,clearTimeout(m);var r=e[t];if(delete e[t],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((t=>t(a))),s)return s(a)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),l&&document.head.appendChild(o)}},i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),i.j=5304,(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");if(s.length)for(var a=s.length-1;a>-1&&!t;)t=s[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{i.b=document.baseURI||self.location.href;var t={5304:0};i.f.j=(e,s)=>{var a=i.o(t,e)?t[e]:void 0;if(0!==a)if(a)s.push(a[2]);else{var r=new Promise(((s,r)=>a=t[e]=[s,r]));s.push(a[2]=r);var n=i.p+i.u(e),o=new Error;i.l(n,(s=>{if(i.o(t,e)&&(0!==(a=t[e])&&(t[e]=void 0),a)){var r=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",o.name="ChunkLoadError",o.type=r,o.request=n,a[1](o)}}),"chunk-"+e,e)}},i.O.j=e=>0===t[e];var e=(e,s)=>{var a,r,n=s[0],o=s[1],l=s[2],d=0;if(n.some((e=>0!==t[e]))){for(a in o)i.o(o,a)&&(i.m[a]=o[a]);if(l)var c=l(i)}for(e&&e(s);d<n.length;d++)r=n[d],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(c)},s=self.webpackChunknextcloud=self.webpackChunknextcloud||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})(),i.nc=void 0;var n=i.O(void 0,[7874],(()=>i(27498)));n=i.O(n)})();
//# sourceMappingURL=systemtags-admin.js.map?v=17b0138faec4788d1a4b