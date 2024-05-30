"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[6794],{593:(t,n,a)=>{a.d(n,{A:()=>l});var e=a(71354),o=a.n(e),i=a(76314),r=a.n(i)()(o());r.push([t.id,"[data-v-2e374087] .app-changelog-dialog{min-height:50vh !important}.app-changelog-dialog__text[data-v-2e374087]{padding-inline:14px}","",{version:3,sources:["webpack://./apps/updatenotification/src/components/AppChangelogDialog.vue"],names:[],mappings:"AACA,wCACC,0BAAA,CAGD,6CACC,mBAAA",sourcesContent:["\n:deep(.app-changelog-dialog) {\n\tmin-height: 50vh !important;\n}\n\n.app-changelog-dialog__text {\n\tpadding-inline: 14px;\n}\n"],sourceRoot:""}]);const l=r},62464:(t,n,a)=>{a.d(n,{A:()=>l});var e=a(71354),o=a.n(e),i=a(76314),r=a.n(i)()(o());r.push([t.id,".markdown[data-v-c31cd53a] ul{list-style:disc;padding-inline-start:20px}.markdown[data-v-c31cd53a] h3,.markdown[data-v-c31cd53a] h4,.markdown[data-v-c31cd53a] h5,.markdown[data-v-c31cd53a] h6{font-weight:600;line-height:1.5;margin-top:24px;margin-bottom:12px;color:var(--color-main-text)}.markdown[data-v-c31cd53a] h3{font-size:20px}.markdown[data-v-c31cd53a] h4{font-size:18px}.markdown[data-v-c31cd53a] h5{font-size:17px}.markdown[data-v-c31cd53a] h6{font-size:var(--default-font-size)}","",{version:3,sources:["webpack://./apps/updatenotification/src/components/Markdown.vue"],names:[],mappings:"AAGE,8BACC,eAAA,CACA,yBAAA,CAGD,wHACC,eAAA,CACA,eAAA,CACA,eAAA,CACA,kBAAA,CACA,4BAAA,CAGD,8BACC,cAAA,CAGD,8BACC,cAAA,CAGD,8BACC,cAAA,CAGD,8BACC,kCAAA",sourcesContent:["\n.markdown {\n\t:deep {\n\t\tul {\n\t\t\tlist-style: disc;\n\t\t\tpadding-inline-start: 20px;\n\t\t}\n\n\t\th3, h4, h5, h6 {\n\t\t\tfont-weight: 600;\n\t\t\tline-height: 1.5;\n\t\t\tmargin-top: 24px;\n\t\t\tmargin-bottom: 12px;\n\t\t\tcolor: var(--color-main-text);\n\t\t}\n\n\t\th3 {\n\t\t\tfont-size: 20px;\n\t\t}\n\n\t\th4 {\n\t\t\tfont-size: 18px;\n\t\t}\n\n\t\th5 {\n\t\t\tfont-size: 17px;\n\t\t}\n\n\t\th6 {\n\t\t\tfont-size: var(--default-font-size);\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const l=r},6794:(t,n,a)=>{a.r(n),a.d(n,{default:()=>M});var e=a(85471),o=a(53334),i=a(63814),r=a(26287),l=a(94219),p=a(60023),s=a(42838),d=a.n(s);const c=(0,e.pM)({__name:"Markdown",props:{markdown:null,minHeadingLevel:{default:2}},setup(t){const n=t,{html:a}=((t,n)=>{const a=(0,e.EW)((()=>{var t;return Math.min(Math.max(null!==(t=n.value)&&void 0!==t?t:1,1),6)})),o=new p.xI.Renderer;return o.link=function(t,n,a){let e='<a href="'.concat(t,'" rel="noreferrer noopener" target="_blank"');return n&&(e+=' title="'+n+'"'),e+=">"+a+"</a>",e},o.image=function(t,n,a){return a||(null!=n?n:"")},o.heading=(t,n)=>{const e=Math.max(a.value,n);return"<h".concat(e,">").concat(t,"</h").concat(e,">")},{html:(0,e.EW)((()=>{var n;return d().sanitize((0,p.xI)((null!==(n=t.value)&&void 0!==n?n:"").trim(),{renderer:o,gfm:!1,breaks:!1,pedantic:!1}),{SAFE_FOR_JQUERY:!0,ALLOWED_TAGS:["h1","h2","h3","h4","h5","h6","strong","p","a","ul","ol","li","em","del","blockquote"]})}))}})((0,e.lW)(n,"markdown"),(0,e.lW)(n,"minHeadingLevel"));return{__sfc:!0,props:n,html:a}}});var A=a(85072),u=a.n(A),m=a(97825),h=a.n(m),v=a(77659),g=a.n(v),f=a(55056),C=a.n(f),k=a(10540),w=a.n(k),x=a(41113),_=a.n(x),b=a(62464),y={};y.styleTagTransform=_(),y.setAttributes=C(),y.insert=g().bind(null,"head"),y.domAPI=h(),y.insertStyleElement=w(),u()(b.A,y),b.A&&b.A.locals&&b.A.locals;var B=a(14486);const T=(0,B.A)(c,(function(){var t=this,n=t._self._c,a=t._self._setupProxy;return n("div",{staticClass:"markdown",domProps:{innerHTML:t._s(a.html)}})}),[],!1,null,"c31cd53a",null).exports;var z=a(96763);const D=(0,e.pM)({__name:"AppChangelogDialog",props:{appId:null,version:{default:void 0},open:{type:Boolean,default:!0}},emits:["dismiss","update:open"],setup(t,n){var a;let{emit:p}=n;const s=t,d=[{label:(0,o.Tl)("updatenotification","Give feedback"),callback:()=>{window.open("https://apps.nextcloud.com/apps/".concat(s.appId,"#comments"),"_blank","noreferrer noopener")}},{label:(0,o.Tl)("updatenotification","Get started"),type:"primary",callback:()=>{p("dismiss"),p("update:open",!1)}}],c=(0,e.KR)(s.appId),A=(0,e.KR)(null!==(a=s.version)&&void 0!==a?a:""),u=(0,e.KR)("");return(0,e.nT)((()=>{const t=s.version?(0,i.KT)("/apps/updatenotification/api/v1/changelog/{app}?version={version}",{version:s.version,app:s.appId}):(0,i.KT)("/apps/updatenotification/api/v1/changelog/{app}",{version:s.version,app:s.appId});r.A.get(t).then((t=>{let{data:n}=t;c.value=n.ocs.data.appName,A.value=n.ocs.data.version,u.value=n.ocs.data.content})).catch((t=>{var n;404===(null==t||null===(n=t.response)||void 0===n?void 0:n.status)?(c.value=s.appId,u.value=(0,o.Tl)("updatenotification","No changelog available")):(z.error("Failed to load changelog entry",t),p("update:open",!1))}))})),{__sfc:!0,props:s,emit:p,dialogButtons:d,appName:c,appVersion:A,markdown:u,t:o.Tl,NcDialog:l.A,Markdown:T}}});var G=a(593),I={};I.styleTagTransform=_(),I.setAttributes=C(),I.insert=g().bind(null,"head"),I.domAPI=h(),I.insertStyleElement=w(),u()(G.A,I),G.A&&G.A.locals&&G.A.locals;const M=(0,B.A)(D,(function(){var t=this,n=t._self._c,a=t._self._setupProxy;return n(a.NcDialog,{attrs:{"content-classes":"app-changelog-dialog",buttons:a.dialogButtons,name:a.t("updatenotification","What's new in {app} {version}",{app:a.appName,version:a.appVersion}),open:t.open&&void 0!==a.markdown,size:"normal"},on:{"update:open":function(n){return t.$emit("update:open",n)}}},[n(a.Markdown,{staticClass:"app-changelog-dialog__text",attrs:{markdown:a.markdown,"min-heading-level":3}})],1)}),[],!1,null,"2e374087",null).exports}}]);
//# sourceMappingURL=6794-6794.js.map?v=f46f8dbdfe42045b35c1