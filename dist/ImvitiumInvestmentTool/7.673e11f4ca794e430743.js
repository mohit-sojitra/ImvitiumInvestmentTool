(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"43Gc":function(n,e,t){"use strict";t.r(e),t.d(e,"AuthModule",(function(){return j}));var o=t("ofXK"),i=t("3Pt+"),r=t("tyNb"),c=t("fXoL"),s=t("lGQG"),a=t("OC8m"),b=t("Kq05");function l(n,e){1&n&&c.Jb(0,"app-loading-spinner")}function d(n,e){1&n&&(c.Nb(0,"small",17),c.lc(1,"Invalid Input"),c.Mb())}function u(n,e){1&n&&(c.Nb(0,"small",17),c.lc(1,"Short Password"),c.Mb())}let g=(()=>{class n{constructor(n,e,t,o){this.AuthService=n,this.route=e,this.activatedRoute=t,this.NotificationService=o,this.isLoading=!1}ngOnInit(){this.activatedRoute.params.subscribe(n=>{console.log(n.token),n.token&&this.AuthService.verifyToken(n.token).subscribe(n=>{console.log(n),this.NotificationService.showSuccess(n,"Message")},n=>{console.log(n)})})}onSubmit(n){this.isLoading=!0,this.AuthService.onLogin(n.value.email,n.value.password).subscribe(n=>{this.isLoading=!1,console.log(this.AuthService.getUser()),this.route.navigate("admin"===n.register.type?["/admin"]:["/edituser"])},n=>{this.isLoading=!1,console.log(n),alert(n)})}}return n.\u0275fac=function(e){return new(e||n)(c.Ib(s.a),c.Ib(r.b),c.Ib(r.a),c.Ib(a.a))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-login"]],decls:31,vars:3,consts:[[4,"ngIf"],[1,"background-div"],[1,"container"],[1,"row","justify-content-center","align-items-center"],["id","login-column",1,"form-group","col-md-4"],[3,"ngSubmit"],["loginForm","ngForm"],[1,"row","justify-content-center","align-items-center","h1"],["type","text","ngModel","","name","email","required","",1,"form-control","input-text"],["name","ngModel"],["class","text-danger",4,"ngIf"],["type","password","name","password","ngModel","","required","","minlength","6",1,"form-control","input-text"],["password","ngModel"],["type","checkbox","ngModel","","name","rememberMe"],["type","submit",1,"center"],["routerLink","/auth/forgetpassword","routerLinkActive","active",1,"row","justify-content-center","align-items-center",2,"color","white"],["routerLink","/auth/signup","routerLinkActive","active",1,"row","justify-content-center","align-items-center",2,"color","white"],[1,"text-danger"]],template:function(n,e){if(1&n){const n=c.Ob();c.kc(0,l,1,0,"app-loading-spinner",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Nb(3,"div",3),c.Nb(4,"div",4),c.Nb(5,"form",5,6),c.Ub("ngSubmit",(function(){c.dc(n);const t=c.cc(6);return e.onSubmit(t)})),c.Nb(7,"div",7),c.lc(8," LOGIN "),c.Mb(),c.lc(9," username | email "),c.Jb(10,"br"),c.Jb(11,"input",8,9),c.kc(13,d,2,0,"small",10),c.Jb(14,"br"),c.lc(15," Passsword "),c.Jb(16,"br"),c.Jb(17,"input",11,12),c.kc(19,u,2,0,"small",10),c.Jb(20,"br"),c.Jb(21,"input",13),c.lc(22," Remember Me "),c.Jb(23,"br"),c.Jb(24,"br"),c.Nb(25,"button",14),c.lc(26," LOGIN "),c.Mb(),c.Nb(27,"a",15),c.lc(28,"Forget Password?"),c.Mb(),c.Nb(29,"a",16),c.lc(30,"Not an User ? Sign Up"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()}if(2&n){const n=c.cc(12),t=c.cc(18);c.Xb("ngIf",e.isLoading),c.xb(13),c.Xb("ngIf",n.invalid&&n.touched),c.xb(6),c.Xb("ngIf",t.invalid&&t.touched)}},directives:[o.j,i.w,i.m,i.n,i.b,i.l,i.o,i.s,i.k,i.a,r.e,r.d,b.a],styles:[".container{color:#fff}.background-div{height:100%;background-image:url(img-left.44c52e0857a70b801f31.png),url(img-right.978febb0f1f6f8e2fc82.png);background-size:contain,contain;background-repeat:no-repeat,no-repeat;background-position:0,100%}@media only screen and (max-width:600px){.background-div{height:100%;background-image:url(img-right.978febb0f1f6f8e2fc82.png);background-size:contain;background-repeat:no-repeat;background-position:0}}"],encapsulation:2}),n})();var m=t("tk/3");function p(n,e){1&n&&c.Jb(0,"app-loading-spinner")}function f(n,e){1&n&&(c.Nb(0,"small",23),c.lc(1,"Invalid name"),c.Mb())}function h(n,e){1&n&&(c.Nb(0,"small",23),c.lc(1,"Invalid email"),c.Mb())}function v(n,e){1&n&&(c.Nb(0,"small",23),c.lc(1,"Invalid username"),c.Mb())}function w(n,e){1&n&&(c.Nb(0,"small",23),c.lc(1,"Invalid password"),c.Mb())}function M(n,e){1&n&&(c.Nb(0,"small",23),c.lc(1,"Password not matched"),c.Mb())}let N=(()=>{class n{constructor(n,e,t,o){this.http=n,this.AuthService=e,this.NotificationService=t,this.route=o,this.isLoading=!1}ngOnInit(){}onSubmit(n){const e={name:n.value.name,email:n.value.email,password:n.value.password,username:n.value.username};console.log(e),this.isLoading=!0,this.AuthService.onRegister(e).subscribe(n=>{this.isLoading=!1,console.log(n),alert("Please verify your email address"),this.NotificationService.showSuccess("Success ",n),this.route.navigate(["/auth/login"])},n=>{this.isLoading=!1,this.NotificationService.showError("error","Email or password has been taken")})}}return n.\u0275fac=function(e){return new(e||n)(c.Ib(m.b),c.Ib(s.a),c.Ib(a.a),c.Ib(r.b))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-signup"]],decls:46,vars:7,consts:[[4,"ngIf"],[1,"container-fluid"],[1,"row","justify-content-center","align-items-center"],[1,"col-md-8"],["src","../../../assets/signup-bg.png","alt","","srcset","","width","75%",1,"hidden-xs","hidden-sm",2,"margin-left","-20px"],[1,"col-md-4"],["id","login-column",1,"form-group"],[3,"ngSubmit"],["loginForm","ngForm"],[1,"row","justify-content-center","align-items-center","h4",2,"color","white"],["type","text","ngModel","","name","name","required","",1,"form-control","input-text"],["name","ngModel"],["class","text-danger",4,"ngIf"],["type","email","name","email","pattern","^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$","ngModel","","required","","minlength","6",1,"form-control","input-text"],["email","ngModel"],["type","text","name","username","ngModel","","required","","minlength","6",1,"form-control","input-text"],["username","ngModel"],["type","password","name","password","ngModel","","required","","minlength","6",1,"form-control","input-text"],["password","ngModel"],["type","password","name","comfrim-password","ngModel","","required","","minlength","6",1,"form-control","input-text"],["ConfirmPassword","ngModel"],["type","submit",1,"center",3,"disabled"],["routerLinkActive","true","routerLink","/auth/login",1,"row","justify-content-center","align-items-center",2,"color","white"],[1,"text-danger"]],template:function(n,e){if(1&n){const n=c.Ob();c.kc(0,p,1,0,"app-loading-spinner",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Nb(3,"div",3),c.Jb(4,"img",4),c.Mb(),c.Nb(5,"div",5),c.Nb(6,"div",6),c.Nb(7,"form",7,8),c.Ub("ngSubmit",(function(){c.dc(n);const t=c.cc(8);return e.onSubmit(t)})),c.Nb(9,"div",9),c.lc(10," SIGN UP "),c.Mb(),c.lc(11," name "),c.Jb(12,"br"),c.Jb(13,"input",10,11),c.kc(15,f,2,0,"small",12),c.Jb(16,"br"),c.lc(17," E-mail "),c.Jb(18,"br"),c.Jb(19,"input",13,14),c.kc(21,h,2,0,"small",12),c.Jb(22,"br"),c.lc(23," username "),c.Jb(24,"br"),c.Jb(25,"input",15,16),c.kc(27,v,2,0,"small",12),c.Jb(28,"br"),c.lc(29," Passsword "),c.Jb(30,"br"),c.Jb(31,"input",17,18),c.kc(33,w,2,0,"small",12),c.Jb(34,"br"),c.lc(35," Confirm Passsword "),c.Jb(36,"br"),c.Jb(37,"input",19,20),c.kc(39,M,2,0,"small",12),c.Jb(40,"br"),c.Jb(41,"br"),c.Nb(42,"button",21),c.lc(43," SIGN-UP "),c.Mb(),c.Nb(44,"a",22),c.lc(45,"Already Have Account ? Log In"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()}if(2&n){const n=c.cc(8),t=c.cc(14),o=c.cc(20),i=c.cc(26),r=c.cc(32),s=c.cc(38);c.Xb("ngIf",e.isLoading),c.xb(15),c.Xb("ngIf",t.invalid&&t.touched),c.xb(6),c.Xb("ngIf",o.invalid&&o.touched),c.xb(6),c.Xb("ngIf",i.invalid&&i.touched),c.xb(6),c.Xb("ngIf",r.invalid&&r.touched),c.xb(6),c.Xb("ngIf",s.touched&&!(r.value==s.value)),c.xb(3),c.Xb("disabled",!n.valid)}},directives:[o.j,i.w,i.m,i.n,i.b,i.l,i.o,i.s,i.q,i.k,r.e,r.d,b.a],styles:[".container-fluid[_ngcontent-%COMP%]{color:#fff}input[_ngcontent-%COMP%]{height:30px}"]}),n})();function x(n,e){1&n&&(c.Nb(0,"small",11),c.lc(1,"Invalid Input"),c.Mb())}let I=(()=>{class n{constructor(n,e,t){this.authService=n,this.notificationService=e,this.router=t}ngOnInit(){}onSubmit(n){this.authService.OnForgetPassword(n.value.name).subscribe(n=>{console.log(n),this.notificationService.showInfo(n,""),this.router.navigate(["/"])})}}return n.\u0275fac=function(e){return new(e||n)(c.Ib(s.a),c.Ib(a.a),c.Ib(r.b))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-forget-password"]],decls:16,vars:2,consts:[[1,"container"],[1,"row","justify-content-center","align-items-center"],[1,"col-md-6",2,"margin-top","50px"],["id","login-column",1,"form-group"],[3,"ngSubmit"],["ContactForm","ngForm"],[1,"row","justify-content-center","align-items-center","h2"],["type","email","ngModel","","name","name","pattern","^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$","required","","minlength","6",1,"form-control","input-text"],["name","ngModel"],["class","text-danger",4,"ngIf"],["type","submit",2,"background-color","darkblue",3,"disabled"],[1,"text-danger"]],template:function(n,e){if(1&n){const n=c.Ob();c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Nb(3,"div",3),c.Nb(4,"form",4,5),c.Ub("ngSubmit",(function(){c.dc(n);const t=c.cc(5);return e.onSubmit(t)})),c.Nb(6,"div",6),c.lc(7," Forget Password "),c.Mb(),c.lc(8," Email"),c.Jb(9,"br"),c.Jb(10,"input",7,8),c.kc(12,x,2,0,"small",9),c.Jb(13,"br"),c.Nb(14,"button",10),c.lc(15," SUBMIT "),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()}if(2&n){const n=c.cc(5),e=c.cc(11);c.xb(12),c.Xb("ngIf",e.invalid&&e.touched),c.xb(2),c.Xb("disabled",!n.valid)}},directives:[i.w,i.m,i.n,i.b,i.l,i.o,i.q,i.s,i.k,o.j],styles:[".container[_ngcontent-%COMP%]{color:#fff}"]}),n})();function k(n,e){1&n&&(c.Nb(0,"p"),c.lc(1,"password is required"),c.Mb())}function y(n,e){if(1&n&&(c.Nb(0,"div",17),c.kc(1,k,2,0,"p",18),c.Mb()),2&n){c.Wb();const n=c.cc(11);c.xb(1),c.Xb("ngIf",n.errors.required)}}function S(n,e){1&n&&(c.Nb(0,"p"),c.lc(1,"password is required"),c.Mb())}function P(n,e){1&n&&(c.Nb(0,"pre"),c.lc(1,"                        At least 1 Uppercase\n                        At least 1 Lowercase\n                        At least 1 Number\n                        At least 1 Special Character\n                        Min 8 chars and Max 12 chars\n                      "),c.Mb())}function J(n,e){if(1&n&&(c.Nb(0,"div",17),c.kc(1,S,2,0,"p",18),c.kc(2,P,2,0,"pre",18),c.Mb()),2&n){c.Wb();const n=c.cc(18);c.xb(1),c.Xb("ngIf",n.errors.required),c.xb(1),c.Xb("ngIf",n.errors.pattern)}}function C(n,e){1&n&&(c.Nb(0,"p"),c.lc(1,"Confirm password is required"),c.Mb())}function X(n,e){1&n&&(c.Nb(0,"p"),c.lc(1,"Password and confirm password not matching"),c.Mb())}function q(n,e){if(1&n&&(c.Nb(0,"div",17),c.kc(1,C,2,0,"p",18),c.kc(2,X,2,0,"p",18),c.Mb()),2&n){c.Wb();const n=c.cc(24);c.xb(1),c.Xb("ngIf",n.errors.required),c.xb(1),c.Xb("ngIf",!n.errors.required)}}const O=function(n,e){return{"is-invalid":n,"is-valid":e}};let A=(()=>{class n{constructor(n){this.authService=n}ngOnInit(){}onChangePassword(n){this.oldPassword=n.value.opassword,this.newPassword=n.value.password,this.authService.changePassword(this.oldPassword,this.newPassword).subscribe(n=>{console.log(n)},n=>{console.log(n)})}}return n.\u0275fac=function(e){return new(e||n)(c.Ib(s.a))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-change-password"]],decls:29,vars:16,consts:[[1,"container"],[1,"row","justify-content-center","center-margin"],[1,"col-md-5","col-xl-5","col-sm-5","max-auto","text-center"],[3,"ngSubmit"],["form","ngForm"],[1,"form-group","text-left"],["for","password"],["type","password","name","opassword","ngModel","","required","","validateEqual","confirmPassword","reverse","true",1,"form-control",3,"ngClass"],["opassword","ngModel"],["class","invalid-feedback text-right",4,"ngIf"],["type","password","name","password","ngModel","","required","","validateEqual","confirmPassword","reverse","true","minlength","6",1,"form-control",3,"ngClass"],["password","ngModel"],["for","conform-password"],["type","password","name","conform-password","ngModel","","required","","validateEqual","password",1,"form-control",3,"ngClass"],["confirmPassword","ngModel"],[1,"form-group"],["type","submit",1,"center","btn",3,"disabled"],[1,"invalid-feedback","text-right"],[4,"ngIf"]],template:function(n,e){if(1&n){const n=c.Ob();c.Nb(0,"div",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Nb(3,"form",3,4),c.Ub("ngSubmit",(function(){c.dc(n);const t=c.cc(4);return e.onChangePassword(t)})),c.Nb(5,"h2"),c.lc(6,"Change Password"),c.Mb(),c.Nb(7,"div",5),c.Nb(8,"label",6),c.lc(9,"Old Password"),c.Mb(),c.Jb(10,"input",7,8),c.kc(12,y,2,1,"div",9),c.Mb(),c.Jb(13,"hr"),c.Nb(14,"div",5),c.Nb(15,"label",6),c.lc(16,"Password"),c.Mb(),c.Jb(17,"input",10,11),c.kc(19,J,3,2,"div",9),c.Mb(),c.Nb(20,"div",5),c.Nb(21,"label",12),c.lc(22,"Confirm Password"),c.Mb(),c.Jb(23,"input",13,14),c.kc(25,q,3,2,"div",9),c.Mb(),c.Nb(26,"div",15),c.Nb(27,"button",16),c.lc(28," SUBMIT "),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()}if(2&n){const n=c.cc(4),e=c.cc(11),t=c.cc(18),o=c.cc(24);c.xb(10),c.Xb("ngClass",c.ac(7,O,e.touched&&e.invalid,!e.invalid)),c.xb(2),c.Xb("ngIf",e.invalid&&e.touched),c.xb(5),c.Xb("ngClass",c.ac(10,O,t.touched&&t.invalid,!t.invalid)),c.xb(2),c.Xb("ngIf",t.invalid&&t.touched),c.xb(4),c.Xb("ngClass",c.ac(13,O,o.touched&&o.invalid,o.valid)),c.xb(2),c.Xb("ngIf",o.invalid&&o.touched),c.xb(2),c.Xb("disabled",!n.valid)}},directives:[i.w,i.m,i.n,i.b,i.l,i.o,i.s,o.h,o.j,i.k],styles:[".container[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{color:#fff}button[_ngcontent-%COMP%]{background-color:#394e78;border-radius:20px}input[_ngcontent-%COMP%]{background-color:#85d6dd;border-radius:25px}h2[_ngcontent-%COMP%]{margin-top:30px}hr[_ngcontent-%COMP%]{border:1px dotted #fff}.center-margin[_ngcontent-%COMP%]{margin-right:140px}@media (max-width:800px){.center-margin[_ngcontent-%COMP%]{margin-right:0}}"]}),n})();var L=t("Ymua");let j=(()=>{class n{}return n.\u0275mod=c.Gb({type:n}),n.\u0275inj=c.Fb({factory:function(e){return new(e||n)},imports:[[L.a,m.c,i.j,o.b,r.f.forChild([{path:"login",component:g},{path:"login/:token",component:g},{path:"signup",component:N},{path:"forgetpassword",component:I},{path:"changepassword",component:A}])]]}),n})()}}]);