(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,n,t){e.exports={nav_bar:"Header_nav_bar__1YUPs",nav_container:"Header_nav_container__1uSjw",nav_link:"Header_nav_link__9HOb3",fill:"Header_fill__q8Ydd",current:"Header_current__lnb7W"}},,function(e,n,t){e.exports={radio_wrapper:"SuperRadio_radio_wrapper__jbuIU",label:"SuperRadio_label__l1dlq",radio:"SuperRadio_radio__11Bs-",text:"SuperRadio_text__2yfla",design:"SuperRadio_design__3UAwv"}},,,,function(e,n,t){e.exports={error_page:"Error404_error_page__1Jk5a",title_404:"Error404_title_404__3gYvX",title:"Error404_title__20KwC"}},function(e,n,t){e.exports={hw8_styling:"HW8_hw8_styling__WPLYI",list:"HW8_list__Z2ZMg",list_item:"HW8_list_item__3NCN_"}},function(e,n,t){e.exports={wrapper:"Clock_wrapper___ajIz",clock_container:"Clock_clock_container__2f3Vn",clock_date:"Clock_clock_date__3-lC-"}},function(e,n,t){e.exports={input_container:"SuperInputText_input_container__P1nWd",superInput:"SuperInputText_superInput__3jvqN",errorInput:"SuperInputText_errorInput__zIeeH",error:"SuperInputText_error__2zVMy"}},,function(e,n,t){e.exports={custom_select:"SuperSelect_custom_select__3_RFr",fadeIn:"SuperSelect_fadeIn__2n3U5",custom_option:"SuperSelect_custom_option__4dXSO"}},function(e,n,t){e.exports={default:"SuperButton_default__353jw",fadeIn:"SuperButton_fadeIn__3pozS",red:"SuperButton_red__z9qYi"}},function(e,n,t){e.exports={p_styling:"SuperEditableSpan_p_styling__gOwII",span_styling:"SuperEditableSpan_span_styling__3ka1G"}},,,,,,,,function(e,n,t){e.exports={App:"App_App__we4Kl"}},function(e,n,t){e.exports={hw6_styling:"HW6_hw6_styling__1WDNC"}},,function(e,n,t){e.exports=t(41)},,,,,function(e,n,t){},,,,,,function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(26),l=t.n(c),o=(t(35),t(27)),u=t.n(o),i=t(7),s=t(1),m=t(12),_=t.n(m);var p=function(){return r.a.createElement("div",{className:_.a.error_page},r.a.createElement("div",{className:_.a.title_404},"404"),r.a.createElement("div",{className:_.a.title},"UH OH! You're lost. \u0e05/\u1420.\u032b .\u141f\\\u0e05"),r.a.createElement("span",null,"The page you are looking for does not exist. ",r.a.createElement("br",null),"How you got here is a mystery! ",r.a.createElement("br",null),"But you can choose the section above and have fun there!"))},d=t(2),v=t(5),E=t(17),f=t.n(E),g=function(e){var n=e.options,t=(e.onChange,e.onChangeOption),a=Object(v.a)(e,["options","onChange","onChangeOption"]),c=n?n.map((function(e,n){return r.a.createElement("option",{className:f.a.custom_option,key:n},e)})):[];return r.a.createElement("select",Object.assign({className:f.a.custom_select,onChange:function(e){t&&t(e.currentTarget.value)}},a),c)},b=t(8),h=t.n(b),y=function(e){e.type;var n=e.name,t=e.options,a=e.value,c=(e.onChange,e.onChangeOption),l=(Object(v.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e.currentTarget.value)}),o=t?t.map((function(e,t){return r.a.createElement("label",{className:h.a.label,key:n+"-"+t},r.a.createElement("input",{className:h.a.radio,name:n,onChange:l,type:"radio",value:e,checked:a===e}),r.a.createElement("div",{className:h.a.design}),r.a.createElement("span",{className:h.a.text},e))})):[];return r.a.createElement("div",{className:h.a.radio_wrapper},o)},N=["x","y","z"],C=["1","2","3","4"];var k=function(){var e=Object(a.useState)(N[1]),n=Object(d.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(C[0]),o=Object(d.a)(l,2),u=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(g,{options:N,value:t,onChangeOption:c})),r.a.createElement("div",null,r.a.createElement(y,{name:"radio",options:C,value:u,onChangeOption:i})))},O=t(23),w=function(e,n){switch(n.type){case"sort":if("up"===n.payload)return Object(O.a)(e.sort((function(e,n){var t=e.name.toLowerCase(),a=n.name.toLowerCase();return t<a?-1:t>a?1:0})));if("down"===n.payload)return Object(O.a)(e.sort((function(e,n){var t=e.name.toLowerCase(),a=n.name.toLowerCase();return t>a?-1:t<a?1:0})));case"check":return e.filter((function(e){return e.age>=n.payload}));default:return e}},S=function(e){return{type:"sort",payload:e}},j=t(18),x=t.n(j),I=function(e){var n=e.red,t=e.className,a=Object(v.a)(e,["red","className"]),c="".concat(n?x.a.red:x.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:c},a))},H=t(13),T=t.n(H),P=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var B=function(){var e=Object(a.useState)(P),n=Object(d.a)(e,2),t=n[0],c=n[1],l=t.map((function(e){return r.a.createElement("div",{key:e._id,className:T.a.list_item},"\u0418\u043c\u044f: ",e.name,", \u0412\u043e\u0437\u0440\u0430\u0441\u0442: ",e.age)}));return r.a.createElement("div",{className:T.a.hw8_styling},r.a.createElement("hr",null),r.a.createElement("div",{className:T.a.list},l),r.a.createElement("div",null,r.a.createElement(I,{onClick:function(){return c(w(P,S("up")))}},"sort up"),r.a.createElement(I,{onClick:function(){return c(w(P,S("down")))}},"sort down"),r.a.createElement(I,{onClick:function(){return c(w(P,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))},W=t(14),J=t.n(W);var D=function(){var e=Object(a.useState)(0),n=Object(d.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(),o=Object(d.a)(l,2),u=o[0],i=o[1],s=Object(a.useState)(!1),m=Object(d.a)(s,2),_=m[0],p=m[1],v=function(){clearInterval(t)},E=Object(a.useMemo)((function(){return(new Date).toLocaleTimeString()}),[u]),f=(new Date).toDateString();return r.a.createElement("div",{className:J.a.wrapper},r.a.createElement("div",{className:J.a.clock_container,onMouseEnter:function(){p(!0)},onMouseLeave:function(){p(!1)}},r.a.createElement("div",null,E),_&&r.a.createElement("div",{className:J.a.clock_date},f)),r.a.createElement("div",null,r.a.createElement(I,{onClick:function(){v();var e=window.setInterval((function(){i(new Date)}),1e3);c(e)}},"start"),r.a.createElement(I,{onClick:v},"stop")))};var L=function(){return r.a.createElement("div",null,r.a.createElement(D,null))};var M=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(B,null),r.a.createElement(L,null))};var z=function(){return r.a.createElement("div",null,"This is Junior PLUS page")},A=t(15),K=t.n(A),R=function(e){e.type;var n=e.onChange,t=e.onChangeText,a=e.onKeyPress,c=e.onEnter,l=e.error,o=(e.className,e.spanClassName),u=Object(v.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(K.a.error," ").concat(o||""),s="".concat(l?"":K.a.superInput);return r.a.createElement("div",{className:K.a.input_container},r.a.createElement("input",Object.assign({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),"Enter"===e.key&&c&&c()},className:s},u)),l&&r.a.createElement("span",{className:i},l))},U=t(19),Y=t.n(U),F=function(e){e.autoFocus;var n=e.onBlur,t=e.onEnter,c=e.spanProps,l=Object(v.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(a.useState)(!1),u=Object(d.a)(o,2),i=u[0],s=u[1],m=c||{},_=m.children,p=m.onDoubleClick,E=m.className,f=Object(v.a)(m,["children","onDoubleClick","className"]),g="".concat(Y.a.span_styling," ").concat(E),b="".concat(Y.a.p_styling," ").concat(E);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(R,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),n&&n(e)},onKeyPress:function(e){"Enter"===e.key&&s(!1),t&&t()}},l)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),p&&p(e)},className:g},f),r.a.createElement("p",{className:b},_||l.value)))};function q(e,n){var t=JSON.stringify(n);localStorage.setItem(e,t)}function V(e,n){var t=localStorage.getItem(e);return null!==t&&(n=JSON.parse(t)),n}q("test",{x:"A",y:1});V("test",{x:"",y:0});var X=t(28),Z=t.n(X);var G=function(){var e=Object(a.useState)(""),n=Object(d.a)(e,2),t=n[0],c=n[1];return r.a.createElement("div",{className:Z.a.hw6_styling},r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(F,{value:t,onChangeText:c,spanProps:{children:t?void 0:"click me..."}})),r.a.createElement("div",null,r.a.createElement(I,{onClick:function(){q("editable-span-value",t)}},"save"),r.a.createElement(I,{onClick:function(){var e=V("editable-span-value",t);c(e)}},"restore")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var $=function(){return r.a.createElement("div",null,r.a.createElement(G,null))},Q="/",ee="/pre-junior",ne="/junior",te="/junior-plus",ae=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:Q,exact:!0,render:function(){return r.a.createElement(s.a,{to:ee})}}),r.a.createElement(s.b,{path:ee,render:function(){return r.a.createElement($,null)}}),r.a.createElement(s.b,{path:ne,render:function(){return r.a.createElement(M,null)}}),r.a.createElement(s.b,{path:te,render:function(){return r.a.createElement(z,null)}}),"// add routes",r.a.createElement(s.b,{render:function(){return r.a.createElement(p,null)}})))},re=t(6),ce=t.n(re);var le=function(){var e=function(){};return r.a.createElement("div",{className:ce.a.nav_container},r.a.createElement("div",{className:ce.a.nav_bar,onMouseOver:function(){return e}},r.a.createElement(i.b,{to:ee,className:ce.a.nav_link,activeClassName:ce.a.current},"Pre-Junior"),r.a.createElement(i.b,{to:ne,className:ce.a.nav_link,activeClassName:ce.a.current},"Junior"),r.a.createElement(i.b,{to:te,className:ce.a.nav_link,activeClassName:ce.a.current},"Junior +")))};var oe=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(le,null),r.a.createElement(ae,null)))};var ue=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.4d8cc63e.chunk.js.map