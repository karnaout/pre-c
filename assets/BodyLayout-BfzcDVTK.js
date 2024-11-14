import{r as c,at as n,j as r,au as l,az as A,aA as u,C as j,R as h,a as $,$ as k,Y as x}from"./index-CZCi8_lK.js";const p=c.forwardRef(({className:t,bsPrefix:e,as:a="div",...s},d)=>(e=n(e,"card-body"),r.jsx(a,{ref:d,className:l(t,e),...s})));p.displayName="CardBody";const N=c.forwardRef(({className:t,bsPrefix:e,as:a="div",...s},d)=>(e=n(e,"card-footer"),r.jsx(a,{ref:d,className:l(t,e),...s})));N.displayName="CardFooter";const f=c.forwardRef(({bsPrefix:t,className:e,as:a="div",...s},d)=>{const o=n(t,"card-header"),m=c.useMemo(()=>({cardHeaderBsPrefix:o}),[o]);return r.jsx(A.Provider,{value:m,children:r.jsx(a,{ref:d,...s,className:l(e,o)})})});f.displayName="CardHeader";const y=c.forwardRef(({bsPrefix:t,className:e,variant:a,as:s="img",...d},o)=>{const m=n(t,"card-img");return r.jsx(s,{ref:o,className:l(a?`${m}-${a}`:m,e),...d})});y.displayName="CardImg";const C=c.forwardRef(({className:t,bsPrefix:e,as:a="div",...s},d)=>(e=n(e,"card-img-overlay"),r.jsx(a,{ref:d,className:l(t,e),...s})));C.displayName="CardImgOverlay";const T=c.forwardRef(({className:t,bsPrefix:e,as:a="a",...s},d)=>(e=n(e,"card-link"),r.jsx(a,{ref:d,className:l(t,e),...s})));T.displayName="CardLink";const E=u("h6"),R=c.forwardRef(({className:t,bsPrefix:e,as:a=E,...s},d)=>(e=n(e,"card-subtitle"),r.jsx(a,{ref:d,className:l(t,e),...s})));R.displayName="CardSubtitle";const g=c.forwardRef(({className:t,bsPrefix:e,as:a="p",...s},d)=>(e=n(e,"card-text"),r.jsx(a,{ref:d,className:l(t,e),...s})));g.displayName="CardText";const O=u("h5"),w=c.forwardRef(({className:t,bsPrefix:e,as:a=O,...s},d)=>(e=n(e,"card-title"),r.jsx(a,{ref:d,className:l(t,e),...s})));w.displayName="CardTitle";const H=c.forwardRef(({bsPrefix:t,className:e,bg:a,text:s,border:d,body:o=!1,children:m,as:S="div",...B},I)=>{const L=n(t,"card");return r.jsx(S,{ref:I,...B,className:l(e,L,a&&`bg-${a}`,s&&`text-${s}`,d&&`border-${d}`),children:o?r.jsx(p,{children:m}):m})});H.displayName="Card";const i=Object.assign(H,{Img:y,Title:w,Subtitle:R,Body:p,Link:T,Text:g,Header:f,Footer:N,ImgOverlay:C}),D=(t,e)=>{switch(t){case"H2":return r.jsx("h2",{children:e});case"H3":return r.jsx("h3",{children:e});case"Text":return Array.isArray(e)?e.map((a,s)=>r.jsx("p",{children:x(a)},s)):r.jsx("p",{children:x(e)});case"HTMLTEXT":return r.jsx("p",{children:x(e)});case"LIST":return r.jsx("ul",{children:e.map((a,s)=>r.jsx("li",{children:a},s))});case"LISTHtml":return r.jsx("ul",{children:e.map((a,s)=>r.jsx("li",{children:x(a)},s))});case"LISTNumber":return r.jsx("ol",{class:"number-list",children:e.map((a,s)=>r.jsx("li",{children:x(a)},s))});case"LISTBold":return r.jsx("ul",{children:e.map((a,s)=>r.jsx("li",{style:{fontWeight:"600"},children:a},s))});case"CARD":return r.jsx(j,{children:r.jsx(h,{className:"container-card",children:e.map((a,s)=>r.jsx(i,{className:"sx light-card",children:r.jsxs(i.Body,{children:[r.jsx(i.Title,{children:a.Title}),r.jsx(i.Subtitle,{style:{textTransform:"uppercase",lineHeight:"19px"},className:"mb-2 text-muted",children:a.underTitlte}),r.jsx(i.Text,{children:a.text})]})},s))})});case"CARDGREEN":return r.jsx(j,{children:r.jsx(h,{className:"container-card",children:e.map((a,s)=>r.jsx(i,{className:"sx background-card",children:r.jsxs(i.Body,{children:[r.jsx(i.Title,{children:a.Title}),r.jsx("a",{href:a.link,className:"card-button",children:a.button})]})},s))})});default:return r.jsx("p",{children:e})}},F=({section:t})=>r.jsx("section",{className:"my-4",children:r.jsx(h,{children:r.jsx($,{children:Object.entries(t).map(([e,a],s)=>r.jsx(k.Fragment,{children:D(e,a)},s))})})}),W=({data:t})=>r.jsx(j,{children:t.map((e,a)=>r.jsx(F,{section:e},a))});export{W as B};
