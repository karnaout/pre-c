const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-k8v-YTab.js","assets/index-Dxbh4SAG.css"])))=>i.map(i=>d[i]);
import{f as w,h as k,s as S,P,r as p,i as R,_ as A,k as u,j as e,l as z,m as W,T as l,n as d,o as D,u as v,B as T,p as I,q as M,t as _,H as L}from"./index-k8v-YTab.js";import{u as N}from"./useParticipantProfile-CQ6bg9k6.js";import{C as q}from"./Container-CMAjRVkl.js";function H(o){return w("MuiCard",o)}k("MuiCard",["root"]);const U=["className","raised"],F=o=>{const{classes:t}=o;return W({root:["root"]},H,t)},Y=S(P,{name:"MuiCard",slot:"Root",overridesResolver:(o,t)=>t.root})(()=>({overflow:"hidden"})),m=p.forwardRef(function(t,r){const n=R({props:t,name:"MuiCard"}),{className:a,raised:s=!1}=n,x=A(n,U),i=u({},n,{raised:s}),c=F(i);return e.jsx(Y,u({className:z(c.root,a),elevation:s?8:void 0,ref:r,ownerState:i},x))});function Q(o){return w("MuiCardContent",o)}k("MuiCardContent",["root"]);const $=["className","component"],O=o=>{const{classes:t}=o;return W({root:["root"]},Q,t)},J=S("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(o,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),C=p.forwardRef(function(t,r){const n=R({props:t,name:"MuiCardContent"}),{className:a,component:s="div"}=n,x=A(n,$),i=u({},n,{component:s}),c=O(i);return e.jsx(J,u({as:s,className:z(c.root,a),ownerState:i,ref:r},x))}),g=({title:o,type:t,role:r,variant:n="default"})=>{let a="",s="",x="",i="",c="101px",h="73px";switch(t){case"Learn more":a="Learn more ",x=n==="white"?"After your 6-month visit & questionnaire are completed, you will have access to personalized risk information.":"about Crohn's disease",s="/disease-information",i=n==="white"?"/information-white.png":"/information.png",c="80px",h="80px";break;case"Contact us":a="Contact us ",x=n==="white"?"After your 6-month visit & questionnaire are completed, you will have access to personalized risk information.":"and we'll be happy to help!",s="/contact",i=n==="white"?"/question-white.png":"/question.png",c="80px",h="80px";break;case"Return to":a="Return to ",x=n==="white"?r==="3"?"After your 6-month visit & questionnaire are completed, you will have access to personalized risk information.":"Requires a completed questionnaire to see results and your personalized risk":"your personalized risk page",s="/crohn-risk",i=n==="white"?"/personalized-white.png":"/personalized.png";break;default:a="",s="#",i=""}return e.jsxs(m,{sx:{textAlign:"center",padding:"0px",maxWidth:"246px",minHeight:"301px",boxShadow:"0px 3px 12px rgba(112, 112, 112, 0.3)",border:"0px solid transparent",borderRadius:"12px",backgroundColor:n==="white"?"#ffffff":"inherit"},children:[e.jsx(l,{variant:"h6",sx:{backgroundColor:n==="white"?"#D3D3D3":"#A0D5EA",color:n==="white"?"#919191":"#085C7C",padding:"5.5px 26px 5.9px 27px",borderRadius:"0px",mb:2,fontSize:"22px",fontWeight:"700",marginBottom:"35px",lineHeight:"1.2em",minHeight:"70px",display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap"},children:o}),e.jsx(C,{sx:{padding:"0px"},children:e.jsxs(d,{sx:{marginTop:"20px",textAlign:"center",paddingTop:"0px",padding:"0px 26px 0px 27px"},children:[e.jsx("img",{src:i,alt:o,style:{width:c,height:h,marginBottom:"20px"}}),e.jsxs(l,{sx:{fontSize:n==="white"?"15px":"18px",fontWeight:"700",color:n==="white"?"#797979":"#597D0B"},children:[a&&e.jsx("a",{href:s,style:{textDecoration:"none",color:n==="white"?"#797979":"#597D0B"},children:n==="white"?"":a})," ",e.jsx(l,{component:"span",sx:{fontSize:n==="white"?"15px":"19px",fontWeight:"400",color:"#797979"},children:x})]})]})})]})},V=({Percentage:o,FromDisabled:t})=>{const r=D(),n=v(),a=()=>{console.log("onclick on button take qstnr"),r(I(0)),n("/general-information")};return e.jsxs(m,{sx:{backgroundColor:"#ffffff",maxWidth:"428px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",borderRadius:"12px",textAlign:"center",padding:"0px"},children:[e.jsx(l,{variant:"h6",sx:{backgroundColor:"#117BA3",color:"#ffffff",padding:"8px",borderRadius:"0px",fontSize:"22px",fontWeight:"700"},children:"Questionnaire status"}),e.jsxs(C,{sx:{padding:"58px 70px 32px 70px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[e.jsx(T,{variant:"contained",sx:{backgroundColor:"#80AD03",lineHeight:"23px",color:"#ffffff",fontSize:"20px",fontWeight:600,borderRadius:"24px",padding:"5px 73px 8px 73px",marginTop:"0px",height:"65px",marginBottom:"70px",textTransform:"capitalize","&:disabled":{backgroundColor:"#c2c2c2"},"&:hover":{backgroundColor:"#709a02"}},disabled:t,onClick:a,children:"Take the questionnaire"}),e.jsx(d,{sx:{width:"271px",backgroundColor:"#FCE7A0",borderRadius:"13px",height:"16px",marginTop:"10px",border:"1px solid #71B7D1"},children:e.jsx(d,{sx:{width:`${o}%`,backgroundColor:"#085C7C",height:"100%",borderRadius:"13px"}})}),e.jsxs(l,{mt:2,sx:{color:"#085C7C"},children:["You've completed"," ",e.jsxs(l,{component:"span",sx:{fontWeight:"bold"},children:[o,"%"]})," ","so far"]})]})]})},G=({date:o,phase:t,role:r})=>{const[n,a]=p.useState("");return p.useEffect(()=>{if(o===null){a("Invalid Date");return}if(o&&o!==null){let s=new Date(o);console.log("role",r),console.log("phase",t),r==="2"&&(t===0||t===1?(console.log("in first phase :",t),s.setDate(s.getDate()+8*7)):s.setMonth(s.getMonth()+6));const x={year:"numeric",month:"long",day:"numeric"},i=s.toLocaleDateString("en-US",x);console.log("formatted:",i),console.log("formatted,",i),a(i)}if(r==="3"){console.log("date",o);let s=new Date(o);s.setMonth(s.getMonth()+6);const x={year:"numeric",month:"long",day:"numeric"},i=s.toLocaleDateString("en-US",x);console.log("formatted,",i),a(i)}},[o]),e.jsxs(m,{sx:{backgroundColor:"#ffffff",borderRadius:"12px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",textAlign:"left",width:"100%",margin:"0 auto",maxWidth:"884px"},children:[e.jsx(d,{sx:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#117BA3",color:"#ffffff",padding:"8px",fontSize:"22px",fontWeight:"700"},children:"Next steps"}),e.jsx(C,{sx:{padding:"22px 45px 40px 45px",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",color:"#085C7C",fontSize:"19px"},children:e.jsxs(d,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:"21px",width:"100%"},children:[e.jsx(l,{fontSize:19,sx:{fontWeight:"700"},children:"Your next questionnaire opens:"}),e.jsx(l,{sx:{backgroundColor:"#FCE7A0",padding:"8px 60px",borderRadius:"13px",border:"1px solid #71B7D1",fontWeight:600,fontSize:"18px",minWidth:"271px",minHeight:"27px",textAlign:"center",height:"40px"},children:n==="Invalid Date"||n===""?"_":n})]})})]})},K=({progression:o,phase:t,role:r})=>e.jsxs(d,{sx:{padding:"80px 240px 70px 250px",display:"flex",justifyContent:"center",gap:"72.5px"},children:[r==="2"?e.jsx(g,{title:"Your personalized risk",type:"Return to",variant:t!==0||t===0&&o===100?"default":"white"}):"",e.jsx(g,{title:"Access information",type:"Learn more"}),e.jsx(g,{title:"Questions?",type:"Contact us"}),r==="2"?"":e.jsx(g,{title:"Your personalized risk",type:"Return to",role:r,variant:o===100&&t===2?"default":"white"})]}),X=M(()=>_(()=>import("./index-k8v-YTab.js").then(o=>o.aJ),__vite__mapDeps([0,1]))),oe=()=>{const o=v(),{profileData:t,loading:r,error:n}=N(),[a,s]=p.useState(!0),[x,i]=p.useState(0),[c,h]=p.useState(),[f,E]=p.useState("BASELINE"),[b,B]=p.useState();return D(),p.useEffect(()=>{var j,y;if(n&&o("/login"),t&&t.role===1&&o("/dashboard"),t)switch(console.log("profileData:",t),s((t==null?void 0:t.state)!=="0"),B(t==null?void 0:t.role),i(t==null?void 0:t.completionPercentage),E(t==null?void 0:t.phase),t==null?void 0:t.phase){case 0:if(t.state==="0"){console.log("zabi one");break}else h((j=t==null?void 0:t.forms[0])==null?void 0:j.submit_date);default:h((y=t==null?void 0:t.forms[0])==null?void 0:y.submit_date);break}},[n,t]),r?e.jsx(X,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title-content",children:[e.jsx(L,{children:e.jsx("title",{children:"My PRE-Crohn’s study"})}),e.jsx("h1",{children:"My PRE-Crohn’s study"})]}),e.jsxs(q,{sx:{width:"100%",height:"100%",margin:"0px !important",backgroundColor:"#fff",borderRadius:"8px",boxSizing:"border-box",maxWidth:"none !important",padding:"0px !important",paddingBottom:"100px !important"},children:[e.jsxs(d,{sx:{display:"flex",alignItems:"center",width:"100%",mb:4},children:[e.jsx(d,{sx:{height:"11px",backgroundColor:"#A0D5EA",width:"259px",minWidth:"259px",marginRight:"24px"}}),e.jsx(d,{sx:{width:"259px"},children:e.jsx(l,{variant:"h5",fontWeight:"bold",sx:{color:"#085C7C",textAlign:"left"},children:"MY QUESTIONNAIRE"})}),e.jsx(d,{sx:{height:"11px",backgroundColor:"#A0D5EA",flex:1,marginLeft:"17px"}})]}),e.jsxs(d,{sx:{padding:"40px 0px 40px 0px",background:"#f4f9fd"},children:[e.jsxs(d,{sx:{display:"flex",flexDirection:"row",gap:"40px",marginBottom:"40px",paddingRight:"200px",paddingLeft:"200px",justifyContent:"center"},children:[e.jsx(V,{Percentage:x,FromDisabled:a}),e.jsxs(m,{sx:{backgroundColor:"#ffffff",maxWidth:"428px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",borderRadius:"12px",textAlign:"center",padding:"0px"},children:[e.jsx(d,{sx:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#117BA3",color:"#ffffff",padding:"8px",fontSize:"22px",fontWeight:"700"},children:"Participation status"}),e.jsxs(C,{sx:{padding:"22px 0px 40px 45px",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",color:"#085C7C",fontSize:"19px",textAlign:"left"},children:[e.jsx(l,{fontSize:19,sx:{paddingRight:"45px"},children:"Questionnaires + blood and stool samples are done 3 times, at:"}),e.jsxs("ul",{style:{marginTop:"10px",paddingLeft:"20px",color:"#085C7C",textAlign:"left"},children:[e.jsx("li",{children:"Baseline/When you join"}),e.jsx("li",{children:"8-week visit"}),e.jsx("li",{children:"6-month visit"})]}),e.jsxs(l,{mt:2,fontWeight:"bold",fontSize:19,sx:{marginTop:"32px",display:"flex",flexDirection:"row",alignItems:"center"},children:["Your status:",e.jsx(l,{component:"span",sx:{backgroundColor:"#FCE7A0",padding:"8px 60px",borderRadius:"13px",border:"1px solid #71B7D1",fontWeight:600,marginLeft:"9px",fontSize:"18px",display:"flex",height:"40px"},children:f===0||f===1?"BASELINE":f===2?"PHASE TWO":f===3?"PHASE THREE":""})]})]})]})]}),e.jsx(l,{fontSize:19,sx:{textAlign:"center",marginBottom:"40px"},children:"Payments will be sent after each visit (after sample collection & questionnaire completion)."}),e.jsx(G,{date:c,phase:f,role:b})]}),e.jsx(K,{progression:x,phase:f,role:b}),e.jsxs(d,{sx:{padding:"0px 255px 0px 300px",textAlign:"left",maxWidth:"1435px"},children:[e.jsx(l,{variant:"h2",fontWeight:"bold",color:"#0078b5",mb:2,fontSize:36,sx:{fontWeight:"700"},children:"Thanks for your participation!"}),e.jsx(l,{variant:"body1",mb:2,fontSize:19,sx:{marginTop:"27px",marginBottom:"63px"},children:"With your help, the Personal Risk Estimation for Crohn's Disease (PRE-Crohn's) study is learning how education about Crohn's risk impacts diet, behaviors, and Crohn's biomarkers (a marker in the blood or other tissue in people who have or are at risk for Crohn's)."}),e.jsx(l,{variant:"body1",fontWeight:"600",fontSize:21,children:"This study, with your help, aims to gain insight into whether it's possible to prevent Crohn's disease in people who are at risk."})]})]})]})};export{oe as default};
//# sourceMappingURL=ParticipantDashboard-Dn78CpWB.js.map
