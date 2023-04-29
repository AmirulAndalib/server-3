/*! For license information please see files_trashbin-files_trashbin.js.LICENSE.txt */
!function(){var e,i={6564:function(){OCA.Trashbin={},OCA.Trashbin.App={_initialized:!1,client:null,initialize:function(e){if(!this._initialized){this._initialized=!0,this.client=new OC.Files.Client({host:OC.getHost(),port:OC.getPort(),root:OC.linkToRemoteBase("dav")+"/trashbin/"+OC.getCurrentUser().uid,useHTTPS:"https"===OC.getProtocol()});var i=OC.Util.History.parseUrlQuery();this.fileList=new OCA.Trashbin.FileList($("#app-content-trashbin"),{fileActions:this._createFileActions(),detailsViewEnabled:!1,scrollTo:i.scrollto,config:OCA.Files.App.getFilesConfig(),multiSelectMenu:[{name:"restore",displayName:t("files_trashbin","Restore"),iconClass:"icon-history"},{name:"delete",displayName:t("files_trashbin","Delete permanently"),iconClass:"icon-delete"}],client:this.client,shown:!0})}},_createFileActions:function(){var e=this.client,i=new OCA.Files.FileActions;return i.register("dir","Open",OC.PERMISSION_READ,"",(function(e,t){var i=t.fileList.getCurrentDirectory();t.fileList.changeDirectory(OC.joinPaths(i,e))})),i.setDefault("dir","Open"),i.registerAction({name:"Restore",displayName:t("files_trashbin","Restore"),type:OCA.Files.FileActions.TYPE_INLINE,mime:"all",permissions:OC.PERMISSION_READ,iconClass:"icon-history",actionHandler:function(i,n){var r=n.fileList,a=r.findFileEl(i);r.showFileBusyState(a,!0);var s=n.fileList.getCurrentDirectory();e.move(OC.joinPaths("trash",s,i),OC.joinPaths("restore",i),!0).then(r._removeCallback.bind(r,[i]),(function(){r.showFileBusyState(a,!1),OC.Notification.show(t("files_trashbin","Error while restoring file from trash bin"))}))}}),i.registerAction({name:"Delete",displayName:t("files_trashbin","Delete permanently"),mime:"all",permissions:OC.PERMISSION_READ,iconClass:"icon-delete",render:function(e,n,r){var a=i._makeActionLink(e,r);return a.attr("original-title",t("files_trashbin","Delete permanently")),a.children("img").attr("alt",t("files_trashbin","Delete permanently")),r.$file.find("td:last").append(a),a},actionHandler:function(i,n){var r=n.fileList;$(".tipsy").remove();var a=r.findFileEl(i);r.showFileBusyState(a,!0);var s=n.fileList.getCurrentDirectory();e.remove(OC.joinPaths("trash",s,i)).then(r._removeCallback.bind(r,[i]),(function(){r.showFileBusyState(a,!1),OC.Notification.show(t("files_trashbin","Error while removing file from trash bin"))}))}}),i}},window.addEventListener("DOMContentLoaded",(function(){$("#app-content-trashbin").one("show",(function(){OCA.Trashbin.App.initialize($("#app-content-trashbin"))}))}))},92832:function(){!function(){var e=new RegExp(/^(.+)\.d[0-9]+$/),i="{http://nextcloud.org/ns}trashbin-filename",n="{http://nextcloud.org/ns}trashbin-deletion-time",r="{http://nextcloud.org/ns}trashbin-original-location",a="{http://nextcloud.org/ns}trashbin-title";function s(t){t=OC.basename(t);var i=e.exec(t);return i&&i.length>1&&(t=i[1]),t}var o=function(e,t){this.client=t.client,this.initialize(e,t)};o.prototype=_.extend({},OCA.Files.FileList.prototype,{id:"trashbin",appName:t("files_trashbin","Deleted files"),client:null,initialize:function(){this.client.addFileInfoParser((function(e,t){var s=e.propStat[0].properties,o=s[r],l=s[a];return{displayName:s[i],mtime:1e3*parseInt(s[n],10),hasPreview:!0,path:o,extraData:l}}));var e=OCA.Files.FileList.prototype.initialize.apply(this,arguments);return this.$el.find(".undelete").click("click",_.bind(this._onClickRestoreSelected,this)),this.setSort("mtime","desc"),this.breadcrumb._makeCrumbs=function(){for(var e=OCA.Files.BreadCrumb.prototype._makeCrumbs.apply(this,[].concat(Array.prototype.slice.call(arguments),["icon-delete no-hover"])),t=1;t<e.length;t++)e[t].name=s(e[t].name);return e},OC.Plugins.attach("OCA.Trashbin.FileList",this),e},getDirectoryPermissions:function(){return OC.PERMISSION_READ|OC.PERMISSION_DELETE},_setCurrentDir:function(e){OCA.Files.FileList.prototype._setCurrentDir.apply(this,arguments);var t=OC.basename(e);""!==t&&this.setPageTitle(s(t))},_createRow:function(){var e=OCA.Files.FileList.prototype._createRow.apply(this,arguments);return e.find("td.filesize").remove(),e},getAjaxUrl:function(e,t){var i="";return t&&(i="?"+OC.buildQueryString(t)),OC.filePath("files_trashbin","ajax",e+".php")+i},setupUploadEvents:function(){},linkTo:function(e){return OC.linkTo("files","index.php")+"?view=trashbin&dir="+encodeURIComponent(e).replace(/%2F/g,"/")},elementToFile:function(e){var t=OCA.Files.FileList.prototype.elementToFile(e);return"/"===this.getCurrentDirectory()&&(t.displayName=s(t.name)),delete t.size,t},updateEmptyContent:function(){var e=this.$fileList.find("tr:first").exists();this.$el.find("#emptycontent").toggleClass("hidden",e),this.$el.find("#filestable th").toggleClass("hidden",!e)},_removeCallback:function(e){for(var t,i=0;i<e.length;i++)t=this.remove(OC.basename(e[i]),{updateSummary:!1}),this.fileSummary.remove({type:t.attr("data-type"),size:t.attr("data-size")});this.fileSummary.update(),this.updateEmptyContent()},_onClickRestoreSelected:function(e){e.preventDefault();for(var i=this,n=_.pluck(this.getSelectedFiles(),"name"),r=0;r<n.length;r++){var a=this.findFileEl(n[r]);this.showFileBusyState(a,!0)}this.fileMultiSelectMenu.toggleLoading("restore",!0);var s=n.map((function(e){return i.client.move(OC.joinPaths("trash",i.getCurrentDirectory(),e),OC.joinPaths("restore",e),!0).then((function(){i._removeCallback([e])}))}));return Promise.all(s).then((function(){i.fileMultiSelectMenu.toggleLoading("restore",!1)}),(function(){OC.Notification.show(t("files_trashbin","Error while restoring files from trash bin"))}))},_onClickDeleteSelected:function(e){e.preventDefault();for(var i=this,n=this.$el.find(".select-all").is(":checked"),r=_.pluck(this.getSelectedFiles(),"name"),a=0;a<r.length;a++){var s=this.findFileEl(r[a]);this.showFileBusyState(s,!0)}if(n)return this.client.remove(OC.joinPaths("trash",this.getCurrentDirectory())).then((function(){i.hideMask(),i.setFiles([])}),(function(){OC.Notification.show(t("files_trashbin","Error while emptying trash bin"))}));this.fileMultiSelectMenu.toggleLoading("delete",!0);var o=r.map((function(e){return i.client.remove(OC.joinPaths("trash",i.getCurrentDirectory(),e)).then((function(){i._removeCallback([e])}))}));return Promise.all(o).then((function(){i.fileMultiSelectMenu.toggleLoading("delete",!1)}),(function(){OC.Notification.show(t("files_trashbin","Error while removing files from trash bin"))}))},_onClickFile:function(e){return"httpd/unix-directory"!==$(this).parent().parent().data("mime")&&e.preventDefault(),OCA.Files.FileList.prototype._onClickFile.apply(this,arguments)},generatePreviewUrl:function(e){return OC.generateUrl("/apps/files_trashbin/preview?")+$.param(e)},getDownloadUrl:function(){return"#"},getDefaultActionUrl:function(){return"#"},updateStorageStatistics:function(){},isSelectedDeletable:function(){return!0},_getWebdavProperties:function(){return[i,n,r,a].concat(this.filesClient.getPropfindProperties())},reload:function(){this._selectedFiles={},this._selectionSummary.clear(),this.$el.find(".select-all").prop("checked",!1),this.showMask(),this._reloadCall&&this._reloadCall.abort(),this._reloadCall=this.client.getFolderContents("trash/"+this.getCurrentDirectory(),{includeParent:!1,properties:this._getWebdavProperties()});var e=this.reloadCallback.bind(this);return this._reloadCall.then(e,e)},reloadCallback:function(e,i){return delete this._reloadCall,this.hideMask(),!(401===e||(403===e?(this.changeDirectory("/"),OC.Notification.show(t("files","This operation is forbidden")),1):500===e?(this.changeDirectory("/"),OC.Notification.show(t("files","This directory is unavailable, please check the logs or contact the administrator")),1):404===e?(this.changeDirectory("/"),1):(0===e||this.setFiles(i),0)))}}),OCA.Trashbin.FileList=o}()},69845:function(e,t,i){"use strict";i(6564),i(92832);var n=i(93379),r=i.n(n),a=i(7795),s=i.n(a),o=i(90569),l=i.n(o),c=i(3565),h=i.n(c),u=i(19216),f=i.n(u),d=i(44589),p=i.n(d),m=i(81412),C={};C.styleTagTransform=p(),C.setAttributes=h(),C.insert=l().bind(null,"head"),C.domAPI=s(),C.insertStyleElement=f(),r()(m.Z,C),m.Z&&m.Z.locals&&m.Z.locals,window.OCA.Trashbin=OCA.Trashbin},81412:function(e,t,i){"use strict";var n=i(87537),r=i.n(n),a=i(23645),s=i.n(a)()(r());s.push([e.id,"#app-content-trashbin tbody tr[data-type=file] td a.name,#app-content-trashbin tbody tr[data-type=file] td a.name span.nametext,#app-content-trashbin tbody tr[data-type=file] td a.name span.nametext span{cursor:default}#app-content-trashbin .summary :last-child{padding:0}#app-content-trashbin #filestable .summary .filesize{display:none}","",{version:3,sources:["webpack://./apps/files_trashbin/src/trash.scss"],names:[],mappings:"AASA,4MAGC,cAAA,CAGD,2CACC,SAAA,CAED,qDACC,YAAA",sourcesContent:['/*\n * Copyright (c) 2014\n *\n * This file is licensed under the Affero General Public License version 3\n * or later.\n *\n * See the COPYING-README file.\n *\n */\n#app-content-trashbin tbody tr[data-type="file"] td a.name,\n#app-content-trashbin tbody tr[data-type="file"] td a.name span.nametext,\n#app-content-trashbin tbody tr[data-type="file"] td a.name span.nametext span {\n\tcursor: default;\n}\n\n#app-content-trashbin .summary :last-child {\n\tpadding: 0;\n}\n#app-content-trashbin #filestable .summary .filesize {\n\tdisplay: none;\n}\n\n'],sourceRoot:""}]),t.Z=s}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return i[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=i,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},e=[],r.O=function(t,i,n,a){if(!i){var s=1/0;for(h=0;h<e.length;h++){i=e[h][0],n=e[h][1],a=e[h][2];for(var o=!0,l=0;l<i.length;l++)(!1&a||s>=a)&&Object.keys(r.O).every((function(e){return r.O[e](i[l])}))?i.splice(l--,1):(o=!1,a<s&&(s=a));if(o){e.splice(h--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var h=e.length;h>0&&e[h-1][2]>a;h--)e[h]=e[h-1];e[h]=[i,n,a]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r.j=2325,function(){r.b=document.baseURI||self.location.href;var e={2325:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,a,s=i[0],o=i[1],l=i[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(l)var h=l(r)}for(t&&t(i);c<s.length;c++)a=s[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(h)},i=self.webpackChunknextcloud=self.webpackChunknextcloud||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}(),r.nc=void 0;var a=r.O(void 0,[7874],(function(){return r(69845)}));a=r.O(a)}();
//# sourceMappingURL=files_trashbin-files_trashbin.js.map?v=4dc57e145c2cf339a0b7