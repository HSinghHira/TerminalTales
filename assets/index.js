const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./tools-html.js","./framework-main.js","./external-utils.js","./ui-components.js","./components.js","./navigation.js","./tools-text.js"])))=>i.map(i=>d[i]);
import{r as d,j as e,g as x,h as j}from"./framework-main.js";import{R as _,a as c,H as T}from"./navigation.js";import{R as p,b as g}from"./ui-components.js";import{M as P}from"./tools-html.js";import{r as u,_ as m,H as C,P as E,F as v}from"./components.js";import{H as A,A as L,N as R,C as y}from"./pages.js";import"./external-utils.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const w="G-6CS85B5JEC";p.initialize(w);const h=Object.assign({"./Tools/HTML-Tools/HTML-Minify/Article.jsx":()=>m(()=>import("./tools-html.js").then(o=>o.A),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./Tools/HTML-Tools/HTML-Minify/index.jsx":()=>m(()=>import("./tools-html.js").then(o=>o.i),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./Tools/Text-Tools/Case-Converter/Article.jsx":()=>m(()=>import("./tools-text.js").then(o=>o.A),__vite__mapDeps([6,1,2,4,5,3]),import.meta.url),"./Tools/Text-Tools/Case-Converter/Buttons.jsx":()=>m(()=>import("./tools-text.js").then(o=>o.B),__vite__mapDeps([6,1,2,4,5,3]),import.meta.url),"./Tools/Text-Tools/Case-Converter/index.jsx":()=>m(()=>import("./tools-text.js").then(o=>o.i),__vite__mapDeps([6,1,2,4,5,3]),import.meta.url)});function O(o){return o.replace(/\\/g,"/")}const I=(o,s)=>{var n,a;try{const t=(n=u.find(l=>l.category.toLowerCase().replace(/\s+/g,"")===o.toLowerCase().replace(/\s+/g,"")))==null?void 0:n.originalFolder;if(!t)throw new Error(`Category folder not found for: ${o}`);const r=(a=u.find(l=>l.category===o))==null?void 0:a.projects.find(l=>l.name===s);if(!r)throw new Error(`Project not found for: ${s} in category ${o}`);const i=O(`./Tools/${t}/${r.fileName}`),f=h[i];if(!f)throw console.error("Available paths:",Object.keys(h)),new Error(`Component module not found for path: ${i}`);return x.lazy(f)}catch(t){return console.error("Component loading error:",t),Promise.reject(t)}},N=()=>(d.useEffect(()=>{p.pageview(window.location.pathname+window.location.search)},[]),e.jsxs(_,{children:[e.jsx(c,{path:"/",element:e.jsx(A,{})}),e.jsx(c,{path:"/about",element:e.jsx(L,{})}),e.jsx(c,{path:"*",element:e.jsx(R,{})}),u.map(o=>e.jsxs(x.Fragment,{children:[e.jsx(c,{path:`/${o.urlPath}`,element:e.jsx(y,{})}),o.projects.map(s=>{const n=I(o.category,s.name);return e.jsx(c,{path:`/${o.urlPath}/:projectSlug`,element:e.jsx(d.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(n,{})})},s.path)})]},o.urlPath))]})),H="G-6CS85B5JEC";p.initialize(H);const M=()=>e.jsxs(g,{children:[e.jsx(P,{}),e.jsxs("div",{className:"min-h-screen",children:[e.jsx(C,{}),e.jsxs("div",{className:"xl:pl-80",children:[e.jsx("div",{className:"container mx-auto px-4 pt-20",children:e.jsx("main",{className:"min-h-[calc(100vh-5rem)]",children:e.jsx(E,{children:e.jsx(N,{})})})}),e.jsx(v,{})]})]})]});j(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(T,{children:e.jsx(M,{})})}));