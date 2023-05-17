/*! For license information please see settings-vue-settings-apps-users-management.js.LICENSE.txt */
(()=>{"use strict";var e,r,s,a={92652:(e,t,r)=>{r.d(t,{J:()=>a});var s=r(31352);const a=Object.freeze({enabled:(0,s.Iu)("settings","Active apps"),disabled:(0,s.Iu)("settings","Disabled apps"),updates:(0,s.Iu)("settings","Updates"),"app-bundles":(0,s.Iu)("settings","App bundles"),featured:(0,s.Iu)("settings","Featured apps")})},9685:(e,r,s)=>{var a=s(20144),o=s(2324),i=s(83678);const d={name:"App",beforeMount(){null!==document.getElementById("serverData")&&this.$store.commit("setServerData",JSON.parse(document.getElementById("serverData").dataset.server))}},c=(0,s(51900).Z)(d,(function(){return(0,this._self._c)("router-view")}),[],!1,null,null,null).exports;var u=s(78345),p=s(79753),l=s(92652),m=s(20629),g=s(4820),h=s(10128);s(65509);const f=function(e){return e.replace(/\/$/,"")},A=()=>(0,h.confirmPassword)(),I=(e,t)=>g.default.get(f(e),t),y=(e,t)=>g.default.post(f(e),t),b=(e,t)=>g.default.put(f(e),t),U=(e,t)=>g.default.delete(f(e),{params:t}),v=(0,s(17499).IY)().setApp("settings").detectUser().build();var L=s(25108);const C=function(e,t){return 1===t?e.sort(((e,t)=>e.usercount-e.disabled<t.usercount-t.disabled)):e.sort(((e,t)=>e.name.localeCompare(t.name)))},P={id:"",name:"",usercount:0,disabled:0,canAdd:!0,canRemove:!0},E={appendUsers(e,t){const r=e.users.concat(Object.keys(t).map((e=>t[e])));e.usersOffset+=e.usersLimit,e.users=r},setPasswordPolicyMinLength(e,t){e.minPasswordLength=""!==t?t:0},initGroups(e,t){let{groups:r,orderBy:s,userCount:a}=t;e.groups=r.map((e=>Object.assign({},P,e))),e.orderBy=s,e.userCount=a,e.groups=C(e.groups,e.orderBy)},addGroup(e,t){let{gid:r,displayName:s}=t;try{if(void 0!==e.groups.find((e=>e.id===r)))return;const t=Object.assign({},P,{id:r,name:s});e.groups.push(t),e.groups=C(e.groups,e.orderBy)}catch(e){L.error("Can't create group",e)}},renameGroup(e,t){let{gid:r,displayName:s}=t;const a=e.groups.findIndex((e=>e.id===r));if(a>=0){const t=e.groups[a];t.name=s,e.groups.splice(a,1,t),e.groups=C(e.groups,e.orderBy)}},removeGroup(e,t){const r=e.groups.findIndex((e=>e.id===t));r>=0&&e.groups.splice(r,1)},addUserGroup(e,t){let{userid:r,gid:s}=t;const a=e.groups.find((e=>e.id===s)),o=e.users.find((e=>e.id===r));a&&o.enabled&&e.userCount>0&&a.usercount++,o.groups.push(s),e.groups=C(e.groups,e.orderBy)},removeUserGroup(e,t){let{userid:r,gid:s}=t;const a=e.groups.find((e=>e.id===s)),o=e.users.find((e=>e.id===r));a&&o.enabled&&e.userCount>0&&a.usercount--;const i=o.groups;i.splice(i.indexOf(s),1),e.groups=C(e.groups,e.orderBy)},addUserSubAdmin(e,t){let{userid:r,gid:s}=t;e.users.find((e=>e.id===r)).subadmin.push(s)},removeUserSubAdmin(e,t){let{userid:r,gid:s}=t;const a=e.users.find((e=>e.id===r)).subadmin;a.splice(a.indexOf(s),1)},deleteUser(e,t){const r=e.users.findIndex((e=>e.id===t));this.commit("updateUserCounts",{user:e.users[r],actionType:"remove"}),e.users.splice(r,1)},addUserData(e,t){const r=t.data.ocs.data;e.users.push(r),this.commit("updateUserCounts",{user:r,actionType:"create"})},enableDisableUser(e,t){let{userid:r,enabled:s}=t;const a=e.users.find((e=>e.id===r));a.enabled=s,this.commit("updateUserCounts",{user:a,actionType:s?"enable":"disable"})},updateUserCounts(e,t){let{user:r,actionType:s}=t;const a=e.groups.find((e=>"disabled"===e.id));switch(s){case"enable":case"disable":a.usercount+=r.enabled?-1:1,e.userCount+=r.enabled?1:-1,r.groups.forEach((t=>{e.groups.find((e=>e.id===t)).disabled+=r.enabled?-1:1}));break;case"create":e.userCount++,r.groups.forEach((t=>{e.groups.find((e=>e.id===t)).usercount++}));break;case"remove":r.enabled?(e.userCount--,r.groups.forEach((t=>{const r=e.groups.find((e=>e.id===t));r?r.usercount--:L.warn("User group "+t+" does not exist during user removal")}))):(a.usercount--,r.groups.forEach((t=>{e.groups.find((e=>e.id===t)).disabled--})));break;default:v.error("Unknown action type in updateUserCounts: '".concat(s,"'"))}},setUserData(e,t){let{userid:r,key:s,value:a}=t;if("quota"===s){const t=OC.Util.computerFileSize(a);e.users.find((e=>e.id===r))[s][s]=null!==t?t:a}else e.users.find((e=>e.id===r))[s]=a},resetUsers(e){e.users=[],e.usersOffset=0}},w=g.default.CancelToken;let O=null;const _={state:{users:[],groups:[],orderBy:1,minPasswordLength:0,usersOffset:0,usersLimit:25,userCount:0},mutations:E,getters:{getUsers:e=>e.users,getGroups:e=>e.groups,getSubadminGroups:e=>e.groups.filter((e=>"admin"!==e.id&&"disabled"!==e.id)),getPasswordPolicyMinLength:e=>e.minPasswordLength,getUsersOffset:e=>e.usersOffset,getUsersLimit:e=>e.usersLimit,getUserCount:e=>e.userCount},actions:{searchUsers(e,t){let{offset:r,limit:s,search:a}=t;return a="string"==typeof a?a:"",I((0,p.generateOcsUrl)("cloud/users/details?offset={offset}&limit={limit}&search={search}",{offset:r,limit:s,search:a})).catch((t=>{g.default.isCancel(t)||e.commit("API_FAILURE",t)}))},getUser:(e,t)=>I((0,p.generateOcsUrl)("cloud/users/".concat(t))).catch((t=>{g.default.isCancel(t)||e.commit("API_FAILURE",t)})),getUsers(e,t){let{offset:r,limit:s,search:a,group:o}=t;return O&&O.cancel("Operation canceled by another search request."),O=w.source(),a="string"==typeof a?a:"",o="string"==typeof o?o:"",""!==o?I((0,p.generateOcsUrl)("cloud/groups/{group}/users/details?offset={offset}&limit={limit}&search={search}",{group:encodeURIComponent(o),offset:r,limit:s,search:a}),{cancelToken:O.token}).then((t=>{const r=Object.keys(t.data.ocs.data.users).length;return r>0&&e.commit("appendUsers",t.data.ocs.data.users),r})).catch((t=>{g.default.isCancel(t)||e.commit("API_FAILURE",t)})):I((0,p.generateOcsUrl)("cloud/users/details?offset={offset}&limit={limit}&search={search}",{offset:r,limit:s,search:a}),{cancelToken:O.token}).then((t=>{const r=Object.keys(t.data.ocs.data.users).length;return r>0&&e.commit("appendUsers",t.data.ocs.data.users),r})).catch((t=>{g.default.isCancel(t)||e.commit("API_FAILURE",t)}))},getGroups(e,t){let{offset:r,limit:s,search:a}=t;a="string"==typeof a?a:"";const o=-1===s?"":"&limit=".concat(s);return I((0,p.generateOcsUrl)("cloud/groups?offset={offset}&search={search}",{offset:r,search:a})+o).then((t=>Object.keys(t.data.ocs.data.groups).length>0&&(t.data.ocs.data.groups.forEach((function(t){e.commit("addGroup",{gid:t,displayName:t})})),!0))).catch((t=>e.commit("API_FAILURE",t)))},getUsersFromList(e,t){let{offset:r,limit:s,search:a}=t;return a="string"==typeof a?a:"",I((0,p.generateOcsUrl)("cloud/users/details?offset={offset}&limit={limit}&search={search}",{offset:r,limit:s,search:a})).then((t=>Object.keys(t.data.ocs.data.users).length>0&&(e.commit("appendUsers",t.data.ocs.data.users),!0))).catch((t=>e.commit("API_FAILURE",t)))},getUsersFromGroup(e,t){let{groupid:r,offset:s,limit:a}=t;return I((0,p.generateOcsUrl)("cloud/users/{groupId}/details?offset={offset}&limit={limit}",{groupId:encodeURIComponent(r),offset:s,limit:a})).then((t=>e.commit("getUsersFromList",t.data.ocs.data.users))).catch((t=>e.commit("API_FAILURE",t)))},getPasswordPolicyMinLength:e=>!(!OC.getCapabilities().password_policy||!OC.getCapabilities().password_policy.minLength)&&(e.commit("setPasswordPolicyMinLength",OC.getCapabilities().password_policy.minLength),OC.getCapabilities().password_policy.minLength),addGroup:(e,t)=>A().then((r=>y((0,p.generateOcsUrl)("cloud/groups"),{groupid:t}).then((r=>(e.commit("addGroup",{gid:t,displayName:t}),{gid:t,displayName:t}))).catch((e=>{throw e})))).catch((r=>{throw e.commit("API_FAILURE",{gid:t,error:r}),r})),renameGroup(e,t){let{groupid:r,displayName:s}=t;return A().then((t=>b((0,p.generateOcsUrl)("cloud/groups/{groupId}",{groupId:encodeURIComponent(r)}),{key:"displayname",value:s}).then((t=>(e.commit("renameGroup",{gid:r,displayName:s}),{groupid:r,displayName:s}))).catch((e=>{throw e})))).catch((t=>{throw e.commit("API_FAILURE",{groupid:r,error:t}),t}))},removeGroup:(e,t)=>A().then((r=>U((0,p.generateOcsUrl)("cloud/groups/{groupId}",{groupId:encodeURIComponent(t)})).then((r=>e.commit("removeGroup",t))).catch((e=>{throw e})))).catch((r=>e.commit("API_FAILURE",{gid:t,error:r}))),addUserGroup(e,t){let{userid:r,gid:s}=t;return A().then((t=>y((0,p.generateOcsUrl)("cloud/users/{userid}/groups",{userid:r}),{groupid:s}).then((t=>e.commit("addUserGroup",{userid:r,gid:s}))).catch((e=>{throw e})))).catch((t=>e.commit("API_FAILURE",{userid:r,error:t})))},removeUserGroup(e,t){let{userid:r,gid:s}=t;return A().then((t=>U((0,p.generateOcsUrl)("cloud/users/{userid}/groups",{userid:r}),{groupid:s}).then((t=>e.commit("removeUserGroup",{userid:r,gid:s}))).catch((e=>{throw e})))).catch((t=>{throw e.commit("API_FAILURE",{userid:r,error:t}),t}))},addUserSubAdmin(e,t){let{userid:r,gid:s}=t;return A().then((t=>y((0,p.generateOcsUrl)("cloud/users/{userid}/subadmins",{userid:r}),{groupid:s}).then((t=>e.commit("addUserSubAdmin",{userid:r,gid:s}))).catch((e=>{throw e})))).catch((t=>e.commit("API_FAILURE",{userid:r,error:t})))},removeUserSubAdmin(e,t){let{userid:r,gid:s}=t;return A().then((t=>U((0,p.generateOcsUrl)("cloud/users/{userid}/subadmins",{userid:r}),{groupid:s}).then((t=>e.commit("removeUserSubAdmin",{userid:r,gid:s}))).catch((e=>{throw e})))).catch((t=>e.commit("API_FAILURE",{userid:r,error:t})))},wipeUserDevices:(e,t)=>A().then((e=>y((0,p.generateOcsUrl)("cloud/users/{userid}/wipe",{userid:t})).catch((e=>{throw e})))).catch((r=>e.commit("API_FAILURE",{userid:t,error:r}))),deleteUser:(e,t)=>A().then((r=>U((0,p.generateOcsUrl)("cloud/users/{userid}",{userid:t})).then((r=>e.commit("deleteUser",t))).catch((e=>{throw e})))).catch((r=>e.commit("API_FAILURE",{userid:t,error:r}))),addUser(e,t){let{commit:r,dispatch:s}=e,{userid:a,password:o,displayName:i,email:n,groups:d,subadmin:c,quota:u,language:l,manager:m}=t;return A().then((e=>y((0,p.generateOcsUrl)("cloud/users"),{userid:a,password:o,displayName:i,email:n,groups:d,subadmin:c,quota:u,language:l,manager:m}).then((e=>s("addUserData",a||e.data.ocs.data.id))).catch((e=>{throw e})))).catch((e=>{throw r("API_FAILURE",{userid:a,error:e}),e}))},addUserData:(e,t)=>A().then((r=>I((0,p.generateOcsUrl)("cloud/users/{userid}",{userid:t})).then((t=>e.commit("addUserData",t))).catch((e=>{throw e})))).catch((r=>e.commit("API_FAILURE",{userid:t,error:r}))),enableDisableUser(e,t){let{userid:r,enabled:s=!0}=t;const a=s?"enable":"disable";return A().then((t=>b((0,p.generateOcsUrl)("cloud/users/{userid}/{userStatus}",{userid:r,userStatus:a})).then((t=>e.commit("enableDisableUser",{userid:r,enabled:s}))).catch((e=>{throw e})))).catch((t=>e.commit("API_FAILURE",{userid:r,error:t})))},setUserData(e,t){let{userid:r,key:s,value:a}=t;const o=["email","displayname","manager"];return-1!==["email","language","quota","displayname","password","manager"].indexOf(s)&&"string"==typeof a&&(-1===o.indexOf(s)&&a.length>0||-1!==o.indexOf(s))?A().then((t=>b((0,p.generateOcsUrl)("cloud/users/{userid}",{userid:r}),{key:s,value:a}).then((t=>e.commit("setUserData",{userid:r,key:s,value:a}))).catch((e=>{throw e})))).catch((t=>e.commit("API_FAILURE",{userid:r,error:t}))):Promise.reject(new Error("Invalid request data"))},sendWelcomeMail:(e,t)=>A().then((e=>y((0,p.generateOcsUrl)("cloud/users/{userid}/welcome",{userid:t})).then((e=>!0)).catch((e=>{throw e})))).catch((r=>e.commit("API_FAILURE",{userid:t,error:r})))}};var R=s(64024),D=(s(36144),s(25108));const F={APPS_API_FAILURE(e,r){(0,R.x2)(t("settings","An error occurred during the request. Unable to proceed.")+"<br>"+r.error.response.data.data.message,{isHTML:!0}),D.error(e,r)},initCategories(e,t){let{categories:r,updateCount:s}=t;e.categories=r,e.updateCount=s},updateCategories(e,t){e.gettingCategoriesPromise=t},setUpdateCount(e,t){e.updateCount=t},addCategory(e,t){e.categories.push(t)},appendCategories(e,t){e.categories=t},setAllApps(e,t){e.apps=t},setError(e,t){let{appId:r,error:s}=t;Array.isArray(r)||(r=[r]),r.forEach((t=>{e.apps.find((e=>e.id===t)).error=s}))},clearError(e,t){let{appId:r,error:s}=t;e.apps.find((e=>e.id===r)).error=null},enableApp(e,t){let{appId:r,groups:s}=t;const a=e.apps.find((e=>e.id===r));a.active=!0,a.groups=s},disableApp(e,t){const r=e.apps.find((e=>e.id===t));r.active=!1,r.groups=[],r.removable&&(r.canUnInstall=!0)},uninstallApp(e,t){e.apps.find((e=>e.id===t)).active=!1,e.apps.find((e=>e.id===t)).groups=[],e.apps.find((e=>e.id===t)).needsDownload=!0,e.apps.find((e=>e.id===t)).installed=!1,e.apps.find((e=>e.id===t)).canUnInstall=!1,e.apps.find((e=>e.id===t)).canInstall=!0},updateApp(e,t){const r=e.apps.find((e=>e.id===t)),s=r.update;r.update=null,r.version=s,e.updateCount--},resetApps(e){e.apps=[]},reset(e){e.apps=[],e.categories=[],e.updateCount=0},startLoading(e,t){Array.isArray(t)?t.forEach((t=>{a.default.set(e.loading,t,!0)})):a.default.set(e.loading,t,!0)},stopLoading(e,t){Array.isArray(t)?t.forEach((t=>{a.default.set(e.loading,t,!1)})):a.default.set(e.loading,t,!1)}},k={enableApp(e,r){let s,{appId:a,groups:o}=r;return s=Array.isArray(a)?a:[a],A().then((r=>(e.commit("startLoading",s),e.commit("startLoading","install"),y((0,p.generateUrl)("settings/apps/enable"),{appIds:s,groups:o}).then((r=>(e.commit("stopLoading",s),e.commit("stopLoading","install"),s.forEach((t=>{e.commit("enableApp",{appId:t,groups:o})})),I((0,p.generateUrl)("apps/files")).then((()=>{r.data.update_required&&((0,R.JQ)(t("settings","The app has been enabled but needs to be updated. You will be redirected to the update page in 5 seconds."),{onClick:()=>window.location.reload(),close:!1}),setTimeout((function(){location.reload()}),5e3))})).catch((()=>{Array.isArray(a)||e.commit("setError",{appId:s,error:t("settings","Error: This app cannot be enabled because it makes the server unstable")})}))))).catch((t=>{e.commit("stopLoading",s),e.commit("stopLoading","install"),e.commit("setError",{appId:s,error:t.response.data.data.message}),e.commit("APPS_API_FAILURE",{appId:a,error:t})}))))).catch((t=>e.commit("API_FAILURE",{appId:a,error:t})))},forceEnableApp(e,t){let r,{appId:s,groups:a}=t;return r=Array.isArray(s)?s:[s],A().then((()=>(e.commit("startLoading",r),e.commit("startLoading","install"),y((0,p.generateUrl)("settings/apps/force"),{appId:s}).then((e=>{location.reload()})).catch((t=>{e.commit("stopLoading",r),e.commit("stopLoading","install"),e.commit("setError",{appId:r,error:t.response.data.data.message}),e.commit("APPS_API_FAILURE",{appId:s,error:t})}))))).catch((t=>e.commit("API_FAILURE",{appId:s,error:t})))},disableApp(e,t){let r,{appId:s}=t;return r=Array.isArray(s)?s:[s],A().then((t=>(e.commit("startLoading",r),y((0,p.generateUrl)("settings/apps/disable"),{appIds:r}).then((t=>(e.commit("stopLoading",r),r.forEach((t=>{e.commit("disableApp",t)})),!0))).catch((t=>{e.commit("stopLoading",r),e.commit("APPS_API_FAILURE",{appId:s,error:t})}))))).catch((t=>e.commit("API_FAILURE",{appId:s,error:t})))},uninstallApp(e,t){let{appId:r}=t;return A().then((t=>(e.commit("startLoading",r),I((0,p.generateUrl)("settings/apps/uninstall/".concat(r))).then((t=>(e.commit("stopLoading",r),e.commit("uninstallApp",r),!0))).catch((t=>{e.commit("stopLoading",r),e.commit("APPS_API_FAILURE",{appId:r,error:t})}))))).catch((t=>e.commit("API_FAILURE",{appId:r,error:t})))},updateApp(e,t){let{appId:r}=t;return A().then((t=>(e.commit("startLoading",r),e.commit("startLoading","install"),I((0,p.generateUrl)("settings/apps/update/".concat(r))).then((t=>(e.commit("stopLoading","install"),e.commit("stopLoading",r),e.commit("updateApp",r),!0))).catch((t=>{e.commit("stopLoading",r),e.commit("stopLoading","install"),e.commit("APPS_API_FAILURE",{appId:r,error:t})}))))).catch((t=>e.commit("API_FAILURE",{appId:r,error:t})))},getAllApps:e=>(e.commit("startLoading","list"),I((0,p.generateUrl)("settings/apps/list")).then((t=>(e.commit("setAllApps",t.data.apps),e.commit("stopLoading","list"),!0))).catch((t=>e.commit("API_FAILURE",t)))),async getCategories(e){let{shouldRefetchCategories:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t||!e.state.gettingCategoriesPromise){e.commit("startLoading","categories");try{const t=I((0,p.generateUrl)("settings/apps/categories"));e.commit("updateCategories",t);const r=await t;return r.data.length>0?(e.commit("appendCategories",r.data),e.commit("stopLoading","categories"),!0):(e.commit("stopLoading","categories"),!1)}catch(t){e.commit("API_FAILURE",t)}}return e.state.gettingCategoriesPromise}},M={state:{apps:[],categories:[],updateCount:0,loading:{},loadingList:!1,gettingCategoriesPromise:null},mutations:F,getters:{loading:e=>function(t){return e.loading[t]},getCategories:e=>e.categories,getAllApps:e=>e.apps,getUpdateCount:e=>e.updateCount,getCategoryById:e=>t=>e.categories.find((e=>e.id===t))},actions:k},x={state:{serverData:{}},mutations:{setServerData(e,t){e.serverData=t}},getters:{getServerData:e=>e.serverData},actions:{}},j={state:{},mutations:{},getters:{},actions:{setAppConfig(e,t){let{app:r,key:s,value:a}=t;return A().then((e=>y((0,p.generateOcsUrl)("apps/provisioning_api/api/v1/config/apps/{app}/{key}",{app:r,key:s}),{value:a}).catch((e=>{throw e})))).catch((t=>e.commit("API_FAILURE",{app:r,key:s,value:a,error:t})))}}};var N=s(25108);a.default.use(m.ZP);const S={API_FAILURE(e,r){try{const e=r.error.response.data.ocs.meta.message;(0,R.x2)(t("settings","An error occurred during the request. Unable to proceed.")+"<br>"+e,{isHTML:!0})}catch(e){(0,R.x2)(t("settings","An error occurred during the request. Unable to proceed."))}N.error(e,r)}},T=new m.yh({modules:{users:_,apps:M,settings:x,oc:j},strict:!1,mutations:S});s(79954);const G=()=>Promise.all([s.e(7874),s.e(8351)]).then(s.bind(s,70260)),B=()=>Promise.all([s.e(7874),s.e(7418)]).then(s.bind(s,72845));a.default.use(u.ZP);const Z=document.title,z=new u.ZP({mode:"history",base:(0,p.generateUrl)(""),linkActiveClass:"active",routes:[{path:"/:index(index.php/)?settings/users",component:G,props:!0,name:"users",meta:{title:()=>t("settings","Active users")},children:[{path:":selectedGroup",name:"group",meta:{title:e=>"admin"===e.params.selectedGroup?t("settings","Admins"):"disabled"===e.params.selectedGroup?t("settings","Disabled users"):decodeURIComponent(e.params.selectedGroup)},component:G}]},{path:"/:index(index.php/)?settings/apps",component:B,props:!0,name:"apps",meta:{title:()=>t("settings","Your apps")},children:[{path:":category",name:"apps-category",meta:{title:async e=>{if("apps"===e.name)return t("settings","Your apps");if(l.J[e.params.category])return l.J[e.params.category];await T.dispatch("getCategories");const r=T.getters.getCategoryById(e.params.category);return r.displayName?r.displayName:void 0}},component:B,children:[{path:":id",name:"apps-details",component:B}]}]}]});z.afterEach((async e=>{var t,r;const s=await(null===(t=(r=e.meta).title)||void 0===t?void 0:t.call(r,e));s?(document.title="".concat(s," - ").concat(Z),function(e){const t=document.getElementById("page-heading-level-1");t&&(t.textContent=e)}(s)):document.title=Z}));const H=z;a.default.use(o.default,{defaultHtml:!1}),(0,i.Z)(T,H),s.nc=btoa(OC.requestToken),a.default.prototype.t=t,a.default.prototype.n=n,a.default.prototype.OC=OC,a.default.prototype.OCA=OCA,a.default.prototype.oc_userconfig=oc_userconfig,new a.default({router:H,store:T,render:e=>e(c)}).$mount("#content")},81490:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6Ii8+Cjwvc3ZnPgo="},90888:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6IiBzdHlsZT0iZmlsbC1vcGFjaXR5OjE7ZmlsbDojZmZmZmZmIi8+Cjwvc3ZnPgo="}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=a,e=[],i.O=(t,r,s,a)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],s=e[u][1],a=e[u][2];for(var n=!0,d=0;d<r.length;d++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](r[d])))?r.splice(d--,1):(n=!1,a<o&&(o=a));if(n){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,s,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>({7418:"settings-apps-view",8351:"settings-users"}[e]+"-"+e+".js?v="+{7418:"faf2213249ab04354b2e",8351:"706ed004a7f00d5c5655"}[e]),i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},s="nextcloud:",i.l=(e,t,a,o)=>{if(r[e])r[e].push(t);else{var n,d;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==s+a){n=p;break}}n||(d=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.setAttribute("data-webpack",s+a),n.src=e),r[e]=[t];var l=(t,s)=>{n.onerror=n.onload=null,clearTimeout(m);var a=r[e];if(delete r[e],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(s))),t)return t(s)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),d&&document.head.appendChild(n)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.j=8562,(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{i.b=document.baseURI||self.location.href;var e={8562:0};i.f.j=(t,r)=>{var s=i.o(e,t)?e[t]:void 0;if(0!==s)if(s)r.push(s[2]);else{var a=new Promise(((r,a)=>s=e[t]=[r,a]));r.push(s[2]=a);var o=i.p+i.u(t),n=new Error;i.l(o,(r=>{if(i.o(e,t)&&(0!==(s=e[t])&&(e[t]=void 0),s)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",n.name="ChunkLoadError",n.type=a,n.request=o,s[1](n)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var s,a,o=r[0],n=r[1],d=r[2],c=0;if(o.some((t=>0!==e[t]))){for(s in n)i.o(n,s)&&(i.m[s]=n[s]);if(d)var u=d(i)}for(t&&t(r);c<o.length;c++)a=o[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(u)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),i.nc=void 0;var d=i.O(void 0,[7874],(()=>i(9685)));d=i.O(d)})();
//# sourceMappingURL=settings-vue-settings-apps-users-management.js.map?v=dee7a880e3e6cb6e8571