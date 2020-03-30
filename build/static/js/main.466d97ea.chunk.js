(this["webpackJsonpgithub-finder"]=this["webpackJsonpgithub-finder"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/spinner.d6156cc6.gif"},32:function(e,t,a){e.exports=a(61)},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),s=a(5),u=a(7),o=function(e){return r.a.createElement("nav",{className:"navbar bg-primary"},r.a.createElement(s.b,{to:"/"},r.a.createElement("h1",null,r.a.createElement("i",{className:e.icon})," ",e.title)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/about"},"About"))))};o.defaultProps={title:"Github Finder",icon:"fa fa-github"};var i=o,m=a(11),E=Object(n.createContext)(),p=Object(n.createContext)(),d=function(){var e=Object(n.useContext)(E),t=Object(n.useContext)(p),a=Object(n.useState)(""),l=Object(m.a)(a,2),c=l[0],s=l[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),""===c?t.setAlert("please enter a name","light"):(e.searchUsers(c),s(""))},className:"form"},r.a.createElement("input",{type:"text",name:"text",placeholder:"Search users...",value:c,onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-primary btn-block"})),e.users.length>0&&r.a.createElement("button",{className:"btn btn-light btn-block",onClick:e.clearUsers},"Clear"))},b=function(e){var t=e.user,a=t.avatar_url,n=t.login;return r.a.createElement("div",null,r.a.createElement("div",{className:"card text-center"},r.a.createElement("img",{src:a,alt:"avatar",className:"round-img",style:{width:"60px"}}),r.a.createElement("h3",null,n),r.a.createElement(s.b,{to:"/user/".concat(n),className:"btn btn-success btn-sm my-1"},"more")))},g=a(31),f=a.n(g),h=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:f.a,alt:'"Loading..."',style:{width:"50px",margin:"auto",display:"block"}}))},v={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:"1rem"},_=function(){var e=Object(n.useContext)(E),t=e.loading,a=e.users;return t?r.a.createElement(h,null):r.a.createElement("div",{style:v},a.map((function(e){return r.a.createElement(b,{key:e.id,user:e})})))},O=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(d,null),r.a.createElement(_,null))},y=a(8),S=function(e){var t=e.repo;return r.a.createElement("div",{className:"card"},r.a.createElement("h3",null,r.a.createElement("a",{className:"text-dark",href:t.html_url},t.name)))};S.propType={repo:a.n(y).a.object.isRequired};var N,T,x=S,R=function(e){return e.repos.map((function(e){return r.a.createElement(x,{repo:e,key:e.id})}))},C=function(e){var t=e.match,a=Object(n.useContext)(E),l=a.user,c=a.loading,u=a.getUser,o=a.getRepos,i=a.repos;Object(n.useEffect)((function(){u(t.params.login),o(t.params.login)}),[]);var m=l.name,p=l.avatar_url,d=l.location,b=l.bio,g=l.blog,f=l.login,v=l.html_url,_=l.followers,O=l.following,y=l.public_repos,S=l.public_gists,N=l.hireable,T=l.company;return c?r.a.createElement(h,null):r.a.createElement(n.Fragment,null,r.a.createElement(s.b,{to:"/",className:"btn btn-light"},"Back"),r.a.createElement("div",{className:"card grid-2"},r.a.createElement("div",{className:"all-center"},r.a.createElement("img",{src:p,className:"round-img",alt:"avatar",style:{width:"150px"}}),r.a.createElement("h1",null,m),r.a.createElement("p",null,"Location: ",d),r.a.createElement("p",null,"Hirable :"," ",N?r.a.createElement("i",{className:"fa fa-check text-success"}):r.a.createElement("i",{className:"fa fa-times-circle text-danger"}))),r.a.createElement("div",null,b&&r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"Bio"),r.a.createElement("p",null,b)),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,f&&r.a.createElement(n.Fragment,null,r.a.createElement("strong",null,"Username: ")," ",f)),r.a.createElement("li",null,T&&r.a.createElement(n.Fragment,null,r.a.createElement("strong",null,"Company: ")," ",T)),r.a.createElement("li",null,g&&r.a.createElement(n.Fragment,null,r.a.createElement("strong",null,"Website: ")," ",g)),r.a.createElement("a",{href:v,className:"btn btn-success my-1"},"Github")))),r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"badge badge-dark"},"Followers: ",_),r.a.createElement("div",{className:"badge badge-dark"},"Following: ",O),r.a.createElement("div",{className:"badge badge-dark"},"Public Repos: ",y),r.a.createElement("div",{className:"badge badge-dark"},"Public Gists: ",S)),r.a.createElement(R,{repos:i}))},j=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",{className:"lead"},"The page you are looking for does not exist"))},k=function(){var e=Object(n.useContext)(p).alert;return null!==e&&r.a.createElement("div",{className:"alert alert-".concat(e.type)},r.a.createElement("i",{className:"fa fa-info-circle"})," ",e.message)},U=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"About this app"),r.a.createElement("p",null,"App to search Github users"),r.a.createElement("p",null,"Version 1.0.0"))},A=a(10),w=a.n(A),L=a(13),G=a(14),P=a.n(G),D=a(12),F=function(e,t){switch(t.type){case"SET_LOADING":return Object(D.a)({},e,{loading:!0});case"SEARCH_USERS":return Object(D.a)({},e,{users:t.payload,loading:!1});case"GET_USER":return Object(D.a)({},e,{user:t.payload,loading:!1});case"GET_REPOS":return Object(D.a)({},e,{repos:t.payload,loading:!1});case"CLEAR_USERS":return Object(D.a)({},e,{users:[],loading:!1});default:return e}};N=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_ID,T=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_CLIENT_SECRET;var H=function(e){var t=Object(n.useReducer)(F,{users:[],user:{},repos:[],loading:!1}),a=Object(m.a)(t,2),l=a[0],c=a[1],s=function(){var e=Object(L.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,P.a.get("https://api.github.com/search/users?q=".concat(t,"&client_id=").concat(N,"&client_secret=").concat(T));case 3:a=e.sent,c({type:"SEARCH_USERS",payload:a.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(L.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,P.a.get("https://api.github.com/users/".concat(t,"?client_id=").concat(N,"&client_secret=").concat(T));case 3:a=e.sent,c({type:"GET_USER",payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(L.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,P.a.get("https://api.github.com/users/".concat(t,"/repos?per_page=5&sort=created:asc?client_id=").concat(N,"&client_secret=").concat(T));case 3:a=e.sent,c({type:"GET_REPOS",payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){return c({type:"SET_LOADING"})};return r.a.createElement(E.Provider,{value:{users:l.users,user:l.user,repos:l.repos,loading:l.loading,searchUsers:s,getUser:u,getRepos:o,clearUsers:function(){c({type:"CLEAR_USERS"})}}},e.children)},I=function(e,t){switch(t.type){case"SET_ALERT":return t.payload;case"REMOVE_ALERT":return null;default:return e}},B=function(e){var t=Object(n.useReducer)(I,null),a=Object(m.a)(t,2),l=a[0],c=a[1];return r.a.createElement(p.Provider,{value:{alert:l,setAlert:function(e,t){c({type:"SET_ALERT",payload:{message:e,type:t}}),setTimeout((function(){return c({type:"REMOVE_ALERT"})}),5e3)}}},e.children)},W=(a(60),function(){return r.a.createElement(H,null,r.a.createElement(B,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement("div",{className:"container"},r.a.createElement(k,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:O}),r.a.createElement(u.a,{exact:!0,path:"/about",component:U}),r.a.createElement(u.a,{exact:!0,path:"/user/:login",component:C}),r.a.createElement(u.a,{component:j})))))))});c.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.466d97ea.chunk.js.map