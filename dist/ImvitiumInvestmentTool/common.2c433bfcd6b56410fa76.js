(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"AJ6+":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var i=r("AytR"),a=r("fXoL"),s=r("tk/3");let n=(()=>{class t{constructor(t){this.http=t}getUserlist(t,e){return this.http.get(i.a.baseUrl+"/api/public/api/userlist?page="+t+"&search="+e)}getUserlistByType(t,e,r){return this.http.get(i.a.baseUrl+"/api/public/api/userlist/"+r+"?page="+t+"&search="+e)}getUpdates(){return this.http.get(i.a.baseUrl+"/api/public/api/news")}updateUpdates(t,e){return this.http.put(i.a.baseUrl+"/api/public/api/news/"+t,{id:t,news_update:e})}addUpdates(t){return this.http.post(i.a.baseUrl+"/api/public/api/news",{news_update:t})}deleteUpdate(t){return this.http.delete(i.a.baseUrl+"/api/public/api/news/"+t)}deleteAllUpdate(){return this.http.delete(i.a.baseUrl+"/api/public/api/newsall")}getYoutubeLink(){return this.http.get(i.a.baseUrl+"/api/public/api/link")}setYoutubeLink(t){return this.http.put(i.a.baseUrl+"/api/public/api/link",{link:t})}getSubsribeUserList(){return this.http.get(i.a.baseUrl+"/api/public/api/total")}updateUser(t,e){return this.http.put(i.a.baseUrl+"/api/public/api/userlist/"+t,{account_type:e})}}return t.\u0275fac=function(e){return new(e||t)(a.Rb(s.b))},t.\u0275prov=a.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Kq05:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var i=r("fXoL");let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Cb({type:t,selectors:[["app-loading-spinner"]],decls:2,vars:0,consts:[[1,"loader"],[1,"background-loading"]],template:function(t,e){1&t&&(i.Jb(0,"div",0),i.Jb(1,"div",1))},styles:[".loader[_ngcontent-%COMP%]{border-radius:50%;border:14px solid #85d6dd;border-top-color:#41265e;width:100px;height:100px;animation:spin 2s linear infinite;margin:0;position:absolute;right:45%;top:50%;transform:translate(-50%,-50%);z-index:10000}.background-loading[_ngcontent-%COMP%]{z-index:1000;position:fixed;left:0;top:0;width:100%;height:100%;background-color:#0b072f;opacity:.8}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),t})()},OC8m:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var i=r("fXoL"),a=r("5eHb");let s=(()=>{class t{constructor(t){this.toastr=t}showSuccess(t,e){this.toastr.success(t,e)}showError(t,e){this.toastr.error(t,e)}showInfo(t,e){this.toastr.info(t,e)}showWarning(t,e){this.toastr.warning(t,e)}}return t.\u0275fac=function(e){return new(e||t)(i.Rb(a.b))},t.\u0275prov=i.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);