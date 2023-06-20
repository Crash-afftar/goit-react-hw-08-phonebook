"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[282],{282:function(n,e,r){r.r(e),r.d(e,{default:function(){return O}});var t,o,a,i,s,l,d,c,u,p,h=r(9434),m=r(6382),x=r(8174),f=function(n){return n.filter.search},g=function(n){return n.contacts.items},b=r(8012),v=r(168),j=r(6444),Z=j.ZP.form(t||(t=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 20px;\n"]))),y=j.ZP.label(o||(o=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 80%;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 10px;\n"]))),k=j.ZP.input(a||(a=(0,v.Z)(["\n  width: 100%;\n  padding: 20px 10px;\n  margin-bottom: 10px;\n  border: none;\n  border-radius: 20px;\n  background-color: #fff;\n  outline: none;\n  transition: all 0.5s ease 0s;\n\n  &:hover {\n    background-color: #d9dae0;\n  }\n"]))),w=j.ZP.button(i||(i=(0,v.Z)(["\n  display: inline-block;\n  padding: 10px 20px;\n  margin: 0px 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: rgb(20, 58, 46);\n  color: rgb(255, 255, 255);\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.5s ease 0s;\n \n  &:hover,\n  &:focus {\n    background-color: #fff;\n    color: rgb(20, 58, 46);\n  }\n\n  &:active {\n    scale: 1.1  ;\n  }\n"]))),P=r(184),C=function(){var n=(0,h.I0)(),e=(0,h.v9)(g);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(x.Ix,{}),(0,P.jsxs)(Z,{title:"Phonebook",onSubmit:function(r){r.preventDefault();var t=r.target,o=t.elements.name.value,a=t.elements.number.value,i={id:(0,m.x0)(),name:o,phone:a};if(e.find((function(n){return n.phone===a})))return x.Am.warn("".concat(o," is already in contacts."),{position:"top-right",autoClose:500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"});n((0,b.el)(i)),t.reset()},children:[(0,P.jsxs)(y,{children:["Name:",(0,P.jsx)(k,{id:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,P.jsxs)(y,{children:["Number:",(0,P.jsx)(k,{id:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,P.jsx)(w,{type:"submit",children:"Add contact"})]})]})},A=j.ZP.ul(s||(s=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 80%;\n  padding: 10px;\n  margin: 0;\n"]))),z=j.ZP.li(l||(l=(0,v.Z)(["\n  display: flex;\n\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 5px;\n  margin-bottom: 10px;\n  border: none;\n  border-radius: 15px;\n\n  background-color: #fff;\n  transition: 0.5s;\n\n  &:hover {\n    background-color: #d9dae0;\n  }\n"]))),_=j.ZP.button(d||(d=(0,v.Z)(["\n  display: inline-block;\n  padding: 5px;\n\n  margin: 0;\n  border: none; \n  border-radius: 50%;\n  background-color: rgb(20, 58, 46);\n  color: rgb(255, 255, 255);\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.0;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.5s ease 0s;\n  \n\n  &:hover,\n  &:focus {\n    background-color: #fff;\n    color: rgb(255, 0, 0);\n  }\n\n\n  \n  &:active {\n    scale: 1.1;\n  }\n"]))),F=j.ZP.h3(c||(c=(0,v.Z)(["\n  margin: 0 auto;\n"]))),I=function(){var n=(0,h.I0)(),e=(0,h.v9)(g),r=0===e.length;return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(A,{children:[r&&(0,P.jsx)(F,{children:"There are currently no contacts in your Phonebook"}),e.map((function(e){var r=e.name,t=e.phone,o=e.id;return(0,P.jsxs)(z,{children:[(0,P.jsx)("span",{children:"".concat(r,": ").concat(t)}),(0,P.jsx)(_,{type:"button",onClick:function(){n((0,b._f)(o))},children:"X"})]},o)}))]})})},N=r(4808),q=j.ZP.label(u||(u=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 50%;\n  padding: 0;\n    margin-bottom: 10px;\n"]))),B=j.ZP.input(p||(p=(0,v.Z)(["\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 10px;\n  border: none;\n  border-radius: 15px;\n  background-color: #fff;\n  transition: 0.5s;\n  outline: none;\n\n  &:hover {\n    background-color: #d9dae0;\n  }\n"]))),J=function(){var n=(0,h.v9)(f),e=(0,h.I0)();return(0,P.jsxs)(q,{htmlFor:"filter",children:["Find contacts by name:",(0,P.jsx)(B,{id:"filter",type:"text",name:"filter",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(n){var r=n.target.value;e((0,N.x)(r))},required:!0})]})},M=r(2791);function O(){var n=(0,h.I0)();return(0,M.useEffect)((function(){n((0,b.yF)())}),[n]),(0,P.jsx)("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",fontSize:36,color:"#010101"},children:(0,P.jsxs)("div",{children:[(0,P.jsx)("h1",{children:"Phonebook"}),(0,P.jsx)(C,{}),(0,P.jsx)("h2",{children:"Contacts"}),(0,P.jsx)(J,{}),(0,P.jsx)(I,{}),(0,P.jsx)(x.Ix,{autoClose:2500,limit:3})]})})}}}]);
//# sourceMappingURL=282.bf27f2a0.chunk.js.map