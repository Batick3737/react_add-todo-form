(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),r=n(9),s=n(2),c=n(6),o=n(1),l=(n(14),n(8)),d=n.n(l),u=n(0),m=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:Julianne.OConner@kory.org",children:null===t||void 0===t?void 0:t.name})},j=function(e){var t=e.todo;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(u.jsx)(m,{user:t.user})]})},b=function(e){var t=e.todos;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)("article",{"data-id":e.id,className:d()("TodoInfo",{"TodoInfo--completed":e.completed}),children:Object(u.jsx)(j,{todo:e})},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:h.find((function(t){return t.id===e.userId}))||null})})),f=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(o.useState)(""),c=Object(s.a)(i,2),l=c[0],d=c[1],m=Object(o.useState)(O),j=Object(s.a)(m,2),f=j[0],p=j[1],x=Object(o.useState)(!1),v=Object(s.a)(x,2),y=v[0],S=v[1],g=Object(o.useState)(!1),N=Object(s.a)(g,2),I=N[0],C=N[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),function(){var e;""!==n&&""!==l&&(p([].concat(Object(r.a)(f),[{id:f.length+1,title:n,completed:!1,userId:Number(null===(e=h.find((function(e){return e.name===l})))||void 0===e?void 0:e.id),user:h.find((function(e){return e.name===l}))||null}])),a(""),d("")),""===n&&S(!0),""===l&&C(!0)}()},children:[Object(u.jsxs)("div",{className:"field",children:["Title:"," ",Object(u.jsx)("input",{name:"title",type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:n,onChange:function(e){S(!1),a(e.target.value)}}),y&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:["User:"," ",Object(u.jsxs)("select",{name:"user","data-cy":"userSelect",value:l,onChange:function(e){C(!1),d(e.target.value)},children:[Object(u.jsx)("option",{value:"",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name})}))]}),I&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)("section",{className:"TodoList",children:Object(u.jsx)(b,{todos:f})})]})};i.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.79c53f1f.chunk.js.map