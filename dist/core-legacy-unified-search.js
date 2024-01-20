/*! For license information please see core-legacy-unified-search.js.LICENSE.txt */
(()=>{"use strict";var e,i,r,a={35057:(e,i,r)=>{var a=r(17499),s=r(77958),o=r(31352),c=r(20144),l=r(20296),d=r.n(l),u=r(69183),h=r(64024),A=r(72155),p=r(25220),f=r(22175),g=r(66654),C=r(49368),m=r(85989);const v={name:"LegacySearchResult",components:{NcHighlight:r(40873).N},props:{thumbnailUrl:{type:String,default:null},title:{type:String,required:!0},subline:{type:String,default:null},resourceUrl:{type:String,default:null},icon:{type:String,default:""},rounded:{type:Boolean,default:!1},query:{type:String,default:""},focused:{type:Boolean,default:!1}},data(){return{hasValidThumbnail:this.thumbnailUrl&&""!==this.thumbnailUrl.trim(),loaded:!1}},computed:{isIconUrl(){if(this.icon.startsWith("/"))return!0;try{new URL(this.icon)}catch{return!1}return!0}},watch:{thumbnailUrl(){this.hasValidThumbnail=this.thumbnailUrl&&""!==this.thumbnailUrl.trim(),this.loaded=!1}},methods:{reEmitEvent(t){this.$emit(t.type,t)},onError(){this.hasValidThumbnail=!1},onLoad(){this.loaded=!0}}};var _=r(93379),b=r.n(_),y=r(7795),x=r.n(y),w=r(90569),k=r.n(w),$=r(3565),S=r.n($),D=r(19216),B=r.n(D),E=r(44589),I=r.n(E),q=r(58247),U={};U.styleTagTransform=I(),U.setAttributes=S(),U.insert=k().bind(null,"head"),U.domAPI=x(),U.insertStyleElement=B(),b()(q.Z,U),q.Z&&q.Z.locals&&q.Z.locals;var L=r(51900);const N=(0,L.Z)(v,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"unified-search__result",class:{"unified-search__result--focused":t.focused},attrs:{href:t.resourceUrl||"#"},on:{click:t.reEmitEvent,focus:t.reEmitEvent}},[e("div",{staticClass:"unified-search__result-icon",class:{"unified-search__result-icon--rounded":t.rounded,"unified-search__result-icon--no-preview":!t.hasValidThumbnail&&!t.loaded,"unified-search__result-icon--with-thumbnail":t.hasValidThumbnail&&t.loaded,[t.icon]:!t.loaded&&!t.isIconUrl},style:{backgroundImage:t.isIconUrl?`url(${t.icon})`:""}},[t.hasValidThumbnail?e("img",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],attrs:{src:t.thumbnailUrl,alt:""},on:{error:t.onError,load:t.onLoad}}):t._e()]),t._v(" "),e("span",{staticClass:"unified-search__result-content"},[e("span",{staticClass:"unified-search__result-line-one",attrs:{title:t.title}},[e("NcHighlight",{attrs:{text:t.title,search:t.query}})],1),t._v(" "),t.subline?e("span",{staticClass:"unified-search__result-line-two",attrs:{title:t.subline}},[t._v(t._s(t.subline))]):t._e()])])}),[],!1,null,"2aaf542f",null).exports,R={name:"SearchResultPlaceholders",data:()=>({light:null,dark:null}),mounted(){const t=getComputedStyle(document.documentElement);this.dark=t.getPropertyValue("--color-placeholder-dark"),this.light=t.getPropertyValue("--color-placeholder-light")},methods:{randWidth:()=>Math.floor(20*Math.random())+30}};var F=r(9285),O={};O.styleTagTransform=I(),O.setAttributes=S(),O.insert=k().bind(null,"head"),O.domAPI=x(),O.insertStyleElement=B(),b()(F.Z,O),F.Z&&F.Z.locals&&F.Z.locals;const j=(0,L.Z)(R,(function(){var t=this,e=t._self._c;return e("ul",[e("svg",{staticClass:"unified-search__result-placeholder-gradient"},[e("defs",[e("linearGradient",{attrs:{id:"unified-search__result-placeholder-gradient"}},[e("stop",{attrs:{offset:"0%","stop-color":t.light}},[e("animate",{attrs:{attributeName:"stop-color",values:`${t.light}; ${t.light}; ${t.dark}; ${t.dark}; ${t.light}`,dur:"2s",repeatCount:"indefinite"}})]),t._v(" "),e("stop",{attrs:{offset:"100%","stop-color":t.dark}},[e("animate",{attrs:{attributeName:"stop-color",values:`${t.dark}; ${t.light}; ${t.light}; ${t.dark}; ${t.dark}`,dur:"2s",repeatCount:"indefinite"}})])],1)],1)]),t._v(" "),t._l([1,2,3],(function(i){return e("li",{key:i},[e("svg",{staticClass:"unified-search__result-placeholder",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"url(#unified-search__result-placeholder-gradient)"}},[e("rect",{staticClass:"unified-search__result-placeholder-icon"}),t._v(" "),e("rect",{staticClass:"unified-search__result-placeholder-line-one"}),t._v(" "),e("rect",{staticClass:"unified-search__result-placeholder-line-two",style:{width:`calc(${t.randWidth()}%)`}})])])}))],2)}),[],!1,null,"9ed03c40",null).exports;var T=r(79753),P=r(43554),Z=r(93664),z=r(25108);const M=(0,P.j)("unified-search","limit-default"),G=(0,P.j)("unified-search","min-search-length",1),Q=(0,P.j)("unified-search","live-search",!0),W=/(^|\s)in:([a-z_-]+)/gi,V=/(^|\s)-in:([a-z_-]+)/gi;async function H(){try{const{data:t}=await Z.Z.get((0,T.generateOcsUrl)("search/providers"),{params:{from:window.location.pathname.replace("/index.php","")+window.location.search}});if("ocs"in t&&"data"in t.ocs&&Array.isArray(t.ocs.data)&&t.ocs.data.length>0)return t.ocs.data}catch(t){z.error(t)}return[]}function K(t){let{type:e,query:i,cursor:n}=t;const r=Z.Z.CancelToken.source();return{request:async()=>Z.Z.get((0,T.generateOcsUrl)("search/providers/{type}/search",{type:e}),{cancelToken:r.token,params:{term:i,cursor:n,from:window.location.pathname.replace("/index.php","")+window.location.search}}),cancel:r.cancel}}const Y={name:"LegacyUnifiedSearch",components:{Magnify:m.default,NcActionButton:A.Z,NcActions:p.Z,NcEmptyContent:f.Z,NcHeaderMenu:g.Z,SearchResult:N,SearchResultPlaceholders:j,NcTextField:C.Z},data:()=>({types:[],cursors:{},limits:{},loading:{},reached:{},requests:[],results:{},query:"",focused:null,triggered:!1,defaultLimit:M,minSearchLength:G,enableLiveSearch:Q,open:!1}),computed:{typesIDs(){return this.types.map((t=>t.id))},typesNames(){return this.types.map((t=>t.name))},typesMap(){return this.types.reduce(((t,e)=>(t[e.id]=e.name,t)),{})},ariaLabel:()=>t("core","Search"),hasResults(){return 0!==Object.keys(this.results).length},orderedResults(){return this.typesIDs.filter((t=>t in this.results)).map((t=>({type:t,list:this.results[t]})))},availableFilters(){return Object.keys(this.results)},usedFiltersIn(){let t;const e=[];for(;null!==(t=W.exec(this.query));)e.push(t[2]);return e},usedFiltersNot(){let t;const e=[];for(;null!==(t=V.exec(this.query));)e.push(t[2]);return e},validQueryTitle(){return this.triggered?t("core","No results for {query}",{query:this.query}):t("core","Press Enter to start searching")},shortQueryDescription(){return this.isShortQuery?n("core","Please enter {minSearchLength} character or more to search","Please enter {minSearchLength} characters  or more to search",this.minSearchLength,{minSearchLength:this.minSearchLength}):""},isShortQuery(){return this.query&&this.query.trim().length<G},isValidQuery(){return this.query&&""!==this.query.trim()&&!this.isShortQuery},isDoneSearching(){return Object.values(this.reached).every((t=>!1===t))},isLoading(){return Object.values(this.loading).some((t=>!0===t))}},async created(){this.types=await H(),this.logger.debug("Unified Search initialized with the following providers",this.types)},beforeDestroy(){(0,u.r1)("files:navigation:changed",this.onNavigationChange)},mounted(){(0,u.Ld)("files:navigation:changed",this.onNavigationChange),OCP.Accessibility.disableKeyboardShortcuts()||document.addEventListener("keydown",(t=>{t.ctrlKey&&"KeyF"===t.code&&!this.open?(t.preventDefault(),this.open=!0):t.ctrlKey&&"f"===t.key&&this.open&&(this.open=!1),this.open&&("ArrowDown"===t.key&&this.focusNext(t),"ArrowUp"===t.key&&this.focusPrev(t))}))},methods:{async onOpen(){this.types=await H()},onClose(){(0,u.j8)("nextcloud:unified-search.close")},onNavigationChange(){this.$el?.querySelector?.('form[role="search"]')?.reset?.()},onReset(){(0,u.j8)("nextcloud:unified-search.reset"),this.logger.debug("Search reset"),this.query="",this.resetState(),this.focusInput()},async resetState(){this.cursors={},this.limits={},this.reached={},this.results={},this.focused=null,this.triggered=!1,await this.cancelPendingRequests()},async cancelPendingRequests(){const t=this.requests.slice(0);this.requests=[],await Promise.all(t.map((t=>t())))},focusInput(){this.$nextTick((()=>{this.$refs.input.focus(),this.$refs.input.select()}))},onInputEnter(){this.hasResults?this.getResultsList()[0].click():this.onInput()},async onInput(){if((0,u.j8)("nextcloud:unified-search.search",{query:this.query}),""===this.query.trim()||this.isShortQuery){for(const t of this.typesIDs)this.$delete(this.results,t);return}let t=this.typesIDs,e=this.query;this.usedFiltersNot.length>0&&(t=this.typesIDs.filter((t=>-1===this.usedFiltersNot.indexOf(t)))),this.usedFiltersIn.length>0&&(t=this.typesIDs.filter((t=>this.usedFiltersIn.indexOf(t)>-1))),e=e.replace(W,"").replace(V,""),await this.resetState(),this.triggered=!0,t.length?(this.$set(this.loading,"all",!0),this.logger.debug(`Searching ${e} in`,t),Promise.all(t.map((async t=>{try{const{request:i,cancel:n}=K({type:t,query:e});this.requests.push(n);const{data:r}=await i();return r.ocs.data.entries.length>0?this.$set(this.results,t,r.ocs.data.entries):this.$delete(this.results,t),r.ocs.data.cursor?this.$set(this.cursors,t,r.ocs.data.cursor):r.ocs.data.isPaginated||this.$set(this.limits,t,this.defaultLimit),r.ocs.data.entries.length<this.defaultLimit&&this.$set(this.reached,t,!0),null===this.focused&&(this.focused=0),1}catch(e){return this.$delete(this.results,t),e.response&&e.response.status?(this.logger.error(`Error searching for ${this.typesMap[t]}`,e),(0,h.x2)(this.t("core","An error occurred while searching for {type}",{type:this.typesMap[t]})),0):2}}))).then((t=>{t.some((t=>2===t))||(this.loading={})}))):this.logger.error("No types to search in")},onInputDebounced:Q?d()((function(t){this.onInput(t)}),500):function(){this.triggered=!1},async loadMore(t){if(!this.loading[t]){if(this.cursors[t]){const{request:e,cancel:i}=K({type:t,query:this.query,cursor:this.cursors[t]});this.requests.push(i);const{data:n}=await e();n.ocs.data.cursor&&this.$set(this.cursors,t,n.ocs.data.cursor),n.ocs.data.entries.length>0&&this.results[t].push(...n.ocs.data.entries),n.ocs.data.entries.length<this.defaultLimit&&this.$set(this.reached,t,!0)}else this.limits[t]&&this.limits[t]>=0&&(this.limits[t]+=this.defaultLimit,this.limits[t]>=this.results[t].length&&this.$set(this.reached,t,!0));null!==this.focused&&this.$nextTick((()=>{this.focusIndex(this.focused)}))}},limitIfAny(t,e){return e in this.limits?t.slice(0,this.limits[e]):t},getResultsList(){return this.$el.querySelectorAll(".unified-search__results .unified-search__result")},focusFirst(t){const e=this.getResultsList();e&&e.length>0&&(t&&t.preventDefault(),this.focused=0,this.focusIndex(this.focused))},focusNext(t){if(null===this.focused)return void this.focusFirst(t);const e=this.getResultsList();e&&e.length>0&&this.focused+1<e.length&&(t.preventDefault(),this.focused++,this.focusIndex(this.focused))},focusPrev(t){if(null===this.focused)return void this.focusFirst(t);const e=this.getResultsList();e&&e.length>0&&this.focused>0&&(t.preventDefault(),this.focused--,this.focusIndex(this.focused))},focusIndex(t){const e=this.getResultsList();e&&e[t]&&e[t].focus()},setFocusedIndex(t){const e=t.target,i=[...this.getResultsList()].findIndex((t=>t===e));i>-1&&(this.focused=i)},onClickFilter(t){this.query=`${this.query} ${t}`.replace(/ {2}/g," ").trim(),this.onInput()}}};var X=r(50532),J={};J.styleTagTransform=I(),J.setAttributes=S(),J.insert=k().bind(null,"head"),J.domAPI=x(),J.insertStyleElement=B(),b()(X.Z,J),X.Z&&X.Z.locals&&X.Z.locals;const tt=(0,L.Z)(Y,(function(){var t=this,e=t._self._c;return e("NcHeaderMenu",{staticClass:"unified-search",attrs:{id:"unified-search","exclude-click-outside-selectors":[".popover"],open:t.open,"aria-label":t.ariaLabel},on:{"update:open":function(e){t.open=e},open:t.onOpen,close:t.onClose},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("Magnify",{staticClass:"unified-search__trigger-icon",attrs:{size:20}})]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"unified-search__input-wrapper"},[e("div",{staticClass:"unified-search__input-row"},[e("NcTextField",{ref:"input",staticClass:"unified-search__form-input",class:{"unified-search__form-input--with-reset":!!t.query},attrs:{value:t.query,"trailing-button-icon":"close",label:t.ariaLabel,"trailing-button-label":t.t("core","Reset search"),"show-trailing-button":""!==t.query,"aria-describedby":"unified-search-desc",placeholder:t.t("core","Search {types} …",{types:t.typesNames.join(", ")})},on:{"update:value":function(e){t.query=e},"trailing-button-click":t.onReset,input:t.onInputDebounced}}),t._v(" "),e("p",{staticClass:"hidden-visually",attrs:{id:"unified-search-desc"}},[t._v("\n\t\t\t\t"+t._s(t.t("core","Search starts once you start typing and results may be reached with the arrow keys"))+"\n\t\t\t")]),t._v(" "),t.availableFilters.length>1?e("NcActions",{staticClass:"unified-search__filters",attrs:{placement:"bottom-end",container:".unified-search__input-wrapper"}},t._l(t.availableFilters,(function(i){return e("NcActionButton",{key:i,attrs:{icon:"icon-filter"},on:{click:function(e){return e.stopPropagation(),t.onClickFilter(`in:${i}`)}}},[t._v("\n\t\t\t\t\t"+t._s(t.t("core","Search for {name} only",{name:t.typesMap[i]}))+"\n\t\t\t\t")])})),1):t._e()],1)]),t._v(" "),t.hasResults?t._l(t.orderedResults,(function(i,n){let{list:r,type:a}=i;return[e("h2",{key:a,staticClass:"unified-search__results-header"},[t._v("\n\t\t\t"+t._s(t.typesMap[a])+"\n\t\t")]),t._v(" "),e("ul",{key:a,staticClass:"unified-search__results",class:`unified-search__results-${a}`,attrs:{"aria-label":t.typesMap[a]}},[t._l(t.limitIfAny(r,a),(function(i,r){return e("li",{key:i.resourceUrl},[e("SearchResult",t._b({attrs:{query:t.query,focused:0===t.focused&&0===n&&0===r},on:{focus:t.setFocusedIndex}},"SearchResult",i,!1))],1)})),t._v(" "),e("li",[t.reached[a]?t._e():e("SearchResult",{staticClass:"unified-search__result-more",attrs:{title:t.loading[a]?t.t("core","Loading more results …"):t.t("core","Load more results"),"icon-class":t.loading[a]?"icon-loading-small":""},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.loadMore(a)},focus:t.setFocusedIndex}})],1)],2)]})):[t.isLoading?e("SearchResultPlaceholders"):t.isValidQuery?e("NcEmptyContent",{attrs:{title:t.validQueryTitle},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Magnify")]},proxy:!0}],null,!1,931131664)}):!t.isLoading||t.isShortQuery?e("NcEmptyContent",{attrs:{title:t.t("core","Start typing to search"),description:t.shortQueryDescription},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Magnify")]},proxy:!0}],null,!1,931131664)}):t._e()]],2)}),[],!1,null,"44cce219",null).exports;r.nc=btoa((0,s.IH)());const et=(0,a.IY)().setApp("unified-search").detectUser().build();c.default.mixin({data:()=>({logger:et}),methods:{t:o.Iu,n:o.uN}}),new c.default({el:"#unified-search",name:"UnifiedSearchRoot",render:t=>t(tt)})},58247:(t,e,i)=>{i.d(e,{Z:()=>o});var n=i(87537),r=i.n(n),a=i(23645),s=i.n(a)()(r());s.push([t.id,".unified-search__result[data-v-2aaf542f]{display:flex;align-items:center;height:44px;padding:10px;border:2px solid rgba(0,0,0,0);border-radius:var(--border-radius-large) !important}.unified-search__result--focused[data-v-2aaf542f]{background-color:var(--color-background-hover)}.unified-search__result[data-v-2aaf542f]:active,.unified-search__result[data-v-2aaf542f]:hover,.unified-search__result[data-v-2aaf542f]:focus{background-color:var(--color-background-hover);border:2px solid var(--color-border-maxcontrast)}.unified-search__result *[data-v-2aaf542f]{cursor:pointer}.unified-search__result-icon[data-v-2aaf542f]{overflow:hidden;width:44px;height:44px;border-radius:var(--border-radius);background-repeat:no-repeat;background-position:center center;background-size:32px}.unified-search__result-icon--rounded[data-v-2aaf542f]{border-radius:22px}.unified-search__result-icon--no-preview[data-v-2aaf542f]{background-size:32px}.unified-search__result-icon--with-thumbnail[data-v-2aaf542f]{background-size:cover}.unified-search__result-icon--with-thumbnail[data-v-2aaf542f]:not(.unified-search__result-icon--rounded){max-width:42px;max-height:42px;border:1px solid var(--color-border)}.unified-search__result-icon img[data-v-2aaf542f]{width:100%;height:100%;object-fit:cover;object-position:center}.unified-search__result-icon[data-v-2aaf542f],.unified-search__result-actions[data-v-2aaf542f]{flex:0 0 44px}.unified-search__result-content[data-v-2aaf542f]{display:flex;align-items:center;flex:1 1 100%;flex-wrap:wrap;min-width:0;padding-left:10px}.unified-search__result-line-one[data-v-2aaf542f],.unified-search__result-line-two[data-v-2aaf542f]{overflow:hidden;flex:1 1 100%;margin:1px 0;white-space:nowrap;text-overflow:ellipsis;color:inherit;font-size:inherit}.unified-search__result-line-two[data-v-2aaf542f]{opacity:.7;font-size:var(--default-font-size)}","",{version:3,sources:["webpack://./core/src/components/UnifiedSearch/LegacySearchResult.vue"],names:[],mappings:"AAMA,yCACC,YAAA,CACA,kBAAA,CACA,WANgB,CAOhB,YANQ,CAOR,8BAAA,CACA,mDAAA,CAEA,kDACC,8CAAA,CAGD,8IAGC,8CAAA,CACA,gDAAA,CAGD,2CACC,cAAA,CAGD,8CACC,eAAA,CACA,UA5Be,CA6Bf,WA7Be,CA8Bf,kCAAA,CACA,2BAAA,CACA,iCAAA,CACA,oBAAA,CACA,uDACC,kBAAA,CAED,0DACC,oBAAA,CAED,8DACC,qBAAA,CAED,yGAEC,cAAA,CACA,eAAA,CACA,oCAAA,CAGD,kDAEC,UAAA,CACA,WAAA,CAEA,gBAAA,CACA,sBAAA,CAIF,+FAEC,aAAA,CAGD,iDACC,YAAA,CACA,kBAAA,CACA,aAAA,CACA,cAAA,CAEA,WAAA,CACA,iBAvEO,CA0ER,oGAEC,eAAA,CACA,aAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,aAAA,CACA,iBAAA,CAED,kDACC,UAAA,CACA,kCAAA",sourcesContent:['\n@use "sass:math";\n\n$clickable-area: 44px;\n$margin: 10px;\n\n.unified-search__result {\n\tdisplay: flex;\n\talign-items: center;\n\theight: $clickable-area;\n\tpadding: $margin;\n\tborder: 2px solid transparent;\n\tborder-radius: var(--border-radius-large) !important;\n\n\t&--focused {\n\t\tbackground-color: var(--color-background-hover);\n\t}\n\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: var(--color-background-hover);\n\t\tborder: 2px solid var(--color-border-maxcontrast);\n\t}\n\n\t* {\n\t\tcursor: pointer;\n\t}\n\n\t&-icon {\n\t\toverflow: hidden;\n\t\twidth: $clickable-area;\n\t\theight: $clickable-area;\n\t\tborder-radius: var(--border-radius);\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: center center;\n\t\tbackground-size: 32px;\n\t\t&--rounded {\n\t\t\tborder-radius: math.div($clickable-area, 2);\n\t\t}\n\t\t&--no-preview {\n\t\t\tbackground-size: 32px;\n\t\t}\n\t\t&--with-thumbnail {\n\t\t\tbackground-size: cover;\n\t\t}\n\t\t&--with-thumbnail:not(&--rounded) {\n\t\t\t// compensate for border\n\t\t\tmax-width: $clickable-area - 2px;\n\t\t\tmax-height: $clickable-area - 2px;\n\t\t\tborder: 1px solid var(--color-border);\n\t\t}\n\n\t\timg {\n\t\t\t// Make sure to keep ratio\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\n\t\t\tobject-fit: cover;\n\t\t\tobject-position: center;\n\t\t}\n\t}\n\n\t&-icon,\n\t&-actions {\n\t\tflex: 0 0 $clickable-area;\n\t}\n\n\t&-content {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex: 1 1 100%;\n\t\tflex-wrap: wrap;\n\t\t// Set to minimum and gro from it\n\t\tmin-width: 0;\n\t\tpadding-left: $margin;\n\t}\n\n\t&-line-one,\n\t&-line-two {\n\t\toverflow: hidden;\n\t\tflex: 1 1 100%;\n\t\tmargin: 1px 0;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\t// Use the same color as the `a`\n\t\tcolor: inherit;\n\t\tfont-size: inherit;\n\t}\n\t&-line-two {\n\t\topacity: .7;\n\t\tfont-size: var(--default-font-size);\n\t}\n}\n\n'],sourceRoot:""}]);const o=s},9285:(t,e,i)=>{i.d(e,{Z:()=>o});var n=i(87537),r=i.n(n),a=i(23645),s=i.n(a)()(r());s.push([t.id,".unified-search__result-placeholder-gradient[data-v-9ed03c40]{position:fixed;height:0;width:0;z-index:-1}.unified-search__result-placeholder[data-v-9ed03c40]{width:calc(100% - 2*10px);height:44px;margin:10px}.unified-search__result-placeholder-icon[data-v-9ed03c40]{width:44px;height:44px;rx:var(--border-radius);ry:var(--border-radius)}.unified-search__result-placeholder-line-one[data-v-9ed03c40],.unified-search__result-placeholder-line-two[data-v-9ed03c40]{width:calc(100% - 54px);height:1em;x:54px}.unified-search__result-placeholder-line-one[data-v-9ed03c40]{y:5px}.unified-search__result-placeholder-line-two[data-v-9ed03c40]{y:25px}","",{version:3,sources:["webpack://./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue"],names:[],mappings:"AAIA,8DACC,cAAA,CACA,QAAA,CACA,OAAA,CACA,UAAA,CAGD,qDACC,yBAAA,CACA,WAZgB,CAahB,WAZQ,CAcR,0DACC,UAhBe,CAiBf,WAjBe,CAkBf,uBAAA,CACA,uBAAA,CAGD,4HAEC,uBAAA,CACA,UAAA,CACA,MAAA,CAGD,8DACC,KAAA,CAGD,8DACC,MAAA",sourcesContent:["\n$clickable-area: 44px;\n$margin: 10px;\n\n.unified-search__result-placeholder-gradient {\n\tposition: fixed;\n\theight: 0;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.unified-search__result-placeholder {\n\twidth: calc(100% - 2 * #{$margin});\n\theight: $clickable-area;\n\tmargin: $margin;\n\n\t&-icon {\n\t\twidth: $clickable-area;\n\t\theight: $clickable-area;\n\t\trx: var(--border-radius);\n\t\try: var(--border-radius);\n\t}\n\n\t&-line-one,\n\t&-line-two {\n\t\twidth: calc(100% - #{$margin + $clickable-area});\n\t\theight: 1em;\n\t\tx: $margin + $clickable-area;\n\t}\n\n\t&-line-one {\n\t\ty: 5px;\n\t}\n\n\t&-line-two {\n\t\ty: 25px;\n\t}\n}\n\n"],sourceRoot:""}]);const o=s},50532:(t,e,i)=>{i.d(e,{Z:()=>o});var n=i(87537),r=i.n(n),a=i(23645),s=i.n(a)()(r());s.push([t.id,".unified-search__trigger-icon[data-v-44cce219]{color:var(--color-background-plain-text) !important}.unified-search__input-wrapper[data-v-44cce219]{position:sticky;z-index:2;top:0;display:inline-flex;flex-direction:column;align-items:center;width:100%;background-color:var(--color-main-background)}.unified-search__input-wrapper label[for=unified-search__input][data-v-44cce219]{align-self:flex-start;font-weight:bold;font-size:19px;margin-left:13px}.unified-search__form-input[data-v-44cce219]{margin:0 !important}.unified-search__form-input[data-v-44cce219]:focus,.unified-search__form-input[data-v-44cce219]:focus-visible,.unified-search__form-input[data-v-44cce219]:active{border-color:2px solid var(--color-main-text) !important;box-shadow:0 0 0 2px var(--color-main-background) !important}.unified-search__input-row[data-v-44cce219]{display:flex;width:100%;align-items:center}.unified-search__filters[data-v-44cce219]{margin:10px 0 10px 5px;padding-top:5px}.unified-search__filters ul[data-v-44cce219]{display:inline-flex;justify-content:space-between}.unified-search__form[data-v-44cce219]{position:relative;width:100%;margin:10px 0}.unified-search__form[data-v-44cce219]::after{right:10px;left:auto}.unified-search__form-input[data-v-44cce219],.unified-search__form-reset[data-v-44cce219]{margin:5px}.unified-search__form-input[data-v-44cce219]{width:100%;height:34px;padding:10px}.unified-search__form-input[data-v-44cce219],.unified-search__form-input[placeholder][data-v-44cce219],.unified-search__form-input[data-v-44cce219]::placeholder{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.unified-search__form-input[data-v-44cce219]::-webkit-search-decoration,.unified-search__form-input[data-v-44cce219]::-webkit-search-cancel-button,.unified-search__form-input[data-v-44cce219]::-webkit-search-results-button,.unified-search__form-input[data-v-44cce219]::-webkit-search-results-decoration{-webkit-appearance:none}.unified-search__form-reset[data-v-44cce219],.unified-search__form-submit[data-v-44cce219]{position:absolute;top:0;right:4px;width:24px;height:24px;min-height:30px;padding:0;opacity:.5;border:none;background-color:rgba(0,0,0,0);margin-right:0}.unified-search__form-reset[data-v-44cce219]:hover,.unified-search__form-reset[data-v-44cce219]:focus,.unified-search__form-reset[data-v-44cce219]:active,.unified-search__form-submit[data-v-44cce219]:hover,.unified-search__form-submit[data-v-44cce219]:focus,.unified-search__form-submit[data-v-44cce219]:active{opacity:1}.unified-search__form-submit[data-v-44cce219]{right:28px}.unified-search__results[data-v-44cce219]{display:flex;flex-direction:column;gap:4px}.unified-search__results-header[data-v-44cce219]{display:block;margin:10px;margin-bottom:6px;margin-left:13px;color:var(--color-primary-element);font-size:19px;font-weight:bold}.unified-search .unified-search__result-more[data-v-44cce219]{color:var(--color-text-maxcontrast)}.unified-search .empty-content[data-v-44cce219]{margin:10vh 0}.unified-search .empty-content[data-v-44cce219] .empty-content__title{font-weight:normal;font-size:var(--default-font-size);text-align:center}","",{version:3,sources:["webpack://./core/src/views/LegacyUnifiedSearch.vue"],names:[],mappings:"AAQC,+CACC,mDAAA,CAGD,gDACC,eAAA,CAEA,SAAA,CACA,KAAA,CACA,mBAAA,CACA,qBAAA,CACA,kBAAA,CACA,UAAA,CACA,6CAAA,CAEA,iFACC,qBAAA,CACA,gBAAA,CACA,cAAA,CACA,gBAAA,CAIF,6CACC,mBAAA,CACA,kKAGC,wDAAA,CACA,4DAAA,CAIF,4CACC,YAAA,CACA,UAAA,CACA,kBAAA,CAGD,0CACC,sBAAA,CACA,eAAA,CACA,6CACC,mBAAA,CACA,6BAAA,CAIF,uCACC,iBAAA,CACA,UAAA,CACA,aAAA,CAGA,8CACC,UA1Da,CA2Db,SAAA,CAGD,0FAEC,UAAA,CAGD,6CACC,UAAA,CACA,WAtEY,CAuEZ,YAtEa,CAwEb,iKAGC,eAAA,CACA,kBAAA,CACA,sBAAA,CAID,+SAIC,uBAAA,CAIF,2FACC,iBAAA,CACA,KAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,8BAAA,CACA,cAAA,CAEA,uTAGC,SAAA,CAIF,8CACC,UAAA,CAIF,0CAUC,YAAA,CACA,qBAAA,CACA,OAAA,CAXA,iDACC,aAAA,CACA,WAvHM,CAwHN,iBAAA,CACA,gBAAA,CACA,kCAAA,CACA,cAAA,CACA,gBAAA,CAOF,8DACC,mCAAA,CAGD,gDACC,aAAA,CAEA,sEACC,kBAAA,CACS,kCAAA,CACT,iBAAA",sourcesContent:['\n@use "sass:math";\n\n$margin: 10px;\n$input-height: 34px;\n$input-padding: 10px;\n\n.unified-search {\n\t&__trigger-icon {\n\t\tcolor: var(--color-background-plain-text) !important;\n\t}\n\n\t&__input-wrapper {\n\t\tposition: sticky;\n\t\t// above search results\n\t\tz-index: 2;\n\t\ttop: 0;\n\t\tdisplay: inline-flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\twidth: 100%;\n\t\tbackground-color: var(--color-main-background);\n\n\t\tlabel[for="unified-search__input"] {\n\t\t\talign-self: flex-start;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 19px;\n\t\t\tmargin-left: 13px;\n\t\t}\n\t}\n\n\t&__form-input {\n\t\tmargin: 0 !important;\n\t\t&:focus,\n\t\t&:focus-visible,\n\t\t&:active {\n\t\t\tborder-color: 2px solid var(--color-main-text) !important;\n\t\t\tbox-shadow: 0 0 0 2px var(--color-main-background) !important;\n\t\t}\n\t}\n\n\t&__input-row {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\talign-items: center;\n\t}\n\n\t&__filters {\n\t\tmargin: $margin 0 $margin math.div($margin, 2);\n\t\tpadding-top: 5px;\n\t\tul {\n\t\t\tdisplay: inline-flex;\n\t\t\tjustify-content: space-between;\n\t\t}\n\t}\n\n\t&__form {\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\tmargin: $margin 0;\n\n\t\t// Loading spinner\n\t\t&::after {\n\t\t\tright: $input-padding;\n\t\t\tleft: auto;\n\t\t}\n\n\t\t&-input,\n\t\t&-reset {\n\t\t\tmargin: math.div($input-padding, 2);\n\t\t}\n\n\t\t&-input {\n\t\t\twidth: 100%;\n\t\t\theight: $input-height;\n\t\t\tpadding: $input-padding;\n\n\t\t\t&,\n\t\t\t&[placeholder],\n\t\t\t&::placeholder {\n\t\t\t\toverflow: hidden;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\ttext-overflow: ellipsis;\n\t\t\t}\n\n\t\t\t// Hide webkit clear search\n\t\t\t&::-webkit-search-decoration,\n\t\t\t&::-webkit-search-cancel-button,\n\t\t\t&::-webkit-search-results-button,\n\t\t\t&::-webkit-search-results-decoration {\n\t\t\t\t-webkit-appearance: none;\n\t\t\t}\n\t\t}\n\n\t\t&-reset, &-submit {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 4px;\n\t\t\twidth: $input-height - $input-padding;\n\t\t\theight: $input-height - $input-padding;\n\t\t\tmin-height: 30px;\n\t\t\tpadding: 0;\n\t\t\topacity: .5;\n\t\t\tborder: none;\n\t\t\tbackground-color: transparent;\n\t\t\tmargin-right: 0;\n\n\t\t\t&:hover,\n\t\t\t&:focus,\n\t\t\t&:active {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\n\t\t&-submit {\n\t\t\tright: 28px;\n\t\t}\n\t}\n\n\t&__results {\n\t\t&-header {\n\t\t\tdisplay: block;\n\t\t\tmargin: $margin;\n\t\t\tmargin-bottom: $margin - 4px;\n\t\t\tmargin-left: 13px;\n\t\t\tcolor: var(--color-primary-element);\n\t\t\tfont-size: 19px;\n\t\t\tfont-weight: bold;\n\t\t}\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 4px;\n\t}\n\n\t.unified-search__result-more::v-deep {\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t.empty-content {\n\t\tmargin: 10vh 0;\n\n\t\t::v-deep .empty-content__title {\n\t\t\tfont-weight: normal;\n            font-size: var(--default-font-size);\n\t\t\ttext-align: center;\n\t\t}\n\t}\n}\n\n'],sourceRoot:""}]);const o=s}},s={};function o(t){var e=s[t];if(void 0!==e)return e.exports;var i=s[t]={id:t,loaded:!1,exports:{}};return a[t].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=a,e=[],o.O=(t,i,n,r)=>{if(!i){var a=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],r=e[d][2];for(var s=!0,c=0;c<i.length;c++)(!1&r||a>=r)&&Object.keys(o.O).every((t=>o.O[t](i[c])))?i.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,n,r]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,i)=>(o.f[i](t,e),e)),[])),o.u=t=>t+"-"+t+".js?v="+{1697:"17920ffa1ad36f333ac6",5076:"5df17ad2d937c26c5b50"}[t],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i={},r="nextcloud:",o.l=(t,e,n,a)=>{if(i[t])i[t].push(e);else{var s,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==r+n){s=u;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",r+n),s.src=t),i[t]=[e];var h=(e,n)=>{s.onerror=s.onload=null,clearTimeout(A);var r=i[t];if(delete i[t],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((t=>t(n))),e)return e(n)},A=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),o.j=7086,(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&!t;)t=i[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{o.b=document.baseURI||self.location.href;var t={7086:0};o.f.j=(e,i)=>{var n=o.o(t,e)?t[e]:void 0;if(0!==n)if(n)i.push(n[2]);else{var r=new Promise(((i,r)=>n=t[e]=[i,r]));i.push(n[2]=r);var a=o.p+o.u(e),s=new Error;o.l(a,(i=>{if(o.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}}),"chunk-"+e,e)}},o.O.j=e=>0===t[e];var e=(e,i)=>{var n,r,a=i[0],s=i[1],c=i[2],l=0;if(a.some((e=>0!==t[e]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)var d=c(o)}for(e&&e(i);l<a.length;l++)r=a[l],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(d)},i=self.webpackChunknextcloud=self.webpackChunknextcloud||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})(),o.nc=void 0;var c=o.O(void 0,[7874],(()=>o(35057)));c=o.O(c)})();
//# sourceMappingURL=core-legacy-unified-search.js.map?v=6b9f1e8ddc093ec9a5d9