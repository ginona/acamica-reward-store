(this["webpackJsonpreward-store"]=this["webpackJsonpreward-store"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),s=(c(10),c(1)),r=c.n(s),a=c(7),i=c.n(a),o=c(2),u=c.p+"static/media/coin.1fc21bda.svg",l=c(3),d=c.n(l),j=c(4),b={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFjMjQ0OWI5NTIzZTAwMjA3ZTFmYzMiLCJpYXQiOjE2MDUxMTcwMDF9.vHMYlEKnpSVDSejVVyittmqUhIQ9pbD2U5CvqwQYJ4I"},h="https://coding-challenge-api.aerolab.co/user/me",m="https://coding-challenge-api.aerolab.co/products",p="https://coding-challenge-api.aerolab.co/user/points",f="https://coding-challenge-api.aerolab.co/redeem",O=1e3,x=5e3,v=7500;function g(){return(g=Object(j.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(p,{method:"POST",headers:b,body:JSON.stringify({amount:t})});case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var N=function(e){return g.apply(this,arguments)};function C(){return(C=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(h,{method:"GET",headers:b});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var y=function(){return C.apply(this,arguments)},w=r.a.createContext(),k=function(e){var t=r.a.useState({}),c=Object(o.a)(t,2),s=c[0],a=c[1],i=r.a.useState(0),u=Object(o.a)(i,2),l=u[0],d=u[1];return r.a.useEffect((function(){y().then((function(e){a(e),d(e.points)}))}),[]),Object(n.jsx)(w.Provider,{value:{users:s,setUsers:a,points:l,setPoints:d},children:e.children})};var S=function(e){var t=r.a.useState(!1),c=Object(o.a)(t,2),s=c[0],a=c[1],i=r.a.useContext(w),l=i.points,d=i.setPoints;r.a.useEffect((function(){s&&setTimeout((function(){a(!1)}),2e3)}),[s]);var j=function(e){N(e).then((function(t){d(l+e),a(!0)}))};return Object(n.jsx)("div",{className:"modal-screen",children:Object(n.jsxs)("section",{className:"addCoins",children:[Object(n.jsx)("div",{children:s&&Object(n.jsx)("div",{className:"successEnabled successAddPoints",children:Object(n.jsx)("h6",{className:"success-pointsSuccess",children:" Success "})})}),Object(n.jsx)("h4",{className:"title-addCoins",children:" Add more coins "}),Object(n.jsxs)("button",{className:"button-addCoins one",onClick:function(){return j(O)},children:[Object(n.jsx)("img",{src:u,alt:O}),O]}),Object(n.jsxs)("button",{className:"button-addCoins two",onClick:function(){return j(x)},children:[Object(n.jsx)("img",{src:u,alt:x}),x]}),Object(n.jsxs)("button",{className:"button-addCoins three",onClick:function(){return j(v)},children:[Object(n.jsx)("img",{src:u,alt:v}),v]}),Object(n.jsx)("button",{className:"close",onClick:function(){return e.setModal(!1)},children:" X "})]})})};var P=function(){var e=r.a.useState(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],a=r.a.useContext(w),i=a.users,l=a.points;return Object(n.jsxs)("section",{className:"header",children:[Object(n.jsxs)("div",{className:"userNameInfo",children:[Object(n.jsxs)("h6",{className:"userName",children:[" ",i.name," "]}),Object(n.jsxs)("button",{className:"button-headerCoins",onClick:function(){return s(!0)},children:[l,Object(n.jsx)("img",{src:u,alt:"coin"})]})]}),c?Object(n.jsx)(S,{setModal:s}):null,Object(n.jsx)("div",{className:"container-header",children:Object(n.jsx)("h6",{className:"title-header",children:" Electronics "})})]})},I=(c(15),c(5)),E=c.p+"static/media/buy-blue.c5c4f01c.svg",M=c.p+"static/media/emoji-smile.c20c3e2f.svg";function F(){return(F=Object(j.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(f,{method:"POST",headers:b,body:JSON.stringify({productId:t})});case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var T=function(e){return F.apply(this,arguments)};var J=function(e){var t=Object(s.useState)(!1),c=Object(o.a)(t,2),a=c[0],i=c[1],l=Object(s.useState)(""),d=Object(o.a)(l,2),j=d[0],b=d[1],h=r.a.useContext(w),m=h.points,p=h.setPoints;return Object(n.jsxs)("div",{className:"card",style:{width:"18rem"},onMouseOver:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[Object(n.jsx)("img",{src:e.img.url,className:a?"img-hovered card-img-top":"card-img-top",alt:e.name}),Object(n.jsx)("button",{type:"button",className:"btn btn-dark",disabled:e.cost>m,onClick:function(){return t=e._id,c=e.cost,T(t).then((function(e){b(e.message),p(m<=0?0:m-c)})),void console.log(j);var t,c},children:"Redeem now"}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:e.category}),Object(n.jsx)("h6",{className:"card-title",children:e.name})]}),a?Object(n.jsx)("div",{className:"card-hovered",children:Object(n.jsxs)("div",{className:"buttons-card-hovered",children:[Object(n.jsx)("img",{className:"buy",src:E,alt:"buy"}),Object(n.jsxs)("h5",{className:"card-cost",children:[" ",e.cost<=m?e.cost:"Te faltan "+(e.cost-m)," "]}),Object(n.jsx)("img",{className:"coin",src:u,alt:"coin"})]})}):null,"You've redeem the product successfully"===j?Object(n.jsxs)("div",{className:"product-modal",children:[Object(n.jsx)("button",{className:"close",id:"closeSuccessRedeeem",onClick:function(){return b("")},children:" X "}),Object(n.jsxs)("div",{className:"product-modal-div",children:[Object(n.jsx)("img",{className:"smileyFace",src:M,alt:"success"}),Object(n.jsxs)("h4",{className:"successRedeem",children:[" ",j," "]})]})]}):"undefined"===typeof j?Object(n.jsxs)("div",{className:"product-modal-failed",children:[Object(n.jsx)("button",{className:"close",id:"closeSuccessRedeeem",onClick:function(){return b("")},children:" X "}),Object(n.jsxs)("div",{className:"product-modal-div",children:[Object(n.jsx)("img",{className:"smileyFace",src:M,alt:"success"}),Object(n.jsxs)("h4",{className:"successRedeem",children:[" ",j," "]})]})]}):null]})};function A(){return(A=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(m,{method:"GET",headers:b});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var R=function(){return A.apply(this,arguments)},D=function(e,t){var c=r.a.useState(1),n=Object(o.a)(c,2),s=n[0],a=n[1],i=Math.ceil(e.length/t),u=e.slice((s-1)*t,s*t);return{next:function(){a(s+1)},prev:function(){a(s-1)},jump:function(e){a(e)},currentData:function(){var c=(s-1)*t,n=c+t;return e.slice(c,n)},currentPage:s,maxPage:i,currentArray:u}},L=function(){var e=r.a.useState([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=r.a.useState("recent"),i=Object(o.a)(a,2),u=i[0],l=i[1];r.a.useEffect((function(){R().then((function(e){return s(e)}))}),[]);var d=D(function(){switch(u){case"lowPrice":return c.sort((function(e,t){return parseFloat(e.cost)-parseFloat(t.cost)})).map((function(e,t){return Object(n.jsx)(J,Object(I.a)({},e),t)}));case"highPrice":return c.sort((function(e,t){return parseFloat(t.cost)-parseFloat(e.cost)})).map((function(e,t){return Object(n.jsx)(J,Object(I.a)({},e),t)}));default:return c.sort((function(e,t){return e._id<t._id?-1:1})).map((function(e,t){return Object(n.jsx)(J,Object(I.a)({},e),t)}))}}(),16),j=d.currentArray,b=d.next,h=d.prev,m=d.maxPage,p=d.currentPage;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(){return l("recent")},children:"Most Recent"}),Object(n.jsx)("button",{onClick:function(){return l("lowPrice")},children:"Price: Low to High"}),Object(n.jsx)("button",{onClick:function(){return l("highPrice")},children:"Price: High to Low"})]}),Object(n.jsx)("div",{className:"container-cards",children:j}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(){return h()},disabled:p<=1,children:"Prev"}),Object(n.jsx)("button",{onClick:function(){return b()},disabled:p>=m,children:"Next"})]})]})};var Q=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(k,{children:[Object(n.jsx)(P,{}),Object(n.jsx)(L,{})]})})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Q,{})}),document.getElementById("root")),U()}},[[16,1,2]]]);
//# sourceMappingURL=main.ed4fb3aa.chunk.js.map