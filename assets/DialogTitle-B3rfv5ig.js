import{h as W,f as y,r as p,s as x,aB as q,W as G,F as u,k as i,P as j,i as P,aC as J,_ as M,j as c,l as m,m as T,aD as Q,T as Z}from"./index-CZCi8_lK.js";import{b as oo}from"./SwitchBase-jup12wBb.js";function eo(o){return y("MuiDialog",o)}const k=W("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),F=p.createContext({}),ao=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],to=x(q,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),io=o=>{const{classes:e,scroll:a,maxWidth:t,fullWidth:s,fullScreen:r}=o,l={root:["root"],container:["container",`scroll${u(a)}`],paper:["paper",`paperScroll${u(a)}`,`paperWidth${u(String(t))}`,s&&"paperFullWidth",r&&"paperFullScreen"]};return T(l,eo,e)},ro=x(G,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),so=x("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.container,e[`scroll${u(a.scroll)}`]]}})(({ownerState:o})=>i({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),lo=x(j,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.paper,e[`scrollPaper${u(a.scroll)}`],e[`paperWidth${u(String(a.maxWidth))}`],a.fullWidth&&e.paperFullWidth,a.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>i({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Do=p.forwardRef(function(e,a){const t=P({props:e,name:"MuiDialog"}),s=J(),r={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":n,BackdropComponent:g,BackdropProps:f,children:U,className:_,disableEscapeKeyDown:$=!1,fullScreen:A=!1,fullWidth:I=!1,maxWidth:E="sm",onBackdropClick:B,onClick:R,onClose:b,open:S,PaperComponent:L=j,PaperProps:w={},scroll:Y="paper",TransitionComponent:X=Q,transitionDuration:N=r,TransitionProps:z}=t,H=M(t,ao),h=i({},t,{disableEscapeKeyDown:$,fullScreen:A,fullWidth:I,maxWidth:E,scroll:Y}),C=io(h),D=p.useRef(),K=d=>{D.current=d.target===d.currentTarget},O=d=>{R&&R(d),D.current&&(D.current=null,B&&B(d),b&&b(d,"backdropClick"))},v=oo(n),V=p.useMemo(()=>({titleId:v}),[v]);return c.jsx(ro,i({className:m(C.root,_),closeAfterTransition:!0,components:{Backdrop:to},componentsProps:{backdrop:i({transitionDuration:N,as:g},f)},disableEscapeKeyDown:$,onClose:b,open:S,ref:a,onClick:O,ownerState:h},H,{children:c.jsx(X,i({appear:!0,in:S,timeout:N,role:"presentation"},z,{children:c.jsx(so,{className:m(C.container),onMouseDown:K,ownerState:h,children:c.jsx(lo,i({as:L,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":v},w,{className:m(C.paper,w.className),ownerState:h,children:c.jsx(F.Provider,{value:V,children:U})}))})}))}))});function no(o){return y("MuiDialogContent",o)}W("MuiDialogContent",["root","dividers"]);function co(o){return y("MuiDialogTitle",o)}const po=W("MuiDialogTitle",["root"]),uo=["className","dividers"],xo=o=>{const{classes:e,dividers:a}=o;return T({root:["root",a&&"dividers"]},no,e)},go=x("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,a.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${po.root} + &`]:{paddingTop:0}})),vo=p.forwardRef(function(e,a){const t=P({props:e,name:"MuiDialogContent"}),{className:s,dividers:r=!1}=t,l=M(t,uo),n=i({},t,{dividers:r}),g=xo(n);return c.jsx(go,i({className:m(g.root,s),ownerState:n,ref:a},l))}),mo=["className","id"],ho=o=>{const{classes:e}=o;return T({root:["root"]},co,e)},fo=x(Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),ko=p.forwardRef(function(e,a){const t=P({props:e,name:"MuiDialogTitle"}),{className:s,id:r}=t,l=M(t,mo),n=t,g=ho(n),{titleId:f=r}=p.useContext(F);return c.jsx(fo,i({component:"h2",className:m(g.root,s),ownerState:n,ref:a,variant:"h6",id:r??f},l))});export{Do as D,ko as a,vo as b};
//# sourceMappingURL=DialogTitle-B3rfv5ig.js.map
