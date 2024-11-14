import{r as w,w as ue,j as e,T as O,n as j,X as I,B as M,P as D,Y as ee,u as xe,o as he,Z as ve,$ as ke,S as Ce,a0 as Fe,a1 as Y,a2 as Z,p as ce,a3 as we,v as Te,H as qe}from"./index-CZCi8_lK.js";import{F as E,a as N,T as de}from"./TextField-B-qmQ5jv.js";import{R as G,a as A}from"./RadioGroup-D8zOY0RZ.js";import{F as $}from"./FormControlLabel-Dw-DhQkK.js";import{T as se,a as te,b as ne,c as _,d as b,e as re}from"./TableRow-BIraJTu1.js";import{C as $e}from"./Checkbox-CUrsDD44.js";import{C as me}from"./Container-3yni4-w9.js";import"./SwitchBase-jup12wBb.js";const Re=()=>{const[F,o]=w.useState(null),[a,n]=w.useState(!1),[g,x]=w.useState(null);return{createForm:async l=>{n(!0),x(null),o(null);try{const d=await ue.post("https://precrohn-api-production.up.railway.app/api/form",{form_data:l},{headers:{Authorization:`${localStorage.getItem("token")}`,"Content-Type":"application/json"}});return o(d.data),d.data}catch(d){x(d.response?d.response.status:d.message)}finally{n(!1)}},response:F,loading:a,error:g}},Ee=()=>{const[F,o]=w.useState(null),[a,n]=w.useState(!1),[g,x]=w.useState(null);return{FinishForm:async l=>{n(!0),x(null),o(null);try{const d=await ue.post("https://precrohn-api-production.up.railway.app/api/form/finish",{form_data:l},{headers:{Authorization:`${localStorage.getItem("token")}`,"Content-Type":"application/json"}});return o(d.data),d.data}catch(d){x(d.response?d.response.status:d.message)}finally{n(!1)}},response:F,loading:a,error:g}},K={"& .MuiRadio-root":{color:"white"},"& .MuiRadio-root.Mui-checked":{color:"white"},"& .MuiRadio-root .MuiSvgIcon-root":{backgroundColor:"white",borderRadius:"50%"}},Ne={"& .MuiCheckbox-root":{color:"white"},"& .MuiCheckbox-root.Mui-checked":{color:"white"},"& .MuiCheckbox-root .MuiSvgIcon-root":{backgroundColor:"white"}},pe=(F,o,a,n)=>{const g=x=>!n[x]&&n.hasOwnProperty(x);switch(F){case"H2":return e.jsx(O,{variant:"h2",children:o});case"Text":return Array.isArray(o)?o.map((t,r)=>e.jsx(O,{variant:"body1",children:ee(t)},r)):e.jsx(O,{variant:"body1",children:ee(o)});case"radio":const[x,...S]=o;return e.jsxs(E,{component:"fieldset",children:[e.jsx(N,{component:"legend",children:x}),e.jsx(G,{name:x,onChange:a,value:n[x]||"",children:S.map((t,r)=>e.jsx($,{value:r.toString(),control:e.jsx(A,{sx:{...K,...g(x)?{border:"2px solid red"}:{}}}),label:t},r))})]});case"checkbox":const[l,...d]=o;return e.jsxs(E,{component:"fieldset",children:[e.jsx(N,{component:"legend",children:l}),d.map((t,r)=>e.jsx($,{control:e.jsx($e,{sx:{...Ne,...g(l)?{border:"2px solid red"}:{}},name:l,value:t,checked:(n[l]||[]).includes(t),onChange:a}),label:t},r))]});case"checkboxKey":const[L,...T]=o;return e.jsxs(E,{component:"fieldset",children:[e.jsx(N,{component:"legend",children:L}),T.map((t,r)=>e.jsxs(j,{sx:{mb:2},children:[e.jsx(O,{variant:"body1",children:t.label}),e.jsx(G,{name:`${L}_${t.label}`,onChange:a,value:n[`${L}_${t.label}`]||"",children:t.options.map((m,s)=>e.jsx($,{value:s.toString(),control:e.jsx(A,{sx:K}),label:m},s))})]},r))]});case"input":return e.jsxs(E,{children:[e.jsx(N,{component:"legend",children:o}),e.jsx("input",{variant:"outlined",sx:{bgcolor:"white",...g(o)?{border:"2px solid red"}:{}},name:o,value:n[o]||"",onChange:a,label:o})]});case"inputKey":return e.jsx(E,{children:o.map((t,r)=>e.jsxs(j,{sx:{mb:2,height:"44px"},children:[e.jsx(N,{children:t.label}),e.jsx(de,{variant:"outlined",sx:{bgcolor:"white",height:"41px",...g(t.label)?{border:"2px solid red"}:{}},name:t.label,value:n[t.label]||"",onChange:a})]},r))});case"ladderRadio":{const[t,r]=o;return e.jsxs(E,{className:"not-required",component:"fieldset",sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"45px"},children:[e.jsx(N,{component:"legend",sx:{mb:2,textAlign:"left"},children:t}),e.jsxs(j,{sx:{display:"flex",alignItems:"flex-start"},children:[e.jsx(j,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",mr:2},children:r.map((m,s)=>e.jsx(O,{sx:{height:"40px",display:"flex",alignItems:"center"},children:r.length-1-s},s))}),e.jsx(G,{name:t,onChange:a,value:n[t]||"",sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"435px"},children:r.map((m,s)=>e.jsx($,{value:(r.length-1-s).toString(),control:e.jsx(A,{sx:{...K,...g(t)?{border:"2px solid red"}:{}}}),label:"",sx:{display:"flex",justifyContent:"center",height:"38px"}},s))}),e.jsx(j,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",ml:2,height:"435px",justifyContent:"space-between"},children:r.map((m,s)=>e.jsx(O,{sx:{height:"36px",display:"flex",alignItems:"center"},children:m},s))})]})]})}case"recreationalActivityTable":{const{activities:t,weightTrainingActivities:r,timeRanges:m}=o;return e.jsx(j,{children:e.jsx(se,{component:D,children:e.jsxs(te,{children:[e.jsx(ne,{children:e.jsxs(_,{children:[e.jsx(b,{children:"Activity"}),m.map((s,p)=>e.jsx(b,{sx:{lineHeight:"19px"},children:s},p))]})}),e.jsxs(re,{className:"radio-table",children:[t.map((s,p)=>e.jsxs(_,{children:[e.jsx(b,{children:s}),m.map((k,h)=>e.jsx(b,{children:e.jsx($,{control:e.jsx(A,{name:s,value:h.toString(),checked:n[s]===h.toString(),onChange:y=>a({target:{name:s,value:y.target.value}})})})},h))]},p)),e.jsx(_,{children:e.jsx(b,{colSpan:11,children:e.jsx(O,{variant:"h6",children:"Weight training or resistance exercises (e.g., free weights or machines)"})})}),r.map((s,p)=>e.jsxs(_,{children:[e.jsx(b,{children:s}),m.map((k,h)=>e.jsx(b,{children:e.jsx($,{control:e.jsx(A,{name:s,value:h.toString(),checked:n[s]===h.toString(),onChange:y=>a({target:{name:s,value:y.target.value}})})})},h))]},p))]})]})})})}case"HTMLTEXT":return e.jsx(j,{children:ee(o)});case"dairyFoodsTable":{const{foods:t,timeRangesFood:r,title:m}=o;return e.jsx(j,{children:e.jsx(se,{component:D,children:e.jsxs(te,{children:[e.jsx(ne,{children:e.jsxs(_,{children:[e.jsx(b,{children:m}),r.map((s,p)=>e.jsx(b,{sx:{lineHeight:"19px"},children:s},p))]})}),e.jsx(re,{className:"radio-table",children:t.map((s,p)=>e.jsxs(_,{children:[e.jsx(b,{children:s}),r.map((k,h)=>e.jsx(b,{children:e.jsx($,{control:e.jsx(A,{name:s,value:h.toString(),checked:n[s]===h.toString(),onChange:y=>a({target:{name:s,value:y.target.value}})})})},h))]},p))})]})})})}case"FoodsTableTwo":{const{foodsTwo:t=[],TwotimeRangesFood:r=[],titleTwo:m=""}=o||{};return e.jsx(j,{children:e.jsx(se,{component:D,children:e.jsxs(te,{children:[e.jsx(ne,{children:e.jsxs(_,{children:[e.jsx(b,{children:m}),e.jsx(b,{}),r.map((s,p)=>e.jsx(b,{sx:{lineHeight:"19px"},children:s},p))]})}),e.jsx(re,{className:"radio-table-two",children:t.map((s,p)=>e.jsxs(_,{children:[e.jsx(b,{children:s[0]}),e.jsx(b,{children:s[1]}),r.map((k,h)=>e.jsx(b,{children:e.jsx($,{control:e.jsx(A,{name:`${s[0]}_${s[1]}`,value:h.toString(),checked:n[`${s[0]}_${s[1]}`]===h.toString(),onChange:y=>a({target:{name:`${s[0]}_${s[1]}`,value:y.target.value}})})})},h))]},p))})]})})})}case"radioButtonWithData":{const[t,...r]=o,m=n[t]||"";return e.jsxs(E,{component:"fieldset",children:[e.jsx(N,{component:"legend",children:t}),e.jsx(G,{name:t,onChange:a,value:m,children:r.map((s,p)=>{const[k,...h]=s;return e.jsxs(j,{children:[e.jsx($,{value:k,control:e.jsx(A,{sx:K}),label:k}),m===k&&h.length>0&&e.jsx(j,{sx:{pl:4},children:h.map((y,z)=>{const[W,Q]=Object.entries(y)[0];return e.jsx(j,{sx:{mt:2},children:pe(W,Q,a,n)},z)})})]},p)})})]})}case"button":{const[t,r]=o;return e.jsx(M,{variant:"contained",href:r,sx:{my:2,width:"fit-content",padding:"8px 16px"},target:"_blank",children:t})}case"radioFemale":if((I(t=>{var r,m,s;return(s=(m=(r=t.questionnaire)==null?void 0:r.data)==null?void 0:m["general-information"])==null?void 0:s["What is your sex assigned at birth?"]})||"")==="1"){const[t,...r]=o;return e.jsxs(E,{component:"fieldset",children:[e.jsx(N,{component:"legend",children:t}),e.jsx(G,{name:t,onChange:a,value:n[t]||"",children:r.map((m,s)=>e.jsx($,{value:s.toString(),control:e.jsx(A,{sx:K}),label:m},s))})]})}else return null;case"RecuresiveQuestion":{const{inpute:t,recursiveContent:r,title:m}=o,s=parseInt(n[t.key]||"0",10),p=k=>{const{name:h,value:y}=k.target;parseInt(y,10)<=t.max&&a(k)};return e.jsxs(j,{children:[e.jsxs(E,{children:[e.jsx(N,{children:t.label}),e.jsx(de,{type:"number",variant:"outlined",sx:{bgcolor:"white"},name:t.key,value:s,onChange:p,inputProps:{min:0,max:t.max}}),s>0&&e.jsx(O,{variant:"p",sx:{mt:1,color:"gray",fontSize:"14px"},children:"Which family members have been diagnosed with Crohn’s disease, ulcerative colitis, or IBD-unclassified? (Select all that apply.)"})]}),Array.from({length:s}).map((k,h)=>e.jsx(j,{sx:{mt:4,p:2,border:"1px solid #ccc",borderRadius:"8px"},children:r.map((y,z)=>e.jsx(j,{sx:{mt:2},children:e.jsxs(E,{component:"fieldset",children:[e.jsx(N,{component:"legend",children:y.label.replace("index",`${h+1}`)}),e.jsx(G,{name:`${t.key}_${h}_${y.label}`,value:n[`${t.key}_${h}_${y.label}`]||"",onChange:a,children:y.options.map((W,Q)=>e.jsx($,{value:Q.toString(),control:e.jsx(A,{sx:K}),label:W},Q))})]})},z))},h))]})}default:return e.jsx(O,{variant:"body1",children:o})}},Ae=({section:F,log:o,handleChange:a,formData:n})=>e.jsx(j,{component:"section",sx:{my:4,display:"flex",flexDirection:"column"},children:Object.entries(F).map(([g,x],S)=>e.jsx(ke.Fragment,{children:pe(g,x,a,n)},S))}),Le=({data:F,log:o,type:a})=>{const[n,g]=w.useState({}),x=xe(),S=he(),l=I(u=>u.questionnaire.currentSectionIndex),d=I(u=>u.questionnaire.sectionTags),L=I(u=>u.questionnaire.data[d[l]]||{}),T=I(u=>u.questionnaire.data),[R,t]=w.useState(!1),{createForm:r,response:m,loading:s,error:p}=Re(),{FinishForm:k,response:h,loading:y,error:z}=Ee();w.useEffect(()=>{Object.keys(L).length>0&&g(L)},[l,L]),w.useEffect(()=>{console.log("error:",p),p&&(p===500||p===403)&&x("/login")},[p]);const W=u=>{const{name:C,value:P,type:X,checked:B}=u.target;g(V=>{if(X==="checkbox"){const U=V[C]||[];return B?{...V,[C]:[...U,P]}:{...V,[C]:U.filter(J=>J!==P)}}else return{...V,[C]:P}})},Q=()=>{var ae,le;const u=document.getElementById("form"),C=u.querySelectorAll("input, select, textarea"),P=new Set,X=new Set;let B=!0;C.forEach(i=>{i.classList.remove("error-field");const f=i.closest("fieldset"),c=f==null?void 0:f.querySelector("legend");c&&c.classList.remove("error-field")});for(const i of C){const f=i.closest("fieldset"),c=i.name||i.id||"Unnamed Field";if(i.type==="checkbox")if(i.checked)X.add(i.name);else{const v=f==null?void 0:f.querySelector("legend");v&&v.classList.add("error-field")}else if(i.type==="radio")i.checked&&P.add(i.name);else if(i.type==="text"){if(!i.value.trim()){console.log(`Text field "${c}" is empty!`),i.classList.add("error-field");const q=i.closest(".MuiFormControl-root"),H=q==null?void 0:q.querySelector("legend");H&&H.textContent.includes("How old are you?")&&H.classList.add("error-field"),console.log("false 1 "),B=!1}}else if(!i.value.trim()){console.log(`Field "${c}" is empty!`),i.classList.add("error-field");const q=f==null?void 0:f.querySelector("legend");q&&q.classList.add("error-field"),console.log("false 2 "),B=!1}}const V=u.querySelectorAll('input[type="radio"]'),U=new Set(Array.from(V).map(i=>i.name));for(const i of U)if(!P.has(i)){const c=(ae=u.querySelectorAll(`input[name="${i}"]`)[0])==null?void 0:ae.closest("fieldset"),v=c==null?void 0:c.querySelector("legend");v&&v.classList.add("error-field"),console.log("groupElements:",c),console.log("false 3 ");const q=c==null?void 0:c.classList.contains("not-required");if(console.log("isFieldsetNotRequired",q),q)continue;B=!1}const J=u.querySelectorAll('input[type="checkbox"]'),Se=new Set(Array.from(J).map(i=>i.name));for(const i of Se)if(!X.has(i)){const c=(le=u.querySelectorAll(`input[name="${i}"]`)[0])==null?void 0:le.closest("fieldset"),v=c==null?void 0:c.querySelector("legend");v&&v.classList.add("error-field"),console.log("false 4 "),B=!1}const oe=document.querySelector(".radio-table");oe&&oe.querySelectorAll("tr").forEach(f=>{const c=f.querySelector("td");c&&c.classList.remove("error-field");const v=f.querySelectorAll('input[type="radio"]');!Array.from(v).some(H=>H.checked)&&c&&c.classList.add("error-field")});const ie=document.querySelector(".radio-table-two");return ie&&ie.querySelectorAll("tr").forEach(f=>{const c=f.querySelectorAll("td")[1];c&&c.classList.remove("error-field");const v=f.querySelectorAll('input[type="radio"]');!Array.from(v).some(H=>H.checked)&&c&&(c.classList.add("error-field"),console.log("false 5 "),B=!1)}),B},ge=async()=>{S(Ce({data:Fe})),location.reload()},fe=async()=>{t(!0);try{const u={...T,[d[l]]:n},C=await r(u);if(C!=null&&C.success)S(Y({currentSectionIndex:l,data:n})),Z.success("Form has been saved Questionnaire!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});else throw new Error("Failed to save form data")}catch{Z.error("Error saving the Questionnaire. Please try again!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}finally{t(!1)}},je=()=>{if(!Q()){Z.error("Please fill out all fields.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});return}S(Y({currentSectionIndex:l,data:n}));const u={...T,[d[l]]:n};r(u),l<d.length-1&&(S(ce(l+1)),g({}),x(`/${d[l+1]}`))},ye=()=>{if(!Q()){Z.error("Please fill out all fields.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});return}const u={...T,[d[l]]:n};k(u),S(Y({currentSectionIndex:l,data:n})),x("/optional-survey")},be=()=>{if(l>0){S(Y({currentSectionIndex:l,data:n})),S(ce(l-1));const u={...T,[d[l]]:n};r(u),x(`/${d[l-1]}`)}};return e.jsxs(me,{children:[e.jsx(ve,{}),a==="fixe"?e.jsx("div",{className:"bigger-container",children:e.jsx(M,{variant:"contained",onClick:()=>x("/crohns-disease-information"),className:"button-survey bigger",children:"Continue to Crohn’s disease information"})}):"",e.jsxs("form",{id:"form",children:[F.map((u,C)=>e.jsx(Ae,{section:u,log:o,handleChange:W,formData:n},C)),a==="fixe"?e.jsx("div",{className:"bigger-container",children:e.jsx(M,{variant:"contained",onClick:()=>x("/crohns-disease-information"),className:"button-survey bigger",children:"Continue to Crohn’s disease information"})}):e.jsxs(j,{sx:{display:"flex",justifyContent:"space-between",mt:4},children:[e.jsx(M,{className:"button-survey",variant:"contained",onClick:be,disabled:l===0,children:"Back"}),e.jsx(M,{variant:"contained",className:"button-survey",color:"primary",onClick:fe,disabled:R,children:R?"Saving...":"Save"}),l<d.length-1?e.jsx(e.Fragment,{children:e.jsx(M,{className:"button-survey",variant:"contained",onClick:je,children:"Next"})}):e.jsx(M,{className:"button-survey",variant:"contained",onClick:ye,children:"Finish"})]}),a==="fixe"?"":e.jsx(j,{sx:{display:"flex",justifyContent:"center",mt:4},children:e.jsx(M,{className:"button-survey",variant:"contained",onClick:ge,children:"Fill"})})]})]})},Ve=({title:F,Data:o,type:a})=>{const n=xe();he();const g=I(R=>R.questionnaire.currentSectionIndex),x=I(R=>R.questionnaire.sectionTags),{sectionTag:S}=we(),{loading:l,error:d,success:L,userRole:T}=Te();return w.useEffect(()=>{console.log("state:",T.state),T.state==="1"&&T.role!=="1"&&a!=="fixe"&&n("/profile?role="+T.role)},[L]),w.useEffect(()=>{const R=x[g];S!==R&&a!=="fixe"&&n(`/${R}`)},[S,g,x,n]),e.jsxs(e.Fragment,{children:[e.jsx(qe,{children:e.jsx("title",{children:"My PRE-Crohn’s Survey"})}),F?e.jsx("div",{className:"title-content",children:e.jsx("h1",{children:F})}):"",e.jsx(me,{className:"my-4 qstn-body",children:e.jsx("div",{className:"",children:e.jsx(Le,{data:o,log:!0,type:a})})})]})};export{Ve as default};
