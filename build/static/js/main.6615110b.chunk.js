(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(6),c=a.n(n),o=a(3),s=a(2);var m=()=>{const[e,t]=Object(l.useState)(""),[a,n]=Object(l.useState)(""),c=Object(s.p)();return r.a.createElement("div",{className:"flex items-center justify-center h-screen"},r.a.createElement("div",{className:"w-full max-w-xs"},r.a.createElement("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},r.a.createElement("h2",{className:"mb-4 text-xl font-bold text-center"},"Login"),r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2"},"Email"),r.a.createElement("input",{type:"email",value:e,onChange:e=>t(e.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})),r.a.createElement("div",{className:"mb-6"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2"},"Password"),r.a.createElement("input",{type:"password",value:a,onChange:e=>n(e.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})),r.a.createElement("div",{className:"flex items-center justify-between"},r.a.createElement("button",{type:"button",onClick:()=>{"admin123@gmail.com"===e&&"admin123"===a?(localStorage.setItem("authenticated",!0),c("/assets")):alert("Invalid Login Credential , Login Denied ....")},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Log In")))))};const i=[{ticker:"AAPL",price:150,category:"Tech"},{ticker:"GOOGL",price:2800,category:"Tech"},{ticker:"TSLA",price:700,category:"Auto"},{ticker:"AMZN",price:3300,category:"Retail"}];var u=()=>{const[e,t]=Object(l.useState)(""),[a,n]=Object(l.useState)("ticker"),c=(Object(s.p)(),i.filter(t=>t.ticker.toLowerCase().includes(e.toLowerCase())).sort((e,t)=>e[a]>t[a]?1:-1));return r.a.createElement("div",{className:"container mx-auto p-4"},r.a.createElement("h1",{className:"text-2xl font-bold mb-4"},"Asset List"),r.a.createElement("div",{className:"mb-4"},r.a.createElement("input",{type:"text",placeholder:"Search by Ticker...",value:e,onChange:e=>{t(e.target.value)},className:"border p-2 rounded w-full"})),r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{className:"mr-2"},"Sort by:"),r.a.createElement("select",{onChange:e=>{n(e.target.value)},className:"border p-2 rounded"},r.a.createElement("option",{value:"ticker"},"Ticker"),r.a.createElement("option",{value:"price"},"Price"))),r.a.createElement("table",{className:"min-w-full bg-white"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"py-2 px-4 bg-gray-200"},"Ticker"),r.a.createElement("th",{className:"py-2 px-4 bg-gray-200"},"Price"),r.a.createElement("th",{className:"py-2 px-4 bg-gray-200"},"Category"))),r.a.createElement("tbody",null,c.map((e,t)=>r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"border px-4 py-2"},e.ticker),r.a.createElement("td",{className:"border px-4 py-2"},"$",e.price),r.a.createElement("td",{className:"border px-4 py-2"},e.category))))))};var d=e=>{let{children:t}=e;return localStorage.getItem("authenticated")?t:r.a.createElement(s.a,{to:"/"})};var p=function(){return r.a.createElement(o.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",element:r.a.createElement(m,null)}),r.a.createElement(s.b,{path:"/assets",element:r.a.createElement(d,null,r.a.createElement(u,null))})))};a(15);c.a.createRoot(document.querySelector("#root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)))},7:function(e,t,a){e.exports=a(16)}},[[7,1,2]]]);
//# sourceMappingURL=main.6615110b.chunk.js.map