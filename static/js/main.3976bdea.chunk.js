(this["webpackJsonpformik2-sample"]=this["webpackJsonpformik2-sample"]||[]).push([[0],{289:function(e,a,t){e.exports=t(495)},488:function(e,a,t){},495:function(e,a,t){"use strict";t.r(a);t(290),t(299);var n=t(0),r=t.n(n),l=t(20),c=t.n(l),o=(t(488),t(170)),m=t(202),i=t(55),s=t(531),u=t(539),p=t(540),d=t(541),E=t(536),h=t(537),y=t(543),b=t(281),v=t(534),f=t(496),g=t(535),k=t(527),O=t(529),j=t(497),x=t(530),S=t(279),M=t.n(S),N=t(538),C=Object(N.a)((function(){return{typographyStyles:{flex:1}}})),D=function(e){var a=e.isDarkMode,t=e.setIsDarkMode,n=C();return r.a.createElement(k.a,{position:"static"},r.a.createElement(O.a,null,r.a.createElement(j.a,{className:n.typographyStyles},"Material UI Formik 2"),r.a.createElement(f.a,{title:"use this switch for dark/light mode"},r.a.createElement(M.a,null)),r.a.createElement(x.a,{checked:a,onChange:function(){return t(!a)}})))},I=t(116),J=t(169),T=function(e){var a=e.label,t=Object(m.a)(e,["label"]),n=Object(i.e)(t),l=Object(o.a)(n,1)[0];return r.a.createElement(s.a,Object.assign({},l,{control:r.a.createElement(u.a,null),label:a}))},q=function(e){var a=e.placeholder,t=Object(m.a)(e,["placeholder"]),n=Object(i.e)(t),l=Object(o.a)(n,2),c=l[0],s=l[1],u=s.error&&s.touched?s.error:"";return r.a.createElement(p.a,Object.assign({placeholder:a},c,{helperText:u,autoComplete:"off",error:!!u}))},w=I.b({firstName:I.c().required().max(10),pets:I.a().of(I.b({name:I.c().required()}))}),z=function(){var e=Object(n.useState)(!0),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(b.a)({palette:{type:t?"dark":"light",primary:J.a,secondary:J.a}});return r.a.createElement(v.a,{theme:c},r.a.createElement(f.a,{elevation:0,square:!0,style:{height:"100%"}},r.a.createElement(g.a,{container:!0,direction:"column"},r.a.createElement(g.a,{item:!0},r.a.createElement(D,{isDarkMode:t,setIsDarkMode:l})),r.a.createElement(g.a,{item:!0,container:!0},r.a.createElement(g.a,{item:!0,xs:!1,sm:1}),r.a.createElement(g.a,{item:!0,xs:12,sm:10},r.a.createElement("div",{style:{margin:30}},r.a.createElement(i.d,{initialValues:{firstName:"",lastName:"",isTall:!1,cookies:[],yoghurt:"",pets:[{type:"cat",name:"jarvis",id:Math.random()}]},validationSchema:w,onSubmit:function(e,a){var t=a.setSubmitting;a.resetForm;t(!0),console.log("submit",e),t(!1)}},(function(e){var a=e.values,t=e.errors,n=e.isSubmitting;e.handleChange,e.handleBlur,e.handleSubmit;return r.a.createElement(i.c,null,r.a.createElement(q,{placeholder:"first name",name:"firstName",type:"input"}),r.a.createElement("div",null,r.a.createElement(q,{placeholder:"last name",name:"lastName",type:"input"})),r.a.createElement(i.a,{name:"isTall",type:"checkbox",as:d.a}),r.a.createElement("div",null,"cookies:"),r.a.createElement(i.a,{name:"cookies",value:"chocolate chip",type:"checkbox",as:d.a}),r.a.createElement(i.a,{name:"cookies",value:"snickerdoodle",type:"checkbox",as:d.a}),r.a.createElement(i.a,{name:"cookies",value:"sugar",type:"checkbox",as:d.a}),r.a.createElement("div",null,"yoghurt:"),r.a.createElement(T,{name:"yoghurt",type:"radio",value:"peach",label:"peach"}),r.a.createElement(T,{name:"yoghurt",type:"radio",value:"blueberry",label:"blueberry"}),r.a.createElement(T,{name:"yoghurt",type:"radio",value:"apple",label:"apple"}),r.a.createElement(i.b,{name:"pets"},(function(e){return r.a.createElement("div",null,r.a.createElement(E.a,{onClick:function(){return e.push({type:"frog",name:"",id:""+Math.random()})},variant:"outlined",color:"secondary",size:"small"},"add pet"),a.pets.map((function(a,t){var n="pets.".concat(t,".name");return r.a.createElement("div",{key:a.id},r.a.createElement(q,{placeholder:"pet name",name:n}),r.a.createElement(i.a,{name:"pets.".concat(t,".type"),type:"select",as:h.a},r.a.createElement(y.a,{value:"cat"},"cat"),r.a.createElement(y.a,{value:"dog"},"dog"),r.a.createElement(y.a,{value:"frog"},"frog")),r.a.createElement(E.a,{onClick:function(){return e.remove(t)},variant:"outlined",color:"secondary",size:"small"},"x"))})))})),r.a.createElement("div",{style:{paddingTop:30}},r.a.createElement(E.a,{disabled:n,type:"submit",variant:"contained",color:"primary"},"submit")),r.a.createElement("pre",null,JSON.stringify(a,null,2)),r.a.createElement("pre",null,JSON.stringify(t,null,2)))})))),r.a.createElement(g.a,{item:!0,xs:!1,sm:1})))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root"))}},[[289,1,2]]]);
//# sourceMappingURL=main.3976bdea.chunk.js.map