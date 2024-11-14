import{D as Ee,j as t,h as X,f as Z,s as K,E as p,i as h,K as $,r,u as ee,_ as ae,L as ze,M as xe,k as R,l as te,T as oe,N as Me,v as W,z as k,w as O,x as be,B as I,P as Pe,O as Te,Q as Le,U as Oe,I as F,V as Ue,o as Y}from"./index-DQ6dPsCc.js";import{r as D,C as we}from"./createSvgIcon-BZbvq0S8.js";import{T as J}from"./TextField-CSm90r8d.js";import{I as Ae}from"./InputAdornment-CJx8HmY6.js";import{T as Ne,a as Fe,b as Ve,c as he,d as x,e as He}from"./TableRow-DtqDv4Ut.js";import{D as Ke,a as We,b as Be}from"./DialogTitle-BI9BKwnY.js";import{C as qe}from"./Container-E4VSzprl.js";import{G as Ce}from"./Grid-4lP4I6Kg.js";import"./SwitchBase-D9Gsecah.js";const Ge=Ee(t.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function Qe(e){return Z("MuiChip",e)}const d=X("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),Ye=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],Je=e=>{const{classes:a,disabled:n,size:l,color:c,iconColor:u,onDelete:g,clickable:s,variant:i}=e,b={root:["root",i,n&&"disabled",`size${p(l)}`,`color${p(c)}`,s&&"clickable",s&&`clickableColor${p(c)}`,g&&"deletable",g&&`deletableColor${p(c)}`,`${i}${p(c)}`],label:["label",`label${p(l)}`],avatar:["avatar",`avatar${p(l)}`,`avatarColor${p(c)}`],icon:["icon",`icon${p(l)}`,`iconColor${p(u)}`],deleteIcon:["deleteIcon",`deleteIcon${p(l)}`,`deleteIconColor${p(c)}`,`deleteIcon${p(i)}Color${p(c)}`]};return te(b,Qe,a)},Xe=K("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:n}=e,{color:l,iconColor:c,clickable:u,onDelete:g,size:s,variant:i}=n;return[{[`& .${d.avatar}`]:a.avatar},{[`& .${d.avatar}`]:a[`avatar${p(s)}`]},{[`& .${d.avatar}`]:a[`avatarColor${p(l)}`]},{[`& .${d.icon}`]:a.icon},{[`& .${d.icon}`]:a[`icon${p(s)}`]},{[`& .${d.icon}`]:a[`iconColor${p(c)}`]},{[`& .${d.deleteIcon}`]:a.deleteIcon},{[`& .${d.deleteIcon}`]:a[`deleteIcon${p(s)}`]},{[`& .${d.deleteIcon}`]:a[`deleteIconColor${p(l)}`]},{[`& .${d.deleteIcon}`]:a[`deleteIcon${p(i)}Color${p(l)}`]},a.root,a[`size${p(s)}`],a[`color${p(l)}`],u&&a.clickable,u&&l!=="default"&&a[`clickableColor${p(l)})`],g&&a.deletable,g&&l!=="default"&&a[`deletableColor${p(l)}`],a[i],a[`${i}${p(l)}`]]}})(({theme:e,ownerState:a})=>{const n=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return h({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${d.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${d.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:n,fontSize:e.typography.pxToRem(12)},[`& .${d.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${d.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${d.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${d.icon}`]:h({marginLeft:5,marginRight:-6},a.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},a.iconColor===a.color&&h({color:e.vars?e.vars.palette.Chip.defaultIconColor:n},a.color!=="default"&&{color:"inherit"})),[`& .${d.deleteIcon}`]:h({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:$(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:$(e.palette.text.primary,.4)}},a.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},a.color!=="default"&&{color:e.vars?`rgba(${e.vars.palette[a.color].contrastTextChannel} / 0.7)`:$(e.palette[a.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].contrastText}})},a.size==="small"&&{height:24},a.color!=="default"&&{backgroundColor:(e.vars||e).palette[a.color].main,color:(e.vars||e).palette[a.color].contrastText},a.onDelete&&{[`&.${d.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:$(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},a.onDelete&&a.color!=="default"&&{[`&.${d.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}})},({theme:e,ownerState:a})=>h({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:$(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${d.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:$(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},a.clickable&&a.color!=="default"&&{[`&:hover, &.${d.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}}),({theme:e,ownerState:a})=>h({},a.variant==="outlined"&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${d.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${d.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${d.avatar}`]:{marginLeft:4},[`& .${d.avatarSmall}`]:{marginLeft:2},[`& .${d.icon}`]:{marginLeft:4},[`& .${d.iconSmall}`]:{marginLeft:2},[`& .${d.deleteIcon}`]:{marginRight:5},[`& .${d.deleteIconSmall}`]:{marginRight:3}},a.variant==="outlined"&&a.color!=="default"&&{color:(e.vars||e).palette[a.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:$(e.palette[a.color].main,.7)}`,[`&.${d.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:$(e.palette[a.color].main,e.palette.action.hoverOpacity)},[`&.${d.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:$(e.palette[a.color].main,e.palette.action.focusOpacity)},[`& .${d.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:$(e.palette[a.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].main}}})),Ze=K("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{const{ownerState:n}=e,{size:l}=n;return[a.label,a[`label${p(l)}`]]}})(({ownerState:e})=>h({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.variant==="outlined"&&{paddingLeft:11,paddingRight:11},e.size==="small"&&{paddingLeft:8,paddingRight:8},e.size==="small"&&e.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function me(e){return e.key==="Backspace"||e.key==="Delete"}const ea=r.forwardRef(function(a,n){const l=ee({props:a,name:"MuiChip"}),{avatar:c,className:u,clickable:g,color:s="default",component:i,deleteIcon:b,disabled:v=!1,icon:y,label:z,onClick:_,onDelete:C,onKeyDown:m,onKeyUp:M,size:B="medium",variant:q="filled",tabIndex:P,skipFocusWhenDisabled:ge=!1}=l,T=ae(l,Ye),U=r.useRef(null),L=ze(U,n),G=f=>{f.stopPropagation(),C&&C(f)},E=f=>{f.currentTarget===f.target&&me(f)&&f.preventDefault(),m&&m(f)},V=f=>{f.currentTarget===f.target&&(C&&me(f)?C(f):f.key==="Escape"&&U.current&&U.current.blur()),M&&M(f)},w=g!==!1&&_?!0:g,A=w||C?xe:i||"div",N=h({},l,{component:A,disabled:v,size:B,color:s,iconColor:r.isValidElement(y)&&y.props.color||s,onDelete:!!C,clickable:w,variant:q}),j=Je(N),Q=A===xe?h({component:i||"div",focusVisibleClassName:j.focusVisible},C&&{disableRipple:!0}):{};let H=null;C&&(H=b&&r.isValidElement(b)?r.cloneElement(b,{className:R(b.props.className,j.deleteIcon),onClick:G}):t.jsx(Ge,{className:R(j.deleteIcon),onClick:G}));let o=null;c&&r.isValidElement(c)&&(o=r.cloneElement(c,{className:R(j.avatar,c.props.className)}));let S=null;return y&&r.isValidElement(y)&&(S=r.cloneElement(y,{className:R(j.icon,y.props.className)})),t.jsxs(Xe,h({as:A,className:R(j.root,u),disabled:w&&v?!0:void 0,onClick:_,onKeyDown:E,onKeyUp:V,ref:L,tabIndex:ge&&v?-1:P,ownerState:N},Q,T,{children:[o||S,t.jsx(Ze,{className:R(j.label),ownerState:N,children:z}),H]}))});function aa(e){return Z("MuiDialogActions",e)}X("MuiDialogActions",["root","spacing"]);const ta=["className","disableSpacing"],oa=e=>{const{classes:a,disableSpacing:n}=e;return te({root:["root",!n&&"spacing"]},aa,a)},la=K("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:n}=e;return[a.root,!n.disableSpacing&&a.spacing]}})(({ownerState:e})=>h({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),ra=r.forwardRef(function(a,n){const l=ee({props:a,name:"MuiDialogActions"}),{className:c,disableSpacing:u=!1}=l,g=ae(l,ta),s=h({},l,{disableSpacing:u}),i=oa(s);return t.jsx(la,h({className:R(i.root,c),ownerState:s,ref:n},g))});function sa(e){return Z("MuiDialogContentText",e)}X("MuiDialogContentText",["root"]);const na=["children","className"],ia=e=>{const{classes:a}=e,l=te({root:["root"]},sa,a);return h({},a,l)},ca=K(oe,{shouldForwardProp:e=>Me(e)||e==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,a)=>a.root})({}),da=r.forwardRef(function(a,n){const l=ee({props:a,name:"MuiDialogContentText"}),{className:c}=l,u=ae(l,na),g=ia(u);return t.jsx(ca,h({component:"p",variant:"body1",color:"text.secondary",ref:n,ownerState:u,className:R(g.root,c)},l,{classes:g}))}),ua=()=>{const[e,a]=r.useState([]),[n,l]=r.useState(!0),[c,u]=r.useState(null),g=r.useCallback(async()=>{l(!0),u(null);try{const s=await W.get("undefinedusers",{headers:{Authorization:`${localStorage.getItem("token")}`}});a(s.data)}catch(s){u(s.response?s.response.data:s.message)}finally{l(!1)}},[]);return r.useEffect(()=>{g()},[g]),{users:e,loading:n,error:c,refetch:g}},pa=()=>{const[e,a]=r.useState(null),[n,l]=r.useState(!1),[c,u]=r.useState(null);return{triggerNextStep:async s=>{l(!0),u(null),console.log("next id",s);try{const i=await W.get(`undefinednext-step?id=${s}`,{headers:{Authorization:`${localStorage.getItem("token")}`}});console.log("response",i.data),a(i.data)}catch(i){u(i.response?i.response.data:i.message)}finally{l(!1)}},nextStepData:e,loading:n,error:c}},ga=()=>{const[e,a]=r.useState(null),[n,l]=r.useState(!1),[c,u]=r.useState(null);return{triggerRestart:async s=>{l(!0),u(null);try{const i=await W.get(`undefinedrestart?id=${s}`,{headers:{Authorization:`${localStorage.getItem("token")}`}});console.log(i.data),a(i.data)}catch(i){u(i.response?i.response.data:i.message)}finally{l(!1)}},restartData:e,loading:n,error:c}},fa=()=>{const[e,a]=r.useState(null),[n,l]=r.useState(!1),[c,u]=r.useState(null);return{triggerDeleteUser:async s=>{var i,b;l(!0),u(null),console.log(s);try{const v=await W.get(`undefinedusers/delete?id=${s}`,{headers:{Authorization:`${localStorage.getItem("token")}`}});console.log("response",(b=(i=v==null?void 0:v.data)==null?void 0:i.response)==null?void 0:b.status),a("response delet",v)}catch(v){console.log("response err zabi",v),u(v.response?v.response.data:v.message)}finally{l(!1)}},deleteData:e,loading:n,error:c}};var le={},va=k;Object.defineProperty(le,"__esModule",{value:!0});var ye=le.default=void 0,xa=va(D()),ba=t;ye=le.default=(0,xa.default)((0,ba.jsx)("path",{d:"M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"}),"FilterList");var re={},ha=k;Object.defineProperty(re,"__esModule",{value:!0});var $e=re.default=void 0,Ca=ha(D()),ma=t;$e=re.default=(0,Ca.default)((0,ma.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");var se={},ya=k;Object.defineProperty(se,"__esModule",{value:!0});var je=se.default=void 0,$a=ya(D()),ja=t;je=se.default=(0,$a.default)((0,ja.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email");var ne={},Sa=k;Object.defineProperty(ne,"__esModule",{value:!0});var Se=ne.default=void 0,ka=Sa(D()),Da=t;Se=ne.default=(0,ka.default)((0,Da.jsx)("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l4 4 4-4H6c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7c-1.9 0-3.62-.76-4.88-1.99L6.7 18.42C8.32 20.01 10.55 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m2 8v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z"}),"LockReset");var ie={},Ra=k;Object.defineProperty(ie,"__esModule",{value:!0});var ke=ie.default=void 0,Ia=Ra(D()),_a=t;ke=ie.default=(0,Ia.default)((0,_a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");var ce={},Ea=k;Object.defineProperty(ce,"__esModule",{value:!0});var De=ce.default=void 0,za=Ea(D()),Ma=t;De=ce.default=(0,za.default)((0,Ma.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");var de={},Pa=k;Object.defineProperty(de,"__esModule",{value:!0});var Re=de.default=void 0,Ta=Pa(D()),La=t;Re=de.default=(0,Ta.default)((0,La.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"}),"Refresh");var ue={},Oa=k;Object.defineProperty(ue,"__esModule",{value:!0});var Ie=ue.default=void 0,Ua=Oa(D()),wa=t;Ie=ue.default=(0,Ua.default)((0,wa.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown");var pe={},Aa=k;Object.defineProperty(pe,"__esModule",{value:!0});var _e=pe.default=void 0,Na=Aa(D()),Fa=t;_e=pe.default=(0,Na.default)((0,Fa.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");const Va=[{value:"1",label:"Admin"},{value:"2",label:"Intervention"},{value:"3",label:"Control"}],Ha=({onSendEmail:e,onResetPassword:a,onDeleteUser:n,RefreshTable:l})=>{const{users:c,loading:u,error:g,refetch:s}=ua(),[i,b]=r.useState([]),[v,y]=r.useState([]),[z,_]=r.useState(null),[C,m]=r.useState(""),[M,B]=r.useState(!0),{triggerNextStep:q,nextStepData:P,loading:ge,error:T}=pa(),{triggerRestart:U,restartData:L,loading:G,error:E}=ga();r.useEffect(()=>{console.log("Allusers:",c),c&&b(c)},[c]),r.useEffect(()=>{var o;P&&P.Result!==null&&(O.success(((o=P.Result)==null?void 0:o.message)||"Next phase completed successfully!"),s())},[P,s]),r.useEffect(()=>{T&&O.error(`Error ${T.message||T}`)},[T]),r.useEffect(()=>{L&&(O.success(L.message||"User state restarted successfully!"),s())},[L,E,s]),r.useEffect(()=>{E&&(console.log("restartData",L),O.error(`Error restarting user: ${E.message||E}`))},[E]),r.useEffect(()=>{s()},[l]);const V=()=>{B(!M),b(o=>[...o].sort((S,f)=>{const fe=new Date(S.date||0),ve=new Date(f.date||0);return M?ve-fe:fe-ve}))},w=i.filter(o=>{const S=v.length===0||v.includes(o.role),f=`${o.firstName} ${o.secondName}`.toLowerCase().includes(C.toLowerCase());return S&&f}),A=o=>{const S=v.indexOf(o),f=[...v];S===-1?f.push(o):f.splice(S,1),y(f)},N=o=>{_(o.currentTarget)},j=()=>{_(null)},Q=o=>{q(o)},H=o=>{U(o)};return u?t.jsx(be,{}):g?t.jsxs("div",{children:["Error: ",g.message||"An error occurred"]}):t.jsxs(t.Fragment,{children:[t.jsx(I,{mb:2,children:t.jsx(J,{variant:"outlined",size:"small",placeholder:"Search",value:C,onChange:o=>m(o.target.value),InputProps:{startAdornment:t.jsx(Ae,{position:"start",children:t.jsx($e,{})})}})}),t.jsx(Ne,{component:Pe,style:{backgroundColor:"white",borderRadius:"14px",maxHeight:"90%",overflowY:"auto"},children:t.jsxs(Fe,{stickyHeader:!0,children:[t.jsx(Ve,{children:t.jsxs(he,{sx:{backgroundColor:"#1976d3"},children:[t.jsx(x,{sx:{color:"white",backgroundColor:"#1976d3"},children:"First Name"}),t.jsx(x,{sx:{color:"white",backgroundColor:"#1976d3"},children:"Last Name"}),t.jsx(x,{sx:{color:"white",backgroundColor:"#1976d3"},children:"Email"}),t.jsx(x,{sx:{color:"white",backgroundColor:"#1976d3"},align:"center",children:"Progress"}),t.jsxs(x,{sx:{color:"white",backgroundColor:"#1976d3"},align:"center",children:[t.jsxs(I,{display:"flex",alignItems:"center",onClick:N,style:{cursor:"pointer",display:"flex",justifyContent:"space-between"},children:["Role",t.jsx(ye,{fontSize:"small"})]}),t.jsx(Te,{anchorEl:z,open:!!z,onClose:j,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:Va.map(o=>t.jsxs(Le,{value:o.value,onClick:()=>A(o.value),children:[t.jsx(we,{checked:v.includes(o.value)}),t.jsx(Oe,{primary:o.label})]},o.value))})]}),t.jsx(x,{sx:{color:"white",backgroundColor:"#1976d3"},align:"center",children:"Phase"}),t.jsx(x,{sx:{color:"white",backgroundColor:"#1976d3"},align:"center",children:t.jsxs(I,{display:"flex",alignItems:"center",onClick:V,style:{cursor:"pointer",display:"flex",justifyContent:"space-between"},children:["Submit Date",M?t.jsx(Ie,{fontSize:"small"}):t.jsx(_e,{fontSize:"small"})]})}),t.jsx(x,{sx:{color:"white",backgroundColor:"#1976d3"},align:"center",children:t.jsx(I,{display:"flex",alignItems:"center",onClick:V,style:{cursor:"pointer",display:"flex",justifyContent:"space-between"},children:"Due date"})}),t.jsx(x,{sx:{color:"white",backgroundColor:"#1976d3"},align:"center",children:"State"}),t.jsx(x,{sx:{color:"white",backgroundColor:"#1976d3"},align:"center",children:"Actions"})]})}),t.jsx(He,{children:w.map(o=>t.jsxs(he,{children:[t.jsx(x,{children:o==null?void 0:o.firstName}),t.jsx(x,{children:o==null?void 0:o.secondName}),t.jsx(x,{children:o==null?void 0:o.email}),t.jsx(x,{align:"center",children:t.jsxs(I,{position:"relative",display:"inline-flex",children:[t.jsx(be,{variant:"determinate",value:o.forms}),t.jsx(I,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:t.jsx(oe,{variant:"caption",component:"div",color:"textSecondary",sx:{paddingTop:"3px"},children:`${o.forms.toString()}%`})})]})}),t.jsx(x,{children:o.role==="1"?"Admin":o.role==="2"?"Intervention":o.role==="3"?"Control":"Unknown"}),t.jsx(x,{align:"center",children:o.phase===0?"BASELINE":o.phase===1?"PHASE ONE":o.phase===2?"PHASE TWO":o.phase===3?"PHASE THREE":""}),t.jsx(x,{children:o==null?void 0:o.date}),t.jsx(x,{children:o==null?void 0:o.due_date}),t.jsx(x,{children:t.jsx(ea,{label:o==null?void 0:o.stateStr,color:(o==null?void 0:o.stateStr)==="Closed"?"error":"success",variant:"outlined",sx:{fontWeight:700,minWidth:"70px",minHeight:"20px",display:"flex",fontSize:"14px"}})}),t.jsxs(x,{align:"center",children:[t.jsx(F,{color:"primary",onClick:()=>e(o),title:"Send Email",children:t.jsx(je,{})}),t.jsx(F,{color:"secondary",onClick:()=>a(o),title:"Reset Password",children:t.jsx(Se,{})}),t.jsx(F,{color:"error",onClick:()=>n(o),title:"Delete User",children:t.jsx(ke,{})}),t.jsx(F,{color:"info",onClick:()=>Q(o.id),title:"Next Phase",children:t.jsx(De,{})}),t.jsx(F,{color:"warning",onClick:()=>H(o.id),title:"Reset Progress",children:t.jsx(Re,{})})]})]},o==null?void 0:o.id))})]})})]})},Ka=({user:e,open:a,onClose:n})=>{const l=()=>{n()};return t.jsx(Ue,{open:a,onClose:n,children:t.jsxs(I,{sx:{padding:4,backgroundColor:"white",margin:"auto",marginTop:"20vh",maxWidth:400},children:[t.jsxs(oe,{variant:"h6",gutterBottom:!0,children:["Send Email to ",e==null?void 0:e.firstName]}),t.jsx(J,{fullWidth:!0,label:"Subject",margin:"normal"}),t.jsx(J,{fullWidth:!0,label:"Message",margin:"normal",multiline:!0,rows:4}),t.jsx(Y,{variant:"contained",color:"primary",onClick:l,children:"Send"})]})})},Wa=({open:e,user:a,onClose:n,ToastSucc:l,ToastErr:c})=>{const{triggerDeleteUser:u,deleteData:g,loading:s,error:i}=fa(),b=async()=>{await u(a==null?void 0:a.id)};return r.useEffect(()=>{s||(console.log("error",i),console.log("deleteData",g),g!==null&&i===null?(console.log("zabi 1"),l("User deleted successfully"),n()):(i!==null&&(console.log("zabi 2"),c("Error deleting user")),n()))},[s]),t.jsxs(Ke,{open:e,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[t.jsx(We,{id:"alert-dialog-title",children:"Delete User"}),t.jsx(Be,{children:t.jsxs(da,{id:"alert-dialog-description",children:['Are you sure you want to delete the user "',a==null?void 0:a.firstName," ",a==null?void 0:a.secondName,'"? This action cannot be undone.']})}),t.jsxs(ra,{children:[t.jsx(Y,{onClick:n,color:"primary",children:"Cancel"}),t.jsx(Y,{onClick:b,color:"error",disabled:s,autoFocus:!0,children:s?"Deleting...":"Delete"})]})]})},at=()=>{const[e,a]=r.useState(null),[n,l]=r.useState(!1),[c,u]=r.useState(!1),[g,s]=r.useState(!1),[i,b]=r.useState(!0),v=m=>{a(m),l(!0)},y=m=>{a(m),s(!0)},z=m=>{a(m),u(!0)},_=m=>{O.success("User deleted successfully"),b(!i)},C=m=>{O.error("Failed to delete user.")};return t.jsxs(qe,{maxWidth:"90%",children:[t.jsx(Ce,{container:!0,spacing:2,direction:"column",children:t.jsx(Ce,{item:!0,xs:12,children:t.jsx(I,{children:t.jsx(Ha,{onSendEmail:v,onResetPassword:y,onDeleteUser:z,RefreshTable:i})})})}),t.jsx(Ka,{user:e,open:n,onClose:()=>l(!1)}),t.jsx(Wa,{open:c,user:e,onClose:()=>{u(!1)},ToastSucc:_,ToastErr:C})]})};export{at as default};