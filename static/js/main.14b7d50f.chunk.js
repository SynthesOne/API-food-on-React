(this.webpackJsonpfood=this.webpackJsonpfood||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(19),s=c.n(a),i=(c(25),c(6)),j=c(2),o=(c(26),c(0));var l=function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsxs)("div",{className:"wrap",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)(i.b,{to:"/",children:"Food"})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/contacts",children:"Contacts"})})]})})]})})};c(33);var b=function(){return Object(o.jsxs)("div",{className:"footer",children:["Copyright - ",(new Date).getFullYear()]})},u=c(10),d=c(9),h=c.n(d),O=c(13),x="https://www.themealdb.com/api/json/v1/".concat("1","/"),p=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"categories.php"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"lookup.php?i=").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"filter.php?c=").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();c(35);var v=function(){return Object(o.jsxs)("div",{className:"lds-ripple",children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})},g=c(12);c(36);var N=function(e){var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:c,alt:t}),Object(o.jsx)("h2",{children:t}),Object(o.jsx)("p",{children:n.slice(0,80)}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/category/".concat(t),children:"Watch category"})})]})};c(37);var w=function(e){var t=e.catalog,c=void 0===t?[]:t;return Object(o.jsx)("div",{className:"list",children:c.map((function(e){return Object(o.jsx)(N,Object(g.a)({},e),e.idCategory)}))})};var y=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){p().then((function(e){r(e.categories)}))}),[]),Object(o.jsx)("div",{className:"wrap",children:c.length?Object(o.jsx)(w,{catalog:c}):Object(o.jsx)(v,{})})};var k=function(e){var t=e.text;return Object(o.jsxs)("div",{className:"wrap",style:{padding:"0 20px"},children:[Object(o.jsx)("h2",{children:t.title}),Object(o.jsx)("p",{children:t.description})]})};var C=function(){return Object(o.jsx)("div",{className:"wrap",children:Object(o.jsx)("h2",{children:"Contacts"})})};var M=function(e){var t=e.strMeal,c=e.strMealThumb,n=e.idMeal;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:c,alt:t}),Object(o.jsx)("h2",{children:t}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/meal/".concat(n),children:"Whatch Recipe"})})]})};var A=function(e){var t=e.meals;return Object(o.jsx)("div",{className:"list",children:t.map((function(e){return Object(o.jsx)(M,Object(g.a)({},e),e.idMeal)}))})};c(38);var B=function(){var e=Object(j.h)().name,t=Object(n.useState)([]),c=Object(u.a)(t,2),r=c[0],a=c[1],s=Object(j.g)().goBack;return Object(n.useEffect)((function(){m(e).then((function(e){return a(e.meals)}))}),[e]),Object(o.jsxs)("div",{className:"wrap",children:[r.length?Object(o.jsx)(A,{meals:r}):Object(o.jsx)(v,{}),Object(o.jsx)("button",{className:"btnHome",onClick:s,children:"Comback"})]})};c(39);var T=function(){var e=Object(j.h)().id,t=Object(n.useState)({}),c=Object(u.a)(t,2),r=c[0],a=c[1],s=Object(j.g)().goBack;return Object(n.useEffect)((function(){f(e).then((function(e){return a(e.meals[0])}))})),Object(o.jsxs)("div",{className:"wrap",children:[r.idMeal?Object(o.jsxs)("div",{className:"recipe",children:[Object(o.jsx)("img",{src:r.strMealThumb,alt:r.strMeal}),Object(o.jsx)("h1",{children:r.strMeal}),Object(o.jsxs)("div",{children:["Category: ",Object(o.jsx)("h5",{children:r.strCategory})]}),r.strArea?Object(o.jsxs)("div",{children:["Area: ",Object(o.jsx)("h5",{children:r.strArea})]}):null,Object(o.jsx)("p",{children:r.strInstructions})]}):Object(o.jsx)(v,{}),Object(o.jsx)("button",{className:"btnHome",onClick:s,children:"Go back"})]})};var D=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(l,{}),Object(o.jsx)("main",{className:"content",children:Object(o.jsxs)(j.d,{children:[Object(o.jsx)(j.b,{path:"/",exact:!0,component:y}),Object(o.jsx)(j.b,{path:"/about",children:Object(o.jsx)(k,{text:{title:"Welocme to TheMealDB",description:"Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world."}})}),Object(o.jsx)(j.b,{path:"/contacts",component:C}),Object(o.jsx)(j.b,{path:"/category/:name",component:B}),Object(o.jsx)(j.b,{path:"/meal/:id",component:T}),Object(o.jsx)(j.a,{to:"/"})]})}),Object(o.jsx)(b,{})]})})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(D,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.14b7d50f.chunk.js.map