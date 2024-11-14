const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DQ6dPsCc.js","assets/index-BSw5hqWU.css"])))=>i.map(i=>d[i]);
import{f as w,h as k,s as S,P,r as p,u as R,_ as A,i as g,j as e,k as W,l as v,T as x,B as d,m as z,n as D,o as T,p as I,q as M,t as _,H as L}from"./index-DQ6dPsCc.js";import{u as N}from"./useParticipantProfile-BmK4k1jr.js";import{C as q}from"./Container-E4VSzprl.js";function H(o){return w("MuiCard",o)}k("MuiCard",["root"]);const U=["className","raised"],F=o=>{const{classes:t}=o;return v({root:["root"]},H,t)},Y=S(P,{name:"MuiCard",slot:"Root",overridesResolver:(o,t)=>t.root})(()=>({overflow:"hidden"})),u=p.forwardRef(function(t,n){const s=R({props:t,name:"MuiCard"}),{className:a,raised:i=!1}=s,l=A(s,U),r=g({},s,{raised:i}),c=F(r);return e.jsx(Y,g({className:W(c.root,a),elevation:i?8:void 0,ref:n,ownerState:r},l))});function Q(o){return w("MuiCardContent",o)}k("MuiCardContent",["root"]);const $=["className","component"],O=o=>{const{classes:t}=o;return v({root:["root"]},Q,t)},V=S("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(o,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),m=p.forwardRef(function(t,n){const s=R({props:t,name:"MuiCardContent"}),{className:a,component:i="div"}=s,l=A(s,$),r=g({},s,{component:i}),c=O(r);return e.jsx(V,g({as:i,className:W(c.root,a),ownerState:r,ref:n},l))}),f=({title:o,type:t,variant:n="default"})=>{let s="",a="",i="",l="",r="101px",c="73px";switch(t){case"Learn more":s="Learn more ",i=n==="white"?"After your 6-month visit & questionnaire are completed, you will have access to personalized risk information.":"about Crohn's disease",a="/learn-more",l=n==="white"?"/information-white.png":"/information.png",r="80px",c="80px";break;case"Contact us":s="Contact us ",i=n==="white"?"After your 6-month visit & questionnaire are completed, you will have access to personalized risk information.":"and we'll be happy to help!",a="/contact",l=n==="white"?"/question-white.png":"/question.png",r="80px",c="80px";break;case"Return to":s="Return to ",i=n==="white"?"After your 6-month visit & questionnaire are completed, you will have access to personalized risk information.":"your personalized risk page",a="/crohn-risk",l=n==="white"?"/personalized-white.png":"/personalized.png";break;default:s="",a="#",l=""}return e.jsxs(u,{sx:{textAlign:"center",padding:"0px",maxWidth:"246px",minHeight:"301px",boxShadow:"0px 3px 12px rgba(112, 112, 112, 0.3)",border:"0px solid transparent",borderRadius:"12px",backgroundColor:n==="white"?"#ffffff":"inherit"},children:[e.jsx(x,{variant:"h6",sx:{backgroundColor:n==="white"?"#D3D3D3":"#A0D5EA",color:n==="white"?"#919191":"#085C7C",padding:"5.5px 26px 5.9px 27px",borderRadius:"0px",mb:2,fontSize:"22px",fontWeight:"700",marginBottom:"35px",lineHeight:"1.2em",minHeight:"70px",display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap"},children:o}),e.jsx(m,{sx:{padding:"0px"},children:e.jsxs(d,{sx:{marginTop:"20px",textAlign:"center",paddingTop:"0px",padding:"0px 26px 0px 27px"},children:[e.jsx("img",{src:l,alt:o,style:{width:r,height:c,marginBottom:"20px"}}),e.jsxs(x,{sx:{fontSize:n==="white"?"15px":"18px",fontWeight:"700",color:n==="white"?"#797979":"#597D0B"},children:[s&&e.jsx("a",{href:a,style:{textDecoration:"none",color:n==="white"?"#797979":"#597D0B"},children:n==="white"?"":s})," ",e.jsx(x,{component:"span",sx:{fontSize:n==="white"?"15px":"19px",fontWeight:"400",color:"#797979"},children:i})]})]})})]})},G=({Percentage:o,FromDisabled:t})=>{const n=z(),s=D(),a=()=>{console.log("onclick on button take qstnr"),n(I(0)),s("/general-information")};return e.jsxs(u,{sx:{backgroundColor:"#ffffff",maxWidth:"428px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",borderRadius:"12px",textAlign:"center",padding:"0px"},children:[e.jsx(x,{variant:"h6",sx:{backgroundColor:"#117BA3",color:"#ffffff",padding:"8px",borderRadius:"0px",fontSize:"22px",fontWeight:"700"},children:"Questionnaire status"}),e.jsxs(m,{sx:{padding:"58px 70px 32px 70px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsx(T,{variant:"contained",sx:{backgroundColor:"#80AD03",color:"#ffffff",fontSize:"20px",fontWeight:600,borderRadius:"24px",padding:"5px 73px 8px 73px",marginTop:"0px",marginBottom:"70px","&:disabled":{backgroundColor:"#c2c2c2"},"&:hover":{backgroundColor:"#709a02"}},disabled:t,onClick:a,children:"Take the questionnaire"}),e.jsx(d,{sx:{width:"271px",backgroundColor:"#FCE7A0",borderRadius:"13px",height:"16px",marginTop:"10px",border:"1px solid #71B7D1"},children:e.jsx(d,{sx:{width:`${o}%`,backgroundColor:"#085C7C",height:"100%",borderRadius:"13px"}})}),e.jsxs(x,{mt:2,sx:{color:"#085C7C"},children:["You've completed"," ",e.jsxs(x,{component:"span",sx:{fontWeight:"bold"},children:[o,"%"]})," ","so far"]})]})]})},J=({date:o,phase:t,role:n})=>{const[s,a]=p.useState("");return p.useEffect(()=>{if(o===null){a("Invalid Date");return}if(o&&o!==null){let i=new Date(o);console.log("role",n),console.log("phase",t),n==="2"&&(t===0||t===1?(console.log("in first phase :",t),i.setDate(i.getDate()+8*7)):i.setMonth(i.getMonth()+6));const l={year:"numeric",month:"long",day:"numeric"},r=i.toLocaleDateString("en-US",l);console.log("formatted:",r),console.log("formatted,",r),a(r)}if(n==="3"){console.log("date",o);let i=new Date(o);i.setMonth(i.getMonth()+6);const l={year:"numeric",month:"long",day:"numeric"},r=i.toLocaleDateString("en-US",l);console.log("formatted,",r),a(r)}},[o]),e.jsxs(u,{sx:{backgroundColor:"#ffffff",borderRadius:"12px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",textAlign:"left",width:"100%",margin:"0 auto",maxWidth:"884px"},children:[e.jsx(d,{sx:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#117BA3",color:"#ffffff",padding:"8px",fontSize:"22px",fontWeight:"700"},children:"Next steps"}),e.jsx(m,{sx:{padding:"22px 45px 40px 45px",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",color:"#085C7C",fontSize:"19px"},children:e.jsxs(d,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:"21px",width:"100%"},children:[e.jsx(x,{fontSize:19,sx:{fontWeight:"700"},children:"Your next questionnaire opens:"}),e.jsx(x,{sx:{backgroundColor:"#FCE7A0",padding:"8px 60px",borderRadius:"13px",border:"1px solid #71B7D1",fontWeight:600,fontSize:"18px",minWidth:"271px",minHeight:"27px",textAlign:"center"},children:s==="Invalid Date"||s===""?"_":s})]})})]})},K=({progression:o,phase:t,role:n})=>e.jsxs(d,{sx:{padding:"80px 240px 70px 250px",display:"flex",justifyContent:"center",gap:"72.5px"},children:[e.jsx(f,{title:"Access information",type:"Learn more"}),e.jsx(f,{title:"Questions?",type:"Contact us"}),n==="2"?e.jsx(f,{title:"Your personalized risk",type:"Return to",variant:t!==0||t===0&&o===100?"default":"white"}):e.jsx(f,{title:"Your personalized risk",type:"Return to",variant:o===100&&t===1?"default":"white"})]}),X=M(()=>_(()=>import("./index-DQ6dPsCc.js").then(o=>o.aI),__vite__mapDeps([0,1]))),oe=()=>{const o=D(),{profileData:t,loading:n,error:s}=N(),[a,i]=p.useState(!0),[l,r]=p.useState(0),[c,b]=p.useState(),[h,E]=p.useState("BASELINE"),[C,B]=p.useState();return z(),p.useEffect(()=>{var j,y;if(s&&o("/login"),t&&t.role===1&&o("/dashboard"),t)switch(console.log("profileData:",t),i((t==null?void 0:t.state)!=="0"),B(t==null?void 0:t.role),r(t==null?void 0:t.completionPercentage),E(t==null?void 0:t.phase),t==null?void 0:t.phase){case 0:if(t.state==="0"){console.log("zabi one");break}else b((j=t==null?void 0:t.forms[0])==null?void 0:j.submit_date);default:b((y=t==null?void 0:t.forms[0])==null?void 0:y.submit_date);break}},[s,t]),n?e.jsx(X,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title-content",children:[e.jsx(L,{children:e.jsx("title",{children:"My PRE-Crohn’s study"})}),e.jsx("h1",{children:"My PRE-Crohn’s study"})]}),e.jsxs(q,{sx:{width:"100%",height:"100%",margin:"0px !important",backgroundColor:"#fff",borderRadius:"8px",boxSizing:"border-box",maxWidth:"none !important",padding:"0px !important",paddingBottom:"100px !important"},children:[e.jsxs(d,{sx:{display:"flex",alignItems:"center",width:"100%",mb:4},children:[e.jsx(d,{sx:{height:"11px",backgroundColor:"#A0D5EA",width:"259px",minWidth:"259px",marginRight:"24px"}}),e.jsx(d,{sx:{width:"259px"},children:e.jsx(x,{variant:"h5",fontWeight:"bold",sx:{color:"#085C7C",textAlign:"left"},children:"MY QUESTIONNAIRE"})}),e.jsx(d,{sx:{height:"11px",backgroundColor:"#A0D5EA",flex:1,marginLeft:"17px"}})]}),e.jsxs(d,{sx:{padding:"40px 0px 40px 0px",background:"#f4f9fd"},children:[e.jsxs(d,{sx:{display:"flex",flexDirection:"row",gap:"40px",marginBottom:"40px",paddingRight:"200px",paddingLeft:"200px",justifyContent:"center"},children:[e.jsx(G,{Percentage:l,FromDisabled:a}),e.jsxs(u,{sx:{backgroundColor:"#ffffff",maxWidth:"428px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",borderRadius:"12px",textAlign:"center",padding:"0px"},children:[e.jsx(d,{sx:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#117BA3",color:"#ffffff",padding:"8px",fontSize:"22px",fontWeight:"700"},children:"Participation status"}),e.jsxs(m,{sx:{padding:"22px 0px 40px 45px",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",color:"#085C7C",fontSize:"19px",textAlign:"left"},children:[e.jsx(x,{fontSize:19,sx:{paddingRight:"45px"},children:"Payments will be sent after each visit (after sample collection & questionnaire completion)."}),e.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px",color:"#085C7C",textAlign:"left"},children:[e.jsx("li",{children:"Baseline/When you join"}),C!=="3"&&e.jsx("li",{children:"8-week visit"}),e.jsx("li",{children:"6-month visit"})]}),e.jsxs(x,{mt:2,fontWeight:"bold",fontSize:19,sx:{marginTop:"32px"},children:["Your status:",e.jsx(x,{component:"span",sx:{backgroundColor:"#FCE7A0",padding:"8px 60px",borderRadius:"13px",border:"1px solid #71B7D1",fontWeight:600,marginLeft:"9px",fontSize:"18px"},children:h===0||h===1?"BASELINE":h===2?"PHASE TWO":h===3?"PHASE THREE":""})]})]})]})]}),e.jsx(x,{fontSize:19,sx:{textAlign:"center",marginBottom:"40px"},children:"Payments will be sent after each visit (after sample collection & questionnaire completion)."}),e.jsx(J,{date:c,phase:h,role:C})]}),e.jsx(K,{progression:l,phase:h,role:C}),e.jsxs(d,{sx:{padding:"0px 255px 0px 300px",textAlign:"left",maxWidth:"1435px"},children:[e.jsx(x,{variant:"h2",fontWeight:"bold",color:"#0078b5",mb:2,fontSize:36,sx:{fontWeight:"700"},children:"Thanks for your participation!"}),e.jsx(x,{variant:"body1",mb:2,fontSize:19,sx:{marginTop:"27px",marginBottom:"63px"},children:"With your help, the Personal Risk Estimation for Crohn's Disease (PRE-Crohn's) study is learning how education about Crohn's risk impacts diet, behaviors, and Crohn's biomarkers (a marker in the blood or other tissue in people who have or are at risk for Crohn's)."}),e.jsx(x,{variant:"body1",fontWeight:"600",fontSize:21,children:"This study, with your help, aims to gain insight into whether it's possible to prevent Crohn's disease in people who are at risk."})]})]})]})};export{oe as default};