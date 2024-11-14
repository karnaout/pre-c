import{a4 as G,i as d,a5 as N,a6 as S,a7 as O,a8 as I,a9 as W,r as v,aa as z,_ as E,j as g,ab as H,ac as D,l as _,f as B,s as M,u as U,h as J,E as A,T as q,k as V}from"./index-DQ6dPsCc.js";import{f as K}from"./TextField-CSm90r8d.js";import{u as Q}from"./SwitchBase-D9Gsecah.js";import{s as X,u as Y}from"./Container-E4VSzprl.js";const Z=["component","direction","spacing","divider","children","className","useFlexGap"],w=G(),ee=X("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function oe(e){return Y({props:e,name:"MuiStack",defaultTheme:w})}function re(e,o){const s=v.Children.toArray(e).filter(Boolean);return s.reduce((l,n,r)=>(l.push(n),r<s.length-1&&l.push(v.cloneElement(o,{key:`separator-${r}`})),l),[])}const se=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],te=({ownerState:e,theme:o})=>{let s=d({display:"flex",flexDirection:"column"},N({theme:o},S({values:e.direction,breakpoints:o.breakpoints.values}),l=>({flexDirection:l})));if(e.spacing){const l=O(o),n=Object.keys(o.breakpoints.values).reduce((t,a)=>((typeof e.spacing=="object"&&e.spacing[a]!=null||typeof e.direction=="object"&&e.direction[a]!=null)&&(t[a]=!0),t),{}),r=S({values:e.direction,base:n}),i=S({values:e.spacing,base:n});typeof r=="object"&&Object.keys(r).forEach((t,a,u)=>{if(!r[t]){const b=a>0?r[u[a-1]]:"column";r[t]=b}}),s=I(s,N({theme:o},i,(t,a)=>e.useFlexGap?{gap:D(l,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${se(a?r[a]:e.direction)}`]:D(l,t)}}))}return s=W(o.breakpoints,s),s};function le(e={}){const{createStyledComponent:o=ee,useThemeProps:s=oe,componentName:l="MuiStack"}=e,n=()=>_({root:["root"]},t=>B(l,t),{}),r=o(te);return v.forwardRef(function(t,a){const u=s(t),m=z(u),{component:b="div",direction:C="column",spacing:L=0,divider:k,children:c,className:x,useFlexGap:f=!1}=m,F=E(m,Z),j={direction:C,spacing:L,useFlexGap:f},y=n();return g.jsx(r,d({as:b,ownerState:j,ref:a,className:H(y.root,x)},F,{children:k?re(c,k):c}))})}const ae=le({createStyledComponent:M("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>U({props:e,name:"MuiStack"})});function ne(e){return B("MuiFormControlLabel",e)}const h=J("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),ie=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],ce=e=>{const{classes:o,disabled:s,labelPlacement:l,error:n,required:r}=e,i={root:["root",s&&"disabled",`labelPlacement${A(l)}`,n&&"error",r&&"required"],label:["label",s&&"disabled"],asterisk:["asterisk",n&&"error"]};return _(i,ne,o)},pe=M("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[{[`& .${h.label}`]:o.label},o.root,o[`labelPlacement${A(s.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${h.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${h.label}`]:{[`&.${h.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),de=M("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${h.error}`]:{color:(e.vars||e).palette.error.main}})),ye=v.forwardRef(function(o,s){var l,n;const r=U({props:o,name:"MuiFormControlLabel"}),{className:i,componentsProps:P={},control:t,disabled:a,disableTypography:u,label:m,labelPlacement:b="end",required:C,slotProps:L={}}=r,k=E(r,ie),c=Q(),x=(l=a??t.props.disabled)!=null?l:c==null?void 0:c.disabled,f=C??t.props.required,F={disabled:x,required:f};["checked","name","onChange","value","inputRef"].forEach(R=>{typeof t.props[R]>"u"&&typeof r[R]<"u"&&(F[R]=r[R])});const j=K({props:r,muiFormControl:c,states:["error"]}),y=d({},r,{disabled:x,labelPlacement:b,required:f,error:j.error}),T=ce(y),$=(n=L.typography)!=null?n:P.typography;let p=m;return p!=null&&p.type!==q&&!u&&(p=g.jsx(q,d({component:"span"},$,{className:V(T.label,$==null?void 0:$.className),children:p}))),g.jsxs(pe,d({className:V(T.root,i),ownerState:y,ref:s},k,{children:[v.cloneElement(t,F),f?g.jsxs(ae,{display:"block",children:[p,g.jsxs(de,{ownerState:y,"aria-hidden":!0,className:T.asterisk,children:[" ","*"]})]}):p]}))});export{ye as F};