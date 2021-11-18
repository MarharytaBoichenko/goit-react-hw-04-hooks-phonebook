(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",button:"ContactForm_button__1MLZK",nameInput:"ContactForm_nameInput__1yxA2",inputLabel:"ContactForm_inputLabel__3ilUb",label:"ContactForm_label__378f8"}},,,,function(t,e,n){t.exports={contactItem:"ContactItem_contactItem__5eHQm",contactName:"ContactItem_contactName__3Zp2H",contactNumber:"ContactItem_contactNumber__Lf19i"}},function(t,e,n){t.exports={item:"ContactList_item__3YsZK",button:"ContactList_button__1RuFy"}},function(t,e,n){t.exports={label:"Filter_label__3DcZT",inputLabel:"Filter_inputLabel__KDsXr",filterInput:"Filter_filterInput__u16Kg"}},,function(t,e,n){t.exports={App:"App_App__16ZpL",container:"App_container__1MQN3"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(11),r=n.n(o),s=(n(17),n(12)),l=n(3),i=n(10),u=n.n(i),b=n(21),m=n(2),j=n.n(m),p=n(0);function f(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],r=c[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),u=i[0],b=i[1],m=function(){r(""),b("")};return Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:o,number:u}),m()},className:j.a.form,children:[Object(p.jsxs)("label",{className:j.a.inputLabel,children:[Object(p.jsx)("span",{className:j.a.label,children:" Name"}),Object(p.jsx)("input",{onChange:function(t){r(t.target.value)},type:"name",value:o,className:j.a.nameInput,required:!0})]}),Object(p.jsxs)("label",{className:j.a.inputLabel,children:[Object(p.jsx)("span",{className:j.a.label,children:" Number"}),Object(p.jsx)("input",{type:"tel",onChange:function(t){b(t.target.value)},value:u,className:j.a.nameInput,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{type:"submit",className:j.a.button,children:"Add contact"})]})}var _=n(6),d=n.n(_),O=function(t){t.id;var e=t.name,n=t.number;return Object(p.jsxs)("div",{className:d.a.contactItem,children:[Object(p.jsxs)("p",{className:d.a.contactName,children:[" ","".concat(e,":")]})," ",Object(p.jsxs)("p",{className:d.a.contactNumber,children:[" ",n]})]})},h=n(7),x=n.n(h),N=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:x.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{className:x.a.item,children:[Object(p.jsx)(O,{name:a,number:c}),Object(p.jsx)("button",{type:"button",className:x.a.button,onClick:function(){n(e)},children:"Delete"})]},e)}))})},v=n(8),C=n.n(v),g=function(t){var e=t.value,n=t.onChange;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("label",{className:C.a.inputLabel,children:[Object(p.jsx)("span",{className:C.a.label,children:"Find contacts by name"}),Object(p.jsx)("input",{onChange:n,type:"text",name:"filter",value:e,className:C.a.filterInput})]})})};function I(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),r=Object(l.a)(o,2),i=r[0],m=r[1],j=function(t){try{var e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(n){throw new Error}}("contactsData");Object(a.useEffect)((function(){j&&c(j)}),[]),Object(a.useEffect)((function(){!function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){throw new Error}}("contactsData",n)}),[n]);return Object(p.jsxs)("div",{className:u.a.container,children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(f,{onSubmit:function(t){var e=t.name,a=t.number,o={id:Object(b.a)(),name:e,number:a};console.log(o),console.log(o.name);var r=o.name.toLowerCase().trim(),l=n.find((function(t){return t.name.toLowerCase().trim()===r}));console.log(o.name),console.log(l),l?alert("".concat(o.name," is already in contact")):c([o].concat(Object(s.a)(n)))}}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(g,{value:i,onChange:function(t){m(t.target.value)}}),Object(p.jsx)(N,{contacts:function(){var t=i.toLowerCase();return n.filter((function(e){return e.name.toString().toLowerCase().includes(t)}))}(),onDeleteContact:function(t){c(n.filter((function(e){return e.id!==t})))}})]})}r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.60a81b82.chunk.js.map