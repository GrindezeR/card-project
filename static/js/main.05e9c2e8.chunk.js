(this["webpackJsonpcommand-project"]=this["webpackJsonpcommand-project"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={wrapper:"Error404_wrapper__2FBDT",error:"Error404_error__17aEg",home:"Error404_home__1FTXn",text:"Error404_text__1h1R4"}},function(e,t,n){e.exports={input:"SuperInputText_input__18AyF",errorInput:"SuperInputText_errorInput__d-0va",error:"SuperInputText_error__ZwnQd",superInput:"SuperInputText_superInput__wEMKv"}},,function(e,t,n){e.exports={default:"SuperButton_default__1W1T9",red:"SuperButton_red__3fl10"}},function(e,t,n){e.exports={label:"SuperCheckbox_label__1X1G0",spanClassName:"SuperCheckbox_spanClassName__2C50V",checkbox:"SuperCheckbox_checkbox__3lvwi"}},,function(e,t,n){e.exports={radio:"SuperRadio_radio__16BOT",label:"SuperRadio_label__2R34x"}},function(e,t,n){e.exports={select:"SuperSelect_select__3Zh2X",options:"SuperSelect_options__93aIi"}},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(16),s=n.n(r),o=(n(21),n(4)),j=n(2),i=(n(22),n(7)),l=n(5),b=n(6),p=n(9),u=n.n(p),h=n(0),d=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,a=e.onEnter,r=e.error,s=e.className,o=e.spanClassName,j=Object(b.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(u.a.error," ").concat(o||""),p="".concat(u.a.input," ").concat(r?u.a.errorInput:u.a.superInput," ").concat(s);return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",Object(l.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:p,placeholder:"Type some text"},j)),r&&Object(h.jsx)("div",{className:i,children:r})]})},x=n(11),O=n.n(x),m=function(e){var t=e.red,n=e.className,c=Object(b.a)(e,["red","className"]),a="".concat(t?"".concat(O.a.red," ").concat(O.a.default):O.a.default," ").concat(n);return Object(h.jsx)("button",Object(l.a)({className:a},c))},_=n(12),g=n.n(_),f=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,a=(e.spanClassName,e.children),r=Object(b.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(g.a.checkbox," ").concat(c||"");return Object(h.jsxs)("label",{className:g.a.label,children:[Object(h.jsx)("input",Object(l.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),a&&Object(h.jsx)("span",{className:g.a.spanClassName,children:a})]})},v=n(14),C=n.n(v),N=function(e){e.type;var t=e.name,n=e.options,c=e.value,a=e.onChange,r=e.onChangeOption,s=Object(b.a)(e,["type","name","options","value","onChange","onChangeOption"]),o=function(e){a&&a(e),r&&r(e.currentTarget.value)},j=n?n.map((function(e,n){return Object(h.jsxs)("label",{className:C.a.label,children:[Object(h.jsx)("input",Object(l.a)({className:C.a.radio,type:"radio",name:t,checked:e===c,value:e,onChange:o},s)),e]},t+"-"+n)})):[];return Object(h.jsx)(h.Fragment,{children:j})},y=n(15),S=n.n(y),T=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,a=Object(b.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(h.jsx)("option",{value:e,className:S.a.options,children:e},t)})):[];return Object(h.jsx)("select",Object(l.a)(Object(l.a)({className:S.a.select,onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)}},a),{},{children:r}))},w=function(){var e=["a","b","c"],t=Object(c.useState)(e[0]),n=Object(i.a)(t,2),a=n[0],r=n[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(d,{}),Object(h.jsx)(m,{children:"Normal"}),Object(h.jsx)(m,{red:!0,children:"Delete"}),Object(h.jsx)(f,{}),Object(h.jsx)(N,{value:a,onChangeOption:r,options:e}),Object(h.jsx)(T,{options:e})]})},k=n(8),I=n.n(k),E=n.p+"static/media/404.9494ad47.png";var F=function(){return Object(h.jsxs)("div",{className:I.a.wrapper,children:[Object(h.jsxs)("div",{className:I.a.error,children:[Object(h.jsx)("span",{children:"4"}),Object(h.jsx)("img",{className:I.a.image,src:E,alt:"404",width:"200px"}),Object(h.jsx)("span",{children:"4"})]}),Object(h.jsxs)("p",{className:I.a.text,children:["The page you are looking ",Object(h.jsx)("span",{children:"NOT FOUND!"})," So sad..."]}),Object(h.jsx)(o.b,{to:"/",className:I.a.home,children:"Return Home"})]})},P=function(){return Object(h.jsx)("div",{children:"Login"})},R=function(){return Object(h.jsx)("div",{children:"Registration"})},B=function(){return Object(h.jsx)("div",{children:"NewPass"})},D=function(){return Object(h.jsx)("div",{children:"PassRecover"})},K=function(){return Object(h.jsx)("div",{children:"Profile"})};var L=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{children:Object(h.jsx)(o.b,{to:"/",children:"home"})}),Object(h.jsx)("button",{children:Object(h.jsx)(o.b,{to:"login",children:"login"})}),Object(h.jsx)("button",{children:Object(h.jsx)(o.b,{to:"404",children:"404"})}),Object(h.jsx)("button",{children:Object(h.jsx)(o.b,{to:"profile",children:"profile"})}),Object(h.jsx)("button",{children:Object(h.jsx)(o.b,{to:"registration",children:"registration"})}),Object(h.jsx)("button",{children:Object(h.jsx)(o.b,{to:"new_password",children:"new_password"})}),Object(h.jsx)("button",{children:Object(h.jsx)(o.b,{to:"pass_recovery",children:"pass_recovery"})})]}),Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{path:"/",element:Object(h.jsx)(w,{})}),Object(h.jsx)(j.b,{path:"login",element:Object(h.jsx)(P,{})}),Object(h.jsx)(j.b,{path:"profile",element:Object(h.jsx)(K,{})}),Object(h.jsx)(j.b,{path:"registration",element:Object(h.jsx)(R,{})}),Object(h.jsx)(j.b,{path:"new_password",element:Object(h.jsx)(B,{})}),Object(h.jsx)(j.b,{path:"pass_recovery",element:Object(h.jsx)(D,{})}),Object(h.jsx)(j.b,{path:"404",element:Object(h.jsx)(F,{})}),Object(h.jsx)(j.b,{path:"*",element:Object(h.jsx)(j.a,{to:"404"})})]})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(L,{})})}),document.getElementById("root")),X()}],[[24,1,2]]]);
//# sourceMappingURL=main.05e9c2e8.chunk.js.map