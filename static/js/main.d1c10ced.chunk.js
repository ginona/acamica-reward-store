(this["webpackJsonpreward-store"]=this["webpackJsonpreward-store"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),s=(c(10),c(1)),r=c.n(s),a=c(7),i=c.n(a),o=c(2),u=c.p+"static/media/coin.1fc21bda.svg",l=c(3),d=c.n(l),j=c(4),b={"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFjMjQ0OWI5NTIzZTAwMjA3ZTFmYzMiLCJpYXQiOjE2MDUxMTcwMDF9.vHMYlEKnpSVDSejVVyittmqUhIQ9pbD2U5CvqwQYJ4I"},h="https://coding-challenge-api.aerolab.co/user/me",m="https://coding-challenge-api.aerolab.co/products",O="https://coding-challenge-api.aerolab.co/user/points",p="https://coding-challenge-api.aerolab.co/redeem",x=1e3,f=5e3,v=7500;function g(){return(g=Object(j.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(O,{method:"POST",headers:b,body:JSON.stringify({amount:t})});case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var N=function(e){return g.apply(this,arguments)};function y(){return(y=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(h,{method:"GET",headers:b});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var C=function(){return y.apply(this,arguments)},P=r.a.createContext(),k=function(e){var t=r.a.useState({}),c=Object(o.a)(t,2),s=c[0],a=c[1],i=r.a.useState(0),u=Object(o.a)(i,2),l=u[0],d=u[1],j=r.a.useState(!1),b=Object(o.a)(j,2),h=b[0],m=b[1],O=r.a.useState([]),p=Object(o.a)(O,2),x=p[0],f=p[1];return r.a.useEffect((function(){C().then((function(e){a(e),d(e.points),f(e.redeemHistory)}))}),[]),Object(n.jsx)(P.Provider,{value:{users:s,setUsers:a,points:l,setPoints:d,history:h,setHistory:m,record:x},children:e.children})};var S=function(e){var t=r.a.useState(!1),c=Object(o.a)(t,2),s=c[0],a=c[1],i=r.a.useContext(P),l=i.points,d=i.setPoints,j=r.a.useState(""),b=Object(o.a)(j,2),h=b[0],m=b[1];r.a.useEffect((function(){s&&setTimeout((function(){a(!1)}),3e3)}),[s]);var O=function(e){N(e).then((function(t){t&&"Points Updated"===t.message?(d(l+e),a(!0),m(t.message)):(a(!0),m("Error, try againt later."))}))};return Object(n.jsx)("section",{className:"modal-screen",children:Object(n.jsxs)("div",{className:"addCoins",children:[Object(n.jsx)("div",{children:s&&Object(n.jsx)("div",{className:"Points Updated"===h?"successEnabled successAddPoints colorAddPointsSuccess":"successEnabled successAddPoints colorAddPointsError",children:Object(n.jsxs)("h6",{className:"success-pointsSuccess",children:[" ",h," "]})})}),Object(n.jsx)("h4",{className:"title-addCoins",children:" Add more coins "}),Object(n.jsxs)("button",{className:"button-addCoins one",onClick:function(){return O(x)},children:[Object(n.jsx)("img",{src:u,alt:x}),x]}),Object(n.jsxs)("button",{className:"button-addCoins two",onClick:function(){return O(f)},children:[Object(n.jsx)("img",{src:u,alt:f}),f]}),Object(n.jsxs)("button",{className:"button-addCoins three",onClick:function(){return O(v)},children:[Object(n.jsx)("img",{src:u,alt:v}),v]}),Object(n.jsx)("button",{className:"close",onClick:function(){return e.setModal(!1)},children:" X "})]})})};var w=function(){var e=r.a.useState(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],a=r.a.useContext(P),i=a.users,l=a.points,d=a.history,j=a.setHistory;return Object(n.jsxs)("header",{className:"header",children:[Object(n.jsxs)("div",{className:"headerOptions",children:[Object(n.jsxs)("div",{className:"historyButtons",children:[Object(n.jsx)("div",{onClick:function(){return j(!0)},style:{display:d?"none":"block"},children:"History"}),Object(n.jsx)("div",{onClick:function(){return j(!1)},style:{display:d?"block":"none"},children:"Catalog"})]}),Object(n.jsxs)("div",{className:"userNameInfo",children:[Object(n.jsxs)("h6",{className:"userName",children:[" ",i.name," "]}),Object(n.jsxs)("button",{className:"button-headerCoins",onClick:function(){return s(!0)},children:[l,Object(n.jsx)("img",{src:u,alt:"coin"})]})]})]}),c?Object(n.jsx)(S,{setModal:s}):null,Object(n.jsx)("div",{className:"container-header",children:Object(n.jsx)("h6",{className:"title-header",children:" Electronics "})})]})},E=(c(15),c(5)),I=c.p+"static/media/buy-blue.c5c4f01c.svg",F=c.p+"static/media/emoji-smile.c20c3e2f.svg",M=c.p+"static/media/sad-emoji.5a0ed267.svg";function T(){return(T=Object(j.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(p,{method:"POST",headers:b,body:JSON.stringify({productId:t})});case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var A=function(e){return T.apply(this,arguments)};var J=function(e){var t=Object(s.useState)(!1),c=Object(o.a)(t,2),a=c[0],i=c[1],l=Object(s.useState)(""),d=Object(o.a)(l,2),j=d[0],b=d[1],h=r.a.useContext(P),m=h.points,O=h.setPoints;return Object(n.jsxs)("div",{className:"card",style:{width:"18rem"},onMouseOver:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[Object(n.jsx)("img",{src:e.img.url,className:a?"img-hovered card-img-top":"card-img-top",alt:e.name}),Object(n.jsx)("button",{type:"button",className:"btn btn-dark",disabled:e.cost>m,onClick:function(){return t=e._id,c=e.cost,void A(t).then((function(e){b(e.message),O(m<=0?0:m-c)}));var t,c},children:"Redeem now"}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:e.category}),Object(n.jsx)("h6",{className:"card-title",children:e.name})]}),a?Object(n.jsx)("div",{className:"card-hovered",children:Object(n.jsxs)("div",{className:"buttons-card-hovered",children:[Object(n.jsx)("img",{className:"buy",src:I,alt:"buy"}),Object(n.jsxs)("h5",{className:"card-cost",children:[" ",e.cost<=m?e.cost:"Te faltan "+(e.cost-m)," "]}),Object(n.jsx)("img",{className:"coin",src:u,alt:"coin"})]})}):null,"You've redeem the product successfully"===j?Object(n.jsxs)("div",{className:"product-modal",children:[Object(n.jsx)("button",{className:"close",id:"closeSuccessRedeeem",onClick:function(){return b("")},children:" X "}),Object(n.jsxs)("div",{className:"product-modal-div",children:[Object(n.jsx)("img",{className:"face",src:F,alt:"success"}),Object(n.jsxs)("h4",{className:"successRedeem",children:[" ",j," "]})]})]}):"undefined"===typeof j?Object(n.jsxs)("div",{className:"product-modal-failed",children:[Object(n.jsx)("button",{className:"close",id:"closeSuccessRedeeem",onClick:function(){return b("")},children:" X "}),Object(n.jsxs)("div",{className:"product-modal-div",children:[Object(n.jsx)("img",{className:"face",src:M,alt:"success"}),Object(n.jsx)("h4",{className:"successRedeem",children:" Error, try again. "})]})]}):null]})};function R(){return(R=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(m,{method:"GET",headers:b});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log("Error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var L=function(){return R.apply(this,arguments)},U=function(e,t){var c=r.a.useState(1),n=Object(o.a)(c,2),s=n[0],a=n[1],i=Math.ceil(e.length/t),u=e.slice((s-1)*t,s*t);return{next:function(){a(s+1)},prev:function(){a(s-1)},jump:function(e){a(e)},currentPage:s,maxPage:i,currentArray:u}},H=function(){var e=r.a.useState([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=r.a.useState("recent"),i=Object(o.a)(a,2),u=i[0],l=i[1],d=r.a.useContext(P).history;r.a.useEffect((function(){L().then((function(e){return s(e)}))}),[]);var j=U(function(){switch(u){case"lowPrice":return c.sort((function(e,t){return parseFloat(e.cost)-parseFloat(t.cost)})).map((function(e,t){return Object(n.jsx)(J,Object(E.a)({},e),t)}));case"highPrice":return c.sort((function(e,t){return parseFloat(t.cost)-parseFloat(e.cost)})).map((function(e,t){return Object(n.jsx)(J,Object(E.a)({},e),t)}));default:return c.sort((function(e,t){return e._id<t._id?-1:1})).map((function(e,t){return Object(n.jsx)(J,Object(E.a)({},e),t)}))}}(),16),b=j.currentArray,h=j.next,m=j.prev,O=j.maxPage,p=j.currentPage;return Object(n.jsxs)("section",{style:{display:d?"none":"block"},children:[Object(n.jsxs)("section",{className:"filters",children:[Object(n.jsx)("button",{className:"btnFilter",onClick:function(){return l("recent")},children:"Most recent"}),Object(n.jsx)("button",{className:"btnFilter",onClick:function(){return l("lowPrice")},children:"Lowest price"}),Object(n.jsx)("button",{className:"btnFilter",onClick:function(){return l("highPrice")},children:"Highest price"})]}),Object(n.jsx)("section",{className:"container-cards",children:b}),Object(n.jsxs)("section",{className:"buttonsPagination",children:[Object(n.jsx)("button",{className:"btnPaginationLeft",onClick:function(){return m()},disabled:p<=1}),Object(n.jsx)("button",{className:"btnPaginationRight",onClick:function(){return h()},disabled:p>=O})]})]})},D=function(){var e=r.a.useContext(P),t=e.history,c=e.record,s=U(c,16),a=s.currentArray,i=s.next,o=s.prev,u=s.maxPage,l=s.currentPage;return Object(n.jsxs)("div",{style:{display:t?"block":"none"},children:[Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:" Product Id "}),Object(n.jsx)("th",{children:" Product Name "}),Object(n.jsx)("th",{children:" Product Cost "})]})}),Object(n.jsx)("tbody",{children:a.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.productId}),Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.cost})]},e.productId+t)}))})]}),Object(n.jsxs)("section",{className:"buttonsPagination",children:[Object(n.jsx)("button",{className:"btnPaginationLeft",onClick:function(){return o()},disabled:l<=1}),Object(n.jsx)("button",{className:"btnPaginationRight",onClick:function(){return i()},disabled:l>=u})]})]})};var Q=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(k,{children:[Object(n.jsx)(w,{}),Object(n.jsx)(H,{}),Object(n.jsx)(D,{})]})})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Q,{})}),document.getElementById("root")),X()}},[[16,1,2]]]);
//# sourceMappingURL=main.d1c10ced.chunk.js.map