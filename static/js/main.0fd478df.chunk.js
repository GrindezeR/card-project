(this["webpackJsonpcommand-project"]=this["webpackJsonpcommand-project"]||[]).push([[0],{10:function(e,t,n){e.exports={loginSection:"Login_loginSection__2hVYZ",loginArticle:"Login_loginArticle__3FgVE",loginLegend:"Login_loginLegend__3RTRr",loginForm:"Login_loginForm__2qcL0",username:"Login_username__3Cf4j",password:"Login_password__1y9ru",remember:"Login_remember__vqqTZ",checkbox:"Login_checkbox__34px_","checkbox-remember":"Login_checkbox-remember__Wrm6k",submit:"Login_submit__1ce4K",reset:"Login_reset__3_Fdk"}},12:function(e,t,n){e.exports={registration:"Register_registration__3IhAr",registerSection:"Register_registerSection__3u9M5",registerArticle:"Register_registerArticle__1xrf7",registerForm:"Register_registerForm__3GHno",email:"Register_email__2HT3q",password:"Register_password__YFBp-",submit:"Register_submit__33PtM",inputStyle:"Register_inputStyle__3xZSr"}},15:function(e,t,n){e.exports={wrapper:"Error404_wrapper__2d16a",error:"Error404_error__3DuaN",home:"Error404_home__255G1",text:"Error404_text__2yaBM"}},16:function(e,t,n){e.exports={input:"SuperInputText_input__OH19j",errorInput:"SuperInputText_errorInput__1ITHB",error:"SuperInputText_error__3MJ7P",superInput:"SuperInputText_superInput__3t3hC"}},22:function(e,t,n){e.exports={default:"SuperButton_default__8Sffv",red:"SuperButton_red__tj06z"}},23:function(e,t,n){e.exports={label:"SuperCheckbox_label__2n9cJ",spanClassName:"SuperCheckbox_spanClassName__ml_kC",checkbox:"SuperCheckbox_checkbox__3y_T0"}},24:function(e,t,n){e.exports={loadingLine:"LoadingLine_loadingLine__18wXU",line:"LoadingLine_line__V5rZy",loading:"LoadingLine_loading__1uByt",shadow:"LoadingLine_shadow__2w4Bm"}},27:function(e,t,n){e.exports={radio:"SuperRadio_radio__1x8bU",label:"SuperRadio_label__3hZEh"}},28:function(e,t,n){e.exports={select:"SuperSelect_select__1pDb6",options:"SuperSelect_options__dIpYp"}},44:function(e,t,n){},45:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(19),s=n.n(a),o=(n(44),n(9)),i=n(2),l=(n(45),n(4)),j=n(3),b=n(11),u=n(16),d=n.n(u),p=n(0),h=function(e){var t=e.type,n=e.onChange,r=e.onChangeText,c=e.onKeyPress,a=e.onEnter,s=e.error,o=e.className,i=e.spanClassName,l=Object(b.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(d.a.error," ").concat(i||""),h="".concat(d.a.input," ").concat(s?d.a.errorInput:d.a.superInput," ").concat(o);return Object(p.jsxs)("div",{children:[Object(p.jsx)("input",Object(j.a)({type:t,onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:h,placeholder:"Type some text"},l)),s&&Object(p.jsx)("div",{className:u,children:s})]})},O=n(22),g=n.n(O),x=function(e){var t=e.red,n=e.className,r=Object(b.a)(e,["red","className"]),c="".concat(t?"".concat(g.a.red," ").concat(g.a.default):g.a.default," ").concat(n);return Object(p.jsx)("button",Object(j.a)({className:c},r))},m=n(23),_=n.n(m),v=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(b.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(_.a.checkbox," ").concat(r||"");return Object(p.jsxs)("label",{className:_.a.label,children:[Object(p.jsx)("input",Object(j.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(p.jsx)("span",{className:_.a.spanClassName,children:c})]})},f=n(27),N=n.n(f),S=function(e){e.type;var t=e.name,n=e.options,r=e.value,c=e.onChange,a=e.onChangeOption,s=Object(b.a)(e,["type","name","options","value","onChange","onChangeOption"]),o=function(e){c&&c(e),a&&a(e.currentTarget.value)},i=n?n.map((function(e,n){return Object(p.jsxs)("label",{className:N.a.label,children:[Object(p.jsx)("input",Object(j.a)({className:N.a.radio,type:"radio",name:t,checked:e===r,value:e,onChange:o},s)),e]},t+"-"+n)})):[];return Object(p.jsx)(p.Fragment,{children:i})},C=n(28),w=n.n(C),y=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,c=Object(b.a)(e,["options","onChange","onChangeOption"]),a=t?t.map((function(e,t){return Object(p.jsx)("option",{value:e,className:w.a.options,children:e},t)})):[];return Object(p.jsx)("select",Object(j.a)(Object(j.a)({className:w.a.select,onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},c),{},{children:a}))},L=function(){var e=["a","b","c"],t=Object(r.useState)(e[0]),n=Object(l.a)(t,2),c=n[0],a=n[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(h,{}),Object(p.jsx)(x,{children:"Normal"}),Object(p.jsx)(x,{red:!0,children:"Delete"}),Object(p.jsx)(v,{}),Object(p.jsx)(S,{value:c,onChangeOption:a,options:e}),Object(p.jsx)(y,{options:e})]})},T=n(15),k=n.n(T),R=n.p+"static/media/404.9494ad47.png";var E=function(){return Object(p.jsxs)("div",{className:k.a.wrapper,children:[Object(p.jsxs)("div",{className:k.a.error,children:[Object(p.jsx)("span",{children:"4"}),Object(p.jsx)("img",{className:k.a.image,src:R,alt:"404",width:"200px"}),Object(p.jsx)("span",{children:"4"})]}),Object(p.jsxs)("p",{className:k.a.text,children:["The page you are looking ",Object(p.jsx)("span",{children:"NOT FOUND!"})," So sad..."]}),Object(p.jsx)(o.b,{to:"/",className:k.a.home,children:"Return Home"})]})},I=n(8),P=n(14),F=n.n(P),A=n(20),B=n(13),D=n.n(B),G=D.a.create({baseURL:"http://localhost:7542/2.0/",withCredentials:!0}),M=function(e){return G.post("auth/login",e)},U=function(e){return G.post("auth/register",e)},H={isLoggedIn:!1},Z=n(10),q=n.n(Z),J={loadingStatus:"unloading",error:null},K=function(e){return{type:"app/SET_LOADING_STATUS",value:e}},V=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(l.a)(a,2),o=s[0],j=s[1],b=Object(r.useState)(!1),u=Object(l.a)(b,2),d=u[0],O=u[1],g=Object(I.b)(),m=Object(I.c)((function(e){return e.loginPage.isLoggedIn}));Object(i.g)();return console.log(m),Object(p.jsxs)("div",{children:[Object(p.jsxs)("form",{children:[Object(p.jsx)(h,{name:"email",type:"text",value:n,onChangeText:c,placeholder:"Email"}),Object(p.jsx)(h,{name:"password",type:"password",value:o,onChangeText:j,placeholder:"Password"}),Object(p.jsx)(v,{name:"rememberMe",checked:d,onChangeChecked:O}),Object(p.jsx)(x,{onClick:function(e){g(function(e){return function(){var t=Object(A.a)(F.a.mark((function t(n){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M(e);case 3:n({type:"login/SET-IS-LOGGED-IN",value:!0}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),D.a.isAxiosError(t.t0)&&console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}({email:n,password:o,rememberMe:d})),console.log(e),c(""),j("")},children:"Sign in"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:function(){return g(K("loading"))},children:"Loading"}),Object(p.jsx)("button",{onClick:function(){return g(K("unloading"))},children:"Unloading"})]}),Object(p.jsxs)("section",{className:q.a.loginSection,children:[Object(p.jsxs)("article",{className:q.a.loginArticle,children:[Object(p.jsx)("h3",{children:"Login to Web App"}),Object(p.jsxs)("form",{className:q.a.loginForm,children:[Object(p.jsx)("div",{children:Object(p.jsx)("input",{className:q.a.username,type:"text",name:"email",placeholder:"Email"})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{className:q.a.password,type:"password",name:"password",placeholder:"Password"})}),Object(p.jsxs)("div",{className:q.a.checkboxRemember,children:[Object(p.jsx)("input",{className:q.a.checkbox,type:"checkbox",name:"rememberMe"}),Object(p.jsx)("label",{className:q.a.remember,htmlFor:"rememberMe",children:"Remember me on this computer"})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:q.a.submit,children:"Login"})})]})]}),Object(p.jsxs)("div",{className:q.a.reset,children:["Forgot your password? ",Object(p.jsx)("a",{href:"#",children:"Click here"})," to reset it."]})]})]})},Y={errorRegister:null},W=function(e){return{type:"register/REGISTER",data:e}},z=n(12),X=n.n(z),Q=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(l.a)(a,2),o=s[0],i=s[1],b=Object(r.useState)(""),u=Object(l.a)(b,2),d=u[0],O=u[1],g=Object(I.c)((function(e){return e.registerPage.errorRegister})),m=Object(I.b)();return Object(p.jsx)("div",{className:X.a.registration,children:Object(p.jsxs)("section",{className:X.a.registerSection,children:[Object(p.jsxs)("article",{className:X.a.registerArticle,children:[Object(p.jsx)("h3",{children:"Registration"}),Object(p.jsxs)("div",{className:X.a.registerForm,children:[Object(p.jsx)("div",{children:Object(p.jsx)(h,{className:X.a.email,name:"email",type:"text",value:n,onChangeText:c,placeholder:"Email"})}),Object(p.jsx)("div",{children:Object(p.jsx)(h,{className:X.a.password,name:"password",type:"password",value:o,onChangeText:i,placeholder:"Password"})}),Object(p.jsx)("div",{children:Object(p.jsx)(h,{className:X.a.password,name:"passwordControl",type:"password",value:d,onChangeText:O,placeholder:"Password"})}),Object(p.jsx)("div",{children:Object(p.jsx)(x,{className:X.a.submit,onClick:function(){var e={email:n,password:o};m(function(e){return function(){var t=Object(A.a)(F.a.mark((function t(n){var r,c;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U(e);case 3:n(W(e)),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),D.a.isAxiosError(t.t0)&&(console.log(Object(j.a)({},t.t0)),console.log("errrror",null===(r=t.t0.response)||void 0===r?void 0:r.data.passwordRegExp),n({type:"register/SET_ERROR",errorRegister:null===(c=t.t0.response)||void 0===c?void 0:c.data.passwordRegExp}));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(e)),alert(n),console.log(e)},children:"Sign in"})})]})]}),g&&Object(p.jsxs)("div",{className:"error",children:["Error: ",g]})]})})},$=function(){return Object(p.jsx)("div",{children:"NewPass"})},ee=function(){return Object(p.jsx)("div",{children:"PassRecover"})},te=function(){return Object(p.jsx)("div",{children:"Profile"})},ne=n(24),re=n.n(ne),ce=function(){return Object(p.jsx)("div",{className:re.a.loadingLine,children:Object(p.jsx)("div",{className:re.a.line,children:Object(p.jsx)("div",{className:re.a.shadow})})})};var ae=function(){var e=Object(I.c)((function(e){return e.app.loadingStatus})),t=(Object(I.c)((function(e){return e.app.error})),Object(I.c)((function(e){return e.loginPage.isLoggedIn})),Object(I.b)());return Object(r.useEffect)((function(){}),[t]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{children:Object(p.jsx)(o.b,{to:"/",children:"home/test"})}),Object(p.jsx)("button",{children:Object(p.jsx)(o.b,{to:"login",children:"login"})}),Object(p.jsx)("button",{children:Object(p.jsx)(o.b,{to:"404",children:"404"})}),Object(p.jsx)("button",{children:Object(p.jsx)(o.b,{to:"profile",children:"profile"})}),Object(p.jsx)("button",{children:Object(p.jsx)(o.b,{to:"registration",children:"registration"})}),Object(p.jsx)("button",{children:Object(p.jsx)(o.b,{to:"new_password",children:"new_password"})}),Object(p.jsx)("button",{children:Object(p.jsx)(o.b,{to:"pass_recovery",children:"pass_recovery"})})]}),"loading"===e&&Object(p.jsx)(ce,{}),Object(p.jsxs)(i.d,{children:[Object(p.jsx)(i.b,{path:"/",element:Object(p.jsx)(L,{})}),Object(p.jsx)(i.b,{path:"login",element:Object(p.jsx)(V,{})}),Object(p.jsx)(i.b,{path:"profile",element:Object(p.jsx)(te,{})}),Object(p.jsx)(i.b,{path:"registration",element:Object(p.jsx)(Q,{})}),Object(p.jsx)(i.b,{path:"new_password",element:Object(p.jsx)($,{})}),Object(p.jsx)(i.b,{path:"pass_recovery",element:Object(p.jsx)(ee,{})}),Object(p.jsx)(i.b,{path:"404",element:Object(p.jsx)(E,{})}),Object(p.jsx)(i.b,{path:"*",element:Object(p.jsx)(i.a,{to:"404"})})]})]})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},oe=n(25),ie={},le={},je={},be=n(39),ue=Object(oe.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/SET_LOADING_STATUS":return Object(j.a)(Object(j.a)({},e),{},{loadingStatus:t.value});case"app/SET-ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:t.error});default:return e}},loginPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(j.a)(Object(j.a)({},e),{},{isLoggedIn:t.value});default:return e}},newPassPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;return t.type,e},recoverPassPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;return t.type,e},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;return t.type,e},registerPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"register/SET_ERROR":return Object(j.a)(Object(j.a)({},e),{},{errorRegister:t.errorRegister});default:return e}}}),de=Object(oe.c)(ue,Object(oe.a)(be.a));s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(I.a,{store:de,children:Object(p.jsx)(ae,{})})})}),document.getElementById("root")),se()}},[[72,1,2]]]);
//# sourceMappingURL=main.0fd478df.chunk.js.map