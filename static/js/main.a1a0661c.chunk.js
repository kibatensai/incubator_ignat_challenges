(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,,,,,function(e,n,t){e.exports={nav_bar:"Header_nav_bar__1YUPs",nav_container:"Header_nav_container__1uSjw",nav_link:"Header_nav_link__9HOb3",fill:"Header_fill__q8Ydd",current:"Header_current__lnb7W"}},,,,,,function(e,n,t){e.exports={radio_wrapper:"SuperRadio_radio_wrapper__jbuIU",label:"SuperRadio_label__l1dlq",radio:"SuperRadio_radio__11Bs-",text:"SuperRadio_text__2yfla",design:"SuperRadio_design__3UAwv"}},,,,,function(e,n,t){e.exports={error_page:"Error404_error_page__1Jk5a",title_404:"Error404_title_404__3gYvX",title:"Error404_title__20KwC"}},function(e,n,t){e.exports={HW11_styling:"HW11_HW11_styling__3Xawh",super_range:"HW11_super_range__1WO1B",super_range_value:"HW11_super_range_value__k2IES"}},function(e,n,t){e.exports={hw8_styling:"HW8_hw8_styling__WPLYI",list:"HW8_list__Z2ZMg",list_item:"HW8_list_item__3NCN_"}},function(e,n,t){e.exports={wrapper:"Clock_wrapper___ajIz",clock_container:"Clock_clock_container__2f3Vn",clock_date:"Clock_clock_date__3-lC-"}},function(e,n,t){e.exports={input_container:"SuperInputText_input_container__P1nWd",superInput:"SuperInputText_superInput__3jvqN",errorInput:"SuperInputText_errorInput__zIeeH",error:"SuperInputText_error__2zVMy"}},function(e,n,t){e.exports={default:"SuperButton_default__353jw",fadeIn:"SuperButton_fadeIn__3pozS",red:"SuperButton_red__z9qYi"}},,function(e,n,t){e.exports={custom_select:"SuperSelect_custom_select__3_RFr",fadeIn:"SuperSelect_fadeIn__2n3U5",custom_option:"SuperSelect_custom_option__4dXSO"}},function(e,n,t){e.exports={dark:"HW12_dark__3eTeJ","dark-text":"HW12_dark-text__2raac",red:"HW12_red__8H_lx","red-text":"HW12_red-text__3k1hn",some:"HW12_some__3n3QR","some-text":"HW12_some-text__3NaO7",custom:"HW12_custom__1kLI1",animation:"HW12_animation__lm3_c","custom-text":"HW12_custom-text__247OI"}},function(e,n,t){e.exports={p_styling:"SuperEditableSpan_p_styling__gOwII",span_styling:"SuperEditableSpan_span_styling__3ka1G"}},,,,,,function(e,n,t){e.exports={App:"App_App__we4Kl"}},,function(e,n,t){e.exports=t.p+"static/media/dbringload.a7b07211.svg"},function(e,n,t){e.exports={hw10_styling:"HW10_hw10_styling__1USYB"}},function(e,n,t){},function(e,n,t){e.exports={super_double_range:"SuperDoubleRange_super_double_range__3Imcn"}},function(e,n,t){e.exports={hw6_styling:"HW6_hw6_styling__1WDNC"}},,,function(e,n,t){e.exports=t(58)},,,,,function(e,n,t){},,,,,,function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(16),l=t.n(c),o=(t(52),t(38)),u=t.n(o),i=t(15),s=t(2),m=t(23),_=t.n(m);var p=function(){return r.a.createElement("div",{className:_.a.error_page},r.a.createElement("div",{className:_.a.title_404},"404"),r.a.createElement("div",{className:_.a.title},"UH OH! You're lost. \u0e05/\u1420.\u032b .\u141f\\\u0e05"),r.a.createElement("span",null,"The page you are looking for does not exist. ",r.a.createElement("br",null),"How you got here is a mystery! ",r.a.createElement("br",null),"But you can choose the section above and have fun there!"))},d=t(6),v=t(28),E=t.n(v),g=function(e){var n=e.red,t=e.className,a=Object(d.a)(e,["red","className"]),c="".concat(n?E.a.red:E.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:c},a))},f=t(13),h=t(22),b={isLoading:!1},O=function(e){return{type:"LOADING",isLoading:e}},y=t(40),N=t.n(y),C=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:N.a,alt:"loading"}))},j=t(41),k=t.n(j);var w=function(){var e=Object(f.b)(),n=Object(f.c)((function(e){return e.loading.isLoading}));return r.a.createElement("div",{className:k.a.hw10_styling},n?r.a.createElement(C,null):r.a.createElement("div",null,r.a.createElement(g,{onClick:function(){e(O(!0)),setTimeout((function(){e(O(!1))}),2e3),console.log("loading...")}},"set loading...")))},S=t(4),x=t(42),H=t.n(x),I=function(e){e.type;var n=e.onChange,t=e.onChangeRange,a=e.className,c=Object(d.a)(e,["type","onChange","onChangeRange","className"]),l="".concat(H.a.range," ").concat(a||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){n&&n(e),t&&t(+e.currentTarget.value)},className:l},c)))},W=t(69),L=t(43),T=t.n(L),P=function(e){var n=e.onChangeRange,t=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:T.a.super_double_range},r.a.createElement(W.a,{value:t,min:0,max:150,onChange:function(e,t){n&&n(e,t)},valueLabelDisplay:"auto","aria-labelledby":"range-slider"})))},R=t(24),B=t.n(R);var D=function(){var e=Object(a.useState)(15),n=Object(S.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(100),o=Object(S.a)(l,2),u=o[0],i=(o[1],Object(a.useState)([t,u])),s=Object(S.a)(i,2),m=s[0],_=s[1];return r.a.createElement("div",{className:B.a.HW11_styling},r.a.createElement("div",{className:B.a.super_range},r.a.createElement("div",{className:B.a.super_range_value},t),r.a.createElement(I,{onChangeRange:function(e){c(e)}})),r.a.createElement("div",null,r.a.createElement(P,{value:m,onChangeRange:function(e,n){_(n)}})),r.a.createElement("hr",null))},A=t(30),J=t.n(A),M=function(e){var n=e.options,t=(e.onChange,e.onChangeOption),a=Object(d.a)(e,["options","onChange","onChangeOption"]),c=n?n.map((function(e,n){return r.a.createElement("option",{className:J.a.custom_option,key:n},e)})):[];return r.a.createElement("select",Object.assign({className:J.a.custom_select,onChange:function(e){t&&t(e.currentTarget.value)}},a),c)},Y=t(18),F=t.n(Y),z=function(e){e.type;var n=e.name,t=e.options,a=e.value,c=(e.onChange,e.onChangeOption),l=(Object(d.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e.currentTarget.value)}),o=t?t.map((function(e,t){return r.a.createElement("label",{className:F.a.label,key:n+"-"+t},r.a.createElement("input",{className:F.a.radio,name:n,onChange:l,type:"radio",value:e,checked:a===e}),r.a.createElement("div",{className:F.a.design}),r.a.createElement("span",{className:F.a.text},e))})):[];return r.a.createElement("div",{className:F.a.radio_wrapper},o)},K=["x","y","z"],U=["1","2","3","4"];var q=function(){var e=Object(a.useState)(K[1]),n=Object(S.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(U[0]),o=Object(S.a)(l,2),u=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(M,{options:K,value:t,onChangeOption:c})),r.a.createElement("div",null,r.a.createElement(z,{name:"radio",options:U,value:u,onChangeOption:i})))},G=t(35),X=function(e,n){switch(n.type){case"sort":if("up"===n.payload)return Object(G.a)(e.sort((function(e,n){var t=e.name.toLowerCase(),a=n.name.toLowerCase();return t<a?-1:t>a?1:0})));if("down"===n.payload)return Object(G.a)(e.sort((function(e,n){var t=e.name.toLowerCase(),a=n.name.toLowerCase();return t>a?-1:t<a?1:0})));case"check":return e.filter((function(e){return e.age>=n.payload}));default:return e}},V=function(e){return{type:"sort",payload:e}},Z=t(25),Q=t.n(Z),$=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ee=function(){var e=Object(a.useState)($),n=Object(S.a)(e,2),t=n[0],c=n[1],l=t.map((function(e){return r.a.createElement("div",{key:e._id,className:Q.a.list_item},"\u0418\u043c\u044f: ",e.name,", \u0412\u043e\u0437\u0440\u0430\u0441\u0442: ",e.age)}));return r.a.createElement("div",{className:Q.a.hw8_styling},r.a.createElement("div",{className:Q.a.list},l),r.a.createElement("div",null,r.a.createElement(g,{onClick:function(){return c(X($,V("up")))}},"sort up"),r.a.createElement(g,{onClick:function(){return c(X($,V("down")))}},"sort down"),r.a.createElement(g,{onClick:function(){return c(X($,{type:"check",payload:18}))}},"check 18")))},ne=t(26),te=t.n(ne);var ae=function(){var e=Object(a.useState)(0),n=Object(S.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(),o=Object(S.a)(l,2),u=o[0],i=o[1],s=Object(a.useState)(!1),m=Object(S.a)(s,2),_=m[0],p=m[1],d=function(){clearInterval(t)},v=Object(a.useMemo)((function(){return(new Date).toLocaleTimeString()}),[u]),E=(new Date).toDateString();return r.a.createElement("div",{className:te.a.wrapper},r.a.createElement("div",{className:te.a.clock_container,onMouseEnter:function(){p(!0)},onMouseLeave:function(){p(!1)}},r.a.createElement("div",null,v),_&&r.a.createElement("div",{className:te.a.clock_date},E)),r.a.createElement("div",null,r.a.createElement(g,{onClick:function(){d();var e=window.setInterval((function(){i(new Date)}),1e3);c(e)}},"start"),r.a.createElement(g,{onClick:d},"stop")))};var re=function(){return r.a.createElement("div",null,r.a.createElement(ae,null))};var ce=function(){return r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement(ee,null),r.a.createElement(re,null),r.a.createElement(w,null),r.a.createElement(D,null))},le={theme:"some"},oe=t(31),ue=t.n(oe),ie=["dark","red","some","custom"];var se=function(){var e=Object(f.c)((function(e){return e.theme.theme})),n=Object(f.b)(),t=function(e){n(function(e){return{type:"APPLY-THEME",theme:e}}(e))};return r.a.createElement("div",{className:ue.a[e]},r.a.createElement("hr",null),r.a.createElement("span",{className:ue.a[e+"-text"]},"homeworks 12"),r.a.createElement(z,{name:"radio",options:ie,value:e,onChangeOption:t}),r.a.createElement(M,{options:ie,value:e,onChangeOption:t}),r.a.createElement("hr",null))};var me=function(){return r.a.createElement("div",null,r.a.createElement(se,null))},_e=t(27),pe=t.n(_e),de=function(e){e.type;var n=e.onChange,t=e.onChangeText,a=e.onKeyPress,c=e.onEnter,l=e.error,o=(e.className,e.spanClassName),u=Object(d.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(pe.a.error," ").concat(o||""),s="".concat(l?"":pe.a.superInput);return r.a.createElement("div",{className:pe.a.input_container},r.a.createElement("input",Object.assign({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),"Enter"===e.key&&c&&c()},className:s},u)),l&&r.a.createElement("span",{className:i},l))},ve=t(32),Ee=t.n(ve),ge=function(e){e.autoFocus;var n=e.onBlur,t=e.onEnter,c=e.spanProps,l=Object(d.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(a.useState)(!1),u=Object(S.a)(o,2),i=u[0],s=u[1],m=c||{},_=m.children,p=m.onDoubleClick,v=m.className,E=Object(d.a)(m,["children","onDoubleClick","className"]),g="".concat(Ee.a.span_styling," ").concat(v),f="".concat(Ee.a.p_styling," ").concat(v);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(de,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),n&&n(e)},onKeyPress:function(e){"Enter"===e.key&&s(!1),t&&t()}},l)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),p&&p(e)},className:g},E),r.a.createElement("p",{className:f},_||l.value)))};function fe(e,n){var t=JSON.stringify(n);localStorage.setItem(e,t)}function he(e,n){var t=localStorage.getItem(e);return null!==t&&(n=JSON.parse(t)),n}fe("test",{x:"A",y:1});he("test",{x:"",y:0});var be=t(44),Oe=t.n(be);var ye=function(){var e=Object(a.useState)(""),n=Object(S.a)(e,2),t=n[0],c=n[1];return r.a.createElement("div",{className:Oe.a.hw6_styling},r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(ge,{value:t,onChangeText:c,spanProps:{children:t?void 0:"click me..."}})),r.a.createElement("div",null,r.a.createElement(g,{onClick:function(){fe("editable-span-value",t)}},"save"),r.a.createElement(g,{onClick:function(){var e=he("editable-span-value",t);c(e)}},"restore")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Ne=function(){return r.a.createElement("div",null,r.a.createElement(ye,null))},Ce="/",je="/pre-junior",ke="/junior",we="/junior-plus",Se=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:Ce,exact:!0,render:function(){return r.a.createElement(s.a,{to:je})}}),r.a.createElement(s.b,{path:je,render:function(){return r.a.createElement(Ne,null)}}),r.a.createElement(s.b,{path:ke,render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(s.b,{path:we,render:function(){return r.a.createElement(me,null)}}),"// add routes",r.a.createElement(s.b,{render:function(){return r.a.createElement(p,null)}})))},xe=t(12),He=t.n(xe);var Ie=function(){var e=function(){};return r.a.createElement("div",{className:He.a.nav_container},r.a.createElement("div",{className:He.a.nav_bar,onMouseOver:function(){return e}},r.a.createElement(i.b,{to:je,className:He.a.nav_link,activeClassName:He.a.current},"Pre-Junior"),r.a.createElement(i.b,{to:ke,className:He.a.nav_link,activeClassName:He.a.current},"Junior"),r.a.createElement(i.b,{to:we,className:He.a.nav_link,activeClassName:He.a.current},"Junior +")))};var We=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(Ie,null),r.a.createElement(Se,null)))};var Le=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(We,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=t(17),Pe=Object(Te.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOADING":return Object(h.a)({},e,{isLoading:n.isLoading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"APPLY-THEME":return Object(h.a)({},e,{theme:n.theme});default:return e}}}),Re=Object(Te.c)(Pe),Be=Re;window.store=Re,l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:Be},r.a.createElement(Le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[47,1,2]]]);
//# sourceMappingURL=main.a1a0661c.chunk.js.map